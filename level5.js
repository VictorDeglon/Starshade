// Level 5 Data — "Level 5"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 5";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 517, y: 419, width: 122, height: 27, moveAxis: "y", moveRange: 50, moveSpeed: 0.03, movePhase: 3.59 },
  { x: 783, y: 472, width: 172, height: 17, moveAxis: "x", moveRange: 49, moveSpeed: 0.026, movePhase: 3.43 },
  { x: 1167, y: 509, width: 75, height: 16 },
  { x: 1378, y: 535, width: 92, height: 22 },
  { x: 1687, y: 535, width: 388, height: 24 },
  { x: 2265, y: 521, width: 148, height: 25 },
  { x: 2714, y: 493, width: 137, height: 25, melt: true, meltDelay: 29 },
  { x: 3042, y: 470, width: 201, height: 32, melt: true, meltDelay: 29 },
  { x: 3446, y: 470, width: 389, height: 34 },
  { x: 4024, y: 438, width: 205, height: 23 },
  { x: 4412, y: 402, width: 181, height: 12 },
  { x: 4764, y: 367, width: 75, height: 22 },
  { x: 5051, y: 367, width: 262, height: 26 },
  { x: 5471, y: 353, width: 136, height: 30, melt: true, meltDelay: 29 },
  { x: 5868, y: 350, width: 103, height: 27 },
  { x: 6117, y: 368, width: 215, height: 39, moveAxis: "x", moveRange: 53, moveSpeed: 0.025, movePhase: 5.48 },
  { x: 6548, y: 368, width: 355, height: 37 },
  { x: 7090, y: 400, width: 222, height: 28 },
  { x: 7482, y: 451, width: 213, height: 27 },
  { x: 7902, y: 447, width: 439, height: 20 },
];

window.deadlyPlatforms = [
  { x: 1503, y: 531, width: 68, height: 20 },
  { x: 2439, y: 512, width: 131, height: 20 },
  { x: 4252, y: 433, width: 116, height: 20 },
  { x: 7347, y: 404, width: 134, height: 20 },
  { x: 7727, y: 445, width: 145, height: 20 },
];

window.spikes = [
  { x: 7552, y: 451, size: 12 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1881, y: 505, reached: false },
  { x: 3641, y: 440, reached: false },
  { x: 5182, y: 337, reached: false },
  { x: 6726, y: 338, reached: false },
  { x: 8122, y: 417, reached: false }, // Final
];
