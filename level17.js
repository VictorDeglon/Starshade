// Level 17 Data — "Emberfall Reach"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 17";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 450, y: 436, width: 152, height: 40, moveAxis: "y", moveRange: 101, moveSpeed: 0.04, movePhase: 2.93 },
  { x: 759, y: 501, width: 61, height: 12 },
  { x: 1039, y: 569, width: 224, height: 17 },
  { x: 1451, y: 569, width: 328, height: 45 },
  { x: 1910, y: 596, width: 75, height: 39 },
  { x: 2120, y: 620, width: 86, height: 18, ghost: true, ghostPeriod: 148, ghostOnRatio: 0.48695652173913045 },
  { x: 2412, y: 620, width: 82, height: 35, moveAxis: "x", moveRange: 88, moveSpeed: 0.032, movePhase: 2.26 },
  { x: 2627, y: 603, width: 188, height: 30 },
  { x: 2958, y: 603, width: 297, height: 15 },
  { x: 3456, y: 550, width: 193, height: 34, moveAxis: "y", moveRange: 61, moveSpeed: 0.03, movePhase: 2.78 },
  { x: 3814, y: 467, width: 67, height: 24, melt: true, meltDelay: 23 },
  { x: 4056, y: 402, width: 119, height: 13, ghost: true, ghostPeriod: 148, ghostOnRatio: 0.48695652173913045 },
  { x: 4175, y: 402, width: 268, height: 20 },
  { x: 4645, y: 386, width: 102, height: 20, ghost: true, ghostPeriod: 144, ghostOnRatio: 0.4695652173913043 },
  { x: 4937, y: 363, width: 224, height: 20 },
  { x: 5301, y: 315, width: 217, height: 43, moveAxis: "y", moveRange: 69, moveSpeed: 0.031, movePhase: 3.75 },
  { x: 5706, y: 283, width: 83, height: 33 },
  { x: 6076, y: 271, width: 198, height: 24 },
  { x: 6551, y: 262, width: 200, height: 24 },
  { x: 6950, y: 262, width: 315, height: 15 },
  { x: 7398, y: 296, width: 74, height: 30, moveAxis: "x", moveRange: 63, moveSpeed: 0.035, movePhase: 0.8 },
  { x: 7687, y: 351, width: 215, height: 41 },
  { x: 8118, y: 410, width: 176, height: 31 },
  { x: 8504, y: 496, width: 134, height: 35 },
  { x: 8838, y: 496, width: 326, height: 39 },
  { x: 9330, y: 543, width: 83, height: 22 },
  { x: 9614, y: 579, width: 103, height: 23 },
  { x: 9916, y: 564, width: 396, height: 20 },
];

window.deadlyPlatforms = [
  { x: 1291, y: 578, width: 142, height: 20 },
  { x: 2024, y: 591, width: 60, height: 20 },
  { x: 5811, y: 288, width: 65, height: 20 },
  { x: 6774, y: 254, width: 171, height: 20 },
  { x: 9435, y: 544, width: 60, height: 20 },
  { x: 9743, y: 574, width: 64, height: 20 },
];

window.spikes = [
  { x: 767, y: 501, size: 26 },
  { x: 1084, y: 569, size: 33 },
  { x: 2666, y: 603, size: 33 },
  { x: 5719, y: 283, size: 33 },
  { x: 5752, y: 283, size: 24 },
  { x: 6104, y: 271, size: 15 },
  { x: 6119, y: 271, size: 42 },
  { x: 7719, y: 351, size: 30 },
  { x: 8170, y: 410, size: 21 },
  { x: 8191, y: 410, size: 21 },
  { x: 8530, y: 496, size: 39 },
  { x: 9355, y: 543, size: 39 },
  { x: 9629, y: 579, size: 24 },
  { x: 9653, y: 579, size: 17 },
  { x: 9670, y: 579, size: 16 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1615, y: 539, reached: false },
  { x: 3107, y: 573, reached: false },
  { x: 4997, y: 333, reached: false },
  { x: 7108, y: 232, reached: false },
  { x: 9001, y: 466, reached: false },
  { x: 10114, y: 534, reached: false }, // Final
];
