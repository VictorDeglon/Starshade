// Level 18 Data — "Phantom Causeway"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 18";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 446, y: 420, width: 81, height: 20 },
  { x: 688, y: 464, width: 147, height: 20 },
  { x: 1009, y: 490, width: 120, height: 20, moveAxis: "y", moveRange: 74, moveSpeed: 0.029, movePhase: 4.39 },
  { x: 1301, y: 494, width: 154, height: 20 },
  { x: 1611, y: 494, width: 249, height: 20 },
  { x: 2056, y: 441, width: 91, height: 20 },
  { x: 2307, y: 395, width: 132, height: 20 },
  { x: 2600, y: 327, width: 148, height: 20, moveAxis: "x", moveRange: 68, moveSpeed: 0.028, movePhase: 1.28 },
  { x: 2956, y: 275, width: 73, height: 20 },
  { x: 3218, y: 275, width: 234, height: 20 },
  { x: 3739, y: 225, width: 167, height: 20, melt: true, meltDelay: 26 },
  { x: 4200, y: 199, width: 72, height: 20, moveAxis: "y", moveRange: 76, moveSpeed: 0.034, movePhase: 1.23 },
  { x: 4432, y: 176, width: 114, height: 20 },
  { x: 4752, y: 176, width: 291, height: 20 },
  { x: 5185, y: 198, width: 157, height: 20 },
  { x: 5491, y: 238, width: 89, height: 20 },
  { x: 5794, y: 289, width: 147, height: 20 },
  { x: 6091, y: 346, width: 78, height: 20, moveAxis: "x", moveRange: 73, moveSpeed: 0.025, movePhase: 1.42 },
  { x: 6355, y: 346, width: 258, height: 20 },
  { x: 6782, y: 349, width: 431, height: 20 },
];

window.deadlyPlatforms = [
  { x: 869, y: 467, width: 91, height: 20 },
  { x: 4567, y: 170, width: 76, height: 20 },
];

window.spikes = [
  { x: 497, y: 420, size: 23 },
  { x: 2092, y: 441, size: 32 },
  { x: 2387, y: 395, size: 25 },
  { x: 2976, y: 275, size: 30 },
  { x: 5518, y: 238, size: 27 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1736, y: 464, reached: false },
  { x: 3335, y: 245, reached: false },
  { x: 4898, y: 146, reached: false },
  { x: 6484, y: 316, reached: false },
  { x: 6998, y: 319, reached: false }, // Final
];
