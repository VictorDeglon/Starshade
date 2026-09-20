// Level 55 Data — "The Hollow Ascent"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 55";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 552, y: 488, width: 186, height: 30, moveAxis: "x", moveRange: 93, moveSpeed: 0.05, movePhase: 1.8 },
  { x: 990, y: 595, width: 86, height: 24, conveyor: true, conveyorSpeed: 1.16 },
  { x: 1328, y: 679, width: 106, height: 15, moveAxis: "x", moveRange: 130, moveSpeed: 0.06, movePhase: 0.98 },
  { x: 1598, y: 679, width: 199, height: 15 },
  { x: 2030, y: 699, width: 155, height: 23, melt: true, meltDelay: 20 },
  { x: 2635, y: 693, width: 148, height: 14 },
  { x: 3223, y: 660, width: 156, height: 26 },
  { x: 3543, y: 660, width: 326, height: 21 },
  { x: 4044, y: 566, width: 208, height: 29, melt: true, meltDelay: 20 },
  { x: 4421, y: 464, width: 176, height: 25, moveAxis: "x", moveRange: 120, moveSpeed: 0.052, movePhase: 0.85 },
  { x: 4999, y: 357, width: 172, height: 30, moveAxis: "y", moveRange: 131, moveSpeed: 0.057, movePhase: 3.39 },
  { x: 5171, y: 357, width: 286, height: 20 },
  { x: 5665, y: 335, width: 106, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.3708163265306122 },
  { x: 5951, y: 319, width: 277, height: 20 },
  { x: 6645, y: 237, width: 160, height: 23, melt: true, meltDelay: 20 },
  { x: 6999, y: 175, width: 156, height: 27, melt: true, meltDelay: 20 },
  { x: 7592, y: 136, width: 196, height: 19 },
  { x: 8234, y: 124, width: 101, height: 15, bounce: true, bounceStrength: -20 },
  { x: 8499, y: 124, width: 238, height: 29 },
  { x: 8980, y: 173, width: 120, height: 25, moveAxis: "y", moveRange: 79, moveSpeed: 0.055, movePhase: 3.49 },
  { x: 9352, y: 238, width: 217, height: 22, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 9821, y: 343, width: 73, height: 18, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 10146, y: 451, width: 142, height: 23, bounce: true, bounceStrength: -16 },
  { x: 10452, y: 451, width: 227, height: 24 },
  { x: 10931, y: 530, width: 68, height: 16, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 11245, y: 582, width: 111, height: 15, moveAxis: "x", moveRange: 121, moveSpeed: 0.043, movePhase: 4.13 },
  { x: 11593, y: 611, width: 195, height: 26, moveAxis: "x", moveRange: 92, moveSpeed: 0.059, movePhase: 3.11 },
  { x: 12238, y: 601, width: 148, height: 23, moveAxis: "y", moveRange: 104, moveSpeed: 0.055, movePhase: 2.77 },
  { x: 12550, y: 601, width: 251, height: 26 },
  { x: 13238, y: 559, width: 134, height: 22, melt: true, meltDelay: 20 },
  { x: 13793, y: 487, width: 99, height: 18, melt: true, meltDelay: 20 },
  { x: 14065, y: 489, width: 430, height: 20 },
];

window.deadlyPlatforms = [
  { x: 1278, y: 621, width: 84, height: 19, moveAxis: "y", moveRange: 98, moveSpeed: 0.062, movePhase: 1.05 },
  { x: 9026, y: 133, width: 67, height: 21, moveAxis: "x", moveRange: 83, moveSpeed: 0.062, movePhase: 6.14 },
  { x: 11668, y: 666, width: 113, height: 17, moveAxis: "y", moveRange: 110, moveSpeed: 0.06, movePhase: 0.82 },
  { x: 2810, y: 694, width: 103, height: 20 },
  { x: 7822, y: 133, width: 145, height: 20 },
];

window.spikes = [
  { x: 2687, y: 693, size: 26 },
  { x: 3244, y: 660, size: 33 },
  { x: 3277, y: 660, size: 31 },
  { x: 3308, y: 660, size: 54 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1698, y: 649, reached: false },
  { x: 3706, y: 630, reached: false },
  { x: 6011, y: 289, reached: false },
  { x: 8618, y: 94, reached: false },
  { x: 10566, y: 421, reached: false },
  { x: 12676, y: 571, reached: false },
  { x: 14280, y: 459, reached: false }, // Final
];
