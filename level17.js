// Level 17 Data — "Emberfall Reach"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 17";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 450, y: 420, width: 132, height: 20, ghost: true, ghostPeriod: 173, ghostOnRatio: 0.5666666666666667 },
  { x: 725, y: 462, width: 104, height: 20 },
  { x: 1006, y: 530, width: 174, height: 20, moveAxis: "y", moveRange: 50, moveSpeed: 0.023, movePhase: 5.15 },
  { x: 1341, y: 561, width: 167, height: 20, moveAxis: "x", moveRange: 41, moveSpeed: 0.03, movePhase: 3.86 },
  { x: 1698, y: 561, width: 299, height: 20 },
  { x: 2128, y: 563, width: 87, height: 20, ghost: true, ghostPeriod: 173, ghostOnRatio: 0.5666666666666667 },
  { x: 2423, y: 575, width: 76, height: 20 },
  { x: 2667, y: 565, width: 78, height: 20 },
  { x: 2956, y: 540, width: 99, height: 20, melt: true, meltDelay: 27 },
  { x: 3233, y: 540, width: 251, height: 20 },
  { x: 3627, y: 485, width: 128, height: 20 },
  { x: 4082, y: 422, width: 169, height: 20 },
  { x: 4456, y: 363, width: 130, height: 20, moveAxis: "y", moveRange: 69, moveSpeed: 0.02, movePhase: 5.27 },
  { x: 4767, y: 363, width: 239, height: 20 },
  { x: 5139, y: 330, width: 74, height: 20 },
  { x: 5372, y: 321, width: 137, height: 20 },
  { x: 5645, y: 316, width: 175, height: 20 },
  { x: 6031, y: 316, width: 293, height: 20 },
  { x: 6512, y: 359, width: 92, height: 20 },
  { x: 6762, y: 369, width: 418, height: 20 },
];

window.deadlyPlatforms = [
  { x: 857, y: 470, width: 72, height: 20 },
  { x: 5544, y: 317, width: 87, height: 20 },
  { x: 5855, y: 325, width: 154, height: 20 },
];

window.spikes = [
  { x: 2713, y: 565, size: 22 },
  { x: 5164, y: 330, size: 21 },
  { x: 5766, y: 316, size: 30 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1848, y: 531, reached: false },
  { x: 3359, y: 510, reached: false },
  { x: 4887, y: 333, reached: false },
  { x: 6178, y: 286, reached: false },
  { x: 6971, y: 339, reached: false }, // Final
];
