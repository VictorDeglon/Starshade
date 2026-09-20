// Level 81 Data — "Ashen Spire"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 81";
window.levelAccent = "#ffd15c";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 527, y: 383, width: 150, height: 15, conveyor: true, conveyorSpeed: 0.91 },
  { x: 1123, y: 370, width: 190, height: 15, moveAxis: "y", moveRange: 81, moveSpeed: 0.059, movePhase: 3.62 },
  { x: 1744, y: 317, width: 104, height: 17, melt: true, meltDelay: 20 },
  { x: 2052, y: 271, width: 219, height: 26 },
  { x: 2688, y: 191, width: 203, height: 23, conveyor: true, conveyorSpeed: -2.13 },
  { x: 3308, y: 105, width: 48, height: 21, bounce: true, bounceStrength: -20 },
  { x: 3356, y: 105, width: 229, height: 20 },
  { x: 3771, y: 84, width: 119, height: 16, gated: true, gateId: "g81_0" },
  { x: 3926, y: 74, width: 250, height: 20 },
  { x: 4578, y: -36, width: 196, height: 16, melt: true, meltDelay: 20 },
  { x: 5176, y: -142, width: 180, height: 28, melt: true, meltDelay: 20 },
  { x: 5767, y: -237, width: 117, height: 26, melt: true, meltDelay: 20 },
  { x: 6072, y: -315, width: 145, height: 15, melt: true, meltDelay: 20 },
  { x: 6638, y: -385, width: 62, height: 19, conveyor: true, conveyorSpeed: -1.52 },
  { x: 6904, y: -429, width: 117, height: 25, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 7021, y: -429, width: 277, height: 20 },
  { x: 7480, y: -462, width: 103, height: 16, gated: true, gateId: "g81_1" },
  { x: 7636, y: -473, width: 202, height: 20 },
  { x: 8284, y: -485, width: 130, height: 15, moveAxis: "y", moveRange: 144, moveSpeed: 0.06, movePhase: 0.58 },
  { x: 8860, y: -497, width: 216, height: 27 },
  { x: 9303, y: -495, width: 80, height: 17, melt: true, meltDelay: 20 },
  { x: 9610, y: -486, width: 101, height: 30, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 9934, y: -491, width: 92, height: 22, conveyor: true, conveyorSpeed: 1.88 },
  { x: 10190, y: -491, width: 284, height: 26 },
  { x: 10920, y: -510, width: 87, height: 20, moveAxis: "x", moveRange: 139, moveSpeed: 0.054, movePhase: 4.41 },
  { x: 11220, y: -543, width: 96, height: 16 },
  { x: 11753, y: -582, width: 51, height: 17 },
  { x: 12225, y: -651, width: 63, height: 30, melt: true, meltDelay: 20 },
  { x: 12709, y: -719, width: 65, height: 27 },
  { x: 13195, y: -793, width: 225, height: 21, melt: true, meltDelay: 20 },
  { x: 13420, y: -793, width: 271, height: 20 },
  { x: 13883, y: -809, width: 96, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 14174, y: -823, width: 239, height: 20 },
  { x: 14824, y: -911, width: 161, height: 18 },
  { x: 15150, y: -1017, width: 232, height: 25, moveAxis: "x", moveRange: 103, moveSpeed: 0.054, movePhase: 4.87 },
  { x: 15789, y: -1122, width: 126, height: 16, melt: true, meltDelay: 20 },
  { x: 16109, y: -1188, width: 54, height: 26, moveAxis: "x", moveRange: 130, moveSpeed: 0.044, movePhase: 0.09 },
  { x: 16361, y: -1249, width: 140, height: 22 },
  { x: 16928, y: -1306, width: 206, height: 20, melt: true, meltDelay: 20 },
  { x: 17134, y: -1306, width: 275, height: 20 },
  { x: 17602, y: -1334, width: 105, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 17888, y: -1349, width: 256, height: 20 },
  { x: 18361, y: -1365, width: 195, height: 23 },
  { x: 19002, y: -1381, width: 51, height: 26 },
  { x: 19503, y: -1391, width: 167, height: 29, bounce: true, bounceStrength: -16 },
  { x: 19897, y: -1381, width: 193, height: 14, moveAxis: "x", moveRange: 121, moveSpeed: 0.067, movePhase: 0.83 },
  { x: 20313, y: -1383, width: 137, height: 17, conveyor: true, conveyorSpeed: -1.97 },
  { x: 20677, y: -1373, width: 179, height: 18, bounce: true, bounceStrength: -17 },
  { x: 21025, y: -1376, width: 430, height: 20 },
];

window.deadlyPlatforms = [
  { x: 8244, y: -524, width: 101, height: 19, moveAxis: "x", moveRange: 144, moveSpeed: 0.069, movePhase: 2.75 },
  { x: 10967, y: -481, width: 72, height: 14, moveAxis: "y", moveRange: 156, moveSpeed: 0.059, movePhase: 2.75 },
  { x: 15087, y: -963, width: 208, height: 15, moveAxis: "y", moveRange: 107, moveSpeed: 0.059, movePhase: 5.49 },
  { x: 2296, y: 280, width: 145, height: 20 },
  { x: 9098, y: -489, width: 126, height: 20 },
  { x: 11349, y: -542, width: 85, height: 20 },
  { x: 11842, y: -581, width: 60, height: 20 },
  { x: 12805, y: -717, width: 60, height: 20 },
  { x: 15010, y: -915, width: 105, height: 20 },
  { x: 16525, y: -1241, width: 81, height: 20 },
  { x: 18584, y: -1366, width: 146, height: 20 },
  { x: 19079, y: -1389, width: 60, height: 20 },
];

window.spikes = [
  { x: 8914, y: -497, size: 16 },
  { x: 8930, y: -497, size: 24 },
  { x: 8954, y: -497, size: 16 },
  { x: 11234, y: -543, size: 27 },
  { x: 14875, y: -911, size: 22 },
  { x: 16389, y: -1249, size: 17 },
  { x: 16406, y: -1249, size: 56 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 3986, y: 44, reached: false },
  { x: 7696, y: -503, reached: false },
  { x: 10332, y: -521, reached: false },
  { x: 14234, y: -853, reached: false },
  { x: 17948, y: -1379, reached: false },
  { x: 21240, y: -1406, reached: false }, // Final
];

window.lasers = [
  { x: 2348, y: 223, length: 200, width: 4, baseAngle: 1.4, sweepAngle: 1.05, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 4857, y: -102, length: 158, width: 4, baseAngle: 1.96, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 6796, y: -454, length: 113, width: 4, baseAngle: 0.9, sweepAngle: 1.05, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 7091, y: -473, length: 179, width: 4, baseAngle: 3.7, sweepAngle: 0.99, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 8477, y: -581, length: 124, width: 4, baseAngle: 2.96, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 9170, y: -558, length: 232, width: 4, baseAngle: 0.63, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 10090, y: -532, length: 199, width: 4, baseAngle: 2.52, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 11085, y: -591, length: 160, width: 4, baseAngle: 3.4, sweepAngle: 0.82, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 12839, y: -793, length: 102, width: 4, baseAngle: 0.29, sweepAngle: 1.02, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 15069, y: -1008, length: 127, width: 4, baseAngle: 5.93, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 15975, y: -1190, length: 214, width: 4, baseAngle: 5.07, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 16241, y: -1280, length: 174, width: 4, baseAngle: 1.35, sweepAngle: 0.89, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 17213, y: -1353, length: 153, width: 4, baseAngle: 4.66, sweepAngle: 0.92, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 18643, y: -1426, length: 150, width: 4, baseAngle: 2.06, sweepAngle: 0.52, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 19134, y: -1440, length: 198, width: 4, baseAngle: 1.1, sweepAngle: 1.05, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 19741, y: -1486, length: 253, width: 4, baseAngle: 3.68, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 20951, y: -1450, length: 195, width: 4, baseAngle: 2.66, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
];

window.fallers = [
  { x: 1936, y: 183, size: 30, triggerX: 1777 },
  { x: 5966, y: -352, size: 28, triggerX: 5831 },
  { x: 11884, y: -721, size: 25, triggerX: 11712 },
  { x: 12372, y: -785, size: 33, triggerX: 12196 },
  { x: 13497, y: -917, size: 26, triggerX: 13361 },
  { x: 16585, y: -1362, size: 47, triggerX: 16433 },
  { x: 20513, y: -1517, size: 44, triggerX: 20337 },
];

window.switches = [
  { x: 3563, y: 75, radius: 26, gateId: "g81_0" },
  { x: 7276, y: -459, radius: 26, gateId: "g81_1" },
];
