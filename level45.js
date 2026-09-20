// Level 45 Data — "Cindermarch"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 45";
window.levelAccent = "#b98fff";

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
  { x: 5212, y: -5, width: 202, height: 22, melt: true, meltDelay: 20 },
  { x: 5666, y: 84, width: 133, height: 29, melt: true, meltDelay: 20 },
  { x: 5963, y: 84, width: 376, height: 28 },
  { x: 6591, y: 180, width: 69, height: 16, conveyor: true, conveyorSpeed: 1.36 },
  { x: 6912, y: 261, width: 182, height: 15 },
  { x: 7346, y: 337, width: 71, height: 29, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 7581, y: 337, width: 187, height: 16 },
  { x: 8001, y: 356, width: 224, height: 16, bounce: true, bounceStrength: -18 },
  { x: 8448, y: 353, width: 47, height: 18 },
  { x: 8712, y: 331, width: 79, height: 15, moveAxis: "y", moveRange: 111, moveSpeed: 0.057, movePhase: 2.67 },
  { x: 9227, y: 286, width: 231, height: 20, melt: true, meltDelay: 20 },
  { x: 9622, y: 286, width: 184, height: 15 },
  { x: 10213, y: 186, width: 175, height: 19, conveyor: true, conveyorSpeed: -1.86 },
  { x: 10557, y: 84, width: 114, height: 16 },
  { x: 11088, y: 4, width: 233, height: 25 },
  { x: 11748, y: -57, width: 182, height: 30 },
  { x: 12094, y: -57, width: 277, height: 26 },
  { x: 12584, y: -82, width: 112, height: 19 },
  { x: 12923, y: -74, width: 208, height: 30, moveAxis: "y", moveRange: 109, moveSpeed: 0.053, movePhase: 5.33 },
  { x: 13287, y: -65, width: 410, height: 20 },
];

window.deadlyPlatforms = [
  { x: 12983, y: -37, width: 166, height: 20, moveAxis: "x", moveRange: 116, moveSpeed: 0.046, movePhase: 2.39 },
  { x: 3180, y: -32, width: 65, height: 20 },
  { x: 7128, y: 268, width: 154, height: 20 },
  { x: 8522, y: 345, width: 60, height: 20 },
  { x: 10703, y: 79, width: 66, height: 20 },
  { x: 11354, y: 1, width: 195, height: 20 },
  { x: 11956, y: -49, width: 151, height: 20 },
];

window.spikes = [
  { x: 2549, y: 29, size: 41 },
  { x: 3087, y: -33, size: 36 },
  { x: 8460, y: 353, size: 26 },
  { x: 10592, y: 84, size: 52 },
  { x: 11161, y: 4, size: 37 },
  { x: 11198, y: 4, size: 54 },
  { x: 11252, y: 4, size: 29 },
  { x: 11770, y: -57, size: 21 },
  { x: 12598, y: -82, size: 43 },
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

window.forceZones = [
  { x: 9632, y: 196, width: 164, height: 90, axis: "x", force: 0.185 },
];

window.lasers = [
  { x: 3594, y: -108, length: 200, width: 4, baseAngle: 0.39, sweepAngle: 0.85, period: 157, blinkPeriod: 0, onRatio: 0.5 },
  { x: 5037, y: -102, length: 127, width: 4, baseAngle: 0.44, sweepAngle: 0, period: 157, blinkPeriod: 108, onRatio: 0.5 },
  { x: 13225, y: -151, length: 122, width: 4, baseAngle: 3.03, sweepAngle: 0.75, period: 157, blinkPeriod: 0, onRatio: 0.5 },
];
