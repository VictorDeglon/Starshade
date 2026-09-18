// Level 11 Data — "Level 11"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 11";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 490, y: 437, width: 162, height: 43, moveAxis: "y", moveRange: 78, moveSpeed: 0.028, movePhase: 2.54 },
  { x: 785, y: 496, width: 161, height: 44, ghost: true, ghostPeriod: 169, ghostOnRatio: 0.5521739130434783 },
  { x: 1127, y: 543, width: 125, height: 28, ghost: true, ghostPeriod: 169, ghostOnRatio: 0.5521739130434783 },
  { x: 1402, y: 543, width: 276, height: 15 },
  { x: 1808, y: 568, width: 191, height: 23, ghost: true, ghostPeriod: 169, ghostOnRatio: 0.5521739130434783 },
  { x: 2217, y: 560, width: 69, height: 39 },
  { x: 2466, y: 536, width: 45, height: 31, ghost: true, ghostPeriod: 169, ghostOnRatio: 0.5521739130434783 },
  { x: 2726, y: 499, width: 70, height: 44 },
  { x: 2988, y: 499, width: 290, height: 15 },
  { x: 3538, y: 434, width: 175, height: 39, moveAxis: "x", moveRange: 62, moveSpeed: 0.039, movePhase: 3.92 },
  { x: 3908, y: 372, width: 184, height: 42 },
  { x: 4300, y: 329, width: 110, height: 37, moveAxis: "x", moveRange: 63, moveSpeed: 0.029, movePhase: 4.59 },
  { x: 4619, y: 329, width: 204, height: 35 },
  { x: 5132, y: 291, width: 165, height: 23, moveAxis: "x", moveRange: 81, moveSpeed: 0.034, movePhase: 2.04 },
  { x: 5619, y: 257, width: 154, height: 36 },
  { x: 5966, y: 270, width: 177, height: 19, ghost: true, ghostPeriod: 169, ghostOnRatio: 0.5521739130434783 },
  { x: 6281, y: 270, width: 187, height: 44 },
  { x: 6616, y: 307, width: 65, height: 22 },
  { x: 6878, y: 355, width: 178, height: 35, ghost: true, ghostPeriod: 169, ghostOnRatio: 0.5521739130434783 },
  { x: 7266, y: 421, width: 199, height: 25 },
  { x: 7673, y: 421, width: 315, height: 17 },
  { x: 8171, y: 489, width: 97, height: 43, ghost: true, ghostPeriod: 169, ghostOnRatio: 0.5521739130434783 },
  { x: 8437, y: 474, width: 433, height: 20 },
];

window.deadlyPlatforms = [
  { x: 4129, y: 366, width: 105, height: 20 },
  { x: 5810, y: 254, width: 124, height: 20 },
  { x: 6708, y: 301, width: 60, height: 20 },
  { x: 7491, y: 421, width: 164, height: 20 },
];

window.spikes = [
  { x: 2228, y: 560, size: 36 },
  { x: 3955, y: 372, size: 13 },
  { x: 5661, y: 257, size: 34 },
  { x: 5695, y: 257, size: 36 },
  { x: 6628, y: 307, size: 18 },
  { x: 6646, y: 307, size: 16 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1540, y: 513, reached: false },
  { x: 3133, y: 469, reached: false },
  { x: 4721, y: 299, reached: false },
  { x: 6375, y: 240, reached: false },
  { x: 7831, y: 391, reached: false },
  { x: 8654, y: 444, reached: false }, // Final
];
