// Level 59 Data — "The Widow's Ledge"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 59";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 494, y: 317, width: 130, height: 25, conveyor: true, conveyorSpeed: -1.88 },
  { x: 837, y: 284, width: 47, height: 29, melt: true, meltDelay: 20 },
  { x: 1107, y: 275, width: 202, height: 23, moveAxis: "y", moveRange: 110, moveSpeed: 0.057, movePhase: 3.52 },
  { x: 1473, y: 275, width: 358, height: 27 },
  { x: 2077, y: 330, width: 76, height: 26, melt: true, meltDelay: 20 },
  { x: 2405, y: 420, width: 114, height: 29, bounce: true, bounceStrength: -19 },
  { x: 2771, y: 498, width: 115, height: 25, moveAxis: "x", moveRange: 109, moveSpeed: 0.049, movePhase: 2.86 },
  { x: 3050, y: 498, width: 226, height: 26 },
  { x: 3528, y: 585, width: 153, height: 20, conveyor: true, conveyorSpeed: -2.17 },
  { x: 3933, y: 668, width: 224, height: 24, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 4409, y: 739, width: 229, height: 26, bounce: true, bounceStrength: -16 },
  { x: 4875, y: 765, width: 94, height: 23, moveAxis: "x", moveRange: 113, moveSpeed: 0.04, movePhase: 4.34 },
  { x: 5133, y: 765, width: 329, height: 19 },
  { x: 5675, y: 736, width: 177, height: 24 },
  { x: 6279, y: 674, width: 77, height: 28, melt: true, meltDelay: 20 },
  { x: 6773, y: 597, width: 152, height: 30 },
  { x: 7094, y: 497, width: 231, height: 18, melt: true, meltDelay: 20 },
  { x: 7489, y: 497, width: 294, height: 23 },
  { x: 7958, y: 402, width: 148, height: 30, melt: true, meltDelay: 20 },
  { x: 8523, y: 319, width: 120, height: 29, bounce: true, bounceStrength: -19 },
  { x: 9064, y: 246, width: 154, height: 21, melt: true, meltDelay: 20 },
  { x: 9431, y: 218, width: 100, height: 21 },
  { x: 9695, y: 218, width: 314, height: 25 },
  { x: 10246, y: 248, width: 149, height: 24, moveAxis: "x", moveRange: 115, moveSpeed: 0.058, movePhase: 1.7 },
  { x: 10641, y: 311, width: 149, height: 24, moveAxis: "y", moveRange: 130, moveSpeed: 0.062, movePhase: 4.76 },
  { x: 11042, y: 385, width: 231, height: 27, moveAxis: "y", moveRange: 115, moveSpeed: 0.062, movePhase: 0.61 },
  { x: 11525, y: 462, width: 175, height: 21, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 11864, y: 462, width: 225, height: 17 },
  { x: 12341, y: 548, width: 89, height: 19 },
  { x: 12682, y: 645, width: 200, height: 22, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 13050, y: 632, width: 409, height: 20 },
];

window.deadlyPlatforms = [
  { x: 1192, y: 333, width: 165, height: 24, moveAxis: "x", moveRange: 120, moveSpeed: 0.066, movePhase: 5.29 },
  { x: 2691, y: 533, width: 101, height: 24, moveAxis: "y", moveRange: 92, moveSpeed: 0.052, movePhase: 0.41 },
  { x: 4834, y: 822, width: 54, height: 24, moveAxis: "y", moveRange: 111, moveSpeed: 0.037, movePhase: 1.22 },
  { x: 10576, y: 276, width: 94, height: 20, moveAxis: "x", moveRange: 118, moveSpeed: 0.055, movePhase: 2.86 },
  { x: 5890, y: 739, width: 156, height: 20 },
  { x: 6961, y: 588, width: 128, height: 20 },
  { x: 9565, y: 225, width: 62, height: 20 },
  { x: 12452, y: 544, width: 79, height: 20 },
];

window.spikes = [
  { x: 5732, y: 736, size: 44 },
  { x: 5776, y: 736, size: 50 },
  { x: 6812, y: 597, size: 47 },
  { x: 6859, y: 597, size: 52 },
  { x: 9457, y: 218, size: 17 },
  { x: 12365, y: 548, size: 43 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1652, y: 245, reached: false },
  { x: 3163, y: 468, reached: false },
  { x: 5298, y: 735, reached: false },
  { x: 7636, y: 467, reached: false },
  { x: 9852, y: 188, reached: false },
  { x: 11977, y: 432, reached: false },
  { x: 13255, y: 602, reached: false }, // Final
];
