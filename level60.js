// Level 60 Data — "Umbral Gauntlet"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 60";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 533, y: 396, width: 172, height: 30, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 951, y: 450, width: 228, height: 16, melt: true, meltDelay: 20 },
  { x: 1431, y: 524, width: 155, height: 25, melt: true, meltDelay: 20 },
  { x: 1750, y: 524, width: 338, height: 20 },
  { x: 2340, y: 610, width: 209, height: 14, melt: true, meltDelay: 20 },
  { x: 2801, y: 706, width: 176, height: 15, moveAxis: "y", moveRange: 118, moveSpeed: 0.055, movePhase: 1.41 },
  { x: 3229, y: 795, width: 86, height: 18 },
  { x: 3479, y: 795, width: 393, height: 29 },
  { x: 4109, y: 821, width: 56, height: 19, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 4392, y: 823, width: 82, height: 15, melt: true, meltDelay: 20 },
  { x: 4687, y: 794, width: 112, height: 17, moveAxis: "y", moveRange: 108, moveSpeed: 0.049, movePhase: 5.84 },
  { x: 5226, y: 738, width: 49, height: 15 },
  { x: 5275, y: 738, width: 276, height: 20 },
  { x: 5759, y: 728, width: 103, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.3606122448979592 },
  { x: 6040, y: 712, width: 235, height: 20 },
  { x: 6686, y: 621, width: 117, height: 14, bounce: true, bounceStrength: -19 },
  { x: 6968, y: 513, width: 163, height: 29 },
  { x: 7538, y: 412, width: 113, height: 20 },
  { x: 7815, y: 412, width: 290, height: 18 },
  { x: 8532, y: 347, width: 175, height: 29 },
  { x: 9144, y: 306, width: 118, height: 16 },
  { x: 9489, y: 317, width: 182, height: 19, moveAxis: "x", moveRange: 98, moveSpeed: 0.042, movePhase: 4.6 },
  { x: 9835, y: 317, width: 286, height: 15 },
  { x: 10367, y: 379, width: 47, height: 25, conveyor: true, conveyorSpeed: 1.66 },
  { x: 10666, y: 461, width: 177, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 11095, y: 548, width: 195, height: 17, bounce: true, bounceStrength: -17 },
  { x: 11454, y: 548, width: 378, height: 18 },
  { x: 12084, y: 629, width: 49, height: 18, moveAxis: "x", moveRange: 103, moveSpeed: 0.058, movePhase: 3.46 },
  { x: 12385, y: 723, width: 92, height: 17, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 12723, y: 782, width: 87, height: 27, melt: true, meltDelay: 20 },
  { x: 13047, y: 819, width: 129, height: 23, melt: true, meltDelay: 20 },
  { x: 13340, y: 819, width: 392, height: 30 },
  { x: 13935, y: 810, width: 380, height: 20 },
];

window.deadlyPlatforms = [
  { x: 9578, y: 259, width: 126, height: 16, moveAxis: "y", moveRange: 103, moveSpeed: 0.041, movePhase: 1.39 },
  { x: 12142, y: 573, width: 50, height: 25, moveAxis: "y", moveRange: 83, moveSpeed: 0.051, movePhase: 1.95 },
  { x: 5298, y: 733, width: 60, height: 20 },
  { x: 7166, y: 519, width: 120, height: 20 },
  { x: 7672, y: 406, width: 93, height: 20 },
  { x: 8740, y: 346, width: 136, height: 20 },
  { x: 9287, y: 296, width: 93, height: 20 },
];

window.spikes = [
  { x: 3251, y: 795, size: 57 },
  { x: 7023, y: 513, size: 28 },
  { x: 7051, y: 513, size: 15 },
  { x: 7066, y: 513, size: 59 },
  { x: 7574, y: 412, size: 37 },
  { x: 8571, y: 347, size: 38 },
  { x: 9166, y: 306, size: 52 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1919, y: 494, reached: false },
  { x: 3676, y: 765, reached: false },
  { x: 6100, y: 682, reached: false },
  { x: 7960, y: 382, reached: false },
  { x: 9978, y: 287, reached: false },
  { x: 11643, y: 518, reached: false },
  { x: 13536, y: 789, reached: false },
  { x: 14125, y: 780, reached: false }, // Final
];
