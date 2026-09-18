// Level 14 Data — "Glass Causeway"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 14";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 435, y: 324, width: 54, height: 13 },
  { x: 696, y: 274, width: 54, height: 31 },
  { x: 906, y: 204, width: 180, height: 25, moveAxis: "x", moveRange: 89, moveSpeed: 0.034, movePhase: 2.98 },
  { x: 1368, y: 171, width: 192, height: 43 },
  { x: 1770, y: 171, width: 255, height: 16 },
  { x: 2161, y: 154, width: 102, height: 25, melt: true, meltDelay: 25 },
  { x: 2406, y: 168, width: 66, height: 38 },
  { x: 2688, y: 201, width: 136, height: 20 },
  { x: 2960, y: 201, width: 301, height: 26 },
  { x: 3436, y: 255, width: 95, height: 13, ghost: true, ghostPeriod: 158, ghostOnRatio: 0.5195652173913043 },
  { x: 3749, y: 324, width: 120, height: 29, ghost: true, ghostPeriod: 158, ghostOnRatio: 0.5195652173913043 },
  { x: 4020, y: 398, width: 76, height: 35 },
  { x: 4234, y: 455, width: 107, height: 38 },
  { x: 4341, y: 455, width: 254, height: 20 },
  { x: 4803, y: 441, width: 103, height: 20, ghost: true, ghostPeriod: 153, ghostOnRatio: 0.49565217391304345 },
  { x: 5101, y: 413, width: 265, height: 20 },
  { x: 5530, y: 450, width: 116, height: 28, ghost: true, ghostPeriod: 158, ghostOnRatio: 0.5195652173913043 },
  { x: 5787, y: 451, width: 224, height: 43 },
  { x: 6202, y: 428, width: 72, height: 18, melt: true, meltDelay: 25 },
  { x: 6549, y: 385, width: 74, height: 43 },
  { x: 6815, y: 385, width: 185, height: 27 },
  { x: 7206, y: 333, width: 126, height: 24 },
  { x: 7616, y: 264, width: 95, height: 29, moveAxis: "y", moveRange: 92, moveSpeed: 0.034, movePhase: 3.5 },
  { x: 8036, y: 191, width: 148, height: 41, melt: true, meltDelay: 25 },
  { x: 8331, y: 124, width: 137, height: 24 },
  { x: 8667, y: 118, width: 439, height: 20 },
];

window.deadlyPlatforms = [
  { x: 2495, y: 169, width: 60, height: 20 },
  { x: 6653, y: 377, width: 60, height: 20 },
  { x: 7366, y: 340, width: 86, height: 20 },
  { x: 8506, y: 131, width: 89, height: 20 },
];

window.spikes = [
  { x: 452, y: 324, size: 17 },
  { x: 704, y: 274, size: 19 },
  { x: 1393, y: 171, size: 14 },
  { x: 1407, y: 171, size: 14 },
  { x: 1421, y: 171, size: 37 },
  { x: 1458, y: 171, size: 33 },
  { x: 2421, y: 168, size: 17 },
  { x: 4032, y: 398, size: 34 },
  { x: 4260, y: 455, size: 27 },
  { x: 8377, y: 124, size: 17 },
  { x: 8394, y: 124, size: 21 },
  { x: 8415, y: 124, size: 34 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1898, y: 141, reached: false },
  { x: 3111, y: 171, reached: false },
  { x: 5161, y: 383, reached: false },
  { x: 6908, y: 355, reached: false },
  { x: 8887, y: 88, reached: false }, // Final
];
