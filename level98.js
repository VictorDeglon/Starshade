// Level 98 Data — "The Last Ascent"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 98";
window.levelAccent = "#4de8d8";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 746, y: 365, width: 192, height: 18 },
  { x: 1388, y: 364, width: 231, height: 29 },
  { x: 2069, y: 359, width: 132, height: 19, moveAxis: "y", moveRange: 161, moveSpeed: 0.075, movePhase: 4.92 },
  { x: 2651, y: 356, width: 130, height: 30, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 3014, y: 371, width: 167, height: 19, melt: true, meltDelay: 20 },
  { x: 3345, y: 371, width: 302, height: 23 },
  { x: 3860, y: 346, width: 200, height: 22, bounce: true, bounceStrength: -18 },
  { x: 4268, y: 304, width: 161, height: 20 },
  { x: 4856, y: 247, width: 80, height: 27, bounce: true, bounceStrength: -19 },
  { x: 5357, y: 175, width: 118, height: 16, moveAxis: "x", moveRange: 173, moveSpeed: 0.071, movePhase: 3.49 },
  { x: 5659, y: 90, width: 73, height: 21, conveyor: true, conveyorSpeed: -1.1 },
  { x: 5901, y: -12, width: 166, height: 26, melt: true, meltDelay: 20 },
  { x: 6067, y: -12, width: 280, height: 20 },
  { x: 6542, y: -26, width: 90, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 6839, y: -40, width: 233, height: 20 },
  { x: 7241, y: -143, width: 47, height: 27 },
  { x: 7699, y: -236, width: 102, height: 15 },
  { x: 8208, y: -340, width: 148, height: 20, conveyor: true, conveyorSpeed: 1.75 },
  { x: 8540, y: -422, width: 151, height: 14, melt: true, meltDelay: 20 },
  { x: 9122, y: -476, width: 187, height: 19, melt: true, meltDelay: 20 },
  { x: 9309, y: -476, width: 277, height: 20 },
  { x: 9741, y: -514, width: 107, height: 16, gated: true, gateId: "g98_0" },
  { x: 9919, y: -525, width: 213, height: 20 },
  { x: 10345, y: -554, width: 170, height: 26, bounce: true, bounceStrength: -17 },
  { x: 10961, y: -577, width: 172, height: 24, melt: true, meltDelay: 20 },
  { x: 11583, y: -581, width: 51, height: 29, melt: true, meltDelay: 20 },
  { x: 11867, y: -567, width: 129, height: 29, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 12446, y: -577, width: 202, height: 15, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 12648, y: -577, width: 276, height: 20 },
  { x: 13085, y: -603, width: 104, height: 16, gated: true, gateId: "g98_1" },
  { x: 13269, y: -595, width: 243, height: 20 },
  { x: 13729, y: -608, width: 201, height: 17, moveAxis: "x", moveRange: 94, moveSpeed: 0.063, movePhase: 1.49 },
  { x: 14147, y: -627, width: 108, height: 18, moveAxis: "x", moveRange: 155, moveSpeed: 0.067, movePhase: 5.76 },
  { x: 14695, y: -656, width: 215, height: 25 },
  { x: 15337, y: -715, width: 188, height: 28, conveyor: true, conveyorSpeed: 1.53 },
  { x: 15956, y: -761, width: 148, height: 14, bounce: true, bounceStrength: -19 },
  { x: 16292, y: -834, width: 95, height: 16, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 16387, y: -834, width: 296, height: 20 },
  { x: 16891, y: -862, width: 90, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 17189, y: -884, width: 224, height: 20 },
  { x: 17582, y: -987, width: 229, height: 29, melt: true, meltDelay: 20 },
  { x: 18222, y: -1078, width: 127, height: 23, bounce: true, bounceStrength: -19 },
  { x: 18527, y: -1170, width: 229, height: 19 },
  { x: 19167, y: -1258, width: 158, height: 28, melt: true, meltDelay: 20 },
  { x: 19742, y: -1339, width: 99, height: 14 },
  { x: 20005, y: -1339, width: 273, height: 16 },
  { x: 20715, y: -1377, width: 156, height: 16 },
  { x: 21308, y: -1413, width: 74, height: 20, melt: true, meltDelay: 20 },
  { x: 21574, y: -1415, width: 389, height: 20 },
];

window.deadlyPlatforms = [
  { x: 2005, y: 321, width: 88, height: 18, moveAxis: "x", moveRange: 143, moveSpeed: 0.068, movePhase: 2.98 },
  { x: 5312, y: 139, width: 78, height: 25, moveAxis: "y", moveRange: 152, moveSpeed: 0.075, movePhase: 1.88 },
  { x: 13777, y: -634, width: 158, height: 15, moveAxis: "y", moveRange: 86, moveSpeed: 0.074, movePhase: 3.81 },
  { x: 14093, y: -653, width: 67, height: 21, moveAxis: "y", moveRange: 174, moveSpeed: 0.071, movePhase: 1.47 },
  { x: 959, y: 371, width: 158, height: 20 },
  { x: 1641, y: 363, width: 126, height: 20 },
  { x: 4453, y: 312, width: 120, height: 20 },
  { x: 7320, y: -144, width: 60, height: 20 },
  { x: 7829, y: -238, width: 60, height: 20 },
  { x: 14937, y: -658, width: 144, height: 20 },
  { x: 18793, y: -1170, width: 127, height: 20 },
  { x: 19861, y: -1346, width: 60, height: 20 },
];

window.spikes = [
  { x: 789, y: 365, size: 57 },
  { x: 1451, y: 364, size: 58 },
  { x: 1509, y: 364, size: 52 },
  { x: 4321, y: 304, size: 36 },
  { x: 4357, y: 304, size: 53 },
  { x: 7720, y: -236, size: 51 },
  { x: 14738, y: -656, size: 37 },
  { x: 14775, y: -656, size: 18 },
  { x: 18598, y: -1170, size: 48 },
  { x: 18646, y: -1170, size: 53 },
  { x: 18699, y: -1170, size: 27 },
  { x: 19757, y: -1339, size: 51 },
  { x: 20735, y: -1377, size: 19 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 3496, y: 341, reached: false },
  { x: 6899, y: -70, reached: false },
  { x: 9979, y: -555, reached: false },
  { x: 13329, y: -625, reached: false },
  { x: 17249, y: -914, reached: false },
  { x: 20142, y: -1369, reached: false },
  { x: 21769, y: -1445, reached: false }, // Final
];

window.forceZones = [
  { x: 20015, y: -1429, width: 253, height: 90, axis: "x", force: 0.213 },
];

window.lasers = [
  { x: 1692, y: 290, length: 144, width: 4, baseAngle: 0.59, sweepAngle: 0.7, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 3244, y: 286, length: 112, width: 4, baseAngle: 3.87, sweepAngle: 0.91, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 4511, y: 205, length: 103, width: 4, baseAngle: 5.97, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 5024, y: 204, length: 128, width: 4, baseAngle: 0.75, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 5554, y: 116, length: 178, width: 4, baseAngle: 4.18, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 7871, y: -334, length: 233, width: 4, baseAngle: 2.21, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 8433, y: -430, length: 247, width: 4, baseAngle: 0.84, sweepAngle: 0.98, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 8752, y: -518, length: 219, width: 4, baseAngle: 5.01, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 10575, y: -625, length: 187, width: 4, baseAngle: 5.37, sweepAngle: 0.8, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 12738, y: -640, length: 234, width: 4, baseAngle: 5.23, sweepAngle: 0.56, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 14979, y: -740, length: 208, width: 4, baseAngle: 1.16, sweepAngle: 0.86, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 15609, y: -764, length: 239, width: 4, baseAngle: 3.2, sweepAngle: 0.62, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 16199, y: -808, length: 121, width: 4, baseAngle: 2.72, sweepAngle: 0.9, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 16481, y: -908, length: 246, width: 4, baseAngle: 2.89, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 18439, y: -1176, length: 125, width: 4, baseAngle: 0.12, sweepAngle: 0.72, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 18845, y: -1237, length: 129, width: 4, baseAngle: 2.06, sweepAngle: 0.91, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 19418, y: -1346, length: 124, width: 4, baseAngle: 1.79, sweepAngle: 0.87, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 20952, y: -1458, length: 192, width: 4, baseAngle: 5.46, sweepAngle: 0.75, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 21457, y: -1487, length: 136, width: 4, baseAngle: 2.52, sweepAngle: 0.61, period: 136, blinkPeriod: 0, onRatio: 0.5 },
];

window.fallers = [
  { x: 1024, y: 243, size: 38, triggerX: 835 },
  { x: 2863, y: 247, size: 52, triggerX: 2687 },
  { x: 4155, y: 266, size: 48, triggerX: 4018 },
  { x: 7356, y: -233, size: 34, triggerX: 7194 },
  { x: 14009, y: -728, size: 26, triggerX: 13831 },
  { x: 17907, y: -1077, size: 44, triggerX: 17769 },
];

window.switches = [
  { x: 9564, y: -506, radius: 26, gateId: "g98_0" },
  { x: 12902, y: -607, radius: 26, gateId: "g98_1" },
];
