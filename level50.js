// Level 50 Data — "The Neon Rift"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "The Neon Rift";
window.levelTheme = "neon";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 532, y: 410, width: 144, height: 22, moveAxis: "x", moveRange: 126, moveSpeed: 0.041, movePhase: 3.59 },
  { x: 898, y: 416, width: 201, height: 15, bounce: true, bounceStrength: -19 },
  { x: 1526, y: 379, width: 212, height: 18 },
  { x: 2165, y: 337, width: 52, height: 27 },
  { x: 2381, y: 337, width: 207, height: 27 },
  { x: 2772, y: 264, width: 133, height: 28, melt: true, meltDelay: 20 },
  { x: 3085, y: 181, width: 211, height: 28 },
  { x: 3704, y: 102, width: 211, height: 30, bounce: true, bounceStrength: -18 },
  { x: 3915, y: 102, width: 227, height: 20 },
  { x: 4320, y: 75, width: 114, height: 16, gated: true, gateId: "g50_0" },
  { x: 4483, y: 77, width: 247, height: 20 },
  { x: 4929, y: 25, width: 128, height: 14, conveyor: true, conveyorSpeed: 1.82 },
  { x: 5270, y: 8, width: 133, height: 15, melt: true, meltDelay: 20 },
  { x: 5843, y: 2, width: 78, height: 20, melt: true, meltDelay: 20 },
  { x: 5921, y: 2, width: 279, height: 20 },
  { x: 6403, y: -23, width: 101, height: 20, ghost: true, ghostPeriod: 123, ghostOnRatio: 0.41 },
  { x: 6687, y: -49, width: 237, height: 20 },
  { x: 7161, y: -6, width: 61, height: 20, bounce: true, bounceStrength: -19 },
  { x: 7469, y: 79, width: 93, height: 26, melt: true, meltDelay: 20 },
  { x: 7809, y: 151, width: 200, height: 16, ghost: true, ghostPeriod: 124, ghostOnRatio: 0.41250000000000003 },
  { x: 8173, y: 151, width: 250, height: 14 },
  { x: 8670, y: 236, width: 147, height: 14, conveyor: true, conveyorSpeed: 1.04 },
  { x: 9058, y: 297, width: 218, height: 17, ghost: true, ghostPeriod: 124, ghostOnRatio: 0.41250000000000003 },
  { x: 9517, y: 354, width: 212, height: 22, ghost: true, ghostPeriod: 124, ghostOnRatio: 0.41250000000000003 },
  { x: 9893, y: 354, width: 344, height: 21 },
  { x: 10455, y: 343, width: 54, height: 29, bounce: true, bounceStrength: -18 },
  { x: 10722, y: 324, width: 141, height: 24 },
  { x: 11062, y: 279, width: 210, height: 19, conveyor: true, conveyorSpeed: 1.99 },
  { x: 11436, y: 279, width: 241, height: 17 },
  { x: 12085, y: 202, width: 53, height: 23, moveAxis: "y", moveRange: 87, moveSpeed: 0.057, movePhase: 1.2 },
  { x: 12540, y: 108, width: 142, height: 26 },
  { x: 13094, y: 32, width: 115, height: 16, moveAxis: "x", moveRange: 120, moveSpeed: 0.058, movePhase: 3.1 },
  { x: 13617, y: -49, width: 220, height: 20, moveAxis: "x", moveRange: 101, moveSpeed: 0.054, movePhase: 2.38 },
  { x: 14033, y: -52, width: 439, height: 20 },
];

window.deadlyPlatforms = [
  { x: 12134, y: 244, width: 50, height: 18, moveAxis: "x", moveRange: 80, moveSpeed: 0.066, movePhase: 5.14 },
  { x: 1775, y: 388, width: 176, height: 20 },
  { x: 2244, y: 329, width: 60, height: 20 },
  { x: 3334, y: 176, width: 111, height: 20 },
  { x: 10888, y: 324, width: 100, height: 20 },
  { x: 12702, y: 112, width: 111, height: 20 },
];

window.spikes = [
  { x: 1557, y: 379, size: 30 },
  { x: 1587, y: 379, size: 12 },
  { x: 1599, y: 379, size: 15 },
  { x: 3160, y: 181, size: 37 },
  { x: 10739, y: 324, size: 25 },
  { x: 12579, y: 108, size: 12 },
  { x: 12591, y: 108, size: 36 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2485, y: 307, reached: false },
  { x: 4543, y: 47, reached: false },
  { x: 6747, y: -79, reached: false },
  { x: 8298, y: 121, reached: false },
  { x: 10065, y: 324, reached: false },
  { x: 11557, y: 249, reached: false },
  { x: 14253, y: -82, reached: false }, // Final
];

window.lasers = [
  { x: 2987, y: 212, length: 168, width: 4, baseAngle: 0.19, sweepAngle: 0, period: 163, blinkPeriod: 113, onRatio: 0.5 },
  { x: 5493, y: -47, length: 225, width: 4, baseAngle: 0.93, sweepAngle: 0.51, period: 163, blinkPeriod: 0, onRatio: 0.5 },
  { x: 10935, y: 249, length: 216, width: 4, baseAngle: 0.9, sweepAngle: 0.77, period: 163, blinkPeriod: 0, onRatio: 0.5 },
  { x: 13306, y: -45, length: 226, width: 4, baseAngle: 5.4, sweepAngle: 0.53, period: 163, blinkPeriod: 0, onRatio: 0.5 },
];

window.fallers = [
  { x: 770, y: 303, size: 43, triggerX: 636 },
  { x: 1161, y: 277, size: 27, triggerX: 998 },
  { x: 13924, y: -148, size: 44, triggerX: 13751 },
];

window.switches = [
  { x: 4120, y: 72, radius: 26, gateId: "g50_0" },
];
