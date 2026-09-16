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
  checkpoint in every level is drawn as a spinning gold star instead of a
  plain circle (`starPath()` in `game.js`) — green once reached — so the
  actual goal reads as visually distinct from an ordinary checkpoint.
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
- **`checkpoints`** — circles (the last one a star, see above); touching
  one within 20px marks it `reached: true` and becomes the respawn point
  after death. Reaching the **last** checkpoint in a level triggers the
  fade-out/advance sequence below.
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
so it can't get gameplay state stuck mid-fade.

## Skins & the coin economy

`skinsData.js` (loaded by both `game.html` and `skins.html`, so the shop
and the in-game renderer never drift apart) defines `STARSHADE_SKINS` and
a `StarshadeEconomy` object backed by `localStorage`:

- **Coins**: 75 for a level's first-ever completion (replaying an
  already-completed level doesn't pay out again), plus a 1000 bonus for
  beating all 12.
- **Skins** unlock three ways: `free` (the starting square), `coins`
  (buy once you can afford it), or `completion` (beat the game once).
  Each declares a `shape` — `square`/`circle`/`triangle`/`image` — that
  `drawPlayer()` actually renders in-game, not just a shop preview.
- **Shop** (`skins.html`/`skins.js`): a carousel showing lock state, cost
  or achievement text, and a Buy/Equip/Equipped/Locked button per skin,
  plus the current coin balance.

## The 12 levels — a deliberate difficulty curve

Levels 1-2 are intentionally the easiest in the game (single-jump gaps
only, sparse hazards, no moving platforms in level 1) — they used to be
harder than several of the levels that followed, which was backwards, so
they were rebuilt as a gentle on-ramp. From level 3 on, difficulty climbs
steadily: moving platforms appear with increasing speed/range, hazard
density rises, and double-jump-required gaps become more frequent, up to
level 12's finale (two fast moving platforms back to back, the densest
hazards, tightest margins). Every level also got a length pass — most
roughly doubled — via a consistent "Act 2" extension appended after the
original level's endpoint (see the length column).

| # | Name | Length | Moving platforms | Theme |
|---|---|---|---|---|
| 1 | First Light | 4420px | 0 | Tutorial — gentle single-jump gaps, minimal hazards |
| 2 | Steady Climb | 4210px | 1 (slow) | First moving platform, introduced safely with a checkpoint right before it |
| 3 | Nebula Steps | 5240px | 1 | Tighter gaps, narrow stepping-stones, the game's first double-jump-only gap |
| 4 | Ashfall Ruins | 5600px | 1 (vertical) | Safe platforms interleaved with same-height deadly decoys |
| 5 | Spike Gardens | 6440px | 1 | Long ground-level spike beds; a second wide double-jump gap |
| 6 | The Long Fall | 5760px | 1 (vertical) | A climb, a staggered multi-stage drop, then a second, steeper climb |
| 7 | Twin Pillars | 4850px | 1 (moving pillar) | Narrow (60-70px) pillar-top platforms |
| 8 | Void Bridge | 5200px | 1 | Small stepping platforms over open void; the level's widest gap yet |
| 9 | Ember Labyrinth | 5430px | 1 (vertical) | Zig-zagging path with deadly "wrong turn" decoys |
| 10 | Starfall Gauntlet | 5830px | 1 | Combines every earlier hazard type into one longer run |
| 11 | The Ascent | 4900px | 1 (moving pillar) | Sustained double-jump/precision chaining at altitude |
| 12 | Starshade's Reach | 6830px | 2 (fast) | Finale — every hazard type, the hardest margins in the game |

Reaching level 12's final checkpoint (there's no `level13.js`) triggers the
"You beat Starshade!" screen instead of trying to load a level that doesn't
exist — see
[architecture.md](architecture.md#level-loading--the-one-thing-to-know-before-touching-gamejs).

## Adding a level

Create `level13.js` following the pattern in the existing files — it must
assign `window.platforms`, `window.deadlyPlatforms`, `window.spikes`,
`window.checkpoints`, and `window.levelText` (plain property assignment,
not `const`/`let` — see [architecture.md](architecture.md) for why that
distinction matters). Keep every `y` value within the visible band
described above (no vertical scroll!).

Then run both audit scripts from the project root — they're the actual
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
12 levels passes both.
