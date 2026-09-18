// Level 23 Data — "Eclipse Corridor"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 23";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 476, y: 455, width: 160, height: 19 },
  { x: 855, y: 524, width: 178, height: 41 },
  { x: 1243, y: 619, width: 56, height: 34, melt: true, meltDelay: 21 },
  { x: 1477, y: 690, width: 188, height: 12, ghost: true, ghostPeriod: 127, ghostOnRatio: 0.4217391304347826 },
  { x: 1834, y: 690, width: 338, height: 41 },
  { x: 2350, y: 748, width: 186, height: 35 },
  { x: 2717, y: 774, width: 114, height: 33, melt: true, meltDelay: 21 },
  { x: 3159, y: 772, width: 93, height: 17, moveAxis: "x", moveRange: 74, moveSpeed: 0.042, movePhase: 0.45 },
  { x: 3409, y: 772, width: 326, height: 26 },
  { x: 4001, y: 710, width: 49, height: 39, melt: true, meltDelay: 21 },
  { x: 4326, y: 651, width: 143, height: 28 },
  { x: 4626, y: 555, width: 59, height: 38, ghost: true, ghostPeriod: 127, ghostOnRatio: 0.4217391304347826 },
  { x: 4839, y: 555, width: 345, height: 27 },
  { x: 5379, y: 478, width: 234, height: 17, melt: true, meltDelay: 21 },
  { x: 5763, y: 421, width: 200, height: 42 },
  { x: 6139, y: 388, width: 182, height: 21, melt: true, meltDelay: 21 },
  { x: 6463, y: 368, width: 156, height: 26, ghost: true, ghostPeriod: 127, ghostOnRatio: 0.4217391304347826 },
  { x: 6619, y: 368, width: 242, height: 20 },
  { x: 7051, y: 349, width: 95, height: 20, ghost: true, ghostPeriod: 126, ghostOnRatio: 0.41739130434782606 },
  { x: 7340, y: 322, width: 267, height: 20 },
  { x: 7790, y: 350, width: 137, height: 25, melt: true, meltDelay: 21 },
  { x: 8121, y: 417, width: 89, height: 19, ghost: true, ghostPeriod: 127, ghostOnRatio: 0.4217391304347826 },
  { x: 8343, y: 496, width: 170, height: 39, melt: true, meltDelay: 21 },
  { x: 8689, y: 496, width: 267, height: 26 },
  { x: 9136, y: 588, width: 218, height: 38, moveAxis: "x", moveRange: 71, moveSpeed: 0.037, movePhase: 6.23 },
  { x: 9485, y: 656, width: 117, height: 45, ghost: true, ghostPeriod: 127, ghostOnRatio: 0.4217391304347826 },
  { x: 9799, y: 721, width: 101, height: 20, melt: true, meltDelay: 21 },
  { x: 10077, y: 721, width: 305, height: 20 },
  { x: 10525, y: 746, width: 55, height: 40, melt: true, meltDelay: 21 },
  { x: 10741, y: 743, width: 410, height: 20 },
];

window.deadlyPlatforms = [
  { x: 664, y: 445, width: 88, height: 20 },
  { x: 1057, y: 524, width: 140, height: 20 },
  { x: 4496, y: 648, width: 98, height: 20 },
];

window.spikes = [
  { x: 500, y: 455, size: 49 },
  { x: 549, y: 455, size: 39 },
  { x: 588, y: 455, size: 30 },
  { x: 4354, y: 651, size: 28 },
  { x: 4382, y: 651, size: 26 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2003, y: 660, reached: false },
  { x: 3572, y: 742, reached: false },
  { x: 5012, y: 525, reached: false },
  { x: 7400, y: 292, reached: false },
  { x: 8823, y: 466, reached: false },
  { x: 10230, y: 691, reached: false },
  { x: 10946, y: 713, reached: false }, // Final
];
