// Level 7 Data — "Level 7"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 7";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 584, y: 333, width: 64, height: 41 },
  { x: 849, y: 285, width: 222, height: 36, moveAxis: "y", moveRange: 74, moveSpeed: 0.029, movePhase: 3.66 },
  { x: 1228, y: 247, width: 85, height: 12, moveAxis: "y", moveRange: 45, moveSpeed: 0.034, movePhase: 4.54 },
  { x: 1638, y: 192, width: 167, height: 16 },
  { x: 2002, y: 192, width: 351, height: 40 },
  { x: 2556, y: 156, width: 77, height: 38, melt: true, meltDelay: 28 },
  { x: 2808, y: 142, width: 196, height: 27 },
  { x: 3134, y: 123, width: 141, height: 40, moveAxis: "y", moveRange: 77, moveSpeed: 0.034, movePhase: 4.35 },
  { x: 3453, y: 127, width: 228, height: 18 },
  { x: 3878, y: 127, width: 353, height: 18 },
  { x: 4364, y: 151, width: 93, height: 33, ghost: true, ghostPeriod: 183, ghostOnRatio: 0.5956521739130435 },
  { x: 4621, y: 187, width: 55, height: 41 },
  { x: 4853, y: 248, width: 93, height: 18 },
  { x: 5128, y: 301, width: 54, height: 37, melt: true, meltDelay: 28 },
  { x: 5318, y: 301, width: 212, height: 30 },
  { x: 5749, y: 337, width: 214, height: 16 },
  { x: 6105, y: 364, width: 156, height: 40 },
  { x: 6399, y: 374, width: 149, height: 25, moveAxis: "y", moveRange: 60, moveSpeed: 0.027, movePhase: 6.03 },
  { x: 6849, y: 368, width: 156, height: 30 },
  { x: 7153, y: 368, width: 258, height: 18 },
  { x: 7574, y: 368, width: 421, height: 20 },
];

window.deadlyPlatforms = [
  { x: 1842, y: 200, width: 149, height: 20 },
  { x: 3709, y: 133, width: 144, height: 20 },
  { x: 4698, y: 179, width: 60, height: 20 },
  { x: 4984, y: 257, width: 63, height: 20 },
  { x: 7041, y: 377, width: 118, height: 20 },
];

window.spikes = [
  { x: 1698, y: 192, size: 17 },
  { x: 2849, y: 142, size: 13 },
  { x: 2862, y: 142, size: 12 },
  { x: 2874, y: 142, size: 16 },
  { x: 4631, y: 187, size: 30 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2178, y: 162, reached: false },
  { x: 4055, y: 97, reached: false },
  { x: 5424, y: 271, reached: false },
  { x: 7282, y: 338, reached: false },
  { x: 7785, y: 338, reached: false }, // Final
];
