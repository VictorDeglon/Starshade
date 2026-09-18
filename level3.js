// Level 3 Data — "Level 3"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 3";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 489, y: 371, width: 70, height: 28 },
  { x: 720, y: 388, width: 157, height: 20 },
  { x: 1014, y: 410, width: 117, height: 40 },
  { x: 1330, y: 427, width: 74, height: 33, moveAxis: "x", moveRange: 65, moveSpeed: 0.029, movePhase: 2.2 },
  { x: 1555, y: 427, width: 279, height: 12 },
  { x: 2025, y: 456, width: 89, height: 13 },
  { x: 2267, y: 502, width: 158, height: 41, melt: true, meltDelay: 30 },
  { x: 2633, y: 540, width: 199, height: 40 },
  { x: 3040, y: 566, width: 216, height: 45 },
  { x: 3386, y: 566, width: 208, height: 32 },
  { x: 3787, y: 587, width: 157, height: 22, ghost: true, ghostPeriod: 197, ghostOnRatio: 0.6391304347826087 },
  { x: 4257, y: 583, width: 120, height: 25 },
  { x: 4567, y: 559, width: 175, height: 39 },
  { x: 4930, y: 559, width: 368, height: 17 },
  { x: 5467, y: 516, width: 174, height: 21 },
  { x: 5780, y: 487, width: 228, height: 12 },
  { x: 6215, y: 436, width: 137, height: 24 },
  { x: 6489, y: 436, width: 342, height: 27 },
  { x: 6991, y: 425, width: 417, height: 20 },
];

window.deadlyPlatforms = [
  { x: 3293, y: 570, width: 119, height: 20 },
  { x: 4765, y: 562, width: 132, height: 20 },
];

window.spikes = [
  { x: 511, y: 371, size: 23 },
  { x: 777, y: 388, size: 23 },
  { x: 800, y: 388, size: 20 },
  { x: 820, y: 388, size: 17 },
  { x: 1035, y: 410, size: 25 },
  { x: 3102, y: 566, size: 21 },
  { x: 4274, y: 583, size: 25 },
  { x: 6232, y: 436, size: 18 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1695, y: 397, reached: false },
  { x: 3490, y: 536, reached: false },
  { x: 5114, y: 529, reached: false },
  { x: 6660, y: 406, reached: false },
  { x: 7200, y: 395, reached: false }, // Final
];
