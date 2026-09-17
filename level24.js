// Level 24 Data — "The Abyssal Climb"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 24";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 441, y: 446, width: 101, height: 20, ghost: true, ghostPeriod: 127, ghostOnRatio: 0.4208333333333334 },
  { x: 717, y: 497, width: 98, height: 20 },
  { x: 987, y: 533, width: 142, height: 20, moveAxis: "x", moveRange: 54, moveSpeed: 0.034, movePhase: 1.41 },
  { x: 1336, y: 550, width: 150, height: 20 },
  { x: 1638, y: 550, width: 297, height: 20 },
  { x: 2141, y: 501, width: 132, height: 20 },
  { x: 2601, y: 452, width: 90, height: 20 },
  { x: 2870, y: 365, width: 164, height: 20, melt: true, meltDelay: 21 },
  { x: 3220, y: 365, width: 220, height: 20 },
  { x: 3578, y: 281, width: 131, height: 20, moveAxis: "y", moveRange: 99, moveSpeed: 0.036, movePhase: 4.44 },
  { x: 3892, y: 190, width: 146, height: 20, melt: true, meltDelay: 21 },
  { x: 4303, y: 125, width: 178, height: 20 },
  { x: 4614, y: 125, width: 224, height: 20 },
  { x: 5036, y: 118, width: 124, height: 20, ghost: true, ghostPeriod: 127, ghostOnRatio: 0.4208333333333334 },
  { x: 5328, y: 141, width: 87, height: 20 },
  { x: 5624, y: 176, width: 132, height: 20, ghost: true, ghostPeriod: 127, ghostOnRatio: 0.4208333333333334 },
  { x: 5961, y: 228, width: 104, height: 20 },
  { x: 6264, y: 228, width: 295, height: 20 },
  { x: 6697, y: 325, width: 104, height: 20, melt: true, meltDelay: 21 },
  { x: 6959, y: 404, width: 129, height: 20, melt: true, meltDelay: 21 },
  { x: 7302, y: 477, width: 147, height: 20 },
  { x: 7643, y: 531, width: 96, height: 20, moveAxis: "y", moveRange: 57, moveSpeed: 0.036, movePhase: 1.69 },
  { x: 7875, y: 531, width: 253, height: 20 },
  { x: 8307, y: 518, width: 398, height: 20 },
];

window.deadlyPlatforms = [
  { x: 1514, y: 547, width: 92, height: 20 },
  { x: 2298, y: 505, width: 73, height: 20 },
  { x: 6090, y: 226, width: 60, height: 20 },
  { x: 7484, y: 471, width: 82, height: 20 },
];

window.spikes = [
  { x: 738, y: 497, size: 27 },
  { x: 1401, y: 550, size: 22 },
  { x: 2644, y: 452, size: 29 },
  { x: 4352, y: 125, size: 20 },
  { x: 5350, y: 141, size: 23 },
  { x: 5983, y: 228, size: 28 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1787, y: 520, reached: false },
  { x: 3330, y: 335, reached: false },
  { x: 4726, y: 95, reached: false },
  { x: 6412, y: 198, reached: false },
  { x: 8002, y: 501, reached: false },
  { x: 8506, y: 488, reached: false }, // Final
];
