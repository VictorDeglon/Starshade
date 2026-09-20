// Level 27 Data — "Fractured Skyline"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 27";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 480, y: 305, width: 124, height: 19 },
  { x: 784, y: 229, width: 150, height: 30 },
  { x: 1347, y: 176, width: 200, height: 17 },
  { x: 1711, y: 176, width: 267, height: 22 },
  { x: 2195, y: 177, width: 166, height: 30, melt: true, meltDelay: 21 },
  { x: 2588, y: 205, width: 176, height: 25 },
  { x: 2991, y: 241, width: 85, height: 29, ghost: true, ghostPeriod: 131, ghostOnRatio: 0.43494897959183676 },
  { x: 3312, y: 294, width: 206, height: 15, ghost: true, ghostPeriod: 131, ghostOnRatio: 0.43494897959183676 },
  { x: 3682, y: 294, width: 292, height: 18 },
  { x: 4216, y: 383, width: 111, height: 14 },
  { x: 4569, y: 449, width: 162, height: 27, ghost: true, ghostPeriod: 131, ghostOnRatio: 0.43494897959183676 },
  { x: 4973, y: 519, width: 212, height: 20, ghost: true, ghostPeriod: 131, ghostOnRatio: 0.43494897959183676 },
  { x: 5349, y: 519, width: 194, height: 30 },
  { x: 5770, y: 547, width: 95, height: 22, ghost: true, ghostPeriod: 131, ghostOnRatio: 0.43494897959183676 },
  { x: 6082, y: 555, width: 204, height: 18, ghost: true, ghostPeriod: 131, ghostOnRatio: 0.43494897959183676 },
  { x: 6490, y: 530, width: 107, height: 21, moveAxis: "x", moveRange: 107, moveSpeed: 0.034, movePhase: 4.35 },
  { x: 7010, y: 484, width: 155, height: 28 },
  { x: 7329, y: 484, width: 357, height: 17 },
  { x: 7857, y: 393, width: 188, height: 15, conveyor: true, conveyorSpeed: 2.17 },
  { x: 8445, y: 312, width: 64, height: 22 },
  { x: 8680, y: 224, width: 144, height: 29 },
  { x: 9227, y: 148, width: 232, height: 29 },
  { x: 9623, y: 148, width: 273, height: 20 },
  { x: 10100, y: 123, width: 74, height: 30, moveAxis: "y", moveRange: 87, moveSpeed: 0.045, movePhase: 2.05 },
  { x: 10605, y: 122, width: 54, height: 17 },
  { x: 10882, y: 146, width: 193, height: 22, moveAxis: "y", moveRange: 78, moveSpeed: 0.038, movePhase: 1.74 },
  { x: 11239, y: 146, width: 306, height: 24 },
  { x: 11752, y: 151, width: 397, height: 20 },
];

window.deadlyPlatforms = [
  { x: 6425, y: 579, width: 86, height: 18, moveAxis: "y", moveRange: 131, moveSpeed: 0.036, movePhase: 4.13 },
  { x: 629, y: 303, width: 78, height: 20 },
  { x: 2799, y: 211, width: 122, height: 20 },
  { x: 4358, y: 391, width: 75, height: 20 },
  { x: 7189, y: 487, width: 101, height: 20 },
  { x: 8853, y: 224, width: 101, height: 20 },
  { x: 9480, y: 157, width: 193, height: 20 },
  { x: 10693, y: 113, width: 60, height: 20 },
];

window.spikes = [
  { x: 507, y: 305, size: 44 },
  { x: 551, y: 305, size: 47 },
  { x: 803, y: 229, size: 37 },
  { x: 1372, y: 176, size: 21 },
  { x: 2630, y: 205, size: 46 },
  { x: 2676, y: 205, size: 42 },
  { x: 2718, y: 205, size: 31 },
  { x: 4238, y: 383, size: 12 },
  { x: 4250, y: 383, size: 31 },
  { x: 7059, y: 484, size: 29 },
  { x: 7088, y: 484, size: 38 },
  { x: 8458, y: 312, size: 42 },
  { x: 9280, y: 148, size: 46 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1845, y: 146, reached: false },
  { x: 3828, y: 264, reached: false },
  { x: 5446, y: 489, reached: false },
  { x: 7508, y: 454, reached: false },
  { x: 9760, y: 118, reached: false },
  { x: 11392, y: 116, reached: false },
  { x: 11951, y: 121, reached: false }, // Final
];
