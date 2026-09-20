// Level 30 Data — "Hollow Meridian"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 30";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 543, y: 463, width: 181, height: 27, ghost: true, ghostPeriod: 129, ghostOnRatio: 0.4272959183673469 },
  { x: 967, y: 541, width: 204, height: 23, ghost: true, ghostPeriod: 129, ghostOnRatio: 0.4272959183673469 },
  { x: 1414, y: 610, width: 124, height: 15, ghost: true, ghostPeriod: 129, ghostOnRatio: 0.4272959183673469 },
  { x: 1766, y: 640, width: 50, height: 17, moveAxis: "x", moveRange: 78, moveSpeed: 0.046, movePhase: 5.29 },
  { x: 1980, y: 640, width: 263, height: 21 },
  { x: 2668, y: 616, width: 190, height: 23 },
  { x: 3283, y: 583, width: 200, height: 30, melt: true, meltDelay: 21 },
  { x: 3670, y: 518, width: 217, height: 15 },
  { x: 4051, y: 518, width: 188, height: 27 },
  { x: 4636, y: 427, width: 208, height: 20 },
  { x: 5016, y: 339, width: 76, height: 20 },
  { x: 5264, y: 249, width: 134, height: 21, melt: true, meltDelay: 21 },
  { x: 5589, y: 191, width: 57, height: 16, moveAxis: "x", moveRange: 73, moveSpeed: 0.036, movePhase: 4.78 },
  { x: 5810, y: 191, width: 317, height: 19 },
  { x: 6552, y: 167, width: 82, height: 23, bounce: true, bounceStrength: -18 },
  { x: 6853, y: 167, width: 137, height: 24, melt: true, meltDelay: 21 },
  { x: 7218, y: 199, width: 218, height: 18, bounce: true, bounceStrength: -18 },
  { x: 7600, y: 199, width: 280, height: 24 },
  { x: 8123, y: 287, width: 131, height: 29, ghost: true, ghostPeriod: 129, ghostOnRatio: 0.4272959183673469 },
  { x: 8497, y: 364, width: 61, height: 16 },
  { x: 8801, y: 440, width: 138, height: 30, ghost: true, ghostPeriod: 129, ghostOnRatio: 0.4272959183673469 },
  { x: 9182, y: 523, width: 192, height: 30, moveAxis: "x", moveRange: 107, moveSpeed: 0.046, movePhase: 4.64 },
  { x: 9538, y: 523, width: 388, height: 28 },
  { x: 10154, y: 551, width: 145, height: 26, melt: true, meltDelay: 21 },
  { x: 10527, y: 582, width: 129, height: 25, conveyor: true, conveyorSpeed: -2.14 },
  { x: 11081, y: 558, width: 115, height: 26 },
  { x: 11617, y: 520, width: 138, height: 24 },
  { x: 11953, y: 528, width: 411, height: 20 },
];

window.deadlyPlatforms = [
  { x: 1685, y: 686, width: 50, height: 21, moveAxis: "y", moveRange: 86, moveSpeed: 0.042, movePhase: 5.21 },
  { x: 2896, y: 614, width: 131, height: 20 },
  { x: 3918, y: 509, width: 142, height: 20 },
  { x: 8585, y: 369, width: 60, height: 20 },
];

window.spikes = [
  { x: 2733, y: 616, size: 12 },
  { x: 3721, y: 518, size: 38 },
  { x: 3759, y: 518, size: 20 },
  { x: 3779, y: 518, size: 12 },
  { x: 4711, y: 427, size: 34 },
  { x: 4745, y: 427, size: 16 },
  { x: 4761, y: 427, size: 19 },
  { x: 4780, y: 427, size: 48 },
  { x: 5030, y: 339, size: 27 },
  { x: 5057, y: 339, size: 29 },
  { x: 11111, y: 558, size: 25 },
  { x: 11136, y: 558, size: 22 },
  { x: 11158, y: 558, size: 25 },
  { x: 11664, y: 520, size: 43 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2112, y: 610, reached: false },
  { x: 4145, y: 488, reached: false },
  { x: 5969, y: 161, reached: false },
  { x: 7740, y: 169, reached: false },
  { x: 9732, y: 493, reached: false },
  { x: 12159, y: 498, reached: false }, // Final
];
