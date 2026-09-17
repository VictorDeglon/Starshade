// Level 13 Data — "Crimson Descent"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 13";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 485, y: 372, width: 148, height: 20 },
  { x: 920, y: 350, width: 135, height: 20 },
  { x: 1227, y: 306, width: 122, height: 20 },
  { x: 1485, y: 306, width: 293, height: 20 },
  { x: 2072, y: 256, width: 118, height: 20 },
  { x: 2494, y: 221, width: 100, height: 20, moveAxis: "x", moveRange: 35, moveSpeed: 0.018, movePhase: 3.57 },
  { x: 2748, y: 201, width: 112, height: 20 },
  { x: 3071, y: 201, width: 246, height: 20 },
  { x: 3523, y: 178, width: 121, height: 20, melt: true, meltDelay: 30 },
  { x: 3857, y: 170, width: 104, height: 20 },
  { x: 4167, y: 194, width: 174, height: 20 },
  { x: 4474, y: 194, width: 225, height: 20 },
  { x: 4831, y: 236, width: 137, height: 20 },
  { x: 5114, y: 280, width: 177, height: 20, ghost: true, ghostPeriod: 200, ghostOnRatio: 0.65 },
  { x: 5456, y: 327, width: 82, height: 20 },
  { x: 5734, y: 327, width: 297, height: 20 },
  { x: 6197, y: 336, width: 388, height: 20 },
];

window.deadlyPlatforms = [
  { x: 4992, y: 226, width: 97, height: 20 },
];

window.spikes = [
  { x: 1011, y: 350, size: 19 },
  { x: 3904, y: 170, size: 27 },
  { x: 4282, y: 194, size: 21 },
  { x: 4895, y: 236, size: 21 },
  { x: 5491, y: 327, size: 18 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1632, y: 276, reached: false },
  { x: 3194, y: 171, reached: false },
  { x: 4587, y: 164, reached: false },
  { x: 5883, y: 297, reached: false },
  { x: 6391, y: 306, reached: false }, // Final
];
