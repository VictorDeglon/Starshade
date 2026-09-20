// Level 87 Data — "The Hollow Zenith"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 87";
window.levelAccent = "#ffd15c";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 523, y: 371, width: 81, height: 21 },
  { x: 1050, y: 357, width: 172, height: 22, conveyor: true, conveyorSpeed: 1.39 },
  { x: 1659, y: 322, width: 137, height: 24, bounce: true, bounceStrength: -17 },
  { x: 2227, y: 276, width: 60, height: 29, moveAxis: "y", moveRange: 126, moveSpeed: 0.073, movePhase: 4.29 },
  { x: 2714, y: 210, width: 52, height: 20 },
  { x: 2766, y: 210, width: 250, height: 20 },
  { x: 3222, y: 183, width: 100, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 3508, y: 157, width: 221, height: 20 },
  { x: 3907, y: 69, width: 128, height: 20, moveAxis: "y", moveRange: 112, moveSpeed: 0.067, movePhase: 5.45 },
  { x: 4437, y: -40, width: 230, height: 18 },
  { x: 4826, y: -155, width: 186, height: 16, melt: true, meltDelay: 20 },
  { x: 5423, y: -245, width: 208, height: 18, conveyor: true, conveyorSpeed: 1.15 },
  { x: 6042, y: -340, width: 201, height: 22 },
  { x: 6654, y: -434, width: 192, height: 18 },
  { x: 6846, y: -434, width: 238, height: 20 },
  { x: 7262, y: -458, width: 98, height: 16, gated: true, gateId: "g87_0" },
  { x: 7429, y: -450, width: 245, height: 20 },
  { x: 7872, y: -511, width: 70, height: 15, conveyor: true, conveyorSpeed: -1.35 },
  { x: 8382, y: -542, width: 95, height: 19 },
  { x: 8923, y: -555, width: 51, height: 27 },
  { x: 9424, y: -562, width: 232, height: 29, melt: true, meltDelay: 20 },
  { x: 9879, y: -566, width: 134, height: 26, melt: true, meltDelay: 20 },
  { x: 10236, y: -570, width: 102, height: 21, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 10338, y: -570, width: 260, height: 20 },
  { x: 10796, y: -588, width: 105, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 11083, y: -601, width: 275, height: 20 },
  { x: 11585, y: -594, width: 194, height: 18, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 12006, y: -593, width: 226, height: 25, bounce: true, bounceStrength: -16 },
  { x: 12678, y: -613, width: 180, height: 15 },
  { x: 13056, y: -669, width: 49, height: 16, melt: true, meltDelay: 20 },
  { x: 13293, y: -742, width: 184, height: 16, melt: true, meltDelay: 20 },
  { x: 13671, y: -805, width: 188, height: 26, moveAxis: "y", moveRange: 115, moveSpeed: 0.061, movePhase: 0.35 },
  { x: 14023, y: -805, width: 372, height: 27 },
  { x: 14806, y: -900, width: 203, height: 15, melt: true, meltDelay: 20 },
  { x: 15174, y: -1010, width: 113, height: 16 },
  { x: 15462, y: -1108, width: 177, height: 14, bounce: true, bounceStrength: -16 },
  { x: 15808, y: -1210, width: 164, height: 28 },
  { x: 16147, y: -1304, width: 84, height: 23, bounce: true, bounceStrength: -18 },
  { x: 16658, y: -1360, width: 191, height: 20, melt: true, meltDelay: 20 },
  { x: 16849, y: -1360, width: 261, height: 20 },
  { x: 17297, y: -1393, width: 102, height: 16, gated: true, gateId: "g87_1" },
  { x: 17443, y: -1409, width: 227, height: 20 },
  { x: 18110, y: -1434, width: 146, height: 25, melt: true, meltDelay: 20 },
  { x: 18469, y: -1467, width: 164, height: 22, bounce: true, bounceStrength: -16 },
  { x: 19083, y: -1477, width: 224, height: 19, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 19540, y: -1464, width: 140, height: 16, bounce: true, bounceStrength: -18 },
  { x: 19903, y: -1471, width: 65, height: 30, melt: true, meltDelay: 20 },
  { x: 20201, y: -1459, width: 65, height: 29, melt: true, meltDelay: 20 },
  { x: 20469, y: -1446, width: 420, height: 20 },
];

window.deadlyPlatforms = [
  { x: 2296, y: 220, width: 50, height: 19, moveAxis: "x", moveRange: 112, moveSpeed: 0.065, movePhase: 2.48 },
  { x: 3987, y: 110, width: 103, height: 18, moveAxis: "x", moveRange: 103, moveSpeed: 0.075, movePhase: 3.4 },
  { x: 13621, y: -834, width: 128, height: 14, moveAxis: "x", moveRange: 105, moveSpeed: 0.052, movePhase: 2.26 },
  { x: 640, y: 367, width: 69, height: 20 },
  { x: 2795, y: 201, width: 60, height: 20 },
  { x: 4687, y: -39, width: 157, height: 20 },
  { x: 6281, y: -343, width: 173, height: 20 },
  { x: 6877, y: -431, width: 130, height: 20 },
  { x: 8509, y: -535, width: 60, height: 20 },
  { x: 9011, y: -554, width: 60, height: 20 },
  { x: 12880, y: -613, width: 137, height: 20 },
  { x: 15320, y: -1018, width: 81, height: 20 },
  { x: 16006, y: -1204, width: 105, height: 20 },
];

window.spikes = [
  { x: 537, y: 371, size: 31 },
  { x: 2722, y: 210, size: 12 },
  { x: 4515, y: -40, size: 21 },
  { x: 4536, y: -40, size: 25 },
  { x: 4561, y: -40, size: 45 },
  { x: 6106, y: -340, size: 27 },
  { x: 6708, y: -434, size: 18 },
  { x: 6726, y: -434, size: 53 },
  { x: 6779, y: -434, size: 47 },
  { x: 8394, y: -542, size: 22 },
  { x: 8416, y: -542, size: 37 },
  { x: 8931, y: -555, size: 18 },
  { x: 12735, y: -613, size: 28 },
  { x: 12763, y: -613, size: 43 },
  { x: 12806, y: -613, size: 41 },
  { x: 15214, y: -1010, size: 48 },
  { x: 15852, y: -1210, size: 41 },
  { x: 15893, y: -1210, size: 48 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 3568, y: 127, reached: false },
  { x: 7489, y: -480, reached: false },
  { x: 11143, y: -631, reached: false },
  { x: 14209, y: -835, reached: false },
  { x: 17503, y: -1439, reached: false },
  { x: 20679, y: -1476, reached: false }, // Final
];

window.forceZones = [
  { x: 14033, y: -895, width: 352, height: 90, axis: "x", force: 0.133 },
];

window.lasers = [
  { x: 1286, y: 276, length: 216, width: 4, baseAngle: 5.52, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 1877, y: 278, length: 214, width: 4, baseAngle: 0.61, sweepAngle: 0.56, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 2351, y: 227, length: 159, width: 4, baseAngle: 0.22, sweepAngle: 0.93, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 5712, y: -316, length: 148, width: 4, baseAngle: 4.08, sweepAngle: 1.14, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 6318, y: -435, length: 155, width: 4, baseAngle: 2.22, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 6944, y: -519, length: 127, width: 4, baseAngle: 5.11, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 8038, y: -608, length: 241, width: 4, baseAngle: 5.74, sweepAngle: 0.7, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 9065, y: -605, length: 102, width: 4, baseAngle: 3.23, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 9721, y: -611, length: 156, width: 4, baseAngle: 4.9, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 10081, y: -606, length: 169, width: 4, baseAngle: 2.71, sweepAngle: 0.64, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 12301, y: -650, length: 177, width: 4, baseAngle: 4.34, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 12952, y: -691, length: 260, width: 4, baseAngle: 2.77, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 13191, y: -743, length: 121, width: 4, baseAngle: 4.04, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 15099, y: -940, length: 201, width: 4, baseAngle: 5.03, sweepAngle: 1.14, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 15361, y: -1096, length: 223, width: 4, baseAngle: 6.15, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 16044, y: -1260, length: 199, width: 4, baseAngle: 5.69, sweepAngle: 1.12, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 19372, y: -1519, length: 112, width: 4, baseAngle: 3.96, sweepAngle: 1.17, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 19756, y: -1527, length: 193, width: 4, baseAngle: 5.94, sweepAngle: 0.66, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 20331, y: -1545, length: 119, width: 4, baseAngle: 0.4, sweepAngle: 0.91, period: 136, blinkPeriod: 0, onRatio: 0.5 },
];

window.fallers = [
  { x: 4765, y: -167, size: 23, triggerX: 4588 },
  { x: 11872, y: -726, size: 38, triggerX: 11675 },
  { x: 13563, y: -850, size: 27, triggerX: 13410 },
  { x: 15701, y: -1206, size: 28, triggerX: 15512 },
  { x: 16296, y: -1437, size: 23, triggerX: 16126 },
  { x: 20042, y: -1605, size: 50, triggerX: 19896 },
];

window.switches = [
  { x: 7062, y: -464, radius: 26, gateId: "g87_0" },
  { x: 17088, y: -1390, radius: 26, gateId: "g87_1" },
];
