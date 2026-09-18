// Level 24 Data — "The Abyssal Climb"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 24";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 547, y: 447, width: 69, height: 21, melt: true, meltDelay: 20 },
  { x: 857, y: 499, width: 141, height: 20, melt: true, meltDelay: 20 },
  { x: 1230, y: 536, width: 134, height: 34, melt: true, meltDelay: 20 },
  { x: 1592, y: 553, width: 208, height: 36 },
  { x: 1964, y: 553, width: 235, height: 44 },
  { x: 2399, y: 503, width: 206, height: 31 },
  { x: 3027, y: 453, width: 229, height: 18 },
  { x: 3431, y: 365, width: 190, height: 41, melt: true, meltDelay: 20 },
  { x: 3785, y: 365, width: 318, height: 12 },
  { x: 4278, y: 279, width: 62, height: 30, melt: true, meltDelay: 20 },
  { x: 4515, y: 187, width: 221, height: 35 },
  { x: 5148, y: 120, width: 59, height: 45 },
  { x: 5371, y: 120, width: 187, height: 13 },
  { x: 5777, y: 112, width: 190, height: 28, ghost: true, ghostPeriod: 123, ghostOnRatio: 0.4108695652173913 },
  { x: 6195, y: 135, width: 126, height: 17, moveAxis: "x", moveRange: 81, moveSpeed: 0.05, movePhase: 0.82 },
  { x: 6553, y: 170, width: 213, height: 31, melt: true, meltDelay: 20 },
  { x: 7007, y: 224, width: 204, height: 22, melt: true, meltDelay: 20 },
  { x: 7375, y: 224, width: 350, height: 44 },
  { x: 7972, y: 323, width: 62, height: 22, ghost: true, ghostPeriod: 123, ghostOnRatio: 0.4108695652173913 },
  { x: 8281, y: 404, width: 105, height: 30, moveAxis: "x", moveRange: 85, moveSpeed: 0.037, movePhase: 4.92 },
  { x: 8633, y: 479, width: 222, height: 35, melt: true, meltDelay: 20 },
  { x: 9096, y: 534, width: 180, height: 20, ghost: true, ghostPeriod: 123, ghostOnRatio: 0.4108695652173913 },
  { x: 9276, y: 534, width: 276, height: 20 },
  { x: 9750, y: 523, width: 96, height: 20, ghost: true, ghostPeriod: 123, ghostOnRatio: 0.408695652173913 },
  { x: 10048, y: 504, width: 248, height: 20 },
  { x: 10518, y: 513, width: 224, height: 26, ghost: true, ghostPeriod: 123, ghostOnRatio: 0.4108695652173913 },
  { x: 11183, y: 510, width: 201, height: 38, melt: true, meltDelay: 20 },
  { x: 11587, y: 475, width: 74, height: 45, melt: true, meltDelay: 20 },
  { x: 11845, y: 403, width: 179, height: 17 },
  { x: 12188, y: 403, width: 276, height: 41 },
  { x: 12636, y: 394, width: 415, height: 20 },
];

window.deadlyPlatforms = [
  { x: 2626, y: 513, width: 178, height: 20 },
  { x: 3289, y: 460, width: 152, height: 20 },
  { x: 4761, y: 190, width: 112, height: 20 },
];

window.spikes = [
  { x: 2428, y: 503, size: 16 },
  { x: 3059, y: 453, size: 16 },
  { x: 11874, y: 403, size: 25 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2082, y: 523, reached: false },
  { x: 3944, y: 335, reached: false },
  { x: 5465, y: 90, reached: false },
  { x: 7550, y: 194, reached: false },
  { x: 10108, y: 474, reached: false },
  { x: 12326, y: 373, reached: false },
  { x: 12844, y: 364, reached: false }, // Final
];
