// Level 93 Data — "The Drowned Zenith"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 93";
window.levelAccent = "#4de8d8";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 527, y: 384, width: 88, height: 27 },
  { x: 1061, y: 369, width: 56, height: 23, moveAxis: "x", moveRange: 146, moveSpeed: 0.076, movePhase: 1.64 },
  { x: 1330, y: 346, width: 73, height: 28 },
  { x: 1840, y: 310, width: 101, height: 22, melt: true, meltDelay: 20 },
  { x: 2145, y: 261, width: 90, height: 28, melt: true, meltDelay: 20 },
  { x: 2399, y: 261, width: 282, height: 16 },
  { x: 3092, y: 173, width: 80, height: 26 },
  { x: 3341, y: 73, width: 169, height: 22 },
  { x: 3685, y: -22, width: 204, height: 22, melt: true, meltDelay: 20 },
  { x: 4064, y: -119, width: 86, height: 18, conveyor: true, conveyorSpeed: 1.01 },
  { x: 4309, y: -232, width: 167, height: 30, bounce: true, bounceStrength: -18 },
  { x: 4645, y: -333, width: 122, height: 14, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 4767, y: -333, width: 285, height: 20 },
  { x: 5258, y: -354, width: 100, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 5547, y: -375, width: 270, height: 20 },
  { x: 6001, y: -454, width: 78, height: 22, moveAxis: "x", moveRange: 108, moveSpeed: 0.052, movePhase: 0.69 },
  { x: 6516, y: -494, width: 149, height: 24, moveAxis: "y", moveRange: 115, moveSpeed: 0.054, movePhase: 5.69 },
  { x: 6873, y: -537, width: 90, height: 20 },
  { x: 7409, y: -554, width: 201, height: 27, bounce: true, bounceStrength: -20 },
  { x: 7837, y: -553, width: 127, height: 17 },
  { x: 8187, y: -563, width: 210, height: 25, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 8397, y: -563, width: 229, height: 20 },
  { x: 8798, y: -582, width: 105, height: 16, gated: true, gateId: "g93_0" },
  { x: 8967, y: -591, width: 201, height: 20 },
  { x: 9395, y: -582, width: 59, height: 17, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 9677, y: -591, width: 118, height: 27, moveAxis: "y", moveRange: 105, moveSpeed: 0.061, movePhase: 5.93 },
  { x: 10235, y: -615, width: 120, height: 17 },
  { x: 10563, y: -651, width: 77, height: 19 },
  { x: 10844, y: -703, width: 123, height: 22, conveyor: true, conveyorSpeed: 1.67 },
  { x: 11155, y: -776, width: 165, height: 14 },
  { x: 11484, y: -776, width: 302, height: 19 },
  { x: 12197, y: -868, width: 104, height: 18, moveAxis: "x", moveRange: 124, moveSpeed: 0.062, movePhase: 1.84 },
  { x: 12476, y: -966, width: 220, height: 20, bounce: true, bounceStrength: -17 },
  { x: 13094, y: -1081, width: 166, height: 23 },
  { x: 13662, y: -1192, width: 125, height: 14, melt: true, meltDelay: 20 },
  { x: 13965, y: -1282, width: 87, height: 17, melt: true, meltDelay: 20 },
  { x: 14052, y: -1282, width: 248, height: 20 },
  { x: 14472, y: -1299, width: 90, height: 16, gated: true, gateId: "g93_1" },
  { x: 14645, y: -1295, width: 249, height: 20 },
  { x: 15311, y: -1375, width: 126, height: 21, conveyor: true, conveyorSpeed: -1.55 },
  { x: 15635, y: -1433, width: 162, height: 23, melt: true, meltDelay: 20 },
  { x: 16243, y: -1452, width: 154, height: 25, bounce: true, bounceStrength: -16 },
  { x: 16843, y: -1465, width: 201, height: 20, moveAxis: "x", moveRange: 143, moveSpeed: 0.053, movePhase: 2.49 },
  { x: 17271, y: -1464, width: 181, height: 26 },
  { x: 17675, y: -1467, width: 83, height: 22, moveAxis: "x", moveRange: 98, moveSpeed: 0.058, movePhase: 0.88 },
  { x: 17922, y: -1467, width: 303, height: 22 },
  { x: 18389, y: -1466, width: 430, height: 20 },
];

window.deadlyPlatforms = [
  { x: 6452, y: -537, width: 132, height: 25, moveAxis: "x", moveRange: 133, moveSpeed: 0.053, movePhase: 3.41 },
  { x: 12243, y: -925, width: 82, height: 14, moveAxis: "y", moveRange: 130, moveSpeed: 0.076, movePhase: 4.89 },
  { x: 635, y: 377, width: 78, height: 20 },
  { x: 1429, y: 342, width: 60, height: 20 },
  { x: 3202, y: 178, width: 64, height: 20 },
  { x: 3549, y: 67, width: 148, height: 20 },
  { x: 7001, y: -534, width: 69, height: 20 },
  { x: 7988, y: -545, width: 83, height: 20 },
  { x: 10679, y: -649, width: 67, height: 20 },
  { x: 11341, y: -773, width: 117, height: 20 },
  { x: 13297, y: -1081, width: 102, height: 20 },
  { x: 17489, y: -1462, width: 111, height: 20 },
];

window.spikes = [
  { x: 543, y: 384, size: 59 },
  { x: 3386, y: 73, size: 37 },
  { x: 3423, y: 73, size: 30 },
  { x: 3453, y: 73, size: 45 },
  { x: 6884, y: -537, size: 33 },
  { x: 6917, y: -537, size: 13 },
  { x: 7855, y: -553, size: 53 },
  { x: 7908, y: -553, size: 46 },
  { x: 10264, y: -615, size: 47 },
  { x: 11178, y: -776, size: 36 },
  { x: 11214, y: -776, size: 48 },
  { x: 11262, y: -776, size: 34 },
  { x: 13114, y: -1081, size: 47 },
  { x: 13161, y: -1081, size: 15 },
  { x: 17303, y: -1464, size: 24 },
  { x: 17327, y: -1464, size: 14 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2540, y: 231, reached: false },
  { x: 5607, y: -405, reached: false },
  { x: 9027, y: -621, reached: false },
  { x: 11635, y: -806, reached: false },
  { x: 14705, y: -1325, reached: false },
  { x: 18074, y: -1497, reached: false },
  { x: 18604, y: -1496, reached: false }, // Final
];

window.forceZones = [
  { x: 2409, y: 171, width: 262, height: 90, axis: "x", force: -0.157 },
  { x: 17932, y: -1557, width: 283, height: 90, axis: "x", force: 0.2 },
];

window.lasers = [
  { x: 689, y: 331, length: 112, width: 4, baseAngle: 0.82, sweepAngle: 0.83, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 1194, y: 290, length: 107, width: 4, baseAngle: 4.5, sweepAngle: 1.15, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 2014, y: 262, length: 118, width: 4, baseAngle: 1.59, sweepAngle: 1.16, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 2323, y: 213, length: 150, width: 4, baseAngle: 0.36, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 3587, y: -22, length: 136, width: 4, baseAngle: 0.8, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 4226, y: -170, length: 253, width: 4, baseAngle: 3.79, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 7672, y: -635, length: 108, width: 4, baseAngle: 4.35, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 9531, y: -647, length: 175, width: 4, baseAngle: 2.7, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 10438, y: -688, length: 208, width: 4, baseAngle: 0.76, sweepAngle: 1.01, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 11061, y: -780, length: 218, width: 4, baseAngle: 6.26, sweepAngle: 0.93, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 12371, y: -918, length: 197, width: 4, baseAngle: 0.87, sweepAngle: 0.72, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 12773, y: -1038, length: 161, width: 4, baseAngle: 0.31, sweepAngle: 1.14, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 13338, y: -1177, length: 220, width: 4, baseAngle: 5.63, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 13871, y: -1275, length: 200, width: 4, baseAngle: 3.94, sweepAngle: 0.65, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 15887, y: -1496, length: 121, width: 4, baseAngle: 6.04, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 17551, y: -1538, length: 150, width: 4, baseAngle: 0.29, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
];

window.fallers = [
  { x: 3267, y: 90, size: 49, triggerX: 3137 },
  { x: 6156, y: -580, size: 30, triggerX: 6013 },
  { x: 6763, y: -591, size: 39, triggerX: 6612 },
  { x: 7053, y: -650, size: 53, triggerX: 6859 },
  { x: 11419, y: -881, size: 44, triggerX: 11237 },
  { x: 16481, y: -1560, size: 46, triggerX: 16284 },
  { x: 17824, y: -1597, size: 28, triggerX: 17686 },
];

window.switches = [
  { x: 8604, y: -593, radius: 26, gateId: "g93_0" },
  { x: 14278, y: -1312, radius: 26, gateId: "g93_1" },
];
