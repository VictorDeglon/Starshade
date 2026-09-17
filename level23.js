// Level 23 Data — "Eclipse Corridor"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 23";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 476, y: 452, width: 136, height: 20 },
  { x: 747, y: 530, width: 178, height: 20, ghost: true, ghostPeriod: 133, ghostOnRatio: 0.44166666666666665 },
  { x: 1070, y: 600, width: 119, height: 20, melt: true, meltDelay: 22 },
  { x: 1378, y: 689, width: 156, height: 20 },
  { x: 1741, y: 689, width: 267, height: 20 },
  { x: 2203, y: 727, width: 165, height: 20, ghost: true, ghostPeriod: 133, ghostOnRatio: 0.44166666666666665 },
  { x: 2546, y: 759, width: 151, height: 20 },
  { x: 3023, y: 748, width: 132, height: 20, melt: true, meltDelay: 22 },
  { x: 3292, y: 748, width: 298, height: 20 },
  { x: 3919, y: 707, width: 147, height: 20 },
  { x: 4235, y: 644, width: 130, height: 20 },
  { x: 4626, y: 572, width: 159, height: 20, melt: true, meltDelay: 22 },
  { x: 5061, y: 503, width: 126, height: 20 },
  { x: 5344, y: 503, width: 225, height: 20 },
  { x: 5868, y: 448, width: 109, height: 20 },
  { x: 6156, y: 395, width: 114, height: 20, moveAxis: "x", moveRange: 53, moveSpeed: 0.033, movePhase: 6.1 },
  { x: 6415, y: 366, width: 138, height: 20, melt: true, meltDelay: 22 },
  { x: 6553, y: 366, width: 288, height: 20 },
  { x: 7035, y: 338, width: 90, height: 20, ghost: true, ghostPeriod: 132, ghostOnRatio: 0.4333333333333333 },
  { x: 7325, y: 315, width: 263, height: 20 },
  { x: 7781, y: 333, width: 85, height: 20 },
  { x: 8050, y: 386, width: 124, height: 20 },
  { x: 8327, y: 455, width: 164, height: 20, ghost: true, ghostPeriod: 133, ghostOnRatio: 0.44166666666666665 },
  { x: 8696, y: 455, width: 267, height: 20 },
  { x: 9095, y: 540, width: 84, height: 20, melt: true, meltDelay: 22 },
  { x: 9342, y: 548, width: 423, height: 20 },
];

window.deadlyPlatforms = [
  { x: 1556, y: 680, width: 131, height: 20 },
  { x: 4096, y: 710, width: 75, height: 20 },
  { x: 5225, y: 504, width: 72, height: 20 },
  { x: 7890, y: 335, width: 60, height: 20 },
  { x: 8198, y: 378, width: 88, height: 20 },
];

window.spikes = [
  { x: 539, y: 452, size: 32 },
  { x: 1447, y: 689, size: 29 },
  { x: 2622, y: 759, size: 20 },
  { x: 5901, y: 448, size: 19 },
  { x: 7815, y: 333, size: 19 },
  { x: 8117, y: 386, size: 26 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1875, y: 659, reached: false },
  { x: 3441, y: 718, reached: false },
  { x: 5457, y: 473, reached: false },
  { x: 7385, y: 285, reached: false },
  { x: 8830, y: 425, reached: false },
  { x: 9554, y: 518, reached: false }, // Final
];
