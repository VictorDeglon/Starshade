// Level 14 Data — "Glass Causeway"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 14";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 435, y: 346, width: 75, height: 20 },
  { x: 825, y: 295, width: 164, height: 20 },
  { x: 1312, y: 254, width: 174, height: 20 },
  { x: 1705, y: 254, width: 225, height: 20 },
  { x: 2144, y: 240, width: 94, height: 20 },
  { x: 2448, y: 242, width: 107, height: 20, melt: true, meltDelay: 29 },
  { x: 2763, y: 256, width: 77, height: 20 },
  { x: 3006, y: 256, width: 287, height: 20 },
  { x: 3464, y: 299, width: 117, height: 20 },
  { x: 3734, y: 325, width: 87, height: 20 },
  { x: 3957, y: 357, width: 130, height: 20 },
  { x: 4296, y: 357, width: 260, height: 20 },
  { x: 4719, y: 410, width: 92, height: 20, moveAxis: "y", moveRange: 34, moveSpeed: 0.027, movePhase: 2.32 },
  { x: 4950, y: 444, width: 91, height: 20 },
  { x: 5233, y: 472, width: 135, height: 20, ghost: true, ghostPeriod: 193, ghostOnRatio: 0.6291666666666667 },
  { x: 5527, y: 479, width: 155, height: 20 },
  { x: 5833, y: 479, width: 236, height: 20 },
  { x: 6259, y: 466, width: 435, height: 20 },
];

window.deadlyPlatforms = [
  { x: 534, y: 339, width: 65, height: 20 },
];

window.spikes = [
  { x: 2202, y: 240, size: 24 },
  { x: 4000, y: 357, size: 23 },
  { x: 5600, y: 479, size: 31 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1818, y: 224, reached: false },
  { x: 3150, y: 226, reached: false },
  { x: 4426, y: 327, reached: false },
  { x: 5951, y: 449, reached: false },
  { x: 6477, y: 436, reached: false }, // Final
];
