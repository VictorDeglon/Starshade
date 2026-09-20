// Level 68 Data — "The Whispering Vault"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 68";
window.levelAccent = "#9dff4d";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 552, y: 486, width: 52, height: 17, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 856, y: 567, width: 65, height: 21, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 1167, y: 626, width: 77, height: 17, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 1481, y: 658, width: 181, height: 21, moveAxis: "y", moveRange: 132, moveSpeed: 0.061, movePhase: 3.78 },
  { x: 1826, y: 658, width: 284, height: 28 },
  { x: 2550, y: 627, width: 92, height: 30, conveyor: true, conveyorSpeed: 1.6 },
  { x: 2830, y: 549, width: 76, height: 18, melt: true, meltDelay: 20 },
  { x: 3084, y: 457, width: 110, height: 26, melt: true, meltDelay: 20 },
  { x: 3592, y: 342, width: 91, height: 15, conveyor: true, conveyorSpeed: 1.49 },
  { x: 3683, y: 342, width: 268, height: 20 },
  { x: 4119, y: 313, width: 96, height: 16, gated: true, gateId: "g68_0" },
  { x: 4292, y: 312, width: 212, height: 20 },
  { x: 4906, y: 206, width: 122, height: 30, melt: true, meltDelay: 20 },
  { x: 5445, y: 126, width: 150, height: 21, moveAxis: "x", moveRange: 112, moveSpeed: 0.057, movePhase: 5.24 },
  { x: 5793, y: 72, width: 234, height: 18 },
  { x: 6191, y: 72, width: 389, height: 14 },
  { x: 6813, y: 84, width: 69, height: 26, bounce: true, bounceStrength: -16 },
  { x: 7128, y: 135, width: 65, height: 24, melt: true, meltDelay: 20 },
  { x: 7445, y: 204, width: 62, height: 30, bounce: true, bounceStrength: -16 },
  { x: 7671, y: 204, width: 231, height: 23 },
  { x: 8154, y: 316, width: 109, height: 14, conveyor: true, conveyorSpeed: -1.78 },
  { x: 8515, y: 420, width: 226, height: 23, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 8993, y: 504, width: 141, height: 23, moveAxis: "y", moveRange: 76, moveSpeed: 0.043, movePhase: 2.58 },
  { x: 9386, y: 586, width: 116, height: 24, conveyor: true, conveyorSpeed: 1.49 },
  { x: 9502, y: 586, width: 291, height: 20 },
  { x: 9999, y: 558, width: 108, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 10292, y: 529, width: 229, height: 20 },
  { x: 10754, y: 552, width: 187, height: 24, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 11387, y: 538, width: 135, height: 29 },
  { x: 11726, y: 491, width: 216, height: 28, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 11942, y: 491, width: 261, height: 20 },
  { x: 12395, y: 470, width: 99, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 12690, y: 441, width: 264, height: 20 },
  { x: 13365, y: 354, width: 77, height: 29, moveAxis: "x", moveRange: 102, moveSpeed: 0.052, movePhase: 1.13 },
  { x: 13844, y: 240, width: 224, height: 18 },
  { x: 14227, y: 126, width: 116, height: 20 },
  { x: 14750, y: 29, width: 116, height: 20, melt: true, meltDelay: 20 },
  { x: 15068, y: 41, width: 390, height: 20 },
];

window.deadlyPlatforms = [
  { x: 1433, y: 609, width: 134, height: 17, moveAxis: "x", moveRange: 114, moveSpeed: 0.065, movePhase: 4.69 },
  { x: 5522, y: 92, width: 115, height: 20, moveAxis: "y", moveRange: 86, moveSpeed: 0.071, movePhase: 2.88 },
  { x: 9046, y: 474, width: 98, height: 15, moveAxis: "x", moveRange: 92, moveSpeed: 0.041, movePhase: 6.27 },
  { x: 13299, y: 405, width: 69, height: 16, moveAxis: "y", moveRange: 112, moveSpeed: 0.05, movePhase: 4.15 },
  { x: 6061, y: 67, width: 196, height: 20 },
  { x: 11552, y: 546, width: 76, height: 20 },
  { x: 14097, y: 242, width: 154, height: 20 },
  { x: 14368, y: 125, width: 75, height: 20 },
];

window.spikes = [
  { x: 5835, y: 72, size: 37 },
  { x: 11414, y: 538, size: 26 },
  { x: 11440, y: 538, size: 32 },
  { x: 14259, y: 126, size: 27 },
  { x: 14286, y: 126, size: 34 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1968, y: 628, reached: false },
  { x: 4352, y: 282, reached: false },
  { x: 6386, y: 42, reached: false },
  { x: 7787, y: 174, reached: false },
  { x: 10352, y: 499, reached: false },
  { x: 12750, y: 411, reached: false },
  { x: 15263, y: 11, reached: false }, // Final
];

window.forceZones = [
  { x: 1836, y: 568, width: 264, height: 90, axis: "x", force: 0.131 },
  { x: 7681, y: 114, width: 211, height: 90, axis: "x", force: -0.169 },
];

window.lasers = [
  { x: 991, y: 478, length: 227, width: 4, baseAngle: 5.93, sweepAngle: 0.86, period: 143, blinkPeriod: 0, onRatio: 0.5 },
  { x: 1342, y: 548, length: 254, width: 4, baseAngle: 0.85, sweepAngle: 1.13, period: 143, blinkPeriod: 0, onRatio: 0.5 },
  { x: 3778, y: 267, length: 133, width: 4, baseAngle: 1.72, sweepAngle: 0, period: 143, blinkPeriod: 96, onRatio: 0.5 },
  { x: 7272, y: 43, length: 212, width: 4, baseAngle: 1.9, sweepAngle: 1.12, period: 143, blinkPeriod: 0, onRatio: 0.5 },
  { x: 8833, y: 336, length: 177, width: 4, baseAngle: 5.52, sweepAngle: 0.53, period: 143, blinkPeriod: 0, onRatio: 0.5 },
  { x: 9566, y: 498, length: 209, width: 4, baseAngle: 5.5, sweepAngle: 0, period: 143, blinkPeriod: 96, onRatio: 0.5 },
  { x: 13516, y: 301, length: 225, width: 4, baseAngle: 2.7, sweepAngle: 0, period: 143, blinkPeriod: 96, onRatio: 0.5 },
  { x: 14426, y: 29, length: 144, width: 4, baseAngle: 6.14, sweepAngle: 0.58, period: 143, blinkPeriod: 0, onRatio: 0.5 },
  { x: 14942, y: -14, length: 141, width: 4, baseAngle: 3.7, sweepAngle: 1.03, period: 143, blinkPeriod: 0, onRatio: 0.5 },
];

window.fallers = [
  { x: 1738, y: 531, size: 28, triggerX: 1549 },
  { x: 2984, y: 419, size: 23, triggerX: 2775 },
  { x: 6949, y: -53, size: 51, triggerX: 6759 },
  { x: 8333, y: 200, size: 31, triggerX: 8183 },
];

window.switches = [
  { x: 3929, y: 312, radius: 26, gateId: "g68_0" },
];
