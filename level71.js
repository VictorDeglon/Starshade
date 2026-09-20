// Level 71 Data — "Ravenous Span"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 71";
window.levelAccent = "#bfe6ff";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 702, y: 268, width: 102, height: 25, moveAxis: "x", moveRange: 130, moveSpeed: 0.059, movePhase: 3.43 },
  { x: 1221, y: 189, width: 88, height: 29 },
  { x: 1497, y: 116, width: 78, height: 23, bounce: true, bounceStrength: -18 },
  { x: 1788, y: 92, width: 145, height: 17, melt: true, meltDelay: 20 },
  { x: 2097, y: 92, width: 285, height: 20 },
  { x: 2619, y: 127, width: 120, height: 25, bounce: true, bounceStrength: -19 },
  { x: 2991, y: 203, width: 150, height: 24, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 3393, y: 283, width: 162, height: 19, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 3807, y: 377, width: 216, height: 21, melt: true, meltDelay: 20 },
  { x: 4187, y: 377, width: 199, height: 25 },
  { x: 4638, y: 464, width: 61, height: 21, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 4951, y: 549, width: 47, height: 15, melt: true, meltDelay: 20 },
  { x: 5250, y: 619, width: 172, height: 20, melt: true, meltDelay: 20 },
  { x: 5659, y: 656, width: 202, height: 19, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 6025, y: 656, width: 384, height: 22 },
  { x: 6622, y: 627, width: 211, height: 26, conveyor: true, conveyorSpeed: 2.11 },
  { x: 7254, y: 557, width: 149, height: 26, conveyor: true, conveyorSpeed: 1.52 },
  { x: 7587, y: 474, width: 88, height: 26 },
  { x: 8082, y: 373, width: 135, height: 17, melt: true, meltDelay: 20 },
  { x: 8217, y: 373, width: 223, height: 20 },
  { x: 8632, y: 343, width: 117, height: 16, gated: true, gateId: "g71_0" },
  { x: 8781, y: 342, width: 238, height: 20 },
  { x: 9178, y: 231, width: 134, height: 28 },
  { x: 9496, y: 147, width: 59, height: 24, moveAxis: "x", moveRange: 107, moveSpeed: 0.063, movePhase: 5.09 },
  { x: 9753, y: 90, width: 203, height: 18, bounce: true, bounceStrength: -18 },
  { x: 9956, y: 90, width: 272, height: 20 },
  { x: 10396, y: 71, width: 108, height: 16, gated: true, gateId: "g71_1" },
  { x: 10573, y: 75, width: 254, height: 20 },
  { x: 11277, y: 68, width: 222, height: 18, bounce: true, bounceStrength: -19 },
  { x: 11736, y: 102, width: 141, height: 30, bounce: true, bounceStrength: -17 },
  { x: 12123, y: 157, width: 200, height: 30, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 12575, y: 225, width: 90, height: 14, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 12829, y: 225, width: 267, height: 17 },
  { x: 13348, y: 335, width: 127, height: 22, bounce: true, bounceStrength: -18 },
  { x: 13727, y: 424, width: 94, height: 21, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 14009, y: 422, width: 434, height: 20 },
];

window.deadlyPlatforms = [
  { x: 661, y: 325, width: 66, height: 15, moveAxis: "y", moveRange: 158, moveSpeed: 0.067, movePhase: 4.17 },
  { x: 1335, y: 185, width: 70, height: 20 },
];

window.spikes = [
  { x: 1235, y: 189, size: 28 },
  { x: 9219, y: 231, size: 58 },
  { x: 9277, y: 231, size: 15 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2240, y: 62, reached: false },
  { x: 4287, y: 347, reached: false },
  { x: 6217, y: 626, reached: false },
  { x: 8841, y: 312, reached: false },
  { x: 10633, y: 45, reached: false },
  { x: 12963, y: 195, reached: false },
  { x: 14226, y: 392, reached: false }, // Final
];

window.lasers = [
  { x: 876, y: 206, length: 134, width: 4, baseAngle: 0.8, sweepAngle: 0.89, period: 141, blinkPeriod: 0, onRatio: 0.5 },
  { x: 1673, y: 65, length: 177, width: 4, baseAngle: 0.36, sweepAngle: 0, period: 141, blinkPeriod: 95, onRatio: 0.5 },
  { x: 4115, y: 292, length: 224, width: 4, baseAngle: 0.59, sweepAngle: 0, period: 141, blinkPeriod: 95, onRatio: 0.5 },
  { x: 4797, y: 416, length: 205, width: 4, baseAngle: 1.33, sweepAngle: 0.79, period: 141, blinkPeriod: 0, onRatio: 0.5 },
  { x: 5956, y: 587, length: 175, width: 4, baseAngle: 1.7, sweepAngle: 1.09, period: 141, blinkPeriod: 0, onRatio: 0.5 },
  { x: 7488, y: 474, length: 258, width: 4, baseAngle: 2.79, sweepAngle: 0, period: 141, blinkPeriod: 95, onRatio: 0.5 },
  { x: 7774, y: 413, length: 180, width: 4, baseAngle: 1.71, sweepAngle: 0.49, period: 141, blinkPeriod: 0, onRatio: 0.5 },
  { x: 9390, y: 191, length: 151, width: 4, baseAngle: 1.32, sweepAngle: 0, period: 141, blinkPeriod: 95, onRatio: 0.5 },
  { x: 10043, y: 44, length: 167, width: 4, baseAngle: 0.05, sweepAngle: 1.14, period: 141, blinkPeriod: 0, onRatio: 0.5 },
  { x: 11585, y: -24, length: 237, width: 4, baseAngle: 2.63, sweepAngle: 0.54, period: 141, blinkPeriod: 0, onRatio: 0.5 },
];

window.fallers = [
  { x: 5492, y: 513, size: 25, triggerX: 5298 },
  { x: 13883, y: 328, size: 25, triggerX: 13724 },
];

window.switches = [
  { x: 8418, y: 343, radius: 26, gateId: "g71_0" },
  { x: 10206, y: 60, radius: 26, gateId: "g71_1" },
];
