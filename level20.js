// Level 20 Data — "Void Marrow"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 20";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 696, y: 306, width: 183, height: 43 },
  { x: 1266, y: 216, width: 123, height: 16 },
  { x: 1557, y: 125, width: 84, height: 16, moveAxis: "y", moveRange: 68, moveSpeed: 0.048, movePhase: 4.6 },
  { x: 1805, y: 125, width: 381, height: 23 },
  { x: 2368, y: 62, width: 97, height: 16, melt: true, meltDelay: 22 },
  { x: 2660, y: 28, width: 158, height: 21 },
  { x: 3238, y: 6, width: 78, height: 30, melt: true, meltDelay: 22 },
  { x: 3480, y: 6, width: 288, height: 36 },
  { x: 4000, y: 59, width: 173, height: 22, melt: true, meltDelay: 22 },
  { x: 4405, y: 114, width: 207, height: 30, ghost: true, ghostPeriod: 137, ghostOnRatio: 0.45434782608695656 },
  { x: 4844, y: 177, width: 193, height: 13 },
  { x: 5201, y: 177, width: 381, height: 24 },
  { x: 5819, y: 247, width: 182, height: 18, moveAxis: "y", moveRange: 91, moveSpeed: 0.039, movePhase: 1.56 },
  { x: 6238, y: 315, width: 209, height: 30 },
  { x: 6675, y: 363, width: 219, height: 19, melt: true, meltDelay: 22 },
  { x: 7058, y: 363, width: 292, height: 36 },
  { x: 7569, y: 382, width: 56, height: 22 },
  { x: 7826, y: 359, width: 46, height: 38 },
  { x: 8277, y: 309, width: 136, height: 13 },
  { x: 8577, y: 309, width: 181, height: 18 },
  { x: 8944, y: 248, width: 86, height: 18 },
  { x: 9422, y: 167, width: 128, height: 42, moveAxis: "y", moveRange: 106, moveSpeed: 0.033, movePhase: 0.26 },
  { x: 9946, y: 91, width: 81, height: 18, moveAxis: "x", moveRange: 74, moveSpeed: 0.036, movePhase: 3.36 },
  { x: 10191, y: 91, width: 362, height: 37 },
  { x: 10748, y: 51, width: 125, height: 17, melt: true, meltDelay: 22 },
  { x: 11068, y: 17, width: 198, height: 35 },
  { x: 11422, y: 13, width: 433, height: 20 },
];

window.deadlyPlatforms = [
  { x: 901, y: 310, width: 130, height: 20 },
  { x: 1417, y: 218, width: 75, height: 20 },
  { x: 2856, y: 23, width: 138, height: 20 },
  { x: 6469, y: 307, width: 179, height: 20 },
  { x: 7660, y: 386, width: 60, height: 20 },
  { x: 9064, y: 242, width: 77, height: 20 },
  { x: 11295, y: 10, width: 166, height: 20 },
];

window.spikes = [
  { x: 750, y: 306, size: 38 },
  { x: 1310, y: 216, size: 23 },
  { x: 2689, y: 28, size: 14 },
  { x: 7580, y: 382, size: 37 },
  { x: 8295, y: 309, size: 27 },
  { x: 11140, y: 17, size: 37 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1996, y: 95, reached: false },
  { x: 3624, y: -24, reached: false },
  { x: 5392, y: 147, reached: false },
  { x: 7204, y: 333, reached: false },
  { x: 8668, y: 279, reached: false },
  { x: 10372, y: 61, reached: false },
  { x: 11639, y: -17, reached: false }, // Final
];
