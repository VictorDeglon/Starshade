// Level 54 Data — "Graven Skyway"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 54";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 546, y: 435, width: 193, height: 23 },
  { x: 985, y: 499, width: 94, height: 29 },
  { x: 1331, y: 581, width: 165, height: 30, bounce: true, bounceStrength: -18 },
  { x: 1660, y: 581, width: 294, height: 26 },
  { x: 2206, y: 688, width: 207, height: 29, moveAxis: "x", moveRange: 81, moveSpeed: 0.045, movePhase: 2.5 },
  { x: 2665, y: 766, width: 158, height: 15 },
  { x: 3069, y: 818, width: 196, height: 26, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 3508, y: 858, width: 168, height: 25 },
  { x: 3676, y: 858, width: 269, height: 20 },
  { x: 4148, y: 834, width: 104, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.37285714285714283 },
  { x: 4447, y: 820, width: 265, height: 20 },
  { x: 5158, y: 806, width: 73, height: 23, bounce: true, bounceStrength: -19 },
  { x: 5652, y: 739, width: 77, height: 16 },
  { x: 6156, y: 675, width: 213, height: 14, moveAxis: "y", moveRange: 88, moveSpeed: 0.058, movePhase: 0.24 },
  { x: 6553, y: 591, width: 125, height: 30, melt: true, meltDelay: 20 },
  { x: 6842, y: 591, width: 373, height: 22 },
  { x: 7617, y: 484, width: 90, height: 25, bounce: true, bounceStrength: -18 },
  { x: 8124, y: 406, width: 231, height: 28, bounce: true, bounceStrength: -16 },
  { x: 8543, y: 335, width: 108, height: 25 },
  { x: 8815, y: 335, width: 329, height: 30 },
  { x: 9361, y: 321, width: 157, height: 25, melt: true, meltDelay: 20 },
  { x: 9751, y: 342, width: 183, height: 25, melt: true, meltDelay: 20 },
  { x: 10177, y: 391, width: 150, height: 17 },
  { x: 10579, y: 470, width: 85, height: 30, moveAxis: "x", moveRange: 113, moveSpeed: 0.042, movePhase: 1.47 },
  { x: 10828, y: 470, width: 180, height: 18 },
  { x: 11260, y: 552, width: 63, height: 18, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 11575, y: 654, width: 67, height: 24, conveyor: true, conveyorSpeed: 1.61 },
  { x: 11894, y: 726, width: 92, height: 24, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 12232, y: 784, width: 190, height: 27, conveyor: true, conveyorSpeed: 1.61 },
  { x: 12586, y: 784, width: 359, height: 14 },
  { x: 13172, y: 784, width: 194, height: 21, melt: true, meltDelay: 20 },
  { x: 13547, y: 791, width: 415, height: 20 },
];

window.deadlyPlatforms = [
  { x: 1109, y: 490, width: 78, height: 20 },
  { x: 2845, y: 769, width: 101, height: 20 },
  { x: 3709, y: 864, width: 109, height: 20 },
  { x: 8671, y: 329, width: 65, height: 20 },
  { x: 10353, y: 382, width: 101, height: 20 },
];

window.spikes = [
  { x: 593, y: 435, size: 55 },
  { x: 1011, y: 499, size: 19 },
  { x: 2714, y: 766, size: 29 },
  { x: 3566, y: 858, size: 19 },
  { x: 5669, y: 739, size: 45 },
  { x: 8560, y: 335, size: 37 },
  { x: 10199, y: 391, size: 30 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1807, y: 551, reached: false },
  { x: 4507, y: 790, reached: false },
  { x: 7029, y: 561, reached: false },
  { x: 8980, y: 305, reached: false },
  { x: 10918, y: 440, reached: false },
  { x: 12766, y: 754, reached: false },
  { x: 13755, y: 761, reached: false }, // Final
];
