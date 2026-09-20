// Level 74 Data — "The Last Ember"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 74";
window.levelAccent = "#bfe6ff";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 552, y: 488, width: 197, height: 21, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 1001, y: 597, width: 226, height: 29, conveyor: true, conveyorSpeed: 2.02 },
  { x: 1473, y: 657, width: 129, height: 19, moveAxis: "x", moveRange: 130, moveSpeed: 0.047, movePhase: 3.49 },
  { x: 1845, y: 702, width: 70, height: 16, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 2079, y: 702, width: 285, height: 16 },
  { x: 2810, y: 682, width: 150, height: 27, conveyor: true, conveyorSpeed: -1.75 },
  { x: 3397, y: 643, width: 106, height: 19, moveAxis: "x", moveRange: 110, moveSpeed: 0.061, movePhase: 1.73 },
  { x: 3920, y: 560, width: 207, height: 25, bounce: true, bounceStrength: -18 },
  { x: 4127, y: 560, width: 257, height: 20 },
  { x: 4582, y: 545, width: 98, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 4871, y: 516, width: 261, height: 20 },
  { x: 5530, y: 399, width: 172, height: 17, conveyor: true, conveyorSpeed: 1.17 },
  { x: 6104, y: 288, width: 182, height: 23 },
  { x: 6451, y: 179, width: 192, height: 17, melt: true, meltDelay: 20 },
  { x: 7064, y: 103, width: 69, height: 14, melt: true, meltDelay: 20 },
  { x: 7133, y: 103, width: 252, height: 20 },
  { x: 7535, y: 69, width: 112, height: 16, gated: true, gateId: "g74_0" },
  { x: 7726, y: 73, width: 259, height: 20 },
  { x: 8431, y: 61, width: 198, height: 29 },
  { x: 8856, y: 68, width: 216, height: 20, conveyor: true, conveyorSpeed: -1.76 },
  { x: 9309, y: 101, width: 170, height: 26, bounce: true, bounceStrength: -19 },
  { x: 9643, y: 101, width: 193, height: 22 },
  { x: 10088, y: 207, width: 50, height: 22, moveAxis: "y", moveRange: 111, moveSpeed: 0.05, movePhase: 1.73 },
  { x: 10390, y: 300, width: 129, height: 19, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 10771, y: 418, width: 127, height: 29, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 11150, y: 508, width: 226, height: 30, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 11376, y: 508, width: 274, height: 20 },
  { x: 11845, y: 488, width: 96, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 12139, y: 471, width: 264, height: 20 },
  { x: 12649, y: 522, width: 172, height: 23, melt: true, meltDelay: 20 },
  { x: 13054, y: 546, width: 154, height: 30, moveAxis: "y", moveRange: 98, moveSpeed: 0.048, movePhase: 0.2 },
  { x: 13648, y: 520, width: 208, height: 21, conveyor: true, conveyorSpeed: -1.67 },
  { x: 13856, y: 520, width: 240, height: 20 },
  { x: 14283, y: 478, width: 110, height: 16, gated: true, gateId: "g74_1" },
  { x: 14429, y: 471, width: 212, height: 20 },
  { x: 15058, y: 393, width: 134, height: 20 },
  { x: 15599, y: 296, width: 198, height: 16, bounce: true, bounceStrength: -20 },
  { x: 15956, y: 182, width: 113, height: 18, conveyor: true, conveyorSpeed: -1.56 },
  { x: 16233, y: 182, width: 183, height: 30 },
  { x: 16625, y: 188, width: 425, height: 20 },
];

window.deadlyPlatforms = [
  { x: 3476, y: 614, width: 65, height: 16, moveAxis: "y", moveRange: 129, moveSpeed: 0.056, movePhase: 1.82 },
  { x: 10040, y: 252, width: 50, height: 18, moveAxis: "x", moveRange: 89, moveSpeed: 0.045, movePhase: 0.24 },
  { x: 6322, y: 289, width: 119, height: 20 },
  { x: 8662, y: 64, width: 168, height: 20 },
  { x: 15215, y: 397, width: 107, height: 20 },
];

window.spikes = [
  { x: 6141, y: 288, size: 52 },
  { x: 6193, y: 288, size: 51 },
  { x: 8458, y: 61, size: 62 },
  { x: 15077, y: 393, size: 62 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2222, y: 672, reached: false },
  { x: 4931, y: 486, reached: false },
  { x: 7786, y: 43, reached: false },
  { x: 9740, y: 71, reached: false },
  { x: 12199, y: 441, reached: false },
  { x: 14489, y: 441, reached: false },
  { x: 16325, y: 152, reached: false },
  { x: 16838, y: 158, reached: false }, // Final
];

window.forceZones = [
  { x: 2089, y: 612, width: 265, height: 90, axis: "x", force: -0.143 },
  { x: 9653, y: 11, width: 173, height: 90, axis: "x", force: 0.166 },
];

window.lasers = [
  { x: 844, y: 411, length: 103, width: 4, baseAngle: 3.83, sweepAngle: 0.48, period: 140, blinkPeriod: 0, onRatio: 0.5 },
  { x: 1287, y: 557, length: 160, width: 4, baseAngle: 0.84, sweepAngle: 0, period: 140, blinkPeriod: 93, onRatio: 0.5 },
  { x: 1689, y: 591, length: 153, width: 4, baseAngle: 0.7, sweepAngle: 0.92, period: 140, blinkPeriod: 0, onRatio: 0.5 },
  { x: 1988, y: 642, length: 190, width: 4, baseAngle: 5.8, sweepAngle: 0, period: 140, blinkPeriod: 93, onRatio: 0.5 },
  { x: 3567, y: 588, length: 244, width: 4, baseAngle: 2.27, sweepAngle: 0.72, period: 140, blinkPeriod: 0, onRatio: 0.5 },
  { x: 8705, y: 13, length: 177, width: 4, baseAngle: 1.01, sweepAngle: 0, period: 140, blinkPeriod: 93, onRatio: 0.5 },
  { x: 9147, y: -13, length: 105, width: 4, baseAngle: 4.82, sweepAngle: 1.06, period: 140, blinkPeriod: 0, onRatio: 0.5 },
  { x: 10607, y: 228, length: 248, width: 4, baseAngle: 4.23, sweepAngle: 1.03, period: 140, blinkPeriod: 0, onRatio: 0.5 },
  { x: 10981, y: 325, length: 115, width: 4, baseAngle: 3.56, sweepAngle: 0.92, period: 140, blinkPeriod: 0, onRatio: 0.5 },
  { x: 12894, y: 451, length: 251, width: 4, baseAngle: 0.87, sweepAngle: 0, period: 140, blinkPeriod: 93, onRatio: 0.5 },
  { x: 16168, y: 101, length: 176, width: 4, baseAngle: 5.46, sweepAngle: 0.8, period: 140, blinkPeriod: 0, onRatio: 0.5 },
];

window.fallers = [
  { x: 5769, y: 267, size: 39, triggerX: 5618 },
  { x: 13939, y: 426, size: 24, triggerX: 13796 },
  { x: 15276, y: 292, size: 35, triggerX: 15125 },
];

window.switches = [
  { x: 7363, y: 73, radius: 26, gateId: "g74_0" },
  { x: 14074, y: 490, radius: 26, gateId: "g74_1" },
];
