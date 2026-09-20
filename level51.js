// Level 51 Data — "The Fractured Choir"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 51";
window.levelAccent = "#50e6ff";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 498, y: 324, width: 112, height: 18, melt: true, meltDelay: 20 },
  { x: 794, y: 242, width: 197, height: 25, conveyor: true, conveyorSpeed: -1.44 },
  { x: 1166, y: 147, width: 165, height: 27 },
  { x: 1515, y: 65, width: 186, height: 27, moveAxis: "x", moveRange: 94, moveSpeed: 0.053, movePhase: 5.68 },
  { x: 1865, y: 65, width: 342, height: 14 },
  { x: 2405, y: 6, width: 228, height: 28 },
  { x: 3073, y: -28, width: 89, height: 22, conveyor: true, conveyorSpeed: 1.16 },
  { x: 3608, y: -49, width: 53, height: 25, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 3894, y: -25, width: 84, height: 29, melt: true, meltDelay: 20 },
  { x: 4142, y: -25, width: 376, height: 22 },
  { x: 4764, y: 28, width: 222, height: 20, melt: true, meltDelay: 20 },
  { x: 5238, y: 110, width: 196, height: 23, melt: true, meltDelay: 20 },
  { x: 5686, y: 195, width: 116, height: 17, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 6054, y: 280, width: 119, height: 30, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 6173, y: 280, width: 260, height: 20 },
  { x: 6635, y: 251, width: 93, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.3789795918367347 },
  { x: 6922, y: 227, width: 270, height: 20 },
  { x: 7444, y: 299, width: 210, height: 17 },
  { x: 7891, y: 335, width: 148, height: 29, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 8272, y: 359, width: 130, height: 16, bounce: true, bounceStrength: -20 },
  { x: 8402, y: 359, width: 244, height: 20 },
  { x: 8808, y: 330, width: 101, height: 16, gated: true, gateId: "g51_0" },
  { x: 8979, y: 312, width: 226, height: 20 },
  { x: 9642, y: 273, width: 147, height: 29 },
  { x: 9993, y: 226, width: 108, height: 14, conveyor: true, conveyorSpeed: -2.11 },
  { x: 10289, y: 152, width: 186, height: 22, bounce: true, bounceStrength: -18 },
  { x: 10659, y: 72, width: 164, height: 16, melt: true, meltDelay: 20 },
  { x: 10987, y: 72, width: 356, height: 14 },
  { x: 11518, y: -24, width: 172, height: 20 },
  { x: 11874, y: -103, width: 99, height: 29 },
  { x: 12400, y: -166, width: 137, height: 20, melt: true, meltDelay: 20 },
  { x: 12701, y: -166, width: 295, height: 20 },
  { x: 13446, y: -167, width: 181, height: 23, conveyor: true, conveyorSpeed: -2.18 },
  { x: 13796, y: -153, width: 423, height: 20 },
];

window.deadlyPlatforms = [
  { x: 1351, y: 148, width: 112, height: 20 },
  { x: 2653, y: 6, width: 158, height: 20 },
  { x: 7684, y: 302, width: 121, height: 20 },
  { x: 9810, y: 280, width: 75, height: 20 },
  { x: 11715, y: -20, width: 91, height: 20 },
];

window.spikes = [
  { x: 1206, y: 147, size: 21 },
  { x: 1227, y: 147, size: 17 },
  { x: 2456, y: 6, size: 15 },
  { x: 2471, y: 6, size: 54 },
  { x: 2525, y: 6, size: 44 },
  { x: 2569, y: 6, size: 41 },
  { x: 7511, y: 299, size: 30 },
  { x: 7541, y: 299, size: 23 },
  { x: 9675, y: 273, size: 46 },
  { x: 11553, y: -24, size: 21 },
  { x: 11574, y: -24, size: 31 },
  { x: 11605, y: -24, size: 22 },
  { x: 11627, y: -24, size: 35 },
  { x: 11893, y: -103, size: 29 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2036, y: 35, reached: false },
  { x: 4330, y: -55, reached: false },
  { x: 6982, y: 197, reached: false },
  { x: 9039, y: 282, reached: false },
  { x: 11165, y: 42, reached: false },
  { x: 12849, y: -196, reached: false },
  { x: 14008, y: -183, reached: false }, // Final
];

window.forceZones = [
  { x: 1875, y: -25, width: 322, height: 90, axis: "x", force: -0.163 },
  { x: 4152, y: -115, width: 356, height: 90, axis: "x", force: -0.198 },
];

window.lasers = [
  { x: 671, y: 270, length: 226, width: 4, baseAngle: 1.35, sweepAngle: 0.98, period: 154, blinkPeriod: 0, onRatio: 0.5 },
  { x: 1424, y: 82, length: 196, width: 4, baseAngle: 2.9, sweepAngle: 0.68, period: 154, blinkPeriod: 0, onRatio: 0.5 },
  { x: 3757, y: -102, length: 227, width: 4, baseAngle: 0.85, sweepAngle: 0, period: 154, blinkPeriod: 105, onRatio: 0.5 },
  { x: 5506, y: 28, length: 187, width: 4, baseAngle: 2.98, sweepAngle: 0, period: 154, blinkPeriod: 105, onRatio: 0.5 },
  { x: 8133, y: 281, length: 191, width: 4, baseAngle: 4.99, sweepAngle: 0, period: 154, blinkPeriod: 105, onRatio: 0.5 },
  { x: 10194, y: 128, length: 130, width: 4, baseAngle: 1.11, sweepAngle: 0.86, period: 154, blinkPeriod: 0, onRatio: 0.5 },
  { x: 10561, y: 90, length: 118, width: 4, baseAngle: 3.53, sweepAngle: 0, period: 154, blinkPeriod: 105, onRatio: 0.5 },
  { x: 11767, y: -74, length: 244, width: 4, baseAngle: 6.05, sweepAngle: 0, period: 154, blinkPeriod: 105, onRatio: 0.5 },
  { x: 12632, y: -222, length: 109, width: 4, baseAngle: 3.77, sweepAngle: 0, period: 154, blinkPeriod: 105, onRatio: 0.5 },
  { x: 13725, y: -251, length: 129, width: 4, baseAngle: 0.26, sweepAngle: 0.75, period: 154, blinkPeriod: 0, onRatio: 0.5 },
];

window.fallers = [
  { x: 10895, y: -54, size: 28, triggerX: 10745 },
  { x: 12056, y: -202, size: 38, triggerX: 11890 },
];

window.switches = [
  { x: 8624, y: 329, radius: 26, gateId: "g51_0" },
];
