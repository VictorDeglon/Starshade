// Level 45 Data — "Cindermarch"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 45";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 478, y: 288, width: 50, height: 22, melt: true, meltDelay: 20 },
  { x: 935, y: 190, width: 49, height: 29, bounce: true, bounceStrength: -20 },
  { x: 1391, y: 92, width: 159, height: 26, bounce: true, bounceStrength: -19 },
  { x: 1714, y: 92, width: 378, height: 22 },
  { x: 2519, y: 29, width: 121, height: 29 },
  { x: 3067, y: -33, width: 81, height: 27 },
  { x: 3365, y: -46, width: 159, height: 20, melt: true, meltDelay: 20 },
  { x: 3524, y: -46, width: 272, height: 20 },
  { x: 3996, y: -73, width: 108, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.39122448979591834 },
  { x: 4281, y: -102, width: 248, height: 20 },
  { x: 4771, y: -60, width: 195, height: 24, bounce: true, bounceStrength: -18 },
  { x: 5212, y: -5, width: 202, height: 22 },
  { x: 5666, y: 84, width: 133, height: 29, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 5963, y: 84, width: 376, height: 28 },
  { x: 6591, y: 180, width: 69, height: 16, melt: true, meltDelay: 20 },
  { x: 6912, y: 261, width: 182, height: 15, melt: true, meltDelay: 20 },
  { x: 7346, y: 337, width: 71, height: 29, moveAxis: "x", moveRange: 86, moveSpeed: 0.04, movePhase: 4.28 },
  { x: 7581, y: 337, width: 187, height: 16 },
  { x: 8001, y: 356, width: 224, height: 16, moveAxis: "y", moveRange: 116, moveSpeed: 0.052, movePhase: 4.67 },
  { x: 8448, y: 353, width: 47, height: 18 },
  { x: 8712, y: 331, width: 79, height: 15, melt: true, meltDelay: 20 },
  { x: 9227, y: 286, width: 231, height: 20, moveAxis: "y", moveRange: 78, moveSpeed: 0.053, movePhase: 5.12 },
  { x: 9622, y: 286, width: 184, height: 15 },
  { x: 10213, y: 186, width: 175, height: 19, moveAxis: "y", moveRange: 103, moveSpeed: 0.04, movePhase: 2.62 },
  { x: 10557, y: 84, width: 114, height: 16 },
  { x: 11088, y: 4, width: 233, height: 25, bounce: true, bounceStrength: -19 },
  { x: 11748, y: -57, width: 182, height: 30 },
  { x: 12094, y: -57, width: 277, height: 26 },
  { x: 12584, y: -82, width: 112, height: 19, melt: true, meltDelay: 20 },
  { x: 12923, y: -74, width: 208, height: 30 },
  { x: 13287, y: -65, width: 410, height: 20 },
];

window.deadlyPlatforms = [
  { x: 7403, y: 382, width: 55, height: 14, moveAxis: "y", moveRange: 81, moveSpeed: 0.041, movePhase: 5.06 },
  { x: 2672, y: 30, width: 98, height: 20 },
  { x: 3182, y: -26, width: 69, height: 20 },
  { x: 5441, y: -13, width: 151, height: 20 },
  { x: 8522, y: 356, width: 60, height: 20 },
  { x: 11954, y: -60, width: 156, height: 20 },
  { x: 13164, y: -83, width: 165, height: 20 },
];

window.spikes = [
  { x: 2549, y: 29, size: 36 },
  { x: 2585, y: 29, size: 39 },
  { x: 5265, y: -5, size: 26 },
  { x: 10588, y: 84, size: 45 },
  { x: 11785, y: -57, size: 48 },
  { x: 11833, y: -57, size: 20 },
  { x: 11853, y: -57, size: 44 },
  { x: 11897, y: -57, size: 12 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1903, y: 62, reached: false },
  { x: 4341, y: -132, reached: false },
  { x: 6151, y: 54, reached: false },
  { x: 7675, y: 307, reached: false },
  { x: 9714, y: 256, reached: false },
  { x: 12233, y: -87, reached: false },
  { x: 13492, y: -95, reached: false }, // Final
];
