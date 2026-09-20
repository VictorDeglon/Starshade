// Level 43 Data — "Duskbound Causeway"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 43";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 551, y: 463, width: 139, height: 19 },
  { x: 941, y: 533, width: 99, height: 28, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 1281, y: 576, width: 58, height: 27, melt: true, meltDelay: 20 },
  { x: 1571, y: 589, width: 134, height: 27, bounce: true, bounceStrength: -19 },
  { x: 1869, y: 589, width: 313, height: 27 },
  { x: 2611, y: 539, width: 77, height: 22 },
  { x: 2875, y: 463, width: 79, height: 19, moveAxis: "x", moveRange: 113, moveSpeed: 0.049, movePhase: 3.39 },
  { x: 3137, y: 382, width: 125, height: 17 },
  { x: 3667, y: 279, width: 63, height: 24 },
  { x: 3730, y: 279, width: 246, height: 20 },
  { x: 4180, y: 262, width: 91, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.39530612244897956 },
  { x: 4479, y: 248, width: 265, height: 20 },
  { x: 5159, y: 163, width: 228, height: 18 },
  { x: 5816, y: 110, width: 112, height: 27 },
  { x: 6140, y: 80, width: 227, height: 14, moveAxis: "x", moveRange: 102, moveSpeed: 0.055, movePhase: 2.64 },
  { x: 6593, y: 81, width: 106, height: 28 },
  { x: 6863, y: 81, width: 376, height: 27 },
  { x: 7474, y: 118, width: 161, height: 25, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 7886, y: 192, width: 50, height: 14, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 8187, y: 268, width: 94, height: 30 },
  { x: 8445, y: 268, width: 314, height: 18 },
  { x: 9010, y: 367, width: 76, height: 23 },
  { x: 9337, y: 459, width: 148, height: 24, bounce: true, bounceStrength: -19 },
  { x: 9726, y: 503, width: 233, height: 21, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 10194, y: 532, width: 147, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 10505, y: 532, width: 321, height: 30 },
  { x: 11270, y: 513, width: 227, height: 24, melt: true, meltDelay: 20 },
  { x: 11926, y: 463, width: 65, height: 14, melt: true, meltDelay: 20 },
  { x: 12416, y: 404, width: 158, height: 30 },
  { x: 12983, y: 313, width: 110, height: 20 },
  { x: 13273, y: 316, width: 433, height: 20 },
];

window.deadlyPlatforms = [
  { x: 719, y: 457, width: 70, height: 20 },
  { x: 3750, y: 286, width: 60, height: 20 },
  { x: 5423, y: 164, width: 174, height: 20 },
  { x: 6732, y: 87, width: 69, height: 20 },
  { x: 8308, y: 274, width: 67, height: 20 },
  { x: 9120, y: 358, width: 62, height: 20 },
  { x: 12605, y: 413, width: 127, height: 20 },
];

window.spikes = [
  { x: 591, y: 463, size: 22 },
  { x: 613, y: 463, size: 34 },
  { x: 3681, y: 279, size: 12 },
  { x: 5202, y: 163, size: 51 },
  { x: 5253, y: 163, size: 30 },
  { x: 5842, y: 110, size: 25 },
  { x: 8202, y: 268, size: 14 },
  { x: 9022, y: 367, size: 52 },
  { x: 12441, y: 404, size: 47 },
  { x: 13009, y: 313, size: 40 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2026, y: 559, reached: false },
  { x: 4539, y: 218, reached: false },
  { x: 7051, y: 51, reached: false },
  { x: 8602, y: 238, reached: false },
  { x: 10666, y: 502, reached: false },
  { x: 13490, y: 286, reached: false }, // Final
];
