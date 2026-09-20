// Level 79 Data — "Cindertower Reach"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 79";
window.levelAccent = "#bfe6ff";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 746, y: 363, width: 74, height: 14 },
  { x: 1043, y: 362, width: 170, height: 17 },
  { x: 1440, y: 364, width: 198, height: 16, conveyor: true, conveyorSpeed: 2.05 },
  { x: 1871, y: 379, width: 135, height: 17, conveyor: true, conveyorSpeed: 1.69 },
  { x: 2229, y: 377, width: 90, height: 27, melt: true, meltDelay: 20 },
  { x: 2769, y: 367, width: 226, height: 20, moveAxis: "y", moveRange: 111, moveSpeed: 0.064, movePhase: 4.2 },
  { x: 2995, y: 367, width: 278, height: 20 },
  { x: 3470, y: 339, width: 94, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 3752, y: 310, width: 250, height: 20 },
  { x: 4442, y: 282, width: 57, height: 21, bounce: true, bounceStrength: -18 },
  { x: 4712, y: 259, width: 77, height: 19, melt: true, meltDelay: 20 },
  { x: 4997, y: 218, width: 183, height: 19 },
  { x: 5374, y: 155, width: 192, height: 17 },
  { x: 5754, y: 84, width: 57, height: 27, bounce: true, bounceStrength: -18 },
  { x: 6222, y: -8, width: 113, height: 28 },
  { x: 6746, y: -98, width: 81, height: 15 },
  { x: 6827, y: -98, width: 249, height: 20 },
  { x: 7250, y: -128, width: 114, height: 16, gated: true, gateId: "g79_0" },
  { x: 7414, y: -142, width: 246, height: 20 },
  { x: 8077, y: -227, width: 57, height: 27, melt: true, meltDelay: 20 },
  { x: 8555, y: -299, width: 209, height: 26, melt: true, meltDelay: 20 },
  { x: 8952, y: -377, width: 90, height: 21 },
  { x: 9469, y: -442, width: 139, height: 18, bounce: true, bounceStrength: -17 },
  { x: 10045, y: -487, width: 140, height: 26 },
  { x: 10185, y: -487, width: 250, height: 20 },
  { x: 10610, y: -513, width: 107, height: 16, gated: true, gateId: "g79_1" },
  { x: 10776, y: -512, width: 258, height: 20 },
  { x: 11484, y: -522, width: 206, height: 28, conveyor: true, conveyorSpeed: -1.13 },
  { x: 11913, y: -526, width: 48, height: 25, moveAxis: "x", moveRange: 130, moveSpeed: 0.043, movePhase: 6.15 },
  { x: 12188, y: -520, width: 68, height: 16, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 12483, y: -514, width: 87, height: 14, moveAxis: "x", moveRange: 114, moveSpeed: 0.043, movePhase: 3.48 },
  { x: 12797, y: -512, width: 77, height: 26 },
  { x: 13320, y: -524, width: 227, height: 16, melt: true, meltDelay: 20 },
  { x: 13993, y: -536, width: 152, height: 18 },
  { x: 14309, y: -536, width: 347, height: 26 },
  { x: 15087, y: -591, width: 70, height: 26, bounce: true, bounceStrength: -19 },
  { x: 15355, y: -648, width: 179, height: 20, melt: true, meltDelay: 20 },
  { x: 15712, y: -734, width: 110, height: 28 },
  { x: 15991, y: -834, width: 91, height: 24, moveAxis: "x", moveRange: 85, moveSpeed: 0.05, movePhase: 2.73 },
  { x: 16493, y: -922, width: 177, height: 23 },
  { x: 17087, y: -1007, width: 189, height: 23, melt: true, meltDelay: 20 },
  { x: 17440, y: -1007, width: 289, height: 30 },
  { x: 18146, y: -1093, width: 74, height: 30, conveyor: true, conveyorSpeed: 1.54 },
  { x: 18414, y: -1160, width: 101, height: 16, moveAxis: "x", moveRange: 101, moveSpeed: 0.067, movePhase: 1.61 },
  { x: 18719, y: -1204, width: 177, height: 30 },
  { x: 19094, y: -1257, width: 79, height: 19 },
  { x: 19354, y: -1247, width: 384, height: 20 },
];

window.deadlyPlatforms = [
  { x: 12002, y: -497, width: 50, height: 17, moveAxis: "y", moveRange: 135, moveSpeed: 0.037, movePhase: 1.17 },
  { x: 12420, y: -466, width: 70, height: 21, moveAxis: "y", moveRange: 115, moveSpeed: 0.046, movePhase: 4.18 },
  { x: 16057, y: -882, width: 63, height: 14, moveAxis: "y", moveRange: 73, moveSpeed: 0.055, movePhase: 2.73 },
  { x: 18455, y: -1201, width: 82, height: 15, moveAxis: "y", moveRange: 78, moveSpeed: 0.069, movePhase: 0.28 },
  { x: 859, y: 367, width: 60, height: 20 },
  { x: 1243, y: 362, width: 131, height: 20 },
  { x: 5210, y: 218, width: 101, height: 20 },
  { x: 5595, y: 162, width: 133, height: 20 },
  { x: 6365, y: -13, width: 75, height: 20 },
  { x: 6854, y: -93, width: 64, height: 20 },
  { x: 9069, y: -383, width: 60, height: 20 },
  { x: 10224, y: -487, width: 121, height: 20 },
  { x: 12907, y: -515, width: 60, height: 20 },
  { x: 14178, y: -541, width: 90, height: 20 },
  { x: 15856, y: -735, width: 92, height: 20 },
  { x: 16690, y: -931, width: 149, height: 20 },
  { x: 18925, y: -1198, width: 99, height: 20 },
  { x: 19203, y: -1264, width: 67, height: 20 },
];

window.spikes = [
  { x: 770, y: 363, size: 25 },
  { x: 795, y: 363, size: 15 },
  { x: 1101, y: 362, size: 47 },
  { x: 5417, y: 155, size: 46 },
  { x: 5463, y: 155, size: 48 },
  { x: 5511, y: 155, size: 33 },
  { x: 6253, y: -8, size: 18 },
  { x: 8978, y: -377, size: 51 },
  { x: 10079, y: -487, size: 44 },
  { x: 10123, y: -487, size: 31 },
  { x: 14030, y: -536, size: 57 },
  { x: 14087, y: -536, size: 37 },
  { x: 16538, y: -922, size: 64 },
  { x: 16602, y: -922, size: 16 },
  { x: 16618, y: -922, size: 44 },
  { x: 18776, y: -1204, size: 22 },
  { x: 19105, y: -1257, size: 61 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 3812, y: 280, reached: false },
  { x: 7474, y: -172, reached: false },
  { x: 10836, y: -542, reached: false },
  { x: 14483, y: -566, reached: false },
  { x: 17585, y: -1037, reached: false },
  { x: 19546, y: -1277, reached: false }, // Final
];

window.lasers = [
  { x: 1291, y: 272, length: 126, width: 4, baseAngle: 0.12, sweepAngle: 0, period: 138, blinkPeriod: 91, onRatio: 0.5 },
  { x: 1727, y: 305, length: 180, width: 4, baseAngle: 3.89, sweepAngle: 0.82, period: 138, blinkPeriod: 0, onRatio: 0.5 },
  { x: 2079, y: 327, length: 122, width: 4, baseAngle: 2.39, sweepAngle: 0.71, period: 138, blinkPeriod: 0, onRatio: 0.5 },
  { x: 4559, y: 238, length: 160, width: 4, baseAngle: 3.73, sweepAngle: 0, period: 138, blinkPeriod: 91, onRatio: 0.5 },
  { x: 4859, y: 167, length: 112, width: 4, baseAngle: 4.51, sweepAngle: 1.13, period: 138, blinkPeriod: 0, onRatio: 0.5 },
  { x: 5265, y: 157, length: 149, width: 4, baseAngle: 5.6, sweepAngle: 0, period: 138, blinkPeriod: 91, onRatio: 0.5 },
  { x: 5628, y: 96, length: 202, width: 4, baseAngle: 0.47, sweepAngle: 1.02, period: 138, blinkPeriod: 0, onRatio: 0.5 },
  { x: 6430, y: -70, length: 169, width: 4, baseAngle: 1.51, sweepAngle: 0.8, period: 138, blinkPeriod: 0, onRatio: 0.5 },
  { x: 6906, y: -153, length: 111, width: 4, baseAngle: 4.6, sweepAngle: 0.67, period: 138, blinkPeriod: 0, onRatio: 0.5 },
  { x: 8826, y: -388, length: 208, width: 4, baseAngle: 2.46, sweepAngle: 0.61, period: 138, blinkPeriod: 0, onRatio: 0.5 },
  { x: 9128, y: -421, length: 192, width: 4, baseAngle: 3.23, sweepAngle: 0, period: 138, blinkPeriod: 91, onRatio: 0.5 },
  { x: 10250, y: -570, length: 139, width: 4, baseAngle: 4.54, sweepAngle: 0, period: 138, blinkPeriod: 91, onRatio: 0.5 },
  { x: 11773, y: -605, length: 100, width: 4, baseAngle: 1.49, sweepAngle: 0, period: 138, blinkPeriod: 91, onRatio: 0.5 },
  { x: 12037, y: -605, length: 175, width: 4, baseAngle: 4.43, sweepAngle: 0, period: 138, blinkPeriod: 91, onRatio: 0.5 },
  { x: 12945, y: -591, length: 158, width: 4, baseAngle: 1.42, sweepAngle: 0.71, period: 138, blinkPeriod: 0, onRatio: 0.5 },
  { x: 15608, y: -692, length: 258, width: 4, baseAngle: 4.5, sweepAngle: 1.01, period: 138, blinkPeriod: 0, onRatio: 0.5 },
  { x: 16180, y: -903, length: 201, width: 4, baseAngle: 2.55, sweepAngle: 0.87, period: 138, blinkPeriod: 0, onRatio: 0.5 },
  { x: 16755, y: -980, length: 260, width: 4, baseAngle: 0.39, sweepAngle: 0.76, period: 138, blinkPeriod: 0, onRatio: 0.5 },
  { x: 19241, y: -1308, length: 115, width: 4, baseAngle: 6.13, sweepAngle: 0, period: 138, blinkPeriod: 91, onRatio: 0.5 },
];

window.fallers = [
  { x: 5884, y: -5, size: 30, triggerX: 5687 },
  { x: 13636, y: -632, size: 30, triggerX: 13483 },
  { x: 15895, y: -838, size: 43, triggerX: 15719 },
  { x: 18286, y: -1195, size: 49, triggerX: 18090 },
  { x: 18576, y: -1274, size: 52, triggerX: 18432 },
  { x: 18983, y: -1310, size: 53, triggerX: 18798 },
];

window.switches = [
  { x: 7054, y: -128, radius: 26, gateId: "g79_0" },
  { x: 10413, y: -517, radius: 26, gateId: "g79_1" },
];
