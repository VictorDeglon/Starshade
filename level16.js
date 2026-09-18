// Level 16 Data — "The Hollow Spiral"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 16";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 513, y: 407, width: 164, height: 28, melt: true, meltDelay: 24 },
  { x: 890, y: 432, width: 119, height: 17 },
  { x: 1231, y: 486, width: 200, height: 41, moveAxis: "y", moveRange: 88, moveSpeed: 0.042, movePhase: 2.9 },
  { x: 1653, y: 538, width: 70, height: 37 },
  { x: 1887, y: 538, width: 219, height: 21 },
  { x: 2328, y: 595, width: 78, height: 16, ghost: true, ghostPeriod: 151, ghostOnRatio: 0.49782608695652175 },
  { x: 2624, y: 643, width: 119, height: 27, ghost: true, ghostPeriod: 151, ghostOnRatio: 0.49782608695652175 },
  { x: 2965, y: 698, width: 118, height: 34 },
  { x: 3287, y: 707, width: 167, height: 16 },
  { x: 3618, y: 707, width: 261, height: 16 },
  { x: 4276, y: 676, width: 104, height: 28, melt: true, meltDelay: 24 },
  { x: 4768, y: 630, width: 182, height: 34, moveAxis: "x", moveRange: 93, moveSpeed: 0.038, movePhase: 3.48 },
  { x: 5134, y: 585, width: 49, height: 23 },
  { x: 5347, y: 585, width: 318, height: 27 },
  { x: 6050, y: 524, width: 227, height: 22, melt: true, meltDelay: 24 },
  { x: 6653, y: 446, width: 62, height: 24, moveAxis: "x", moveRange: 81, moveSpeed: 0.041, movePhase: 1.68 },
  { x: 6893, y: 388, width: 68, height: 17 },
  { x: 7354, y: 349, width: 46, height: 28 },
  { x: 7564, y: 349, width: 193, height: 12 },
  { x: 7961, y: 358, width: 50, height: 12 },
  { x: 8221, y: 370, width: 64, height: 39 },
  { x: 8498, y: 405, width: 185, height: 28, ghost: true, ghostPeriod: 151, ghostOnRatio: 0.49782608695652175 },
  { x: 8905, y: 457, width: 184, height: 17 },
  { x: 9253, y: 457, width: 273, height: 28 },
  { x: 9700, y: 454, width: 425, height: 20 },
];

window.deadlyPlatforms = [
  { x: 1743, y: 531, width: 60, height: 20 },
  { x: 5206, y: 584, width: 60, height: 20 },
  { x: 6991, y: 387, width: 60, height: 20 },
  { x: 7435, y: 341, width: 60, height: 20 },
  { x: 8318, y: 368, width: 60, height: 20 },
];

window.spikes = [
  { x: 919, y: 432, size: 42 },
  { x: 3312, y: 707, size: 28 },
  { x: 5142, y: 585, size: 17 },
  { x: 8240, y: 370, size: 37 },
  { x: 8928, y: 457, size: 34 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1997, y: 508, reached: false },
  { x: 3749, y: 677, reached: false },
  { x: 5506, y: 555, reached: false },
  { x: 7661, y: 319, reached: false },
  { x: 9390, y: 427, reached: false },
  { x: 9913, y: 424, reached: false }, // Final
];
