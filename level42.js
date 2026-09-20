// Level 42 Data — "The Splintered Vault"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 42";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 550, y: 478, width: 169, height: 22, melt: true, meltDelay: 20 },
  { x: 969, y: 575, width: 47, height: 17, moveAxis: "x", moveRange: 111, moveSpeed: 0.04, movePhase: 0.7 },
  { x: 1266, y: 675, width: 186, height: 23, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 1702, y: 750, width: 58, height: 16 },
  { x: 1924, y: 750, width: 392, height: 25 },
  { x: 2557, y: 793, width: 119, height: 29, melt: true, meltDelay: 20 },
  { x: 3123, y: 790, width: 112, height: 23 },
  { x: 3678, y: 772, width: 125, height: 20, bounce: true, bounceStrength: -17 },
  { x: 3967, y: 772, width: 281, height: 24 },
  { x: 4666, y: 698, width: 71, height: 14, melt: true, meltDelay: 20 },
  { x: 4924, y: 622, width: 197, height: 30, melt: true, meltDelay: 20 },
  { x: 5535, y: 538, width: 192, height: 30 },
  { x: 5891, y: 538, width: 311, height: 17 },
  { x: 6389, y: 463, width: 59, height: 20, moveAxis: "x", moveRange: 75, moveSpeed: 0.038, movePhase: 0.33 },
  { x: 6641, y: 393, width: 203, height: 17 },
  { x: 7046, y: 342, width: 178, height: 21, melt: true, meltDelay: 20 },
  { x: 7440, y: 320, width: 142, height: 22, conveyor: true, conveyorSpeed: -1.75 },
  { x: 7746, y: 320, width: 186, height: 27 },
  { x: 8167, y: 355, width: 190, height: 17, melt: true, meltDelay: 20 },
  { x: 8607, y: 425, width: 151, height: 28, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 9008, y: 518, width: 76, height: 30, conveyor: true, conveyorSpeed: -1.42 },
  { x: 9084, y: 518, width: 298, height: 20 },
  { x: 9586, y: 494, width: 107, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.3973469387755102 },
  { x: 9876, y: 473, width: 239, height: 20 },
  { x: 10365, y: 563, width: 157, height: 30 },
  { x: 10772, y: 648, width: 214, height: 26, moveAxis: "y", moveRange: 89, moveSpeed: 0.038, movePhase: 2.19 },
  { x: 11231, y: 705, width: 109, height: 18, melt: true, meltDelay: 20 },
  { x: 11504, y: 705, width: 309, height: 25 },
  { x: 12044, y: 723, width: 131, height: 17, moveAxis: "x", moveRange: 73, moveSpeed: 0.052, movePhase: 2.38 },
  { x: 12387, y: 696, width: 101, height: 15 },
  { x: 12639, y: 708, width: 437, height: 20 },
];

window.deadlyPlatforms = [
  { x: 6435, y: 521, width: 50, height: 17, moveAxis: "y", moveRange: 89, moveSpeed: 0.047, movePhase: 0.42 },
  { x: 12095, y: 678, width: 73, height: 16, moveAxis: "y", moveRange: 62, moveSpeed: 0.056, movePhase: 2.32 },
  { x: 1791, y: 746, width: 60, height: 20 },
  { x: 6874, y: 393, width: 152, height: 20 },
  { x: 12516, y: 688, width: 90, height: 20 },
];

window.spikes = [
  { x: 1710, y: 750, size: 16 },
  { x: 3151, y: 790, size: 50 },
  { x: 3201, y: 790, size: 23 },
  { x: 5558, y: 538, size: 34 },
  { x: 5592, y: 538, size: 24 },
  { x: 5616, y: 538, size: 20 },
  { x: 5636, y: 538, size: 19 },
  { x: 6703, y: 393, size: 35 },
  { x: 6738, y: 393, size: 12 },
  { x: 6750, y: 393, size: 39 },
  { x: 6789, y: 393, size: 49 },
  { x: 12413, y: 696, size: 19 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2120, y: 720, reached: false },
  { x: 4108, y: 742, reached: false },
  { x: 6047, y: 508, reached: false },
  { x: 7839, y: 290, reached: false },
  { x: 9936, y: 443, reached: false },
  { x: 11659, y: 675, reached: false },
  { x: 12858, y: 678, reached: false }, // Final
];
