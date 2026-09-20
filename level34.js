// Level 34 Data — "The Cinder Steps"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 34";
window.levelAccent = "#ff9838";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 502, y: 340, width: 86, height: 17 },
  { x: 1026, y: 333, width: 72, height: 19 },
  { x: 1315, y: 328, width: 217, height: 16 },
  { x: 1696, y: 328, width: 379, height: 28 },
  { x: 2321, y: 395, width: 141, height: 27 },
  { x: 2708, y: 480, width: 155, height: 22, moveAxis: "x", moveRange: 76, moveSpeed: 0.044, movePhase: 3.01 },
  { x: 3109, y: 570, width: 108, height: 26 },
  { x: 3463, y: 652, width: 52, height: 23, ghost: true, ghostPeriod: 125, ghostOnRatio: 0.4170918367346939 },
  { x: 3679, y: 652, width: 331, height: 25 },
  { x: 4256, y: 719, width: 213, height: 26, melt: true, meltDelay: 21 },
  { x: 4700, y: 753, width: 71, height: 15, moveAxis: "x", moveRange: 65, moveSpeed: 0.041, movePhase: 3.66 },
  { x: 5002, y: 782, width: 195, height: 20, ghost: true, ghostPeriod: 125, ghostOnRatio: 0.4170918367346939 },
  { x: 5361, y: 782, width: 375, height: 22 },
  { x: 5948, y: 766, width: 89, height: 15 },
  { x: 6457, y: 718, width: 188, height: 22 },
  { x: 6825, y: 635, width: 109, height: 27 },
  { x: 7098, y: 635, width: 341, height: 18 },
  { x: 7609, y: 536, width: 170, height: 27, conveyor: true, conveyorSpeed: -2.08 },
  { x: 7962, y: 464, width: 153, height: 29 },
  { x: 8525, y: 391, width: 215, height: 27, melt: true, meltDelay: 21 },
  { x: 8933, y: 333, width: 232, height: 16 },
  { x: 9329, y: 333, width: 274, height: 24 },
  { x: 9824, y: 335, width: 151, height: 14, ghost: true, ghostPeriod: 125, ghostOnRatio: 0.4170918367346939 },
  { x: 10206, y: 371, width: 171, height: 24, moveAxis: "x", moveRange: 77, moveSpeed: 0.052, movePhase: 4.94 },
  { x: 10617, y: 427, width: 76, height: 19, ghost: true, ghostPeriod: 125, ghostOnRatio: 0.4170918367346939 },
  { x: 10939, y: 510, width: 202, height: 21, ghost: true, ghostPeriod: 125, ghostOnRatio: 0.4170918367346939 },
  { x: 11305, y: 510, width: 201, height: 21 },
  { x: 11701, y: 522, width: 390, height: 20 },
];

window.deadlyPlatforms = [
  { x: 621, y: 346, width: 71, height: 20 },
  { x: 1120, y: 332, width: 64, height: 20 },
  { x: 1565, y: 330, width: 184, height: 20 },
  { x: 3253, y: 575, width: 60, height: 20 },
  { x: 6680, y: 724, width: 137, height: 20 },
  { x: 9195, y: 340, width: 124, height: 20 },
];

window.spikes = [
  { x: 522, y: 340, size: 17 },
  { x: 2350, y: 395, size: 18 },
  { x: 2368, y: 395, size: 49 },
  { x: 2417, y: 395, size: 18 },
  { x: 3130, y: 570, size: 45 },
  { x: 5964, y: 766, size: 35 },
  { x: 5999, y: 766, size: 22 },
  { x: 8971, y: 333, size: 32 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1886, y: 298, reached: false },
  { x: 3845, y: 622, reached: false },
  { x: 5549, y: 752, reached: false },
  { x: 7269, y: 605, reached: false },
  { x: 9466, y: 303, reached: false },
  { x: 11406, y: 480, reached: false },
  { x: 11896, y: 492, reached: false }, // Final
];
