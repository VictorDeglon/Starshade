// Level 94 Data — "Starfall Spire"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 94";
window.levelAccent = "#4de8d8";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 737, y: 338, width: 197, height: 26, bounce: true, bounceStrength: -16 },
  { x: 1361, y: 272, width: 135, height: 19, melt: true, meltDelay: 20 },
  { x: 1690, y: 208, width: 132, height: 24, conveyor: true, conveyorSpeed: -1.06 },
  { x: 2243, y: 132, width: 220, height: 23, melt: true, meltDelay: 20 },
  { x: 2880, y: 46, width: 210, height: 26 },
  { x: 3090, y: 46, width: 247, height: 20 },
  { x: 3527, y: 30, width: 106, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 3823, y: 14, width: 255, height: 20 },
  { x: 4256, y: -73, width: 147, height: 21, moveAxis: "x", moveRange: 121, moveSpeed: 0.071, movePhase: 4.96 },
  { x: 4810, y: -170, width: 82, height: 28, bounce: true, bounceStrength: -19 },
  { x: 5313, y: -244, width: 174, height: 17, melt: true, meltDelay: 20 },
  { x: 5898, y: -333, width: 68, height: 29 },
  { x: 6154, y: -406, width: 202, height: 15, bounce: true, bounceStrength: -18 },
  { x: 6787, y: -456, width: 103, height: 28 },
  { x: 6890, y: -456, width: 289, height: 20 },
  { x: 7378, y: -466, width: 90, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 7661, y: -488, width: 220, height: 20 },
  { x: 8321, y: -517, width: 214, height: 29, moveAxis: "x", moveRange: 136, moveSpeed: 0.058, movePhase: 4.96 },
  { x: 8981, y: -532, width: 141, height: 20, melt: true, meltDelay: 20 },
  { x: 9572, y: -542, width: 151, height: 30, moveAxis: "x", moveRange: 127, moveSpeed: 0.061, movePhase: 4.66 },
  { x: 9950, y: -535, width: 156, height: 23, melt: true, meltDelay: 20 },
  { x: 10556, y: -543, width: 211, height: 15 },
  { x: 10767, y: -543, width: 256, height: 20 },
  { x: 11214, y: -570, width: 102, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 11502, y: -585, width: 250, height: 20 },
  { x: 12198, y: -601, width: 62, height: 22, melt: true, meltDelay: 20 },
  { x: 12697, y: -640, width: 75, height: 15 },
  { x: 13203, y: -686, width: 130, height: 24 },
  { x: 13754, y: -755, width: 88, height: 27, moveAxis: "x", moveRange: 135, moveSpeed: 0.066, movePhase: 1.01 },
  { x: 14253, y: -850, width: 195, height: 27, moveAxis: "x", moveRange: 123, moveSpeed: 0.052, movePhase: 2.48 },
  { x: 14448, y: -850, width: 235, height: 20 },
  { x: 14833, y: -886, width: 114, height: 16, gated: true, gateId: "g94_0" },
  { x: 15016, y: -896, width: 207, height: 20 },
  { x: 15634, y: -983, width: 179, height: 25 },
  { x: 15972, y: -1096, width: 45, height: 23, moveAxis: "x", moveRange: 130, moveSpeed: 0.073, movePhase: 6.2 },
  { x: 16424, y: -1201, width: 225, height: 25, melt: true, meltDelay: 20 },
  { x: 17070, y: -1276, width: 162, height: 27, melt: true, meltDelay: 20 },
  { x: 17643, y: -1365, width: 132, height: 15 },
  { x: 18196, y: -1440, width: 62, height: 26, moveAxis: "y", moveRange: 138, moveSpeed: 0.056, movePhase: 6.22 },
  { x: 18456, y: -1501, width: 68, height: 21, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 18524, y: -1501, width: 248, height: 20 },
  { x: 18947, y: -1534, width: 105, height: 16, gated: true, gateId: "g94_1" },
  { x: 19113, y: -1529, width: 256, height: 20 },
  { x: 19809, y: -1554, width: 62, height: 15 },
  { x: 20098, y: -1550, width: 135, height: 15, conveyor: true, conveyorSpeed: 2.1 },
  { x: 20683, y: -1551, width: 84, height: 28, moveAxis: "x", moveRange: 136, moveSpeed: 0.053, movePhase: 3.61 },
  { x: 20994, y: -1543, width: 190, height: 18, bounce: true, bounceStrength: -18 },
  { x: 21411, y: -1538, width: 160, height: 21 },
  { x: 22021, y: -1544, width: 49, height: 19, moveAxis: "y", moveRange: 95, moveSpeed: 0.05, movePhase: 5.67 },
  { x: 22234, y: -1544, width: 387, height: 17 },
  { x: 22820, y: -1555, width: 398, height: 20 },
];

window.deadlyPlatforms = [
  { x: 4320, y: -36, width: 107, height: 22, moveAxis: "y", moveRange: 131, moveSpeed: 0.065, movePhase: 2.13 },
  { x: 8369, y: -489, width: 152, height: 17, moveAxis: "y", moveRange: 106, moveSpeed: 0.059, movePhase: 5.68 },
  { x: 9529, y: -494, width: 129, height: 16, moveAxis: "y", moveRange: 107, moveSpeed: 0.076, movePhase: 0.19 },
  { x: 13796, y: -704, width: 61, height: 20, moveAxis: "y", moveRange: 126, moveSpeed: 0.075, movePhase: 2.75 },
  { x: 14211, y: -891, width: 120, height: 22, moveAxis: "y", moveRange: 115, moveSpeed: 0.06, movePhase: 1 },
  { x: 15928, y: -1129, width: 50, height: 15, moveAxis: "y", moveRange: 109, moveSpeed: 0.069, movePhase: 1.83 },
  { x: 18146, y: -1392, width: 52, height: 19, moveAxis: "x", moveRange: 140, moveSpeed: 0.055, movePhase: 0.83 },
  { x: 20634, y: -1582, width: 73, height: 18, moveAxis: "y", moveRange: 142, moveSpeed: 0.046, movePhase: 4.66 },
  { x: 21948, y: -1582, width: 50, height: 18, moveAxis: "x", moveRange: 100, moveSpeed: 0.058, movePhase: 5.58 },
  { x: 6000, y: -340, width: 60, height: 20 },
  { x: 6919, y: -455, width: 60, height: 20 },
  { x: 10795, y: -546, width: 142, height: 20 },
  { x: 12805, y: -633, width: 60, height: 20 },
  { x: 15837, y: -991, width: 145, height: 20 },
  { x: 19909, y: -1555, width: 60, height: 20 },
  { x: 21607, y: -1543, width: 121, height: 20 },
];

window.spikes = [
  { x: 2940, y: 46, size: 38 },
  { x: 5910, y: -333, size: 12 },
  { x: 5922, y: -333, size: 28 },
  { x: 6807, y: -456, size: 47 },
  { x: 6854, y: -456, size: 30 },
  { x: 10596, y: -543, size: 15 },
  { x: 10611, y: -543, size: 37 },
  { x: 10648, y: -543, size: 39 },
  { x: 10687, y: -543, size: 26 },
  { x: 12721, y: -640, size: 29 },
  { x: 15692, y: -983, size: 21 },
  { x: 15713, y: -983, size: 23 },
  { x: 21443, y: -1538, size: 49 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 3883, y: -16, reached: false },
  { x: 7721, y: -518, reached: false },
  { x: 11562, y: -615, reached: false },
  { x: 15076, y: -926, reached: false },
  { x: 19173, y: -1559, reached: false },
  { x: 22428, y: -1574, reached: false },
  { x: 23019, y: -1585, reached: false }, // Final
];

window.forceZones = [
  { x: 22244, y: -1634, width: 367, height: 90, axis: "x", force: 0.139 },
];

window.lasers = [
  { x: 1025, y: 270, length: 123, width: 4, baseAngle: 0.31, sweepAngle: 0.75, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 1898, y: 135, length: 249, width: 4, baseAngle: 4, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 2544, y: 85, length: 128, width: 4, baseAngle: 6.03, sweepAngle: 0.77, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 6455, y: -463, length: 223, width: 4, baseAngle: 1.85, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 6977, y: -533, length: 223, width: 4, baseAngle: 4.98, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 8618, y: -564, length: 176, width: 4, baseAngle: 3.89, sweepAngle: 0.93, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 12348, y: -694, length: 113, width: 4, baseAngle: 2.02, sweepAngle: 1.08, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 13902, y: -796, length: 240, width: 4, baseAngle: 3.28, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 14525, y: -920, length: 192, width: 4, baseAngle: 5.71, sweepAngle: 0.59, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 15886, y: -1023, length: 136, width: 4, baseAngle: 2.43, sweepAngle: 0.61, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 16098, y: -1138, length: 260, width: 4, baseAngle: 0.93, sweepAngle: 0.94, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 18342, y: -1520, length: 214, width: 4, baseAngle: 4.52, sweepAngle: 0.57, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 18621, y: -1570, length: 125, width: 4, baseAngle: 2.04, sweepAngle: 1.02, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 20301, y: -1596, length: 125, width: 4, baseAngle: 4.91, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 20844, y: -1608, length: 237, width: 4, baseAngle: 5.37, sweepAngle: 0.88, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 21259, y: -1586, length: 137, width: 4, baseAngle: 4.15, sweepAngle: 0.79, period: 136, blinkPeriod: 0, onRatio: 0.5 },
];

window.fallers = [
  { x: 5585, y: -351, size: 49, triggerX: 5415 },
  { x: 6047, y: -426, size: 53, triggerX: 5857 },
  { x: 9792, y: -681, size: 22, triggerX: 9584 },
  { x: 13399, y: -812, size: 44, triggerX: 13190 },
  { x: 17321, y: -1386, size: 48, triggerX: 17131 },
];

window.switches = [
  { x: 14661, y: -880, radius: 26, gateId: "g94_0" },
  { x: 18750, y: -1531, radius: 26, gateId: "g94_1" },
];
