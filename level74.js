// Level 74 Data — "The Last Ember"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 74";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 552, y: 488, width: 197, height: 21, bounce: true, bounceStrength: -17 },
  { x: 1001, y: 597, width: 226, height: 29, melt: true, meltDelay: 20 },
  { x: 1473, y: 657, width: 129, height: 19, conveyor: true, conveyorSpeed: -2.19 },
  { x: 1845, y: 702, width: 70, height: 16, moveAxis: "x", moveRange: 116, moveSpeed: 0.042, movePhase: 2.6 },
  { x: 2079, y: 702, width: 292, height: 22 },
  { x: 2584, y: 678, width: 113, height: 23, bounce: true, bounceStrength: -19 },
  { x: 3134, y: 638, width: 53, height: 19, moveAxis: "x", moveRange: 130, moveSpeed: 0.047, movePhase: 3.49 },
  { x: 3375, y: 565, width: 80, height: 28 },
  { x: 3639, y: 481, width: 138, height: 18, conveyor: true, conveyorSpeed: -1.75 },
  { x: 3777, y: 481, width: 298, height: 20 },
  { x: 4278, y: 462, width: 91, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 4567, y: 435, width: 260, height: 20 },
  { x: 4976, y: 314, width: 76, height: 26, moveAxis: "x", moveRange: 110, moveSpeed: 0.061, movePhase: 1.73 },
  { x: 5230, y: 224, width: 192, height: 27, bounce: true, bounceStrength: -18 },
  { x: 5833, y: 137, width: 146, height: 16, conveyor: true, conveyorSpeed: 1.17 },
  { x: 5979, y: 137, width: 283, height: 20 },
  { x: 6462, y: 125, width: 100, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 6744, y: 96, width: 279, height: 20 },
  { x: 7463, y: 64, width: 137, height: 27 },
  { x: 7837, y: 92, width: 93, height: 29, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 8173, y: 137, width: 200, height: 25, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 8625, y: 218, width: 163, height: 30, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 8952, y: 218, width: 371, height: 16 },
  { x: 9575, y: 337, width: 181, height: 29, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 10008, y: 445, width: 64, height: 15, melt: true, meltDelay: 20 },
  { x: 10324, y: 543, width: 204, height: 26, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 10774, y: 607, width: 184, height: 30, bounce: true, bounceStrength: -18 },
  { x: 11122, y: 607, width: 240, height: 19 },
  { x: 11595, y: 620, width: 202, height: 22, conveyor: true, conveyorSpeed: 1.33 },
  { x: 12014, y: 601, width: 137, height: 19 },
  { x: 12355, y: 553, width: 79, height: 29, moveAxis: "x", moveRange: 89, moveSpeed: 0.046, movePhase: 2.97 },
  { x: 12598, y: 553, width: 184, height: 28 },
  { x: 12960, y: 464, width: 85, height: 28, melt: true, meltDelay: 20 },
  { x: 13447, y: 353, width: 168, height: 19 },
  { x: 13784, y: 250, width: 158, height: 20 },
  { x: 14100, y: 252, width: 428, height: 20 },
];

window.deadlyPlatforms = [
  { x: 1791, y: 732, width: 53, height: 21, moveAxis: "y", moveRange: 92, moveSpeed: 0.038, movePhase: 3.91 },
  { x: 5022, y: 370, width: 62, height: 24, moveAxis: "y", moveRange: 125, moveSpeed: 0.062, movePhase: 0.67 },
  { x: 12273, y: 518, width: 52, height: 17, moveAxis: "y", moveRange: 74, moveSpeed: 0.051, movePhase: 3.66 },
  { x: 3480, y: 572, width: 60, height: 20 },
  { x: 12184, y: 604, width: 116, height: 20 },
  { x: 13638, y: 357, width: 134, height: 20 },
  { x: 13979, y: 253, width: 95, height: 20 },
];

window.spikes = [
  { x: 3386, y: 565, size: 13 },
  { x: 7508, y: 64, size: 19 },
  { x: 12053, y: 601, size: 16 },
  { x: 12069, y: 601, size: 62 },
  { x: 13471, y: 353, size: 62 },
  { x: 13804, y: 250, size: 51 },
  { x: 13855, y: 250, size: 35 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2225, y: 672, reached: false },
  { x: 4627, y: 405, reached: false },
  { x: 6804, y: 66, reached: false },
  { x: 9138, y: 188, reached: false },
  { x: 11242, y: 577, reached: false },
  { x: 12690, y: 523, reached: false },
  { x: 14314, y: 222, reached: false }, // Final
];
