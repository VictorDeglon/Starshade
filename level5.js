// Level 5 Data — "Level 5"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 5";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 492, y: 419, width: 230, height: 20, moveAxis: "y", moveRange: 64, moveSpeed: 0.028, movePhase: 4.01 },
  { x: 906, y: 443, width: 210, height: 16 },
  { x: 1308, y: 482, width: 86, height: 23 },
  { x: 1582, y: 508, width: 181, height: 16 },
  { x: 1927, y: 508, width: 245, height: 30 },
  { x: 2344, y: 495, width: 225, height: 20 },
  { x: 2738, y: 468, width: 172, height: 23 },
  { x: 3079, y: 439, width: 90, height: 24, moveAxis: "x", moveRange: 72, moveSpeed: 0.032, movePhase: 3.95 },
  { x: 3333, y: 439, width: 193, height: 18 },
  { x: 3683, y: 383, width: 79, height: 16, moveAxis: "y", moveRange: 50, moveSpeed: 0.03, movePhase: 3.59 },
  { x: 3919, y: 329, width: 169, height: 23, moveAxis: "x", moveRange: 49, moveSpeed: 0.026, movePhase: 3.43 },
  { x: 4249, y: 283, width: 205, height: 19 },
  { x: 4626, y: 262, width: 157, height: 26 },
  { x: 4947, y: 262, width: 272, height: 21 },
  { x: 5399, y: 265, width: 119, height: 30, ghost: true, ghostPeriod: 190, ghostOnRatio: 0.6173913043478261 },
  { x: 5702, y: 281, width: 83, height: 20, melt: true, meltDelay: 29 },
  { x: 5973, y: 312, width: 146, height: 29, melt: true, meltDelay: 29 },
  { x: 6311, y: 361, width: 103, height: 21 },
  { x: 6578, y: 361, width: 219, height: 29 },
  { x: 6973, y: 359, width: 428, height: 20 },
];

window.deadlyPlatforms = [
  { x: 1144, y: 441, width: 178, height: 20 },
  { x: 2602, y: 491, width: 166, height: 20 },
  { x: 2936, y: 459, width: 152, height: 20 },
  { x: 4477, y: 278, width: 116, height: 20 },
];

window.spikes = [
  { x: 949, y: 443, size: 21 },
  { x: 970, y: 443, size: 27 },
  { x: 997, y: 443, size: 18 },
  { x: 1015, y: 443, size: 25 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2050, y: 478, reached: false },
  { x: 3430, y: 409, reached: false },
  { x: 5083, y: 232, reached: false },
  { x: 6688, y: 331, reached: false },
  { x: 7187, y: 329, reached: false }, // Final
];
