// Level 12 Data — "Level 12"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 12";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 452, y: 415, width: 185, height: 20 },
  { x: 813, y: 416, width: 98, height: 27 },
  { x: 1205, y: 397, width: 77, height: 18 },
  { x: 1433, y: 397, width: 256, height: 20 },
  { x: 1878, y: 346, width: 69, height: 32, moveAxis: "x", moveRange: 57, moveSpeed: 0.038, movePhase: 4.51 },
  { x: 2080, y: 302, width: 88, height: 22 },
  { x: 2433, y: 249, width: 176, height: 36, melt: true, meltDelay: 26 },
  { x: 2807, y: 184, width: 51, height: 38 },
  { x: 2999, y: 184, width: 291, height: 26 },
  { x: 3600, y: 145, width: 103, height: 22 },
  { x: 3882, y: 108, width: 195, height: 31 },
  { x: 4390, y: 96, width: 107, height: 15 },
  { x: 4628, y: 96, width: 195, height: 33 },
  { x: 4971, y: 108, width: 77, height: 13, ghost: true, ghostPeriod: 165, ghostOnRatio: 0.5413043478260869 },
  { x: 5220, y: 133, width: 165, height: 14, ghost: true, ghostPeriod: 165, ghostOnRatio: 0.5413043478260869 },
  { x: 5565, y: 195, width: 120, height: 12, melt: true, meltDelay: 26 },
  { x: 5865, y: 195, width: 278, height: 32 },
  { x: 6282, y: 260, width: 65, height: 38, ghost: true, ghostPeriod: 165, ghostOnRatio: 0.5413043478260869 },
  { x: 6545, y: 326, width: 109, height: 17, moveAxis: "x", moveRange: 62, moveSpeed: 0.039, movePhase: 1.58 },
  { x: 6848, y: 378, width: 226, height: 22, melt: true, meltDelay: 26 },
  { x: 7258, y: 406, width: 89, height: 14 },
  { x: 7547, y: 406, width: 327, height: 18 },
  { x: 8071, y: 398, width: 386, height: 20 },
];

window.deadlyPlatforms = [
  { x: 946, y: 420, width: 87, height: 20 },
  { x: 1312, y: 400, width: 60, height: 20 },
  { x: 2200, y: 293, width: 60, height: 20 },
  { x: 4100, y: 114, width: 151, height: 20 },
  { x: 7374, y: 403, width: 72, height: 20 },
];

window.spikes = [
  { x: 1218, y: 397, size: 17 },
  { x: 1235, y: 397, size: 18 },
  { x: 2101, y: 302, size: 33 },
  { x: 2817, y: 184, size: 18 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1561, y: 367, reached: false },
  { x: 3145, y: 154, reached: false },
  { x: 4726, y: 66, reached: false },
  { x: 6004, y: 165, reached: false },
  { x: 7711, y: 376, reached: false },
  { x: 8264, y: 368, reached: false }, // Final
];
