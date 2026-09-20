// Level 66 Data — "The Faultline Reach"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 66";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 750, y: 375, width: 53, height: 24, conveyor: true, conveyorSpeed: 1.88 },
  { x: 1046, y: 421, width: 75, height: 14, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 1373, y: 488, width: 147, height: 21, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 1772, y: 573, width: 130, height: 19, melt: true, meltDelay: 20 },
  { x: 2066, y: 573, width: 283, height: 22 },
  { x: 2601, y: 677, width: 96, height: 18, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 2949, y: 770, width: 166, height: 19, bounce: true, bounceStrength: -19 },
  { x: 3367, y: 841, width: 50, height: 17, conveyor: true, conveyorSpeed: 1.92 },
  { x: 3663, y: 899, width: 197, height: 17, conveyor: true, conveyorSpeed: 0.94 },
  { x: 4024, y: 899, width: 278, height: 16 },
  { x: 4529, y: 903, width: 77, height: 23, bounce: true, bounceStrength: -16 },
  { x: 4810, y: 857, width: 221, height: 17, conveyor: true, conveyorSpeed: -1.15 },
  { x: 5462, y: 807, width: 200, height: 18 },
  { x: 5826, y: 807, width: 214, height: 26 },
  { x: 6451, y: 712, width: 200, height: 23, melt: true, meltDelay: 20 },
  { x: 7062, y: 622, width: 73, height: 21 },
  { x: 7537, y: 511, width: 209, height: 19 },
  { x: 7910, y: 511, width: 328, height: 17 },
  { x: 8442, y: 464, width: 180, height: 17 },
  { x: 8839, y: 443, width: 191, height: 22 },
  { x: 9257, y: 454, width: 118, height: 25, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 9608, y: 472, width: 225, height: 26, conveyor: true, conveyorSpeed: -1.65 },
  { x: 9997, y: 472, width: 305, height: 17 },
  { x: 10554, y: 562, width: 147, height: 19, melt: true, meltDelay: 20 },
  { x: 10953, y: 650, width: 78, height: 29, moveAxis: "x", moveRange: 99, moveSpeed: 0.05, movePhase: 3.32 },
  { x: 11283, y: 743, width: 164, height: 28, melt: true, meltDelay: 20 },
  { x: 11447, y: 743, width: 247, height: 20 },
  { x: 11884, y: 727, width: 98, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 12183, y: 698, width: 237, height: 20 },
  { x: 12672, y: 780, width: 199, height: 21, melt: true, meltDelay: 20 },
  { x: 13123, y: 854, width: 133, height: 19, melt: true, meltDelay: 20 },
  { x: 13493, y: 888, width: 199, height: 21 },
  { x: 13925, y: 905, width: 201, height: 17, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 14299, y: 918, width: 394, height: 20 },
];

window.deadlyPlatforms = [
  { x: 5701, y: 806, width: 174, height: 20 },
  { x: 7157, y: 617, width: 60, height: 20 },
  { x: 7772, y: 515, width: 168, height: 20 },
  { x: 8647, y: 458, width: 137, height: 20 },
  { x: 13727, y: 893, width: 103, height: 20 },
];

window.spikes = [
  { x: 5515, y: 807, size: 54 },
  { x: 5569, y: 807, size: 45 },
  { x: 7075, y: 622, size: 49 },
  { x: 7611, y: 511, size: 16 },
  { x: 7627, y: 511, size: 39 },
  { x: 8494, y: 464, size: 30 },
  { x: 8524, y: 464, size: 48 },
  { x: 8572, y: 464, size: 39 },
  { x: 8892, y: 443, size: 37 },
  { x: 13529, y: 888, size: 54 },
  { x: 13583, y: 888, size: 42 },
  { x: 13625, y: 888, size: 52 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2208, y: 543, reached: false },
  { x: 4163, y: 869, reached: false },
  { x: 5933, y: 777, reached: false },
  { x: 8074, y: 481, reached: false },
  { x: 10150, y: 442, reached: false },
  { x: 12243, y: 668, reached: false },
  { x: 14496, y: 888, reached: false }, // Final
];
