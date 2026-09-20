// Level 73 Data — "Starfall Reprise"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 73";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 552, y: 448, width: 57, height: 27, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 861, y: 537, width: 91, height: 27 },
  { x: 1204, y: 642, width: 153, height: 19, moveAxis: "x", moveRange: 89, moveSpeed: 0.041, movePhase: 2.32 },
  { x: 1609, y: 757, width: 156, height: 24, melt: true, meltDelay: 20 },
  { x: 1929, y: 757, width: 210, height: 21 },
  { x: 2391, y: 822, width: 174, height: 26, moveAxis: "y", moveRange: 116, moveSpeed: 0.066, movePhase: 2.34 },
  { x: 2811, y: 875, width: 73, height: 19, melt: true, meltDelay: 20 },
  { x: 3121, y: 903, width: 52, height: 20, bounce: true, bounceStrength: -19 },
  { x: 3396, y: 893, width: 108, height: 27, conveyor: true, conveyorSpeed: -1.32 },
  { x: 3504, y: 893, width: 265, height: 20 },
  { x: 3970, y: 878, width: 91, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 4258, y: 864, width: 238, height: 20 },
  { x: 4913, y: 782, width: 228, height: 22, melt: true, meltDelay: 20 },
  { x: 5558, y: 700, width: 117, height: 22, melt: true, meltDelay: 20 },
  { x: 5853, y: 610, width: 101, height: 19, conveyor: true, conveyorSpeed: -1.63 },
  { x: 5954, y: 610, width: 258, height: 20 },
  { x: 6408, y: 586, width: 102, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 6695, y: 574, width: 252, height: 20 },
  { x: 7106, y: 462, width: 223, height: 18 },
  { x: 7517, y: 387, width: 51, height: 30 },
  { x: 7995, y: 324, width: 167, height: 23, moveAxis: "y", moveRange: 108, moveSpeed: 0.055, movePhase: 0.65 },
  { x: 8599, y: 288, width: 132, height: 28, moveAxis: "x", moveRange: 101, moveSpeed: 0.045, movePhase: 1.44 },
  { x: 8895, y: 288, width: 303, height: 27 },
  { x: 9435, y: 316, width: 168, height: 28, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 9855, y: 388, width: 83, height: 17, melt: true, meltDelay: 20 },
  { x: 10190, y: 488, width: 62, height: 17, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 10504, y: 579, width: 202, height: 28, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 10870, y: 579, width: 267, height: 28 },
  { x: 11389, y: 678, width: 148, height: 14, bounce: true, bounceStrength: -20 },
  { x: 11789, y: 762, width: 145, height: 19, moveAxis: "y", moveRange: 78, moveSpeed: 0.065, movePhase: 0.12 },
  { x: 12180, y: 824, width: 230, height: 21 },
  { x: 12574, y: 824, width: 302, height: 16 },
  { x: 13099, y: 822, width: 129, height: 28 },
  { x: 13432, y: 776, width: 154, height: 24 },
  { x: 14007, y: 708, width: 138, height: 21 },
  { x: 14313, y: 710, width: 381, height: 20 },
];

window.deadlyPlatforms = [
  { x: 2462, y: 863, width: 100, height: 19, moveAxis: "x", moveRange: 120, moveSpeed: 0.072, movePhase: 4.7 },
  { x: 8669, y: 230, width: 74, height: 16, moveAxis: "y", moveRange: 79, moveSpeed: 0.051, movePhase: 3.88 },
  { x: 973, y: 532, width: 67, height: 20 },
  { x: 7361, y: 456, width: 126, height: 20 },
  { x: 7598, y: 387, width: 60, height: 20 },
  { x: 13260, y: 830, width: 82, height: 20 },
  { x: 13614, y: 769, width: 130, height: 20 },
];

window.spikes = [
  { x: 888, y: 537, size: 28 },
  { x: 7168, y: 462, size: 49 },
  { x: 7217, y: 462, size: 33 },
  { x: 7250, y: 462, size: 17 },
  { x: 12217, y: 824, size: 42 },
  { x: 12259, y: 824, size: 27 },
  { x: 12286, y: 824, size: 52 },
  { x: 12338, y: 824, size: 54 },
  { x: 13125, y: 822, size: 34 },
  { x: 13159, y: 822, size: 59 },
  { x: 13463, y: 776, size: 48 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2034, y: 727, reached: false },
  { x: 4318, y: 834, reached: false },
  { x: 6755, y: 544, reached: false },
  { x: 9047, y: 258, reached: false },
  { x: 11004, y: 549, reached: false },
  { x: 12725, y: 794, reached: false },
  { x: 14504, y: 680, reached: false }, // Final
];
