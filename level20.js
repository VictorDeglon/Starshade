// Level 20 Data — "Void Marrow"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 20";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 610, y: 306, width: 222, height: 13 },
  { x: 1102, y: 238, width: 139, height: 44, melt: true, meltDelay: 22 },
  { x: 1535, y: 169, width: 63, height: 30 },
  { x: 1905, y: 88, width: 200, height: 39 },
  { x: 2300, y: 88, width: 311, height: 21 },
  { x: 2883, y: 42, width: 147, height: 12 },
  { x: 3204, y: 27, width: 179, height: 39 },
  { x: 3540, y: 45, width: 105, height: 32, moveAxis: "y", moveRange: 106, moveSpeed: 0.033, movePhase: 0.26 },
  { x: 3821, y: 73, width: 197, height: 17, moveAxis: "x", moveRange: 74, moveSpeed: 0.036, movePhase: 3.36 },
  { x: 4018, y: 73, width: 285, height: 20 },
  { x: 4503, y: 50, width: 108, height: 20, ghost: true, ghostPeriod: 135, ghostOnRatio: 0.4434782608695652 },
  { x: 4798, y: 33, width: 265, height: 20 },
  { x: 5246, y: 98, width: 150, height: 15, melt: true, meltDelay: 22 },
  { x: 5590, y: 175, width: 221, height: 43, ghost: true, ghostPeriod: 137, ghostOnRatio: 0.45434782608695656 },
  { x: 6015, y: 258, width: 104, height: 29, moveAxis: "y", moveRange: 98, moveSpeed: 0.042, movePhase: 0.81 },
  { x: 6289, y: 340, width: 56, height: 22, melt: true, meltDelay: 22 },
  { x: 6475, y: 340, width: 351, height: 37 },
  { x: 6959, y: 386, width: 107, height: 12, melt: true, meltDelay: 22 },
  { x: 7214, y: 394, width: 57, height: 17 },
  { x: 7567, y: 388, width: 154, height: 14 },
  { x: 7889, y: 388, width: 207, height: 18 },
  { x: 8302, y: 339, width: 77, height: 40, melt: true, meltDelay: 22 },
  { x: 8706, y: 263, width: 125, height: 17 },
  { x: 9023, y: 186, width: 173, height: 42 },
  { x: 9349, y: 186, width: 280, height: 15 },
  { x: 9949, y: 108, width: 184, height: 17 },
  { x: 10433, y: 43, width: 66, height: 34 },
  { x: 10677, y: 19, width: 193, height: 36, moveAxis: "y", moveRange: 94, moveSpeed: 0.047, movePhase: 2.85 },
  { x: 11043, y: 27, width: 416, height: 20 },
];

window.deadlyPlatforms = [
  { x: 3417, y: 21, width: 160, height: 20 },
  { x: 7300, y: 387, width: 60, height: 20 },
  { x: 7759, y: 384, width: 88, height: 20 },
  { x: 8853, y: 263, width: 76, height: 20 },
  { x: 10160, y: 102, width: 119, height: 20 },
];

window.spikes = [
  { x: 661, y: 306, size: 42 },
  { x: 703, y: 306, size: 23 },
  { x: 726, y: 306, size: 37 },
  { x: 763, y: 306, size: 13 },
  { x: 1951, y: 88, size: 31 },
  { x: 2902, y: 42, size: 27 },
  { x: 8748, y: 263, size: 15 },
  { x: 8763, y: 263, size: 33 },
  { x: 8796, y: 263, size: 13 },
  { x: 9083, y: 186, size: 47 },
  { x: 9130, y: 186, size: 15 },
  { x: 10001, y: 108, size: 31 },
  { x: 10448, y: 43, size: 33 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2456, y: 58, reached: false },
  { x: 4858, y: 3, reached: false },
  { x: 6651, y: 310, reached: false },
  { x: 7993, y: 358, reached: false },
  { x: 9489, y: 156, reached: false },
  { x: 11251, y: -3, reached: false }, // Final
];
