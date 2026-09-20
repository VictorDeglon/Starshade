// Level 83 Data — "The Fracturing Sky"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 83";
window.levelAccent = "#ffd15c";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 478, y: 291, width: 118, height: 21, conveyor: true, conveyorSpeed: 0.92 },
  { x: 1007, y: 196, width: 106, height: 29, moveAxis: "y", moveRange: 123, moveSpeed: 0.058, movePhase: 5.21 },
  { x: 1282, y: 95, width: 161, height: 23 },
  { x: 1854, y: 7, width: 112, height: 17, bounce: true, bounceStrength: -19 },
  { x: 2150, y: -78, width: 68, height: 21, conveyor: true, conveyorSpeed: -1.31 },
  { x: 2218, y: -78, width: 229, height: 20 },
  { x: 2610, y: -99, width: 106, height: 16, gated: true, gateId: "g83_0" },
  { x: 2788, y: -107, width: 250, height: 20 },
  { x: 3236, y: -161, width: 78, height: 21 },
  { x: 3527, y: -184, width: 81, height: 26 },
  { x: 4058, y: -187, width: 203, height: 21, moveAxis: "y", moveRange: 128, moveSpeed: 0.049, movePhase: 3.47 },
  { x: 4484, y: -195, width: 170, height: 22, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 4887, y: -178, width: 109, height: 27, conveyor: true, conveyorSpeed: 1.04 },
  { x: 5446, y: -184, width: 179, height: 23, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 5858, y: -166, width: 165, height: 24, bounce: true, bounceStrength: -18 },
  { x: 6023, y: -166, width: 262, height: 20 },
  { x: 6459, y: -193, width: 99, height: 16, gated: true, gateId: "g83_1" },
  { x: 6626, y: -198, width: 200, height: 20 },
  { x: 7043, y: -213, width: 192, height: 17, moveAxis: "y", moveRange: 93, moveSpeed: 0.066, movePhase: 3.85 },
  { x: 7672, y: -249, width: 114, height: 20, moveAxis: "x", moveRange: 98, moveSpeed: 0.048, movePhase: 1.35 },
  { x: 8223, y: -293, width: 222, height: 17, moveAxis: "x", moveRange: 116, moveSpeed: 0.044, movePhase: 0.58 },
  { x: 8872, y: -350, width: 103, height: 28 },
  { x: 9169, y: -417, width: 92, height: 14, moveAxis: "y", moveRange: 127, moveSpeed: 0.059, movePhase: 2.17 },
  { x: 9678, y: -496, width: 139, height: 25 },
  { x: 10228, y: -586, width: 117, height: 16 },
  { x: 10345, y: -586, width: 273, height: 20 },
  { x: 10821, y: -602, width: 97, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 11113, y: -630, width: 268, height: 20 },
  { x: 11556, y: -727, width: 73, height: 16, bounce: true, bounceStrength: -16 },
  { x: 12040, y: -818, width: 214, height: 26, conveyor: true, conveyorSpeed: 2.04 },
  { x: 12675, y: -890, width: 131, height: 15 },
  { x: 13227, y: -957, width: 186, height: 26, melt: true, meltDelay: 20 },
  { x: 13844, y: -1005, width: 201, height: 28, melt: true, meltDelay: 20 },
  { x: 14045, y: -1005, width: 241, height: 20 },
  { x: 14490, y: -1033, width: 93, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 14783, y: -1049, width: 221, height: 20 },
  { x: 15444, y: -1075, width: 206, height: 18 },
  { x: 16100, y: -1083, width: 183, height: 22, moveAxis: "x", moveRange: 106, moveSpeed: 0.07, movePhase: 0.08 },
  { x: 16506, y: -1089, width: 94, height: 20 },
  { x: 17050, y: -1096, width: 214, height: 23, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 17497, y: -1083, width: 68, height: 21 },
  { x: 17792, y: -1072, width: 203, height: 18, bounce: true, bounceStrength: -16 },
  { x: 18159, y: -1072, width: 185, height: 24 },
  { x: 18784, y: -1106, width: 55, height: 26 },
  { x: 19043, y: -1152, width: 148, height: 23 },
  { x: 19379, y: -1224, width: 106, height: 14, bounce: true, bounceStrength: -18 },
  { x: 19673, y: -1297, width: 79, height: 30, conveyor: true, conveyorSpeed: 1.15 },
  { x: 19927, y: -1391, width: 126, height: 22, conveyor: true, conveyorSpeed: 2.08 },
  { x: 20244, y: -1380, width: 398, height: 20 },
];

window.deadlyPlatforms = [
  { x: 920, y: 140, width: 75, height: 15, moveAxis: "x", moveRange: 135, moveSpeed: 0.05, movePhase: 2.79 },
  { x: 4122, y: -127, width: 128, height: 18, moveAxis: "x", moveRange: 137, moveSpeed: 0.056, movePhase: 1.29 },
  { x: 7086, y: -241, width: 110, height: 22, moveAxis: "x", moveRange: 99, moveSpeed: 0.065, movePhase: 2.31 },
  { x: 7610, y: -282, width: 100, height: 15, moveAxis: "y", moveRange: 108, moveSpeed: 0.058, movePhase: 4.85 },
  { x: 8151, y: -243, width: 178, height: 16, moveAxis: "y", moveRange: 106, moveSpeed: 0.038, movePhase: 0.71 },
  { x: 16149, y: -1136, width: 163, height: 19, moveAxis: "y", moveRange: 85, moveSpeed: 0.085, movePhase: 4.23 },
  { x: 1463, y: 105, width: 98, height: 20 },
  { x: 3636, y: -175, width: 64, height: 20 },
  { x: 8995, y: -341, width: 60, height: 20 },
  { x: 9852, y: -504, width: 115, height: 20 },
  { x: 10376, y: -582, width: 80, height: 20 },
  { x: 12833, y: -885, width: 83, height: 20 },
  { x: 15684, y: -1084, width: 154, height: 20 },
  { x: 16633, y: -1099, width: 60, height: 20 },
  { x: 17585, y: -1092, width: 60, height: 20 },
  { x: 18870, y: -1108, width: 60, height: 20 },
  { x: 19215, y: -1143, width: 75, height: 20 },
];

window.spikes = [
  { x: 1330, y: 95, size: 40 },
  { x: 3263, y: -161, size: 25 },
  { x: 3550, y: -184, size: 14 },
  { x: 8896, y: -350, size: 53 },
  { x: 9727, y: -496, size: 38 },
  { x: 9765, y: -496, size: 30 },
  { x: 10262, y: -586, size: 52 },
  { x: 12721, y: -890, size: 13 },
  { x: 12734, y: -890, size: 31 },
  { x: 15516, y: -1075, size: 18 },
  { x: 15534, y: -1075, size: 29 },
  { x: 15563, y: -1075, size: 21 },
  { x: 15584, y: -1075, size: 51 },
  { x: 16536, y: -1089, size: 36 },
  { x: 16572, y: -1089, size: 15 },
  { x: 18794, y: -1106, size: 15 },
  { x: 19091, y: -1152, size: 32 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2848, y: -137, reached: false },
  { x: 6686, y: -228, reached: false },
  { x: 11173, y: -660, reached: false },
  { x: 14843, y: -1079, reached: false },
  { x: 18252, y: -1102, reached: false },
  { x: 20443, y: -1410, reached: false }, // Final
];

window.lasers = [
  { x: 2045, y: -39, length: 128, width: 4, baseAngle: 5.55, sweepAngle: 0.79, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 2315, y: -148, length: 132, width: 4, baseAngle: 2.49, sweepAngle: 0.75, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 3379, y: -252, length: 225, width: 4, baseAngle: 0.96, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 4721, y: -252, length: 112, width: 4, baseAngle: 3.32, sweepAngle: 1.03, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 5095, y: -263, length: 137, width: 4, baseAngle: 5.02, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 6113, y: -261, length: 209, width: 4, baseAngle: 1.76, sweepAngle: 1.13, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 7309, y: -289, length: 189, width: 4, baseAngle: 4.54, sweepAngle: 0.55, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 7884, y: -304, length: 138, width: 4, baseAngle: 1.84, sweepAngle: 0.99, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 8540, y: -372, length: 132, width: 4, baseAngle: 6.09, sweepAngle: 0.72, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 9035, y: -411, length: 197, width: 4, baseAngle: 1.74, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 10428, y: -640, length: 185, width: 4, baseAngle: 4.74, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 11715, y: -798, length: 202, width: 4, baseAngle: 6.07, sweepAngle: 0.69, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 12350, y: -864, length: 124, width: 4, baseAngle: 1.23, sweepAngle: 1.09, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 12878, y: -974, length: 119, width: 4, baseAngle: 5.38, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 15735, y: -1141, length: 112, width: 4, baseAngle: 4.98, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 16343, y: -1128, length: 150, width: 4, baseAngle: 4.85, sweepAngle: 1.17, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 17347, y: -1146, length: 224, width: 4, baseAngle: 5.43, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 17626, y: -1160, length: 185, width: 4, baseAngle: 2.77, sweepAngle: 0.81, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 18068, y: -1165, length: 116, width: 4, baseAngle: 4.31, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 19260, y: -1192, length: 231, width: 4, baseAngle: 3.86, sweepAngle: 0.64, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 19581, y: -1286, length: 215, width: 4, baseAngle: 2.21, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
];

window.fallers = [
  { x: 692, y: 182, size: 50, triggerX: 528 },
  { x: 4359, y: -301, size: 50, triggerX: 4152 },
  { x: 19833, y: -1427, size: 53, triggerX: 19695 },
];

window.switches = [
  { x: 2425, y: -108, radius: 26, gateId: "g83_0" },
  { x: 6263, y: -196, radius: 26, gateId: "g83_1" },
];
