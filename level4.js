// Level 4 Data — "Level 4"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 4";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 485, y: 410, width: 52, height: 23, ghost: true, ghostPeriod: 193, ghostOnRatio: 0.6282608695652174 },
  { x: 727, y: 453, width: 122, height: 29 },
  { x: 1042, y: 511, width: 91, height: 20, melt: true, meltDelay: 29 },
  { x: 1297, y: 511, width: 206, height: 14 },
  { x: 1688, y: 542, width: 188, height: 26 },
  { x: 2058, y: 558, width: 62, height: 25 },
  { x: 2305, y: 589, width: 202, height: 30, moveAxis: "y", moveRange: 49, moveSpeed: 0.029, movePhase: 6.12 },
  { x: 2671, y: 589, width: 306, height: 26 },
  { x: 3144, y: 566, width: 117, height: 22 },
  { x: 3613, y: 555, width: 176, height: 17 },
  { x: 3956, y: 531, width: 115, height: 26, moveAxis: "x", moveRange: 41, moveSpeed: 0.027, movePhase: 1.65 },
  { x: 4233, y: 491, width: 101, height: 26 },
  { x: 4498, y: 491, width: 346, height: 30 },
  { x: 5003, y: 447, width: 202, height: 18 },
  { x: 5367, y: 413, width: 47, height: 27, melt: true, meltDelay: 29 },
  { x: 5576, y: 375, width: 194, height: 14, moveAxis: "y", moveRange: 39, moveSpeed: 0.027, movePhase: 4.92 },
  { x: 5934, y: 375, width: 296, height: 15 },
  { x: 6408, y: 379, width: 201, height: 26, ghost: true, ghostPeriod: 193, ghostOnRatio: 0.6282608695652174 },
  { x: 6791, y: 395, width: 219, height: 14 },
  { x: 7192, y: 387, width: 398, height: 20 },
];

window.deadlyPlatforms = [
];

window.spikes = [
  { x: 1756, y: 542, size: 26 },
  { x: 2068, y: 558, size: 27 },
  { x: 3178, y: 566, size: 22 },
  { x: 5040, y: 447, size: 12 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1400, y: 481, reached: false },
  { x: 2824, y: 559, reached: false },
  { x: 4671, y: 461, reached: false },
  { x: 6082, y: 345, reached: false },
  { x: 7391, y: 357, reached: false }, // Final
];
