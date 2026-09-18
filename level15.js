// Level 15 Data — "Wraith's Crossing"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 15";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 689, y: 342, width: 172, height: 14 },
  { x: 1046, y: 305, width: 125, height: 15 },
  { x: 1365, y: 288, width: 162, height: 28, ghost: true, ghostPeriod: 155, ghostOnRatio: 0.5086956521739131 },
  { x: 1738, y: 314, width: 119, height: 16 },
  { x: 2021, y: 314, width: 291, height: 27 },
  { x: 2528, y: 358, width: 140, height: 17, melt: true, meltDelay: 24 },
  { x: 2888, y: 413, width: 164, height: 29, ghost: true, ghostPeriod: 155, ghostOnRatio: 0.5086956521739131 },
  { x: 3277, y: 493, width: 190, height: 17, ghost: true, ghostPeriod: 155, ghostOnRatio: 0.5086956521739131 },
  { x: 3467, y: 493, width: 244, height: 20 },
  { x: 3903, y: 471, width: 103, height: 20, ghost: true, ghostPeriod: 150, ghostOnRatio: 0.4869565217391304 },
  { x: 4191, y: 451, width: 242, height: 20 },
  { x: 4653, y: 503, width: 166, height: 25, ghost: true, ghostPeriod: 155, ghostOnRatio: 0.5086956521739131 },
  { x: 5030, y: 536, width: 74, height: 28, melt: true, meltDelay: 24 },
  { x: 5311, y: 554, width: 172, height: 30, ghost: true, ghostPeriod: 155, ghostOnRatio: 0.5086956521739131 },
  { x: 5685, y: 557, width: 193, height: 14, moveAxis: "y", moveRange: 58, moveSpeed: 0.033, movePhase: 1.48 },
  { x: 6042, y: 557, width: 377, height: 26 },
  { x: 6601, y: 512, width: 160, height: 15 },
  { x: 7145, y: 460, width: 96, height: 27 },
  { x: 7621, y: 400, width: 161, height: 29 },
  { x: 7946, y: 320, width: 201, height: 21 },
  { x: 8311, y: 320, width: 317, height: 29 },
  { x: 8801, y: 255, width: 233, height: 17 },
  { x: 9219, y: 217, width: 74, height: 26 },
  { x: 9691, y: 201, width: 158, height: 16 },
  { x: 10250, y: 200, width: 163, height: 20, melt: true, meltDelay: 24 },
  { x: 10577, y: 200, width: 236, height: 27 },
  { x: 10964, y: 198, width: 417, height: 20 },
];

window.deadlyPlatforms = [
  { x: 7268, y: 459, width: 60, height: 20 },
  { x: 7803, y: 393, width: 141, height: 20 },
  { x: 8179, y: 326, width: 124, height: 20 },
];

window.spikes = [
  { x: 736, y: 342, size: 19 },
  { x: 1074, y: 305, size: 34 },
  { x: 7165, y: 460, size: 15 },
  { x: 7180, y: 460, size: 38 },
  { x: 7677, y: 400, size: 25 },
  { x: 8879, y: 255, size: 37 },
  { x: 8916, y: 255, size: 13 },
  { x: 8929, y: 255, size: 17 },
  { x: 8946, y: 255, size: 22 },
  { x: 9241, y: 217, size: 33 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2167, y: 284, reached: false },
  { x: 4251, y: 421, reached: false },
  { x: 6231, y: 527, reached: false },
  { x: 8470, y: 290, reached: false },
  { x: 10695, y: 170, reached: false },
  { x: 11173, y: 168, reached: false }, // Final
];
