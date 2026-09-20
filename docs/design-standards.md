# Design standards: onboarding, pacing, and hook

Written after playing through the live build (victordeglon.github.io/Starshade)
and auditing `game.js`/`gen-levels.js`/the level files following the 100-level
expansion. Purpose: a checklist to hold *future* content (new levels, new
mechanics, new menus) to, so the game stays easy to pick up in the first
minute while still growing into something with 100 levels of depth. This is
standards, not a redesign — most of the game already follows these rules;
where it doesn't, the gap is called out with the exact file/level so it's
fixable without re-deriving the problem.

## 1. Time-to-first-fun budget

The stretch between "player clicks something" and "player is having fun" is
where most people who bounce off a game bounce off it. Concrete targets:

| Moment | Target | Current |
|---|---|---|
| Click Play → player has control | ≤ 2s | ~3s fixed delay, `loading.js`'s progress bar is fake (no real asset loading happens — nothing to wait for) |
| First coin collected | ≤ 5s | Good — level 1 spawns a coin essentially on top of the player |
| First tutorial tip | ≤ 2s of movement | Good — `level1.js`'s first tip fires at `x: 110`, a single tap of "move" away |
| First achievement/reward | ≤ 60s | Good — "First Steps"/"Wipeout"-tier commons fire off the first jump/first death/level 2 |
| First skin unlock or visible shop content | first session | Good — coins earned level 1 are immediately spendable in the shop |

**Standard:** don't add a loading screen, splash, or interstitial that isn't
actually waiting on something. `loading.html`'s progress bar has no work to
track (this is a static site, nothing to fetch) — if it stays for pacing/
vibe reasons, cap it under ~1.5s and never make it block input. Any future
step between "player wants to play" and "player is playing" needs a reason
better than "it looks nice."

## 2. One new mechanic per level, always taught the same way it's shown

`level1.js` already gets this right for one mechanic and wrong for zero —
it's actually a good model, just not applied consistently yet:

> Level 1 introduces a ghost platform as "a gentle first taste... mostly
> solid, long warning flicker before it flips, easy to read. A bonus hop
> just off the main path, **not required** to clear the level." (see the
> comment above the ghost platform at `level1.js:40-51`, `ghostOnRatio: 0.7`
> — a generous 70% solid.)

That's the pattern: **new mechanic → optional first → off the main path →
generous timing → explained if it's the kind of thing that needs
explaining.** Level 2 breaks it on all four counts at once:

- `level2.js:11` — the very **first platform after spawn** is a moving
  platform (`moveAxis: "x"`). Not eased in, not optional: the main path
  starts on it.
- `level2.js:14` — a melt platform (`melt: true`), again on the main path.
- `level2.js:22` — a second ghost platform, this one presumably mandatory
  (unlike level 1's bonus one), at `ghostOnRatio: 0.65`.
- `window.tutorialTips` is **only ever defined in `level1.js`**
  (`game.js`'s `updateTutorialTips()` — see
  [gameplay.md](gameplay.md#first-playthrough-tutorial-tips)) — level 2 gets
  zero explanation for any of these three new mechanics. A brand-new player's
  *second level ever* introduces three unexplained things simultaneously.

**Standard going forward:**
- A level that introduces a mechanic for the first time in the game
  (moving/ghost/melt/bounce/conveyor/crisscross-decoy, and any future one)
  either (a) shows a tutorial tip the first time the player is near it, or
  (b) places the *first instance* of it off the guaranteed path, optional,
  with maximum forgiveness (long ghost `ghostOnRatio`, slow `moveSpeed`,
  long `meltDelay`) — exactly level 1's ghost platform.
- Never introduce more than one *unexplained* mechanic in the same level.
  If a level's design calls for several, stagger which one gets the
  "first, gentle, optional" treatment and only require the others once
  they've each had their own gentle intro in an earlier level.
- This applies to level 2 specifically as a fix, and to every future
  hand-authored or generated level as a standing rule.

## 3. Rule changes must be telegraphed, not just documented

`.claude/audit-gaps.js`'s own header comment states the invariant the whole
level set was built to: a ghost platform is "an optional bonus route, never
part of the guaranteed path." That's true for levels 1-40. Starting level 41
(`mandatoryGhostGates` in `.claude/gen-levels.js`, see
[gameplay.md](gameplay.md#the-100-levels--a-deliberate-difficulty-curve-across-three-chapters)),
it stops being true — some gaps are now only crossable by timing a
periodically-solid ghost platform, by design. Nothing in-game marks the
moment that rule changes. A player who has correctly learned for 40 levels
that "if a ghost platform isn't there, there's another way" hits level 41
and has that assumption invalidated with no warning.

**Standard:** any mechanic whose *rules* change value (not just its
difficulty) — optional becomes mandatory, decorative becomes deadly, a
button starts doing something new — gets a one-time signal the first time
the new rule applies (a tutorial-tip-style pill is the existing mechanism,
`drawTutorialTip()`/`updateTutorialTips()`; it doesn't have to be prose —
even a distinct visual treatment on a *mandatory* ghost platform vs. an
*optional* one would satisfy this). Difficulty can climb indefinitely;
*rules* changing invisibly reads as broken, not hard.

## 4. Difficulty ramp: use the existing curve as the contract

The per-level table in
[gameplay.md](gameplay.md#the-100-levels--a-deliberate-difficulty-curve-across-three-chapters)
is a real, checked-in contract, not just flavor text — level length goes
4,490px (level 1) → ~12,000px (level 26) → ~20,000px (level 100), spike
count climbs from single digits to 20+, and `.claude/gen-levels.js`'s tier
system (`BLOCK_A`/`BLOCK_B`, `resolveParams()`) already encodes exactly how
fast each knob (spike chance, movable chance, ghost/melt/bounce/conveyor
share, checkpoint spacing) is allowed to grow per level.

**Standard for any new level, hand-authored or generated:**
- Don't hand-place a level's difficulty by eye. Run it through
  `resolveParams(n)`'s knobs for wherever it sits in the sequence, or if
  it's a genuine one-off (a bonus/branch level), deliberately cap its `t`
  the way the existing bonus levels do (`Skyline Interlude` and
  `The Neon Rift` both explicitly cap `t` in `resolveParams()` so a
  showpiece level doesn't accidentally become the hardest level around it).
- Always run **both** `.claude/audit-gaps.js` and
  `.claude/audit-checkpoints.js` before shipping a level. Zero
  "IMPOSSIBLE" results that aren't a deliberate, sanity-checked
  `mandatoryGhostGates` placement; zero checkpoint issues, full stop. This
  is already the project's own standard (see
  [known-issues.md](known-issues.md) items #12/#14) — the only miss found
  in this review was 9 legacy gaps (levels 13-25) that turned out, on
  closer simulation, to already satisfy it. Keep running both audits after
  *every* level change, not just at initial authoring time.

## 5. Reward cadence: keep the early game dense, let it taper

`achievementsData.js` already does this reasonably well — worth stating as
an explicit rule so it doesn't erode as more content is added:

- **Common-rarity achievements pay a small coin bonus** (`grantsCoins: 25`)
  and fire on the easiest, earliest actions (first death, levels 2-5, 250
  coins earned, 5 skins unlocked). This is correct: a new player should be
  earning *something* — coins, a popup, a checkpoint — roughly every 30-60
  seconds for their first several minutes.
- **Epic/legendary/mythic achievements pay no extra coins**, by design (see
  the comment at `achievementsData.js:104-108`) — they're long-horizon
  bragging rights once the player is already hooked, not part of the early
  reward loop. Correct to leave these coin-less; don't add coin rewards to
  high-rarity achievements later, it would just inflate the economy without
  improving the part of the loop it's meant for.
- **Gap to flag:** per-level completion achievements exist for levels
  1-25 (`second-step` through `final-ascent`) but **none exist for 26-100**
  — 75 levels (three-quarters of the game) with no level-specific
  achievement pop between "beat level 25" and "beat level 100." The
  coin/death/skin-count achievements still fire in that range, so it's not
  reward-*less*, but it's a big stretch with no "you just did a specific,
  named thing" pop. Either accept this as intentional (the milestone
  achievements — `quarter-way`/`halfway-hero`/`three-quarters`/
  `almost-there`/`final-ascent` — already mark 25/50/75/99/100, so the
  *milestone* cadence is arguably fine) or add a handful more at natural
  checkpoints (block transitions at 26, 76, or each bonus/branch level:
  35, 50, 65, 82, 95). Needs a product decision, not a default addition.

## 6. Menu surface: don't grow past what a first-time player needs to ignore

Main menu currently: Play, Levels, Skins, Achievements, Settings, Contact —
six choices before any gameplay. This is at the edge of reasonable for a
casual platformer; it works today because **Play is first and visually
primary**, and everything else is either empty or low-stakes for a
brand-new player (no skins owned yet, no achievements yet). 

**Standard:** any new top-level menu entry needs to justify displacing
"just click Play" as the obvious first action — prefer adding to an
existing surface (the pause menu already houses Settings/Level
Map/Achievements as overlays without leaving the game) over a new main-menu
button. If the menu grows past Play plus ~4 secondary items, the secondary
items should collapse into a single "More" surface rather than all sitting
at the top level.

## 7. Checklist for shipping new content

Before merging anything that adds a level, mechanic, or onboarding-adjacent
UI:

- [ ] `node .claude/audit-gaps.js` — zero unintended IMPOSSIBLE results
- [ ] `node .claude/audit-checkpoints.js` — zero issues
- [ ] If this is a new *mechanic*: does the first-ever encounter follow §2
      (optional, off-path, gentle, or explicitly taught)?
- [ ] If this changes an *existing* mechanic's rules (not just its
      difficulty): is the change telegraphed per §3?
- [ ] Does the new level's knob values (spike/moving/ghost/melt/bounce/
      conveyor density, length) fall on the existing curve for its position,
      per §4 — or is it a deliberately-capped bonus/branch level?
- [ ] Does anything change time-to-first-fun for a brand-new player (§1)?
      A new mandatory step before Play is a regression by default.
