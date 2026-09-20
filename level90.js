// Level 90 Data — "Cinderspire Reach"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 90";
window.levelAccent = "#4de8d8";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 469, y: 278, width: 109, height: 30 },
  { x: 989, y: 184, width: 201, height: 16, moveAxis: "y", moveRange: 102, moveSpeed: 0.056, movePhase: 2.45 },
  { x: 1607, y: 99, width: 123, height: 24, conveyor: true, conveyorSpeed: -0.98 },
  { x: 1934, y: 51, width: 133, height: 29 },
  { x: 2498, y: 5, width: 168, height: 28, melt: true, meltDelay: 20 },
  { x: 2666, y: 5, width: 280, height: 20 },
  { x: 3152, y: -17, width: 95, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 3435, y: -39, width: 225, height: 20 },
  { x: 4106, y: -54, width: 156, height: 28, melt: true, meltDelay: 20 },
  { x: 4489, y: -43, width: 207, height: 21, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 4923, y: -36, width: 215, height: 27, conveyor: true, conveyorSpeed: 2.16 },
  { x: 5361, y: -39, width: 153, height: 25, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 5747, y: -27, width: 175, height: 14 },
  { x: 6368, y: -39, width: 103, height: 19, bounce: true, bounceStrength: -16 },
  { x: 6921, y: -48, width: 112, height: 15 },
  { x: 7033, y: -48, width: 264, height: 20 },
  { x: 7498, y: -59, width: 95, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 7796, y: -71, width: 270, height: 20 },
  { x: 8270, y: -115, width: 147, height: 22, melt: true, meltDelay: 20 },
  { x: 8605, y: -186, width: 227, height: 17, bounce: true, bounceStrength: -17 },
  { x: 9007, y: -284, width: 224, height: 26, moveAxis: "x", moveRange: 98, moveSpeed: 0.053, movePhase: 4.41 },
  { x: 9396, y: -391, width: 69, height: 15, conveyor: true, conveyorSpeed: 2.15 },
  { x: 9640, y: -490, width: 220, height: 14 },
  { x: 10267, y: -594, width: 62, height: 22, bounce: true, bounceStrength: -17 },
  { x: 10329, y: -594, width: 243, height: 20 },
  { x: 10749, y: -627, width: 100, height: 16, gated: true, gateId: "g90_0" },
  { x: 10913, y: -626, width: 225, height: 20 },
  { x: 11555, y: -707, width: 172, height: 19 },
  { x: 11921, y: -775, width: 59, height: 29, moveAxis: "x", moveRange: 125, moveSpeed: 0.066, movePhase: 3.76 },
  { x: 12401, y: -845, width: 85, height: 30, bounce: true, bounceStrength: -17 },
  { x: 12699, y: -876, width: 138, height: 17, moveAxis: "x", moveRange: 148, moveSpeed: 0.058, movePhase: 4.99 },
  { x: 13277, y: -905, width: 74, height: 27, conveyor: true, conveyorSpeed: -0.91 },
  { x: 13351, y: -905, width: 272, height: 20 },
  { x: 13795, y: -932, width: 101, height: 16, gated: true, gateId: "g90_1" },
  { x: 13961, y: -944, width: 220, height: 20 },
  { x: 14631, y: -946, width: 107, height: 22, conveyor: true, conveyorSpeed: -1.68 },
  { x: 14965, y: -938, width: 130, height: 24, moveAxis: "x", moveRange: 130, moveSpeed: 0.053, movePhase: 2.7 },
  { x: 15322, y: -938, width: 114, height: 29, melt: true, meltDelay: 20 },
  { x: 15663, y: -933, width: 151, height: 20 },
  { x: 16264, y: -943, width: 165, height: 28 },
  { x: 16593, y: -943, width: 185, height: 30 },
  { x: 17209, y: -993, width: 234, height: 16, moveAxis: "x", moveRange: 126, moveSpeed: 0.057, movePhase: 5.05 },
  { x: 17864, y: -1061, width: 116, height: 30, bounce: true, bounceStrength: -18 },
  { x: 18168, y: -1138, width: 201, height: 14, melt: true, meltDelay: 20 },
  { x: 18790, y: -1212, width: 173, height: 22, moveAxis: "y", moveRange: 92, moveSpeed: 0.049, movePhase: 1.31 },
  { x: 19380, y: -1297, width: 134, height: 24 },
  { x: 19692, y: -1389, width: 191, height: 22, moveAxis: "x", moveRange: 141, moveSpeed: 0.066, movePhase: 1.94 },
  { x: 20290, y: -1490, width: 119, height: 16 },
  { x: 20577, y: -1489, width: 393, height: 20 },
];

window.deadlyPlatforms = [
  { x: 1062, y: 210, width: 113, height: 18, moveAxis: "x", moveRange: 93, moveSpeed: 0.053, movePhase: 0.83 },
  { x: 11994, y: -808, width: 50, height: 23, moveAxis: "y", moveRange: 136, moveSpeed: 0.059, movePhase: 1.51 },
  { x: 12645, y: -817, width: 79, height: 25, moveAxis: "y", moveRange: 113, moveSpeed: 0.067, movePhase: 4.7 },
  { x: 15035, y: -893, width: 95, height: 23, moveAxis: "y", moveRange: 126, moveSpeed: 0.05, movePhase: 3.73 },
  { x: 17278, y: -1048, width: 193, height: 22, moveAxis: "y", moveRange: 121, moveSpeed: 0.06, movePhase: 4.12 },
  { x: 18729, y: -1169, width: 138, height: 24, moveAxis: "x", moveRange: 90, moveSpeed: 0.05, movePhase: 6.21 },
  { x: 615, y: 286, width: 64, height: 20 },
  { x: 2104, y: 51, width: 81, height: 20 },
  { x: 5946, y: -19, width: 144, height: 20 },
  { x: 7062, y: -54, width: 82, height: 20 },
  { x: 9895, y: -486, width: 119, height: 20 },
  { x: 11766, y: -697, width: 154, height: 20 },
  { x: 15844, y: -930, width: 134, height: 20 },
  { x: 16456, y: -941, width: 96, height: 20 },
  { x: 19548, y: -1302, width: 97, height: 20 },
  { x: 20440, y: -1498, width: 103, height: 20 },
];

window.spikes = [
  { x: 483, y: 278, size: 52 },
  { x: 535, y: 278, size: 13 },
  { x: 1966, y: 51, size: 52 },
  { x: 5779, y: -27, size: 29 },
  { x: 5808, y: -27, size: 26 },
  { x: 5834, y: -27, size: 64 },
  { x: 6944, y: -48, size: 41 },
  { x: 9687, y: -490, size: 47 },
  { x: 9734, y: -490, size: 18 },
  { x: 9752, y: -490, size: 51 },
  { x: 11613, y: -707, size: 44 },
  { x: 11657, y: -707, size: 45 },
  { x: 15687, y: -933, size: 56 },
  { x: 15743, y: -933, size: 42 },
  { x: 16298, y: -943, size: 57 },
  { x: 16355, y: -943, size: 55 },
  { x: 19412, y: -1297, size: 44 },
  { x: 20305, y: -1490, size: 31 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 3495, y: -69, reached: false },
  { x: 7856, y: -101, reached: false },
  { x: 10973, y: -656, reached: false },
  { x: 14021, y: -974, reached: false },
  { x: 16686, y: -973, reached: false },
  { x: 20774, y: -1519, reached: false }, // Final
];

window.lasers = [
  { x: 673, y: 224, length: 219, width: 4, baseAngle: 6.08, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 4339, y: -100, length: 136, width: 4, baseAngle: 4.39, sweepAngle: 0.86, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 4778, y: -116, length: 191, width: 4, baseAngle: 0.6, sweepAngle: 0.86, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 5219, y: -127, length: 164, width: 4, baseAngle: 1.72, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 5607, y: -127, length: 245, width: 4, baseAngle: 5.85, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 5993, y: -73, length: 219, width: 4, baseAngle: 4.93, sweepAngle: 0.78, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 8508, y: -191, length: 262, width: 4, baseAngle: 5.99, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 9292, y: -336, length: 248, width: 4, baseAngle: 1.61, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 9529, y: -477, length: 261, width: 4, baseAngle: 2.97, sweepAngle: 1.07, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 9958, y: -577, length: 110, width: 4, baseAngle: 1.99, sweepAngle: 0.97, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 10410, y: -685, length: 164, width: 4, baseAngle: 5.85, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 12558, y: -929, length: 201, width: 4, baseAngle: 5.46, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 13418, y: -957, length: 261, width: 4, baseAngle: 0.39, sweepAngle: 0.93, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 14819, y: -1041, length: 152, width: 4, baseAngle: 1.89, sweepAngle: 1.13, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 15499, y: -1003, length: 234, width: 4, baseAngle: 3.58, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 18437, y: -1197, length: 236, width: 4, baseAngle: 5.04, sweepAngle: 0.7, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 19039, y: -1267, length: 230, width: 4, baseAngle: 4.98, sweepAngle: 0.57, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 20484, y: -1564, length: 136, width: 4, baseAngle: 2.28, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
];

window.fallers = [
  { x: 2149, y: -39, size: 40, triggerX: 1972 },
  { x: 6565, y: -170, size: 51, triggerX: 6368 },
  { x: 17522, y: -1131, size: 53, triggerX: 17391 },
  { x: 19946, y: -1478, size: 49, triggerX: 19750 },
];

window.switches = [
  { x: 10550, y: -624, radius: 26, gateId: "g90_0" },
  { x: 13601, y: -935, radius: 26, gateId: "g90_1" },
];
