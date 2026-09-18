// Level 3 Data — "Level 3"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 3";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 472, y: 371, width: 170, height: 16, moveAxis: "x", moveRange: 51, moveSpeed: 0.028, movePhase: 4.53 },
  { x: 817, y: 377, width: 98, height: 23 },
  { x: 1098, y: 404, width: 125, height: 12 },
  { x: 1387, y: 404, width: 331, height: 44 },
  { x: 1901, y: 434, width: 162, height: 33, melt: true, meltDelay: 30 },
  { x: 2250, y: 481, width: 130, height: 12 },
  { x: 2563, y: 510, width: 174, height: 20 },
  { x: 2901, y: 510, width: 305, height: 21 },
  { x: 3386, y: 529, width: 134, height: 36, moveAxis: "x", moveRange: 56, moveSpeed: 0.02, movePhase: 5.52 },
  { x: 3695, y: 539, width: 225, height: 33 },
  { x: 4092, y: 534, width: 229, height: 32 },
  { x: 4485, y: 534, width: 208, height: 32 },
  { x: 4865, y: 529, width: 179, height: 32 },
  { x: 5209, y: 497, width: 77, height: 38, moveAxis: "x", moveRange: 65, moveSpeed: 0.029, movePhase: 2.2 },
  { x: 5446, y: 463, width: 173, height: 27 },
  { x: 5776, y: 416, width: 121, height: 21, melt: true, meltDelay: 30 },
  { x: 6061, y: 416, width: 214, height: 26 },
  { x: 6435, y: 376, width: 174, height: 21 },
  { x: 6764, y: 361, width: 381, height: 20 },
];

window.deadlyPlatforms = [
  { x: 935, y: 386, width: 74, height: 20 },
  { x: 6646, y: 380, width: 96, height: 20 },
];

window.spikes = [
  { x: 2268, y: 481, size: 17 },
  { x: 3778, y: 539, size: 23 },
  { x: 3801, y: 539, size: 20 },
  { x: 3821, y: 539, size: 17 },
  { x: 4134, y: 534, size: 25 },
  { x: 6485, y: 376, size: 21 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1553, y: 374, reached: false },
  { x: 3054, y: 480, reached: false },
  { x: 4589, y: 504, reached: false },
  { x: 6168, y: 386, reached: false },
  { x: 6955, y: 331, reached: false }, // Final
];
