// Level 56 Data — "Starwake Perimeter"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 56";
window.levelAccent = "#50e6ff";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 543, y: 420, width: 166, height: 25, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 946, y: 455, width: 116, height: 28, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 1289, y: 461, width: 78, height: 20, moveAxis: "x", moveRange: 106, moveSpeed: 0.041, movePhase: 5.45 },
  { x: 1531, y: 461, width: 281, height: 21 },
  { x: 2000, y: 387, width: 122, height: 17, melt: true, meltDelay: 20 },
  { x: 2297, y: 294, width: 222, height: 28, melt: true, meltDelay: 20 },
  { x: 2936, y: 213, width: 81, height: 19, moveAxis: "x", moveRange: 112, moveSpeed: 0.047, movePhase: 3.1 },
  { x: 3192, y: 117, width: 183, height: 20, conveyor: true, conveyorSpeed: -2.17 },
  { x: 3375, y: 117, width: 273, height: 20 },
  { x: 3840, y: 107, width: 108, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.3687755102040816 },
  { x: 4122, y: 90, width: 250, height: 20 },
  { x: 4556, y: 8, width: 108, height: 24, melt: true, meltDelay: 20 },
  { x: 4862, y: -50, width: 45, height: 30 },
  { x: 5115, y: -87, width: 96, height: 18, melt: true, meltDelay: 20 },
  { x: 5438, y: -79, width: 46, height: 29, melt: true, meltDelay: 20 },
  { x: 5648, y: -79, width: 330, height: 30 },
  { x: 6230, y: -10, width: 192, height: 18, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 6674, y: 87, width: 218, height: 26, moveAxis: "y", moveRange: 95, moveSpeed: 0.046, movePhase: 4.28 },
  { x: 7144, y: 188, width: 226, height: 23, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 7622, y: 292, width: 74, height: 27, melt: true, meltDelay: 20 },
  { x: 7860, y: 292, width: 285, height: 25 },
  { x: 8397, y: 359, width: 65, height: 29, melt: true, meltDelay: 20 },
  { x: 8708, y: 413, width: 221, height: 22, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 9166, y: 450, width: 214, height: 30, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 9830, y: 449, width: 98, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 9928, y: 449, width: 247, height: 20 },
  { x: 10318, y: 424, width: 118, height: 16, gated: true, gateId: "g56_0" },
  { x: 10513, y: 413, width: 227, height: 20 },
  { x: 11161, y: 345, width: 224, height: 25, melt: true, meltDelay: 20 },
  { x: 11563, y: 255, width: 47, height: 20 },
  { x: 12017, y: 157, width: 201, height: 18 },
  { x: 12393, y: 59, width: 87, height: 21, melt: true, meltDelay: 20 },
  { x: 12644, y: 59, width: 210, height: 30 },
  { x: 13265, y: -31, width: 144, height: 23 },
  { x: 13586, y: -41, width: 405, height: 20 },
];

window.deadlyPlatforms = [
  { x: 3015, y: 244, width: 72, height: 20, moveAxis: "y", moveRange: 140, moveSpeed: 0.056, movePhase: 3.03 },
  { x: 4934, y: -49, width: 60, height: 20 },
  { x: 11647, y: 259, width: 60, height: 20 },
  { x: 12247, y: 162, width: 165, height: 20 },
  { x: 13437, y: -31, width: 125, height: 20 },
];

window.spikes = [
  { x: 4876, y: -50, size: 15 },
  { x: 12075, y: 157, size: 21 },
  { x: 13282, y: -31, size: 51 },
  { x: 13333, y: -31, size: 24 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1672, y: 431, reached: false },
  { x: 4182, y: 60, reached: false },
  { x: 5813, y: -109, reached: false },
  { x: 8003, y: 262, reached: false },
  { x: 10573, y: 383, reached: false },
  { x: 12749, y: 29, reached: false },
  { x: 13789, y: -71, reached: false }, // Final
];

window.forceZones = [
  { x: 7870, y: 202, width: 265, height: 90, axis: "x", force: -0.122 },
];

window.lasers = [
  { x: 1147, y: 382, length: 143, width: 4, baseAngle: 5.81, sweepAngle: 1, period: 151, blinkPeriod: 0, onRatio: 0.5 },
  { x: 2221, y: 345, length: 234, width: 4, baseAngle: 4.41, sweepAngle: 0, period: 151, blinkPeriod: 102, onRatio: 0.5 },
  { x: 2608, y: 246, length: 120, width: 4, baseAngle: 5.43, sweepAngle: 0, period: 151, blinkPeriod: 102, onRatio: 0.5 },
  { x: 3091, y: 163, length: 215, width: 4, baseAngle: 0.62, sweepAngle: 0.54, period: 151, blinkPeriod: 0, onRatio: 0.5 },
  { x: 7795, y: 244, length: 128, width: 4, baseAngle: 1.65, sweepAngle: 0, period: 151, blinkPeriod: 102, onRatio: 0.5 },
  { x: 8549, y: 268, length: 217, width: 4, baseAngle: 6.02, sweepAngle: 0, period: 151, blinkPeriod: 102, onRatio: 0.5 },
  { x: 9027, y: 325, length: 230, width: 4, baseAngle: 2.64, sweepAngle: 0.69, period: 151, blinkPeriod: 0, onRatio: 0.5 },
  { x: 11477, y: 250, length: 139, width: 4, baseAngle: 1.09, sweepAngle: 0.99, period: 151, blinkPeriod: 0, onRatio: 0.5 },
];

window.fallers = [
  { x: 5275, y: -200, size: 28, triggerX: 5129 },
  { x: 7432, y: 86, size: 48, triggerX: 7228 },
  { x: 10015, y: 357, size: 26, triggerX: 9834 },
  { x: 12284, y: 22, size: 43, triggerX: 12135 },
];

window.switches = [
  { x: 10153, y: 419, radius: 26, gateId: "g56_0" },
];
