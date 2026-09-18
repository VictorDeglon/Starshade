// Level 23 Data — "Eclipse Corridor"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 23";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 545, y: 455, width: 142, height: 24 },
  { x: 932, y: 537, width: 56, height: 30, melt: true, meltDelay: 21 },
  { x: 1233, y: 611, width: 76, height: 21 },
  { x: 1554, y: 704, width: 171, height: 27, ghost: true, ghostPeriod: 127, ghostOnRatio: 0.4217391304347826 },
  { x: 1889, y: 704, width: 369, height: 24 },
  { x: 2493, y: 744, width: 182, height: 28, ghost: true, ghostPeriod: 127, ghostOnRatio: 0.4217391304347826 },
  { x: 2905, y: 777, width: 146, height: 26, ghost: true, ghostPeriod: 127, ghostOnRatio: 0.4217391304347826 },
  { x: 3488, y: 766, width: 225, height: 23 },
  { x: 3877, y: 766, width: 198, height: 30 },
  { x: 4498, y: 723, width: 234, height: 25, melt: true, meltDelay: 21 },
  { x: 4920, y: 657, width: 128, height: 23, melt: true, meltDelay: 21 },
  { x: 5456, y: 581, width: 49, height: 27 },
  { x: 5913, y: 508, width: 90, height: 22 },
  { x: 6167, y: 508, width: 247, height: 15 },
  { x: 6828, y: 450, width: 151, height: 20 },
  { x: 7171, y: 395, width: 149, height: 20 },
  { x: 7527, y: 365, width: 77, height: 24, moveAxis: "y", moveRange: 69, moveSpeed: 0.045, movePhase: 4.02 },
  { x: 7604, y: 365, width: 288, height: 20 },
  { x: 8086, y: 337, width: 90, height: 20, ghost: true, ghostPeriod: 126, ghostOnRatio: 0.41739130434782606 },
  { x: 8376, y: 314, width: 263, height: 20 },
  { x: 8865, y: 333, width: 179, height: 16, moveAxis: "x", moveRange: 106, moveSpeed: 0.039, movePhase: 5.83 },
  { x: 9283, y: 388, width: 159, height: 22, ghost: true, ghostPeriod: 127, ghostOnRatio: 0.4217391304347826 },
  { x: 9687, y: 460, width: 95, height: 28, ghost: true, ghostPeriod: 127, ghostOnRatio: 0.4217391304347826 },
  { x: 9782, y: 460, width: 273, height: 20 },
  { x: 10256, y: 434, width: 99, height: 20, ghost: true, ghostPeriod: 126, ghostOnRatio: 0.41739130434782606 },
  { x: 10547, y: 417, width: 221, height: 20 },
  { x: 11013, y: 496, width: 89, height: 26, melt: true, meltDelay: 21 },
  { x: 11347, y: 581, width: 170, height: 27, ghost: true, ghostPeriod: 127, ghostOnRatio: 0.4217391304347826 },
  { x: 11762, y: 659, width: 62, height: 22, ghost: true, ghostPeriod: 127, ghostOnRatio: 0.4217391304347826 },
  { x: 11988, y: 659, width: 240, height: 20 },
  { x: 12454, y: 671, width: 54, height: 29, melt: true, meltDelay: 21 },
  { x: 12659, y: 674, width: 412, height: 20 },
];

window.deadlyPlatforms = [
  { x: 719, y: 449, width: 104, height: 20 },
  { x: 3740, y: 761, width: 156, height: 20 },
  { x: 5533, y: 571, width: 60, height: 20 },
  { x: 6027, y: 508, width: 71, height: 20 },
  { x: 7347, y: 392, width: 102, height: 20 },
];

window.spikes = [
  { x: 586, y: 455, size: 31 },
  { x: 617, y: 455, size: 21 },
  { x: 638, y: 455, size: 16 },
  { x: 1244, y: 611, size: 16 },
  { x: 1260, y: 611, size: 17 },
  { x: 3555, y: 766, size: 32 },
  { x: 7201, y: 395, size: 28 },
  { x: 7229, y: 395, size: 26 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2074, y: 674, reached: false },
  { x: 3976, y: 736, reached: false },
  { x: 6291, y: 478, reached: false },
  { x: 8436, y: 284, reached: false },
  { x: 10607, y: 387, reached: false },
  { x: 12108, y: 629, reached: false },
  { x: 12865, y: 644, reached: false }, // Final
];
