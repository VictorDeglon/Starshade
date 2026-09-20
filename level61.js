// Level 61 Data — "The Drowned Sky"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 61";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 552, y: 484, width: 65, height: 22, moveAxis: "y", moveRange: 98, moveSpeed: 0.052, movePhase: 5.94 },
  { x: 869, y: 570, width: 173, height: 20, melt: true, meltDelay: 20 },
  { x: 1294, y: 672, width: 180, height: 14, melt: true, meltDelay: 20 },
  { x: 1638, y: 672, width: 207, height: 25 },
  { x: 2097, y: 742, width: 174, height: 19, bounce: true, bounceStrength: -17 },
  { x: 2508, y: 777, width: 87, height: 24, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 2822, y: 777, width: 74, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 3109, y: 749, width: 192, height: 27, melt: true, meltDelay: 20 },
  { x: 3301, y: 749, width: 262, height: 20 },
  { x: 3764, y: 738, width: 102, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35857142857142854 },
  { x: 4058, y: 727, width: 259, height: 20 },
  { x: 4738, y: 654, width: 48, height: 25, moveAxis: "y", moveRange: 116, moveSpeed: 0.047, movePhase: 5.58 },
  { x: 4970, y: 571, width: 128, height: 30 },
  { x: 5267, y: 470, width: 57, height: 27, melt: true, meltDelay: 20 },
  { x: 5488, y: 470, width: 304, height: 20 },
  { x: 6213, y: 396, width: 200, height: 19, melt: true, meltDelay: 20 },
  { x: 6844, y: 348, width: 75, height: 14 },
  { x: 7136, y: 334, width: 63, height: 19 },
  { x: 7422, y: 327, width: 166, height: 25, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 7588, y: 327, width: 264, height: 20 },
  { x: 8056, y: 314, width: 94, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35857142857142854 },
  { x: 8355, y: 286, width: 235, height: 20 },
  { x: 8836, y: 347, width: 83, height: 14, moveAxis: "x", moveRange: 81, moveSpeed: 0.046, movePhase: 5.47 },
  { x: 9171, y: 438, width: 103, height: 16, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 9526, y: 521, width: 178, height: 28, melt: true, meltDelay: 20 },
  { x: 9956, y: 620, width: 103, height: 17 },
  { x: 10223, y: 620, width: 255, height: 27 },
  { x: 10730, y: 694, width: 115, height: 17, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 11091, y: 746, width: 224, height: 27, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 11548, y: 766, width: 229, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 11941, y: 766, width: 324, height: 21 },
  { x: 12711, y: 747, width: 94, height: 19 },
  { x: 13226, y: 674, width: 128, height: 30, conveyor: true, conveyorSpeed: 1.95 },
  { x: 13542, y: 600, width: 190, height: 22, melt: true, meltDelay: 20 },
  { x: 13941, y: 586, width: 423, height: 20 },
];

window.deadlyPlatforms = [
  { x: 499, y: 509, width: 58, height: 16, moveAxis: "x", moveRange: 82, moveSpeed: 0.054, movePhase: 2.72 },
  { x: 5122, y: 567, width: 104, height: 20 },
  { x: 6956, y: 340, width: 60, height: 20 },
  { x: 10097, y: 624, width: 86, height: 20 },
];

window.spikes = [
  { x: 4992, y: 571, size: 12 },
  { x: 5004, y: 571, size: 25 },
  { x: 7146, y: 334, size: 29 },
  { x: 9984, y: 620, size: 52 },
  { x: 12745, y: 747, size: 17 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1742, y: 642, reached: false },
  { x: 4118, y: 697, reached: false },
  { x: 5640, y: 440, reached: false },
  { x: 8415, y: 256, reached: false },
  { x: 10351, y: 590, reached: false },
  { x: 12103, y: 736, reached: false },
  { x: 14153, y: 556, reached: false }, // Final
];
