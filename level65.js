// Level 65 Data — "Crossfire Causeway"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Crossfire Causeway";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 475, y: 287, width: 157, height: 21, moveAxis: "y", moveRange: 74, moveSpeed: 0.041, movePhase: 5.55 },
  { x: 836, y: 238, width: 139, height: 22 },
  { x: 1179, y: 190, width: 153, height: 19, melt: true, meltDelay: 20 },
  { x: 1549, y: 172, width: 231, height: 24 },
  { x: 1944, y: 172, width: 330, height: 30 },
  { x: 2520, y: 230, width: 219, height: 30, melt: true, meltDelay: 20 },
  { x: 2991, y: 319, width: 100, height: 24, conveyor: true, conveyorSpeed: 1.61 },
  { x: 3343, y: 422, width: 154, height: 24, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 3497, y: 422, width: 292, height: 20 },
  { x: 3987, y: 395, width: 91, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35040816326530605 },
  { x: 4279, y: 378, width: 260, height: 20 },
  { x: 4791, y: 464, width: 55, height: 20, melt: true, meltDelay: 20 },
  { x: 5098, y: 555, width: 165, height: 26, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 5509, y: 613, width: 58, height: 14, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 5567, y: 613, width: 287, height: 20 },
  { x: 6051, y: 598, width: 106, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35040816326530605 },
  { x: 6345, y: 582, width: 223, height: 20 },
  { x: 6795, y: 589, width: 182, height: 28, moveAxis: "x", moveRange: 136, moveSpeed: 0.05, movePhase: 4.51 },
  { x: 7417, y: 559, width: 125, height: 14, moveAxis: "x", moveRange: 91, moveSpeed: 0.057, movePhase: 5.23 },
  { x: 7746, y: 507, width: 92, height: 20, melt: true, meltDelay: 20 },
  { x: 8032, y: 438, width: 186, height: 21 },
  { x: 8382, y: 438, width: 295, height: 19 },
  { x: 9088, y: 351, width: 147, height: 17, melt: true, meltDelay: 20 },
  { x: 9646, y: 258, width: 184, height: 18, moveAxis: "y", moveRange: 131, moveSpeed: 0.055, movePhase: 4.47 },
  { x: 10018, y: 180, width: 169, height: 25 },
  { x: 10614, y: 123, width: 159, height: 17, bounce: true, bounceStrength: -17 },
  { x: 10937, y: 123, width: 361, height: 14 },
  { x: 11744, y: 104, width: 142, height: 17, moveAxis: "y", moveRange: 129, moveSpeed: 0.062, movePhase: 4.8 },
  { x: 12123, y: 141, width: 62, height: 21, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 12431, y: 195, width: 144, height: 16, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 12827, y: 260, width: 230, height: 29, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 13221, y: 260, width: 376, height: 30 },
  { x: 13849, y: 347, width: 71, height: 30, melt: true, meltDelay: 20 },
  { x: 14172, y: 453, width: 189, height: 16, conveyor: true, conveyorSpeed: -1.06 },
  { x: 14521, y: 443, width: 397, height: 20 },
];

window.deadlyPlatforms = [
  { x: 404, y: 254, width: 88, height: 15, moveAxis: "x", moveRange: 89, moveSpeed: 0.044, movePhase: 5.34 },
  { x: 6706, y: 620, width: 116, height: 20, moveAxis: "y", moveRange: 122, moveSpeed: 0.059, movePhase: 5.79 },
  { x: 7504, y: 609, width: 92, height: 18, moveAxis: "y", moveRange: 99, moveSpeed: 0.067, movePhase: 1.86 },
  { x: 9710, y: 226, width: 142, height: 23, moveAxis: "x", moveRange: 151, moveSpeed: 0.052, movePhase: 4.33 },
  { x: 1002, y: 244, width: 116, height: 20 },
  { x: 1812, y: 174, width: 195, height: 20 },
  { x: 8254, y: 443, width: 123, height: 20 },
  { x: 10209, y: 183, width: 150, height: 20 },
];

window.spikes = [
  { x: 873, y: 238, size: 30 },
  { x: 903, y: 238, size: 13 },
  { x: 8076, y: 438, size: 15 },
  { x: 8091, y: 438, size: 59 },
  { x: 8150, y: 438, size: 47 },
  { x: 10075, y: 180, size: 16 },
  { x: 10091, y: 180, size: 25 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2109, y: 142, reached: false },
  { x: 4339, y: 348, reached: false },
  { x: 6405, y: 552, reached: false },
  { x: 8530, y: 408, reached: false },
  { x: 11118, y: 93, reached: false },
  { x: 13409, y: 230, reached: false },
  { x: 14720, y: 413, reached: false }, // Final
];
