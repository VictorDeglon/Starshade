// Level 6 Data — "Level 6"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 6";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 482, y: 389, width: 84, height: 16 },
  { x: 748, y: 399, width: 189, height: 14 },
  { x: 1116, y: 388, width: 186, height: 15 },
  { x: 1466, y: 388, width: 227, height: 16 },
  { x: 1864, y: 363, width: 211, height: 28, moveAxis: "x", moveRange: 56, moveSpeed: 0.022, movePhase: 4.24 },
  { x: 2238, y: 313, width: 193, height: 21 },
  { x: 2594, y: 263, width: 88, height: 15, ghost: true, ghostPeriod: 186, ghostOnRatio: 0.6065217391304348 },
  { x: 2846, y: 263, width: 259, height: 21 },
  { x: 3458, y: 238, width: 98, height: 21 },
  { x: 3727, y: 212, width: 200, height: 20, moveAxis: "y", moveRange: 71, moveSpeed: 0.027, movePhase: 2.84 },
  { x: 4101, y: 199, width: 193, height: 25, melt: true, meltDelay: 28 },
  { x: 4458, y: 199, width: 293, height: 23 },
  { x: 4933, y: 209, width: 165, height: 24, ghost: true, ghostPeriod: 186, ghostOnRatio: 0.6065217391304348 },
  { x: 5288, y: 239, width: 210, height: 19, melt: true, meltDelay: 28 },
  { x: 5696, y: 290, width: 175, height: 14, ghost: true, ghostPeriod: 186, ghostOnRatio: 0.6065217391304348 },
  { x: 6066, y: 332, width: 172, height: 16, melt: true, meltDelay: 28 },
  { x: 6402, y: 332, width: 254, height: 22 },
  { x: 6846, y: 366, width: 50, height: 15 },
  { x: 7086, y: 400, width: 148, height: 16, melt: true, meltDelay: 28 },
  { x: 7424, y: 425, width: 52, height: 17, melt: true, meltDelay: 28 },
  { x: 7646, y: 411, width: 408, height: 20 },
];

window.deadlyPlatforms = [
  { x: 2466, y: 310, width: 172, height: 20 },
  { x: 6917, y: 374, width: 60, height: 20 },
];

window.spikes = [
  { x: 505, y: 389, size: 23 },
  { x: 2298, y: 313, size: 22 },
  { x: 3476, y: 238, size: 26 },
  { x: 3502, y: 238, size: 30 },
  { x: 3532, y: 238, size: 13 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1580, y: 358, reached: false },
  { x: 2976, y: 233, reached: false },
  { x: 4605, y: 169, reached: false },
  { x: 6529, y: 302, reached: false },
  { x: 7850, y: 381, reached: false }, // Final
];
