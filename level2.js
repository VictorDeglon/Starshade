// Level 2 Data — "Level 2"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 2";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 451, y: 333, width: 157, height: 38, melt: true, meltDelay: 30 },
  { x: 881, y: 299, width: 211, height: 33, moveAxis: "x", moveRange: 41, moveSpeed: 0.025, movePhase: 0.99 },
  { x: 1278, y: 282, width: 99, height: 28 },
  { x: 1549, y: 282, width: 301, height: 32 },
  { x: 2134, y: 281, width: 141, height: 37 },
  { x: 2470, y: 287, width: 63, height: 45, moveAxis: "x", moveRange: 58, moveSpeed: 0.023, movePhase: 5.79 },
  { x: 2719, y: 324, width: 177, height: 28, melt: true, meltDelay: 30 },
  { x: 3048, y: 348, width: 136, height: 17, ghost: true, ghostPeriod: 200, ghostOnRatio: 0.65 },
  { x: 3323, y: 348, width: 270, height: 43 },
  { x: 3766, y: 401, width: 148, height: 18, moveAxis: "x", moveRange: 62, moveSpeed: 0.02, movePhase: 2.37 },
  { x: 4120, y: 439, width: 55, height: 17 },
  { x: 4376, y: 468, width: 73, height: 19 },
  { x: 4665, y: 498, width: 183, height: 17 },
  { x: 5058, y: 498, width: 222, height: 36 },
  { x: 5479, y: 487, width: 166, height: 19 },
  { x: 5802, y: 473, width: 207, height: 15 },
  { x: 6146, y: 462, width: 184, height: 22 },
  { x: 6460, y: 462, width: 191, height: 16 },
  { x: 6814, y: 448, width: 405, height: 20 },
];

window.deadlyPlatforms = [
  { x: 2307, y: 272, width: 123, height: 20 },
  { x: 4886, y: 505, width: 138, height: 20 },
  { x: 5668, y: 486, width: 93, height: 20 },
];

window.spikes = [
  { x: 2180, y: 281, size: 18 },
  { x: 4130, y: 439, size: 19 },
  { x: 4149, y: 439, size: 14 },
  { x: 4394, y: 468, size: 18 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1700, y: 252, reached: false },
  { x: 3458, y: 318, reached: false },
  { x: 5169, y: 468, reached: false },
  { x: 6556, y: 432, reached: false },
  { x: 7017, y: 418, reached: false }, // Final
];
