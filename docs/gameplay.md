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
only, sparse hazards, no moving platforms in level 1) — a deliberate
gentle on-ramp. From level 3 on, difficulty climbs steadily: moving
platforms grow more numerous and faster, hazard density rises, and
double-jump-required gaps become more frequent, up to level 12's finale
(five moving platforms, two of them fast and back-to-back, the densest
hazards and tightest margins in the game). All 12 were rewritten from
scratch (not just extended) for a genuine escalating curve with distinct
visual identity per level — see the table below — and every gap and
checkpoint is verified safe by the two audit scripts described in
[Adding a level](#adding-a-level).

| # | Name | Length | Moving platforms | Theme |
|---|---|---|---|---|
| 1 | First Light | 4490px | 0 | Tutorial — a gentle rise-dip-rise wave, minimal hazards |
| 2 | Steady Climb | 4810px | 2 | First moving platforms (one horizontal, one vertical), each telegraphed with a checkpoint right before it |
| 3 | Nebula Steps | 4660px | 2 | Alternating small/large stepping stones in a loose spiral; the game's first double-jump-only gap |
| 4 | Ashfall Ruins | 4370px | 2 | A rubble field — nearly every real platform has a same-height deadly decoy right next to it |
| 5 | Spike Gardens | 5080px | 2 | Ground-level spike beds alternating with clear ledges, climbing overall; two wide double-jump gaps |
| 6 | The Long Fall | 5860px | 2 | A dramatic rollercoaster — climb, huge fall, climb, even bigger fall |
| 7 | Twin Pillars | 4280px | 4 | Narrow (60-80px) pillars, several of which move — precision landing on a moving target is the whole point |
| 8 | Void Bridge | 5230px | 3 | A long crossing over open void on stepping platforms, some moving, some static |
| 9 | Ember Labyrinth | 4930px | 4 | A zig-zag that doubles back on itself vertically, with deadly "wrong turn" decoys and moving platforms right at each turn |
| 10 | Starfall Gauntlet | 5830px | 4 | Combines every earlier hazard type — spike beds, decoys, moving pillars, double jumps — into one longer run |
| 11 | The Ascent | 4350px | 3 | Sustained double-jump/precision chaining, right up against the top of the visible band |
| 12 | Starshade's Reach | 6850px | 5 | Finale — every hazard type, two fast moving platforms back to back, the hardest margins in the game |

## Difficulty setting

The Settings page's Difficulty option (Easy/Normal/Hard) reads/writes
`localStorage.difficulty`, applied via `DIFFICULTY_SETTINGS` in `game.js`
and mirrored in `StarshadeEconomy` (skinsData.js) for the coin multiplier:

| | Moving platform speed | Checkpoint touch radius | Coin reward |
|---|---|---|---|
| Easy | ×0.7 | 28px (more forgiving) | ×0.75 |
| Normal | ×1 | 20px | ×1 |
| Hard | ×1.3 | 14px (less forgiving) | ×1.5 |

It's readable from `game.html` directly (a visible pause button, top-left,
plus `Escape`) via Settings in the pause menu — which returns to the game
in progress afterward (`settings.html?from=pause`) instead of dropping you
back at the main menu.

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
