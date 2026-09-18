// Level 13 Data — "Crimson Descent"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 13";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 489, y: 361, width: 161, height: 26 },
  { x: 1030, y: 323, width: 118, height: 24 },
  { x: 1317, y: 258, width: 135, height: 22 },
  { x: 1616, y: 258, width: 381, height: 25 },
  { x: 2174, y: 206, width: 129, height: 27, melt: true, meltDelay: 25 },
  { x: 2480, y: 161, width: 97, height: 17 },
  { x: 2957, y: 120, width: 118, height: 20, moveAxis: "x", moveRange: 76, moveSpeed: 0.035, movePhase: 1.96 },
  { x: 3252, y: 75, width: 108, height: 27 },
  { x: 3524, y: 75, width: 315, height: 29 },
  { x: 4231, y: 69, width: 215, height: 18 },
  { x: 4649, y: 84, width: 123, height: 26, moveAxis: "x", moveRange: 62, moveSpeed: 0.026, movePhase: 3.62 },
  { x: 4987, y: 140, width: 117, height: 18, melt: true, meltDelay: 25 },
  { x: 5324, y: 209, width: 182, height: 19 },
  { x: 5670, y: 209, width: 239, height: 19 },
  { x: 6129, y: 284, width: 122, height: 24, moveAxis: "x", moveRange: 73, moveSpeed: 0.031, movePhase: 0.85 },
  { x: 6462, y: 329, width: 98, height: 17, ghost: true, ghostPeriod: 162, ghostOnRatio: 0.5304347826086957 },
  { x: 6766, y: 362, width: 69, height: 19, moveAxis: "y", moveRange: 75, moveSpeed: 0.036, movePhase: 1.14 },
  { x: 6835, y: 362, width: 247, height: 20 },
  { x: 7283, y: 348, width: 97, height: 20, ghost: true, ghostPeriod: 157, ghostOnRatio: 0.5043478260869565 },
  { x: 7570, y: 336, width: 247, height: 20 },
  { x: 8015, y: 342, width: 49, height: 17, ghost: true, ghostPeriod: 162, ghostOnRatio: 0.5304347826086957 },
  { x: 8258, y: 335, width: 73, height: 15, moveAxis: "y", moveRange: 73, moveSpeed: 0.041, movePhase: 1.02 },
  { x: 8517, y: 303, width: 151, height: 28 },
  { x: 8845, y: 257, width: 94, height: 25, ghost: true, ghostPeriod: 162, ghostOnRatio: 0.5304347826086957 },
  { x: 9103, y: 257, width: 226, height: 29 },
  { x: 9495, y: 266, width: 394, height: 20 },
];

window.deadlyPlatforms = [
  { x: 680, y: 360, width: 107, height: 20 },
  { x: 2611, y: 155, width: 85, height: 20 },
  { x: 3395, y: 77, width: 70, height: 20 },
  { x: 4482, y: 70, width: 135, height: 20 },
  { x: 5536, y: 219, width: 164, height: 20 },
];

window.spikes = [
  { x: 512, y: 361, size: 16 },
  { x: 1359, y: 258, size: 16 },
  { x: 1375, y: 258, size: 14 },
  { x: 1389, y: 258, size: 31 },
  { x: 1420, y: 258, size: 17 },
  { x: 3288, y: 75, size: 34 },
  { x: 3322, y: 75, size: 12 },
  { x: 4308, y: 69, size: 37 },
  { x: 8570, y: 303, size: 25 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1807, y: 228, reached: false },
  { x: 3682, y: 45, reached: false },
  { x: 5790, y: 179, reached: false },
  { x: 7630, y: 306, reached: false },
  { x: 9216, y: 227, reached: false },
  { x: 9692, y: 236, reached: false }, // Final
];
