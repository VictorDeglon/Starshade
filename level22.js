// Level 22 Data — "The Last Bastion"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 22";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 524, y: 392, width: 54, height: 21, melt: true, meltDelay: 21 },
  { x: 805, y: 422, width: 120, height: 29, ghost: true, ghostPeriod: 130, ghostOnRatio: 0.43260869565217397 },
  { x: 1162, y: 483, width: 206, height: 15, melt: true, meltDelay: 21 },
  { x: 1605, y: 546, width: 119, height: 24, melt: true, meltDelay: 21 },
  { x: 1888, y: 546, width: 375, height: 25 },
  { x: 2505, y: 617, width: 65, height: 17, ghost: true, ghostPeriod: 130, ghostOnRatio: 0.43260869565217397 },
  { x: 2812, y: 711, width: 123, height: 30, ghost: true, ghostPeriod: 130, ghostOnRatio: 0.43260869565217397 },
  { x: 3177, y: 790, width: 74, height: 20, ghost: true, ghostPeriod: 130, ghostOnRatio: 0.43260869565217397 },
  { x: 3251, y: 790, width: 264, height: 20 },
  { x: 3709, y: 779, width: 106, height: 20, ghost: true, ghostPeriod: 129, ghostOnRatio: 0.4260869565217391 },
  { x: 3994, y: 759, width: 246, height: 20 },
  { x: 4473, y: 800, width: 229, height: 19, moveAxis: "x", moveRange: 73, moveSpeed: 0.035, movePhase: 3.13 },
  { x: 4920, y: 800, width: 49, height: 15, moveAxis: "x", moveRange: 104, moveSpeed: 0.047, movePhase: 4.44 },
  { x: 5397, y: 786, width: 212, height: 30 },
  { x: 5808, y: 744, width: 132, height: 29, moveAxis: "x", moveRange: 113, moveSpeed: 0.045, movePhase: 4.6 },
  { x: 6104, y: 744, width: 194, height: 21 },
  { x: 6479, y: 666, width: 226, height: 14 },
  { x: 7096, y: 568, width: 163, height: 27 },
  { x: 7427, y: 475, width: 168, height: 28 },
  { x: 7595, y: 475, width: 265, height: 20 },
  { x: 8058, y: 465, width: 95, height: 20, ghost: true, ghostPeriod: 129, ghostOnRatio: 0.4260869565217391 },
  { x: 8352, y: 446, width: 277, height: 20 },
  { x: 9042, y: 399, width: 209, height: 19, melt: true, meltDelay: 21 },
  { x: 9460, y: 385, width: 150, height: 27, melt: true, meltDelay: 21 },
  { x: 10042, y: 382, width: 206, height: 27, ghost: true, ghostPeriod: 130, ghostOnRatio: 0.43260869565217397 },
  { x: 10475, y: 412, width: 99, height: 17, melt: true, meltDelay: 21 },
  { x: 10738, y: 412, width: 216, height: 15 },
  { x: 11191, y: 468, width: 172, height: 24, moveAxis: "y", moveRange: 78, moveSpeed: 0.047, movePhase: 4.66 },
  { x: 11605, y: 553, width: 210, height: 25, moveAxis: "y", moveRange: 90, moveSpeed: 0.044, movePhase: 2.7 },
  { x: 12057, y: 650, width: 121, height: 26, moveAxis: "x", moveRange: 67, moveSpeed: 0.053, movePhase: 4.72 },
  { x: 12342, y: 650, width: 338, height: 29 },
  { x: 12840, y: 643, width: 438, height: 20 },
];

window.deadlyPlatforms = [
  { x: 5645, y: 776, width: 169, height: 20 },
  { x: 7280, y: 572, width: 82, height: 20 },
];

window.spikes = [
  { x: 5470, y: 786, size: 20 },
  { x: 5490, y: 786, size: 39 },
  { x: 7125, y: 568, size: 20 },
  { x: 7145, y: 568, size: 26 },
  { x: 7171, y: 568, size: 37 },
  { x: 7463, y: 475, size: 16 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2076, y: 516, reached: false },
  { x: 4054, y: 729, reached: false },
  { x: 6201, y: 714, reached: false },
  { x: 8412, y: 416, reached: false },
  { x: 10846, y: 382, reached: false },
  { x: 12511, y: 620, reached: false },
  { x: 13059, y: 613, reached: false }, // Final
];
