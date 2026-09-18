// Level 18 Data — "Phantom Causeway"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 18";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 446, y: 430, width: 65, height: 45, ghost: true, ghostPeriod: 144, ghostOnRatio: 0.47608695652173916 },
  { x: 704, y: 482, width: 179, height: 15, melt: true, meltDelay: 23 },
  { x: 1092, y: 499, width: 78, height: 33, ghost: true, ghostPeriod: 144, ghostOnRatio: 0.47608695652173916 },
  { x: 1332, y: 499, width: 245, height: 24 },
  { x: 1773, y: 457, width: 82, height: 32 },
  { x: 2154, y: 401, width: 149, height: 38 },
  { x: 2482, y: 341, width: 83, height: 23, moveAxis: "x", moveRange: 59, moveSpeed: 0.034, movePhase: 5.56 },
  { x: 2767, y: 282, width: 57, height: 34, moveAxis: "x", moveRange: 74, moveSpeed: 0.033, movePhase: 2.64 },
  { x: 2989, y: 282, width: 375, height: 20 },
  { x: 3495, y: 222, width: 158, height: 38, moveAxis: "x", moveRange: 95, moveSpeed: 0.035, movePhase: 0.87 },
  { x: 3817, y: 170, width: 210, height: 14, moveAxis: "x", moveRange: 98, moveSpeed: 0.035, movePhase: 4.61 },
  { x: 4205, y: 119, width: 56, height: 16 },
  { x: 4416, y: 100, width: 86, height: 17, moveAxis: "x", moveRange: 87, moveSpeed: 0.04, movePhase: 0.33 },
  { x: 4502, y: 100, width: 296, height: 20 },
  { x: 5003, y: 76, width: 101, height: 20, ghost: true, ghostPeriod: 141, ghostOnRatio: 0.4608695652173913 },
  { x: 5287, y: 59, width: 224, height: 20 },
  { x: 5697, y: 82, width: 136, height: 41 },
  { x: 6019, y: 133, width: 135, height: 45, ghost: true, ghostPeriod: 144, ghostOnRatio: 0.47608695652173916 },
  { x: 6346, y: 184, width: 201, height: 35, ghost: true, ghostPeriod: 144, ghostOnRatio: 0.47608695652173916 },
  { x: 6692, y: 258, width: 186, height: 29 },
  { x: 7051, y: 258, width: 240, height: 45 },
  { x: 7438, y: 314, width: 221, height: 45, ghost: true, ghostPeriod: 144, ghostOnRatio: 0.47608695652173916 },
  { x: 7871, y: 362, width: 75, height: 41 },
  { x: 8108, y: 411, width: 210, height: 28, moveAxis: "y", moveRange: 86, moveSpeed: 0.048, movePhase: 5.02 },
  { x: 8508, y: 435, width: 100, height: 37, ghost: true, ghostPeriod: 144, ghostOnRatio: 0.47608695652173916 },
  { x: 8773, y: 435, width: 318, height: 12 },
  { x: 9233, y: 399, width: 203, height: 17, moveAxis: "x", moveRange: 65, moveSpeed: 0.042, movePhase: 5.5 },
  { x: 9613, y: 411, width: 404, height: 20 },
];

window.deadlyPlatforms = [
  { x: 1876, y: 453, width: 60, height: 20 },
  { x: 2330, y: 392, width: 108, height: 20 },
  { x: 4281, y: 114, width: 60, height: 20 },
  { x: 6915, y: 252, width: 157, height: 20 },
];

window.spikes = [
  { x: 1798, y: 457, size: 39 },
  { x: 4216, y: 119, size: 26 },
  { x: 5732, y: 82, size: 41 },
  { x: 6738, y: 258, size: 35 },
  { x: 6773, y: 258, size: 42 },
  { x: 7892, y: 362, size: 36 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1455, y: 469, reached: false },
  { x: 3177, y: 252, reached: false },
  { x: 5347, y: 29, reached: false },
  { x: 7171, y: 228, reached: false },
  { x: 8932, y: 405, reached: false },
  { x: 9815, y: 381, reached: false }, // Final
];
