// Level 4 Data — "Level 4"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 4";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 433, y: 410, width: 153, height: 24 },
  { x: 797, y: 456, width: 226, height: 13, moveAxis: "y", moveRange: 39, moveSpeed: 0.026, movePhase: 1.14 },
  { x: 1164, y: 508, width: 59, height: 21 },
  { x: 1418, y: 508, width: 369, height: 37 },
  { x: 1932, y: 547, width: 62, height: 35 },
  { x: 2198, y: 590, width: 224, height: 16, moveAxis: "y", moveRange: 50, moveSpeed: 0.02, movePhase: 3.42 },
  { x: 2616, y: 606, width: 94, height: 43 },
  { x: 2864, y: 614, width: 66, height: 19 },
  { x: 3078, y: 614, width: 354, height: 24 },
  { x: 3603, y: 591, width: 101, height: 36, melt: true, meltDelay: 29 },
  { x: 3901, y: 544, width: 230, height: 16 },
  { x: 4285, y: 498, width: 89, height: 23 },
  { x: 4536, y: 469, width: 188, height: 43 },
  { x: 4910, y: 469, width: 394, height: 29 },
  { x: 5587, y: 426, width: 201, height: 36, moveAxis: "x", moveRange: 69, moveSpeed: 0.029, movePhase: 1.44 },
  { x: 6112, y: 403, width: 45, height: 22, moveAxis: "y", moveRange: 52, moveSpeed: 0.026, movePhase: 4.33 },
  { x: 6441, y: 376, width: 219, height: 15 },
  { x: 6807, y: 376, width: 332, height: 40 },
  { x: 7323, y: 376, width: 171, height: 13, ghost: true, ghostPeriod: 193, ghostOnRatio: 0.6282608695652174 },
  { x: 7664, y: 388, width: 415, height: 20 },
];

window.deadlyPlatforms = [
  { x: 606, y: 416, width: 130, height: 20 },
];

window.spikes = [
  { x: 2644, y: 606, size: 15 },
  { x: 2886, y: 614, size: 20 },
  { x: 3940, y: 544, size: 20 },
  { x: 4573, y: 469, size: 24 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1603, y: 478, reached: false },
  { x: 3255, y: 584, reached: false },
  { x: 5107, y: 439, reached: false },
  { x: 6973, y: 346, reached: false },
  { x: 7872, y: 358, reached: false }, // Final
];
