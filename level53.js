// Level 53 Data — "The Ember Maze"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 53";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 737, y: 336, width: 56, height: 25, moveAxis: "x", moveRange: 118, moveSpeed: 0.056, movePhase: 3.47 },
  { x: 1239, y: 321, width: 95, height: 20 },
  { x: 1567, y: 341, width: 185, height: 23, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 1916, y: 341, width: 350, height: 17 },
  { x: 2518, y: 418, width: 199, height: 22, conveyor: true, conveyorSpeed: -1.52 },
  { x: 2969, y: 511, width: 188, height: 20, melt: true, meltDelay: 20 },
  { x: 3409, y: 612, width: 49, height: 25, conveyor: true, conveyorSpeed: 1.99 },
  { x: 3622, y: 612, width: 314, height: 26 },
  { x: 4188, y: 700, width: 103, height: 28 },
  { x: 4537, y: 753, width: 116, height: 29, bounce: true, bounceStrength: -19 },
  { x: 4890, y: 789, width: 127, height: 27, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 5181, y: 789, width: 389, height: 23 },
  { x: 6016, y: 771, width: 226, height: 19, melt: true, meltDelay: 20 },
  { x: 6669, y: 713, width: 192, height: 18 },
  { x: 7055, y: 651, width: 196, height: 25, bounce: true, bounceStrength: -17 },
  { x: 7251, y: 651, width: 257, height: 20 },
  { x: 7705, y: 623, width: 103, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.3748979591836734 },
  { x: 7992, y: 606, width: 249, height: 20 },
  { x: 8425, y: 523, width: 203, height: 23 },
  { x: 8793, y: 415, width: 153, height: 19 },
  { x: 9353, y: 319, width: 139, height: 21 },
  { x: 9656, y: 319, width: 321, height: 23 },
  { x: 10417, y: 291, width: 159, height: 17, melt: true, meltDelay: 20 },
  { x: 10803, y: 291, width: 191, height: 17, conveyor: true, conveyorSpeed: 1.98 },
  { x: 11227, y: 306, width: 140, height: 24, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 11610, y: 356, width: 222, height: 20, conveyor: true, conveyorSpeed: -1.77 },
  { x: 11996, y: 356, width: 359, height: 18 },
  { x: 12607, y: 438, width: 102, height: 28, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 12961, y: 520, width: 100, height: 29, bounce: true, bounceStrength: -17 },
  { x: 13313, y: 618, width: 232, height: 26 },
  { x: 13709, y: 618, width: 292, height: 17 },
  { x: 14169, y: 626, width: 420, height: 20 },
];

window.deadlyPlatforms = [
  { x: 4319, y: 692, width: 60, height: 20 },
  { x: 6891, y: 706, width: 114, height: 20 },
  { x: 8660, y: 525, width: 159, height: 20 },
  { x: 8981, y: 423, width: 105, height: 20 },
  { x: 9518, y: 319, width: 108, height: 20 },
  { x: 13573, y: 609, width: 128, height: 20 },
];

window.spikes = [
  { x: 1269, y: 321, size: 23 },
  { x: 1292, y: 321, size: 23 },
  { x: 4210, y: 700, size: 55 },
  { x: 6727, y: 713, size: 27 },
  { x: 8449, y: 523, size: 44 },
  { x: 8493, y: 523, size: 16 },
  { x: 8509, y: 523, size: 31 },
  { x: 8540, y: 523, size: 35 },
  { x: 8833, y: 415, size: 12 },
  { x: 8845, y: 415, size: 31 },
  { x: 8876, y: 415, size: 51 },
  { x: 9395, y: 319, size: 49 },
  { x: 9444, y: 319, size: 23 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2091, y: 311, reached: false },
  { x: 3779, y: 582, reached: false },
  { x: 5376, y: 759, reached: false },
  { x: 8052, y: 576, reached: false },
  { x: 9817, y: 289, reached: false },
  { x: 12176, y: 326, reached: false },
  { x: 13855, y: 588, reached: false },
  { x: 14379, y: 596, reached: false }, // Final
];
