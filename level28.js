// Level 28 Data — "The Drifting Vault"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 28";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 732, y: 371, width: 179, height: 16, conveyor: true, conveyorSpeed: -1.89 },
  { x: 1343, y: 364, width: 193, height: 24, ghost: true, ghostPeriod: 130, ghostOnRatio: 0.4323979591836735 },
  { x: 1760, y: 383, width: 136, height: 29, ghost: true, ghostPeriod: 130, ghostOnRatio: 0.4323979591836735 },
  { x: 2060, y: 383, width: 225, height: 17 },
  { x: 2527, y: 459, width: 74, height: 29 },
  { x: 2843, y: 536, width: 192, height: 17 },
  { x: 3277, y: 634, width: 234, height: 19, ghost: true, ghostPeriod: 130, ghostOnRatio: 0.4323979591836735 },
  { x: 3753, y: 704, width: 146, height: 17, bounce: true, bounceStrength: -19 },
  { x: 4063, y: 704, width: 211, height: 27 },
  { x: 4507, y: 754, width: 101, height: 26, moveAxis: "x", moveRange: 64, moveSpeed: 0.034, movePhase: 1.29 },
  { x: 4826, y: 765, width: 165, height: 15, conveyor: true, conveyorSpeed: -1.65 },
  { x: 5423, y: 762, width: 188, height: 16, conveyor: true, conveyorSpeed: 1.61 },
  { x: 5775, y: 762, width: 237, height: 23 },
  { x: 6431, y: 725, width: 61, height: 19 },
  { x: 6896, y: 650, width: 131, height: 21 },
  { x: 7195, y: 556, width: 118, height: 25 },
  { x: 7708, y: 461, width: 77, height: 14 },
  { x: 7949, y: 461, width: 235, height: 15 },
  { x: 8361, y: 382, width: 116, height: 23 },
  { x: 8891, y: 331, width: 71, height: 29 },
  { x: 9176, y: 320, width: 149, height: 18, bounce: true, bounceStrength: -19 },
  { x: 9489, y: 320, width: 323, height: 20 },
  { x: 10039, y: 350, width: 194, height: 20, ghost: true, ghostPeriod: 130, ghostOnRatio: 0.4323979591836735 },
  { x: 10460, y: 386, width: 154, height: 21, melt: true, meltDelay: 21 },
  { x: 10856, y: 457, width: 115, height: 20, moveAxis: "x", moveRange: 93, moveSpeed: 0.053, movePhase: 1.71 },
  { x: 11213, y: 549, width: 186, height: 14, melt: true, meltDelay: 21 },
  { x: 11563, y: 549, width: 249, height: 25 },
  { x: 12007, y: 543, width: 387, height: 20 },
];

window.deadlyPlatforms = [
  { x: 6516, y: 733, width: 60, height: 20 },
  { x: 7066, y: 660, width: 77, height: 20 },
  { x: 7338, y: 556, width: 67, height: 20 },
  { x: 7818, y: 471, width: 64, height: 20 },
  { x: 8504, y: 384, width: 91, height: 20 },
];

window.spikes = [
  { x: 2539, y: 459, size: 33 },
  { x: 6443, y: 725, size: 15 },
  { x: 6458, y: 725, size: 19 },
  { x: 7210, y: 556, size: 45 },
  { x: 7255, y: 556, size: 38 },
  { x: 8901, y: 331, size: 41 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2173, y: 353, reached: false },
  { x: 4169, y: 674, reached: false },
  { x: 5894, y: 732, reached: false },
  { x: 8067, y: 431, reached: false },
  { x: 9651, y: 290, reached: false },
  { x: 11688, y: 519, reached: false },
  { x: 12201, y: 513, reached: false }, // Final
];
