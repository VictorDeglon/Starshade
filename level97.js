// Level 97 Data — "Starshade's Trial"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 97";
window.levelAccent = "#4de8d8";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 721, y: 305, width: 51, height: 25, melt: true, meltDelay: 20 },
  { x: 1203, y: 258, width: 129, height: 20 },
  { x: 1536, y: 214, width: 102, height: 20 },
  { x: 2084, y: 192, width: 173, height: 14, melt: true, meltDelay: 20 },
  { x: 2707, y: 191, width: 125, height: 14 },
  { x: 2832, y: 191, width: 224, height: 20 },
  { x: 3244, y: 170, width: 105, height: 16, gated: true, gateId: "g97_0" },
  { x: 3397, y: 167, width: 228, height: 20 },
  { x: 3858, y: 185, width: 87, height: 28, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 4395, y: 179, width: 178, height: 24, melt: true, meltDelay: 20 },
  { x: 5023, y: 178, width: 205, height: 20, bounce: true, bounceStrength: -17 },
  { x: 5674, y: 165, width: 176, height: 18, bounce: true, bounceStrength: -19 },
  { x: 6296, y: 146, width: 150, height: 18 },
  { x: 6883, y: 102, width: 189, height: 30, conveyor: true, conveyorSpeed: -1.52 },
  { x: 7072, y: 102, width: 252, height: 20 },
  { x: 7482, y: 78, width: 112, height: 16, gated: true, gateId: "g97_1" },
  { x: 7665, y: 75, width: 234, height: 20 },
  { x: 8077, y: -14, width: 215, height: 23, conveyor: true, conveyorSpeed: 1.53 },
  { x: 8480, y: -87, width: 209, height: 16, bounce: true, bounceStrength: -17 },
  { x: 9091, y: -197, width: 93, height: 20 },
  { x: 9353, y: -300, width: 64, height: 14, moveAxis: "x", moveRange: 120, moveSpeed: 0.079, movePhase: 3.77 },
  { x: 9828, y: -395, width: 201, height: 16, moveAxis: "x", moveRange: 136, moveSpeed: 0.066, movePhase: 3.82 },
  { x: 10193, y: -395, width: 280, height: 18 },
  { x: 10894, y: -468, width: 58, height: 15, melt: true, meltDelay: 20 },
  { x: 11140, y: -541, width: 229, height: 23, bounce: true, bounceStrength: -18 },
  { x: 11573, y: -590, width: 117, height: 29 },
  { x: 11903, y: -616, width: 92, height: 22, melt: true, meltDelay: 20 },
  { x: 12208, y: -647, width: 161, height: 18 },
  { x: 12815, y: -667, width: 219, height: 22, bounce: true, bounceStrength: -18 },
  { x: 13034, y: -667, width: 261, height: 20 },
  { x: 13504, y: -680, width: 95, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 13797, y: -701, width: 270, height: 20 },
  { x: 14294, y: -695, width: 121, height: 16, conveyor: true, conveyorSpeed: -1.46 },
  { x: 14865, y: -698, width: 155, height: 22 },
  { x: 15470, y: -709, width: 46, height: 28, melt: true, meltDelay: 20 },
  { x: 15743, y: -706, width: 57, height: 24 },
  { x: 16013, y: -735, width: 180, height: 27 },
  { x: 16357, y: -735, width: 285, height: 18 },
  { x: 16840, y: -788, width: 164, height: 27 },
  { x: 17425, y: -862, width: 188, height: 16, bounce: true, bounceStrength: -19 },
  { x: 17797, y: -947, width: 93, height: 14, conveyor: true, conveyorSpeed: -0.92 },
  { x: 18065, y: -1046, width: 133, height: 21, moveAxis: "x", moveRange: 134, moveSpeed: 0.07, movePhase: 4.24 },
  { x: 18373, y: -1140, width: 84, height: 22, bounce: true, bounceStrength: -19 },
  { x: 18864, y: -1238, width: 45, height: 21 },
  { x: 19073, y: -1238, width: 228, height: 23 },
  { x: 19718, y: -1324, width: 231, height: 24 },
  { x: 20145, y: -1324, width: 403, height: 20 },
];

window.deadlyPlatforms = [
  { x: 9913, y: -339, width: 166, height: 17, moveAxis: "y", moveRange: 159, moveSpeed: 0.069, movePhase: 3.79 },
  { x: 17990, y: -1074, width: 75, height: 20, moveAxis: "y", moveRange: 132, moveSpeed: 0.075, movePhase: 0.27 },
  { x: 1354, y: 253, width: 87, height: 20 },
  { x: 1665, y: 223, width: 88, height: 20 },
  { x: 2861, y: 196, width: 79, height: 20 },
  { x: 6474, y: 140, width: 94, height: 20 },
  { x: 9211, y: -202, width: 75, height: 20 },
  { x: 11715, y: -584, width: 105, height: 20 },
  { x: 12398, y: -643, width: 108, height: 20 },
  { x: 15041, y: -706, width: 89, height: 20 },
  { x: 15827, y: -703, width: 60, height: 20 },
  { x: 16213, y: -735, width: 150, height: 20 },
  { x: 17033, y: -783, width: 131, height: 20 },
  { x: 18939, y: -1243, width: 60, height: 20 },
  { x: 19973, y: -1327, width: 200, height: 20 },
];

window.spikes = [
  { x: 1225, y: 258, size: 28 },
  { x: 1253, y: 258, size: 16 },
  { x: 1269, y: 258, size: 16 },
  { x: 1285, y: 258, size: 32 },
  { x: 1558, y: 214, size: 45 },
  { x: 2734, y: 191, size: 38 },
  { x: 6337, y: 146, size: 61 },
  { x: 9118, y: -197, size: 16 },
  { x: 11605, y: -590, size: 54 },
  { x: 11659, y: -590, size: 24 },
  { x: 12238, y: -647, size: 38 },
  { x: 12276, y: -647, size: 55 },
  { x: 14903, y: -698, size: 58 },
  { x: 14961, y: -698, size: 32 },
  { x: 14993, y: -698, size: 14 },
  { x: 15763, y: -706, size: 17 },
  { x: 16061, y: -735, size: 38 },
  { x: 16099, y: -735, size: 63 },
  { x: 16894, y: -788, size: 42 },
  { x: 16936, y: -788, size: 43 },
  { x: 19765, y: -1324, size: 57 },
  { x: 19822, y: -1324, size: 17 },
  { x: 19839, y: -1324, size: 62 },
  { x: 19901, y: -1324, size: 18 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 3457, y: 137, reached: false },
  { x: 7725, y: 45, reached: false },
  { x: 10333, y: -425, reached: false },
  { x: 13857, y: -731, reached: false },
  { x: 16500, y: -765, reached: false },
  { x: 19187, y: -1268, reached: false },
  { x: 20347, y: -1354, reached: false }, // Final
];

window.forceZones = [
  { x: 16367, y: -825, width: 265, height: 90, axis: "x", force: 0.154 },
  { x: 19083, y: -1328, width: 208, height: 90, axis: "x", force: -0.181 },
];

window.lasers = [
  { x: 1425, y: 209, length: 214, width: 4, baseAngle: 2.91, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 6520, y: 78, length: 144, width: 4, baseAngle: 5.3, sweepAngle: 1.17, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 8753, y: -178, length: 191, width: 4, baseAngle: 1.64, sweepAngle: 0.84, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 10099, y: -455, length: 139, width: 4, baseAngle: 4.21, sweepAngle: 0.67, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 11468, y: -629, length: 261, width: 4, baseAngle: 1.11, sweepAngle: 1.16, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 12464, y: -693, length: 173, width: 4, baseAngle: 1.58, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 14498, y: -753, length: 211, width: 4, baseAngle: 1.59, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 15094, y: -773, length: 159, width: 4, baseAngle: 3.59, sweepAngle: 1.13, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 15593, y: -774, length: 137, width: 4, baseAngle: 1.57, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 15865, y: -776, length: 103, width: 4, baseAngle: 4.32, sweepAngle: 0.62, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 17702, y: -953, length: 130, width: 4, baseAngle: 5.98, sweepAngle: 0.61, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 17986, y: -1010, length: 219, width: 4, baseAngle: 6.22, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 18263, y: -1089, length: 233, width: 4, baseAngle: 3.04, sweepAngle: 0.65, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 18555, y: -1233, length: 200, width: 4, baseAngle: 3.85, sweepAngle: 1.03, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 20018, y: -1372, length: 116, width: 4, baseAngle: 4.99, sweepAngle: 0.75, period: 136, blinkPeriod: 0, onRatio: 0.5 },
];

window.fallers = [
  { x: 2898, y: 85, size: 49, triggerX: 2759 },
  { x: 4007, y: 73, size: 29, triggerX: 3806 },
  { x: 5935, y: 26, size: 31, triggerX: 5789 },
  { x: 7135, y: -15, size: 52, triggerX: 6956 },
  { x: 9516, y: -431, size: 32, triggerX: 9317 },
  { x: 12076, y: -728, size: 48, triggerX: 11946 },
  { x: 13130, y: -804, size: 34, triggerX: 12926 },
  { x: 16258, y: -826, size: 36, triggerX: 16078 },
  { x: 18976, y: -1318, size: 42, triggerX: 18845 },
];

window.switches = [
  { x: 3034, y: 161, radius: 26, gateId: "g97_0" },
  { x: 7302, y: 72, radius: 26, gateId: "g97_1" },
];
