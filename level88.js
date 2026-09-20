// Level 88 Data — "Starcross Spire"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 88";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 727, y: 315, width: 73, height: 21 },
  { x: 994, y: 246, width: 61, height: 16, moveAxis: "y", moveRange: 113, moveSpeed: 0.048, movePhase: 5.81 },
  { x: 1472, y: 165, width: 190, height: 27 },
  { x: 2073, y: 75, width: 116, height: 26, bounce: true, bounceStrength: -20 },
  { x: 2348, y: -38, width: 51, height: 26, moveAxis: "x", moveRange: 96, moveSpeed: 0.046, movePhase: 0.66 },
  { x: 2563, y: -38, width: 228, height: 28 },
  { x: 2966, y: -131, width: 108, height: 17 },
  { x: 3481, y: -228, width: 221, height: 14, conveyor: true, conveyorSpeed: -2.18 },
  { x: 3896, y: -294, width: 77, height: 15, bounce: true, bounceStrength: -19 },
  { x: 4404, y: -345, width: 104, height: 14 },
  { x: 4935, y: -402, width: 199, height: 18, bounce: true, bounceStrength: -19 },
  { x: 5134, y: -402, width: 285, height: 20 },
  { x: 5612, y: -415, width: 106, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 5894, y: -444, width: 268, height: 20 },
  { x: 6602, y: -468, width: 232, height: 15 },
  { x: 7057, y: -469, width: 206, height: 30, melt: true, meltDelay: 20 },
  { x: 7713, y: -471, width: 75, height: 27, melt: true, meltDelay: 20 },
  { x: 8015, y: -468, width: 72, height: 21, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 8314, y: -464, width: 166, height: 24, bounce: true, bounceStrength: -19 },
  { x: 8644, y: -464, width: 189, height: 29 },
  { x: 9279, y: -486, width: 72, height: 16, melt: true, meltDelay: 20 },
  { x: 9788, y: -529, width: 129, height: 19, melt: true, meltDelay: 20 },
  { x: 10121, y: -581, width: 172, height: 15 },
  { x: 10720, y: -647, width: 119, height: 15 },
  { x: 11017, y: -737, width: 123, height: 30, melt: true, meltDelay: 20 },
  { x: 11547, y: -833, width: 47, height: 29, moveAxis: "y", moveRange: 106, moveSpeed: 0.054, movePhase: 5.29 },
  { x: 11594, y: -833, width: 272, height: 20 },
  { x: 12060, y: -844, width: 108, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 12357, y: -854, width: 273, height: 20 },
  { x: 12795, y: -961, width: 107, height: 19, bounce: true, bounceStrength: -19 },
  { x: 13304, y: -1067, width: 212, height: 29, conveyor: true, conveyorSpeed: 0.94 },
  { x: 13933, y: -1152, width: 105, height: 26, conveyor: true, conveyorSpeed: 1.74 },
  { x: 14455, y: -1232, width: 179, height: 15, melt: true, meltDelay: 20 },
  { x: 15055, y: -1306, width: 163, height: 14 },
  { x: 15382, y: -1306, width: 206, height: 30 },
  { x: 15792, y: -1351, width: 65, height: 23 },
  { x: 16303, y: -1367, width: 129, height: 18, moveAxis: "y", moveRange: 142, moveSpeed: 0.053, movePhase: 4.67 },
  { x: 16878, y: -1384, width: 128, height: 16 },
  { x: 17456, y: -1385, width: 85, height: 22 },
  { x: 17774, y: -1372, width: 139, height: 27, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 18363, y: -1379, width: 200, height: 22, melt: true, meltDelay: 20 },
  { x: 19009, y: -1398, width: 169, height: 15, melt: true, meltDelay: 20 },
  { x: 19342, y: -1398, width: 227, height: 27 },
  { x: 19786, y: -1419, width: 51, height: 23, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 20005, y: -1418, width: 406, height: 20 },
];

window.deadlyPlatforms = [
  { x: 2272, y: 11, width: 50, height: 22, moveAxis: "y", moveRange: 94, moveSpeed: 0.053, movePhase: 5.29 },
  { x: 11504, y: -784, width: 50, height: 20, moveAxis: "x", moveRange: 119, moveSpeed: 0.052, movePhase: 5.26 },
  { x: 821, y: 325, width: 60, height: 20 },
  { x: 1700, y: 165, width: 158, height: 20 },
  { x: 3100, y: -128, width: 73, height: 20 },
  { x: 4546, y: -342, width: 61, height: 20 },
  { x: 6862, y: -473, width: 121, height: 20 },
  { x: 10315, y: -580, width: 118, height: 20 },
  { x: 10864, y: -643, width: 82, height: 20 },
  { x: 15889, y: -1351, width: 60, height: 20 },
  { x: 17027, y: -1391, width: 79, height: 20 },
  { x: 17564, y: -1393, width: 61, height: 20 },
];

window.spikes = [
  { x: 1508, y: 165, size: 26 },
  { x: 2987, y: -131, size: 48 },
  { x: 4422, y: -345, size: 29 },
  { x: 6676, y: -468, size: 64 },
  { x: 6740, y: -468, size: 12 },
  { x: 6752, y: -468, size: 26 },
  { x: 10171, y: -581, size: 13 },
  { x: 10184, y: -581, size: 28 },
  { x: 10212, y: -581, size: 48 },
  { x: 10761, y: -647, size: 48 },
  { x: 15095, y: -1306, size: 54 },
  { x: 15149, y: -1306, size: 31 },
  { x: 15180, y: -1306, size: 20 },
  { x: 16902, y: -1384, size: 16 },
  { x: 17475, y: -1385, size: 16 },
  { x: 17491, y: -1385, size: 27 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2677, y: -68, reached: false },
  { x: 5954, y: -474, reached: false },
  { x: 8739, y: -494, reached: false },
  { x: 12417, y: -884, reached: false },
  { x: 15485, y: -1336, reached: false },
  { x: 19456, y: -1428, reached: false },
  { x: 20208, y: -1448, reached: false }, // Final
];
