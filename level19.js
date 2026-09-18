// Level 19 Data — "The Shattered Path"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 19";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 621, y: 365, width: 218, height: 42 },
  { x: 971, y: 333, width: 176, height: 15 },
  { x: 1459, y: 284, width: 128, height: 37 },
  { x: 1773, y: 208, width: 194, height: 25, moveAxis: "y", moveRange: 97, moveSpeed: 0.047, movePhase: 5.62 },
  { x: 2108, y: 208, width: 184, height: 21 },
  { x: 2482, y: 124, width: 103, height: 13 },
  { x: 2896, y: 44, width: 161, height: 40 },
  { x: 3223, y: -9, width: 199, height: 42, moveAxis: "y", moveRange: 86, moveSpeed: 0.047, movePhase: 1.63 },
  { x: 3579, y: -9, width: 351, height: 20 },
  { x: 4190, y: -28, width: 228, height: 44, melt: true, meltDelay: 23 },
  { x: 4553, y: -28, width: 99, height: 13, moveAxis: "y", moveRange: 107, moveSpeed: 0.044, movePhase: 2.36 },
  { x: 4802, y: 0, width: 99, height: 42 },
  { x: 5119, y: 60, width: 103, height: 37, ghost: true, ghostPeriod: 141, ghostOnRatio: 0.46521739130434786 },
  { x: 5222, y: 60, width: 295, height: 20 },
  { x: 5709, y: 33, width: 105, height: 20, ghost: true, ghostPeriod: 138, ghostOnRatio: 0.4521739130434782 },
  { x: 5993, y: 11, width: 247, height: 20 },
  { x: 6410, y: 99, width: 180, height: 21 },
  { x: 6737, y: 169, width: 90, height: 35, melt: true, meltDelay: 23 },
  { x: 7033, y: 250, width: 107, height: 35, moveAxis: "x", moveRange: 76, moveSpeed: 0.049, movePhase: 5.03 },
  { x: 7311, y: 250, width: 248, height: 17 },
  { x: 7701, y: 294, width: 169, height: 26, ghost: true, ghostPeriod: 141, ghostOnRatio: 0.46521739130434786 },
  { x: 8016, y: 297, width: 113, height: 33, moveAxis: "x", moveRange: 96, moveSpeed: 0.04, movePhase: 5.84 },
  { x: 8418, y: 295, width: 201, height: 24, melt: true, meltDelay: 23 },
  { x: 8795, y: 295, width: 378, height: 41 },
  { x: 9472, y: 235, width: 69, height: 35 },
  { x: 9682, y: 163, width: 119, height: 28 },
  { x: 9975, y: 75, width: 227, height: 17 },
  { x: 10361, y: 65, width: 385, height: 20 },
];

window.deadlyPlatforms = [
  { x: 1177, y: 334, width: 102, height: 20 },
  { x: 1622, y: 284, width: 104, height: 20 },
  { x: 4937, y: 6, width: 60, height: 20 },
  { x: 9835, y: 155, width: 76, height: 20 },
  { x: 10239, y: 81, width: 148, height: 20 },
];

window.spikes = [
  { x: 665, y: 365, size: 45 },
  { x: 994, y: 333, size: 31 },
  { x: 1025, y: 333, size: 21 },
  { x: 2508, y: 124, size: 45 },
  { x: 2951, y: 44, size: 12 },
  { x: 2963, y: 44, size: 12 },
  { x: 2975, y: 44, size: 27 },
  { x: 3002, y: 44, size: 27 },
  { x: 4837, y: 0, size: 33 },
  { x: 6460, y: 99, size: 16 },
  { x: 9486, y: 235, size: 27 },
  { x: 9715, y: 163, size: 34 },
  { x: 9749, y: 163, size: 33 },
  { x: 10020, y: 75, size: 44 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2200, y: 178, reached: false },
  { x: 3755, y: -39, reached: false },
  { x: 6053, y: -19, reached: false },
  { x: 7435, y: 220, reached: false },
  { x: 8984, y: 265, reached: false },
  { x: 10554, y: 35, reached: false }, // Final
];
