// Level 70 Data — "The Cracked Horizon"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 70";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 478, y: 290, width: 178, height: 23 },
  { x: 831, y: 192, width: 191, height: 15 },
  { x: 1200, y: 101, width: 115, height: 17, melt: true, meltDelay: 20 },
  { x: 1722, y: 1, width: 75, height: 17, moveAxis: "x", moveRange: 106, moveSpeed: 0.061, movePhase: 3.51 },
  { x: 1961, y: 1, width: 344, height: 30 },
  { x: 2736, y: -52, width: 153, height: 20 },
  { x: 3329, y: -79, width: 54, height: 18, conveyor: true, conveyorSpeed: -1.95 },
  { x: 3610, y: -73, width: 110, height: 24 },
  { x: 3720, y: -73, width: 273, height: 20 },
  { x: 4185, y: -92, width: 109, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 4477, y: -118, width: 257, height: 20 },
  { x: 4977, y: -72, width: 53, height: 18, conveyor: true, conveyorSpeed: -1.57 },
  { x: 5282, y: -4, width: 51, height: 24, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 5585, y: 94, width: 157, height: 24 },
  { x: 5994, y: 184, width: 116, height: 29, melt: true, meltDelay: 20 },
  { x: 6274, y: 184, width: 219, height: 18 },
  { x: 6745, y: 285, width: 210, height: 21, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 7207, y: 354, width: 188, height: 15, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 7638, y: 394, width: 69, height: 28, melt: true, meltDelay: 20 },
  { x: 7707, y: 394, width: 261, height: 20 },
  { x: 8166, y: 367, width: 104, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 8447, y: 349, width: 243, height: 20 },
  { x: 8907, y: 333, width: 184, height: 19, bounce: true, bounceStrength: -19 },
  { x: 9285, y: 270, width: 63, height: 20, melt: true, meltDelay: 20 },
  { x: 9765, y: 184, width: 70, height: 16, melt: true, meltDelay: 20 },
  { x: 9999, y: 184, width: 181, height: 30 },
  { x: 10591, y: 91, width: 103, height: 28 },
  { x: 11101, y: -11, width: 108, height: 19, moveAxis: "y", moveRange: 99, moveSpeed: 0.052, movePhase: 3.68 },
  { x: 11387, y: -99, width: 111, height: 26 },
  { x: 11696, y: -158, width: 73, height: 19, melt: true, meltDelay: 20 },
  { x: 11933, y: -158, width: 252, height: 17 },
  { x: 12402, y: -177, width: 98, height: 24, bounce: true, bounceStrength: -18 },
  { x: 12733, y: -156, width: 216, height: 26, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 13192, y: -110, width: 174, height: 23, moveAxis: "x", moveRange: 81, moveSpeed: 0.064, movePhase: 4.95 },
  { x: 13618, y: -33, width: 47, height: 25, moveAxis: "y", moveRange: 126, moveSpeed: 0.064, movePhase: 1.31 },
  { x: 13870, y: -42, width: 388, height: 20 },
];

window.deadlyPlatforms = [
  { x: 11044, y: 16, width: 71, height: 23, moveAxis: "x", moveRange: 119, moveSpeed: 0.044, movePhase: 1.22 },
  { x: 13247, y: -72, width: 97, height: 15, moveAxis: "y", moveRange: 89, moveSpeed: 0.068, movePhase: 1.19 },
  { x: 13540, y: -5, width: 50, height: 18, moveAxis: "x", moveRange: 126, moveSpeed: 0.068, movePhase: 4.02 },
  { x: 682, y: 286, width: 103, height: 20 },
  { x: 2918, y: -44, width: 137, height: 20 },
  { x: 3759, y: -82, width: 65, height: 20 },
  { x: 5765, y: 99, width: 99, height: 20 },
  { x: 10732, y: 100, width: 70, height: 20 },
  { x: 11518, y: -91, width: 61, height: 20 },
];

window.spikes = [
  { x: 529, y: 290, size: 61 },
  { x: 590, y: 290, size: 49 },
  { x: 871, y: 192, size: 17 },
  { x: 888, y: 192, size: 52 },
  { x: 940, y: 192, size: 46 },
  { x: 2783, y: -52, size: 34 },
  { x: 2817, y: -52, size: 53 },
  { x: 3627, y: -73, size: 47 },
  { x: 3674, y: -73, size: 21 },
  { x: 5642, y: 94, size: 26 },
  { x: 5668, y: 94, size: 38 },
  { x: 11412, y: -99, size: 41 },
  { x: 11453, y: -99, size: 27 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2133, y: -29, reached: false },
  { x: 4537, y: -148, reached: false },
  { x: 6384, y: 154, reached: false },
  { x: 8507, y: 319, reached: false },
  { x: 10090, y: 154, reached: false },
  { x: 12059, y: -188, reached: false },
  { x: 14064, y: -72, reached: false }, // Final
];
