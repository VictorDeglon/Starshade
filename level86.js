// Level 86 Data — "Umbral Spire"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 86";
window.levelAccent = "#ffd15c";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 527, y: 382, width: 202, height: 25, moveAxis: "x", moveRange: 114, moveSpeed: 0.053, movePhase: 6.15 },
  { x: 952, y: 378, width: 92, height: 15, conveyor: true, conveyorSpeed: 1.25 },
  { x: 1494, y: 376, width: 90, height: 15, melt: true, meltDelay: 20 },
  { x: 2034, y: 367, width: 207, height: 20, moveAxis: "x", moveRange: 135, moveSpeed: 0.072, movePhase: 2.88 },
  { x: 2687, y: 351, width: 130, height: 23, conveyor: true, conveyorSpeed: 0.99 },
  { x: 2817, y: 351, width: 242, height: 20 },
  { x: 3217, y: 323, width: 104, height: 16, gated: true, gateId: "g86_0" },
  { x: 3404, y: 334, width: 210, height: 20 },
  { x: 4045, y: 287, width: 92, height: 16 },
  { x: 4558, y: 217, width: 150, height: 30 },
  { x: 4896, y: 143, width: 204, height: 26 },
  { x: 5507, y: 46, width: 120, height: 17 },
  { x: 5802, y: -47, width: 189, height: 26, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 5991, y: -47, width: 243, height: 20 },
  { x: 6403, y: -88, width: 91, height: 16, gated: true, gateId: "g86_1" },
  { x: 6567, y: -96, width: 257, height: 20 },
  { x: 7235, y: -188, width: 120, height: 24 },
  { x: 7520, y: -294, width: 46, height: 29 },
  { x: 7983, y: -375, width: 117, height: 19, melt: true, meltDelay: 20 },
  { x: 8284, y: -455, width: 164, height: 17, melt: true, meltDelay: 20 },
  { x: 8885, y: -496, width: 190, height: 25, melt: true, meltDelay: 20 },
  { x: 9239, y: -496, width: 188, height: 29 },
  { x: 9877, y: -507, width: 229, height: 20 },
  { x: 10552, y: -527, width: 164, height: 22, moveAxis: "x", moveRange: 115, moveSpeed: 0.053, movePhase: 3.69 },
  { x: 11162, y: -539, width: 85, height: 26, conveyor: true, conveyorSpeed: -1.6 },
  { x: 11474, y: -532, width: 98, height: 29, conveyor: true, conveyorSpeed: -2.03 },
  { x: 11805, y: -520, width: 78, height: 14, moveAxis: "y", moveRange: 112, moveSpeed: 0.072, movePhase: 2.52 },
  { x: 11883, y: -520, width: 270, height: 20 },
  { x: 12343, y: -542, width: 100, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 12630, y: -562, width: 249, height: 20 },
  { x: 13096, y: -579, width: 102, height: 25 },
  { x: 13638, y: -606, width: 215, height: 29, bounce: true, bounceStrength: -19 },
  { x: 14284, y: -661, width: 146, height: 21, bounce: true, bounceStrength: -17 },
  { x: 14861, y: -713, width: 78, height: 14, moveAxis: "y", moveRange: 138, moveSpeed: 0.061, movePhase: 3.42 },
  { x: 15356, y: -799, width: 58, height: 22 },
  { x: 15589, y: -896, width: 118, height: 29, moveAxis: "x", moveRange: 109, moveSpeed: 0.052, movePhase: 5.73 },
  { x: 15871, y: -896, width: 339, height: 29 },
  { x: 16617, y: -1000, width: 146, height: 27, melt: true, meltDelay: 20 },
  { x: 17170, y: -1099, width: 160, height: 14 },
  { x: 17514, y: -1179, width: 90, height: 19, melt: true, meltDelay: 20 },
  { x: 18025, y: -1255, width: 57, height: 28 },
  { x: 18509, y: -1316, width: 197, height: 14, moveAxis: "x", moveRange: 89, moveSpeed: 0.048, movePhase: 4 },
  { x: 18910, y: -1366, width: 232, height: 29, moveAxis: "y", moveRange: 151, moveSpeed: 0.072, movePhase: 3.8 },
  { x: 19306, y: -1366, width: 297, height: 29 },
  { x: 19820, y: -1387, width: 149, height: 23, conveyor: true, conveyorSpeed: 1.5 },
  { x: 20186, y: -1408, width: 188, height: 18 },
  { x: 20580, y: -1403, width: 381, height: 20 },
];

window.deadlyPlatforms = [
  { x: 464, y: 416, width: 149, height: 16, moveAxis: "y", moveRange: 120, moveSpeed: 0.052, movePhase: 0.92 },
  { x: 1974, y: 321, width: 129, height: 15, moveAxis: "y", moveRange: 149, moveSpeed: 0.076, movePhase: 2.05 },
  { x: 10605, y: -478, width: 94, height: 25, moveAxis: "y", moveRange: 130, moveSpeed: 0.056, movePhase: 2.57 },
  { x: 11888, y: -569, width: 50, height: 23, moveAxis: "x", moveRange: 123, moveSpeed: 0.089, movePhase: 0.16 },
  { x: 15548, y: -946, width: 101, height: 16, moveAxis: "y", moveRange: 100, moveSpeed: 0.062, movePhase: 4.09 },
  { x: 18567, y: -1280, width: 133, height: 17, moveAxis: "y", moveRange: 107, moveSpeed: 0.052, movePhase: 1.27 },
  { x: 18986, y: -1419, width: 171, height: 16, moveAxis: "x", moveRange: 152, moveSpeed: 0.071, movePhase: 2.57 },
  { x: 4164, y: 286, width: 75, height: 20 },
  { x: 4731, y: 210, width: 93, height: 20 },
  { x: 7379, y: -191, width: 98, height: 20 },
  { x: 7605, y: -291, width: 60, height: 20 },
  { x: 10136, y: -508, width: 205, height: 20 },
  { x: 13226, y: -582, width: 78, height: 20 },
  { x: 15445, y: -796, width: 60, height: 20 },
  { x: 17364, y: -1100, width: 100, height: 20 },
  { x: 18113, y: -1254, width: 60, height: 20 },
  { x: 20399, y: -1398, width: 143, height: 20 },
];

window.spikes = [
  { x: 4070, y: 287, size: 20 },
  { x: 4090, y: 287, size: 21 },
  { x: 4590, y: 217, size: 31 },
  { x: 4621, y: 217, size: 50 },
  { x: 4671, y: 217, size: 21 },
  { x: 4929, y: 143, size: 60 },
  { x: 4989, y: 143, size: 31 },
  { x: 5020, y: 143, size: 30 },
  { x: 5050, y: 143, size: 42 },
  { x: 5539, y: 46, size: 38 },
  { x: 5577, y: 46, size: 12 },
  { x: 7264, y: -188, size: 26 },
  { x: 7290, y: -188, size: 43 },
  { x: 7534, y: -294, size: 21 },
  { x: 9960, y: -507, size: 18 },
  { x: 9978, y: -507, size: 35 },
  { x: 10013, y: -507, size: 28 },
  { x: 15374, y: -799, size: 30 },
  { x: 17202, y: -1099, size: 44 },
  { x: 20250, y: -1408, size: 52 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 3464, y: 304, reached: false },
  { x: 6627, y: -126, reached: false },
  { x: 9333, y: -526, reached: false },
  { x: 12690, y: -592, reached: false },
  { x: 16041, y: -926, reached: false },
  { x: 19455, y: -1396, reached: false },
  { x: 20771, y: -1433, reached: false }, // Final
];

window.forceZones = [
  { x: 19316, y: -1456, width: 277, height: 90, axis: "x", force: -0.173 },
];

window.lasers = [
  { x: 826, y: 317, length: 156, width: 4, baseAngle: 4.59, sweepAngle: 0.87, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 1104, y: 326, length: 152, width: 4, baseAngle: 1.98, sweepAngle: 0.96, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 1648, y: 325, length: 256, width: 4, baseAngle: 2.47, sweepAngle: 0.56, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 2334, y: 268, length: 205, width: 4, baseAngle: 0.31, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 2883, y: 275, length: 100, width: 4, baseAngle: 4.53, sweepAngle: 0.88, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 5185, y: 81, length: 202, width: 4, baseAngle: 1.06, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 7453, y: -233, length: 239, width: 4, baseAngle: 0.86, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 8161, y: -462, length: 219, width: 4, baseAngle: 3.65, sweepAngle: 0.69, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 8531, y: -540, length: 169, width: 4, baseAngle: 1.21, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 10794, y: -568, length: 257, width: 4, baseAngle: 2.92, sweepAngle: 0.57, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 11314, y: -595, length: 215, width: 4, baseAngle: 4, sweepAngle: 0.73, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 14507, y: -711, length: 231, width: 4, baseAngle: 0.4, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 15036, y: -797, length: 112, width: 4, baseAngle: 2.22, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 15477, y: -859, length: 130, width: 4, baseAngle: 3.67, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 15801, y: -994, length: 262, width: 4, baseAngle: 4.03, sweepAngle: 1.04, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 16828, y: -1066, length: 258, width: 4, baseAngle: 2.71, sweepAngle: 0.89, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 17398, y: -1177, length: 221, width: 4, baseAngle: 2.64, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 18143, y: -1328, length: 187, width: 4, baseAngle: 1.55, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 19239, y: -1456, length: 132, width: 4, baseAngle: 3.62, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
];

window.fallers = [
  { x: 5723, y: -40, size: 28, triggerX: 5578 },
  { x: 6060, y: -130, size: 30, triggerX: 5915 },
  { x: 9159, y: -591, size: 23, triggerX: 9015 },
  { x: 11650, y: -641, size: 51, triggerX: 11510 },
  { x: 13943, y: -702, size: 29, triggerX: 13777 },
  { x: 17699, y: -1289, size: 29, triggerX: 17496 },
  { x: 18804, y: -1448, size: 40, triggerX: 18667 },
];

window.switches = [
  { x: 3037, y: 321, radius: 26, gateId: "g86_0" },
  { x: 6212, y: -77, radius: 26, gateId: "g86_1" },
];
