// Level 20 Data — "Void Marrow"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 20";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 495, y: 315, width: 173, height: 20, moveAxis: "x", moveRange: 62, moveSpeed: 0.025, movePhase: 1.21 },
  { x: 956, y: 235, width: 85, height: 20 },
  { x: 1189, y: 154, width: 83, height: 20 },
  { x: 1484, y: 154, width: 246, height: 20 },
  { x: 1884, y: 98, width: 85, height: 20 },
  { x: 2152, y: 68, width: 100, height: 20, moveAxis: "y", moveRange: 71, moveSpeed: 0.023, movePhase: 6.1 },
  { x: 2524, y: 47, width: 129, height: 20 },
  { x: 2827, y: 47, width: 276, height: 20 },
  { x: 3294, y: 96, width: 103, height: 20, melt: true, meltDelay: 24 },
  { x: 3603, y: 143, width: 130, height: 20 },
  { x: 3933, y: 197, width: 75, height: 20 },
  { x: 4220, y: 197, width: 249, height: 20 },
  { x: 4664, y: 257, width: 91, height: 20 },
  { x: 4963, y: 316, width: 129, height: 20 },
  { x: 5304, y: 357, width: 94, height: 20, melt: true, meltDelay: 24 },
  { x: 5574, y: 357, width: 277, height: 20 },
  { x: 5986, y: 375, width: 102, height: 20 },
  { x: 6218, y: 354, width: 155, height: 20, melt: true, meltDelay: 24 },
  { x: 6666, y: 309, width: 74, height: 20, moveAxis: "y", moveRange: 52, moveSpeed: 0.036, movePhase: 4.6 },
  { x: 6870, y: 309, width: 236, height: 20 },
  { x: 7255, y: 257, width: 89, height: 20, melt: true, meltDelay: 24 },
  { x: 7528, y: 269, width: 411, height: 20 },
];

window.deadlyPlatforms = [
  { x: 1072, y: 227, width: 65, height: 20 },
  { x: 2677, y: 57, width: 67, height: 20 },
  { x: 4047, y: 207, width: 60, height: 20 },
  { x: 5112, y: 318, width: 113, height: 20 },
  { x: 6113, y: 376, width: 65, height: 20 },
];

window.spikes = [
  { x: 1237, y: 154, size: 19 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1607, y: 124, reached: false },
  { x: 2965, y: 17, reached: false },
  { x: 4345, y: 167, reached: false },
  { x: 5713, y: 327, reached: false },
  { x: 6988, y: 279, reached: false },
  { x: 7734, y: 239, reached: false }, // Final
];
