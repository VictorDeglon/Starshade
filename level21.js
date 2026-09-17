// Level 21 Data — "Starlit Precipice"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 21";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 456, y: 326, width: 144, height: 20 },
  { x: 926, y: 283, width: 107, height: 20, melt: true, meltDelay: 23 },
  { x: 1174, y: 270, width: 99, height: 20, melt: true, meltDelay: 23 },
  { x: 1416, y: 270, width: 239, height: 20 },
  { x: 1795, y: 297, width: 101, height: 20, melt: true, meltDelay: 23 },
  { x: 2066, y: 331, width: 142, height: 20 },
  { x: 2410, y: 395, width: 179, height: 20, ghost: true, ghostPeriod: 147, ghostOnRatio: 0.4833333333333334 },
  { x: 2759, y: 450, width: 109, height: 20 },
  { x: 2868, y: 450, width: 254, height: 20 },
  { x: 3314, y: 438, width: 108, height: 20, ghost: true, ghostPeriod: 143, ghostOnRatio: 0.4666666666666667 },
  { x: 3598, y: 423, width: 264, height: 20 },
  { x: 4052, y: 498, width: 75, height: 20, moveAxis: "x", moveRange: 59, moveSpeed: 0.036, movePhase: 4.19 },
  { x: 4293, y: 551, width: 73, height: 20, moveAxis: "x", moveRange: 73, moveSpeed: 0.03, movePhase: 5.18 },
  { x: 4530, y: 587, width: 121, height: 20, melt: true, meltDelay: 23 },
  { x: 4808, y: 587, width: 258, height: 20 },
  { x: 5362, y: 579, width: 100, height: 20 },
  { x: 5737, y: 552, width: 81, height: 20 },
  { x: 5966, y: 522, width: 115, height: 20, moveAxis: "y", moveRange: 50, moveSpeed: 0.025, movePhase: 4.39 },
  { x: 6278, y: 454, width: 143, height: 20 },
  { x: 6571, y: 454, width: 291, height: 20 },
  { x: 7126, y: 381, width: 140, height: 20 },
  { x: 7452, y: 303, width: 121, height: 20 },
  { x: 7740, y: 253, width: 160, height: 20 },
  { x: 8058, y: 265, width: 426, height: 20 },
];

window.deadlyPlatforms = [
  { x: 5846, y: 543, width: 69, height: 20 },
  { x: 6460, y: 464, width: 80, height: 20 },
  { x: 7595, y: 301, width: 89, height: 20 },
];

window.spikes = [
  { x: 5768, y: 552, size: 18 },
  { x: 6312, y: 454, size: 29 },
  { x: 7502, y: 303, size: 19 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1536, y: 240, reached: false },
  { x: 3658, y: 393, reached: false },
  { x: 4937, y: 557, reached: false },
  { x: 6717, y: 424, reached: false },
  { x: 8271, y: 235, reached: false }, // Final
];
