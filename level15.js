// Level 15 Data — "Wraith's Crossing"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 15";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 606, y: 354, width: 73, height: 20, moveAxis: "y", moveRange: 56, moveSpeed: 0.028, movePhase: 4.33 },
  { x: 846, y: 325, width: 80, height: 20 },
  { x: 1111, y: 310, width: 164, height: 20 },
  { x: 1440, y: 331, width: 84, height: 20, ghost: true, ghostPeriod: 187, ghostOnRatio: 0.6083333333333334 },
  { x: 1702, y: 331, width: 260, height: 20 },
  { x: 2161, y: 374, width: 125, height: 20, moveAxis: "y", moveRange: 52, moveSpeed: 0.026, movePhase: 6.16 },
  { x: 2435, y: 433, width: 138, height: 20 },
  { x: 2759, y: 492, width: 154, height: 20, melt: true, meltDelay: 28 },
  { x: 3046, y: 492, width: 225, height: 20 },
  { x: 3449, y: 546, width: 118, height: 20, moveAxis: "x", moveRange: 59, moveSpeed: 0.027, movePhase: 0.62 },
  { x: 3726, y: 582, width: 140, height: 20, moveAxis: "x", moveRange: 54, moveSpeed: 0.021, movePhase: 2.17 },
  { x: 4027, y: 608, width: 87, height: 20 },
  { x: 4251, y: 605, width: 143, height: 20, ghost: true, ghostPeriod: 187, ghostOnRatio: 0.6083333333333334 },
  { x: 4544, y: 605, width: 282, height: 20 },
  { x: 5035, y: 588, width: 168, height: 20, melt: true, meltDelay: 28 },
  { x: 5381, y: 553, width: 136, height: 20, moveAxis: "y", moveRange: 36, moveSpeed: 0.024, movePhase: 4.92 },
  { x: 5653, y: 500, width: 99, height: 20 },
  { x: 5938, y: 503, width: 428, height: 20 },
];

window.deadlyPlatforms = [
  { x: 960, y: 320, width: 60, height: 20 },
  { x: 1306, y: 306, width: 89, height: 20 },
  { x: 4151, y: 616, width: 60, height: 20 },
];

window.spikes = [
  { x: 2496, y: 433, size: 25 },
  { x: 5711, y: 500, size: 21 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1832, y: 301, reached: false },
  { x: 3159, y: 462, reached: false },
  { x: 4685, y: 575, reached: false },
  { x: 6152, y: 473, reached: false }, // Final
];
