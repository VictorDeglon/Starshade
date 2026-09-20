// Level 99 Data — "The Abyssal Spire"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 99";
window.levelAccent = "#4de8d8";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 527, y: 383, width: 107, height: 27, moveAxis: "y", moveRange: 164, moveSpeed: 0.073, movePhase: 5.36 },
  { x: 861, y: 389, width: 80, height: 16, conveyor: true, conveyorSpeed: -1.99 },
  { x: 1164, y: 383, width: 45, height: 29, conveyor: true, conveyorSpeed: -0.98 },
  { x: 1655, y: 371, width: 118, height: 29, bounce: true, bounceStrength: -19 },
  { x: 1986, y: 344, width: 135, height: 16, melt: true, meltDelay: 20 },
  { x: 2329, y: 301, width: 222, height: 23, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 2551, y: 301, width: 275, height: 20 },
  { x: 3016, y: 278, width: 113, height: 16, gated: true, gateId: "g99_0" },
  { x: 3171, y: 288, width: 231, height: 20 },
  { x: 3823, y: 220, width: 149, height: 28, conveyor: true, conveyorSpeed: -1.53 },
  { x: 4379, y: 123, width: 130, height: 23 },
  { x: 4911, y: 14, width: 203, height: 28 },
  { x: 5289, y: -82, width: 73, height: 27, moveAxis: "x", moveRange: 156, moveSpeed: 0.068, movePhase: 5.54 },
  { x: 5769, y: -182, width: 145, height: 14, bounce: true, bounceStrength: -19 },
  { x: 6335, y: -258, width: 74, height: 28, bounce: true, bounceStrength: -19 },
  { x: 6573, y: -258, width: 254, height: 19 },
  { x: 7258, y: -307, width: 212, height: 27 },
  { x: 7683, y: -340, width: 190, height: 21, moveAxis: "x", moveRange: 109, moveSpeed: 0.078, movePhase: 5.68 },
  { x: 8313, y: -366, width: 89, height: 28 },
  { x: 8615, y: -397, width: 219, height: 16, melt: true, meltDelay: 20 },
  { x: 9061, y: -387, width: 71, height: 25, moveAxis: "y", moveRange: 156, moveSpeed: 0.051, movePhase: 0.72 },
  { x: 9132, y: -387, width: 241, height: 20 },
  { x: 9516, y: -417, width: 90, height: 16, gated: true, gateId: "g99_1" },
  { x: 9711, y: -422, width: 239, height: 20 },
  { x: 10173, y: -431, width: 193, height: 20, bounce: true, bounceStrength: -17 },
  { x: 10599, y: -417, width: 186, height: 29, melt: true, meltDelay: 20 },
  { x: 11012, y: -417, width: 152, height: 15, moveAxis: "x", moveRange: 104, moveSpeed: 0.066, movePhase: 4.91 },
  { x: 11377, y: -442, width: 84, height: 16, conveyor: true, conveyorSpeed: 1.81 },
  { x: 11674, y: -469, width: 192, height: 20, moveAxis: "y", moveRange: 107, moveSpeed: 0.059, movePhase: 5.79 },
  { x: 12293, y: -525, width: 154, height: 28, moveAxis: "x", moveRange: 122, moveSpeed: 0.072, movePhase: 4.16 },
  { x: 12447, y: -525, width: 266, height: 20 },
  { x: 12919, y: -546, width: 91, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 13208, y: -560, width: 228, height: 20 },
  { x: 13620, y: -645, width: 83, height: 26, moveAxis: "y", moveRange: 121, moveSpeed: 0.062, movePhase: 3.1 },
  { x: 14110, y: -742, width: 211, height: 28, melt: true, meltDelay: 20 },
  { x: 14499, y: -829, width: 150, height: 23 },
  { x: 15047, y: -945, width: 186, height: 17 },
  { x: 15635, y: -1056, width: 159, height: 17 },
  { x: 15794, y: -1056, width: 262, height: 20 },
  { x: 16253, y: -1085, width: 119, height: 16, gated: true, gateId: "g99_2" },
  { x: 16397, y: -1084, width: 250, height: 20 },
  { x: 17064, y: -1162, width: 46, height: 28 },
  { x: 17294, y: -1242, width: 176, height: 17, melt: true, meltDelay: 20 },
  { x: 17901, y: -1292, width: 93, height: 26 },
  { x: 18202, y: -1328, width: 170, height: 28, bounce: true, bounceStrength: -20 },
  { x: 18812, y: -1355, width: 86, height: 25, melt: true, meltDelay: 20 },
  { x: 19062, y: -1355, width: 232, height: 21 },
  { x: 19527, y: -1342, width: 113, height: 20, bounce: true, bounceStrength: -17 },
  { x: 19795, y: -1340, width: 432, height: 20 },
];

window.deadlyPlatforms = [
  { x: 454, y: 338, width: 67, height: 21, moveAxis: "x", moveRange: 139, moveSpeed: 0.083, movePhase: 5.72 },
  { x: 7756, y: -286, width: 156, height: 14, moveAxis: "y", moveRange: 119, moveSpeed: 0.082, movePhase: 5.36 },
  { x: 8986, y: -341, width: 50, height: 21, moveAxis: "x", moveRange: 158, moveSpeed: 0.056, movePhase: 2.52 },
  { x: 10950, y: -458, width: 105, height: 17, moveAxis: "y", moveRange: 121, moveSpeed: 0.072, movePhase: 5.65 },
  { x: 11746, y: -500, width: 113, height: 21, moveAxis: "x", moveRange: 107, moveSpeed: 0.073, movePhase: 4.52 },
  { x: 12364, y: -571, width: 127, height: 21, moveAxis: "y", moveRange: 133, moveSpeed: 0.069, movePhase: 3.55 },
  { x: 13580, y: -618, width: 72, height: 22, moveAxis: "x", moveRange: 103, moveSpeed: 0.076, movePhase: 2.38 },
  { x: 4543, y: 120, width: 80, height: 20 },
  { x: 5152, y: 5, width: 126, height: 20 },
  { x: 7497, y: -298, width: 178, height: 20 },
  { x: 8429, y: -361, width: 61, height: 20 },
  { x: 14671, y: -836, width: 76, height: 20 },
  { x: 15255, y: -938, width: 135, height: 20 },
  { x: 17147, y: -1161, width: 60, height: 20 },
  { x: 18029, y: -1299, width: 61, height: 20 },
];

window.spikes = [
  { x: 4402, y: 123, size: 62 },
  { x: 4949, y: 14, size: 40 },
  { x: 7305, y: -307, size: 18 },
  { x: 7323, y: -307, size: 64 },
  { x: 7387, y: -307, size: 18 },
  { x: 8329, y: -366, size: 60 },
  { x: 14517, y: -829, size: 44 },
  { x: 14561, y: -829, size: 12 },
  { x: 14573, y: -829, size: 12 },
  { x: 15075, y: -945, size: 47 },
  { x: 15672, y: -1056, size: 36 },
  { x: 17930, y: -1292, size: 42 },
  { x: 17972, y: -1292, size: 15 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 3231, y: 258, reached: false },
  { x: 6700, y: -288, reached: false },
  { x: 9771, y: -452, reached: false },
  { x: 13268, y: -590, reached: false },
  { x: 16457, y: -1114, reached: false },
  { x: 19178, y: -1385, reached: false },
  { x: 20011, y: -1370, reached: false }, // Final
];

window.forceZones = [
  { x: 6583, y: -348, width: 234, height: 90, axis: "x", force: 0.155 },
];

window.lasers = [
  { x: 1288, y: 324, length: 252, width: 4, baseAngle: 5.32, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 1850, y: 299, length: 221, width: 4, baseAngle: 1.95, sweepAngle: 0.94, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 2195, y: 304, length: 183, width: 4, baseAngle: 1.5, sweepAngle: 0.96, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 2622, y: 221, length: 239, width: 4, baseAngle: 4.25, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 4065, y: 129, length: 239, width: 4, baseAngle: 1.06, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 5197, y: -53, length: 101, width: 4, baseAngle: 4.22, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 5426, y: -143, length: 175, width: 4, baseAngle: 5.9, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 5993, y: -245, length: 221, width: 4, baseAngle: 0.15, sweepAngle: 1.05, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 6505, y: -310, length: 101, width: 4, baseAngle: 1.04, sweepAngle: 1.14, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 7560, y: -372, length: 263, width: 4, baseAngle: 2.87, sweepAngle: 0.59, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 8895, y: -486, length: 203, width: 4, baseAngle: 4.61, sweepAngle: 1.08, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 9195, y: -455, length: 202, width: 4, baseAngle: 3.19, sweepAngle: 1.11, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 10859, y: -498, length: 182, width: 4, baseAngle: 6.23, sweepAngle: 0.48, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 12541, y: -577, length: 100, width: 4, baseAngle: 5.62, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 14418, y: -798, length: 215, width: 4, baseAngle: 0.4, sweepAngle: 0.55, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 17188, y: -1227, length: 196, width: 4, baseAngle: 5.16, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 18066, y: -1363, length: 167, width: 4, baseAngle: 1.59, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 18992, y: -1400, length: 155, width: 4, baseAngle: 3.13, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 19733, y: -1429, length: 119, width: 4, baseAngle: 1.37, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
];

window.fallers = [
  { x: 1023, y: 269, size: 52, triggerX: 814 },
  { x: 7940, y: -471, size: 41, triggerX: 7752 },
  { x: 8479, y: -483, size: 34, triggerX: 8331 },
  { x: 10463, y: -553, size: 37, triggerX: 10256 },
  { x: 11542, y: -544, size: 45, triggerX: 11363 },
  { x: 11946, y: -553, size: 25, triggerX: 11751 },
  { x: 15314, y: -1041, size: 33, triggerX: 15171 },
];

window.switches = [
  { x: 2804, y: 271, radius: 26, gateId: "g99_0" },
  { x: 9351, y: -417, radius: 26, gateId: "g99_1" },
  { x: 16034, y: -1086, radius: 26, gateId: "g99_2" },
];
