// Level 24 Data — "The Abyssal Climb"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 24";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 441, y: 447, width: 98, height: 17, melt: true, meltDelay: 20 },
  { x: 692, y: 499, width: 71, height: 35, ghost: true, ghostPeriod: 123, ghostOnRatio: 0.4108695652173913 },
  { x: 959, y: 543, width: 139, height: 36, moveAxis: "x", moveRange: 85, moveSpeed: 0.037, movePhase: 4.92 },
  { x: 1306, y: 553, width: 130, height: 17, melt: true, meltDelay: 20 },
  { x: 1629, y: 553, width: 366, height: 31 },
  { x: 2323, y: 526, width: 80, height: 43 },
  { x: 2600, y: 465, width: 134, height: 31 },
  { x: 2864, y: 394, width: 124, height: 27, melt: true, meltDelay: 20 },
  { x: 3132, y: 320, width: 217, height: 43, melt: true, meltDelay: 20 },
  { x: 3349, y: 320, width: 272, height: 20 },
  { x: 3812, y: 306, width: 109, height: 20, ghost: true, ghostPeriod: 123, ghostOnRatio: 0.408695652173913 },
  { x: 4094, y: 290, width: 269, height: 20 },
  { x: 4634, y: 224, width: 72, height: 42 },
  { x: 4967, y: 159, width: 189, height: 26 },
  { x: 5335, y: 112, width: 213, height: 31 },
  { x: 5753, y: 89, width: 104, height: 25, moveAxis: "x", moveRange: 71, moveSpeed: 0.035, movePhase: 0.52 },
  { x: 6071, y: 89, width: 373, height: 13 },
  { x: 6600, y: 137, width: 183, height: 34 },
  { x: 6974, y: 194, width: 121, height: 43 },
  { x: 7230, y: 257, width: 180, height: 20, moveAxis: "x", moveRange: 71, moveSpeed: 0.045, movePhase: 4.16 },
  { x: 7595, y: 354, width: 58, height: 26 },
  { x: 7810, y: 354, width: 366, height: 19 },
  { x: 8338, y: 437, width: 87, height: 40, moveAxis: "x", moveRange: 79, moveSpeed: 0.048, movePhase: 0.13 },
  { x: 8611, y: 490, width: 74, height: 45 },
  { x: 8878, y: 521, width: 73, height: 37 },
  { x: 8951, y: 521, width: 266, height: 20 },
  { x: 9418, y: 494, width: 97, height: 20, ghost: true, ghostPeriod: 123, ghostOnRatio: 0.408695652173913 },
  { x: 9710, y: 469, width: 258, height: 20 },
  { x: 10146, y: 455, width: 229, height: 38, melt: true, meltDelay: 20 },
  { x: 10642, y: 422, width: 161, height: 13 },
  { x: 11096, y: 379, width: 122, height: 27 },
  { x: 11364, y: 379, width: 241, height: 36 },
  { x: 11779, y: 372, width: 387, height: 20 },
];

window.deadlyPlatforms = [
  { x: 2437, y: 517, width: 60, height: 20 },
  { x: 2761, y: 473, width: 107, height: 20 },
  { x: 4739, y: 223, width: 60, height: 20 },
  { x: 5572, y: 108, width: 148, height: 20 },
  { x: 6810, y: 145, width: 149, height: 20 },
  { x: 7133, y: 187, width: 70, height: 20 },
  { x: 7689, y: 354, width: 60, height: 20 },
  { x: 8722, y: 491, width: 65, height: 20 },
  { x: 8973, y: 517, width: 60, height: 20 },
];

window.spikes = [
  { x: 2350, y: 526, size: 13 },
  { x: 2634, y: 465, size: 52 },
  { x: 2686, y: 465, size: 19 },
  { x: 4643, y: 224, size: 48 },
  { x: 5024, y: 159, size: 51 },
  { x: 5075, y: 159, size: 35 },
  { x: 5400, y: 112, size: 16 },
  { x: 5416, y: 112, size: 16 },
  { x: 5432, y: 112, size: 48 },
  { x: 5480, y: 112, size: 36 },
  { x: 6643, y: 137, size: 13 },
  { x: 7014, y: 194, size: 29 },
  { x: 7610, y: 354, size: 24 },
  { x: 8627, y: 490, size: 22 },
  { x: 8649, y: 490, size: 29 },
  { x: 8896, y: 521, size: 12 },
  { x: 10665, y: 422, size: 12 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1812, y: 523, reached: false },
  { x: 4154, y: 260, reached: false },
  { x: 6258, y: 59, reached: false },
  { x: 7993, y: 324, reached: false },
  { x: 9770, y: 439, reached: false },
  { x: 11485, y: 349, reached: false },
  { x: 11973, y: 342, reached: false }, // Final
];
