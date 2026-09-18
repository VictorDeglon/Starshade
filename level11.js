// Level 11 Data — "Level 11"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 11";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 510, y: 437, width: 171, height: 33 },
  { x: 891, y: 489, width: 142, height: 13 },
  { x: 1235, y: 523, width: 144, height: 32, melt: true, meltDelay: 26 },
  { x: 1581, y: 560, width: 67, height: 23 },
  { x: 1812, y: 560, width: 200, height: 23 },
  { x: 2395, y: 556, width: 191, height: 23 },
  { x: 2768, y: 530, width: 231, height: 16 },
  { x: 3172, y: 483, width: 218, height: 30 },
  { x: 3554, y: 483, width: 307, height: 28 },
  { x: 4034, y: 438, width: 70, height: 29, moveAxis: "y", moveRange: 54, moveSpeed: 0.037, movePhase: 0.89 },
  { x: 4269, y: 373, width: 61, height: 12 },
  { x: 4702, y: 328, width: 175, height: 39 },
  { x: 5041, y: 328, width: 388, height: 36 },
  { x: 5809, y: 307, width: 178, height: 45, moveAxis: "y", moveRange: 60, moveSpeed: 0.04, movePhase: 2.34 },
  { x: 6169, y: 280, width: 102, height: 12 },
  { x: 6464, y: 290, width: 141, height: 31 },
  { x: 6769, y: 290, width: 252, height: 26 },
  { x: 7228, y: 333, width: 154, height: 36 },
  { x: 7592, y: 394, width: 178, height: 35, ghost: true, ghostPeriod: 169, ghostOnRatio: 0.5521739130434783 },
  { x: 7985, y: 463, width: 144, height: 15, ghost: true, ghostPeriod: 169, ghostOnRatio: 0.5521739130434783 },
  { x: 8293, y: 463, width: 264, height: 35 },
  { x: 8772, y: 532, width: 196, height: 27, ghost: true, ghostPeriod: 169, ghostOnRatio: 0.5521739130434783 },
  { x: 9163, y: 526, width: 410, height: 20 },
];

window.deadlyPlatforms = [
  { x: 718, y: 430, width: 149, height: 20 },
  { x: 1682, y: 559, width: 60, height: 20 },
  { x: 3429, y: 484, width: 176, height: 20 },
  { x: 4363, y: 374, width: 60, height: 20 },
  { x: 4897, y: 323, width: 131, height: 20 },
  { x: 6629, y: 299, width: 87, height: 20 },
];

window.spikes = [
  { x: 561, y: 437, size: 13 },
  { x: 940, y: 489, size: 27 },
  { x: 1597, y: 560, size: 21 },
  { x: 2447, y: 556, size: 20 },
  { x: 2814, y: 530, size: 13 },
  { x: 2827, y: 530, size: 34 },
  { x: 2861, y: 530, size: 24 },
  { x: 2885, y: 530, size: 19 },
  { x: 4731, y: 328, size: 16 },
  { x: 6493, y: 290, size: 31 },
  { x: 7258, y: 333, size: 21 },
  { x: 7279, y: 333, size: 17 },
  { x: 7296, y: 333, size: 36 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1912, y: 530, reached: false },
  { x: 3708, y: 453, reached: false },
  { x: 5235, y: 298, reached: false },
  { x: 6895, y: 260, reached: false },
  { x: 8425, y: 433, reached: false },
  { x: 9368, y: 496, reached: false }, // Final
];
