// Level 53 Data — "The Ember Maze"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 53";
window.levelAccent = "#50e6ff";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 737, y: 336, width: 56, height: 25, melt: true, meltDelay: 20 },
  { x: 1239, y: 321, width: 95, height: 20, bounce: true, bounceStrength: -16 },
  { x: 1567, y: 341, width: 185, height: 23, conveyor: true, conveyorSpeed: -1.52 },
  { x: 1916, y: 341, width: 222, height: 22 },
  { x: 2390, y: 425, width: 138, height: 27, melt: true, meltDelay: 20 },
  { x: 2780, y: 523, width: 121, height: 22, conveyor: true, conveyorSpeed: 1.99 },
  { x: 3153, y: 632, width: 178, height: 16 },
  { x: 3331, y: 632, width: 276, height: 20 },
  { x: 3799, y: 608, width: 96, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.3748979591836734 },
  { x: 4085, y: 596, width: 272, height: 20 },
  { x: 4609, y: 668, width: 116, height: 29, bounce: true, bounceStrength: -19 },
  { x: 4971, y: 729, width: 127, height: 27, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 5335, y: 756, width: 61, height: 30, melt: true, meltDelay: 20 },
  { x: 5623, y: 766, width: 50, height: 30, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 5837, y: 766, width: 350, height: 18 },
  { x: 6395, y: 727, width: 196, height: 25, bounce: true, bounceStrength: -17 },
  { x: 7008, y: 647, width: 101, height: 29 },
  { x: 7520, y: 555, width: 113, height: 22 },
  { x: 7817, y: 472, width: 203, height: 23, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 8020, y: 472, width: 254, height: 20 },
  { x: 8468, y: 455, width: 104, height: 16, gated: true, gateId: "g53_0" },
  { x: 8619, y: 449, width: 247, height: 20 },
  { x: 9050, y: 367, width: 206, height: 24, melt: true, meltDelay: 20 },
  { x: 9677, y: 298, width: 72, height: 24, conveyor: true, conveyorSpeed: 1.98 },
  { x: 10180, y: 249, width: 218, height: 27 },
  { x: 10562, y: 249, width: 196, height: 22 },
  { x: 10991, y: 263, width: 74, height: 29, conveyor: true, conveyorSpeed: -1.77 },
  { x: 11311, y: 319, width: 167, height: 27, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 11724, y: 383, width: 110, height: 19, bounce: true, bounceStrength: -17 },
  { x: 12086, y: 464, width: 191, height: 18, melt: true, meltDelay: 20 },
  { x: 12441, y: 464, width: 324, height: 30 },
  { x: 13017, y: 567, width: 180, height: 22, melt: true, meltDelay: 20 },
  { x: 13449, y: 647, width: 88, height: 18, conveyor: true, conveyorSpeed: -1.24 },
  { x: 13718, y: 639, width: 438, height: 20 },
];

window.deadlyPlatforms = [
  { x: 3358, y: 641, width: 146, height: 20 },
  { x: 7135, y: 642, width: 72, height: 20 },
  { x: 7661, y: 555, width: 89, height: 20 },
  { x: 10427, y: 251, width: 110, height: 20 },
];

window.spikes = [
  { x: 3175, y: 632, size: 29 },
  { x: 7020, y: 647, size: 22 },
  { x: 7042, y: 647, size: 45 },
  { x: 7534, y: 555, size: 49 },
  { x: 7583, y: 555, size: 12 },
  { x: 10244, y: 249, size: 20 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2027, y: 311, reached: false },
  { x: 4145, y: 566, reached: false },
  { x: 6012, y: 736, reached: false },
  { x: 8679, y: 419, reached: false },
  { x: 10660, y: 219, reached: false },
  { x: 12603, y: 434, reached: false },
  { x: 13937, y: 609, reached: false }, // Final
];

window.lasers = [
  { x: 7189, y: 550, length: 153, width: 4, baseAngle: 1.47, sweepAngle: 0.8, period: 152, blinkPeriod: 0, onRatio: 0.5 },
  { x: 8105, y: 397, length: 114, width: 4, baseAngle: 4.08, sweepAngle: 0, period: 152, blinkPeriod: 104, onRatio: 0.5 },
  { x: 13623, y: 599, length: 246, width: 4, baseAngle: 4.62, sweepAngle: 0.83, period: 152, blinkPeriod: 0, onRatio: 0.5 },
];

window.fallers = [
  { x: 2624, y: 319, size: 25, triggerX: 2464 },
  { x: 3429, y: 508, size: 43, triggerX: 3275 },
  { x: 5745, y: 649, size: 44, triggerX: 5555 },
];

window.switches = [
  { x: 8252, y: 442, radius: 26, gateId: "g53_0" },
];
