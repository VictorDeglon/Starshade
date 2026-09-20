// Level 80 Data — "The Wraith Stair"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 80";
window.levelAccent = "#ffd15c";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 527, y: 391, width: 232, height: 27, moveAxis: "y", moveRange: 138, moveSpeed: 0.045, movePhase: 3.03 },
  { x: 1209, y: 388, width: 88, height: 14, melt: true, meltDelay: 20 },
  { x: 1524, y: 390, width: 113, height: 25, bounce: true, bounceStrength: -17 },
  { x: 1864, y: 390, width: 172, height: 26, conveyor: true, conveyorSpeed: -1.94 },
  { x: 2259, y: 380, width: 55, height: 18, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 2314, y: 380, width: 233, height: 20 },
  { x: 2711, y: 358, width: 97, height: 16, gated: true, gateId: "g80_0" },
  { x: 2888, y: 351, width: 257, height: 20 },
  { x: 3582, y: 308, width: 126, height: 23, moveAxis: "x", moveRange: 80, moveSpeed: 0.047, movePhase: 4.04 },
  { x: 4129, y: 237, width: 174, height: 15 },
  { x: 4487, y: 156, width: 64, height: 22 },
  { x: 4735, y: 77, width: 204, height: 22 },
  { x: 5350, y: -14, width: 209, height: 19, melt: true, meltDelay: 20 },
  { x: 5734, y: -112, width: 108, height: 30, conveyor: true, conveyorSpeed: 2.1 },
  { x: 6006, y: -112, width: 248, height: 16 },
  { x: 6442, y: -190, width: 80, height: 28 },
  { x: 6949, y: -247, width: 48, height: 30, moveAxis: "x", moveRange: 102, moveSpeed: 0.059, movePhase: 5.79 },
  { x: 7434, y: -289, width: 101, height: 19, conveyor: true, conveyorSpeed: -0.9 },
  { x: 7975, y: -318, width: 184, height: 30 },
  { x: 8609, y: -323, width: 230, height: 30, conveyor: true, conveyorSpeed: 1.18 },
  { x: 9066, y: -321, width: 70, height: 22, moveAxis: "y", moveRange: 88, moveSpeed: 0.068, movePhase: 4.51 },
  { x: 9136, y: -321, width: 249, height: 20 },
  { x: 9584, y: -345, width: 105, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 9868, y: -367, width: 248, height: 20 },
  { x: 10343, y: -365, width: 73, height: 17, melt: true, meltDelay: 20 },
  { x: 10649, y: -347, width: 220, height: 27, moveAxis: "y", moveRange: 124, moveSpeed: 0.053, movePhase: 5.82 },
  { x: 11315, y: -359, width: 115, height: 14, melt: true, meltDelay: 20 },
  { x: 11876, y: -373, width: 151, height: 24, melt: true, meltDelay: 20 },
  { x: 12467, y: -403, width: 106, height: 17, moveAxis: "x", moveRange: 94, moveSpeed: 0.062, movePhase: 5.08 },
  { x: 13010, y: -447, width: 78, height: 17 },
  { x: 13519, y: -499, width: 149, height: 20 },
  { x: 13668, y: -499, width: 286, height: 20 },
  { x: 14144, y: -525, width: 107, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 14441, y: -549, width: 221, height: 20 },
  { x: 14837, y: -642, width: 65, height: 29, conveyor: true, conveyorSpeed: -1.75 },
  { x: 15086, y: -723, width: 104, height: 29, melt: true, meltDelay: 20 },
  { x: 15597, y: -826, width: 72, height: 20 },
  { x: 16086, y: -909, width: 190, height: 20 },
  { x: 16460, y: -993, width: 190, height: 28, melt: true, meltDelay: 20 },
  { x: 16834, y: -1078, width: 58, height: 19, melt: true, meltDelay: 20 },
  { x: 16892, y: -1078, width: 279, height: 20 },
  { x: 17365, y: -1102, width: 94, height: 16, gated: true, gateId: "g80_1" },
  { x: 17516, y: -1095, width: 250, height: 20 },
  { x: 17970, y: -1140, width: 103, height: 15 },
  { x: 18277, y: -1186, width: 206, height: 28, melt: true, meltDelay: 20 },
  { x: 18923, y: -1219, width: 201, height: 18 },
  { x: 19351, y: -1216, width: 64, height: 14, conveyor: true, conveyorSpeed: -2.08 },
  { x: 19865, y: -1223, width: 188, height: 28, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 20239, y: -1209, width: 435, height: 20 },
];

window.deadlyPlatforms = [
  { x: 464, y: 365, width: 185, height: 18, moveAxis: "x", moveRange: 126, moveSpeed: 0.053, movePhase: 3.49 },
  { x: 3667, y: 353, width: 88, height: 23, moveAxis: "y", moveRange: 84, moveSpeed: 0.042, movePhase: 5.97 },
  { x: 9149, y: -378, width: 59, height: 19, moveAxis: "x", moveRange: 110, moveSpeed: 0.074, movePhase: 4.17 },
  { x: 10600, y: -287, width: 130, height: 18, moveAxis: "x", moveRange: 117, moveSpeed: 0.059, movePhase: 2.04 },
  { x: 12420, y: -343, width: 59, height: 18, moveAxis: "y", moveRange: 84, moveSpeed: 0.065, movePhase: 2.04 },
  { x: 4337, y: 245, width: 153, height: 20 },
  { x: 4581, y: 162, width: 60, height: 20 },
  { x: 4978, y: 76, width: 149, height: 20 },
  { x: 6546, y: -185, width: 60, height: 20 },
  { x: 8188, y: -311, width: 156, height: 20 },
  { x: 13127, y: -441, width: 60, height: 20 },
  { x: 13702, y: -504, width: 98, height: 20 },
  { x: 15705, y: -836, width: 60, height: 20 },
  { x: 16311, y: -904, width: 100, height: 20 },
  { x: 18099, y: -1131, width: 62, height: 20 },
  { x: 19145, y: -1223, width: 168, height: 20 },
];

window.spikes = [
  { x: 4179, y: 237, size: 23 },
  { x: 4202, y: 237, size: 34 },
  { x: 4236, y: 237, size: 45 },
  { x: 4780, y: 77, size: 53 },
  { x: 4833, y: 77, size: 38 },
  { x: 4871, y: 77, size: 59 },
  { x: 6452, y: -190, size: 63 },
  { x: 8039, y: -318, size: 41 },
  { x: 8080, y: -318, size: 60 },
  { x: 13021, y: -447, size: 39 },
  { x: 13546, y: -499, size: 29 },
  { x: 13575, y: -499, size: 16 },
  { x: 15606, y: -826, size: 54 },
  { x: 16109, y: -909, size: 47 },
  { x: 18000, y: -1140, size: 55 },
  { x: 18967, y: -1219, size: 55 },
  { x: 19022, y: -1219, size: 35 },
  { x: 19057, y: -1219, size: 12 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2948, y: 321, reached: false },
  { x: 6130, y: -142, reached: false },
  { x: 9928, y: -397, reached: false },
  { x: 14501, y: -579, reached: false },
  { x: 17576, y: -1125, reached: false },
  { x: 20457, y: -1239, reached: false }, // Final
];

window.lasers = [
  { x: 1385, y: 336, length: 258, width: 4, baseAngle: 2.43, sweepAngle: 1.05, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 4626, y: 93, length: 119, width: 4, baseAngle: 3.57, sweepAngle: 1.16, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 5019, y: -1, length: 148, width: 4, baseAngle: 0.18, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 5932, y: -205, length: 171, width: 4, baseAngle: 0.01, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 8245, y: -380, length: 142, width: 4, baseAngle: 3.02, sweepAngle: 0.96, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 8932, y: -369, length: 207, width: 4, baseAngle: 1.67, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 9207, y: -367, length: 146, width: 4, baseAngle: 0.49, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 10954, y: -412, length: 260, width: 4, baseAngle: 1.28, sweepAngle: 0.95, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 12093, y: -467, length: 251, width: 4, baseAngle: 0.28, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 13168, y: -487, length: 138, width: 4, baseAngle: 1.79, sweepAngle: 0.49, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 18559, y: -1230, length: 200, width: 4, baseAngle: 1.22, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 19210, y: -1301, length: 120, width: 4, baseAngle: 5.49, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 19505, y: -1275, length: 148, width: 4, baseAngle: 2.15, sweepAngle: 0.49, period: 136, blinkPeriod: 0, onRatio: 0.5 },
];

window.fallers = [
  { x: 850, y: 293, size: 36, triggerX: 655 },
  { x: 2394, y: 270, size: 49, triggerX: 2214 },
  { x: 4378, y: 121, size: 43, triggerX: 4184 },
  { x: 5631, y: -111, size: 36, triggerX: 5476 },
  { x: 7617, y: -400, size: 32, triggerX: 7441 },
  { x: 12671, y: -509, size: 33, triggerX: 12507 },
  { x: 15250, y: -831, size: 51, triggerX: 15086 },
  { x: 15735, y: -932, size: 45, triggerX: 15554 },
  { x: 16739, y: -1082, size: 49, triggerX: 16545 },
  { x: 20118, y: -1326, size: 26, triggerX: 19950 },
];

window.switches = [
  { x: 2525, y: 350, radius: 26, gateId: "g80_0" },
  { x: 17149, y: -1108, radius: 26, gateId: "g80_1" },
];
