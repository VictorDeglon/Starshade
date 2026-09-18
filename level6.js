// Level 6 Data — "Level 6"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 6";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 448, y: 389, width: 72, height: 16, melt: true, meltDelay: 28 },
  { x: 651, y: 380, width: 64, height: 22 },
  { x: 989, y: 356, width: 52, height: 16, melt: true, meltDelay: 28 },
  { x: 1171, y: 356, width: 397, height: 41 },
  { x: 1753, y: 313, width: 193, height: 26 },
  { x: 2096, y: 265, width: 65, height: 17, melt: true, meltDelay: 28 },
  { x: 2329, y: 215, width: 126, height: 13 },
  { x: 2590, y: 215, width: 274, height: 40 },
  { x: 3035, y: 179, width: 178, height: 38, melt: true, meltDelay: 28 },
  { x: 3512, y: 153, width: 143, height: 30, melt: true, meltDelay: 28 },
  { x: 3842, y: 133, width: 166, height: 14, melt: true, meltDelay: 28 },
  { x: 4169, y: 133, width: 314, height: 16 },
  { x: 4674, y: 143, width: 170, height: 22 },
  { x: 4983, y: 182, width: 162, height: 23 },
  { x: 5287, y: 215, width: 50, height: 15 },
  { x: 5515, y: 215, width: 215, height: 23 },
  { x: 5876, y: 273, width: 135, height: 23 },
  { x: 6159, y: 313, width: 100, height: 20 },
  { x: 6398, y: 351, width: 173, height: 29 },
  { x: 6702, y: 351, width: 340, height: 36 },
  { x: 7220, y: 352, width: 431, height: 20 },
];

window.deadlyPlatforms = [
  { x: 2490, y: 212, width: 112, height: 20 },
  { x: 5166, y: 190, width: 120, height: 20 },
  { x: 6280, y: 319, width: 64, height: 20 },
];

window.spikes = [
  { x: 4705, y: 143, size: 26 },
  { x: 4731, y: 143, size: 30 },
  { x: 4761, y: 143, size: 13 },
  { x: 4774, y: 143, size: 13 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1370, y: 326, reached: false },
  { x: 2727, y: 185, reached: false },
  { x: 4326, y: 103, reached: false },
  { x: 5623, y: 185, reached: false },
  { x: 6872, y: 321, reached: false },
  { x: 7436, y: 322, reached: false }, // Final
];
