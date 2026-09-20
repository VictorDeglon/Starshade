// Level 47 Data — "Starless Culvert"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 47";
window.levelAccent = "#b98fff";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 750, y: 372, width: 149, height: 26, moveAxis: "x", moveRange: 85, moveSpeed: 0.052, movePhase: 3.44 },
  { x: 1136, y: 398, width: 95, height: 26, conveyor: true, conveyorSpeed: -1.76 },
  { x: 1474, y: 447, width: 98, height: 28, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 1736, y: 447, width: 227, height: 23 },
  { x: 2215, y: 522, width: 47, height: 27, bounce: true, bounceStrength: -19 },
  { x: 2514, y: 604, width: 134, height: 16, moveAxis: "x", moveRange: 96, moveSpeed: 0.056, movePhase: 6.15 },
  { x: 2900, y: 684, width: 47, height: 26 },
  { x: 3199, y: 770, width: 199, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 3562, y: 770, width: 328, height: 20 },
  { x: 4127, y: 798, width: 103, height: 26, moveAxis: "y", moveRange: 107, moveSpeed: 0.057, movePhase: 2.74 },
  { x: 4463, y: 820, width: 51, height: 29 },
  { x: 4727, y: 791, width: 168, height: 22, melt: true, meltDelay: 20 },
  { x: 5059, y: 791, width: 272, height: 27 },
  { x: 5758, y: 727, width: 181, height: 25, bounce: true, bounceStrength: -16 },
  { x: 6356, y: 641, width: 115, height: 29, moveAxis: "x", moveRange: 124, moveSpeed: 0.041, movePhase: 3.41 },
  { x: 6646, y: 544, width: 183, height: 30, melt: true, meltDelay: 20 },
  { x: 7246, y: 462, width: 152, height: 17, moveAxis: "y", moveRange: 120, moveSpeed: 0.055, movePhase: 0.82 },
  { x: 7562, y: 462, width: 280, height: 20 },
  { x: 8030, y: 390, width: 89, height: 18, moveAxis: "x", moveRange: 83, moveSpeed: 0.052, movePhase: 4.05 },
  { x: 8559, y: 361, width: 190, height: 15, moveAxis: "x", moveRange: 86, moveSpeed: 0.047, movePhase: 4.13 },
  { x: 9195, y: 342, width: 45, height: 21 },
  { x: 9404, y: 342, width: 395, height: 15 },
  { x: 10045, y: 397, width: 141, height: 17, conveyor: true, conveyorSpeed: 1.17 },
  { x: 10432, y: 449, width: 224, height: 30 },
  { x: 10908, y: 523, width: 189, height: 23, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 11349, y: 617, width: 72, height: 30, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 11585, y: 617, width: 192, height: 24 },
  { x: 12029, y: 702, width: 90, height: 15, melt: true, meltDelay: 20 },
  { x: 12371, y: 772, width: 79, height: 22 },
  { x: 12628, y: 763, width: 391, height: 20 },
];

window.deadlyPlatforms = [
  { x: 664, y: 337, width: 123, height: 17, moveAxis: "y", moveRange: 97, moveSpeed: 0.052, movePhase: 3.25 },
  { x: 2468, y: 574, width: 86, height: 22, moveAxis: "y", moveRange: 118, moveSpeed: 0.06, movePhase: 5.2 },
  { x: 4182, y: 770, width: 65, height: 24, moveAxis: "x", moveRange: 85, moveSpeed: 0.057, movePhase: 2.85 },
  { x: 6293, y: 680, width: 94, height: 24, moveAxis: "y", moveRange: 112, moveSpeed: 0.043, movePhase: 2.89 },
  { x: 7297, y: 516, width: 121, height: 23, moveAxis: "x", moveRange: 144, moveSpeed: 0.062, movePhase: 3.1 },
  { x: 2975, y: 683, width: 60, height: 20 },
  { x: 4549, y: 813, width: 60, height: 20 },
  { x: 9267, y: 340, width: 60, height: 20 },
  { x: 10686, y: 440, width: 151, height: 20 },
  { x: 12475, y: 774, width: 70, height: 20 },
];

window.spikes = [
  { x: 2916, y: 684, size: 16 },
  { x: 4474, y: 820, size: 32 },
  { x: 12382, y: 772, size: 23 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1850, y: 417, reached: false },
  { x: 3726, y: 740, reached: false },
  { x: 5195, y: 761, reached: false },
  { x: 7702, y: 432, reached: false },
  { x: 9602, y: 312, reached: false },
  { x: 11681, y: 587, reached: false },
  { x: 12824, y: 733, reached: false }, // Final
];

window.forceZones = [
  { x: 5069, y: 701, width: 252, height: 90, axis: "x", force: 0.201 },
];

window.lasers = [
  { x: 4292, y: 739, length: 111, width: 4, baseAngle: 0.48, sweepAngle: 0, period: 156, blinkPeriod: 107, onRatio: 0.5 },
  { x: 6020, y: 643, length: 204, width: 4, baseAngle: 3.26, sweepAngle: 0.91, period: 156, blinkPeriod: 0, onRatio: 0.5 },
  { x: 8832, y: 311, length: 127, width: 4, baseAngle: 0.2, sweepAngle: 1, period: 156, blinkPeriod: 0, onRatio: 0.5 },
  { x: 12516, y: 690, length: 104, width: 4, baseAngle: 6.2, sweepAngle: 0, period: 156, blinkPeriod: 107, onRatio: 0.5 },
];

window.fallers = [
  { x: 2324, y: 439, size: 33, triggerX: 2158 },
  { x: 9320, y: 209, size: 40, triggerX: 9175 },
];
