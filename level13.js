// Level 13 Data — "Crimson Descent"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 13";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 485, y: 361, width: 181, height: 13 },
  { x: 849, y: 327, width: 185, height: 39 },
  { x: 1177, y: 272, width: 74, height: 38, moveAxis: "x", moveRange: 87, moveSpeed: 0.027, movePhase: 3.43 },
  { x: 1392, y: 272, width: 287, height: 27 },
  { x: 1983, y: 210, width: 97, height: 19 },
  { x: 2366, y: 158, width: 120, height: 35 },
  { x: 2799, y: 99, width: 233, height: 36, moveAxis: "y", moveRange: 75, moveSpeed: 0.036, movePhase: 1.14 },
  { x: 3243, y: 68, width: 166, height: 43, ghost: true, ghostPeriod: 162, ghostOnRatio: 0.5304347826086957 },
  { x: 3409, y: 68, width: 244, height: 20 },
  { x: 3861, y: 41, width: 98, height: 20, ghost: true, ghostPeriod: 157, ghostOnRatio: 0.5043478260869565 },
  { x: 4145, y: 17, width: 222, height: 20 },
  { x: 4586, y: 27, width: 50, height: 32, moveAxis: "y", moveRange: 73, moveSpeed: 0.041, movePhase: 1.02 },
  { x: 4782, y: 58, width: 231, height: 37 },
  { x: 5153, y: 107, width: 63, height: 25, ghost: true, ghostPeriod: 162, ghostOnRatio: 0.5304347826086957 },
  { x: 5358, y: 155, width: 98, height: 18, melt: true, meltDelay: 25 },
  { x: 5597, y: 155, width: 250, height: 22 },
  { x: 5999, y: 221, width: 152, height: 24, ghost: true, ghostPeriod: 162, ghostOnRatio: 0.5304347826086957 },
  { x: 6362, y: 284, width: 191, height: 36, melt: true, meltDelay: 25 },
  { x: 6733, y: 342, width: 212, height: 17, ghost: true, ghostPeriod: 162, ghostOnRatio: 0.5304347826086957 },
  { x: 7143, y: 342, width: 303, height: 40 },
  { x: 7599, y: 352, width: 169, height: 29 },
  { x: 7981, y: 360, width: 91, height: 21 },
  { x: 8349, y: 334, width: 47, height: 29 },
  { x: 8582, y: 334, width: 304, height: 36 },
  { x: 9044, y: 276, width: 206, height: 39 },
  { x: 9450, y: 288, width: 389, height: 20 },
];

window.deadlyPlatforms = [
  { x: 687, y: 365, width: 104, height: 20 },
  { x: 2104, y: 207, width: 82, height: 20 },
  { x: 2515, y: 151, width: 97, height: 20 },
  { x: 7804, y: 353, width: 106, height: 20 },
  { x: 8102, y: 370, width: 82, height: 20 },
  { x: 9280, y: 268, width: 127, height: 20 },
];

window.spikes = [
  { x: 1999, y: 210, size: 37 },
  { x: 4843, y: 58, size: 34 },
  { x: 8365, y: 334, size: 25 },
  { x: 9078, y: 276, size: 16 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1536, y: 242, reached: false },
  { x: 4205, y: -13, reached: false },
  { x: 5722, y: 125, reached: false },
  { x: 7295, y: 312, reached: false },
  { x: 8734, y: 304, reached: false },
  { x: 9645, y: 258, reached: false }, // Final
];
