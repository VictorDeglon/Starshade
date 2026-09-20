// Level 72 Data — "The Deep Cinder"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 72";
window.levelAccent = "#bfe6ff";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 740, y: 347, width: 123, height: 16, bounce: true, bounceStrength: -18 },
  { x: 1313, y: 346, width: 202, height: 27, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 1752, y: 374, width: 109, height: 14 },
  { x: 2107, y: 430, width: 145, height: 18, moveAxis: "x", moveRange: 94, moveSpeed: 0.051, movePhase: 3.31 },
  { x: 2416, y: 430, width: 379, height: 29 },
  { x: 3047, y: 539, width: 192, height: 27, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 3491, y: 630, width: 149, height: 24, moveAxis: "x", moveRange: 98, moveSpeed: 0.063, movePhase: 1.3 },
  { x: 3892, y: 740, width: 175, height: 27, moveAxis: "x", moveRange: 119, moveSpeed: 0.059, movePhase: 0.84 },
  { x: 4319, y: 815, width: 80, height: 28, melt: true, meltDelay: 20 },
  { x: 4563, y: 815, width: 308, height: 26 },
  { x: 5108, y: 849, width: 155, height: 26, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 5480, y: 831, width: 95, height: 21, bounce: true, bounceStrength: -17 },
  { x: 6015, y: 804, width: 81, height: 17 },
  { x: 6260, y: 804, width: 299, height: 18 },
  { x: 6970, y: 709, width: 79, height: 25, moveAxis: "x", moveRange: 95, moveSpeed: 0.055, movePhase: 2.99 },
  { x: 7227, y: 620, width: 80, height: 30 },
  { x: 7705, y: 499, width: 45, height: 29, moveAxis: "x", moveRange: 90, moveSpeed: 0.063, movePhase: 2.74 },
  { x: 7919, y: 396, width: 103, height: 20, bounce: true, bounceStrength: -17 },
  { x: 8186, y: 396, width: 341, height: 29 },
  { x: 8954, y: 334, width: 214, height: 26 },
  { x: 9614, y: 313, width: 132, height: 15 },
  { x: 9973, y: 314, width: 217, height: 24, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 10433, y: 353, width: 150, height: 21, bounce: true, bounceStrength: -17 },
  { x: 10583, y: 353, width: 242, height: 20 },
  { x: 11009, y: 332, width: 111, height: 16, gated: true, gateId: "g72_0" },
  { x: 11170, y: 337, width: 206, height: 20 },
  { x: 11628, y: 432, width: 225, height: 14, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 12105, y: 540, width: 81, height: 16, melt: true, meltDelay: 20 },
  { x: 12438, y: 653, width: 65, height: 21, melt: true, meltDelay: 20 },
  { x: 12667, y: 653, width: 205, height: 17 },
  { x: 13124, y: 737, width: 121, height: 27, moveAxis: "x", moveRange: 111, moveSpeed: 0.047, movePhase: 3.03 },
  { x: 13491, y: 793, width: 185, height: 19, melt: true, meltDelay: 20 },
  { x: 13919, y: 833, width: 210, height: 25, moveAxis: "x", moveRange: 97, moveSpeed: 0.058, movePhase: 5.54 },
  { x: 14328, y: 829, width: 414, height: 20 },
];

window.deadlyPlatforms = [
  { x: 2031, y: 390, width: 83, height: 24, moveAxis: "y", moveRange: 114, moveSpeed: 0.052, movePhase: 5.17 },
  { x: 3554, y: 576, width: 121, height: 16, moveAxis: "y", moveRange: 120, moveSpeed: 0.056, movePhase: 4.8 },
  { x: 7026, y: 768, width: 62, height: 19, moveAxis: "y", moveRange: 76, moveSpeed: 0.063, movePhase: 4.75 },
  { x: 7756, y: 547, width: 50, height: 23, moveAxis: "y", moveRange: 92, moveSpeed: 0.059, movePhase: 3.55 },
  { x: 13042, y: 775, width: 78, height: 15, moveAxis: "y", moveRange: 128, moveSpeed: 0.059, movePhase: 3.36 },
  { x: 1894, y: 372, width: 66, height: 20 },
  { x: 6127, y: 810, width: 69, height: 20 },
  { x: 7341, y: 612, width: 60, height: 20 },
  { x: 9189, y: 325, width: 188, height: 20 },
  { x: 9785, y: 317, width: 114, height: 20 },
];

window.spikes = [
  { x: 1783, y: 374, size: 20 },
  { x: 6038, y: 804, size: 24 },
  { x: 7245, y: 620, size: 52 },
  { x: 8984, y: 334, size: 57 },
  { x: 9657, y: 313, size: 35 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2606, y: 400, reached: false },
  { x: 4717, y: 785, reached: false },
  { x: 6410, y: 774, reached: false },
  { x: 8357, y: 366, reached: false },
  { x: 11230, y: 307, reached: false },
  { x: 12770, y: 623, reached: false },
  { x: 14535, y: 799, reached: false }, // Final
];

window.forceZones = [
  { x: 6270, y: 714, width: 279, height: 90, axis: "x", force: 0.15 },
  { x: 12677, y: 563, width: 185, height: 90, axis: "x", force: -0.16 },
];

window.lasers = [
  { x: 960, y: 265, length: 200, width: 4, baseAngle: 2.3, sweepAngle: 0.76, period: 141, blinkPeriod: 0, onRatio: 0.5 },
  { x: 2313, y: 367, length: 129, width: 4, baseAngle: 5.7, sweepAngle: 0, period: 141, blinkPeriod: 94, onRatio: 0.5 },
  { x: 3316, y: 448, length: 245, width: 4, baseAngle: 4.6, sweepAngle: 0, period: 141, blinkPeriod: 94, onRatio: 0.5 },
  { x: 3708, y: 586, length: 137, width: 4, baseAngle: 2.99, sweepAngle: 0, period: 141, blinkPeriod: 94, onRatio: 0.5 },
  { x: 4166, y: 670, length: 223, width: 4, baseAngle: 0.42, sweepAngle: 1.05, period: 141, blinkPeriod: 0, onRatio: 0.5 },
  { x: 5346, y: 753, length: 128, width: 4, baseAngle: 2.73, sweepAngle: 0, period: 141, blinkPeriod: 94, onRatio: 0.5 },
  { x: 5670, y: 742, length: 208, width: 4, baseAngle: 3, sweepAngle: 0, period: 141, blinkPeriod: 94, onRatio: 0.5 },
  { x: 7370, y: 559, length: 231, width: 4, baseAngle: 0.58, sweepAngle: 0.75, period: 141, blinkPeriod: 0, onRatio: 0.5 },
  { x: 10651, y: 305, length: 221, width: 4, baseAngle: 3.37, sweepAngle: 0.92, period: 141, blinkPeriod: 0, onRatio: 0.5 },
  { x: 12574, y: 590, length: 178, width: 4, baseAngle: 1.76, sweepAngle: 0.71, period: 141, blinkPeriod: 0, onRatio: 0.5 },
  { x: 13767, y: 698, length: 206, width: 4, baseAngle: 6.15, sweepAngle: 0, period: 141, blinkPeriod: 94, onRatio: 0.5 },
];

window.fallers = [
  { x: 7828, y: 375, size: 37, triggerX: 7641 },
  { x: 8093, y: 310, size: 44, triggerX: 7891 },
  { x: 14208, y: 717, size: 32, triggerX: 14073 },
];

window.switches = [
  { x: 10803, y: 323, radius: 26, gateId: "g72_0" },
];
