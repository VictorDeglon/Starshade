// Level 40 Data — "The Hush Between"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 40";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 722, y: 322, width: 58, height: 17 },
  { x: 976, y: 269, width: 150, height: 14 },
  { x: 1567, y: 257, width: 70, height: 30, melt: true, meltDelay: 20 },
  { x: 1867, y: 280, width: 78, height: 22, conveyor: true, conveyorSpeed: 1.23 },
  { x: 2109, y: 280, width: 252, height: 24 },
  { x: 2604, y: 338, width: 190, height: 20, ghost: true, ghostPeriod: 121, ghostOnRatio: 0.4017857142857143 },
  { x: 3043, y: 423, width: 176, height: 23, ghost: true, ghostPeriod: 121, ghostOnRatio: 0.4017857142857143 },
  { x: 3468, y: 508, width: 217, height: 26, ghost: true, ghostPeriod: 121, ghostOnRatio: 0.4017857142857143 },
  { x: 3934, y: 604, width: 163, height: 25 },
  { x: 4261, y: 604, width: 208, height: 16 },
  { x: 4718, y: 682, width: 188, height: 16, conveyor: true, conveyorSpeed: -1.42 },
  { x: 5140, y: 716, width: 84, height: 16, conveyor: true, conveyorSpeed: -1.74 },
  { x: 5458, y: 746, width: 58, height: 23, melt: true, meltDelay: 20 },
  { x: 5957, y: 734, width: 221, height: 29, moveAxis: "y", moveRange: 76, moveSpeed: 0.052, movePhase: 5.24 },
  { x: 6342, y: 734, width: 273, height: 28 },
  { x: 6801, y: 662, width: 234, height: 20 },
  { x: 7217, y: 578, width: 220, height: 28 },
  { x: 7604, y: 478, width: 156, height: 19 },
  { x: 8163, y: 376, width: 162, height: 18, moveAxis: "x", moveRange: 114, moveSpeed: 0.041, movePhase: 3.42 },
  { x: 8489, y: 376, width: 283, height: 30 },
  { x: 9194, y: 311, width: 151, height: 26, bounce: true, bounceStrength: -19 },
  { x: 9767, y: 253, width: 96, height: 26 },
  { x: 10304, y: 232, width: 232, height: 24 },
  { x: 10700, y: 232, width: 224, height: 22 },
  { x: 11154, y: 251, width: 201, height: 28, ghost: true, ghostPeriod: 121, ghostOnRatio: 0.4017857142857143 },
  { x: 11598, y: 315, width: 128, height: 27, ghost: true, ghostPeriod: 121, ghostOnRatio: 0.4017857142857143 },
  { x: 11975, y: 399, width: 165, height: 19, ghost: true, ghostPeriod: 121, ghostOnRatio: 0.4017857142857143 },
  { x: 12389, y: 482, width: 174, height: 25, ghost: true, ghostPeriod: 121, ghostOnRatio: 0.4017857142857143 },
  { x: 12753, y: 479, width: 433, height: 20 },
];

window.deadlyPlatforms = [
  { x: 805, y: 318, width: 60, height: 20 },
  { x: 4123, y: 605, width: 131, height: 20 },
  { x: 7063, y: 661, width: 176, height: 20 },
  { x: 7474, y: 572, width: 183, height: 20 },
  { x: 7786, y: 485, width: 100, height: 20 },
  { x: 10565, y: 223, width: 149, height: 20 },
];

window.spikes = [
  { x: 739, y: 322, size: 12 },
  { x: 1009, y: 269, size: 20 },
  { x: 3979, y: 604, size: 20 },
  { x: 3999, y: 604, size: 47 },
  { x: 6864, y: 662, size: 19 },
  { x: 7266, y: 578, size: 51 },
  { x: 7649, y: 478, size: 33 },
  { x: 7682, y: 478, size: 47 },
  { x: 7729, y: 478, size: 21 },
  { x: 9778, y: 253, size: 42 },
  { x: 9820, y: 253, size: 33 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2235, y: 250, reached: false },
  { x: 4365, y: 574, reached: false },
  { x: 6479, y: 704, reached: false },
  { x: 8631, y: 346, reached: false },
  { x: 10812, y: 202, reached: false },
  { x: 12970, y: 449, reached: false }, // Final
];
