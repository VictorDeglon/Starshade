// Level 25 Data — "Starshade's Zenith"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 25";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 525, y: 388, width: 112, height: 16 },
  { x: 848, y: 362, width: 201, height: 24 },
  { x: 1475, y: 316, width: 80, height: 18, moveAxis: "y", moveRange: 122, moveSpeed: 0.047, movePhase: 4.62 },
  { x: 1977, y: 251, width: 168, height: 21, melt: true, meltDelay: 20 },
  { x: 2309, y: 251, width: 233, height: 27 },
  { x: 2728, y: 174, width: 131, height: 19 },
  { x: 3045, y: 96, width: 109, height: 21 },
  { x: 3567, y: 19, width: 210, height: 22 },
  { x: 4199, y: -39, width: 181, height: 22, moveAxis: "y", moveRange: 69, moveSpeed: 0.044, movePhase: 4.82 },
  { x: 4380, y: -39, width: 242, height: 20 },
  { x: 4824, y: -64, width: 93, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.39999999999999997 },
  { x: 5122, y: -87, width: 223, height: 20 },
  { x: 5787, y: -108, width: 214, height: 27, melt: true, meltDelay: 20 },
  { x: 6231, y: -95, width: 102, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 6573, y: -54, width: 63, height: 25 },
  { x: 6886, y: 22, width: 103, height: 16 },
  { x: 6989, y: 22, width: 265, height: 20 },
  { x: 7462, y: -7, width: 92, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.39999999999999997 },
  { x: 7753, y: -18, width: 231, height: 20 },
  { x: 8234, y: 68, width: 165, height: 24, moveAxis: "y", moveRange: 103, moveSpeed: 0.049, movePhase: 1.17 },
  { x: 8649, y: 167, width: 195, height: 19, melt: true, meltDelay: 20 },
  { x: 9094, y: 240, width: 70, height: 21, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 9408, y: 295, width: 95, height: 17, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 9667, y: 295, width: 297, height: 29 },
  { x: 10198, y: 324, width: 139, height: 15 },
  { x: 10552, y: 312, width: 77, height: 16 },
  { x: 10834, y: 269, width: 96, height: 17 },
  { x: 11094, y: 269, width: 298, height: 18 },
  { x: 11584, y: 199, width: 97, height: 17 },
  { x: 12094, y: 118, width: 196, height: 14, moveAxis: "y", moveRange: 117, moveSpeed: 0.056, movePhase: 6.11 },
  { x: 12463, y: 24, width: 154, height: 20, melt: true, meltDelay: 20 },
  { x: 12803, y: -49, width: 204, height: 23 },
  { x: 13158, y: -62, width: 400, height: 20 },
];

window.deadlyPlatforms = [
  { x: 676, y: 396, width: 68, height: 20 },
  { x: 3803, y: 26, width: 172, height: 20 },
  { x: 6664, y: -55, width: 60, height: 20 },
  { x: 7022, y: 24, width: 75, height: 20 },
  { x: 10370, y: 314, width: 87, height: 20 },
  { x: 10668, y: 319, width: 67, height: 20 },
  { x: 10968, y: 265, width: 61, height: 20 },
  { x: 13043, y: -57, width: 155, height: 20 },
];

window.spikes = [
  { x: 565, y: 388, size: 36 },
  { x: 876, y: 362, size: 43 },
  { x: 919, y: 362, size: 29 },
  { x: 948, y: 362, size: 42 },
  { x: 2755, y: 174, size: 43 },
  { x: 2798, y: 174, size: 30 },
  { x: 3600, y: 19, size: 35 },
  { x: 6908, y: 22, size: 14 },
  { x: 6922, y: 22, size: 21 },
  { x: 10215, y: 324, size: 32 },
  { x: 10247, y: 324, size: 24 },
  { x: 10271, y: 324, size: 26 },
  { x: 10297, y: 324, size: 13 },
  { x: 10576, y: 312, size: 25 },
  { x: 10869, y: 269, size: 31 },
  { x: 11602, y: 199, size: 14 },
  { x: 11616, y: 199, size: 51 },
  { x: 12831, y: -49, size: 34 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2426, y: 221, reached: false },
  { x: 5182, y: -117, reached: false },
  { x: 7813, y: -48, reached: false },
  { x: 9816, y: 265, reached: false },
  { x: 11243, y: 239, reached: false },
  { x: 13358, y: -92, reached: false }, // Final
];
