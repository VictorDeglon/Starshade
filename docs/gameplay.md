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
  and briefly "pop" larger the moment they're reached.
- Missing a jump triggers a short screen shake (`shakeTime`/
  `shakeMagnitude` in `draw()`) in addition to respawning at the last
  checkpoint.

## World objects (defined per-level in `levelN.js`)

- **`platforms`** — solid rectangles, see collision section above.
- **`deadlyPlatforms`** — visually identical to platforms but drawn red;
  kill on any overlap (`resetPlayer()`), no solid collision.
- **`spikes`** — drawn as a triangle (`{x, y, size}`, apex pointing up at
  `size` px above `y`); dying requires the player's bounding box to cross
  the triangle's actual slope, not just its bounding rectangle, so grazing
  a spike's outer corner is forgiving.
- **`checkpoints`** — circles; touching one within 20px marks it
  `reached: true` (turns green) and becomes the respawn point after death.
  Reaching the **last** checkpoint in a level triggers a 1-second
  fade-to-black, then advances to the next level (see
  [architecture.md](architecture.md) for how that reload/advance works).
- Falling below the bottom of the canvas also triggers `resetPlayer()`.

`resetPlayer()` returns the player to the most recently reached checkpoint
(or the level start, `(100, 300)`, if none reached yet).

## Level text & fade overlay

`levelText` (e.g. `"Level 1"`) fades out over ~1 second starting 1 second
after the level loads (`updateLevelText()`). The fade-to-black between
levels is a simple full-canvas `rgba(0,0,0,alpha)` rectangle whose alpha
ramps up by `0.016`/frame (~1 second at 60fps) before the level-advance
callback fires.

## The 12 levels

| # | Name | Theme |
|---|---|---|
| 1 | Level 1 | Introductory — platforms, a couple of spikes, one deadly-platform gauntlet late on |
| 2 | Level 2 | Staggered climb, a "risky run," floating islands with dense spikes |
| 3 | Nebula Steps | Tighter gaps, first narrow stepping-stone section |
| 4 | Ashfall Ruins | Safe platforms interleaved with same-height deadly decoys |
| 5 | Spike Gardens | Long ground-level spike beds; first gap sized for a double jump |
| 6 | The Long Fall | A climb, then a staggered multi-stage drop, then a climb back up |
| 7 | Twin Pillars | Narrow (60-70px) pillar-top platforms, a couple of double-jump gaps |
| 8 | Void Bridge | Small stepping platforms over open void, mostly flat/descending gaps |
| 9 | Ember Labyrinth | Zig-zagging path with deadly "wrong turn" decoys at direction changes |
| 10 | Starfall Gauntlet | Combines the previous hazard types into one longer run |
| 11 | The Ascent | Sustained double-jump chaining up a long staircase |
| 12 | Starshade's Reach | Finale — every hazard type, tightest margins in the game |

Reaching level 12's final checkpoint (there's no `level13.js`) triggers the
"You beat Starshade!" screen instead of trying to load a level that doesn't
exist — see
[architecture.md](architecture.md#level-loading--the-one-thing-to-know-before-touching-gamejs).

## Adding a level

Create `level13.js` following the pattern in the existing files — it must
declare exactly `platforms`, `deadlyPlatforms`, `spikes`, `checkpoints`,
and `levelText` as top-level bindings. Keep every `y` value within the
visible band described above (no vertical scroll!), and if you add a gap
that requires climbing while jumping, sanity-check it against the ~235px
(single jump) / ~465px (jump + double jump) horizontal limits noted above
rather than eyeballing it — a couple of the simulation snippets used to
verify these levels are straightforward to rerun in a browser console
against `game.js`'s actual `gravity`/`jumpStrength`/`horizontalSpeed`
constants.
