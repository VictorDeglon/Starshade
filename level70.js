// Level 70 Data — "The Cracked Horizon"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 70";
window.levelAccent = "#bfe6ff";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 478, y: 290, width: 178, height: 23, melt: true, meltDelay: 20 },
  { x: 831, y: 192, width: 191, height: 15, melt: true, meltDelay: 20 },
  { x: 1200, y: 101, width: 115, height: 17 },
  { x: 1722, y: 1, width: 75, height: 17, conveyor: true, conveyorSpeed: -1.95 },
  { x: 1961, y: 1, width: 399, height: 23 },
  { x: 2558, y: -60, width: 113, height: 25 },
  { x: 3111, y: -91, width: 93, height: 29, melt: true, meltDelay: 20 },
  { x: 3431, y: -84, width: 156, height: 20, moveAxis: "x", moveRange: 136, moveSpeed: 0.06, movePhase: 3.4 },
  { x: 3824, y: -58, width: 134, height: 16, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 4122, y: -58, width: 359, height: 23 },
  { x: 4733, y: 29, width: 216, height: 18, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 5201, y: 123, width: 134, height: 21, melt: true, meltDelay: 20 },
  { x: 5587, y: 224, width: 232, height: 20, bounce: true, bounceStrength: -19 },
  { x: 5819, y: 224, width: 266, height: 20 },
  { x: 6242, y: 190, width: 93, height: 16, gated: true, gateId: "g70_0" },
  { x: 6426, y: 192, width: 210, height: 20 },
  { x: 6888, y: 271, width: 111, height: 21, melt: true, meltDelay: 20 },
  { x: 7245, y: 332, width: 180, height: 23, melt: true, meltDelay: 20 },
  { x: 7671, y: 384, width: 109, height: 22, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 7780, y: 384, width: 262, height: 20 },
  { x: 8207, y: 354, width: 97, height: 16, gated: true, gateId: "g70_1" },
  { x: 8383, y: 358, width: 204, height: 20 },
  { x: 9027, y: 327, width: 214, height: 27, moveAxis: "y", moveRange: 99, moveSpeed: 0.052, movePhase: 3.68 },
  { x: 9678, y: 285, width: 120, height: 26 },
  { x: 10219, y: 217, width: 121, height: 15, melt: true, meltDelay: 20 },
  { x: 10524, y: 135, width: 165, height: 15, bounce: true, bounceStrength: -18 },
  { x: 10853, y: 135, width: 287, height: 22 },
  { x: 11547, y: 38, width: 127, height: 30 },
  { x: 11849, y: -59, width: 74, height: 29, moveAxis: "x", moveRange: 81, moveSpeed: 0.064, movePhase: 4.95 },
  { x: 12350, y: -124, width: 85, height: 25, moveAxis: "y", moveRange: 126, moveSpeed: 0.064, movePhase: 1.31 },
  { x: 12435, y: -124, width: 286, height: 20 },
  { x: 12916, y: -151, width: 102, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 13206, y: -165, width: 224, height: 20 },
  { x: 13876, y: -182, width: 177, height: 14, melt: true, meltDelay: 20 },
  { x: 14286, y: -162, width: 146, height: 25, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 14675, y: -115, width: 221, height: 27, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 15148, y: -28, width: 60, height: 18, conveyor: true, conveyorSpeed: 0.91 },
  { x: 15403, y: -38, width: 408, height: 20 },
];

window.deadlyPlatforms = [
  { x: 3350, y: -144, width: 107, height: 14, moveAxis: "y", moveRange: 111, moveSpeed: 0.068, movePhase: 3.26 },
  { x: 8963, y: 373, width: 124, height: 20, moveAxis: "x", moveRange: 93, moveSpeed: 0.055, movePhase: 3.23 },
  { x: 11792, y: -108, width: 66, height: 22, moveAxis: "y", moveRange: 87, moveSpeed: 0.063, movePhase: 1.95 },
  { x: 12283, y: -86, width: 50, height: 23, moveAxis: "x", moveRange: 138, moveSpeed: 0.067, movePhase: 5.27 },
  { x: 1345, y: 101, width: 98, height: 20 },
  { x: 2694, y: -63, width: 63, height: 20 },
  { x: 9820, y: 292, width: 107, height: 20 },
];

window.spikes = [
  { x: 1235, y: 101, size: 34 },
  { x: 9711, y: 285, size: 61 },
  { x: 9772, y: 285, size: 13 },
  { x: 11587, y: 38, size: 20 },
  { x: 11607, y: 38, size: 50 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2161, y: -29, reached: false },
  { x: 4302, y: -88, reached: false },
  { x: 6486, y: 162, reached: false },
  { x: 8443, y: 328, reached: false },
  { x: 10997, y: 105, reached: false },
  { x: 13266, y: -195, reached: false },
  { x: 15607, y: -68, reached: false }, // Final
];

window.lasers = [
  { x: 734, y: 238, length: 171, width: 4, baseAngle: 3.67, sweepAngle: 0, period: 142, blinkPeriod: 95, onRatio: 0.5 },
  { x: 1094, y: 98, length: 239, width: 4, baseAngle: 0.81, sweepAngle: 0.51, period: 142, blinkPeriod: 0, onRatio: 0.5 },
  { x: 1873, y: -53, length: 134, width: 4, baseAngle: 6.12, sweepAngle: 1.14, period: 142, blinkPeriod: 0, onRatio: 0.5 },
  { x: 3302, y: -190, length: 215, width: 4, baseAngle: 3.65, sweepAngle: 0.67, period: 142, blinkPeriod: 0, onRatio: 0.5 },
  { x: 3668, y: -161, length: 232, width: 4, baseAngle: 3.66, sweepAngle: 0.95, period: 142, blinkPeriod: 0, onRatio: 0.5 },
  { x: 5917, y: 168, length: 167, width: 4, baseAngle: 2.44, sweepAngle: 1.15, period: 142, blinkPeriod: 0, onRatio: 0.5 },
  { x: 7495, y: 254, length: 114, width: 4, baseAngle: 4.93, sweepAngle: 0, period: 142, blinkPeriod: 95, onRatio: 0.5 },
  { x: 7853, y: 300, length: 161, width: 4, baseAngle: 0.41, sweepAngle: 0.86, period: 142, blinkPeriod: 0, onRatio: 0.5 },
  { x: 10401, y: 137, length: 154, width: 4, baseAngle: 2.24, sweepAngle: 0, period: 142, blinkPeriod: 95, onRatio: 0.5 },
  { x: 10785, y: 72, length: 146, width: 4, baseAngle: 2.82, sweepAngle: 0.84, period: 142, blinkPeriod: 0, onRatio: 0.5 },
  { x: 11770, y: -59, length: 213, width: 4, baseAngle: 5.05, sweepAngle: 1.14, period: 142, blinkPeriod: 0, onRatio: 0.5 },
];

window.fallers = [
  { x: 1401, y: 16, size: 38, triggerX: 1208 },
  { x: 12018, y: -167, size: 39, triggerX: 11820 },
  { x: 12513, y: -210, size: 51, triggerX: 12336 },
  { x: 14508, y: -298, size: 50, triggerX: 14324 },
  { x: 14995, y: -220, size: 28, triggerX: 14818 },
];

window.switches = [
  { x: 6063, y: 194, radius: 26, gateId: "g70_0" },
  { x: 8020, y: 354, radius: 26, gateId: "g70_1" },
];
