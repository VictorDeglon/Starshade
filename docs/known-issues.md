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

## Known, not fixed (out of scope / needs a real decision)

- **The Contact form doesn't submit anywhere.** There's no backend, and the
  `<form>` has no `action` — clicking Submit just reloads the page. Wiring
  this up needs an actual endpoint (a serverless function, a form service,
  a `mailto:`, etc.), which is a product decision, not a bug fix.
- **Most Settings options are still placeholders.** Graphics Quality,
  Controls scheme, Key Bindings, and Screen Resolution render but aren't
  read by any code — only the two volume sliders are wired up (see fix #9
  above). Implementing these means deciding what "Low/Medium/High/Ultra"
  graphics actually changes, building a rebindable input system, etc.
- **`assets/sfx/` is empty and level music is single-track.** There are no
  sound effects anywhere in the game, and `futuristicLevel.mp3`/
  `finalLevel.mp3` exist in `assets/music/` but nothing switches to them
  per level. See [assets.md](assets.md).
