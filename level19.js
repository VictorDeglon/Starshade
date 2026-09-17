// Level 19 Data — "The Shattered Path"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 19";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 621, y: 367, width: 170, height: 20 },
  { x: 971, y: 342, width: 72, height: 20, moveAxis: "y", moveRange: 61, moveSpeed: 0.027, movePhase: 1.06 },
  { x: 1326, y: 308, width: 108, height: 20 },
  { x: 1616, y: 252, width: 153, height: 20 },
  { x: 1926, y: 252, width: 273, height: 20 },
  { x: 2460, y: 174, width: 100, height: 20 },
  { x: 2760, y: 108, width: 103, height: 20 },
  { x: 3008, y: 74, width: 151, height: 20 },
  { x: 3447, y: 33, width: 118, height: 20 },
  { x: 3712, y: 33, width: 273, height: 20 },
  { x: 4138, y: 47, width: 129, height: 20, ghost: true, ghostPeriod: 160, ghostOnRatio: 0.525 },
  { x: 4483, y: 84, width: 175, height: 20 },
  { x: 4793, y: 119, width: 101, height: 20, ghost: true, ghostPeriod: 160, ghostOnRatio: 0.525 },
  { x: 5044, y: 119, width: 242, height: 20 },
  { x: 5479, y: 170, width: 177, height: 20, ghost: true, ghostPeriod: 160, ghostOnRatio: 0.525 },
  { x: 5857, y: 227, width: 98, height: 20 },
  { x: 6152, y: 275, width: 136, height: 20, ghost: true, ghostPeriod: 160, ghostOnRatio: 0.525 },
  { x: 6449, y: 275, width: 255, height: 20 },
  { x: 6899, y: 313, width: 138, height: 20, moveAxis: "x", moveRange: 78, moveSpeed: 0.035, movePhase: 2.52 },
  { x: 7181, y: 333, width: 84, height: 20 },
  { x: 7465, y: 338, width: 419, height: 20 },
];

window.deadlyPlatforms = [
  { x: 1461, y: 308, width: 60, height: 20 },
  { x: 3189, y: 73, width: 98, height: 20 },
];

window.spikes = [
  { x: 666, y: 367, size: 26 },
  { x: 1374, y: 308, size: 27 },
  { x: 2788, y: 108, size: 19 },
  { x: 3515, y: 33, size: 26 },
  { x: 7208, y: 333, size: 21 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2063, y: 222, reached: false },
  { x: 3849, y: 3, reached: false },
  { x: 5165, y: 89, reached: false },
  { x: 6577, y: 245, reached: false },
  { x: 7675, y: 308, reached: false }, // Final
];
