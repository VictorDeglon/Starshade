// Level 62 Data — "Ashfall Perimeter"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 62";
window.levelAccent = "#9dff4d";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 552, y: 466, width: 59, height: 22, moveAxis: "y", moveRange: 74, moveSpeed: 0.058, movePhase: 4.45 },
  { x: 854, y: 511, width: 185, height: 15, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 1272, y: 531, width: 224, height: 29, melt: true, meltDelay: 20 },
  { x: 1660, y: 531, width: 353, height: 23 },
  { x: 2444, y: 479, width: 136, height: 28 },
  { x: 2774, y: 415, width: 158, height: 29 },
  { x: 3339, y: 313, width: 131, height: 29, bounce: true, bounceStrength: -19 },
  { x: 3645, y: 219, width: 150, height: 15, bounce: true, bounceStrength: -18 },
  { x: 3795, y: 219, width: 243, height: 20 },
  { x: 4236, y: 204, width: 101, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.3565306122448979 },
  { x: 4516, y: 184, width: 251, height: 20 },
  { x: 4945, y: 92, width: 71, height: 17 },
  { x: 5200, y: 12, width: 129, height: 24 },
  { x: 5533, y: -32, width: 145, height: 29, melt: true, meltDelay: 20 },
  { x: 5895, y: -52, width: 162, height: 21, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 6057, y: -52, width: 262, height: 20 },
  { x: 6495, y: -70, width: 114, height: 16, gated: true, gateId: "g62_0" },
  { x: 6660, y: -78, width: 226, height: 20 },
  { x: 7123, y: -45, width: 189, height: 24, melt: true, meltDelay: 20 },
  { x: 7564, y: 21, width: 98, height: 25, bounce: true, bounceStrength: -19 },
  { x: 7914, y: 100, width: 128, height: 19, moveAxis: "y", moveRange: 110, moveSpeed: 0.049, movePhase: 4.53 },
  { x: 8042, y: 100, width: 299, height: 20 },
  { x: 8544, y: 85, width: 94, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.3565306122448979 },
  { x: 8839, y: 61, width: 258, height: 20 },
  { x: 9349, y: 172, width: 151, height: 29, moveAxis: "x", moveRange: 91, moveSpeed: 0.04, movePhase: 1.71 },
  { x: 9752, y: 273, width: 77, height: 22, melt: true, meltDelay: 20 },
  { x: 10081, y: 339, width: 139, height: 19, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 10466, y: 394, width: 103, height: 21, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 10733, y: 394, width: 334, height: 15 },
  { x: 11517, y: 384, width: 157, height: 18, moveAxis: "x", moveRange: 79, moveSpeed: 0.052, movePhase: 2.44 },
  { x: 12114, y: 358, width: 112, height: 22, bounce: true, bounceStrength: -17 },
  { x: 12647, y: 282, width: 63, height: 17, melt: true, meltDelay: 20 },
  { x: 12874, y: 282, width: 236, height: 21 },
  { x: 13527, y: 196, width: 197, height: 29, conveyor: true, conveyorSpeed: -1.38 },
  { x: 13893, y: 93, width: 137, height: 22, melt: true, meltDelay: 20 },
  { x: 14214, y: 14, width: 161, height: 19 },
  { x: 14574, y: 3, width: 422, height: 20 },
];

window.deadlyPlatforms = [
  { x: 7845, y: 151, width: 97, height: 23, moveAxis: "x", moveRange: 102, moveSpeed: 0.042, movePhase: 1.69 },
  { x: 9402, y: 114, width: 126, height: 19, moveAxis: "y", moveRange: 92, moveSpeed: 0.038, movePhase: 1.33 },
  { x: 11571, y: 329, width: 134, height: 22, moveAxis: "y", moveRange: 73, moveSpeed: 0.046, movePhase: 2.5 },
  { x: 2618, y: 469, width: 109, height: 20 },
  { x: 2971, y: 424, width: 137, height: 20 },
  { x: 5052, y: 102, width: 60, height: 20 },
  { x: 5349, y: 15, width: 97, height: 20 },
  { x: 14414, y: 13, width: 90, height: 20 },
];

window.spikes = [
  { x: 2486, y: 479, size: 38 },
  { x: 2524, y: 479, size: 39 },
  { x: 2806, y: 415, size: 54 },
  { x: 2860, y: 415, size: 57 },
  { x: 14257, y: 14, size: 27 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1837, y: 501, reached: false },
  { x: 4576, y: 154, reached: false },
  { x: 6720, y: -108, reached: false },
  { x: 8899, y: 31, reached: false },
  { x: 10900, y: 364, reached: false },
  { x: 12992, y: 252, reached: false },
  { x: 14785, y: -27, reached: false }, // Final
];

window.forceZones = [
  { x: 1670, y: 441, width: 333, height: 90, axis: "x", force: -0.153 },
];

window.lasers = [
  { x: 697, y: 376, length: 107, width: 4, baseAngle: 5.74, sweepAngle: 1.11, period: 147, blinkPeriod: 0, onRatio: 0.5 },
  { x: 2655, y: 438, length: 191, width: 4, baseAngle: 4.36, sweepAngle: 0.53, period: 147, blinkPeriod: 0, onRatio: 0.5 },
  { x: 2992, y: 337, length: 213, width: 4, baseAngle: 6.02, sweepAngle: 0.58, period: 147, blinkPeriod: 0, onRatio: 0.5 },
  { x: 7375, y: -134, length: 144, width: 4, baseAngle: 3.94, sweepAngle: 0.61, period: 147, blinkPeriod: 0, onRatio: 0.5 },
  { x: 8123, y: 31, length: 207, width: 4, baseAngle: 4.79, sweepAngle: 0, period: 147, blinkPeriod: 99, onRatio: 0.5 },
  { x: 9566, y: 79, length: 139, width: 4, baseAngle: 2.74, sweepAngle: 1.14, period: 147, blinkPeriod: 0, onRatio: 0.5 },
  { x: 14104, y: 10, length: 213, width: 4, baseAngle: 3.53, sweepAngle: 0, period: 147, blinkPeriod: 99, onRatio: 0.5 },
];

window.fallers = [
  { x: 1134, y: 401, size: 51, triggerX: 955 },
  { x: 7727, y: -112, size: 38, triggerX: 7521 },
  { x: 10297, y: 223, size: 48, triggerX: 10121 },
  { x: 10644, y: 287, size: 30, triggerX: 10441 },
  { x: 11752, y: 255, size: 35, triggerX: 11591 },
];

window.switches = [
  { x: 6297, y: -82, radius: 26, gateId: "g62_0" },
];
