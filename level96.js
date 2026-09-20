// Level 96 Data — "The Final Cinder"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 96";
window.levelAccent = "#4de8d8";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 475, y: 287, width: 190, height: 23 },
  { x: 1072, y: 184, width: 91, height: 16, melt: true, meltDelay: 20 },
  { x: 1580, y: 104, width: 219, height: 25, bounce: true, bounceStrength: -18 },
  { x: 2220, y: 29, width: 87, height: 22, bounce: true, bounceStrength: -17 },
  { x: 2744, y: -13, width: 70, height: 15, melt: true, meltDelay: 20 },
  { x: 3254, y: -38, width: 112, height: 27, conveyor: true, conveyorSpeed: 1.99 },
  { x: 3589, y: -47, width: 226, height: 15, moveAxis: "y", moveRange: 154, moveSpeed: 0.063, movePhase: 6.24 },
  { x: 3815, y: -47, width: 253, height: 20 },
  { x: 4262, y: -59, width: 109, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 4556, y: -73, width: 267, height: 20 },
  { x: 5273, y: -82, width: 221, height: 14 },
  { x: 5721, y: -74, width: 67, height: 19, bounce: true, bounceStrength: -16 },
  { x: 6015, y: -63, width: 185, height: 24, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 6650, y: -64, width: 75, height: 30, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 7175, y: -68, width: 86, height: 25, bounce: true, bounceStrength: -18 },
  { x: 7701, y: -99, width: 73, height: 14, moveAxis: "y", moveRange: 145, moveSpeed: 0.059, movePhase: 4.95 },
  { x: 8211, y: -142, width: 82, height: 24 },
  { x: 8457, y: -142, width: 376, height: 23 },
  { x: 9021, y: -217, width: 226, height: 29 },
  { x: 9435, y: -295, width: 176, height: 22, moveAxis: "y", moveRange: 143, moveSpeed: 0.054, movePhase: 3.58 },
  { x: 9795, y: -380, width: 174, height: 14 },
  { x: 10144, y: -473, width: 83, height: 20 },
  { x: 10392, y: -583, width: 234, height: 23, melt: true, meltDelay: 20 },
  { x: 11043, y: -668, width: 66, height: 25, moveAxis: "x", moveRange: 153, moveSpeed: 0.069, movePhase: 1.71 },
  { x: 11109, y: -668, width: 288, height: 20 },
  { x: 11601, y: -681, width: 91, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 11897, y: -693, width: 260, height: 20 },
  { x: 12341, y: -775, width: 87, height: 29, moveAxis: "y", moveRange: 139, moveSpeed: 0.064, movePhase: 2.15 },
  { x: 12859, y: -822, width: 160, height: 21, bounce: true, bounceStrength: -20 },
  { x: 13227, y: -862, width: 74, height: 18 },
  { x: 13751, y: -872, width: 165, height: 14 },
  { x: 14143, y: -869, width: 75, height: 29, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 14218, y: -869, width: 256, height: 20 },
  { x: 14678, y: -890, width: 102, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 14977, y: -913, width: 277, height: 20 },
  { x: 15481, y: -904, width: 225, height: 17, conveyor: true, conveyorSpeed: 1.71 },
  { x: 15933, y: -893, width: 186, height: 25, moveAxis: "y", moveRange: 139, moveSpeed: 0.056, movePhase: 3.09 },
  { x: 16352, y: -878, width: 76, height: 20, conveyor: true, conveyorSpeed: -1.67 },
  { x: 16878, y: -886, width: 142, height: 15 },
  { x: 17237, y: -899, width: 179, height: 30 },
  { x: 17580, y: -899, width: 341, height: 17 },
  { x: 18358, y: -939, width: 143, height: 21, melt: true, meltDelay: 20 },
  { x: 18695, y: -1001, width: 79, height: 17, moveAxis: "x", moveRange: 97, moveSpeed: 0.063, movePhase: 1.32 },
  { x: 18962, y: -1072, width: 123, height: 28 },
  { x: 19502, y: -1156, width: 97, height: 20, melt: true, meltDelay: 20 },
  { x: 20006, y: -1252, width: 46, height: 16, melt: true, meltDelay: 20 },
  { x: 20248, y: -1263, width: 438, height: 20 },
];

window.deadlyPlatforms = [
  { x: 3668, y: -6, width: 141, height: 16, moveAxis: "x", moveRange: 173, moveSpeed: 0.066, movePhase: 3.97 },
  { x: 7613, y: -72, width: 50, height: 19, moveAxis: "x", moveRange: 139, moveSpeed: 0.065, movePhase: 4.36 },
  { x: 11086, y: -637, width: 50, height: 16, moveAxis: "y", moveRange: 155, moveSpeed: 0.064, movePhase: 0.6 },
  { x: 12424, y: -725, width: 50, height: 25, moveAxis: "x", moveRange: 150, moveSpeed: 0.073, movePhase: 5.73 },
  { x: 18741, y: -961, width: 60, height: 25, moveAxis: "y", moveRange: 100, moveSpeed: 0.069, movePhase: 4.12 },
  { x: 685, y: 295, width: 155, height: 20 },
  { x: 5521, y: -87, width: 147, height: 20 },
  { x: 8332, y: -133, width: 60, height: 20 },
  { x: 9280, y: -223, width: 137, height: 20 },
  { x: 9998, y: -388, width: 89, height: 20 },
  { x: 10260, y: -473, width: 66, height: 20 },
  { x: 13953, y: -875, width: 99, height: 20 },
  { x: 17049, y: -881, width: 87, height: 20 },
  { x: 17452, y: -896, width: 126, height: 20 },
  { x: 19109, y: -1071, width: 73, height: 20 },
];

window.spikes = [
  { x: 507, y: 287, size: 61 },
  { x: 5347, y: -82, size: 48 },
  { x: 5395, y: -82, size: 24 },
  { x: 5419, y: -82, size: 26 },
  { x: 9101, y: -217, size: 17 },
  { x: 9841, y: -380, size: 24 },
  { x: 10169, y: -473, size: 28 },
  { x: 13249, y: -862, size: 31 },
  { x: 13280, y: -862, size: 12 },
  { x: 13805, y: -872, size: 55 },
  { x: 13860, y: -872, size: 37 },
  { x: 16922, y: -886, size: 42 },
  { x: 16964, y: -886, size: 22 },
  { x: 17287, y: -899, size: 34 },
  { x: 17321, y: -899, size: 28 },
  { x: 19000, y: -1072, size: 28 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 4616, y: -103, reached: false },
  { x: 8645, y: -172, reached: false },
  { x: 11957, y: -723, reached: false },
  { x: 15037, y: -943, reached: false },
  { x: 17751, y: -929, reached: false },
  { x: 20467, y: -1293, reached: false }, // Final
];

window.forceZones = [
  { x: 8467, y: -232, width: 356, height: 90, axis: "x", force: -0.193 },
  { x: 17590, y: -989, width: 321, height: 90, axis: "x", force: 0.205 },
];

window.lasers = [
  { x: 1871, y: 64, length: 239, width: 4, baseAngle: 2.96, sweepAngle: 0.75, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 2402, y: -13, length: 186, width: 4, baseAngle: 4.52, sweepAngle: 0.73, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 3460, y: -121, length: 212, width: 4, baseAngle: 6.14, sweepAngle: 0.53, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 3896, y: -138, length: 192, width: 4, baseAngle: 5.2, sweepAngle: 0.89, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 5569, y: -154, length: 100, width: 4, baseAngle: 2.76, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 5866, y: -125, length: 106, width: 4, baseAngle: 4.48, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 6788, y: -148, length: 172, width: 4, baseAngle: 4.71, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 7863, y: -194, length: 259, width: 4, baseAngle: 2.96, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 8388, y: -220, length: 104, width: 4, baseAngle: 5.82, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 9325, y: -276, length: 220, width: 4, baseAngle: 5.49, sweepAngle: 1.1, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 9681, y: -350, length: 150, width: 4, baseAngle: 2.87, sweepAngle: 0.53, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 10708, y: -653, length: 240, width: 4, baseAngle: 0.34, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 12519, y: -852, length: 255, width: 4, baseAngle: 0.24, sweepAngle: 0.65, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 13088, y: -911, length: 103, width: 4, baseAngle: 1.6, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 13393, y: -945, length: 229, width: 4, baseAngle: 1.04, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 13981, y: -933, length: 118, width: 4, baseAngle: 1.42, sweepAngle: 0.93, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 14296, y: -929, length: 207, width: 4, baseAngle: 2.89, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 16492, y: -918, length: 157, width: 4, baseAngle: 3.95, sweepAngle: 0.54, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 17107, y: -946, length: 129, width: 4, baseAngle: 3.84, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 19175, y: -1144, length: 182, width: 4, baseAngle: 5.6, sweepAngle: 1.08, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 19692, y: -1218, length: 141, width: 4, baseAngle: 5.39, sweepAngle: 0.82, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 20131, y: -1312, length: 144, width: 4, baseAngle: 0.95, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
];

window.fallers = [
  { x: 10062, y: -504, size: 25, triggerX: 9874 },
  { x: 10323, y: -599, size: 26, triggerX: 10163 },
  { x: 15801, y: -1042, size: 49, triggerX: 15627 },
  { x: 18561, y: -1022, size: 36, triggerX: 18361 },
];
