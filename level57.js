// Level 57 Data — "The Splitting Dark"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 57";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 731, y: 333, width: 233, height: 22, melt: true, meltDelay: 20 },
  { x: 1391, y: 271, width: 97, height: 28 },
  { x: 1663, y: 177, width: 120, height: 30, melt: true, meltDelay: 20 },
  { x: 1947, y: 177, width: 366, height: 20 },
  { x: 2720, y: 72, width: 152, height: 22, conveyor: true, conveyorSpeed: -2.17 },
  { x: 3047, y: -26, width: 164, height: 20, moveAxis: "x", moveRange: 96, moveSpeed: 0.042, movePhase: 0.53 },
  { x: 3395, y: -107, width: 120, height: 18, melt: true, meltDelay: 20 },
  { x: 3515, y: -107, width: 298, height: 20 },
  { x: 4008, y: -127, width: 93, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.366734693877551 },
  { x: 4296, y: -153, width: 242, height: 20 },
  { x: 4751, y: -176, width: 68, height: 26, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 5056, y: -151, width: 120, height: 14, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 5419, y: -107, width: 155, height: 18, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 5826, y: -41, width: 202, height: 21, conveyor: true, conveyorSpeed: -1.92 },
  { x: 6192, y: -41, width: 371, height: 19 },
  { x: 6815, y: 43, width: 167, height: 16, melt: true, meltDelay: 20 },
  { x: 7234, y: 131, width: 204, height: 14, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 7690, y: 208, width: 141, height: 16, moveAxis: "y", moveRange: 81, moveSpeed: 0.054, movePhase: 4.45 },
  { x: 8083, y: 273, width: 219, height: 22, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 8466, y: 273, width: 183, height: 24 },
  { x: 8882, y: 289, width: 176, height: 21, bounce: true, bounceStrength: -20 },
  { x: 9275, y: 274, width: 139, height: 28 },
  { x: 9612, y: 220, width: 168, height: 21, conveyor: true, conveyorSpeed: 1.08 },
  { x: 9964, y: 141, width: 230, height: 21, conveyor: true, conveyorSpeed: 0.95 },
  { x: 10358, y: 141, width: 363, height: 28 },
  { x: 10899, y: 52, width: 154, height: 30 },
  { x: 11231, y: -35, width: 146, height: 20, melt: true, meltDelay: 20 },
  { x: 11561, y: -117, width: 50, height: 20, moveAxis: "x", moveRange: 112, moveSpeed: 0.041, movePhase: 4.45 },
  { x: 12032, y: -184, width: 109, height: 30 },
  { x: 12305, y: -184, width: 225, height: 19 },
  { x: 12970, y: -213, width: 162, height: 22 },
  { x: 13359, y: -203, width: 103, height: 24, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 13630, y: -207, width: 430, height: 20 },
];

window.deadlyPlatforms = [
  { x: 7748, y: 268, width: 112, height: 19, moveAxis: "x", moveRange: 63, moveSpeed: 0.055, movePhase: 3.62 },
  { x: 1519, y: 271, width: 68, height: 20 },
  { x: 9434, y: 274, width: 95, height: 20 },
  { x: 12169, y: -182, width: 76, height: 20 },
  { x: 13152, y: -206, width: 145, height: 20 },
];

window.spikes = [
  { x: 1408, y: 271, size: 37 },
  { x: 9309, y: 274, size: 19 },
  { x: 9328, y: 274, size: 55 },
  { x: 10935, y: 52, size: 14 },
  { x: 12053, y: -184, size: 45 },
  { x: 13028, y: -213, size: 14 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2130, y: 147, reached: false },
  { x: 4356, y: -183, reached: false },
  { x: 6378, y: -71, reached: false },
  { x: 8558, y: 243, reached: false },
  { x: 10540, y: 111, reached: false },
  { x: 12418, y: -214, reached: false },
  { x: 13845, y: -237, reached: false }, // Final
];
