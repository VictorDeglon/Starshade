// Level 54 Data — "Graven Skyway"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 54";
window.levelAccent = "#50e6ff";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 546, y: 435, width: 193, height: 23, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 985, y: 499, width: 94, height: 29, moveAxis: "x", moveRange: 74, moveSpeed: 0.059, movePhase: 4.95 },
  { x: 1331, y: 581, width: 165, height: 30, moveAxis: "y", moveRange: 82, moveSpeed: 0.054, movePhase: 5.56 },
  { x: 1660, y: 581, width: 335, height: 15 },
  { x: 2247, y: 662, width: 216, height: 27, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 2715, y: 739, width: 61, height: 22, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 3022, y: 791, width: 183, height: 23, melt: true, meltDelay: 20 },
  { x: 3369, y: 791, width: 287, height: 14 },
  { x: 3879, y: 789, width: 187, height: 17, bounce: true, bounceStrength: -18 },
  { x: 4506, y: 756, width: 66, height: 18, bounce: true, bounceStrength: -16 },
  { x: 4770, y: 701, width: 230, height: 14, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 5000, y: 701, width: 232, height: 20 },
  { x: 5414, y: 669, width: 113, height: 16, gated: true, gateId: "g54_0" },
  { x: 5570, y: 656, width: 203, height: 20 },
  { x: 6180, y: 551, width: 214, height: 17, melt: true, meltDelay: 20 },
  { x: 6569, y: 455, width: 222, height: 14, melt: true, meltDelay: 20 },
  { x: 7198, y: 357, width: 120, height: 18 },
  { x: 7729, y: 265, width: 199, height: 23 },
  { x: 7928, y: 265, width: 268, height: 20 },
  { x: 8399, y: 239, width: 109, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.37285714285714283 },
  { x: 8694, y: 216, width: 252, height: 20 },
  { x: 9383, y: 174, width: 158, height: 18 },
  { x: 9991, y: 163, width: 152, height: 22, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 10380, y: 196, width: 107, height: 23, conveyor: true, conveyorSpeed: 2.04 },
  { x: 10651, y: 196, width: 185, height: 30 },
  { x: 11088, y: 277, width: 234, height: 25, melt: true, meltDelay: 20 },
  { x: 11574, y: 373, width: 91, height: 18, bounce: true, bounceStrength: -19 },
  { x: 11917, y: 467, width: 206, height: 25, melt: true, meltDelay: 20 },
  { x: 12287, y: 467, width: 328, height: 27 },
  { x: 12867, y: 540, width: 229, height: 22, melt: true, meltDelay: 20 },
  { x: 13348, y: 617, width: 189, height: 30, conveyor: true, conveyorSpeed: 1.73 },
  { x: 13780, y: 655, width: 143, height: 18 },
  { x: 14373, y: 648, width: 178, height: 23, moveAxis: "y", moveRange: 115, moveSpeed: 0.06, movePhase: 4.07 },
  { x: 14753, y: 649, width: 382, height: 20 },
];

window.deadlyPlatforms = [
  { x: 1052, y: 445, width: 68, height: 24, moveAxis: "y", moveRange: 84, moveSpeed: 0.059, movePhase: 4.21 },
  { x: 1388, y: 638, width: 143, height: 15, moveAxis: "x", moveRange: 89, moveSpeed: 0.061, movePhase: 5.1 },
  { x: 14448, y: 598, width: 158, height: 19, moveAxis: "x", moveRange: 137, moveSpeed: 0.055, movePhase: 3.46 },
  { x: 7345, y: 354, width: 76, height: 20 },
  { x: 7953, y: 259, width: 118, height: 20 },
  { x: 9568, y: 169, width: 117, height: 20 },
  { x: 13949, y: 656, width: 110, height: 20 },
];

window.spikes = [
  { x: 7220, y: 357, size: 32 },
  { x: 7252, y: 357, size: 41 },
  { x: 7766, y: 265, size: 39 },
  { x: 7805, y: 265, size: 48 },
  { x: 7853, y: 265, size: 24 },
  { x: 7877, y: 265, size: 34 },
  { x: 9406, y: 174, size: 18 },
  { x: 9424, y: 174, size: 28 },
  { x: 13798, y: 655, size: 50 },
  { x: 13848, y: 655, size: 12 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1828, y: 551, reached: false },
  { x: 3513, y: 761, reached: false },
  { x: 5630, y: 626, reached: false },
  { x: 8754, y: 186, reached: false },
  { x: 10744, y: 166, reached: false },
  { x: 12451, y: 437, reached: false },
  { x: 14944, y: 619, reached: false }, // Final
];

window.forceZones = [
  { x: 3379, y: 701, width: 267, height: 90, axis: "x", force: 0.132 },
];

window.lasers = [
  { x: 2840, y: 697, length: 216, width: 4, baseAngle: 2.8, sweepAngle: 0, period: 152, blinkPeriod: 103, onRatio: 0.5 },
  { x: 4643, y: 676, length: 190, width: 4, baseAngle: 3.59, sweepAngle: 0, period: 152, blinkPeriod: 103, onRatio: 0.5 },
  { x: 13995, y: 582, length: 200, width: 4, baseAngle: 4.04, sweepAngle: 0.83, period: 152, blinkPeriod: 0, onRatio: 0.5 },
];

window.fallers = [
  { x: 2554, y: 547, size: 44, triggerX: 2360 },
  { x: 4162, y: 679, size: 23, triggerX: 3978 },
  { x: 10580, y: 108, size: 33, triggerX: 10440 },
  { x: 13635, y: 485, size: 37, triggerX: 13476 },
];

window.switches = [
  { x: 5210, y: 671, radius: 26, gateId: "g54_0" },
];
