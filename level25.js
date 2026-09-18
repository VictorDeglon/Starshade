// Level 25 Data — "Starshade's Zenith"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 25";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 462, y: 388, width: 70, height: 18 },
  { x: 718, y: 369, width: 100, height: 32, moveAxis: "y", moveRange: 103, moveSpeed: 0.049, movePhase: 1.17 },
  { x: 1125, y: 336, width: 141, height: 25, melt: true, meltDelay: 20 },
  { x: 1526, y: 274, width: 102, height: 42 },
  { x: 1815, y: 274, width: 279, height: 22 },
  { x: 2254, y: 196, width: 128, height: 19 },
  { x: 2555, y: 116, width: 213, height: 23 },
  { x: 2930, y: 30, width: 125, height: 28 },
  { x: 3244, y: 30, width: 385, height: 13 },
  { x: 3951, y: -17, width: 190, height: 26 },
  { x: 4426, y: -28, width: 108, height: 28, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 4750, y: -1, width: 61, height: 38, moveAxis: "y", moveRange: 117, moveSpeed: 0.056, movePhase: 6.11 },
  { x: 4946, y: -1, width: 272, height: 44 },
  { x: 5401, y: 75, width: 82, height: 12, melt: true, meltDelay: 20 },
  { x: 5669, y: 141, width: 233, height: 18 },
  { x: 6065, y: 221, width: 188, height: 44, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 6446, y: 221, width: 238, height: 19 },
  { x: 6862, y: 295, width: 215, height: 41, moveAxis: "x", moveRange: 111, moveSpeed: 0.038, movePhase: 6.11 },
  { x: 7213, y: 369, width: 212, height: 28 },
  { x: 7614, y: 420, width: 161, height: 36, melt: true, meltDelay: 20 },
  { x: 7775, y: 420, width: 270, height: 20 },
  { x: 8245, y: 398, width: 95, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.39999999999999997 },
  { x: 8528, y: 381, width: 263, height: 20 },
  { x: 9069, y: 376, width: 56, height: 39, melt: true, meltDelay: 20 },
  { x: 9331, y: 327, width: 154, height: 25, melt: true, meltDelay: 20 },
  { x: 9690, y: 272, width: 148, height: 23, melt: true, meltDelay: 20 },
  { x: 9976, y: 272, width: 316, height: 41 },
  { x: 10458, y: 169, width: 145, height: 34 },
  { x: 10880, y: 65, width: 75, height: 41 },
  { x: 11268, y: -2, width: 135, height: 30, melt: true, meltDelay: 20 },
  { x: 11559, y: -12, width: 415, height: 20 },
];

window.deadlyPlatforms = [
  { x: 567, y: 381, width: 60, height: 20 },
  { x: 2403, y: 191, width: 78, height: 20 },
  { x: 2803, y: 106, width: 147, height: 20 },
  { x: 3090, y: 35, width: 103, height: 20 },
  { x: 5938, y: 137, width: 121, height: 20 },
  { x: 10635, y: 161, width: 103, height: 20 },
  { x: 10976, y: 57, width: 60, height: 20 },
];

window.spikes = [
  { x: 1558, y: 274, size: 28 },
  { x: 1586, y: 274, size: 36 },
  { x: 2300, y: 196, size: 14 },
  { x: 2314, y: 196, size: 32 },
  { x: 2346, y: 196, size: 22 },
  { x: 2611, y: 116, size: 33 },
  { x: 2950, y: 30, size: 40 },
  { x: 2990, y: 30, size: 12 },
  { x: 4014, y: -17, size: 50 },
  { x: 4064, y: -17, size: 39 },
  { x: 4103, y: -17, size: 19 },
  { x: 5751, y: 141, size: 25 },
  { x: 5776, y: 141, size: 26 },
  { x: 5802, y: 141, size: 43 },
  { x: 10890, y: 65, size: 39 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1955, y: 244, reached: false },
  { x: 3437, y: 0, reached: false },
  { x: 5082, y: -31, reached: false },
  { x: 6565, y: 191, reached: false },
  { x: 8588, y: 351, reached: false },
  { x: 10134, y: 242, reached: false },
  { x: 11767, y: -42, reached: false }, // Final
];
