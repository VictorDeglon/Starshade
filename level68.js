// Level 68 Data — "The Whispering Vault"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 68";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 552, y: 486, width: 52, height: 17, melt: true, meltDelay: 20 },
  { x: 856, y: 567, width: 65, height: 21, melt: true, meltDelay: 20 },
  { x: 1167, y: 626, width: 77, height: 17, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 1481, y: 658, width: 181, height: 21, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 1826, y: 658, width: 323, height: 22 },
  { x: 2580, y: 604, width: 121, height: 18 },
  { x: 2885, y: 523, width: 171, height: 16 },
  { x: 3463, y: 420, width: 220, height: 19 },
  { x: 3852, y: 318, width: 119, height: 18, moveAxis: "y", moveRange: 132, moveSpeed: 0.061, movePhase: 3.78 },
  { x: 3971, y: 318, width: 283, height: 20 },
  { x: 4460, y: 302, width: 100, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 4749, y: 288, width: 258, height: 20 },
  { x: 5191, y: 203, width: 50, height: 20, conveyor: true, conveyorSpeed: 1.6 },
  { x: 5435, y: 135, width: 139, height: 23, melt: true, meltDelay: 20 },
  { x: 5772, y: 78, width: 213, height: 30, melt: true, meltDelay: 20 },
  { x: 5985, y: 78, width: 287, height: 20 },
  { x: 6481, y: 64, width: 90, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 6771, y: 45, width: 239, height: 20 },
  { x: 7237, y: 50, width: 89, height: 14, conveyor: true, conveyorSpeed: 1.49 },
  { x: 7569, y: 90, width: 146, height: 20, melt: true, meltDelay: 20 },
  { x: 7961, y: 147, width: 103, height: 24, moveAxis: "x", moveRange: 112, moveSpeed: 0.057, movePhase: 5.24 },
  { x: 8316, y: 245, width: 62, height: 16, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 8542, y: 245, width: 212, height: 21 },
  { x: 9006, y: 335, width: 157, height: 28, bounce: true, bounceStrength: -16 },
  { x: 9415, y: 430, width: 165, height: 19, melt: true, meltDelay: 20 },
  { x: 9832, y: 511, width: 45, height: 17, bounce: true, bounceStrength: -16 },
  { x: 10041, y: 511, width: 365, height: 29 },
  { x: 10639, y: 527, width: 153, height: 21, conveyor: true, conveyorSpeed: -1.78 },
  { x: 11009, y: 509, width: 152, height: 24 },
  { x: 11369, y: 468, width: 185, height: 25, moveAxis: "y", moveRange: 76, moveSpeed: 0.043, movePhase: 2.58 },
  { x: 11738, y: 387, width: 59, height: 28, conveyor: true, conveyorSpeed: 1.49 },
  { x: 11961, y: 387, width: 209, height: 21 },
  { x: 12335, y: 277, width: 143, height: 21 },
  { x: 12653, y: 183, width: 228, height: 29 },
  { x: 13283, y: 74, width: 70, height: 28 },
  { x: 13525, y: 78, width: 427, height: 20 },
];

window.deadlyPlatforms = [
  { x: 11305, y: 408, width: 133, height: 14, moveAxis: "x", moveRange: 79, moveSpeed: 0.046, movePhase: 3.11 },
  { x: 2735, y: 606, width: 101, height: 20 },
  { x: 11197, y: 514, width: 136, height: 20 },
  { x: 12911, y: 187, width: 182, height: 20 },
  { x: 13379, y: 70, width: 60, height: 20 },
];

window.spikes = [
  { x: 2615, y: 604, size: 39 },
  { x: 2654, y: 604, size: 26 },
  { x: 2932, y: 523, size: 37 },
  { x: 2969, y: 523, size: 14 },
  { x: 3503, y: 420, size: 16 },
  { x: 3519, y: 420, size: 19 },
  { x: 3538, y: 420, size: 32 },
  { x: 3570, y: 420, size: 19 },
  { x: 11049, y: 509, size: 16 },
  { x: 12362, y: 277, size: 45 },
  { x: 13303, y: 74, size: 44 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1988, y: 628, reached: false },
  { x: 4809, y: 258, reached: false },
  { x: 6831, y: 15, reached: false },
  { x: 8648, y: 215, reached: false },
  { x: 10224, y: 481, reached: false },
  { x: 12066, y: 357, reached: false },
  { x: 13739, y: 48, reached: false }, // Final
];
