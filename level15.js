// Level 15 Data — "Wraith's Crossing"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 15";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 606, y: 342, width: 51, height: 23 },
  { x: 795, y: 315, width: 102, height: 41 },
  { x: 1095, y: 306, width: 75, height: 14, ghost: true, ghostPeriod: 155, ghostOnRatio: 0.5086956521739131 },
  { x: 1345, y: 306, width: 299, height: 29 },
  { x: 1843, y: 347, width: 140, height: 18 },
  { x: 2169, y: 391, width: 219, height: 16, ghost: true, ghostPeriod: 155, ghostOnRatio: 0.5086956521739131 },
  { x: 2535, y: 450, width: 70, height: 38 },
  { x: 2795, y: 450, width: 298, height: 26 },
  { x: 3252, y: 520, width: 166, height: 35, melt: true, meltDelay: 24 },
  { x: 3562, y: 567, width: 208, height: 38, moveAxis: "y", moveRange: 65, moveSpeed: 0.039, movePhase: 0.48 },
  { x: 3987, y: 625, width: 204, height: 32, ghost: true, ghostPeriod: 155, ghostOnRatio: 0.5086956521739131 },
  { x: 4191, y: 625, width: 254, height: 20 },
  { x: 4652, y: 602, width: 107, height: 20, ghost: true, ghostPeriod: 150, ghostOnRatio: 0.4869565217391304 },
  { x: 4941, y: 578, width: 271, height: 20 },
  { x: 5413, y: 582, width: 149, height: 14 },
  { x: 5728, y: 558, width: 104, height: 32 },
  { x: 6024, y: 518, width: 201, height: 27 },
  { x: 6411, y: 518, width: 384, height: 30 },
  { x: 6942, y: 441, width: 139, height: 19 },
  { x: 7284, y: 383, width: 63, height: 17 },
  { x: 7500, y: 326, width: 110, height: 33 },
  { x: 7784, y: 326, width: 236, height: 39 },
  { x: 8220, y: 294, width: 172, height: 33 },
  { x: 8693, y: 259, width: 149, height: 20 },
  { x: 9127, y: 257, width: 142, height: 28, ghost: true, ghostPeriod: 155, ghostOnRatio: 0.5086956521739131 },
  { x: 9478, y: 274, width: 216, height: 15 },
  { x: 9858, y: 266, width: 399, height: 20 },
];

window.deadlyPlatforms = [
  { x: 684, y: 341, width: 60, height: 20 },
  { x: 918, y: 308, width: 89, height: 20 },
  { x: 2015, y: 353, width: 86, height: 20 },
  { x: 2632, y: 457, width: 60, height: 20 },
  { x: 6245, y: 509, width: 145, height: 20 },
  { x: 7370, y: 378, width: 60, height: 20 },
  { x: 8870, y: 255, width: 110, height: 20 },
  { x: 9717, y: 264, width: 191, height: 20 },
];

window.spikes = [
  { x: 830, y: 315, size: 25 },
  { x: 2558, y: 450, size: 37 },
  { x: 5457, y: 582, size: 40 },
  { x: 7531, y: 326, size: 25 },
  { x: 7556, y: 326, size: 26 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1495, y: 276, reached: false },
  { x: 2944, y: 420, reached: false },
  { x: 5001, y: 548, reached: false },
  { x: 6603, y: 488, reached: false },
  { x: 7902, y: 296, reached: false },
  { x: 10058, y: 236, reached: false }, // Final
];
