// Level 92 Data — "Nightglass Spire"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 92";
window.levelAccent = "#4de8d8";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 523, y: 370, width: 139, height: 23, melt: true, meltDelay: 20 },
  { x: 1112, y: 365, width: 170, height: 25, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 1509, y: 376, width: 103, height: 25, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 2062, y: 375, width: 194, height: 20, melt: true, meltDelay: 20 },
  { x: 2706, y: 370, width: 128, height: 28, moveAxis: "x", moveRange: 135, moveSpeed: 0.053, movePhase: 2.33 },
  { x: 2834, y: 370, width: 295, height: 20 },
  { x: 3334, y: 343, width: 98, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 3621, y: 330, width: 263, height: 20 },
  { x: 4097, y: 300, width: 131, height: 24, bounce: true, bounceStrength: -18 },
  { x: 4665, y: 256, width: 46, height: 17, bounce: true, bounceStrength: -16 },
  { x: 4899, y: 184, width: 146, height: 23, conveyor: true, conveyorSpeed: -1.56 },
  { x: 5462, y: 103, width: 110, height: 16 },
  { x: 5979, y: 5, width: 169, height: 21, moveAxis: "y", moveRange: 153, moveSpeed: 0.076, movePhase: 2.2 },
  { x: 6559, y: -88, width: 60, height: 19 },
  { x: 6619, y: -88, width: 258, height: 20 },
  { x: 7074, y: -99, width: 101, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 7360, y: -111, width: 262, height: 20 },
  { x: 8033, y: -202, width: 75, height: 22, moveAxis: "x", moveRange: 148, moveSpeed: 0.067, movePhase: 5.08 },
  { x: 8525, y: -283, width: 83, height: 27, melt: true, meltDelay: 20 },
  { x: 9029, y: -351, width: 198, height: 29 },
  { x: 9648, y: -423, width: 176, height: 24 },
  { x: 10251, y: -482, width: 176, height: 25 },
  { x: 10640, y: -513, width: 186, height: 15, moveAxis: "x", moveRange: 129, moveSpeed: 0.065, movePhase: 3.81 },
  { x: 10826, y: -513, width: 299, height: 20 },
  { x: 11320, y: -536, width: 96, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 11617, y: -565, width: 277, height: 20 },
  { x: 12117, y: -569, width: 112, height: 18, melt: true, meltDelay: 20 },
  { x: 12679, y: -576, width: 192, height: 19, bounce: true, bounceStrength: -20 },
  { x: 13321, y: -584, width: 102, height: 26, melt: true, meltDelay: 20 },
  { x: 13656, y: -566, width: 70, height: 26, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 13959, y: -554, width: 188, height: 23 },
  { x: 14147, y: -554, width: 242, height: 20 },
  { x: 14581, y: -569, width: 99, height: 16, gated: true, gateId: "g92_0" },
  { x: 14734, y: -571, width: 239, height: 20 },
  { x: 15413, y: -600, width: 92, height: 23, melt: true, meltDelay: 20 },
  { x: 15709, y: -647, width: 140, height: 20, conveyor: true, conveyorSpeed: -1.71 },
  { x: 16053, y: -696, width: 153, height: 23 },
  { x: 16390, y: -779, width: 74, height: 24, conveyor: true, conveyorSpeed: 1.07 },
  { x: 16881, y: -857, width: 74, height: 29, bounce: true, bounceStrength: -17 },
  { x: 17366, y: -952, width: 187, height: 17 },
  { x: 17712, y: -1066, width: 79, height: 16, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 17955, y: -1066, width: 364, height: 29 },
  { x: 18726, y: -1166, width: 65, height: 20 },
  { x: 19202, y: -1260, width: 178, height: 16 },
  { x: 19797, y: -1343, width: 171, height: 14 },
  { x: 20162, y: -1405, width: 229, height: 24, moveAxis: "x", moveRange: 114, moveSpeed: 0.057, movePhase: 4.37 },
  { x: 20831, y: -1431, width: 190, height: 16, melt: true, meltDelay: 20 },
  { x: 21461, y: -1461, width: 228, height: 24, bounce: true, bounceStrength: -18 },
  { x: 21860, y: -1460, width: 400, height: 20 },
];

window.deadlyPlatforms = [
  { x: 2619, y: 395, width: 94, height: 23, moveAxis: "y", moveRange: 162, moveSpeed: 0.05, movePhase: 3.26 },
  { x: 5897, y: -28, width: 133, height: 15, moveAxis: "x", moveRange: 130, moveSpeed: 0.094, movePhase: 5.79 },
  { x: 7948, y: -235, width: 67, height: 16, moveAxis: "y", moveRange: 115, moveSpeed: 0.082, movePhase: 4.68 },
  { x: 10571, y: -483, width: 135, height: 24, moveAxis: "y", moveRange: 116, moveSpeed: 0.061, movePhase: 1.02 },
  { x: 20206, y: -1347, width: 153, height: 14, moveAxis: "y", moveRange: 116, moveSpeed: 0.061, movePhase: 5.25 },
  { x: 5597, y: 109, width: 63, height: 20 },
  { x: 6649, y: -90, width: 60, height: 20 },
  { x: 9262, y: -354, width: 112, height: 20 },
  { x: 9853, y: -422, width: 119, height: 20 },
  { x: 10447, y: -474, width: 118, height: 20 },
  { x: 14185, y: -545, width: 108, height: 20 },
  { x: 16238, y: -704, width: 135, height: 20 },
  { x: 17585, y: -957, width: 128, height: 20 },
  { x: 18812, y: -1162, width: 60, height: 20 },
  { x: 19404, y: -1257, width: 92, height: 20 },
  { x: 19988, y: -1346, width: 141, height: 20 },
];

window.spikes = [
  { x: 5485, y: 103, size: 56 },
  { x: 6567, y: -88, size: 28 },
  { x: 9068, y: -351, size: 50 },
  { x: 9693, y: -423, size: 13 },
  { x: 9706, y: -423, size: 13 },
  { x: 9719, y: -423, size: 30 },
  { x: 10280, y: -482, size: 60 },
  { x: 10340, y: -482, size: 33 },
  { x: 14008, y: -554, size: 49 },
  { x: 14057, y: -554, size: 22 },
  { x: 14079, y: -554, size: 19 },
  { x: 16084, y: -696, size: 24 },
  { x: 16108, y: -696, size: 21 },
  { x: 16129, y: -696, size: 38 },
  { x: 16167, y: -696, size: 21 },
  { x: 17425, y: -952, size: 29 },
  { x: 18746, y: -1166, size: 26 },
  { x: 19831, y: -1343, size: 58 },
  { x: 19889, y: -1343, size: 25 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 3681, y: 300, reached: false },
  { x: 7420, y: -141, reached: false },
  { x: 11677, y: -595, reached: false },
  { x: 14794, y: -601, reached: false },
  { x: 18137, y: -1096, reached: false },
  { x: 22060, y: -1490, reached: false }, // Final
];

window.lasers = [
  { x: 1363, y: 279, length: 227, width: 4, baseAngle: 4.8, sweepAngle: 0.75, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 4808, y: 216, length: 104, width: 4, baseAngle: 5.92, sweepAngle: 0.61, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 5129, y: 134, length: 208, width: 4, baseAngle: 2.6, sweepAngle: 0.48, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 8701, y: -357, length: 186, width: 4, baseAngle: 0.79, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 9910, y: -502, length: 244, width: 4, baseAngle: 4.98, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 10505, y: -526, length: 262, width: 4, baseAngle: 2.99, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 12304, y: -626, length: 211, width: 4, baseAngle: 1.46, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 13512, y: -634, length: 217, width: 4, baseAngle: 0.47, sweepAngle: 0.62, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 13810, y: -634, length: 139, width: 4, baseAngle: 1.98, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 14223, y: -647, length: 194, width: 4, baseAngle: 5.35, sweepAngle: 0.64, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 16281, y: -744, length: 130, width: 4, baseAngle: 2.64, sweepAngle: 1.07, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 16562, y: -854, length: 104, width: 4, baseAngle: 5.92, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 17038, y: -924, length: 150, width: 4, baseAngle: 1.4, sweepAngle: 0.49, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 17648, y: -1038, length: 141, width: 4, baseAngle: 2.36, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 18861, y: -1210, length: 234, width: 4, baseAngle: 4.38, sweepAngle: 0.91, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 19440, y: -1353, length: 189, width: 4, baseAngle: 3.96, sweepAngle: 0.52, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 20475, y: -1484, length: 127, width: 4, baseAngle: 3.05, sweepAngle: 0.62, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 21109, y: -1480, length: 167, width: 4, baseAngle: 0.86, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 21785, y: -1520, length: 251, width: 4, baseAngle: 1.5, sweepAngle: 1.11, period: 136, blinkPeriod: 0, onRatio: 0.5 },
];

window.fallers = [
  { x: 2324, y: 277, size: 27, triggerX: 2185 },
  { x: 2897, y: 252, size: 49, triggerX: 2735 },
  { x: 5669, y: -17, size: 23, triggerX: 5481 },
  { x: 6239, y: -91, size: 31, triggerX: 6069 },
  { x: 15571, y: -698, size: 28, triggerX: 15417 },
  { x: 17857, y: -1169, size: 29, triggerX: 17669 },
];

window.switches = [
  { x: 14367, y: -584, radius: 26, gateId: "g92_0" },
];
