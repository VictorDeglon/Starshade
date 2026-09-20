// Level 86 Data — "Umbral Spire"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 86";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 527, y: 382, width: 202, height: 25, moveAxis: "y", moveRange: 102, moveSpeed: 0.046, movePhase: 5.96 },
  { x: 952, y: 378, width: 92, height: 15, melt: true, meltDelay: 20 },
  { x: 1494, y: 376, width: 90, height: 15 },
  { x: 2034, y: 367, width: 207, height: 20, melt: true, meltDelay: 20 },
  { x: 2687, y: 351, width: 130, height: 23, moveAxis: "x", moveRange: 135, moveSpeed: 0.068, movePhase: 1.69 },
  { x: 2981, y: 351, width: 263, height: 17 },
  { x: 3452, y: 316, width: 136, height: 16, melt: true, meltDelay: 20 },
  { x: 4019, y: 262, width: 69, height: 16, moveAxis: "x", moveRange: 135, moveSpeed: 0.072, movePhase: 2.88 },
  { x: 4515, y: 201, width: 227, height: 28, conveyor: true, conveyorSpeed: 0.99 },
  { x: 4917, y: 103, width: 183, height: 16 },
  { x: 5511, y: 9, width: 78, height: 14 },
  { x: 5748, y: -105, width: 189, height: 16, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 5937, y: -105, width: 263, height: 20 },
  { x: 6409, y: -134, width: 101, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 6690, y: -159, width: 223, height: 20 },
  { x: 7324, y: -252, width: 167, height: 19 },
  { x: 7902, y: -343, width: 214, height: 17 },
  { x: 8537, y: -411, width: 105, height: 30 },
  { x: 8840, y: -468, width: 82, height: 25 },
  { x: 9135, y: -498, width: 178, height: 18, melt: true, meltDelay: 20 },
  { x: 9753, y: -526, width: 52, height: 29, melt: true, meltDelay: 20 },
  { x: 9805, y: -526, width: 298, height: 20 },
  { x: 10296, y: -543, width: 108, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 10588, y: -554, width: 249, height: 20 },
  { x: 11283, y: -566, width: 85, height: 26, melt: true, meltDelay: 20 },
  { x: 11595, y: -559, width: 98, height: 29, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 11926, y: -547, width: 78, height: 14, moveAxis: "x", moveRange: 115, moveSpeed: 0.053, movePhase: 3.69 },
  { x: 12450, y: -560, width: 142, height: 24, conveyor: true, conveyorSpeed: -1.6 },
  { x: 13038, y: -572, width: 115, height: 22, conveyor: true, conveyorSpeed: -2.03 },
  { x: 13366, y: -603, width: 102, height: 25, moveAxis: "y", moveRange: 112, moveSpeed: 0.072, movePhase: 2.52 },
  { x: 13905, y: -646, width: 215, height: 29 },
  { x: 14284, y: -646, width: 297, height: 21 },
  { x: 15002, y: -714, width: 78, height: 14 },
  { x: 15487, y: -813, width: 58, height: 22, conveyor: true, conveyorSpeed: 1.67 },
  { x: 15710, y: -919, width: 118, height: 29, conveyor: true, conveyorSpeed: 2.09 },
  { x: 16003, y: -1016, width: 115, height: 26, bounce: true, bounceStrength: -18 },
  { x: 16302, y: -1101, width: 75, height: 23 },
  { x: 16784, y: -1204, width: 92, height: 24, moveAxis: "x", moveRange: 109, moveSpeed: 0.052, movePhase: 5.73 },
  { x: 17040, y: -1204, width: 394, height: 18 },
  { x: 17851, y: -1283, width: 124, height: 15, melt: true, meltDelay: 20 },
  { x: 18406, y: -1337, width: 127, height: 27 },
  { x: 18964, y: -1387, width: 231, height: 30, melt: true, meltDelay: 20 },
  { x: 19408, y: -1414, width: 186, height: 16 },
  { x: 20040, y: -1436, width: 130, height: 30, moveAxis: "x", moveRange: 89, moveSpeed: 0.048, movePhase: 4 },
  { x: 20353, y: -1425, width: 413, height: 20 },
];

window.deadlyPlatforms = [
  { x: 20109, y: -1468, width: 78, height: 17, moveAxis: "y", moveRange: 83, moveSpeed: 0.05, movePhase: 5.46 },
  { x: 1607, y: 374, width: 60, height: 20 },
  { x: 5132, y: 98, width: 144, height: 20 },
  { x: 5620, y: 16, width: 60, height: 20 },
  { x: 7516, y: -262, width: 88, height: 20 },
  { x: 8149, y: -342, width: 180, height: 20 },
  { x: 8666, y: -418, width: 94, height: 20 },
  { x: 8950, y: -474, width: 61, height: 20 },
  { x: 14155, y: -647, width: 142, height: 20 },
  { x: 15102, y: -718, width: 60, height: 20 },
  { x: 16403, y: -1099, width: 67, height: 20 },
  { x: 19618, y: -1417, width: 152, height: 20 },
];

window.spikes = [
  { x: 1518, y: 376, size: 29 },
  { x: 1547, y: 376, size: 19 },
  { x: 4971, y: 103, size: 39 },
  { x: 5010, y: 103, size: 29 },
  { x: 5535, y: 9, size: 39 },
  { x: 7373, y: -252, size: 62 },
  { x: 7435, y: -252, size: 13 },
  { x: 7940, y: -343, size: 29 },
  { x: 8558, y: -411, size: 29 },
  { x: 8860, y: -468, size: 23 },
  { x: 13940, y: -646, size: 15 },
  { x: 13955, y: -646, size: 31 },
  { x: 15025, y: -714, size: 21 },
  { x: 18440, y: -1337, size: 38 },
  { x: 18478, y: -1337, size: 12 },
  { x: 19454, y: -1414, size: 26 },
  { x: 19480, y: -1414, size: 43 },
  { x: 19523, y: -1414, size: 28 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 3113, y: 321, reached: false },
  { x: 6750, y: -189, reached: false },
  { x: 10648, y: -584, reached: false },
  { x: 14433, y: -676, reached: false },
  { x: 17237, y: -1234, reached: false },
  { x: 20560, y: -1455, reached: false }, // Final
];
