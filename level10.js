// Level 10 Data — "Level 10"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 10";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 473, y: 417, width: 45, height: 44, moveAxis: "x", moveRange: 57, moveSpeed: 0.027, movePhase: 1.65 },
  { x: 682, y: 457, width: 85, height: 37 },
  { x: 936, y: 500, width: 171, height: 44, melt: true, meltDelay: 27 },
  { x: 1314, y: 500, width: 260, height: 22 },
  { x: 1735, y: 558, width: 227, height: 16 },
  { x: 2138, y: 617, width: 156, height: 26, ghost: true, ghostPeriod: 172, ghostOnRatio: 0.5630434782608695 },
  { x: 2479, y: 655, width: 217, height: 28 },
  { x: 2848, y: 655, width: 373, height: 28 },
  { x: 3382, y: 646, width: 84, height: 16 },
  { x: 3784, y: 637, width: 135, height: 35 },
  { x: 4209, y: 595, width: 55, height: 45, melt: true, meltDelay: 27 },
  { x: 4438, y: 549, width: 135, height: 38, moveAxis: "x", moveRange: 65, moveSpeed: 0.031, movePhase: 0.33 },
  { x: 4739, y: 549, width: 337, height: 14 },
  { x: 5245, y: 479, width: 209, height: 45, melt: true, meltDelay: 27 },
  { x: 5591, y: 424, width: 78, height: 30 },
  { x: 5861, y: 363, width: 135, height: 29, melt: true, meltDelay: 27 },
  { x: 6148, y: 363, width: 281, height: 12 },
  { x: 6595, y: 341, width: 125, height: 20, ghost: true, ghostPeriod: 172, ghostOnRatio: 0.5630434782608695 },
  { x: 6888, y: 351, width: 96, height: 26, melt: true, meltDelay: 27 },
  { x: 7181, y: 370, width: 186, height: 14 },
  { x: 7559, y: 388, width: 70, height: 31 },
  { x: 7780, y: 399, width: 388, height: 20 },
];

window.deadlyPlatforms = [
  { x: 1994, y: 554, width: 129, height: 20 },
  { x: 2722, y: 654, width: 122, height: 20 },
  { x: 5689, y: 415, width: 60, height: 20 },
];

window.spikes = [
  { x: 709, y: 457, size: 30 },
  { x: 1787, y: 558, size: 14 },
  { x: 1801, y: 558, size: 32 },
  { x: 1833, y: 558, size: 29 },
  { x: 3406, y: 646, size: 20 },
  { x: 3426, y: 646, size: 17 },
  { x: 5604, y: 424, size: 35 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1444, y: 470, reached: false },
  { x: 3035, y: 625, reached: false },
  { x: 4908, y: 519, reached: false },
  { x: 6289, y: 333, reached: false },
  { x: 7974, y: 369, reached: false }, // Final
];
