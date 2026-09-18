// Level 7 Data — "Level 7"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 7";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 650, y: 333, width: 111, height: 15 },
  { x: 930, y: 297, width: 203, height: 42 },
  { x: 1294, y: 240, width: 65, height: 35 },
  { x: 1523, y: 240, width: 363, height: 33 },
  { x: 2047, y: 180, width: 72, height: 28, melt: true, meltDelay: 28 },
  { x: 2288, y: 141, width: 193, height: 40 },
  { x: 2654, y: 117, width: 199, height: 17, melt: true, meltDelay: 28 },
  { x: 3211, y: 93, width: 189, height: 29 },
  { x: 3564, y: 93, width: 345, height: 21 },
  { x: 4098, y: 112, width: 154, height: 28 },
  { x: 4444, y: 144, width: 82, height: 33, melt: true, meltDelay: 28 },
  { x: 4723, y: 194, width: 194, height: 18, ghost: true, ghostPeriod: 183, ghostOnRatio: 0.5956521739130435 },
  { x: 5114, y: 234, width: 53, height: 20, ghost: true, ghostPeriod: 183, ghostOnRatio: 0.5956521739130435 },
  { x: 5331, y: 234, width: 288, height: 24 },
  { x: 5811, y: 270, width: 68, height: 39 },
  { x: 6076, y: 316, width: 205, height: 26, melt: true, meltDelay: 28 },
  { x: 6473, y: 341, width: 185, height: 39 },
  { x: 6822, y: 341, width: 212, height: 30 },
  { x: 7215, y: 335, width: 234, height: 42, moveAxis: "y", moveRange: 74, moveSpeed: 0.029, movePhase: 3.66 },
  { x: 7622, y: 308, width: 62, height: 16, moveAxis: "y", moveRange: 45, moveSpeed: 0.034, movePhase: 4.54 },
  { x: 7883, y: 299, width: 415, height: 20 },
];

window.deadlyPlatforms = [
  { x: 2514, y: 150, width: 136, height: 20 },
  { x: 4289, y: 120, width: 137, height: 20 },
  { x: 6686, y: 347, width: 117, height: 20 },
];

window.spikes = [
  { x: 671, y: 333, size: 23 },
  { x: 995, y: 297, size: 31 },
  { x: 2341, y: 141, size: 15 },
  { x: 2356, y: 141, size: 22 },
  { x: 2378, y: 141, size: 30 },
  { x: 2408, y: 141, size: 29 },
  { x: 3275, y: 93, size: 25 },
  { x: 4153, y: 112, size: 17 },
  { x: 5825, y: 270, size: 13 },
  { x: 5838, y: 270, size: 12 },
  { x: 5850, y: 270, size: 16 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1705, y: 210, reached: false },
  { x: 3737, y: 63, reached: false },
  { x: 5475, y: 204, reached: false },
  { x: 6928, y: 311, reached: false },
  { x: 8091, y: 269, reached: false }, // Final
];
