// Level 100 Data — "Starshade's Eternity"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 100";
window.levelAccent = "#ffe27a";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 750, y: 372, width: 90, height: 15, melt: true, meltDelay: 20 },
  { x: 1286, y: 350, width: 176, height: 21 },
  { x: 1889, y: 284, width: 204, height: 18, melt: true, meltDelay: 20 },
  { x: 2520, y: 228, width: 96, height: 30, moveAxis: "x", moveRange: 130, moveSpeed: 0.077, movePhase: 5.68 },
  { x: 3033, y: 149, width: 161, height: 30, moveAxis: "x", moveRange: 169, moveSpeed: 0.064, movePhase: 3.95 },
  { x: 3601, y: 48, width: 73, height: 25 },
  { x: 3674, y: 48, width: 260, height: 20 },
  { x: 4132, y: 19, width: 107, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 4416, y: -3, width: 225, height: 20 },
  { x: 5048, y: -107, width: 124, height: 22, moveAxis: "y", moveRange: 125, moveSpeed: 0.08, movePhase: 5.88 },
  { x: 5574, y: -218, width: 74, height: 27 },
  { x: 6055, y: -318, width: 65, height: 26, conveyor: true, conveyorSpeed: 2.09 },
  { x: 6308, y: -389, width: 133, height: 18, bounce: true, bounceStrength: -18 },
  { x: 6645, y: -437, width: 75, height: 14, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 6720, y: -437, width: 279, height: 20 },
  { x: 7204, y: -454, width: 101, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 7492, y: -480, width: 263, height: 20 },
  { x: 7963, y: -522, width: 96, height: 24, moveAxis: "x", moveRange: 137, moveSpeed: 0.068, movePhase: 1.37 },
  { x: 8272, y: -550, width: 83, height: 24 },
  { x: 8582, y: -540, width: 84, height: 19, melt: true, meltDelay: 20 },
  { x: 8893, y: -532, width: 185, height: 26, melt: true, meltDelay: 20 },
  { x: 9311, y: -518, width: 57, height: 29, moveAxis: "x", moveRange: 163, moveSpeed: 0.056, movePhase: 3.53 },
  { x: 9591, y: -519, width: 178, height: 20, moveAxis: "x", moveRange: 111, moveSpeed: 0.056, movePhase: 1.13 },
  { x: 9996, y: -516, width: 234, height: 15, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 10230, y: -516, width: 271, height: 20 },
  { x: 10708, y: -527, width: 95, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 10992, y: -542, width: 248, height: 20 },
  { x: 11680, y: -571, width: 186, height: 16 },
  { x: 12060, y: -637, width: 197, height: 16 },
  { x: 12455, y: -697, width: 200, height: 27, moveAxis: "x", moveRange: 123, moveSpeed: 0.06, movePhase: 0.43 },
  { x: 12830, y: -792, width: 160, height: 30 },
  { x: 13174, y: -873, width: 167, height: 14, melt: true, meltDelay: 20 },
  { x: 13341, y: -873, width: 263, height: 20 },
  { x: 13768, y: -908, width: 95, height: 16, gated: true, gateId: "g100_0" },
  { x: 13937, y: -922, width: 201, height: 20 },
  { x: 14545, y: -1020, width: 104, height: 28 },
  { x: 15056, y: -1122, width: 70, height: 27 },
  { x: 15310, y: -1205, width: 191, height: 14, bounce: true, bounceStrength: -19 },
  { x: 15695, y: -1271, width: 164, height: 30, moveAxis: "x", moveRange: 105, moveSpeed: 0.067, movePhase: 2.27 },
  { x: 16286, y: -1337, width: 155, height: 16 },
  { x: 16654, y: -1370, width: 155, height: 25, melt: true, meltDelay: 20 },
  { x: 17255, y: -1387, width: 179, height: 22, moveAxis: "y", moveRange: 105, moveSpeed: 0.074, movePhase: 3.48 },
  { x: 17598, y: -1387, width: 270, height: 18 },
  { x: 18095, y: -1378, width: 145, height: 15, bounce: true, bounceStrength: -19 },
  { x: 18473, y: -1365, width: 57, height: 27, melt: true, meltDelay: 20 },
  { x: 18757, y: -1355, width: 128, height: 18, bounce: true, bounceStrength: -18 },
  { x: 19335, y: -1359, width: 218, height: 19 },
  { x: 20003, y: -1361, width: 118, height: 26, moveAxis: "x", moveRange: 112, moveSpeed: 0.073, movePhase: 3.96 },
  { x: 20310, y: -1355, width: 386, height: 20 },
];

window.deadlyPlatforms = [
  { x: 2568, y: 170, width: 73, height: 22, moveAxis: "y", moveRange: 149, moveSpeed: 0.092, movePhase: 6 },
  { x: 5101, y: -80, width: 71, height: 21, moveAxis: "x", moveRange: 133, moveSpeed: 0.073, movePhase: 4.43 },
  { x: 9250, y: -576, width: 50, height: 21, moveAxis: "y", moveRange: 144, moveSpeed: 0.065, movePhase: 3.11 },
  { x: 12506, y: -735, width: 118, height: 19, moveAxis: "y", moveRange: 127, moveSpeed: 0.06, movePhase: 3.9 },
  { x: 15611, y: -1240, width: 126, height: 18, moveAxis: "y", moveRange: 81, moveSpeed: 0.071, movePhase: 4.97 },
  { x: 20079, y: -1303, width: 73, height: 22, moveAxis: "y", moveRange: 100, moveSpeed: 0.072, movePhase: 1.36 },
  { x: 1492, y: 340, width: 134, height: 20 },
  { x: 3697, y: 38, width: 60, height: 20 },
  { x: 5681, y: -214, width: 60, height: 20 },
  { x: 8391, y: -550, width: 74, height: 20 },
  { x: 11895, y: -569, width: 157, height: 20 },
  { x: 12287, y: -629, width: 168, height: 20 },
  { x: 13021, y: -782, width: 136, height: 20 },
  { x: 14684, y: -1014, width: 73, height: 20 },
  { x: 15157, y: -1114, width: 60, height: 20 },
  { x: 16479, y: -1331, width: 118, height: 20 },
];

window.spikes = [
  { x: 1315, y: 350, size: 33 },
  { x: 1348, y: 350, size: 29 },
  { x: 1377, y: 350, size: 58 },
  { x: 3616, y: 48, size: 29 },
  { x: 5599, y: -218, size: 42 },
  { x: 8298, y: -550, size: 39 },
  { x: 11706, y: -571, size: 16 },
  { x: 11722, y: -571, size: 60 },
  { x: 11782, y: -571, size: 21 },
  { x: 12115, y: -637, size: 48 },
  { x: 12163, y: -637, size: 34 },
  { x: 12197, y: -637, size: 23 },
  { x: 12850, y: -792, size: 40 },
  { x: 12890, y: -792, size: 49 },
  { x: 14575, y: -1020, size: 38 },
  { x: 15072, y: -1122, size: 20 },
  { x: 16317, y: -1337, size: 37 },
  { x: 16354, y: -1337, size: 57 },
  { x: 19380, y: -1359, size: 17 },
  { x: 19397, y: -1359, size: 41 },
  { x: 19438, y: -1359, size: 64 },
  { x: 19502, y: -1359, size: 43 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 4476, y: -33, reached: false },
  { x: 7552, y: -510, reached: false },
  { x: 11052, y: -572, reached: false },
  { x: 13997, y: -952, reached: false },
  { x: 17733, y: -1417, reached: false },
  { x: 20503, y: -1385, reached: false }, // Final
];

window.forceZones = [
  { x: 17608, y: -1477, width: 250, height: 90, axis: "x", force: 0.178 },
];

window.lasers = [
  { x: 923, y: 332, length: 262, width: 4, baseAngle: 1.54, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 1527, y: 307, length: 109, width: 4, baseAngle: 5.86, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 2702, y: 141, length: 165, width: 4, baseAngle: 2.03, sweepAngle: 1.15, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 5733, y: -273, length: 174, width: 4, baseAngle: 1.03, sweepAngle: 0.76, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 6187, y: -360, length: 130, width: 4, baseAngle: 4.54, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 6503, y: -434, length: 177, width: 4, baseAngle: 0.25, sweepAngle: 0.73, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 8119, y: -597, length: 141, width: 4, baseAngle: 4.69, sweepAngle: 1.05, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 9177, y: -611, length: 196, width: 4, baseAngle: 2.22, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 10298, y: -573, length: 228, width: 4, baseAngle: 1.81, sweepAngle: 0.56, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 12332, y: -683, length: 151, width: 4, baseAngle: 2.16, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 13073, y: -871, length: 216, width: 4, baseAngle: 1, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 13419, y: -949, length: 262, width: 4, baseAngle: 0.48, sweepAngle: 1.11, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 15598, y: -1299, length: 251, width: 4, baseAngle: 2.66, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 15945, y: -1343, length: 228, width: 4, baseAngle: 5.79, sweepAngle: 0.96, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 16515, y: -1378, length: 187, width: 4, baseAngle: 2.8, sweepAngle: 1.03, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 16874, y: -1456, length: 242, width: 4, baseAngle: 2.08, sweepAngle: 1.05, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 18308, y: -1441, length: 183, width: 4, baseAngle: 5.59, sweepAngle: 1.13, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 18983, y: -1453, length: 114, width: 4, baseAngle: 2.01, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 20207, y: -1432, length: 185, width: 4, baseAngle: 5.31, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
];

window.fallers = [
  { x: 3768, y: -71, size: 43, triggerX: 3633 },
  { x: 5246, y: -196, size: 50, triggerX: 5112 },
  { x: 6790, y: -528, size: 48, triggerX: 6602 },
  { x: 8429, y: -672, size: 54, triggerX: 8290 },
  { x: 9432, y: -619, size: 25, triggerX: 9234 },
  { x: 9866, y: -623, size: 25, triggerX: 9660 },
  { x: 11960, y: -652, size: 46, triggerX: 11753 },
  { x: 12743, y: -825, size: 30, triggerX: 12565 },
  { x: 14710, y: -1152, size: 48, triggerX: 14557 },
  { x: 17525, y: -1509, size: 28, triggerX: 17323 },
  { x: 18629, y: -1449, size: 30, triggerX: 18480 },
];

window.switches = [
  { x: 13582, y: -903, radius: 26, gateId: "g100_0" },
];
