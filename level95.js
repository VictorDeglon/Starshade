// Level 95 Data — "Mirror's End"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Mirror's End";
window.levelAccent = "#4de8d8";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 475, y: 286, width: 208, height: 22, melt: true, meltDelay: 20 },
  { x: 1090, y: 182, width: 170, height: 16, melt: true, meltDelay: 20 },
  { x: 1667, y: 77, width: 143, height: 18, melt: true, meltDelay: 20 },
  { x: 2221, y: -18, width: 75, height: 30, melt: true, meltDelay: 20 },
  { x: 2471, y: -111, width: 150, height: 20, melt: true, meltDelay: 20 },
  { x: 3038, y: -189, width: 214, height: 23, melt: true, meltDelay: 20 },
  { x: 3436, y: -273, width: 164, height: 20, moveAxis: "x", moveRange: 133, moveSpeed: 0.05, movePhase: 1.94 },
  { x: 3600, y: -273, width: 229, height: 20 },
  { x: 3988, y: -302, width: 113, height: 16, gated: true, gateId: "g95_0" },
  { x: 4174, y: -294, width: 259, height: 20 },
  { x: 4873, y: -324, width: 68, height: 14, conveyor: true, conveyorSpeed: 1.49 },
  { x: 5381, y: -358, width: 214, height: 30, bounce: true, bounceStrength: -18 },
  { x: 6045, y: -361, width: 71, height: 15, moveAxis: "x", moveRange: 149, moveSpeed: 0.049, movePhase: 3.31 },
  { x: 6343, y: -355, width: 211, height: 30, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 6787, y: -337, width: 72, height: 17, melt: true, meltDelay: 20 },
  { x: 6859, y: -337, width: 279, height: 20 },
  { x: 7341, y: -365, width: 104, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 7637, y: -387, width: 226, height: 20 },
  { x: 8096, y: -372, width: 182, height: 15, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 8505, y: -368, width: 113, height: 15, moveAxis: "x", moveRange: 120, moveSpeed: 0.062, movePhase: 5.08 },
  { x: 9064, y: -389, width: 210, height: 14, melt: true, meltDelay: 20 },
  { x: 9714, y: -419, width: 183, height: 18, melt: true, meltDelay: 20 },
  { x: 10328, y: -466, width: 82, height: 14, moveAxis: "y", moveRange: 151, moveSpeed: 0.052, movePhase: 1.73 },
  { x: 10831, y: -542, width: 161, height: 26, melt: true, meltDelay: 20 },
  { x: 11180, y: -616, width: 117, height: 16, melt: true, meltDelay: 20 },
  { x: 11461, y: -616, width: 242, height: 17 },
  { x: 11878, y: -713, width: 87, height: 29, moveAxis: "x", moveRange: 135, moveSpeed: 0.049, movePhase: 2.37 },
  { x: 12372, y: -818, width: 221, height: 20, melt: true, meltDelay: 20 },
  { x: 12762, y: -923, width: 58, height: 25 },
  { x: 13227, y: -1023, width: 171, height: 18, moveAxis: "x", moveRange: 153, moveSpeed: 0.077, movePhase: 4.45 },
  { x: 13582, y: -1103, width: 87, height: 28, melt: true, meltDelay: 20 },
  { x: 13833, y: -1103, width: 387, height: 24 },
  { x: 14657, y: -1142, width: 142, height: 25, melt: true, meltDelay: 20 },
  { x: 15236, y: -1184, width: 60, height: 26, moveAxis: "x", moveRange: 105, moveSpeed: 0.05, movePhase: 0.46 },
  { x: 15742, y: -1203, width: 227, height: 30, moveAxis: "x", moveRange: 139, moveSpeed: 0.068, movePhase: 2.04 },
  { x: 16196, y: -1192, width: 201, height: 23, melt: true, meltDelay: 20 },
  { x: 16847, y: -1203, width: 179, height: 19 },
  { x: 17253, y: -1201, width: 195, height: 25, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 17448, y: -1201, width: 251, height: 20 },
  { x: 17894, y: -1217, width: 106, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 18179, y: -1245, width: 265, height: 20 },
  { x: 18671, y: -1242, width: 132, height: 20, moveAxis: "y", moveRange: 126, moveSpeed: 0.071, movePhase: 2.68 },
  { x: 19249, y: -1265, width: 71, height: 28 },
  { x: 19533, y: -1294, width: 216, height: 18, melt: true, meltDelay: 20 },
  { x: 19953, y: -1341, width: 111, height: 20, conveyor: true, conveyorSpeed: -1.77 },
  { x: 20252, y: -1418, width: 181, height: 20, melt: true, meltDelay: 20 },
  { x: 20611, y: -1419, width: 414, height: 20 },
];

window.deadlyPlatforms = [
  { x: 6003, y: -303, width: 50, height: 22, moveAxis: "y", moveRange: 156, moveSpeed: 0.047, movePhase: 4.96 },
  { x: 8577, y: -331, width: 66, height: 14, moveAxis: "y", moveRange: 118, moveSpeed: 0.068, movePhase: 3.09 },
  { x: 13153, y: -973, width: 123, height: 15, moveAxis: "y", moveRange: 181, moveSpeed: 0.081, movePhase: 4.66 },
  { x: 15152, y: -1227, width: 50, height: 22, moveAxis: "y", moveRange: 103, moveSpeed: 0.049, movePhase: 3.99 },
  { x: 15799, y: -1232, width: 153, height: 25, moveAxis: "y", moveRange: 171, moveSpeed: 0.07, movePhase: 6.02 },
  { x: 18603, y: -1272, width: 74, height: 23, moveAxis: "x", moveRange: 118, moveSpeed: 0.062, movePhase: 2.49 },
  { x: 12853, y: -925, width: 60, height: 20 },
  { x: 17053, y: -1210, width: 145, height: 20 },
  { x: 19353, y: -1257, width: 60, height: 20 },
];

window.spikes = [
  { x: 12774, y: -923, size: 25 },
  { x: 16911, y: -1203, size: 12 },
  { x: 16923, y: -1203, size: 30 },
  { x: 16953, y: -1203, size: 13 },
  { x: 19263, y: -1265, size: 27 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 4234, y: -324, reached: false },
  { x: 7697, y: -417, reached: false },
  { x: 11582, y: -646, reached: false },
  { x: 14027, y: -1133, reached: false },
  { x: 18239, y: -1275, reached: false },
  { x: 20818, y: -1449, reached: false }, // Final
];

window.forceZones = [
  { x: 11471, y: -706, width: 222, height: 90, axis: "x", force: -0.128 },
];

window.lasers = [
  { x: 756, y: 214, length: 107, width: 4, baseAngle: 4.39, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 1344, y: 120, length: 138, width: 4, baseAngle: 0.85, sweepAngle: 0.5, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 1877, y: 8, length: 174, width: 4, baseAngle: 3.15, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 2715, y: -157, length: 173, width: 4, baseAngle: 4, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 3341, y: -279, length: 129, width: 4, baseAngle: 1.21, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 3689, y: -362, length: 223, width: 4, baseAngle: 6.03, sweepAngle: 0.79, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 5008, y: -373, length: 232, width: 4, baseAngle: 1.46, sweepAngle: 0.82, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 5659, y: -425, length: 246, width: 4, baseAngle: 6, sweepAngle: 0.51, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 6183, y: -438, length: 226, width: 4, baseAngle: 2.13, sweepAngle: 0.87, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 8369, y: -453, length: 102, width: 4, baseAngle: 4.24, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 8710, y: -433, length: 196, width: 4, baseAngle: 5.04, sweepAngle: 1, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 9344, y: -477, length: 209, width: 4, baseAngle: 5.53, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 10501, y: -512, length: 128, width: 4, baseAngle: 0.85, sweepAngle: 0.75, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 11358, y: -714, length: 127, width: 4, baseAngle: 0.15, sweepAngle: 0.94, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 12025, y: -780, length: 112, width: 4, baseAngle: 0.26, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 12683, y: -864, length: 189, width: 4, baseAngle: 3.06, sweepAngle: 0.6, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 12914, y: -1004, length: 251, width: 4, baseAngle: 2.9, sweepAngle: 1.01, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 13758, y: -1158, length: 159, width: 4, baseAngle: 4.99, sweepAngle: 0.88, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 15387, y: -1268, length: 102, width: 4, baseAngle: 5.04, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 16068, y: -1262, length: 255, width: 4, baseAngle: 3.61, sweepAngle: 0.85, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 16483, y: -1288, length: 233, width: 4, baseAngle: 2.1, sweepAngle: 0.59, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 19825, y: -1379, length: 205, width: 4, baseAngle: 1.26, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
];

window.fallers = [
  { x: 2376, y: -135, size: 52, triggerX: 2171 },
  { x: 6615, y: -448, size: 55, triggerX: 6464 },
  { x: 6940, y: -451, size: 22, triggerX: 6787 },
  { x: 18894, y: -1376, size: 47, triggerX: 18693 },
  { x: 19412, y: -1365, size: 28, triggerX: 19219 },
  { x: 20163, y: -1434, size: 27, triggerX: 20032 },
  { x: 20514, y: -1540, size: 23, triggerX: 20371 },
];

window.switches = [
  { x: 3807, y: -303, radius: 26, gateId: "g95_0" },
];
