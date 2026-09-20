// Level 38 Data — "Starcross Gauntlet"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 38";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 739, y: 361, width: 188, height: 14, bounce: true, bounceStrength: -16 },
  { x: 1118, y: 299, width: 223, height: 29 },
  { x: 1751, y: 222, width: 202, height: 26 },
  { x: 2367, y: 146, width: 154, height: 21, melt: true, meltDelay: 20 },
  { x: 2685, y: 146, width: 241, height: 26 },
  { x: 3111, y: 68, width: 97, height: 17 },
  { x: 3399, y: -1, width: 194, height: 14, melt: true, meltDelay: 20 },
  { x: 4017, y: -49, width: 90, height: 29, melt: true, meltDelay: 20 },
  { x: 4307, y: -93, width: 193, height: 16, moveAxis: "y", moveRange: 79, moveSpeed: 0.041, movePhase: 4.72 },
  { x: 4664, y: -93, width: 361, height: 20 },
  { x: 5258, y: -60, width: 226, height: 30, ghost: true, ghostPeriod: 122, ghostOnRatio: 0.40688775510204084 },
  { x: 5726, y: -7, width: 109, height: 22 },
  { x: 6083, y: 70, width: 182, height: 17, ghost: true, ghostPeriod: 122, ghostOnRatio: 0.40688775510204084 },
  { x: 6513, y: 148, width: 151, height: 17, melt: true, meltDelay: 20 },
  { x: 6828, y: 148, width: 353, height: 18 },
  { x: 7429, y: 247, width: 231, height: 25, ghost: true, ghostPeriod: 122, ghostOnRatio: 0.40688775510204084 },
  { x: 7908, y: 313, width: 108, height: 22, ghost: true, ghostPeriod: 122, ghostOnRatio: 0.40688775510204084 },
  { x: 8254, y: 361, width: 161, height: 22, ghost: true, ghostPeriod: 122, ghostOnRatio: 0.40688775510204084 },
  { x: 8653, y: 405, width: 146, height: 24, bounce: true, bounceStrength: -20 },
  { x: 8963, y: 405, width: 202, height: 14 },
  { x: 9598, y: 379, width: 66, height: 27 },
  { x: 9868, y: 338, width: 159, height: 17, moveAxis: "x", moveRange: 67, moveSpeed: 0.053, movePhase: 2.52 },
  { x: 10212, y: 264, width: 204, height: 19, melt: true, meltDelay: 20 },
  { x: 10830, y: 193, width: 233, height: 21, bounce: true, bounceStrength: -17 },
  { x: 11227, y: 193, width: 214, height: 29 },
  { x: 11845, y: 98, width: 129, height: 20, moveAxis: "x", moveRange: 95, moveSpeed: 0.045, movePhase: 1.86 },
  { x: 12394, y: 35, width: 136, height: 28 },
  { x: 12954, y: -12, width: 219, height: 27 },
  { x: 13362, y: -12, width: 411, height: 20 },
];

window.deadlyPlatforms = [
  { x: 1374, y: 302, width: 163, height: 20 },
  { x: 1986, y: 223, width: 138, height: 20 },
  { x: 5857, y: -8, width: 66, height: 20 },
  { x: 12563, y: 38, width: 88, height: 20 },
  { x: 13198, y: -13, width: 174, height: 20 },
];

window.spikes = [
  { x: 1189, y: 299, size: 36 },
  { x: 1225, y: 299, size: 49 },
  { x: 1274, y: 299, size: 16 },
  { x: 1786, y: 222, size: 14 },
  { x: 12435, y: 35, size: 24 },
  { x: 12459, y: 35, size: 43 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2806, y: 116, reached: false },
  { x: 4845, y: -123, reached: false },
  { x: 7005, y: 118, reached: false },
  { x: 9064, y: 375, reached: false },
  { x: 11334, y: 163, reached: false },
  { x: 13568, y: -42, reached: false }, // Final
];
