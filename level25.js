// Level 25 Data — "Starshade's Zenith"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 25";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 462, y: 388, width: 85, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 751, y: 362, width: 138, height: 20 },
  { x: 1162, y: 316, width: 101, height: 20, moveAxis: "x", moveRange: 95, moveSpeed: 0.041, movePhase: 6.01 },
  { x: 1568, y: 251, width: 115, height: 20 },
  { x: 1834, y: 251, width: 284, height: 20 },
  { x: 2288, y: 174, width: 104, height: 20 },
  { x: 2552, y: 96, width: 118, height: 20, moveAxis: "y", moveRange: 82, moveSpeed: 0.035, movePhase: 0.15 },
  { x: 2990, y: 19, width: 123, height: 20 },
  { x: 3423, y: -39, width: 125, height: 20 },
  { x: 3548, y: -39, width: 242, height: 20 },
  { x: 3992, y: -64, width: 93, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.39999999999999997 },
  { x: 4290, y: -87, width: 223, height: 20 },
  { x: 4835, y: -108, width: 154, height: 20 },
  { x: 5146, y: -95, width: 109, height: 20, moveAxis: "y", moveRange: 103, moveSpeed: 0.039, movePhase: 4.62 },
  { x: 5393, y: -54, width: 142, height: 20, melt: true, meltDelay: 20 },
  { x: 5692, y: 22, width: 87, height: 20 },
  { x: 5779, y: 22, width: 265, height: 20 },
  { x: 6252, y: -7, width: 92, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.39999999999999997 },
  { x: 6543, y: -18, width: 231, height: 20 },
  { x: 6961, y: 68, width: 138, height: 20 },
  { x: 7300, y: 167, width: 107, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 7549, y: 240, width: 117, height: 20, moveAxis: "y", moveRange: 58, moveSpeed: 0.036, movePhase: 4.82 },
  { x: 7820, y: 295, width: 93, height: 20, melt: true, meltDelay: 20 },
  { x: 8091, y: 295, width: 291, height: 20 },
  { x: 8556, y: 324, width: 77, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 8778, y: 312, width: 86, height: 20 },
  { x: 9018, y: 269, width: 95, height: 20 },
  { x: 9291, y: 269, width: 242, height: 20 },
  { x: 9694, y: 262, width: 401, height: 20 },
];

window.deadlyPlatforms = [
  { x: 3150, y: 26, width: 94, height: 20 },
  { x: 7134, y: 77, width: 97, height: 20 },
  { x: 9152, y: 277, width: 60, height: 20 },
];

window.spikes = [
  { x: 2311, y: 174, size: 20 },
  { x: 3034, y: 19, size: 19 },
  { x: 3470, y: -39, size: 27 },
  { x: 8837, y: 312, size: 24 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1976, y: 221, reached: false },
  { x: 4350, y: -117, reached: false },
  { x: 6603, y: -48, reached: false },
  { x: 8237, y: 265, reached: false },
  { x: 9412, y: 239, reached: false },
  { x: 9895, y: 232, reached: false }, // Final
];
