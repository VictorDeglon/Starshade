# Gameplay mechanics (`game.js`)

Everything renders on one full-window `<canvas>` with a manual 2D camera —
there's no game engine/library, just `requestAnimationFrame` and a hand
rolled physics loop.

**The camera only scrolls horizontally.** `cameraOffsetX` tracks the player
left/right; there is no vertical scroll at all. That's why every level's
platform `y` values stay within roughly the same visible band (~70-560) —
anything outside that range would render off the top/bottom of the canvas
on a typical window size.

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
- The camera (`cameraOffsetX`) eases toward centering the player
  horizontally rather than snapping instantly (`cameraSmoothing = 0.12`),
  and squashes/stretches briefly on jump and landing for a bit of weight.

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
`x`/`y`. When the player is grounded on a moving platform, `updatePlayer()`
adds that frame's positional delta to the player too — without that step,
standing still on a moving platform would mean sliding off the instant it
moved, since collision resolution only ever stops relative penetration; it
has no notion of "bring the resting object along." First appears in level
2 (a slow, small-range platform used to introduce the mechanic safely) and
recurs with increasing speed/range through the later levels — see the
level table below.

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
  beating all 25.
- **Skins** unlock three ways: `free` (the starting square), `coins`
  (buy once you can afford it), or `completion` (beat the game once).
  Each declares a `shape` — `square`/`circle`/`triangle`/`image` — that
  `drawPlayer()` actually renders in-game, not just a shop preview.
- **Shop** (`skins.html`/`skins.js`): a carousel showing lock state, cost
  or achievement text, and a Buy/Equip/Equipped/Locked button per skin,
  plus the current coin balance.

## The 25 levels — a deliberate difficulty curve

Levels 1-2 are intentionally the easiest in the game (single-jump gaps
only, sparse hazards, no moving platforms in level 1) — a deliberate
gentle on-ramp. From level 3 on, difficulty climbs steadily: moving
platforms grow more numerous and faster, hazard density rises, and
double-jump-required gaps become more frequent, through level 12's
original finale and on into 13-25. Every gap and checkpoint across all 25
is verified safe by the two audit scripts described in
[Adding a level](#adding-a-level).

Levels 1-12 are hand-authored, each with a distinct visual identity (see
the table below). Levels 13-25 are procedurally generated —
`.claude/gen-levels.js` builds each one from the exact same physics the
audits check (the same single/double-jump feasibility simulation), so
every gap is verified achievable *as it's placed*, not hand-tuned and
hoped safe; only whether a gap needs a double jump, an occasional
ghost-platform-only gate, and the moving/ghost/melt/spike/decoy density
are randomized, scaling up with level number. See the comment at the top
of that script for the exact ramp.

| # | Name | Length | Moving platforms | Theme |
|---|---|---|---|---|
| 1 | First Light | 4490px | 0 | Tutorial — a gentle rise-dip-rise wave, minimal hazards |
| 2 | Steady Climb | 4810px | 2 | First moving platforms (one horizontal, one vertical), each telegraphed with a checkpoint right before it |
| 3 | Nebula Steps | 4660px | 2 | Alternating small/large stepping stones in a loose spiral; the game's first double-jump-only gap, and its first *mandatory* ghost platform |
| 4 | Ashfall Ruins | 4370px | 2 | A rubble field — nearly every real platform has a same-height deadly decoy right next to it |
| 5 | Spike Gardens | 5080px | 2 | Ground-level spike beds alternating with clear ledges, climbing overall; two wide double-jump gaps |
| 6 | The Long Fall | 5860px | 2 | A dramatic rollercoaster — climb, huge fall, climb, even bigger fall; its first melt platform |
| 7 | Twin Pillars | 4280px | 4 | Narrow (60-80px) pillars, several of which move — precision landing on a moving target is the whole point |
| 8 | Void Bridge | 5230px | 3 | A long crossing over open void on stepping platforms, some moving, some static |
| 9 | Ember Labyrinth | 4930px | 4 | A zig-zag that doubles back on itself vertically, with deadly "wrong turn" decoys and moving platforms right at each turn |
| 10 | Starfall Gauntlet | 5830px | 4 | Combines every earlier hazard type — spike beds, decoys, moving pillars, double jumps, a melt platform — into one longer run |
| 11 | The Ascent | 4350px | 3 | Sustained double-jump/precision chaining, right up against the top of the visible band |
| 12 | Starshade's Reach | 6850px | 5 | Every hazard type from 1-11, two fast moving platforms back to back, one mandatory ghost gate — the hardest margins of the hand-authored levels |
| 13 | Crimson Descent | 6585px | 1 | First of the generated levels — the ramp starts gentle, close to level 12's density |
| 14 | Glass Causeway | 6694px | 1 | |
| 15 | Wraith's Crossing | 6366px | 5 | |
| 16 | The Hollow Spiral | 6800px | 2 | |
| 17 | Emberfall Reach | 7180px | 3 | |
| 18 | Phantom Causeway | 7213px | 4 | |
| 19 | The Shattered Path | 7884px | 2 | First generated level with a mandatory ghost gate |
| 20 | Void Marrow | 7939px | 3 | |
| 21 | Starlit Precipice | 8484px | 3 | Mandatory ghost gate |
| 22 | The Last Bastion | 9135px | 1 | Mandatory ghost gate |
| 23 | Eclipse Corridor | 9765px | 1 | Up to two mandatory ghost gates |
| 24 | The Abyssal Climb | 8705px | 3 | |
| 25 | Starshade's Zenith | 10095px | 4 | Finale — the longest level, up to two mandatory ghost gates, the densest hazards and fastest cycles in the game |

## Ghost and melt platforms

Two more platform types, both yellow but visually and behaviorally
distinct, layered on top of the same `platforms` array as ordinary solid
platforms and moving platforms:

- **Ghost platforms** (`ghost: true`, plus `ghostPeriod`, `ghostOnRatio`,
  `ghostPhase`) cycle solid/intangible on a timer (`updateGhostPlatforms()`
  in `game.js`), drawn bright yellow with a fast flicker warning just
  before every flip. `resolveAxis()` skips collision against one entirely
  while intangible. Most are optional bonus routes across a gap that's
  already crossable by double jump alone — level 3 has the one exception:
  the gap right after its second breather is wide enough that a double
  jump genuinely can't clear it, so that ghost platform is the only way
  across, not a shortcut. `.claude/audit-gaps.js` excludes ghost platforms
  from its "is this level completable" check for exactly this reason (an
  intermittent platform can't be part of the *guaranteed* path) — a level
  showing an "IMPOSSIBLE even with a double jump" result for a gap that
  has a ghost platform in it is expected, not a bug.
- **Melt platforms** (`melt: true`, optional `meltDelay`, default 28
  frames) look and behave like ordinary solid ground until you actually
  stand on one — then a short countdown starts, and it crumbles away for
  good (drawn as a deepening, shaking orange right up until it goes).
  `resetPlayer()` restores every melted platform on death, so a section
  that needs one is never permanently lost to an earlier attempt. Unlike
  ghost platforms, melt platforms count as guaranteed-solid in
  `audit-gaps.js`/`audit-checkpoints.js`, since they're always there the
  *first* time you reach them.

## Anti-cheat ceiling and level centering

`applyLevelVerticalLayout()` in `game.js` runs once per level load (from
`resetLevelState()`), after the level script has populated
`platforms`/`deadlyPlatforms`/`spikes`/`checkpoints` but before the first
frame renders, and does two things — both pure translations/additions of
already-verified geometry, so neither can turn a previously-safe checkpoint
or previously-possible jump into a bad one:

1. **Centers the level vertically** on the actual viewport instead of
   wherever a level file happened to author its numbers — `window.innerHeight`
   varies per player, but every level was written against one nominal
   band. It shifts every platform/hazard/checkpoint y (and the player's
   start y) by the same constant, so every gap's rise and every
   checkpoint's relative safety survive unchanged (`.claude/audit-*.js`
   both check relative distances, not absolute ones).
2. **Adds an invisible ceiling** 240px above the level's own highest
   platform (`ROOF_CLEARANCE` — comfortably more than a single jump's
   ~144px rise, but less than the ~280px a double jump can reach if timed
   to maximize height). Since nothing in a level is ever *above* its own
   topmost platform, this can only cap climbing past where the level
   already ends — it's what stops a double jump from being chained to
   soar above the intended platforms and skip past hazards below, drawn as
   a dark, hazard-striped boundary (`drawRoofPlatforms()`) distinct from
   every hand-placed platform color.

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

Reaching level 25's final checkpoint (there's no `level26.js`) triggers the
"You beat Starshade!" screen instead of trying to load a level that doesn't
exist — see
[architecture.md](architecture.md#level-loading--the-one-thing-to-know-before-touching-gamejs).

## Adding a level

Two ways to add `level26.js` and beyond:

- **By hand**, like levels 1-12: follow the pattern in the existing files
  — assign `window.platforms`, `window.deadlyPlatforms`, `window.spikes`,
  `window.checkpoints`, and `window.levelText` (plain property assignment,
  not `const`/`let` — see [architecture.md](architecture.md) for why that
  distinction matters). Keep every `y` value within the visible band
  described above (no vertical scroll!).
- **Generated**, like levels 13-25: `node .claude/gen-levels.js . 26 26`
  (or a wider range to regenerate/extend a whole block at once — see the
  usage comment at the top of that script). Every gap it places is
  checked against the same physics as the audits below as it's generated.

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
25 levels passes both (the "IMPOSSIBLE" gaps `audit-gaps.js` reports for
levels 3, 21, 22, 23, and 25 are deliberate — each is bridged by a
mandatory ghost platform, which is intentionally excluded from that check;
see [Ghost and melt platforms](#ghost-and-melt-platforms) above).
