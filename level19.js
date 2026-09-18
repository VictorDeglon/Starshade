// Level 19 Data — "The Shattered Path"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 19";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 715, y: 365, width: 211, height: 43, melt: true, meltDelay: 23 },
  { x: 1125, y: 335, width: 152, height: 12, moveAxis: "y", moveRange: 78, moveSpeed: 0.045, movePhase: 1.82 },
  { x: 1683, y: 293, width: 108, height: 24 },
  { x: 1972, y: 227, width: 155, height: 37 },
  { x: 2291, y: 227, width: 248, height: 34 },
  { x: 2922, y: 137, width: 48, height: 21, melt: true, meltDelay: 23 },
  { x: 3145, y: 60, width: 214, height: 22 },
  { x: 3552, y: 18, width: 77, height: 37 },
  { x: 4030, y: -28, width: 123, height: 26 },
  { x: 4317, y: -28, width: 223, height: 34 },
  { x: 4757, y: -12, width: 94, height: 30 },
  { x: 5077, y: 30, width: 228, height: 44, moveAxis: "x", moveRange: 63, moveSpeed: 0.034, movePhase: 5.19 },
  { x: 5531, y: 73, width: 57, height: 21, ghost: true, ghostPeriod: 141, ghostOnRatio: 0.46521739130434786 },
  { x: 5752, y: 73, width: 229, height: 21 },
  { x: 6210, y: 136, width: 179, height: 45, ghost: true, ghostPeriod: 141, ghostOnRatio: 0.46521739130434786 },
  { x: 6624, y: 205, width: 195, height: 20, ghost: true, ghostPeriod: 141, ghostOnRatio: 0.46521739130434786 },
  { x: 7048, y: 264, width: 187, height: 32, moveAxis: "y", moveRange: 97, moveSpeed: 0.047, movePhase: 5.62 },
  { x: 7399, y: 264, width: 257, height: 27 },
  { x: 7882, y: 308, width: 182, height: 33, ghost: true, ghostPeriod: 141, ghostOnRatio: 0.46521739130434786 },
  { x: 8281, y: 331, width: 76, height: 16, ghost: true, ghostPeriod: 141, ghostOnRatio: 0.46521739130434786 },
  { x: 8772, y: 312, width: 174, height: 23, moveAxis: "y", moveRange: 86, moveSpeed: 0.047, movePhase: 1.63 },
  { x: 9136, y: 266, width: 104, height: 17, melt: true, meltDelay: 23 },
  { x: 9404, y: 266, width: 324, height: 26 },
  { x: 9899, y: 187, width: 79, height: 24, moveAxis: "y", moveRange: 107, moveSpeed: 0.044, movePhase: 2.36 },
  { x: 10370, y: 113, width: 115, height: 26 },
  { x: 10656, y: 123, width: 429, height: 20 },
];

window.deadlyPlatforms = [
  { x: 1818, y: 302, width: 89, height: 20 },
  { x: 3396, y: 54, width: 150, height: 20 },
  { x: 3655, y: 9, width: 60, height: 20 },
  { x: 4890, y: -10, width: 71, height: 20 },
  { x: 10513, y: 112, width: 92, height: 20 },
];

window.spikes = [
  { x: 1709, y: 293, size: 32 },
  { x: 1741, y: 293, size: 14 },
  { x: 2026, y: 227, size: 12 },
  { x: 2038, y: 227, size: 38 },
  { x: 2076, y: 227, size: 28 },
  { x: 3210, y: 60, size: 13 },
  { x: 3578, y: 18, size: 28 },
  { x: 4062, y: -28, size: 19 },
  { x: 4081, y: -28, size: 41 },
  { x: 4122, y: -28, size: 23 },
  { x: 4779, y: -12, size: 29 },
  { x: 10409, y: 113, size: 12 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2415, y: 197, reached: false },
  { x: 4429, y: -58, reached: false },
  { x: 5867, y: 43, reached: false },
  { x: 7528, y: 234, reached: false },
  { x: 9566, y: 236, reached: false },
  { x: 10871, y: 93, reached: false }, // Final
];
