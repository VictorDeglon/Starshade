// Level 12 Data — "Level 12"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 12";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 504, y: 415, width: 92, height: 26, ghost: true, ghostPeriod: 165, ghostOnRatio: 0.5413043478260869 },
  { x: 792, y: 423, width: 152, height: 22, moveAxis: "y", moveRange: 89, moveSpeed: 0.03, movePhase: 6.18 },
  { x: 1136, y: 420, width: 234, height: 14 },
  { x: 1534, y: 420, width: 217, height: 18 },
  { x: 1935, y: 389, width: 93, height: 29, melt: true, meltDelay: 26 },
  { x: 2198, y: 333, width: 69, height: 24, ghost: true, ghostPeriod: 165, ghostOnRatio: 0.5413043478260869 },
  { x: 2442, y: 281, width: 52, height: 17 },
  { x: 2658, y: 281, width: 182, height: 15 },
  { x: 3007, y: 217, width: 159, height: 29, moveAxis: "y", moveRange: 57, moveSpeed: 0.027, movePhase: 4.92 },
  { x: 3345, y: 183, width: 227, height: 21 },
  { x: 3756, y: 160, width: 127, height: 19 },
  { x: 4047, y: 160, width: 247, height: 19 },
  { x: 4486, y: 159, width: 149, height: 27 },
  { x: 4839, y: 192, width: 83, height: 27, ghost: true, ghostPeriod: 165, ghostOnRatio: 0.5413043478260869 },
  { x: 5131, y: 242, width: 135, height: 17, moveAxis: "x", moveRange: 57, moveSpeed: 0.038, movePhase: 4.51 },
  { x: 5430, y: 242, width: 190, height: 27 },
  { x: 5837, y: 310, width: 51, height: 15 },
  { x: 6100, y: 362, width: 165, height: 15, melt: true, meltDelay: 26 },
  { x: 6482, y: 431, width: 152, height: 20 },
  { x: 6798, y: 431, width: 399, height: 23 },
  { x: 7401, y: 463, width: 117, height: 24 },
  { x: 7722, y: 492, width: 104, height: 18, ghost: true, ghostPeriod: 165, ghostOnRatio: 0.5413043478260869 },
  { x: 8021, y: 497, width: 411, height: 20 },
];

window.deadlyPlatforms = [
  { x: 2531, y: 276, width: 60, height: 20 },
  { x: 4670, y: 163, width: 133, height: 20 },
  { x: 5918, y: 313, width: 60, height: 20 },
  { x: 6666, y: 422, width: 86, height: 20 },
];

window.spikes = [
  { x: 1169, y: 420, size: 15 },
  { x: 1184, y: 420, size: 12 },
  { x: 2452, y: 281, size: 32 },
  { x: 5845, y: 310, size: 17 },
  { x: 5862, y: 310, size: 18 },
  { x: 6518, y: 431, size: 33 },
  { x: 7424, y: 463, size: 18 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1643, y: 390, reached: false },
  { x: 2749, y: 251, reached: false },
  { x: 4171, y: 130, reached: false },
  { x: 5525, y: 212, reached: false },
  { x: 6998, y: 401, reached: false },
  { x: 8227, y: 467, reached: false }, // Final
];
