// Level 41 Data — "Ravenfall Reach"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 41";
window.levelAccent = "#b98fff";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 531, y: 400, width: 82, height: 19, moveAxis: "y", moveRange: 101, moveSpeed: 0.057, movePhase: 0.83 },
  { x: 853, y: 444, width: 148, height: 23, melt: true, meltDelay: 20 },
  { x: 1245, y: 502, width: 201, height: 17, melt: true, meltDelay: 20 },
  { x: 1696, y: 597, width: 46, height: 21, melt: true, meltDelay: 20 },
  { x: 1906, y: 597, width: 190, height: 30 },
  { x: 2346, y: 672, width: 130, height: 15, conveyor: true, conveyorSpeed: -2.05 },
  { x: 2726, y: 758, width: 100, height: 19, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 3070, y: 815, width: 130, height: 15, melt: true, meltDelay: 20 },
  { x: 3444, y: 870, width: 63, height: 26, bounce: true, bounceStrength: -17 },
  { x: 3507, y: 870, width: 247, height: 20 },
  { x: 3961, y: 842, width: 104, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.39938775510204083 },
  { x: 4241, y: 813, width: 234, height: 20 },
  { x: 4700, y: 815, width: 98, height: 29, melt: true, meltDelay: 20 },
  { x: 4994, y: 761, width: 151, height: 21 },
  { x: 5347, y: 710, width: 101, height: 25, conveyor: true, conveyorSpeed: 1.6 },
  { x: 5621, y: 617, width: 79, height: 16, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 5864, y: 617, width: 272, height: 14 },
  { x: 6303, y: 513, width: 55, height: 16 },
  { x: 6775, y: 442, width: 102, height: 28 },
  { x: 7063, y: 371, width: 227, height: 21, conveyor: true, conveyorSpeed: 1.78 },
  { x: 7496, y: 336, width: 66, height: 29 },
  { x: 7726, y: 336, width: 336, height: 16 },
  { x: 8287, y: 347, width: 53, height: 15, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 8580, y: 396, width: 103, height: 29, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 8933, y: 465, width: 123, height: 29, melt: true, meltDelay: 20 },
  { x: 9306, y: 544, width: 207, height: 29 },
  { x: 9677, y: 544, width: 393, height: 20 },
  { x: 10320, y: 633, width: 144, height: 30, melt: true, meltDelay: 20 },
  { x: 10714, y: 701, width: 209, height: 23, melt: true, meltDelay: 20 },
  { x: 11173, y: 776, width: 63, height: 30 },
  { x: 11395, y: 761, width: 400, height: 20 },
];

window.deadlyPlatforms = [
  { x: 576, y: 343, width: 63, height: 19, moveAxis: "x", moveRange: 102, moveSpeed: 0.055, movePhase: 1.69 },
  { x: 5166, y: 758, width: 86, height: 20 },
  { x: 6899, y: 441, width: 65, height: 20 },
  { x: 9548, y: 539, width: 173, height: 20 },
  { x: 11262, y: 769, width: 60, height: 20 },
];

window.spikes = [
  { x: 5040, y: 761, size: 12 },
  { x: 6315, y: 513, size: 37 },
  { x: 6803, y: 442, size: 16 },
  { x: 6819, y: 442, size: 43 },
  { x: 7514, y: 336, size: 22 },
  { x: 9369, y: 544, size: 23 },
  { x: 9392, y: 544, size: 12 },
  { x: 9404, y: 544, size: 42 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2001, y: 567, reached: false },
  { x: 4301, y: 783, reached: false },
  { x: 6000, y: 587, reached: false },
  { x: 7894, y: 306, reached: false },
  { x: 9874, y: 514, reached: false },
  { x: 11595, y: 731, reached: false }, // Final
];

window.forceZones = [
  { x: 7736, y: 246, width: 316, height: 90, axis: "x", force: 0.154 },
];

window.lasers = [
  { x: 1521, y: 457, length: 226, width: 4, baseAngle: 0.9, sweepAngle: 1.05, period: 160, blinkPeriod: 0, onRatio: 0.5 },
  { x: 7651, y: 292, length: 213, width: 4, baseAngle: 0.92, sweepAngle: 0, period: 160, blinkPeriod: 110, onRatio: 0.5 },
  { x: 8410, y: 268, length: 115, width: 4, baseAngle: 2.81, sweepAngle: 0, period: 160, blinkPeriod: 110, onRatio: 0.5 },
  { x: 9589, y: 455, length: 182, width: 4, baseAngle: 2.95, sweepAngle: 0, period: 160, blinkPeriod: 110, onRatio: 0.5 },
  { x: 11296, y: 684, length: 179, width: 4, baseAngle: 2.96, sweepAngle: 0.58, period: 160, blinkPeriod: 0, onRatio: 0.5 },
];
