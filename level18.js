// Level 18 Data — "Phantom Causeway"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 18";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 523, y: 430, width: 79, height: 15, ghost: true, ghostPeriod: 144, ghostOnRatio: 0.47608695652173916 },
  { x: 829, y: 481, width: 112, height: 25, moveAxis: "x", moveRange: 94, moveSpeed: 0.036, movePhase: 4.42 },
  { x: 1159, y: 510, width: 138, height: 21, ghost: true, ghostPeriod: 144, ghostOnRatio: 0.47608695652173916 },
  { x: 1506, y: 513, width: 135, height: 27 },
  { x: 1805, y: 513, width: 260, height: 27 },
  { x: 2253, y: 464, width: 82, height: 24 },
  { x: 2723, y: 393, width: 152, height: 23 },
  { x: 3254, y: 306, width: 181, height: 23, melt: true, meltDelay: 23 },
  { x: 3599, y: 306, width: 336, height: 29 },
  { x: 4323, y: 232, width: 60, height: 24, melt: true, meltDelay: 23 },
  { x: 4565, y: 178, width: 94, height: 19 },
  { x: 5061, y: 139, width: 158, height: 27 },
  { x: 5419, y: 126, width: 118, height: 28, moveAxis: "x", moveRange: 77, moveSpeed: 0.039, movePhase: 0.62 },
  { x: 5701, y: 126, width: 298, height: 15 },
  { x: 6213, y: 145, width: 135, height: 18, ghost: true, ghostPeriod: 144, ghostOnRatio: 0.47608695652173916 },
  { x: 6575, y: 203, width: 142, height: 22, melt: true, meltDelay: 23 },
  { x: 6944, y: 260, width: 153, height: 20, ghost: true, ghostPeriod: 144, ghostOnRatio: 0.47608695652173916 },
  { x: 7261, y: 260, width: 330, height: 24 },
  { x: 7818, y: 324, width: 121, height: 26, ghost: true, ghostPeriod: 144, ghostOnRatio: 0.47608695652173916 },
  { x: 8171, y: 394, width: 164, height: 29 },
  { x: 8562, y: 446, width: 175, height: 25, moveAxis: "x", moveRange: 59, moveSpeed: 0.034, movePhase: 5.56 },
  { x: 8901, y: 446, width: 294, height: 17 },
  { x: 9413, y: 477, width: 97, height: 30, moveAxis: "x", moveRange: 74, moveSpeed: 0.033, movePhase: 2.64 },
  { x: 9710, y: 459, width: 82, height: 29, moveAxis: "x", moveRange: 95, moveSpeed: 0.035, movePhase: 0.87 },
  { x: 9983, y: 424, width: 130, height: 29, moveAxis: "x", moveRange: 98, moveSpeed: 0.035, movePhase: 4.61 },
  { x: 10315, y: 432, width: 389, height: 20 },
];

window.deadlyPlatforms = [
  { x: 1677, y: 512, width: 101, height: 20 },
  { x: 4686, y: 172, width: 81, height: 20 },
  { x: 8356, y: 395, width: 105, height: 20 },
];

window.spikes = [
  { x: 2272, y: 464, size: 17 },
  { x: 2289, y: 464, size: 29 },
  { x: 2763, y: 393, size: 39 },
  { x: 2802, y: 393, size: 43 },
  { x: 5114, y: 139, size: 24 },
  { x: 5138, y: 139, size: 39 },
  { x: 8213, y: 394, size: 43 },
  { x: 8256, y: 394, size: 20 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1935, y: 483, reached: false },
  { x: 3767, y: 276, reached: false },
  { x: 5850, y: 96, reached: false },
  { x: 7426, y: 230, reached: false },
  { x: 9048, y: 416, reached: false },
  { x: 10510, y: 402, reached: false }, // Final
];
