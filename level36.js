// Level 36 Data — "Obsidian Furrow"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 36";
window.levelAccent = "#ff9838";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 547, y: 458, width: 159, height: 17, ghost: true, ghostPeriod: 124, ghostOnRatio: 0.4119897959183674 },
  { x: 953, y: 531, width: 122, height: 14 },
  { x: 1322, y: 600, width: 105, height: 29 },
  { x: 1591, y: 600, width: 263, height: 19 },
  { x: 2091, y: 642, width: 72, height: 15, ghost: true, ghostPeriod: 124, ghostOnRatio: 0.4119897959183674 },
  { x: 2391, y: 654, width: 191, height: 30, moveAxis: "x", moveRange: 78, moveSpeed: 0.046, movePhase: 3.23 },
  { x: 3019, y: 638, width: 89, height: 19 },
  { x: 3535, y: 599, width: 48, height: 15 },
  { x: 3747, y: 599, width: 393, height: 21 },
  { x: 4324, y: 526, width: 143, height: 20, moveAxis: "x", moveRange: 98, moveSpeed: 0.043, movePhase: 3.61 },
  { x: 4632, y: 426, width: 158, height: 15, conveyor: true, conveyorSpeed: -1.89 },
  { x: 4974, y: 350, width: 74, height: 14, moveAxis: "y", moveRange: 106, moveSpeed: 0.05, movePhase: 4.01 },
  { x: 5212, y: 350, width: 211, height: 30 },
  { x: 5617, y: 290, width: 76, height: 21 },
  { x: 5892, y: 240, width: 86, height: 22 },
  { x: 6415, y: 228, width: 108, height: 29, melt: true, meltDelay: 20 },
  { x: 6751, y: 251, width: 195, height: 29 },
  { x: 7110, y: 251, width: 353, height: 16 },
  { x: 7704, y: 309, width: 223, height: 22, moveAxis: "y", moveRange: 91, moveSpeed: 0.05, movePhase: 4.7 },
  { x: 8174, y: 385, width: 125, height: 24 },
  { x: 8546, y: 469, width: 161, height: 15, ghost: true, ghostPeriod: 124, ghostOnRatio: 0.4119897959183674 },
  { x: 8954, y: 548, width: 49, height: 26, bounce: true, bounceStrength: -19 },
  { x: 9167, y: 548, width: 395, height: 18 },
  { x: 9803, y: 601, width: 166, height: 23, conveyor: true, conveyorSpeed: 1.68 },
  { x: 10206, y: 641, width: 225, height: 30, ghost: true, ghostPeriod: 124, ghostOnRatio: 0.4119897959183674 },
  { x: 10653, y: 645, width: 122, height: 27 },
  { x: 11216, y: 635, width: 105, height: 30, melt: true, meltDelay: 20 },
  { x: 11485, y: 635, width: 255, height: 25 },
  { x: 11940, y: 634, width: 403, height: 20 },
];

window.deadlyPlatforms = [
  { x: 2311, y: 701, width: 127, height: 24, moveAxis: "y", moveRange: 67, moveSpeed: 0.044, movePhase: 3.62 },
  { x: 4378, y: 473, width: 117, height: 25, moveAxis: "y", moveRange: 93, moveSpeed: 0.039, movePhase: 0.44 },
  { x: 4888, y: 382, width: 56, height: 14, moveAxis: "x", moveRange: 102, moveSpeed: 0.051, movePhase: 3.43 },
  { x: 1103, y: 522, width: 82, height: 20 },
  { x: 3128, y: 643, width: 67, height: 20 },
  { x: 3604, y: 607, width: 60, height: 20 },
  { x: 6979, y: 247, width: 125, height: 20 },
  { x: 10808, y: 647, width: 104, height: 20 },
];

window.spikes = [
  { x: 1346, y: 600, size: 15 },
  { x: 3048, y: 638, size: 33 },
  { x: 3081, y: 638, size: 18 },
  { x: 5635, y: 290, size: 43 },
  { x: 10696, y: 645, size: 28 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1723, y: 570, reached: false },
  { x: 3944, y: 569, reached: false },
  { x: 5318, y: 320, reached: false },
  { x: 7287, y: 221, reached: false },
  { x: 9365, y: 518, reached: false },
  { x: 11613, y: 605, reached: false },
  { x: 12142, y: 604, reached: false }, // Final
];

window.forceZones = [
  { x: 3757, y: 509, width: 373, height: 90, axis: "x", force: -0.185 },
];
