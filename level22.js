// Level 22 Data — "The Last Bastion"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 22";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 434, y: 392, width: 128, height: 36, melt: true, meltDelay: 21 },
  { x: 774, y: 417, width: 71, height: 16, melt: true, meltDelay: 21 },
  { x: 1050, y: 456, width: 169, height: 21 },
  { x: 1423, y: 456, width: 374, height: 42 },
  { x: 1938, y: 549, width: 65, height: 18, moveAxis: "x", moveRange: 102, moveSpeed: 0.04, movePhase: 1.99 },
  { x: 2170, y: 647, width: 226, height: 43 },
  { x: 2560, y: 732, width: 96, height: 17 },
  { x: 2656, y: 732, width: 252, height: 20 },
  { x: 3108, y: 706, width: 95, height: 20, ghost: true, ghostPeriod: 129, ghostOnRatio: 0.4260869565217391 },
  { x: 3403, y: 688, width: 220, height: 20 },
  { x: 3783, y: 723, width: 144, height: 18, melt: true, meltDelay: 21 },
  { x: 4067, y: 761, width: 76, height: 41, melt: true, meltDelay: 21 },
  { x: 4444, y: 749, width: 132, height: 42 },
  { x: 4711, y: 749, width: 281, height: 16 },
  { x: 5126, y: 702, width: 45, height: 45, melt: true, meltDelay: 21 },
  { x: 5342, y: 631, width: 222, height: 31, moveAxis: "y", moveRange: 78, moveSpeed: 0.047, movePhase: 4.66 },
  { x: 5828, y: 542, width: 121, height: 26, moveAxis: "y", moveRange: 90, moveSpeed: 0.044, movePhase: 2.7 },
  { x: 5949, y: 542, width: 267, height: 20 },
  { x: 6425, y: 518, width: 91, height: 20, ghost: true, ghostPeriod: 129, ghostOnRatio: 0.4260869565217391 },
  { x: 6710, y: 501, width: 271, height: 20 },
  { x: 7272, y: 409, width: 150, height: 39, moveAxis: "x", moveRange: 67, moveSpeed: 0.053, movePhase: 4.72 },
  { x: 7741, y: 340, width: 197, height: 39 },
  { x: 8213, y: 280, width: 79, height: 29, moveAxis: "x", moveRange: 100, moveSpeed: 0.036, movePhase: 5.29 },
  { x: 8611, y: 262, width: 205, height: 26, melt: true, meltDelay: 21 },
  { x: 8971, y: 262, width: 332, height: 41 },
  { x: 9503, y: 275, width: 121, height: 36 },
  { x: 9818, y: 308, width: 216, height: 45, ghost: true, ghostPeriod: 130, ghostOnRatio: 0.43260869565217397 },
  { x: 10213, y: 367, width: 113, height: 25, ghost: true, ghostPeriod: 130, ghostOnRatio: 0.43260869565217397 },
  { x: 10505, y: 367, width: 286, height: 18 },
  { x: 10930, y: 464, width: 91, height: 39, ghost: true, ghostPeriod: 130, ghostOnRatio: 0.43260869565217397 },
  { x: 11195, y: 553, width: 150, height: 41, melt: true, meltDelay: 21 },
  { x: 11542, y: 547, width: 398, height: 20 },
];

window.deadlyPlatforms = [
  { x: 2417, y: 651, width: 165, height: 20 },
  { x: 2690, y: 722, width: 66, height: 20 },
];

window.spikes = [
  { x: 1070, y: 456, size: 36 },
  { x: 1106, y: 456, size: 34 },
  { x: 1140, y: 456, size: 26 },
  { x: 1166, y: 456, size: 16 },
  { x: 2207, y: 647, size: 49 },
  { x: 9518, y: 275, size: 43 },
  { x: 9561, y: 275, size: 46 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1610, y: 426, reached: false },
  { x: 3463, y: 658, reached: false },
  { x: 4852, y: 719, reached: false },
  { x: 6770, y: 471, reached: false },
  { x: 9137, y: 232, reached: false },
  { x: 10648, y: 337, reached: false },
  { x: 11741, y: 517, reached: false }, // Final
];
