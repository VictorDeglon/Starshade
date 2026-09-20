// Level 46 Data — "The Glass Divide"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 46";
window.levelAccent = "#b98fff";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 721, y: 309, width: 209, height: 21 },
  { x: 1128, y: 251, width: 56, height: 30, bounce: true, bounceStrength: -16 },
  { x: 1397, y: 218, width: 186, height: 17, melt: true, meltDelay: 20 },
  { x: 1806, y: 213, width: 224, height: 20 },
  { x: 2194, y: 213, width: 216, height: 22 },
  { x: 2653, y: 256, width: 178, height: 26, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 3083, y: 324, width: 189, height: 30, melt: true, meltDelay: 20 },
  { x: 3524, y: 408, width: 62, height: 17 },
  { x: 3586, y: 408, width: 298, height: 20 },
  { x: 4083, y: 389, width: 97, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.3891836734693877 },
  { x: 4364, y: 364, width: 265, height: 20 },
  { x: 4881, y: 461, width: 99, height: 21, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 5232, y: 535, width: 48, height: 16, conveyor: true, conveyorSpeed: -1.34 },
  { x: 5532, y: 608, width: 171, height: 25 },
  { x: 5946, y: 650, width: 78, height: 18, moveAxis: "y", moveRange: 78, moveSpeed: 0.038, movePhase: 1.09 },
  { x: 6188, y: 650, width: 311, height: 28 },
  { x: 6945, y: 633, width: 109, height: 16, melt: true, meltDelay: 20 },
  { x: 7267, y: 600, width: 188, height: 19 },
  { x: 7643, y: 528, width: 48, height: 26, moveAxis: "x", moveRange: 118, moveSpeed: 0.051, movePhase: 3.04 },
  { x: 7855, y: 528, width: 220, height: 20 },
  { x: 8492, y: 447, width: 177, height: 27, moveAxis: "y", moveRange: 72, moveSpeed: 0.043, movePhase: 4.84 },
  { x: 9086, y: 366, width: 153, height: 27, conveyor: true, conveyorSpeed: 1.47 },
  { x: 9414, y: 269, width: 57, height: 16 },
  { x: 9898, y: 211, width: 217, height: 28, melt: true, meltDelay: 20 },
  { x: 10279, y: 211, width: 261, height: 25 },
  { x: 10757, y: 193, width: 154, height: 21 },
  { x: 11138, y: 200, width: 86, height: 20, bounce: true, bounceStrength: -17 },
  { x: 11467, y: 241, width: 156, height: 22 },
  { x: 11875, y: 312, width: 46, height: 17, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 12085, y: 312, width: 352, height: 15 },
  { x: 12689, y: 402, width: 96, height: 15, bounce: true, bounceStrength: -18 },
  { x: 12988, y: 410, width: 424, height: 20 },
];

window.deadlyPlatforms = [
  { x: 7690, y: 563, width: 50, height: 24, moveAxis: "y", moveRange: 144, moveSpeed: 0.05, movePhase: 1.59 },
  { x: 8416, y: 476, width: 118, height: 23, moveAxis: "x", moveRange: 78, moveSpeed: 0.052, movePhase: 1.63 },
  { x: 960, y: 308, width: 105, height: 20 },
  { x: 3621, y: 403, width: 60, height: 20 },
  { x: 5728, y: 612, width: 150, height: 20 },
  { x: 7490, y: 603, width: 149, height: 20 },
  { x: 9497, y: 273, width: 60, height: 20 },
  { x: 10949, y: 198, width: 108, height: 20 },
  { x: 11650, y: 233, width: 135, height: 20 },
];

window.spikes = [
  { x: 766, y: 309, size: 19 },
  { x: 785, y: 309, size: 20 },
  { x: 805, y: 309, size: 43 },
  { x: 1838, y: 213, size: 37 },
  { x: 7313, y: 600, size: 26 },
  { x: 9422, y: 269, size: 22 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2302, y: 183, reached: false },
  { x: 4424, y: 334, reached: false },
  { x: 6344, y: 620, reached: false },
  { x: 7965, y: 498, reached: false },
  { x: 10410, y: 181, reached: false },
  { x: 12261, y: 282, reached: false },
  { x: 13200, y: 380, reached: false }, // Final
];

window.forceZones = [
  { x: 6198, y: 560, width: 291, height: 90, axis: "x", force: 0.185 },
];

window.lasers = [
  { x: 11000, y: 105, length: 177, width: 4, baseAngle: 0.36, sweepAngle: 0.78, period: 157, blinkPeriod: 0, onRatio: 0.5 },
  { x: 11688, y: 155, length: 219, width: 4, baseAngle: 0.09, sweepAngle: 1, period: 157, blinkPeriod: 0, onRatio: 0.5 },
];

window.fallers = [
  { x: 10188, y: 119, size: 41, triggerX: 9999 },
];
