// Level 10 Data — "Level 10"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 10";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 499, y: 417, width: 136, height: 14, ghost: true, ghostPeriod: 172, ghostOnRatio: 0.5630434782608695 },
  { x: 834, y: 454, width: 149, height: 20, melt: true, meltDelay: 27 },
  { x: 1187, y: 500, width: 209, height: 16, melt: true, meltDelay: 27 },
  { x: 1560, y: 500, width: 236, height: 15 },
  { x: 2000, y: 545, width: 101, height: 27, ghost: true, ghostPeriod: 172, ghostOnRatio: 0.5630434782608695 },
  { x: 2305, y: 588, width: 227, height: 16, moveAxis: "y", moveRange: 48, moveSpeed: 0.034, movePhase: 5.61 },
  { x: 2736, y: 636, width: 142, height: 23 },
  { x: 3042, y: 636, width: 181, height: 24 },
  { x: 3414, y: 640, width: 62, height: 19 },
  { x: 3656, y: 615, width: 204, height: 29, melt: true, meltDelay: 27 },
  { x: 4231, y: 589, width: 67, height: 28 },
  { x: 4462, y: 589, width: 284, height: 25 },
  { x: 5105, y: 524, width: 127, height: 14 },
  { x: 5390, y: 453, width: 220, height: 22 },
  { x: 5773, y: 389, width: 206, height: 25 },
  { x: 6143, y: 389, width: 366, height: 29 },
  { x: 6684, y: 354, width: 234, height: 30 },
  { x: 7294, y: 336, width: 78, height: 23 },
  { x: 7555, y: 320, width: 177, height: 22, melt: true, meltDelay: 27 },
  { x: 7928, y: 342, width: 117, height: 18 },
  { x: 8209, y: 342, width: 287, height: 25 },
  { x: 8671, y: 350, width: 404, height: 20 },
];

window.deadlyPlatforms = [
  { x: 2917, y: 629, width: 98, height: 20 },
  { x: 4337, y: 595, width: 60, height: 20 },
  { x: 6011, y: 385, width: 117, height: 20 },
  { x: 6944, y: 353, width: 131, height: 20 },
];

window.spikes = [
  { x: 2787, y: 636, size: 13 },
  { x: 2800, y: 636, size: 12 },
  { x: 2812, y: 636, size: 13 },
  { x: 2825, y: 636, size: 22 },
  { x: 3429, y: 640, size: 33 },
  { x: 4249, y: 589, size: 26 },
  { x: 5441, y: 453, size: 14 },
  { x: 7316, y: 336, size: 20 },
  { x: 7336, y: 336, size: 17 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1678, y: 470, reached: false },
  { x: 3133, y: 606, reached: false },
  { x: 4604, y: 559, reached: false },
  { x: 6326, y: 359, reached: false },
  { x: 8353, y: 312, reached: false },
  { x: 8873, y: 320, reached: false }, // Final
];
