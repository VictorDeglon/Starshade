// Level 93 Data — "The Drowned Zenith"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 93";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 527, y: 384, width: 88, height: 27, melt: true, meltDelay: 20 },
  { x: 1061, y: 369, width: 56, height: 23, conveyor: true, conveyorSpeed: -1.53 },
  { x: 1330, y: 346, width: 73, height: 28, conveyor: true, conveyorSpeed: 1.1 },
  { x: 1840, y: 310, width: 101, height: 22, melt: true, meltDelay: 20 },
  { x: 2145, y: 261, width: 90, height: 28 },
  { x: 2399, y: 261, width: 201, height: 21 },
  { x: 2778, y: 174, width: 113, height: 17 },
  { x: 3075, y: 95, width: 189, height: 25, melt: true, meltDelay: 20 },
  { x: 3671, y: -7, width: 200, height: 28 },
  { x: 4278, y: -112, width: 206, height: 17, conveyor: true, conveyorSpeed: 1.24 },
  { x: 4649, y: -221, width: 176, height: 24 },
  { x: 4994, y: -322, width: 180, height: 20, melt: true, meltDelay: 20 },
  { x: 5338, y: -322, width: 348, height: 23 },
  { x: 5880, y: -388, width: 131, height: 28, melt: true, meltDelay: 20 },
  { x: 6205, y: -451, width: 78, height: 22 },
  { x: 6729, y: -474, width: 149, height: 24 },
  { x: 7091, y: -502, width: 90, height: 20 },
  { x: 7631, y: -507, width: 201, height: 27, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 8059, y: -498, width: 127, height: 17, bounce: true, bounceStrength: -16 },
  { x: 8409, y: -505, width: 210, height: 25, bounce: true, bounceStrength: -18 },
  { x: 8783, y: -505, width: 216, height: 21 },
  { x: 9449, y: -510, width: 141, height: 30 },
  { x: 10030, y: -538, width: 80, height: 20, moveAxis: "x", moveRange: 108, moveSpeed: 0.052, movePhase: 0.69 },
  { x: 10547, y: -581, width: 200, height: 15, moveAxis: "y", moveRange: 115, moveSpeed: 0.054, movePhase: 5.69 },
  { x: 11184, y: -618, width: 86, height: 15 },
  { x: 11691, y: -689, width: 101, height: 19, bounce: true, bounceStrength: -20 },
  { x: 12203, y: -779, width: 139, height: 19 },
  { x: 12511, y: -881, width: 47, height: 23, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 12722, y: -881, width: 302, height: 19 },
  { x: 13431, y: -984, width: 104, height: 18 },
  { x: 13704, y: -1084, width: 220, height: 20, moveAxis: "y", moveRange: 105, moveSpeed: 0.061, movePhase: 5.93 },
  { x: 14326, y: -1190, width: 166, height: 23 },
  { x: 14903, y: -1283, width: 125, height: 14 },
  { x: 15222, y: -1348, width: 87, height: 17, conveyor: true, conveyorSpeed: 1.67 },
  { x: 15473, y: -1348, width: 285, height: 15 },
  { x: 16198, y: -1382, width: 46, height: 19 },
  { x: 16690, y: -1402, width: 128, height: 21, moveAxis: "x", moveRange: 124, moveSpeed: 0.062, movePhase: 1.84 },
  { x: 17035, y: -1414, width: 152, height: 23, bounce: true, bounceStrength: -17 },
  { x: 17414, y: -1408, width: 170, height: 25, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 17811, y: -1400, width: 119, height: 27 },
  { x: 18093, y: -1407, width: 393, height: 20 },
];

window.deadlyPlatforms = [
  { x: 9970, y: -591, width: 50, height: 20, moveAxis: "y", moveRange: 91, moveSpeed: 0.054, movePhase: 1.59 },
  { x: 13621, y: -1034, width: 134, height: 18, moveAxis: "x", moveRange: 93, moveSpeed: 0.052, movePhase: 5.64 },
  { x: 2260, y: 261, width: 60, height: 20 },
  { x: 2921, y: 184, width: 60, height: 20 },
  { x: 3909, y: -1, width: 168, height: 20 },
  { x: 4845, y: -228, width: 156, height: 20 },
  { x: 6309, y: -455, width: 60, height: 20 },
  { x: 6908, y: -469, width: 120, height: 20 },
  { x: 7205, y: -493, width: 60, height: 20 },
  { x: 9610, y: -515, width: 73, height: 20 },
  { x: 11293, y: -616, width: 60, height: 20 },
  { x: 12372, y: -776, width: 98, height: 20 },
  { x: 13574, y: -987, width: 93, height: 20 },
  { x: 14514, y: -1184, width: 88, height: 20 },
  { x: 15052, y: -1287, width: 64, height: 20 },
  { x: 16269, y: -1390, width: 60, height: 20 },
  { x: 17955, y: -1403, width: 70, height: 20 },
];

window.spikes = [
  { x: 2158, y: 261, size: 61 },
  { x: 2818, y: 174, size: 55 },
  { x: 3740, y: -7, size: 48 },
  { x: 3788, y: -7, size: 14 },
  { x: 4685, y: -221, size: 26 },
  { x: 4711, y: -221, size: 59 },
  { x: 6783, y: -474, size: 59 },
  { x: 7115, y: -502, size: 37 },
  { x: 11213, y: -618, size: 45 },
  { x: 12234, y: -779, size: 24 },
  { x: 12258, y: -779, size: 58 },
  { x: 13468, y: -984, size: 60 },
  { x: 14370, y: -1190, size: 61 },
  { x: 14940, y: -1283, size: 50 },
  { x: 14990, y: -1283, size: 15 },
  { x: 17826, y: -1400, size: 34 },
  { x: 17860, y: -1400, size: 58 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2500, y: 231, reached: false },
  { x: 5512, y: -352, reached: false },
  { x: 8891, y: -535, reached: false },
  { x: 12873, y: -911, reached: false },
  { x: 15616, y: -1378, reached: false },
  { x: 18290, y: -1437, reached: false }, // Final
];
