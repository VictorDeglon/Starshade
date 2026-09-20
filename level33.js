// Level 33 Data — "Wraithlight Span"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 33";
window.levelAccent = "#ff9838";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 473, y: 290, width: 226, height: 26, conveyor: true, conveyorSpeed: 1.64 },
  { x: 1099, y: 201, width: 231, height: 28 },
  { x: 1739, y: 133, width: 124, height: 16, melt: true, meltDelay: 21 },
  { x: 2061, y: 87, width: 233, height: 29, melt: true, meltDelay: 21 },
  { x: 2458, y: 87, width: 336, height: 21 },
  { x: 3015, y: 98, width: 77, height: 28, moveAxis: "x", moveRange: 107, moveSpeed: 0.049, movePhase: 5.93 },
  { x: 3322, y: 127, width: 226, height: 18, bounce: true, bounceStrength: -17 },
  { x: 3784, y: 176, width: 66, height: 29 },
  { x: 4095, y: 246, width: 125, height: 21 },
  { x: 4384, y: 246, width: 255, height: 23 },
  { x: 4884, y: 332, width: 96, height: 18 },
  { x: 5225, y: 404, width: 187, height: 30, ghost: true, ghostPeriod: 126, ghostOnRatio: 0.4196428571428572 },
  { x: 5651, y: 465, width: 220, height: 17, ghost: true, ghostPeriod: 126, ghostOnRatio: 0.4196428571428572 },
  { x: 6035, y: 465, width: 381, height: 15 },
  { x: 6642, y: 478, width: 46, height: 23, melt: true, meltDelay: 21 },
  { x: 7125, y: 469, width: 132, height: 28, moveAxis: "y", moveRange: 69, moveSpeed: 0.04, movePhase: 0.55 },
  { x: 7464, y: 443, width: 51, height: 28, moveAxis: "x", moveRange: 93, moveSpeed: 0.053, movePhase: 5.76 },
  { x: 7707, y: 384, width: 62, height: 16, melt: true, meltDelay: 21 },
  { x: 7933, y: 384, width: 261, height: 17 },
  { x: 8377, y: 312, width: 120, height: 28, conveyor: true, conveyorSpeed: 1.24 },
  { x: 8897, y: 223, width: 113, height: 19 },
  { x: 9415, y: 138, width: 216, height: 28 },
  { x: 10040, y: 70, width: 83, height: 15 },
  { x: 10287, y: 70, width: 379, height: 21 },
  { x: 11090, y: 31, width: 146, height: 15, melt: true, meltDelay: 21 },
  { x: 11453, y: 29, width: 133, height: 26, ghost: true, ghostPeriod: 126, ghostOnRatio: 0.4196428571428572 },
  { x: 11816, y: 60, width: 85, height: 21, ghost: true, ghostPeriod: 126, ghostOnRatio: 0.4196428571428572 },
  { x: 12080, y: 70, width: 421, height: 20 },
];

window.deadlyPlatforms = [
  { x: 7058, y: 515, width: 105, height: 14, moveAxis: "x", moveRange: 71, moveSpeed: 0.037, movePhase: 5.59 },
  { x: 1356, y: 209, width: 202, height: 20 },
  { x: 5005, y: 329, width: 62, height: 20 },
  { x: 9652, y: 148, width: 177, height: 20 },
];

window.spikes = [
  { x: 1178, y: 201, size: 37 },
  { x: 4907, y: 332, size: 32 },
  { x: 4939, y: 332, size: 35 },
  { x: 8932, y: 223, size: 16 },
  { x: 9456, y: 138, size: 21 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2626, y: 57, reached: false },
  { x: 4512, y: 216, reached: false },
  { x: 6226, y: 435, reached: false },
  { x: 8064, y: 354, reached: false },
  { x: 10477, y: 40, reached: false },
  { x: 12291, y: 40, reached: false }, // Final
];
