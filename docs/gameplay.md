# Gameplay mechanics (`game.js`)

Everything renders on one full-window `<canvas>` with a manual 2D camera —
there's no game engine/library, just `requestAnimationFrame` and a hand
rolled physics loop.

**The camera follows the player on both axes.** `cameraOffsetX`/
`cameraOffsetY` each ease toward centering the player on their axis
(`cameraSmoothing = 0.12`) rather than snapping instantly. Levels are no
longer confined to a single screen-height band of platform `y` values —
that was only ever true because there was no vertical scroll; now that the
view scrolls to follow the player up and down too, a level is free to use
far more vertical space than one screen (a tall climb, a long drop, etc.),
the same way horizontal levels already sprawl across many screens' worth
of `x`.

## Player & physics

- The player is a 25×25 square, drawn with a purple gradient fill, positioned
  by its **center** (`player.x`, `player.y`) — collision math throughout
  uses `± width/2` / `± height/2` from that center.
- `gravity = 0.5` is added to `player.dy` every frame; horizontal speed is a
  fixed `horizontalSpeed = 5` px/frame (no acceleration/friction).
- Jump: `Space`/`W`/`ArrowUp` sets `player.dy = jumpStrength` (`-12`) when
  grounded (`dy === 0`). Pressing again mid-air performs one double jump
  (`doubleJumpUsed` resets to `false` the instant the player lands on any
  platform). Key-repeat events are ignored (`e.repeat`) so holding the key
  down doesn't auto-consume the double jump.
- A single jump covers **~235px horizontally** at the same height it
  started (more if landing lower, since falling doesn't cap forward
  travel — only *climbing* has a hard limit). A jump plus a well-timed
  double jump covers **~465px** at the same height. Level design keeps
  ascending gaps within a single jump's reach unless a level explicitly
  calls for chaining a double jump (verified by simulating the real
  per-frame physics while writing levels 3-12, not just eyeballed).
- The camera (`cameraOffsetX`/`cameraOffsetY`) eases toward centering the
  player on both axes rather than snapping instantly
  (`cameraSmoothing = 0.12`), and squashes/stretches briefly on jump and
  landing for a bit of weight.

## Collision — solid platforms

`resolveAxis('x')` and `resolveAxis('y')` in `game.js` resolve movement
against `platforms` one axis at a time using a **crossing test**: did the
relevant edge start on one side of the platform's edge and end up on the
other this frame? That's different from (and more robust than) checking
whether the player's post-move position merely *overlaps* the platform,
which is what this used to do and which had two real bugs:

- **Tunneling at high speed.** The old check required the player's bottom
  edge to land *inside* the platform's vertical thickness after moving —
  fine at normal fall speeds, but a big enough `dy` (a long fall) could
  clear a thin platform's thickness in one frame and never register as
  "inside" it at all. The crossing test instead checks whether the old and
  new positions bracket the platform's edge, which catches the hit
  regardless of step size.
- **No ceiling collision.** The old check only ever resolved landing on
  *top* of a platform — jumping up into one from below just passed
  through it. `resolveAxis` handles both directions symmetrically, so the
  underside of a platform is now solid too.

Side (wall) collision had the same tunneling problem, fixed the same way,
and the old version also used a hardcoded 5px detection band for walls
(exactly the player's per-frame horizontal speed, so alignment had to be
nearly exact for it to register at all) — the crossing test replaces that
too.

`deadlyPlatforms` and `spikes` are unchanged — they're simple
overlap-triggered hazards (touch it, respawn at the last checkpoint), not
solid collision, so the tunneling concern doesn't apply the same way.

## Visuals

- Platform/hazard colors are violet-indigo (safe) and crimson-magenta
  (deadly/spikes) — the same purple/blue/pink family as every menu, glow,
  and the nebula background itself, rather than the old plain teal-blue/
  red, which read as an unrelated color family against everything else on
  screen. Solid platforms and deadly platforms also get a tileable SVG
  texture on top of their flat fill (`assets/textures/platform-texture.svg`
  — a faint paneled-plating grid with corner rivets; `hazard-texture.svg`
  — 45° warning stripes), turned into a `ctx.createPattern()` once each
  image loads (`platformTexturePattern`/`hazardTexturePattern` in
  `game.js`) and drawn at reduced opacity over the base color in
  `drawInsetRect()`'s optional `pattern` argument — the flat fill still
  establishes the actual surface color; the pattern only adds detail on
  top of it. Spikes use a canvas gradient instead of an image texture
  (cheap, and always crisp regardless of a spike's actual size, which
  varies per level, unlike a tiled raster pattern).
- Platforms and the player are drawn with `drawInsetRect()` /
  `drawPlayer()`, which draw the stroke **inset** by half its line width
  instead of centered on the shape's edge. A centered 3px stroke draws
  1.5px outside the fill on every side — visually, that made the player
  look like it overlapped whatever it was standing on or against by a
  couple of pixels, even though the underlying collision boundary was
  exact. Insetting the stroke keeps its outer edge exactly on the
  collision boundary.
- Checkpoints idle-pulse (a slow sine wave on their radius) when unreached
  and briefly "pop" larger the moment they're reached. The **last**
  checkpoint in every level is drawn as the Starshade logo itself (the
  same image as the main menu's) inside a slowly-spinning glow ring,
  instead of a plain circle — purple/blue while unreached, tinted green
  (`source-atop` compositing over the logo, in `drawCheckpoints()`) the
  moment it's reached, the same "you're teleporting" color language every
  other checkpoint uses — so the actual goal reads as visually distinct
  from an ordinary checkpoint.
- Missing a jump triggers a short screen shake (`shakeTime`/
  `shakeMagnitude` in `draw()`) plus a small particle burst, in addition
  to respawning at the last checkpoint.
- The player's shape and color come from whichever skin is equipped (see
  [Skins & the coin economy](#skins--the-coin-economy) below), not a
  hardcoded look.

## Background: layered parallax, low altitude to deep cosmos

`drawBackground()` in `game.js` replaces what used to be a plain
`ctx.clearRect()` — it's fully opaque, so it doubles as the frame clear,
drawn before the shake save/restore in `draw()` so the backdrop stays put
while the foreground shakes on death. Every frame it draws, back to front:

1. A full-screen, three-stop vertical gradient (screen-space, not part of
   the scrolling world) — dark overall at every stage, with a vibrant
   purple-magenta band through the middle (`SKY_MID_LOW`/`SKY_MID_HIGH` in
   `game.js`) so it reads as a nebula glowing against mostly-black space
   rather than an evenly-lit sky. Darkest and most saturated at level 1,
   fading toward near-black cosmos by level 25.
2. **Planets** (`drawPlanetLayer()`) — sparse, huge, glowing circles, only
   appearing in the back half of the game.
3. **Stars** (`drawStarLayer()`) — small white dots with a gentle sine
   twinkle, fading in from level ~4 to fully visible by level ~17, biased
   toward the top of each grid cell (see below) so the sky overall reads
   as "stars up top."
4. **Clouds/nebula** (`drawCloudLayer()`) — soft, radial-gradient blobs (a
   mix of near-circles and flatter ovals, randomized per cloud), biased
   toward the *bottom* of each cell — the mirror image of the star bias,
   so clouds read as "low in the sky." HSL rather than a two-color RGB
   lerp, so hue drifts across a genuinely nebula-like band (blue, violet,
   magenta, pink) with real per-cloud variation from level 1 onward,
   gradually warming from cooler blue-violets toward magenta/pink as the
   game progresses — the same shapes doing double duty rather than
   swapping to a different asset partway through.

**Progress, not physics**: `sceneProgress` (0 at level 1, 1 at level 25)
is computed once per level load in `resetLevelState()`, purely from
`currentLevel` — it has nothing to do with a level's actual platform
layout or altitude. Levels change abruptly (a new `currentLevel` the
instant a level loads), but the player only ever sees that change through
the existing fade-to-black transition (`isFading` — see
[architecture.md](architecture.md)), which happens to already cover the
switch: the backdrop is a different theme by the time the screen fades
back in, with no separate cross-fade logic needed.

**Parallax without storing anything**: each layer scrolls at its own
fraction of the real camera movement (`STAR_PARALLAX`/`CLOUD_PARALLAX`/
`PLANET_PARALLAX` — smaller fractions read as farther away, since distant
things appear to move less). Rather than storing star/cloud/planet
positions for a level's whole range (unbounded now that levels can scroll
vertically too — see the camera section above), `forEachVisibleCell()`
divides world space into a fixed-size grid and, for each cell overlapping
the current viewport at that layer's parallax fraction, deterministically
derives that cell's stars from a seeded hash of its coordinates
(`hash01()`). The same cell always produces the same stars, so scrolling
away and back never makes them jump or re-roll, and memory cost is zero
regardless of how far the camera has traveled. The top/bottom bias
mentioned above is applied *within* each cell (skewing where in the cell
a star/cloud lands, not which cell it's in) for the same reason — there's
no single, fixed world-space "top of the sky" to anchor to once the
camera can scroll vertically without limit.

## Neon-themed levels: a wholesale visual reskin

A level opts out of the nebula backdrop above entirely with
`window.levelTheme = "neon"` (currently only level 50, "The Neon Rift" —
see [Named branch levels](#the-100-levels--a-deliberate-difficulty-curve-across-three-chapters)).
`resetLevelState()` reads it into `currentLevelTheme`, reset to `null` on
every `loadLevel()` so a themed level can never leak its look into the
next, ordinary one.

- **`drawBackground()`** branches to `drawNeonBackground()` instead: a
  flat near-black fill (no gradient, no planets/clouds) plus
  `drawStarLayer()` called twice — once at full brightness, once again at
  a smaller cell size and dimmer/smaller stars (`denseVariant`) — for a
  deeper, more crowded "empty night sky" than the ordinary backdrop's
  progress-gated star layer ever shows, entirely independent of
  `sceneProgress`.
- **Platforms, deadly platforms, and spikes** each check
  `currentLevelTheme === "neon"` in their draw function and switch to a
  near-black fill with a bright, saturated stroke *and* a real
  `ctx.shadowBlur` glow (a new optional `glow` argument on
  `drawInsetRect()`) — cyan for solid platforms, magenta-red for deadly
  ones — instead of the violet-indigo/crimson-magenta palette and
  plating/hazard-stripe texture patterns every other level uses. Against a
  pure black backdrop, a shadow blur reads as "lit from within" in a way a
  flat fill never could.
- Ghost/melt/bounce/conveyor platforms and the player keep their normal
  look — their colors (bright yellow, deepening orange, cyan-green, amber)
  already read clearly against black without a reskin, and the player's
  look comes from the equipped skin regardless of level.

This is a code-only reskin (canvas fills/strokes/gradients/shadows), not a
new image asset — the same approach any other level's visuals use, just
with a different palette and a different (simpler) backdrop.

## Particles

`spawnParticles(x, y, count, options)` in `game.js` adds plain objects to
a `particles` array (gravity, velocity, a life counter), updated in
`updateParticles()` and drawn in `drawParticles()`. It's used for:

- **Jump dust** — a small puff under the player's feet on every jump and
  double jump (`spawnJumpDust()`).
- **Landing impact** — a slightly bigger burst the frame the player
  actually lands (transitions from airborne to grounded), not on every
  frame spent standing still.
- **Death shatter** — a 20-particle burst in the equipped skin's color
  plus white/red, in `resetPlayer()`.
- **Checkpoint sparkle** — a green/white burst the moment any checkpoint
  is reached.
- **Skin trails** — skins that declare `trail: true` in `skinsData.js`
  (Comet, Void Walker, Eclipse, Obsidian Wraith, Starshade Prime) spawn a
  faint particle in their own fill color every frame the player is moving
  or airborne, for a continuous motion trail.

## Moving platforms

A platform opts in with `moveAxis: 'x'|'y'`, `moveRange` (px of travel
from its base position), and optionally `moveSpeed` (default `0.03`) and
`movePhase`. `updateMovingPlatforms()` computes a sine-wave offset each
frame (`platformX()`/`platformY()` read it back), and `resolveAxis()` uses
that current position for collision instead of the platform's static
`x`/`y`. First appears in level 2 (a slow, small-range platform used to
introduce the mechanic safely) and recurs with increasing speed/range
through the later levels — the harder generated ones can reach several
px/frame at the steepest point of the sine.

**Carrying a resting player.** `game.js` tracks `riddenPlatform` — the
platform (if any) the player was grounded on last frame — and carries the
player by that platform's `_deltaOffset` proactively, at the very top of
`updatePlayer()`, before gravity/collision run for the new frame. This
used to be handled two different ways depending on axis (an explicit
post-hoc nudge for X-movers; for Y-movers, the belief that
`resolveAxis()`'s own crossing test would keep "re-discovering" the
landing every frame on its own) — the Y case was a real bug: a platform
accelerating downward faster than the resting player's own per-frame
gravity pull can outrun the crossing test entirely (the player's tiny
gravity-only drop never reaches the platform's much-lower new position),
so the test fails to register a landing that frame, the player free-falls
for exactly one frame, and immediately re-lands the next — which read as
the landing squash/dust-burst retriggering in a loop on any reasonably
fast Y-mover. Proactively carrying first (both axes, uniformly) means the
player is already at the platform's current position by the time
collision runs that frame, so the crossing test only has to *confirm*
they're still there — which is also why `resolveAxis()`'s
`landingForgiveness` is sized to the platform's own per-frame delta
(`Math.abs(platformDelta)`), not a fixed couple of px: the old fixed
value was enough for the original 12 hand-authored levels' slower
platforms, but not for the faster ones the generator can produce.

**Deadly platforms can move too.** `deadlyPlatforms` entries accept the
exact same `moveAxis`/`moveRange`/`moveSpeed`/`movePhase` fields as a
moving solid platform — `updateMoverList()` (the function
`updateMovingPlatforms()` now delegates to for both arrays) animates them
identically, and the deadly-overlap check in `updatePlayer()` reads back
`platformX()`/`platformY()` rather than the static `x`/`y` fields, so a
moving decoy actually kills where it's drawn. Levels 26+ use this for
**crisscrossing red decoys**: a red twin spawned alongside some ordinary
moving platforms, oscillating on the opposite axis so their sweeps visibly
cross — the "which one is safe to land on?" trick — see
`.claude/gen-levels.js`'s Pass 3. Always a freestanding hazard next to the
path, never something a gap's base feasibility depends on, and kept clear
of every checkpoint by a safe margin at generation time.

## Bounce pads and conveyors

Two more platform types beyond moving/ghost/melt, introduced starting at
level 26:

- **Bounce pads** (`bounce: true`, optional `bounceStrength`, default
  `BOUNCE_STRENGTH = -18` in `game.js`) launch the player hard on contact
  instead of letting them come to rest — checked right alongside the
  existing `bouncy`-skin-ability landing logic in `updatePlayer()`, using
  the same `incomingDy`-gated "just landed" moment. Drawn cyan-green with
  an upward chevron so the launch direction reads at a glance
  (`drawBouncePlatforms()`). A level's guaranteed path never depends on
  reaching one — they always sit on an already-reachable step, so they only
  ever open up a faster/higher *optional* route, the same way an optional
  ghost platform never gates the base path.
- **Conveyor platforms** (`conveyor: true`, `conveyorSpeed` px/tick) push
  the player horizontally for as long as they're actually standing on one,
  applied right after `resolveAxis('y')` resolves grounding for the frame —
  on top of whatever movement keys are held, not instead of them, so
  walking against one can still (slowly) fight it. Drawn amber with a
  scrolling arrow-stripe pattern in the push direction
  (`drawConveyorPlatforms()`).

Both are decided in the same Pass 2 lottery as moving/ghost/melt in
`.claude/gen-levels.js` (see `bounceShare`/`conveyorShare`), which is also
why that script normalizes the four shares to leave headroom for plain
movers — see the comment on `shareTotal` there.

## World objects (defined per-level in `levelN.js`)

- **`platforms`** — solid rectangles, see collision section above.
  Optionally moving (see above).
- **`deadlyPlatforms`** — visually identical to platforms but drawn red;
  kill on any overlap (`resetPlayer()`), no solid collision, always
  static.
- **`spikes`** — drawn as a triangle (`{x, y, size}`, apex pointing up at
  `size` px above `y`); dying requires the player's bounding box to cross
  the triangle's actual slope, not just its bounding rectangle, so grazing
  a spike's outer corner is forgiving.
- **`checkpoints`** — circles (the last one the Starshade logo, see
  above); touching one within `checkpointRadius` (24px on Normal — see
  [Difficulty setting](#difficulty-setting) below) marks it
  `reached: true` and becomes the respawn point after death. Reaching the
  **last** checkpoint in a level triggers the fade-out/advance sequence
  below.
- Falling below the bottom of the canvas also triggers `resetPlayer()`.

`resetPlayer()` returns the player to the most recently reached checkpoint
(or the level start, `(100, 300)`, if none reached yet). Every checkpoint
in every level is verified safe by `.claude/audit-checkpoints.js` (see
[known-issues.md](known-issues.md)) — the respawn point can't overlap a
hazard or drop the player into an unbroken fall, which is what an
"eternal death loop" would actually be: a checkpoint that just kills you
again the instant you respawn, forever.

## Level text & the fade-out/fade-in transition

`levelText` (e.g. `"Level 1"`) fades out over ~1 second starting 1 second
after the level loads (`updateLevelText()`). Reaching a level's final
checkpoint starts a full-canvas fade to black (`drawFadeOverlay()`,
`fadeDirection = 1`), which — once fully black — calls
`advanceToNextLevel()` to load the next level **in-page** (no
`location.reload()`; see [architecture.md](architecture.md)), then fades
back in (`fadeDirection = -1`) once it's ready. Gameplay updates are
paused for the whole black period so nothing moves behind the curtain.
Because there's no reload, the same `Audio` element (and `AudioContext`)
keeps playing across every level change — the music never restarts or
cuts out.

## Pause menu

`Escape` toggles `isPaused` (`setPaused()` in `game.js`), which freezes
`updatePlayer()`/`updateLevelText()`/particles but keeps `draw()` running
so the current frame stays visible (blurred) behind the pause overlay.
Disabled during a level transition or once the game-complete screen is up,
so it can't get gameplay state stuck mid-fade. The pause and "You beat
Starshade!" overlays share a `.menu-panel` card (violet border, dark
purple fill, the same pulsing `.menu-button`s) matching the main menu's
look — `game.html`/`game.css` duplicate rather than share those rules with
`styles.css`, since game.html never loads that stylesheet. The visible
pause trigger (top-left, for players who don't know `Escape`) is an inline
SVG icon rather than a unicode glyph, centered in its button via flex
instead of font-metric hacks.

## Skins & the coin economy

`skinsData.js` (loaded by both `game.html` and `skins.html`, so the shop
and the in-game renderer never drift apart) defines `STARSHADE_SKINS` and
a `StarshadeEconomy` object backed by `localStorage`:

- **Coins**: 75 for a level's first-ever completion (replaying an
  already-completed level doesn't pay out again), plus a 1000 bonus for
  beating all 100 (`isGameCompleted()`/`setGameCompleted()` just react to
  "no next `levelN.js` exists," not a hardcoded count — see
  [Adding a level](#adding-a-level)).
- **Skins** unlock four ways: `free` (the starting square), `coins` (buy
  once you can afford it), `completion` (beat the game once), or
  `achievement` (a specific achievement grants it — see Achievements
  below). Each declares a `shape` — `square`/`circle`/`triangle`/`image`
  — that `drawPlayer()` actually renders in-game, not just a shop preview,
  and a `rarity` (`common`/`rare`/`epic`/`legendary`/`mythic`) that's
  purely a badge color reflecting how hard it is to get.
- **63 skins total**: the original 13 plus 50 generated by
  `.claude/gen-skins.js` (`node .claude/gen-skins.js`, prints new entries
  to paste into `STARSHADE_SKINS` — it doesn't edit `skinsData.js`
  itself, same hands-off relationship `gen-levels.js` has with `levelN.js`
  files). Every generated skin's preview/glow/fill/stroke are derived
  from one random hue via HSL, so the four colors always read as "the
  same skin" rather than an arbitrary clash. A fixed PRNG seed makes
  re-running it reproduce the same 50 skins rather than a fresh random
  set each time.
- **Shop** (`skins.html`/`skins.js`): a carousel showing lock state
  (a real SVG lock icon over a dimmed-but-still-visible preview — see
  `LOCK_ICON_SVG` — not a hidden silhouette), a rarity badge, cost or
  unlock text, and a Buy/Equip/Equipped/Locked button per skin, plus the
  current coin balance. The dot-navigation strip wraps onto several rows
  and caps its width now that there are 60+ skins — a plain unbroken flex
  row that wide would silently overflow off both edges of any viewport.

## Abilities

A skin's `ability` field (`skinsData.js`) grants a gameplay perk on top
of its cosmetic look — `game.js` checks
`StarshadeEconomy.getEquippedSkin().ability` at the relevant point in the
physics loop. Every default/cosmetic-only skin has no `ability` at all
and plays identically to how the game always has; these only ever add
capability, never take any away, so no existing level's completability
assumptions change.

- **`dash`** — double-tap Left/Right (keyboard or the touch d-pad — see
  `onDirectionTap()`, called from both the keydown handler and
  `bindTouchButton()`) fires a short, fast burst in that direction
  (`DASH_SPEED`, `DASH_DURATION_TICKS`), overriding normal input for its
  duration so releasing the key mid-dash can't cut it short.
- **`tripleJump`** — `extraAirJumps()` returns 2 instead of the usual 1,
  generalized from a plain "double jump used" boolean to an `airJumpsUsed`
  counter checked against it.
- **`sticky`** — clinging to a wall: `resolveAxis()` now also returns
  `wallHit` (isX only), and while airborne and pressed into a wall
  (`wallHit` true — which only fires while actively trying to move into
  it, so letting go always resumes a normal fall), the fall speed is
  capped to a slow slide and the air jump is refreshed every frame,
  meaning a wall-jump is always available for as long as it's held.
- **`slippery`** — horizontal speed eases toward the target instead of
  snapping to it, and keeps coasting after input is released instead of
  stopping dead — momentum, not just a slower max speed, is what actually
  reads as "hard to control precisely."
- **`bouncy`** — rebounds 55% of the incoming fall speed straight back up
  on landing instead of coming to rest, decaying with each successive
  bounce (captured as `incomingDy`, read *before* `resolveAxis()` can zero
  it out on landing) until it's too small to trigger and the player
  finally settles.

The four movement abilities (all but `bouncy`) are each on one legendary
skin, and `bouncy` is on the one mythic skin — all five are
`achievement`-unlocked rather than bought, meant to feel earned. See
Achievements below.

## Achievements

`achievementsData.js` (loaded by `game.html`, `skins.html`, and
`achievements.html`) defines `STARSHADE_ACHIEVEMENTS` and a
`StarshadeAchievements` object, mirroring `skinsData.js`'s shape:

- Each achievement has a `rarity` (same five-tier scale as skins), an
  `icon` (one of a small set of hand-built SVG glyphs — flag, coin,
  skull, lightning, mask, trophy, star, crown — rendered inside a
  rarity-colored ring by `achievementIconSVG()`, entirely in the game's
  purple/blue/black palette regardless of tier; rarity changes
  brightness/glow, never hue), and a pure `check(stats)` function.
- `collectStats()` snapshots `StarshadeEconomy` — completed levels, total
  coins *earned* (a lifetime counter, separate from the spendable balance
  that goes down when you buy a skin — see `getTotalCoinsEarned()`),
  total deaths (also lifetime, separate from `consecutiveDeaths`'s
  in-session rubber-banding counter), whether a level's ever been beaten
  on Hard, and how many skins are unlocked.
- `checkAll()` evaluates every not-yet-unlocked achievement against that
  snapshot, persists any newly met ones, grants a skin reward via
  `StarshadeEconomy.grantSkin()` if the achievement has one
  (`grantsSkin`), and returns what's newly unlocked; `checkAndNotify()`
  also pops up a notification for each. Called after anything that could
  move the needle: a level completing or the game completing
  (`advanceToNextLevel()`), a death (`resetPlayer()`), a skin purchase
  (`skins.js`), and once on `skins.html` load to catch anything already
  earned before that visit.
- **Popups stack like real OS notifications** rather than overlapping —
  `showPopup()` appends each into a fixed-position flex column
  (`#achievement-popup-stack`, created lazily on first use so any page
  that includes `achievementsData.js` gets the same behavior for free),
  and CSS handles the vertical spacing/enter-exit animation. Several
  unlocking in the same `checkAndNotify()` call (e.g. finishing a level
  that happens to cross two thresholds at once) queue up as separate
  cards instead of stacking on top of each other.
- **Gallery** (`achievements.html`/`achievements.js`): a grid of every
  achievement, locked ones dimmed but still showing their name/
  description/rarity (same "show what you're working toward" reasoning
  as a locked skin's preview) — reachable from the main menu and the
  pause menu.

## The 100 levels — a deliberate difficulty curve across three chapters

Levels 1-2 are intentionally the easiest in the game (single-jump gaps
only, sparse hazards, no moving platforms in level 1) — a deliberate
gentle on-ramp. From level 3 on, difficulty climbs steadily: moving
platforms grow more numerous and faster, hazard density rises, and
double-jump-required gaps become more frequent, through level 12's
original finale and on into 13-25. Every gap and checkpoint across all 100
is verified safe by the two audit scripts described in
[Adding a level](#adding-a-level).

Level 1 is hand-authored (see its own tutorial-tips section below).
Levels 2-100 are procedurally generated — `.claude/gen-levels.js` builds
each one from the exact same physics the audits check (the same
single/double-jump feasibility simulation), so every gap is verified
achievable *as it's placed*, not hand-tuned and hoped safe. Platform size
(width **and** height — a real platformer's boxes aren't all the same
stamped slab), spike size, spike clusters (2-4 side by side instead of
one), and moving/ghost/melt/bounce/conveyor/decoy density all scale up
with level number; see the comment at the top of that script for the
exact ramp, and [Adding a level](#adding-a-level) for how to regenerate or
extend it.

The generator organizes difficulty into three named tiers rather than one
flat ramp (`TIERS`/`BLOCK_A`/`BLOCK_B`/`tierForLevel()` in
`.claude/gen-levels.js`):

- **1-25** — the original hand/ramp-tuned levels (unchanged by this
  script's current version — see its header comment).
- **26-75** (`BLOCK_A`) — a new chapter that picks up above where 25 left
  off (its difficulty floor starts at `t = 0.85`, not `0`) and climbs to a
  noticeably harder ceiling by 75. Same rollercoaster climb/dip shape as
  1-25.
- **76-100** (`BLOCK_B`) — the hardest, final stretch: mostly-*upward*
  "vertical" climbs instead of a rollercoaster (`climbBias` in
  `placeStep()`, made possible by the vertical camera scroll — see above),
  sparser checkpoints (`harderCheckpoints` widens the breather interval to
  6-8 steps instead of 4-5 — more consecutive hard jumps between safe
  rests, though a reached checkpoint is exactly as audited-safe as any
  other), and up to 3 mandatory ghost gates per level instead of 2.

**Named branch levels.** A handful of levels (`BONUS_LEVELS` in
`.claude/gen-levels.js`, `BONUS_LEVEL_NUMBERS` in `levels.js` — the two
sets must stay in sync) are built around one mechanic turned up far past
its normal share, rather than being another numbered rung on the ladder:

| # | Name | Focus |
|---|---|---|
| 35 | Skyline Interlude | Conveyor belts (`conveyorShare` forced to 0.6) — a brisk, fast-moving breather rather than a difficulty spike (`t` capped at 1.05). |
| 50 | The Neon Rift | `window.levelTheme = "neon"` — see [Neon-themed levels](#neon-themed-levels-a-wholesale-visual-reskin) below. Bounce-pad heavy, difficulty capped for a showpiece feel rather than a hard level. |
| 65 | Crossfire Causeway | Crisscrossing red decoys (`crisscrossChance` forced to 0.85) — the mechanic showcase for the moving-deadly-platform trick above. |
| 82 | The Vertical Vein | A pure vertical climb even by block-B standards — `vertical`/`harderCheckpoints` forced on with extra steps and a raised mandatory-gate floor. |
| 95 | Mirror's End | A finale gauntlet combining crisscross decoys, bounce pads, conveyors, and a raised mandatory-gate floor, pushed toward its tier's difficulty ceiling. |

On the level map (`levels.js`), a branch level is drawn off to one side of
the main winding path (a gold diamond node connected by a dashed spur —
see `BONUS_BRANCH_OFFSET`/`.tree-path-bonus` in `levels.css`) and shows its
real name instead of "Level N," including **in-game** — the one exception
to the rule below that only the level map shows flavor names.

Level names for ordinary (non-branch) levels beyond 1 (in `levels.js`, for
the level map) are just flavor text — `window.levelText` still reads
"Level N" in-game for these, the same as it always has; the generator
doesn't theme an ordinary level around its name the way the original
hand-authored 2-12 did.

| # | Name | Length | Moving | Ghost | Melt | Spikes |
|---|---|---|---|---|---|---|
| 1 | First Light | 4490px | 0 | 0 | 0 | 8 |
| 2 | Steady Climb | 7219px | 3 | 1 | 2 | 4 |
| 3 | Nebula Steps | 7408px | 1 | 1 | 1 | 8 |
| 4 | Ashfall Ruins | 8079px | 4 | 1 | 1 | 4 |
| 5 | Spike Gardens | 8341px | 3 | 0 | 3 | 1 |
| 6 | The Long Fall | 7651px | 0 | 0 | 6 | 4 |
| 7 | Twin Pillars | 7995px | 4 | 1 | 2 | 5 |
| 8 | Void Bridge | 8603px | 2 | 0 | 3 | 11 |
| 9 | Ember Labyrinth | 8407px | 4 | 4 | 1 | 7 |
| 10 | Starfall Gauntlet | 8168px | 2 | 2 | 5 | 7 |
| 11 | The Ascent | 8870px | 4 | 7 | 0 | 6 |
| 12 | Starshade's Reach | 8457px | 2 | 3 | 3 | 4 |
| 13 | Crimson Descent | 9839px | 3 | 5 | 2 | 4 |
| 14 | Glass Causeway | 9106px | 2 | 4 | 3 | 12 |
| 15 | Wraith's Crossing | 10257px | 1 | 5 | 1 | 5 |
| 16 | The Hollow Spiral | 9960px | 4 | 3 | 3 | 8 |
| 17 | Emberfall Reach | 10312px | 5 | 3 | 1 | 15 |
| 18 | Phantom Causeway | 10017px | 7 | 7 | 1 | 6 |
| 19 | The Shattered Path | 10746px | 5 | 3 | 3 | 14 |
| 20 | Void Marrow | 11459px | 4 | 2 | 5 | 13 |
| 21 | Starlit Precipice | 11122px | 2 | 4 | 6 | 12 |
| 22 | The Last Bastion | 11940px | 5 | 5 | 7 | 7 |
| 23 | Eclipse Corridor | 11151px | 2 | 6 | 9 | 5 |
| 24 | The Abyssal Climb | 12166px | 4 | 3 | 5 | 17 |
| 25 | Starshade's Zenith | 11974px | 3 | 3 | 7 | 15 |

A "Ghost" or "Melt" count includes both the mandatory-gate platforms (see
below) and ordinary/optional ones — `audit-gaps.js`'s "IMPOSSIBLE"
results (one per mandatory gate) are the way to tell which levels have a
true gate, not this count. The same caveat applies to the 26-100 table
below, which adds "Bounce"/"Conveyor" (see
[Bounce pads and conveyors](#bounce-pads-and-conveyors)) and "Crisscross"
(moving deadly decoys — see [Moving platforms](#moving-platforms)) columns:

| # | Name | Length | Moving | Ghost | Melt | Bounce | Conveyor | Spikes | Crisscross |
|---|---|---|---|---|---|---|---|---|---|
| 26 | Comet's Wake | 12309px | 3 | 5 | 1 | 1 | 3 | 11 | 1 |
| 27 | Fractured Skyline | 12149px | 3 | 6 | 1 | 0 | 1 | 13 | 1 |
| 28 | The Drifting Vault | 12394px | 2 | 4 | 2 | 2 | 3 | 6 | 0 |
| 29 | Ashen Causeway | 12006px | 1 | 6 | 3 | 1 | 1 | 7 | 1 |
| 30 | Hollow Meridian | 12364px | 3 | 5 | 4 | 2 | 1 | 14 | 1 |
| 31 | The Silent Reach | 11628px | 4 | 2 | 4 | 3 | 0 | 5 | 2 |
| 32 | Ember Threshold | 12197px | 6 | 1 | 4 | 2 | 2 | 8 | 4 |
| 33 | Wraithlight Span | 12501px | 3 | 4 | 5 | 1 | 2 | 5 | 1 |
| 34 | The Cinder Steps | 12091px | 3 | 5 | 2 | 0 | 1 | 8 | 0 |
| 35 | Skyline Interlude | 12066px | 4 | 6 | 0 | 1 | 9 | 1 | 0 |
| 36 | Obsidian Furrow | 12343px | 4 | 4 | 2 | 1 | 2 | 5 | 3 |
| 37 | The Widening Dark | 12273px | 6 | 6 | 3 | 0 | 1 | 7 | 2 |
| 38 | Starcross Gauntlet | 13773px | 3 | 5 | 5 | 3 | 0 | 6 | 0 |
| 39 | Molten Parapet | 12911px | 5 | 1 | 3 | 0 | 2 | 14 | 2 |
| 40 | The Hush Between | 13186px | 2 | 7 | 2 | 1 | 3 | 11 | 0 |
| 41 | Ravenfall Reach | 11795px | 1 | 5 | 8 | 1 | 3 | 8 | 1 |
| 42 | The Splintered Vault | 13076px | 4 | 3 | 7 | 1 | 2 | 12 | 2 |
| 43 | Duskbound Causeway | 13706px | 2 | 6 | 3 | 2 | 0 | 10 | 0 |
| 44 | The Umbral Stair | 13364px | 5 | 3 | 2 | 1 | 3 | 12 | 2 |
| 45 | Cindermarch | 13697px | 4 | 2 | 6 | 4 | 0 | 8 | 1 |
| 46 | The Glass Divide | 13412px | 3 | 4 | 3 | 2 | 1 | 13 | 2 |
| 47 | Starless Culvert | 13019px | 8 | 2 | 3 | 0 | 1 | 8 | 3 |
| 48 | The Withering Span | 14011px | 3 | 5 | 3 | 3 | 1 | 13 | 2 |
| 49 | Ashen Zenith | 14603px | 2 | 6 | 2 | 1 | 1 | 20 | 0 |
| 50 | The Neon Rift | 14455px | 2 | 2 | 5 | 3 | 2 | 15 | 0 |
| 51 | The Fractured Choir | 13658px | 1 | 4 | 4 | 3 | 4 | 11 | 1 |
| 52 | Voidlight Traverse | 13461px | 2 | 3 | 10 | 1 | 3 | 6 | 0 |
| 53 | The Ember Maze | 14589px | 1 | 5 | 3 | 3 | 4 | 13 | 0 |
| 54 | Graven Skyway | 13962px | 3 | 4 | 4 | 4 | 2 | 7 | 0 |
| 55 | The Hollow Ascent | 14495px | 8 | 4 | 6 | 2 | 1 | 4 | 3 |
| 56 | Starwake Perimeter | 13877px | 5 | 4 | 8 | 1 | 2 | 11 | 1 |
| 57 | The Splitting Dark | 14060px | 3 | 7 | 5 | 1 | 4 | 6 | 1 |
| 58 | Cinderfall Vault | 13773px | 3 | 3 | 3 | 6 | 3 | 6 | 2 |
| 59 | The Widow's Ledge | 13459px | 6 | 3 | 6 | 3 | 2 | 6 | 4 |
| 60 | Umbral Gauntlet | 14315px | 4 | 5 | 6 | 2 | 1 | 7 | 2 |
| 61 | The Drowned Sky | 14364px | 3 | 9 | 7 | 1 | 1 | 5 | 1 |
| 62 | Ashfall Perimeter | 14156px | 4 | 5 | 6 | 4 | 2 | 4 | 3 |
| 63 | The Ember Choir | 15429px | 2 | 6 | 5 | 5 | 2 | 10 | 1 |
| 64 | Nightglass Span | 14572px | 3 | 5 | 7 | 6 | 1 | 4 | 3 |
| 65 | Crossfire Causeway | 14918px | 5 | 8 | 6 | 1 | 2 | 7 | 4 |
| 66 | The Faultline Reach | 14693px | 1 | 6 | 6 | 2 | 5 | 12 | 0 |
| 67 | Starbound Furrow | 14918px | 2 | 11 | 4 | 3 | 1 | 14 | 1 |
| 68 | The Whispering Vault | 13952px | 3 | 5 | 6 | 2 | 4 | 11 | 1 |
| 69 | Molten Meridian | 16790px | 7 | 4 | 6 | 1 | 1 | 13 | 4 |
| 70 | The Cracked Horizon | 14258px | 4 | 6 | 6 | 2 | 2 | 13 | 3 |
| 71 | Ravenous Span | 14936px | 2 | 5 | 5 | 5 | 3 | 11 | 2 |
| 72 | The Deep Cinder | 15047px | 5 | 7 | 5 | 3 | 0 | 12 | 3 |
| 73 | Starfall Reprise | 14694px | 5 | 6 | 5 | 2 | 2 | 11 | 2 |
| 74 | The Last Ember | 14528px | 4 | 7 | 3 | 4 | 4 | 7 | 3 |
| 75 | Starshade's Ascension | 16031px | 5 | 3 | 5 | 3 | 2 | 19 | 3 |
| 76 | The Vertical Ledge | 19529px | 4 | 3 | 8 | 5 | 4 | 21 | 2 |
| 77 | Skybreak Chasm | 19238px | 7 | 5 | 9 | 3 | 1 | 16 | 5 |
| 78 | The Climbing Dark | 20053px | 9 | 1 | 5 | 0 | 5 | 22 | 4 |
| 79 | Cindertower Reach | 19264px | 5 | 3 | 7 | 5 | 1 | 26 | 3 |
| 80 | The Wraith Stair | 19843px | 7 | 2 | 9 | 1 | 5 | 22 | 5 |
| 81 | Ashen Spire | 21391px | 5 | 3 | 10 | 3 | 4 | 13 | 1 |
| 82 | The Vertical Vein | 23156px | 6 | 4 | 8 | 6 | 3 | 17 | 4 |
| 83 | The Fracturing Sky | 20221px | 7 | 4 | 3 | 6 | 4 | 16 | 2 |
| 84 | Starwell Descent | 19353px | 6 | 5 | 5 | 6 | 3 | 13 | 4 |
| 85 | The Molten Stair | 20110px | 5 | 2 | 6 | 4 | 4 | 23 | 5 |
| 86 | Umbral Spire | 20766px | 7 | 4 | 8 | 1 | 5 | 18 | 1 |
| 87 | The Hollow Zenith | 20011px | 4 | 5 | 6 | 3 | 3 | 22 | 4 |
| 88 | Starcross Spire | 20411px | 4 | 5 | 8 | 5 | 3 | 16 | 2 |
| 89 | The Widening Vault | 19950px | 4 | 1 | 6 | 3 | 5 | 24 | 1 |
| 90 | Cinderspire Reach | 20242px | 6 | 3 | 7 | 6 | 5 | 14 | 3 |
| 91 | The Faultline Ascent | 22241px | 4 | 2 | 8 | 8 | 2 | 14 | 1 |
| 92 | Nightglass Spire | 22514px | 4 | 5 | 7 | 4 | 3 | 21 | 2 |
| 93 | The Drowned Zenith | 18486px | 4 | 3 | 5 | 4 | 4 | 17 | 2 |
| 94 | Starfall Spire | 22327px | 9 | 4 | 8 | 3 | 3 | 16 | 9 |
| 95 | Mirror's End | 19050px | 9 | 4 | 12 | 3 | 3 | 10 | 7 |
| 96 | The Final Cinder | 20497px | 9 | 5 | 2 | 6 | 2 | 21 | 4 |
| 97 | Starshade's Trial | 20536px | 2 | 4 | 9 | 6 | 4 | 18 | 2 |
| 98 | The Last Ascent | 20547px | 4 | 3 | 11 | 6 | 3 | 22 | 3 |
| 99 | The Abyssal Spire | 20370px | 9 | 5 | 7 | 5 | 2 | 12 | 6 |
| 100 | Starshade's Eternity | 20166px | 9 | 6 | 6 | 5 | 2 | 22 | 1 |

Note the length and vertical-climb jump starting at 76 (block B, see
above) — those levels sprawl far more vertically than 1-75 do, which is
only legible now that the camera scrolls vertically (see the top of this
document); block A (26-75) keeps the same rollercoaster climb/dip band
1-25 always used.

## Ghost and melt platforms

Two more platform types, both yellow but visually and behaviorally
distinct, layered on top of the same `platforms` array as ordinary solid
platforms and moving platforms:

- **Ghost platforms** (`ghost: true`, plus `ghostPeriod`, `ghostOnRatio`,
  `ghostPhase`) cycle solid/intangible on a timer (`updateGhostPlatforms()`
  in `game.js`), drawn bright yellow with a fast flicker warning just
  before every flip. `resolveAxis()` skips collision against one entirely
  while intangible. Most are optional bonus routes across a gap that's
  already crossable by double jump alone — levels in the harder half of
  the ramp (roughly 13+, randomized per run of the generator — see
  `mandatoryGhostGates` in `.claude/gen-levels.js`) also get one or two
  *mandatory* gates: a gap wide enough that a double jump genuinely can't
  clear it, so that one ghost platform is the only way across, not a
  shortcut (the generator sanity-checks this at generation time — see its
  `directDx`/`directRise` check — rather than hoping it's true).
  `.claude/audit-gaps.js` excludes ghost platforms from its "is this level
  completable" check for exactly this reason (an intermittent platform
  can't be part of the *guaranteed* path) — the "IMPOSSIBLE even with a
  double jump" results it reports (one per mandatory gate) are expected,
  not a bug; re-run the audit after regenerating to see the current exact
  list, since it shifts with the generator's random seed per level range.
- **Melt platforms** (`melt: true`, optional `meltDelay`, default 28
  frames) look and behave like ordinary solid ground until you actually
  stand on one — then a short countdown starts, and it crumbles away for
  good (drawn as a deepening, shaking orange right up until it goes).
  `resetPlayer()` restores every melted platform on death, so a section
  that needs one is never permanently lost to an earlier attempt. Unlike
  ghost platforms, melt platforms count as guaranteed-solid in
  `audit-gaps.js`/`audit-checkpoints.js`, since they're always there the
  *first* time you reach them.

## Level centering and the screen-pinned ceiling

`applyLevelVerticalLayout()` in `game.js` runs once per level load (from
`resetLevelState()`), after the level script has populated
`platforms`/`deadlyPlatforms`/`spikes`/`checkpoints` but before the first
frame renders. It gives the level a nice **opening frame** — shifts every
platform/hazard/checkpoint y (and the player's start y) by a constant so
the level's own vertical center lands on the viewport's center the moment
it loads, instead of wherever a level file happened to author its numbers.
Now that the camera scrolls vertically to follow the player (see above),
this is no longer a visibility requirement the way it used to be when
there was no vertical scroll at all — it's just a starting-frame nicety.
It shifts every y by the same constant, so every gap's rise and every
checkpoint's relative safety survive unchanged (`.claude/audit-*.js` both
check relative distances, not absolute ones).

The anti-cheat ceiling is a separate mechanism, in `updatePlayer()`:
rather than a solid platform placed in level space (which used to need
recomputing whenever the window resized), it's a direct clamp —
`SCREEN_TOP_MARGIN` (16px) from the top edge of the *camera's current
view* (`cameraOffsetY + SCREEN_TOP_MARGIN`), every frame. It can never go
stale across a resize or the camera scrolling, and it's invisible on
purpose: nothing is drawn for it, it's a boundary, not a platform. This is
what stops a double jump from being chained to soar above the intended
platforms and skip past hazards below.

Both of the below (`cameraZoom` and `cameraVerticalAnchor`) are gated on
`airborneFramingActive` (`isTouchDevice && !grounded`) — touch-only. They
were built to fix "hard to see where I'm landing" on a small phone
screen, but on an already-large laptop/desktop viewport the extra zoom
and framing shift just made an ordinary jump feel different from how it
always has, without solving a problem that's mostly phone-specific in the
first place. Desktop keeps the plain, always-centered, unzoomed camera
jumping has had from the start (both values just stay at their grounded
defaults the whole time); touch devices get both.

`cameraZoom` (also in `updatePlayer()`) eases the whole world view out to
88% while airborne (`grounded` false) and back to 100% the instant the
player lands, applied as a scale around the screen's center in `draw()` —
seeing a bit more of the level around you while you're in the air, where
you most need to spot the platform you're aiming for, without needing a
hard cap on jump height. Applied only to the world layer (platforms,
hazards, checkpoints, particles, the player); the level-name text and
tutorial tips stay screen-space so they don't shrink or drift on every
jump. Both `resetLevelState()` and `resetPlayer()` snap it straight back
to 1 rather than letting it ease from wherever it was — same reasoning as
snapping `cameraOffsetX`/`cameraOffsetY` on a teleport (see above): dying
mid-air shouldn't leave the very next respawn's view zoomed out.

`cameraVerticalAnchor` eases alongside it — where the player sits
vertically on screen, as a fraction of `viewportHeight` from the top.
Grounded, that's a flat 0.5 (dead-center, the original framing); airborne,
it eases up to 0.36, which hands most of the freed-up screen space to
whatever's *below* the player instead of splitting it evenly above and
below them. A purely centered camera (or the zoom above on its own)
doesn't prioritize that space, but it's exactly what you need visible to
judge a landing — this is the actual "can I see where I'm about to land"
fix, with the zoom as a complementary "see more overall" one. Never so
extreme that the character scrolls off the top; both snap back to 0.5
alongside `cameraZoom`'s reset to 1.

## Riding a moving platform without the level appearing to swim

Standing on a moving platform carries the player by its live oscillation
every frame (see `updateMovingPlatforms()`'s carry step). Left alone, a
camera that simply targets the player's raw position would faithfully
chase that whole sine wave along with them — the platform (and the player
on it) would stay glued to the screen's center while everything *else*
(other platforms, the backdrop) appeared to slide past, which reads as
"the level is swaying," not "I'm riding something that's moving."

`updatePlayer()`'s camera target subtracts the ridden platform's current
`_offset` from the player's position before computing where the camera
should go, whenever `riddenPlatform.moveAxis` is set. That cancels the
platform's own bob out of what the camera tracks, so the camera settles
near the platform's *resting* position instead of chasing its motion —
the platform and player visibly move across a comparatively stable frame,
which reads as "I'm moving" instead. The instant the player steps off
(`riddenPlatform` becomes `null`), this stops applying and the camera
eases back to tracking the player directly, same as any other platform.

## Resuming exactly where you left off

`savedLevel` in `localStorage` only ever remembered *which level* to
resume into. `CHECKPOINT_PROGRESS_KEY` (`game.js`) goes a level further:
every time a checkpoint is reached, the furthest checkpoint *index*
reached in that level is written to `localStorage` under that level's
number (not full checkpoint objects — those are re-created fresh from the
level's own script every load, see `loadLevel()` — just which one to
fast-forward past). `resetLevelState()` reads it back after loading a
level's checkpoints and, if one exists, marks every checkpoint up to it as
already reached and spawns the player there — the exact same "respawn at
the last checkpoint" position math `resetPlayer()` already uses for a
mid-level death. A level never played before simply has no saved index and
starts from its actual first platform as always.

## Frame-rate independence

Every per-frame physics/animation increment (`gravity`, `horizontalSpeed`,
moving-platform phase, particle life, camera easing, squash/stretch,
screen shake, melt timers) is written as "how much per 60fps-equivalent
tick" and multiplied by `dtScale` — `gameLoop(timestamp)` computes it each
frame from the real elapsed time since the last one (1 at a steady 60Hz,
~0.5 at 120Hz, ~2 at 30fps), clamped to `MAX_DT_SCALE` (3) so resuming
from a backgrounded tab can't fling the player through geometry in one
huge leap. At `dtScale === 1` this reproduces the exact discrete-frame
trajectory the old fixed-per-frame code did (verified against
`.claude/audit-gaps.js`'s own simulation), so the physics reference the
audits check is unchanged — the point is that gameplay now runs at the
same *real-world* speed on any display, not that the numbers changed.
Exponential easings (camera follow, squash) use `1 - (1-rate)^dtScale`
rather than a flat `*= dtScale` — the mathematically correct
generalization of a per-tick decay factor, so a high-refresh-rate display
doesn't converge faster just because it's taking more, smaller steps.

## Mobile

`game.html` includes an on-screen d-pad (bottom-left) and jump button
(bottom-right) — `.touch-controls` in `game.css`, shown only under
`(pointer: coarse)` so a resized desktop browser window never grows them.
The buttons feed a `touchState` object that `anyPressed()` in `game.js`
OR's in alongside the rebindable keyboard bindings (touch isn't "a key,"
so it can't be one of the user's rebindable ones); the jump button calls
`tryJump()` directly and always works, regardless of the Click/Tap to
Jump setting (that setting is about clicking anywhere, not this dedicated
button). Portrait on a touch device shows a "rotate to landscape" prompt
instead of rendering a sideways platformer (`(pointer: coarse) and
(orientation: portrait)` — pure CSS, no JS needed).

Tap anywhere on the open play area (not just the jump button) to jump: the
canvas has its own `touchstart` listener, separate from the `click`
listener used for a mouse — a `click` on mobile only fires after a
synthesized delay following `touchend`, and is silently cancelled by many
browsers if the finger drifts even a couple of px between touchstart and
touchend (easy to trigger by accident mid-jump). Both respect the same
Click/Tap to Jump setting; `touchstart`'s `preventDefault()` stops the
browser's own synthetic `click` from ever firing afterward, so a tap can't
double-trigger a jump. Every touch point dispatches its own independent
event, so this coexists with the d-pad/jump buttons fine — holding "right"
while tapping elsewhere to jump works exactly like it should.

Touch input can't be as precise as a mouse (a finger has no pixel-perfect
point, and it physically covers whatever it's touching), so
`TOUCH_INPUT_BONUS` in `game.js` adds a flat bit of extra checkpoint-radius
and spike-hitbox forgiveness on top of the difficulty setting and the
death-streak leniency, only on an actual touchscreen.

The d-pad/jump buttons themselves (`.touch-button` in `game.css`) are
deliberately understated — SVG chevrons instead of unicode glyphs (crisp
at any size), a faded low-opacity fill, and a `padding` + `background-clip:
content-box` combo that makes the real tappable area noticeably bigger
than what's actually painted, the same "more forgiving than it looks"
reasoning as the hitbox bonus above.

The d-pad, jump button, pause button, and coin toast are all positioned
with `env(safe-area-inset-*)` (see `game.css`), so they stay clear of a
notch/Dynamic Island or the home-indicator bar rather than sitting
underneath one — both can land on any edge of the screen in forced
landscape play depending on which way the device is rotated.
`viewport-fit=cover` in `game.html`'s meta tag is required for those
`env()` values to resolve to anything other than 0 on iOS.

`resizeCanvas()` sizes the canvas's backing pixel buffer at
`window.innerWidth/innerHeight * devicePixelRatio` (baked into every draw
call via `ctx.setTransform`) rather than 1:1 with CSS pixels — phones
commonly report a DPR of 2-3, and without this the game rendered at a
fraction of the screen's real resolution and got blurrily upscaled by the
browser. Everything in `game.js` still works in logical/CSS pixels
(`viewportWidth`/`viewportHeight`, tracked alongside `canvas.width`/
`canvas.height` — see the comment at the top of the file) so none of the
gameplay math needed to change.

### Fullscreen and staying installed

Two separate mechanisms, because no single API covers every mobile
browser:

- **`manifest.json`** plus `apple-mobile-web-app-capable`/
  `mobile-web-app-capable`/`apple-mobile-web-app-status-bar-style` meta
  tags on *every* page (not just `game.html` — iOS re-checks these per
  page, so a page missing them drops back into normal Safari chrome mid-
  navigation) is what makes "Add to Home Screen" launch without browser
  chrome at all. This is the only real fullscreen path on iOS Safari,
  which has never supported the Fullscreen API for anything but a
  `<video>` element.
- **The Fullscreen API**, requested on the player's first `touchstart` in
  `game.js` (`requestGameFullscreen()`, gated on `(pointer: coarse)` so a
  mouse-driven desktop player is never prompted), covers Android Chrome
  and other touch browsers that do support it, for anyone playing from a
  normal browser tab rather than an installed icon.

Both fail silently (a `.catch(() => {})`/try-catch) if unsupported or
denied — fullscreen is a nice-to-have, never worth erroring over.

### Keeping the screen awake

`game.js` requests a Screen Wake Lock (`navigator.wakeLock.request
("screen")`) on load and again every time `visibilitychange` fires with
the tab visible — the browser silently releases any held lock the moment
a tab is backgrounded (switching apps, manually locking the phone,
navigating to Settings from the pause menu and back), and never
re-acquires it on its own. Without this, a phone left untouched for its
normal screen-timeout while lining up a jump or reading level text dims
and locks mid-run. Missing `navigator.wakeLock` (older/unsupported
browsers) or a denied request (e.g. low-power mode) both fail silently —
there's no fallback, it just doesn't hold the lock.

### Haptics

`vibrateHaptic()` wraps `navigator.vibrate()` — jump, death, reaching an
ordinary checkpoint, and reaching a level's *final* checkpoint each fire a
short, distinct pattern: jump is a single quick pulse; death is three
short pulses; an ordinary checkpoint is one slightly longer pulse; the
final checkpoint is that same pulse followed by a rising double-pulse
into one long buzz, distinct from an ordinary checkpoint for the one
moment that actually ends a level. Only on an actual touchscreen with the
API present — iOS Safari has never implemented `navigator.vibrate()` at
all, so this silently does nothing there rather than throwing.

### The portal-suck animation

Touching a level's *final* checkpoint doesn't fade to black immediately —
`isPortalSucking`/`updatePortalSuck()` play a short (~0.55s) canned
animation first: the player eases (accelerating, not constant-speed) from
wherever they are into the checkpoint's exact position, shrinking toward
nothing (`squashX`/`squashY`) and spinning (`portalSpinAngle`, applied in
`drawPlayer()` before the shape's own per-skin rotation, so it compounds
with a circle's roll or a triangle's tumble rather than replacing it),
with particles converging *inward* toward the player instead of the
normal outward burst (`spawnConvergingParticles()` — spawned scattered in
a ring around the target with velocity aimed back at it, since the
existing `spawnParticles()` can only radiate outward from one point).
Colors are drawn from the equipped skin's `fill`/`glow`, so the effect
reads at least a little differently per skin without a wholly separate
system per one.

This runs in `update()` in place of normal `updatePlayer()` — there's
nothing left for input to do once the level is complete, and the camera
is deliberately left exactly where it was (not still trying to track the
animated position) so the world reads as holding still while the player
gets pulled in. Once `portalSuckProgress` reaches 1, it hands off to
exactly the fade-to-black/`advanceToNextLevel()` sequence that used to
start immediately on touching the checkpoint. `tryJump()`, `setPaused()`,
and the touch-anywhere-to-jump handler all bail out while it's playing,
same as they already did for `isFading`.

### Pause/game-complete menus on a short viewport

`.menu-panel` (the actual card inside the full-screen `.menu` backdrop —
used for the pause menu and the "You beat Starshade!" screen) caps itself
at `max-height: 100%` with `overflow-y: auto`, and shrinks its padding/
heading/button sizing under `@media (max-height: 420px)`. Without this, a
short landscape phone (this page's forced orientation — see above) could
be shorter than the panel's default content height, and since `.menu` is
a `justify-content: center` flexbox with `body { overflow: hidden }`, the
overflow wasn't just visually clipped — the part sticking out past the
top or bottom (often the heading, or the last button, e.g. "Quit to
Menu") was genuinely unreachable, not just off-screen.

## First-playthrough tutorial tips

`level1.js` defines `window.tutorialTips`, a list of `{x, text}` pairs —
`updateTutorialTips()` in `game.js` pops up each one (as a small captioned
pill, `drawTutorialTip()`) the first time the player's x actually reaches
that point, one at a time, covering just the basics (movement, jump,
spikes, deadly/red platforms, checkpoints, the finish) before leaving the
player to figure out everything else on their own. No other level defines
`tutorialTips`, so nothing shows past level 1.

## Adaptive leniency

After several deaths in a row *without* reaching a new checkpoint
(`consecutiveDeaths` in `game.js`, reset to 0 the moment a new checkpoint
is reached), `leniencyLevel()` (capped at 3) quietly widens the checkpoint
touch radius, insets spikes' effective hitbox, and adds a couple of px of
landing forgiveness when catching a platform — small enough at every step
that it never feels like the level itself changed, there purely so a
stretch that's genuinely giving someone trouble eases off a little rather
than staying maximally punishing forever.

## Settings that actually do something

Every option on the Settings page changes real behavior — no disabled or
"(TBD)" placeholders. Sound/music volume, Difficulty, the WASD/Arrow Keys
controls preset, and key rebinding were already wired up; on top of those:

- **Click/Tap to Jump** (default on) — adds jump/double-jump on a canvas
  click or tap, alongside whatever's bound to Jump, via the same
  `tryJump()` both paths call.
- **Screen Shake** (default on) — toggles the camera-shake hit-feedback on
  death (`draw()`'s `shakeTime` check); death itself, and the particle
  burst, are unaffected.
- **Display Name** — saved to `localStorage.playerName`, read back by
  `script.js` for a "Welcome back, {name}" line under the main menu's
  subtitle. Nothing shows for a nameless/first-time visitor.

## Per-shape cosmetic movement

Every skin shares the *exact same* 25×25 hitbox regardless of its shape —
none of this touches collision. Purely in `drawPlayer()`/`updatePlayer()`:
circle skins roll (rotate proportional to horizontal speed, with a small
rim mark so the roll is actually visible on an otherwise-symmetric fill)
and get a tiny extra vertical rebound the instant they land, on top of the
squash/stretch every skin already has; triangle skins sometimes (not
every jump — `Math.random() < 0.5`) tumble through the air, settling back
to point-up the moment they land.

## Difficulty setting

The Settings page's Difficulty option (Easy/Normal/Hard) reads/writes
`localStorage.difficulty`, applied via `DIFFICULTY_SETTINGS` in `game.js`
and mirrored in `StarshadeEconomy` (skinsData.js) for the coin multiplier:

| | Moving platform speed | Checkpoint touch radius | Coin reward |
|---|---|---|---|
| Easy | ×0.7 | 32px (more forgiving) | ×0.75 |
| Normal | ×1 | 24px | ×1 |
| Hard | ×1.3 | 18px (less forgiving) | ×1.5 |

It's readable from `game.html` directly (a visible pause button, top-left,
plus `Escape`) via Settings in the pause menu — which returns to the game
in progress afterward (`settings.html?from=pause`) instead of dropping you
back at the main menu.

Reaching level 100's final checkpoint (there's no `level101.js`) triggers
the "You beat Starshade!" screen instead of trying to load a level that
doesn't exist — see
[architecture.md](architecture.md#level-loading--the-one-thing-to-know-before-touching-gamejs).
This check is purely "does the next `levelN.js` fail to load," so it
scales automatically whenever more levels are added — nothing hardcodes
100 as the last one.

## Adding a level

Two ways to add `level101.js` and beyond:

- **By hand**, like level 1: follow the pattern in the existing files —
  assign `window.platforms`, `window.deadlyPlatforms`, `window.spikes`,
  `window.checkpoints`, and `window.levelText` (plain property assignment,
  not `const`/`let` — see [architecture.md](architecture.md) for why that
  distinction matters). The camera now scrolls vertically to follow the
  player (see above), so `y` values are no longer confined to one
  screen-height band — a level can climb or drop well beyond it.
- **Generated**, like levels 2-100: `node .claude/gen-levels.js . 101 101`
  (or a wider range to regenerate/extend a whole block at once — see the
  usage comment at the top of that script). Every gap it places is
  checked against the same physics as the audits below as it's generated.
  A level past 100 falls into whichever of `BLOCK_A`/`BLOCK_B` its number
  satisfies in `tierForLevel()` — extend that function with a new tier
  (or a third block) rather than stretching `BLOCK_B`'s range indefinitely
  if the game grows past 100.
- **New level names** go in two places that must stay in sync:
  `NEW_LEVEL_NAMES` in `.claude/gen-levels.js` (used for the header
  comment and, for a bonus level, the actual in-game `levelText`) and
  `LEVEL_NAMES` in `levels.js` (used for the level map). A new branch/bonus
  level also needs an entry in both `BONUS_LEVELS` (gen-levels.js) and
  `BONUS_LEVEL_NUMBERS` (levels.js).

Either way, then run both audit scripts from the project root — they're the actual
mechanism used to design and verify every level above, not just a
suggestion:

```bash
node .claude/audit-gaps.js         # flags any horizontal gap+climb that's
                                    # impossible even with a double jump
node .claude/audit-checkpoints.js  # flags any checkpoint whose respawn
                                    # point overlaps a hazard, or never
                                    # lands on solid ground at all — i.e.
                                    # an eternal death loop
```

Both simulate the real per-frame physics (`gravity`/`jumpStrength`/
`horizontalSpeed`) and the real `resetPlayer()` respawn logic rather than
eyeballing pixel distances — every gap and every checkpoint in the current
100 levels passes both (any "IMPOSSIBLE" gaps `audit-gaps.js` reports are
deliberate — each is bridged by a mandatory ghost platform, which is
intentionally excluded from that check; see
[Ghost and melt platforms](#ghost-and-melt-platforms) above). Both scripts
detect the current level count by probing for `levelN.js` files rather
than a hardcoded loop bound, so they never need editing just because more
levels were added.
