// Level 50 Data — "The Neon Rift"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "The Neon Rift";
window.levelTheme = "neon";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 532, y: 410, width: 144, height: 22 },
  { x: 898, y: 416, width: 201, height: 15, moveAxis: "y", moveRange: 105, moveSpeed: 0.047, movePhase: 5.65 },
  { x: 1526, y: 379, width: 212, height: 18, moveAxis: "x", moveRange: 104, moveSpeed: 0.048, movePhase: 4.32 },
  { x: 2165, y: 337, width: 52, height: 27 },
  { x: 2381, y: 337, width: 376, height: 16 },
  { x: 3169, y: 267, width: 216, height: 21 },
  { x: 3784, y: 170, width: 233, height: 28 },
  { x: 4429, y: 99, width: 109, height: 28, melt: true, meltDelay: 20 },
  { x: 4956, y: 34, width: 143, height: 22 },
  { x: 5263, y: 34, width: 313, height: 27 },
  { x: 5785, y: 7, width: 128, height: 14 },
  { x: 6135, y: 17, width: 133, height: 15, melt: true, meltDelay: 20 },
  { x: 6496, y: 37, width: 78, height: 20, conveyor: true, conveyorSpeed: 1.82 },
  { x: 6574, y: 37, width: 279, height: 20 },
  { x: 7056, y: 12, width: 101, height: 20, ghost: true, ghostPeriod: 123, ghostOnRatio: 0.41 },
  { x: 7340, y: -14, width: 237, height: 20 },
  { x: 7818, y: 47, width: 61, height: 20, melt: true, meltDelay: 20 },
  { x: 8126, y: 143, width: 93, height: 26, melt: true, meltDelay: 20 },
  { x: 8466, y: 219, width: 200, height: 16, bounce: true, bounceStrength: -19 },
  { x: 8830, y: 219, width: 250, height: 14 },
  { x: 9327, y: 291, width: 147, height: 14, melt: true, meltDelay: 20 },
  { x: 9711, y: 332, width: 218, height: 17, ghost: true, ghostPeriod: 124, ghostOnRatio: 0.41250000000000003 },
  { x: 10161, y: 364, width: 212, height: 22, conveyor: true, conveyorSpeed: 1.04 },
  { x: 10537, y: 364, width: 344, height: 21 },
  { x: 11084, y: 326, width: 54, height: 29 },
  { x: 11341, y: 283, width: 141, height: 24 },
  { x: 11672, y: 219, width: 210, height: 19, bounce: true, bounceStrength: -18 },
  { x: 12046, y: 219, width: 241, height: 17 },
  { x: 12695, y: 138, width: 53, height: 23 },
  { x: 13150, y: 48, width: 142, height: 26 },
  { x: 13710, y: -15, width: 115, height: 16, bounce: true, bounceStrength: -19 },
  { x: 14026, y: -1, width: 429, height: 20 },
];

window.deadlyPlatforms = [
  { x: 712, y: 418, width: 100, height: 20 },
  { x: 3415, y: 267, width: 112, height: 20 },
  { x: 4039, y: 169, width: 118, height: 20 },
  { x: 5935, y: 2, width: 113, height: 20 },
  { x: 11172, y: 335, width: 60, height: 20 },
  { x: 11508, y: 279, width: 103, height: 20 },
  { x: 12782, y: 142, width: 60, height: 20 },
  { x: 13326, y: 55, width: 97, height: 20 },
];

window.spikes = [
  { x: 556, y: 410, size: 35 },
  { x: 591, y: 410, size: 23 },
  { x: 614, y: 410, size: 41 },
  { x: 2174, y: 337, size: 34 },
  { x: 3207, y: 267, size: 48 },
  { x: 3859, y: 170, size: 28 },
  { x: 3887, y: 170, size: 29 },
  { x: 3916, y: 170, size: 12 },
  { x: 3928, y: 170, size: 23 },
  { x: 5004, y: 34, size: 51 },
  { x: 5806, y: 7, size: 45 },
  { x: 5851, y: 7, size: 33 },
  { x: 11358, y: 283, size: 25 },
  { x: 11383, y: 283, size: 39 },
  { x: 11422, y: 283, size: 23 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2569, y: 307, reached: false },
  { x: 5420, y: 4, reached: false },
  { x: 7400, y: -44, reached: false },
  { x: 8955, y: 189, reached: false },
  { x: 10709, y: 334, reached: false },
  { x: 12167, y: 189, reached: false },
  { x: 14241, y: -31, reached: false }, // Final
];
