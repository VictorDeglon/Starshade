// Level 64 Data — "Nightglass Span"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 64";
window.levelAccent = "#9dff4d";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 707, y: 281, width: 147, height: 26 },
  { x: 1023, y: 179, width: 84, height: 17, conveyor: true, conveyorSpeed: 1.32 },
  { x: 1518, y: 86, width: 171, height: 17, bounce: true, bounceStrength: -18 },
  { x: 1853, y: 86, width: 230, height: 20 },
  { x: 2510, y: 26, width: 72, height: 16 },
  { x: 3019, y: -14, width: 183, height: 18, melt: true, meltDelay: 20 },
  { x: 3652, y: -20, width: 97, height: 30, melt: true, meltDelay: 20 },
  { x: 3986, y: 10, width: 129, height: 24, bounce: true, bounceStrength: -17 },
  { x: 4115, y: 10, width: 249, height: 20 },
  { x: 4512, y: -16, width: 104, height: 16, gated: true, gateId: "g64_0" },
  { x: 4709, y: -6, width: 247, height: 20 },
  { x: 5208, y: 60, width: 208, height: 17, bounce: true, bounceStrength: -17 },
  { x: 5668, y: 145, width: 52, height: 15, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 5972, y: 245, width: 234, height: 23, moveAxis: "x", moveRange: 135, moveSpeed: 0.056, movePhase: 3.36 },
  { x: 6458, y: 342, width: 50, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 6508, y: 342, width: 261, height: 20 },
  { x: 6978, y: 315, width: 91, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.3524489795918367 },
  { x: 7268, y: 299, width: 261, height: 20 },
  { x: 7781, y: 374, width: 178, height: 19, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 8196, y: 407, width: 97, height: 15, conveyor: true, conveyorSpeed: 1.07 },
  { x: 8526, y: 424, width: 154, height: 14, melt: true, meltDelay: 20 },
  { x: 9120, y: 392, width: 110, height: 27 },
  { x: 9230, y: 392, width: 255, height: 20 },
  { x: 9688, y: 381, width: 98, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.3524489795918367 },
  { x: 9973, y: 356, width: 234, height: 20 },
  { x: 10628, y: 289, width: 210, height: 25, melt: true, meltDelay: 20 },
  { x: 11245, y: 193, width: 195, height: 14, bounce: true, bounceStrength: -19 },
  { x: 11615, y: 99, width: 73, height: 18, moveAxis: "x", moveRange: 84, moveSpeed: 0.053, movePhase: 4.15 },
  { x: 11852, y: 99, width: 254, height: 28 },
  { x: 12294, y: 24, width: 117, height: 29, melt: true, meltDelay: 20 },
  { x: 12828, y: -58, width: 225, height: 26, bounce: true, bounceStrength: -20 },
  { x: 13490, y: -103, width: 124, height: 22 },
  { x: 13778, y: -103, width: 200, height: 24 },
  { x: 14211, y: -85, width: 159, height: 25, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 14616, y: -24, width: 84, height: 14, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 14952, y: 50, width: 123, height: 17, moveAxis: "y", moveRange: 137, moveSpeed: 0.053, movePhase: 4.94 },
  { x: 15259, y: 55, width: 385, height: 20 },
];

window.deadlyPlatforms = [
  { x: 5918, y: 206, width: 157, height: 21, moveAxis: "y", moveRange: 160, moveSpeed: 0.057, movePhase: 4.11 },
  { x: 888, y: 276, width: 93, height: 20 },
  { x: 9250, y: 393, width: 94, height: 20 },
  { x: 13651, y: -103, width: 82, height: 20 },
];

window.spikes = [
  { x: 743, y: 281, size: 14 },
  { x: 757, y: 281, size: 28 },
  { x: 785, y: 281, size: 24 },
  { x: 809, y: 281, size: 15 },
  { x: 9156, y: 392, size: 37 },
  { x: 13507, y: -103, size: 34 },
  { x: 13541, y: -103, size: 30 },
  { x: 13571, y: -103, size: 25 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1968, y: 56, reached: false },
  { x: 4769, y: -36, reached: false },
  { x: 7328, y: 269, reached: false },
  { x: 10033, y: 326, reached: false },
  { x: 11979, y: 69, reached: false },
  { x: 13878, y: -133, reached: false },
  { x: 15452, y: 25, reached: false }, // Final
];

window.forceZones = [
  { x: 1863, y: -4, width: 210, height: 90, axis: "x", force: -0.169 },
  { x: 11862, y: 9, width: 234, height: 90, axis: "x", force: 0.151 },
  { x: 13788, y: -193, width: 180, height: 90, axis: "x", force: -0.173 },
];

window.lasers = [
  { x: 952, y: 213, length: 150, width: 4, baseAngle: 5.98, sweepAngle: 0, period: 146, blinkPeriod: 98, onRatio: 0.5 },
  { x: 3276, y: -100, length: 213, width: 4, baseAngle: 5.1, sweepAngle: 0, period: 146, blinkPeriod: 98, onRatio: 0.5 },
  { x: 4179, y: -54, length: 239, width: 4, baseAngle: 3.85, sweepAngle: 0.81, period: 146, blinkPeriod: 0, onRatio: 0.5 },
  { x: 5478, y: -22, length: 141, width: 4, baseAngle: 1.14, sweepAngle: 0.76, period: 146, blinkPeriod: 0, onRatio: 0.5 },
  { x: 5786, y: 79, length: 126, width: 4, baseAngle: 2.16, sweepAngle: 0.95, period: 146, blinkPeriod: 0, onRatio: 0.5 },
  { x: 6285, y: 147, length: 109, width: 4, baseAngle: 2.17, sweepAngle: 0, period: 146, blinkPeriod: 98, onRatio: 0.5 },
  { x: 8355, y: 318, length: 196, width: 4, baseAngle: 5.44, sweepAngle: 0, period: 146, blinkPeriod: 98, onRatio: 0.5 },
  { x: 8754, y: 352, length: 227, width: 4, baseAngle: 3.83, sweepAngle: 0.6, period: 146, blinkPeriod: 0, onRatio: 0.5 },
  { x: 10908, y: 229, length: 196, width: 4, baseAngle: 4.5, sweepAngle: 1.04, period: 146, blinkPeriod: 0, onRatio: 0.5 },
  { x: 13691, y: -198, length: 155, width: 4, baseAngle: 1.66, sweepAngle: 0, period: 146, blinkPeriod: 98, onRatio: 0.5 },
];

window.fallers = [
  { x: 2656, y: -93, size: 24, triggerX: 2459 },
  { x: 9294, y: 287, size: 48, triggerX: 9095 },
  { x: 14444, y: -181, size: 47, triggerX: 14245 },
];

window.switches = [
  { x: 4342, y: -20, radius: 26, gateId: "g64_0" },
];
