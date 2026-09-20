// Level 78 Data — "The Climbing Dark"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 78";
window.levelAccent = "#bfe6ff";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 721, y: 305, width: 154, height: 17, melt: true, meltDelay: 20 },
  { x: 1312, y: 265, width: 231, height: 18 },
  { x: 1751, y: 231, width: 92, height: 30, moveAxis: "y", moveRange: 78, moveSpeed: 0.064, movePhase: 5.51 },
  { x: 2289, y: 218, width: 231, height: 29, melt: true, meltDelay: 20 },
  { x: 2970, y: 210, width: 224, height: 18, moveAxis: "x", moveRange: 141, moveSpeed: 0.064, movePhase: 1.45 },
  { x: 3194, y: 210, width: 289, height: 20 },
  { x: 3679, y: 182, width: 90, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 3968, y: 158, width: 226, height: 20 },
  { x: 4421, y: 163, width: 130, height: 21 },
  { x: 4784, y: 179, width: 201, height: 15, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 5212, y: 182, width: 85, height: 22, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 5747, y: 177, width: 54, height: 22, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 6024, y: 174, width: 85, height: 26, melt: true, meltDelay: 20 },
  { x: 6555, y: 152, width: 53, height: 19 },
  { x: 6772, y: 152, width: 332, height: 24 },
  { x: 7298, y: 87, width: 210, height: 26 },
  { x: 7919, y: -4, width: 200, height: 28 },
  { x: 8303, y: -83, width: 93, height: 24 },
  { x: 8803, y: -187, width: 163, height: 23, conveyor: true, conveyorSpeed: -1.16 },
  { x: 9368, y: -297, width: 223, height: 27 },
  { x: 9591, y: -297, width: 223, height: 20 },
  { x: 10000, y: -319, width: 105, height: 16, gated: true, gateId: "g78_0" },
  { x: 10155, y: -330, width: 257, height: 20 },
  { x: 10823, y: -419, width: 91, height: 26, conveyor: true, conveyorSpeed: 1.77 },
  { x: 11331, y: -503, width: 85, height: 23, moveAxis: "x", moveRange: 102, moveSpeed: 0.045, movePhase: 5.22 },
  { x: 11610, y: -568, width: 123, height: 19, moveAxis: "x", moveRange: 120, moveSpeed: 0.05, movePhase: 3.13 },
  { x: 12170, y: -606, width: 96, height: 21, conveyor: true, conveyorSpeed: 1.81 },
  { x: 12706, y: -634, width: 141, height: 25 },
  { x: 12847, y: -634, width: 267, height: 20 },
  { x: 13270, y: -675, width: 97, height: 16, gated: true, gateId: "g78_1" },
  { x: 13447, y: -680, width: 251, height: 20 },
  { x: 14148, y: -688, width: 62, height: 29, moveAxis: "x", moveRange: 101, moveSpeed: 0.046, movePhase: 2.27 },
  { x: 14443, y: -674, width: 204, height: 18, moveAxis: "y", moveRange: 143, moveSpeed: 0.067, movePhase: 0.86 },
  { x: 14880, y: -659, width: 231, height: 24, moveAxis: "y", moveRange: 111, moveSpeed: 0.066, movePhase: 5.28 },
  { x: 15338, y: -652, width: 67, height: 22, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 15628, y: -656, width: 83, height: 27, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 15934, y: -657, width: 64, height: 20, conveyor: true, conveyorSpeed: 1.17 },
  { x: 16162, y: -657, width: 237, height: 29 },
  { x: 16836, y: -697, width: 94, height: 17, moveAxis: "y", moveRange: 137, moveSpeed: 0.044, movePhase: 6.18 },
  { x: 17351, y: -770, width: 146, height: 18, moveAxis: "y", moveRange: 143, moveSpeed: 0.06, movePhase: 4.91 },
  { x: 17924, y: -831, width: 207, height: 29, melt: true, meltDelay: 20 },
  { x: 18542, y: -919, width: 228, height: 18, melt: true, meltDelay: 20 },
  { x: 18945, y: -1016, width: 89, height: 19 },
  { x: 19198, y: -1016, width: 311, height: 29 },
  { x: 19916, y: -1114, width: 76, height: 14 },
  { x: 20170, y: -1201, width: 169, height: 17 },
  { x: 20519, y: -1200, width: 401, height: 20 },
];

window.deadlyPlatforms = [
  { x: 1820, y: 189, width: 66, height: 23, moveAxis: "x", moveRange: 81, moveSpeed: 0.062, movePhase: 4.69 },
  { x: 3015, y: 183, width: 130, height: 22, moveAxis: "y", moveRange: 120, moveSpeed: 0.058, movePhase: 2.61 },
  { x: 11255, y: -475, width: 66, height: 20, moveAxis: "y", moveRange: 89, moveSpeed: 0.05, movePhase: 1.33 },
  { x: 11694, y: -624, width: 109, height: 22, moveAxis: "y", moveRange: 94, moveSpeed: 0.044, movePhase: 5.92 },
  { x: 14230, y: -741, width: 50, height: 20, moveAxis: "y", moveRange: 124, moveSpeed: 0.047, movePhase: 4.46 },
  { x: 14516, y: -618, width: 162, height: 14, moveAxis: "x", moveRange: 143, moveSpeed: 0.082, movePhase: 4.14 },
  { x: 16906, y: -654, width: 76, height: 21, moveAxis: "x", moveRange: 110, moveSpeed: 0.044, movePhase: 4.34 },
  { x: 17398, y: -730, width: 103, height: 15, moveAxis: "x", moveRange: 178, moveSpeed: 0.055, movePhase: 4.84 },
  { x: 1573, y: 259, width: 190, height: 20 },
  { x: 4589, y: 170, width: 91, height: 20 },
  { x: 6644, y: 161, width: 60, height: 20 },
  { x: 7547, y: 86, width: 181, height: 20 },
  { x: 8152, y: -8, width: 151, height: 20 },
  { x: 8434, y: -77, width: 60, height: 20 },
  { x: 9628, y: -305, width: 155, height: 20 },
  { x: 12874, y: -631, width: 121, height: 20 },
  { x: 19058, y: -1023, width: 60, height: 20 },
  { x: 20375, y: -1192, width: 110, height: 20 },
];

window.spikes = [
  { x: 1391, y: 265, size: 59 },
  { x: 4464, y: 163, size: 59 },
  { x: 4523, y: 163, size: 19 },
  { x: 7370, y: 87, size: 44 },
  { x: 7982, y: -4, size: 38 },
  { x: 8020, y: -4, size: 56 },
  { x: 8322, y: -83, size: 52 },
  { x: 12731, y: -634, size: 32 },
  { x: 12763, y: -634, size: 54 },
  { x: 12817, y: -634, size: 12 },
  { x: 18967, y: -1016, size: 49 },
  { x: 19932, y: -1114, size: 16 },
  { x: 20199, y: -1201, size: 21 },
  { x: 20220, y: -1201, size: 47 },
  { x: 20267, y: -1201, size: 54 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 4028, y: 128, reached: false },
  { x: 6938, y: 122, reached: false },
  { x: 10215, y: -360, reached: false },
  { x: 13507, y: -710, reached: false },
  { x: 16281, y: -687, reached: false },
  { x: 19354, y: -1046, reached: false },
  { x: 20720, y: -1230, reached: false }, // Final
];

window.forceZones = [
  { x: 16172, y: -747, width: 217, height: 90, axis: "x", force: 0.165 },
];

window.lasers = [
  { x: 2603, y: 165, length: 172, width: 4, baseAngle: 3.17, sweepAngle: 1, period: 139, blinkPeriod: 0, onRatio: 0.5 },
  { x: 5077, y: 89, length: 160, width: 4, baseAngle: 0.59, sweepAngle: 0, period: 139, blinkPeriod: 93, onRatio: 0.5 },
  { x: 5899, y: 126, length: 208, width: 4, baseAngle: 3.47, sweepAngle: 0, period: 139, blinkPeriod: 93, onRatio: 0.5 },
  { x: 8201, y: -97, length: 205, width: 4, baseAngle: 1.67, sweepAngle: 0, period: 139, blinkPeriod: 93, onRatio: 0.5 },
  { x: 8477, y: -150, length: 230, width: 4, baseAngle: 2.15, sweepAngle: 0, period: 139, blinkPeriod: 93, onRatio: 0.5 },
  { x: 11005, y: -489, length: 232, width: 4, baseAngle: 5.15, sweepAngle: 0.99, period: 139, blinkPeriod: 0, onRatio: 0.5 },
  { x: 11820, y: -616, length: 212, width: 4, baseAngle: 3.02, sweepAngle: 0.92, period: 139, blinkPeriod: 0, onRatio: 0.5 },
  { x: 12333, y: -646, length: 181, width: 4, baseAngle: 0.19, sweepAngle: 1.14, period: 139, blinkPeriod: 0, onRatio: 0.5 },
  { x: 12930, y: -692, length: 185, width: 4, baseAngle: 4.77, sweepAngle: 1.1, period: 139, blinkPeriod: 0, onRatio: 0.5 },
  { x: 14728, y: -760, length: 138, width: 4, baseAngle: 6.19, sweepAngle: 0, period: 139, blinkPeriod: 93, onRatio: 0.5 },
  { x: 15498, y: -751, length: 216, width: 4, baseAngle: 4.91, sweepAngle: 1.09, period: 139, blinkPeriod: 0, onRatio: 0.5 },
  { x: 17023, y: -738, length: 210, width: 4, baseAngle: 5.32, sweepAngle: 0.86, period: 139, blinkPeriod: 0, onRatio: 0.5 },
  { x: 20073, y: -1197, length: 141, width: 4, baseAngle: 3.38, sweepAngle: 0, period: 139, blinkPeriod: 93, onRatio: 0.5 },
];

window.fallers = [
  { x: 4632, y: 76, size: 24, triggerX: 4498 },
  { x: 6697, y: 50, size: 48, triggerX: 6559 },
  { x: 16086, y: -795, size: 29, triggerX: 15893 },
  { x: 18211, y: -959, size: 31, triggerX: 18066 },
];

window.switches = [
  { x: 9792, y: -327, radius: 26, gateId: "g78_0" },
  { x: 13092, y: -664, radius: 26, gateId: "g78_1" },
];
