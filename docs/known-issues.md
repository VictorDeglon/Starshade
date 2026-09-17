# Bugs found during review

## Fixed

### 1. Critical — every page load of `game.html` threw a SyntaxError

`game.html` statically included `level1.js` *and* `level2.js` as permanent
`<script>` tags, but both files declare top-level `const`/`let` bindings
(`platforms`, `checkpoints`, `levelText`, etc.) using the **same names**.
Classic `<script>` tags on one page share a single global lexical scope, so
the second file's declarations threw `SyntaxError: Identifier 'levelText'
has already been declared` — a parse-time error that aborts the *entire*
script, not just the conflicting line. That meant `level2.js`'s data never
actually loaded; the game only appeared to work because `game.js`'s own
`loadLevel()` mechanism (which injects exactly one level script at a time)
happened to load `level1.js` successfully before the static tags ran.
**Fix:** removed the static `<script src="level1.js">`/`level2.js"` tags
from `game.html` — `loadLevel()` was already the correct, and only
necessary, mechanism. See
[architecture.md](architecture.md#level-loading--the-one-thing-to-know-before-touching-gamejs).

### 2. Solid-platform collision could be tunneled through at high speed

The landing check required the player's bottom edge to land *inside* a
platform's vertical thickness after moving one frame — fine most of the
time, but a long enough fall (or, before the fix below, any fast movement)
could clear a thin platform's thickness within a single frame and never
register as "inside" it. Same issue existed for side/wall collisions,
which additionally used a hardcoded 5px detection band (equal to the
player's exact per-frame horizontal speed, so it needed near-perfect pixel
alignment to trigger at all). **Fix:** rewrote collision as a crossing test
per axis (`resolveAxis()` in `game.js`) — checks whether the relevant edge
started on one side of the platform's edge and ended on the other,
independent of step size.

### 3. Jumping into a platform from below just passed through it

Only the "landing on top" direction was ever checked; there was no
collision at all for hitting a platform's underside while moving upward.
**Fix:** the same `resolveAxis()` rewrite (#2) handles both directions of
each axis symmetrically, so ceilings are now solid.

### 4. A couple of pixels of visual overlap between the player and everything else

Platforms and the player were drawn with a *centered* 3px stroke — that
draws 1.5px outside the fill on every side, so even though the collision
boundary was pixel-exact, visually the player looked like it sank slightly
into whatever it touched. **Fix:** strokes are now inset by half their
width (`drawInsetRect()` in `game.js`) so the *outer* edge of the stroke
lands exactly on the collision boundary.

### 5. Holding the jump key auto-consumed the double jump

`keydown` fires repeatedly (with `e.repeat: true`) while a key is held,
and the double-jump check didn't distinguish that from a second, deliberate
press — just holding Space down triggered the double jump automatically a
fraction of a second after leaving the ground. **Fix:** `keydown` now
returns early on `e.repeat`.

### 6. No "you win" screen — finishing the game left a frozen blank canvas

`loadLevel(currentLevel).then(() => gameLoop())` had no `.catch()`. Once a
player reached the final checkpoint of the last level, `localStorage` would
point at a `levelN.js` that doesn't exist, the load would 404, and the
unhandled rejection would just... stop everything, silently. **Fix:** added
a `.catch()` that shows a "You beat Starshade!" screen with a button back
to the main menu.

### 7. The "Levels" main-menu button did nothing

`script.js`'s click handler for that button called `startMusic()` but had
its navigation line commented out — clicking it just played music. It also
was mislabeled: the page it was supposed to link to (`skins.html`) is a
cosmetic skin gallery, not a level select. **Fix:** renamed the button
"Skins" and uncommented the navigation.

### 8. `contact.html` and `skins.html` were dead ends

Neither page had a "Back to Menu" button, and nothing on the main menu
linked to `contact.html` at all — the only ways to reach or leave it were
typing the URL directly or using the browser's back button. **Fix:** added
a Contact button to the main menu, and a themed Back button to
`skins.html` (`skins.js` was already present but empty and unused — it now
also drives the skin carousel, see below).

### 9. Settings volume sliders didn't do anything

`settings.js` only had the Back button's click handler; the two volume
sliders had no event listeners and nothing ever read their values. **Fix:**
sliders now persist to `localStorage` (`soundVolume`, `musicVolume`) and
restore on page load; both music players (`script.js` on the main menu,
`game.js` in-game) read `musicVolume` and apply it.

### 10. Missing skin images rendered as broken/blank tiles

`skins.html` referenced `skin1.jpg` through `skin6.jpg`, none of which
exist anywhere in the project. **Fix:** rebuilt the whole page as a
carousel (`skins.js`/`skins.css`) that renders those six skins as CSS
gradient "orbs" with a themed glow instead of `<img>` tags pointed at
missing files — see [assets.md](assets.md).

### 11. Level transitions reloaded the whole page, cutting the music

Advancing to the next level called `window.location.reload()` — which
worked, but destroyed and recreated the `Audio` element every time,
killing the music (and, per browser autoplay rules, requiring a fresh
click/keypress before it would resume). **Fix:** converted every
`levelN.js` from `const`/`let` declarations to `window.x = ...`
assignments specifically so `loadLevel()` can be called again, in-page,
any number of times without the redeclaration `SyntaxError` from fix #1 —
see [architecture.md](architecture.md). Level transitions are now a
fade-out → load → fade-in sequence with no reload at all, so the same
`Audio` object just keeps playing.

### 12. Three checkpoints could respawn the player into an unrecoverable loop

Checkpoints just mark an (x, y) point — nothing ever verified that
`resetPlayer()` landing there was actually safe. Found via a static
physics audit (`.claude/audit-checkpoints.js`, simulates the exact
respawn + fall behavior for every checkpoint in every level):
- Level 2's checkpoint at (1150, 270) respawned the player directly into
  a spike positioned right at that height.
- Level 7's checkpoint at (2900, 130) and level 11's at (2700, 90) both
  sat in a horizontal gap with no platform underneath — respawning there
  just fell forever off the bottom of the world, which would then
  respawn at the same checkpoint again: an eternal death loop, exactly as
  it sounds. **Fix:** moved each to the nearest safe ledge. All 12
  levels now pass the audit with zero issues, including after the level
  1 rework and every level's Act 2 extension below.

### 13. A thin obstacle in level 1 was mathematically impossible to clear normally

A 20px-wide, 150-tall freestanding "wall" (narrower than the player) sat
just 50px past a platform. A plain running jump can't clear it — height
only builds up over time, and 50px of travel (10 frames) isn't enough
time to gain the ~250px of height needed, regardless of the wall's exact
dimensions; the *only* technique that could possibly work is jumping
mostly straight up right at the edge and drifting over afterward, which
isn't telegraphed anywhere and isn't how the rest of the game plays.
**Fix:** replaced it with an ordinary three-platform staircase, each hop
verified via `.claude/audit-gaps.js`.

### 14. Levels 1-2 were harder than several of the levels after them

There was no actual difficulty curve — levels 3-12 were designed in an
earlier pass without being checked against 1-2's difficulty, and ended up
easier in places. **Fix:** all 12 levels were rewritten from scratch (not
just extended) for a genuine escalating curve — gentle single-jump-only
tutorial at 1-2, moving platforms introduced at 3 and growing steadily
faster/more numerous through 12, hazard density and gap difficulty rising
throughout. Every level has a distinct visual identity (a rollercoaster
fall level, a moving-pillar precision level, a maze level, etc.) rather
than reusing the same shape repeatedly. See the level table in
[gameplay.md](gameplay.md#the-25-levels--a-deliberate-difficulty-curve)
(levels 1-12 at the time; 13-25 were added later — see that section).

### 15. The canvas could get stuck at 0×0 and never recover

`canvas.width`/`canvas.height` were set once from `window.innerWidth`/
`innerHeight` at script load, with nothing watching for a resize — so a
page that started with `window.innerWidth === 0` (observed in one
environment where the viewport hadn't finished laying out yet at the
moment `game.js` ran) stayed at 0×0 forever, rendering nothing, even once
the window reported a real size a moment later. It also meant an actual
browser window resize was silently ignored the whole game. **Fix:** wrapped
the sizing in `resizeCanvas()` and added a `window.resize` listener.

### 16. Settings had no way to actually change how the game plays

Sound/music volume were the only settings with any effect; "Graphics
Quality" had nothing in a flat 2D canvas renderer for it to control.
**Fix:** replaced that slot with a real Difficulty setting (Easy/Normal/
Hard) that scales moving-platform speed, checkpoint touch forgiveness, and
coin rewards — see [gameplay.md](gameplay.md#difficulty-setting). Also
added a visible pause button in `game.html` (Escape alone isn't
discoverable) and made "Settings" from the pause menu return to the game
in progress afterward instead of dropping back to the main menu.

## Known, not fixed (out of scope / needs a real decision)

- **The Contact form doesn't submit anywhere.** There's no backend, and the
  `<form>` has no `action` — clicking Submit just reloads the page. Wiring
  this up needs an actual endpoint (a serverless function, a form service,
  a `mailto:`, etc.), which is a product decision, not a bug fix.
- **Screen Resolution and "Mouse Clicks" controls were removed outright**
  rather than left as placeholders, for the same reason the old "Graphics
  Quality" slot was: the canvas always fills the browser window (see
  `resizeCanvas()`), so there's no fixed "resolution" for a picker to
  control, and a physics-platformer's movement isn't sensible to drive with
  a mouse. Their slots on the Settings page now hold two settings that
  actually do something — Screen Shake (on/off) and Click/Tap to Jump
  (on/off) — alongside the already-working volume, Difficulty, controls
  preset, and key rebinding. See
  [gameplay.md](gameplay.md#settings-that-actually-do-something).
- **`assets/sfx/` is empty and level music is single-track.** There are no
  discrete sound effects anywhere in the game (jump/land/death are all
  silent aside from the particle-effect visuals), and
  `futuristicLevel.mp3`/`finalLevel.mp3` exist in `assets/music/` but
  nothing switches to them per level. See [assets.md](assets.md).
- **Fixed — level-select/map screen.** `levels.html`/`levels.js` show all
  12 levels (name, locked/current/completed state, read from the same
  `StarshadeEconomy` game.js writes to) and let you jump straight to any
  unlocked one — clicking a tile just sets `savedLevel` and goes through
  the normal `loading.html` → `game.html` flow, so it's not a separate
  code path from Play. Reachable from the main menu's new "Levels" button
  and from the pause menu's new "Level Map" button.
