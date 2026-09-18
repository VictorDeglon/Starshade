// Level 2 Data — "Level 2"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 2";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 455, y: 333, width: 89, height: 24, moveAxis: "x", moveRange: 52, moveSpeed: 0.018, movePhase: 4.56 },
  { x: 702, y: 290, width: 77, height: 17, moveAxis: "x", moveRange: 44, moveSpeed: 0.019, movePhase: 5.88 },
  { x: 942, y: 266, width: 123, height: 21 },
  { x: 1235, y: 264, width: 79, height: 18, melt: true, meltDelay: 30 },
  { x: 1478, y: 264, width: 313, height: 16 },
  { x: 1972, y: 294, width: 141, height: 26, moveAxis: "x", moveRange: 48, moveSpeed: 0.018, movePhase: 5.38 },
  { x: 2291, y: 310, width: 183, height: 15 },
  { x: 2652, y: 334, width: 206, height: 24, moveAxis: "x", moveRange: 62, moveSpeed: 0.028, movePhase: 2.46 },
  { x: 3043, y: 373, width: 204, height: 24 },
  { x: 3411, y: 373, width: 186, height: 30 },
  { x: 3782, y: 422, width: 220, height: 26, moveAxis: "x", moveRange: 63, moveSpeed: 0.022, movePhase: 2.85 },
  { x: 4183, y: 448, width: 148, height: 17, ghost: true, ghostPeriod: 200, ghostOnRatio: 0.65 },
  { x: 4509, y: 470, width: 205, height: 14, moveAxis: "x", moveRange: 62, moveSpeed: 0.02, movePhase: 2.37 },
  { x: 4878, y: 470, width: 202, height: 27 },
  { x: 5253, y: 475, width: 77, height: 15 },
  { x: 5670, y: 452, width: 52, height: 20 },
  { x: 6055, y: 414, width: 180, height: 21 },
  { x: 6393, y: 373, width: 166, height: 17 },
  { x: 6736, y: 381, width: 411, height: 20 },
];

window.deadlyPlatforms = [
  { x: 2506, y: 301, width: 159, height: 20 },
  { x: 6273, y: 421, width: 136, height: 20 },
  { x: 6582, y: 372, width: 93, height: 20 },
];

window.spikes = [
  { x: 973, y: 266, size: 21 },
  { x: 994, y: 266, size: 13 },
  { x: 1007, y: 266, size: 25 },
  { x: 3082, y: 373, size: 19 },
  { x: 3101, y: 373, size: 14 },
  { x: 3115, y: 373, size: 19 },
  { x: 3134, y: 373, size: 20 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1635, y: 234, reached: false },
  { x: 3504, y: 343, reached: false },
  { x: 4979, y: 440, reached: false },
  { x: 6942, y: 351, reached: false }, // Final
];
