// Level 55 Data — "The Hollow Ascent"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 55";
window.levelAccent = "#50e6ff";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 552, y: 488, width: 186, height: 30, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 990, y: 595, width: 86, height: 24, conveyor: true, conveyorSpeed: 1.16 },
  { x: 1328, y: 679, width: 106, height: 15, moveAxis: "x", moveRange: 130, moveSpeed: 0.06, movePhase: 0.98 },
  { x: 1598, y: 679, width: 203, height: 25 },
  { x: 2044, y: 718, width: 152, height: 22, melt: true, meltDelay: 20 },
  { x: 2423, y: 718, width: 54, height: 29 },
  { x: 2690, y: 692, width: 186, height: 18, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 2876, y: 692, width: 279, height: 20 },
  { x: 3358, y: 674, width: 109, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.3708163265306122 },
  { x: 3655, y: 651, width: 276, height: 20 },
  { x: 4109, y: 563, width: 176, height: 25, melt: true, meltDelay: 20 },
  { x: 4692, y: 461, width: 172, height: 30, moveAxis: "x", moveRange: 120, moveSpeed: 0.052, movePhase: 0.85 },
  { x: 5281, y: 378, width: 193, height: 24, moveAxis: "y", moveRange: 131, moveSpeed: 0.057, movePhase: 3.39 },
  { x: 5881, y: 276, width: 102, height: 30, melt: true, meltDelay: 20 },
  { x: 5983, y: 276, width: 256, height: 20 },
  { x: 6419, y: 244, width: 107, height: 16, gated: true, gateId: "g55_0" },
  { x: 6580, y: 244, width: 256, height: 20 },
  { x: 7040, y: 199, width: 68, height: 27, melt: true, meltDelay: 20 },
  { x: 7312, y: 155, width: 91, height: 19 },
  { x: 7849, y: 141, width: 46, height: 18, bounce: true, bounceStrength: -20 },
  { x: 8128, y: 162, width: 137, height: 20, moveAxis: "y", moveRange: 79, moveSpeed: 0.055, movePhase: 3.49 },
  { x: 8429, y: 162, width: 292, height: 29 },
  { x: 8973, y: 234, width: 49, height: 16, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 9274, y: 324, width: 116, height: 22, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 9642, y: 426, width: 184, height: 17, bounce: true, bounceStrength: -16 },
  { x: 10078, y: 526, width: 46, height: 16, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 10288, y: 526, width: 203, height: 19 },
  { x: 10734, y: 574, width: 139, height: 27, moveAxis: "x", moveRange: 121, moveSpeed: 0.043, movePhase: 4.13 },
  { x: 11110, y: 604, width: 54, height: 23, moveAxis: "x", moveRange: 92, moveSpeed: 0.059, movePhase: 3.11 },
  { x: 11387, y: 603, width: 105, height: 19, moveAxis: "y", moveRange: 104, moveSpeed: 0.055, movePhase: 2.77 },
  { x: 11929, y: 568, width: 119, height: 22, melt: true, meltDelay: 20 },
  { x: 12212, y: 568, width: 258, height: 18 },
  { x: 12881, y: 480, width: 126, height: 28, melt: true, meltDelay: 20 },
  { x: 13173, y: 484, width: 431, height: 20 },
];

window.deadlyPlatforms = [
  { x: 4642, y: 403, width: 136, height: 19, moveAxis: "y", moveRange: 90, moveSpeed: 0.054, movePhase: 1.05 },
  { x: 10780, y: 534, width: 78, height: 21, moveAxis: "y", moveRange: 127, moveSpeed: 0.049, movePhase: 6.14 },
  { x: 11462, y: 658, width: 61, height: 17, moveAxis: "x", moveRange: 124, moveSpeed: 0.056, movePhase: 0.82 },
  { x: 2507, y: 718, width: 60, height: 20 },
  { x: 7441, y: 149, width: 80, height: 20 },
];

window.spikes = [
  { x: 2442, y: 718, size: 26 },
  { x: 7324, y: 155, size: 33 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1700, y: 649, reached: false },
  { x: 3715, y: 621, reached: false },
  { x: 6640, y: 214, reached: false },
  { x: 8575, y: 132, reached: false },
  { x: 10390, y: 496, reached: false },
  { x: 12341, y: 538, reached: false },
  { x: 13389, y: 454, reached: false }, // Final
];

window.lasers = [
  { x: 6072, y: 190, length: 210, width: 4, baseAngle: 1.32, sweepAngle: 0, period: 151, blinkPeriod: 103, onRatio: 0.5 },
  { x: 8354, y: 72, length: 201, width: 4, baseAngle: 2.92, sweepAngle: 0.91, period: 151, blinkPeriod: 0, onRatio: 0.5 },
];

window.fallers = [
  { x: 5551, y: 260, size: 35, triggerX: 5403 },
  { x: 7206, y: 83, size: 39, triggerX: 7075 },
  { x: 7990, y: 39, size: 48, triggerX: 7804 },
];

window.switches = [
  { x: 6217, y: 246, radius: 26, gateId: "g55_0" },
];
