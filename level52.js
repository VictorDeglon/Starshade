// Level 52 Data — "Voidlight Traverse"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 52";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 711, y: 290, width: 211, height: 18 },
  { x: 1100, y: 203, width: 153, height: 17 },
  { x: 1670, y: 122, width: 99, height: 19 },
  { x: 1933, y: 122, width: 381, height: 16 },
  { x: 2537, y: 111, width: 157, height: 14 },
  { x: 2921, y: 118, width: 134, height: 24, melt: true, meltDelay: 20 },
  { x: 3301, y: 172, width: 98, height: 25, conveyor: true, conveyorSpeed: -1.14 },
  { x: 3645, y: 232, width: 100, height: 21, conveyor: true, conveyorSpeed: 1.23 },
  { x: 3909, y: 232, width: 299, height: 30 },
  { x: 4460, y: 323, width: 170, height: 24, melt: true, meltDelay: 20 },
  { x: 4882, y: 404, width: 143, height: 28, melt: true, meltDelay: 20 },
  { x: 5277, y: 484, width: 81, height: 26, melt: true, meltDelay: 20 },
  { x: 5522, y: 484, width: 356, height: 21 },
  { x: 6124, y: 538, width: 175, height: 14, moveAxis: "x", moveRange: 107, moveSpeed: 0.037, movePhase: 6.12 },
  { x: 6526, y: 540, width: 73, height: 24 },
  { x: 7049, y: 534, width: 72, height: 26, melt: true, meltDelay: 20 },
  { x: 7552, y: 480, width: 127, height: 19, melt: true, meltDelay: 20 },
  { x: 7679, y: 480, width: 274, height: 20 },
  { x: 8160, y: 469, width: 103, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.37693877551020405 },
  { x: 8458, y: 456, width: 279, height: 20 },
  { x: 8915, y: 370, width: 211, height: 22, conveyor: true, conveyorSpeed: -1.99 },
  { x: 9533, y: 267, width: 55, height: 22, melt: true, meltDelay: 20 },
  { x: 9766, y: 178, width: 81, height: 18, bounce: true, bounceStrength: -16 },
  { x: 10031, y: 94, width: 193, height: 30, moveAxis: "y", moveRange: 93, moveSpeed: 0.052, movePhase: 5.07 },
  { x: 10388, y: 94, width: 224, height: 28 },
  { x: 11043, y: 43, width: 49, height: 14, melt: true, meltDelay: 20 },
  { x: 11309, y: 29, width: 70, height: 25, melt: true, meltDelay: 20 },
  { x: 11612, y: 48, width: 181, height: 26, melt: true, meltDelay: 20 },
  { x: 12039, y: 99, width: 87, height: 25, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 12290, y: 99, width: 208, height: 28 },
  { x: 12750, y: 173, width: 153, height: 25, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 13059, y: 182, width: 402, height: 20 },
];

window.deadlyPlatforms = [
  { x: 959, y: 298, width: 114, height: 20 },
  { x: 1288, y: 211, width: 93, height: 20 },
  { x: 2721, y: 114, width: 84, height: 20 },
  { x: 6624, y: 539, width: 60, height: 20 },
];

window.spikes = [
  { x: 751, y: 290, size: 13 },
  { x: 1155, y: 203, size: 13 },
  { x: 1692, y: 122, size: 33 },
  { x: 2563, y: 111, size: 14 },
  { x: 2577, y: 111, size: 38 },
  { x: 6546, y: 540, size: 42 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2124, y: 92, reached: false },
  { x: 4059, y: 202, reached: false },
  { x: 5700, y: 454, reached: false },
  { x: 8518, y: 426, reached: false },
  { x: 10500, y: 64, reached: false },
  { x: 12394, y: 69, reached: false },
  { x: 13260, y: 152, reached: false }, // Final
];
