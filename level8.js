// Level 8 Data — "Level 8"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 8";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 476, y: 334, width: 60, height: 35, melt: true, meltDelay: 27 },
  { x: 798, y: 289, width: 174, height: 33 },
  { x: 1280, y: 259, width: 218, height: 43 },
  { x: 1701, y: 259, width: 229, height: 21 },
  { x: 2097, y: 239, width: 59, height: 29, melt: true, meltDelay: 27 },
  { x: 2319, y: 254, width: 227, height: 41 },
  { x: 2744, y: 269, width: 57, height: 25 },
  { x: 2979, y: 269, width: 369, height: 29 },
  { x: 3543, y: 323, width: 184, height: 27 },
  { x: 3931, y: 371, width: 192, height: 24, melt: true, meltDelay: 27 },
  { x: 4256, y: 429, width: 74, height: 36 },
  { x: 4519, y: 483, width: 162, height: 12 },
  { x: 4881, y: 483, width: 244, height: 39 },
  { x: 5284, y: 516, width: 160, height: 21 },
  { x: 5732, y: 514, width: 223, height: 28 },
  { x: 6090, y: 508, width: 227, height: 38 },
  { x: 6450, y: 508, width: 210, height: 13 },
  { x: 6864, y: 470, width: 127, height: 31, moveAxis: "x", moveRange: 60, moveSpeed: 0.028, movePhase: 0.79 },
  { x: 7182, y: 418, width: 165, height: 34 },
  { x: 7512, y: 372, width: 159, height: 40 },
  { x: 7867, y: 314, width: 172, height: 17, moveAxis: "y", moveRange: 50, moveSpeed: 0.025, movePhase: 2.75 },
  { x: 8194, y: 321, width: 409, height: 20 },
];

window.deadlyPlatforms = [
  { x: 996, y: 286, width: 142, height: 20 },
  { x: 2570, y: 249, width: 162, height: 20 },
  { x: 4711, y: 481, width: 131, height: 20 },
];

window.spikes = [
  { x: 833, y: 289, size: 21 },
  { x: 2758, y: 269, size: 31 },
  { x: 3607, y: 323, size: 29 },
  { x: 3636, y: 323, size: 25 },
  { x: 4278, y: 429, size: 13 },
  { x: 4545, y: 483, size: 32 },
  { x: 5326, y: 516, size: 20 },
  { x: 5346, y: 516, size: 17 },
  { x: 6132, y: 508, size: 16 },
  { x: 6148, y: 508, size: 13 },
  { x: 7533, y: 372, size: 20 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1816, y: 229, reached: false },
  { x: 3164, y: 239, reached: false },
  { x: 5003, y: 453, reached: false },
  { x: 6555, y: 478, reached: false },
  { x: 8399, y: 291, reached: false }, // Final
];
