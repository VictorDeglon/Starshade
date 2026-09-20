// Level 39 Data — "Molten Parapet"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 39";
window.levelAccent = "#ff9838";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 705, y: 285, width: 130, height: 19 },
  { x: 1011, y: 195, width: 208, height: 15 },
  { x: 1401, y: 114, width: 92, height: 29 },
  { x: 1657, y: 114, width: 385, height: 27 },
  { x: 2463, y: 51, width: 188, height: 30 },
  { x: 2861, y: 27, width: 190, height: 28, moveAxis: "x", moveRange: 117, moveSpeed: 0.043, movePhase: 5.98 },
  { x: 3280, y: 44, width: 68, height: 27, conveyor: true, conveyorSpeed: -2.07 },
  { x: 3512, y: 44, width: 224, height: 14 },
  { x: 3975, y: 94, width: 181, height: 19, moveAxis: "x", moveRange: 96, moveSpeed: 0.051, movePhase: 5.23 },
  { x: 4399, y: 157, width: 137, height: 29, ghost: true, ghostPeriod: 121, ghostOnRatio: 0.40433673469387754 },
  { x: 4785, y: 233, width: 188, height: 20 },
  { x: 5137, y: 233, width: 223, height: 21 },
  { x: 5609, y: 309, width: 213, height: 27, melt: true, meltDelay: 20 },
  { x: 6071, y: 376, width: 184, height: 26, melt: true, meltDelay: 20 },
  { x: 6494, y: 419, width: 203, height: 19, moveAxis: "y", moveRange: 86, moveSpeed: 0.048, movePhase: 0.83 },
  { x: 6861, y: 419, width: 274, height: 15 },
  { x: 7359, y: 428, width: 63, height: 29, moveAxis: "y", moveRange: 84, moveSpeed: 0.045, movePhase: 4.53 },
  { x: 7856, y: 399, width: 186, height: 21 },
  { x: 8233, y: 336, width: 192, height: 24 },
  { x: 8589, y: 336, width: 305, height: 15 },
  { x: 9309, y: 261, width: 150, height: 14 },
  { x: 9631, y: 164, width: 153, height: 19 },
  { x: 9966, y: 82, width: 218, height: 19 },
  { x: 10605, y: 23, width: 86, height: 29, moveAxis: "x", moveRange: 93, moveSpeed: 0.036, movePhase: 1.26 },
  { x: 10855, y: 23, width: 394, height: 17 },
  { x: 11454, y: -13, width: 50, height: 17, conveyor: true, conveyorSpeed: -1.37 },
  { x: 11728, y: -2, width: 197, height: 28, melt: true, meltDelay: 20 },
  { x: 12158, y: 30, width: 173, height: 22 },
  { x: 12510, y: 43, width: 401, height: 20 },
];

window.deadlyPlatforms = [
  { x: 3928, y: 151, width: 103, height: 14, moveAxis: "y", moveRange: 92, moveSpeed: 0.058, movePhase: 0.17 },
  { x: 10555, y: -22, width: 67, height: 17, moveAxis: "y", moveRange: 73, moveSpeed: 0.034, movePhase: 5.55 },
  { x: 864, y: 284, width: 78, height: 20 },
  { x: 1250, y: 187, width: 142, height: 20 },
  { x: 2681, y: 48, width: 159, height: 20 },
  { x: 5010, y: 242, width: 98, height: 20 },
  { x: 8075, y: 391, width: 129, height: 20 },
  { x: 9487, y: 257, width: 105, height: 20 },
  { x: 10211, y: 73, width: 190, height: 20 },
];

window.spikes = [
  { x: 733, y: 285, size: 26 },
  { x: 759, y: 285, size: 24 },
  { x: 1039, y: 195, size: 48 },
  { x: 1419, y: 114, size: 35 },
  { x: 4847, y: 233, size: 50 },
  { x: 4897, y: 233, size: 52 },
  { x: 7894, y: 399, size: 17 },
  { x: 8284, y: 336, size: 45 },
  { x: 12197, y: 30, size: 13 },
  { x: 12210, y: 30, size: 46 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1850, y: 84, reached: false },
  { x: 3624, y: 14, reached: false },
  { x: 5249, y: 203, reached: false },
  { x: 6998, y: 389, reached: false },
  { x: 8742, y: 306, reached: false },
  { x: 11052, y: -7, reached: false },
  { x: 12711, y: 13, reached: false }, // Final
];

window.forceZones = [
  { x: 6871, y: 329, width: 254, height: 90, axis: "x", force: -0.158 },
];
