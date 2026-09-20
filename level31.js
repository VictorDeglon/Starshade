// Level 31 Data — "The Silent Reach"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 31";
window.levelAccent = "#ff9838";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 529, y: 408, width: 54, height: 25, moveAxis: "x", moveRange: 92, moveSpeed: 0.048, movePhase: 3.03 },
  { x: 803, y: 415, width: 72, height: 15, bounce: true, bounceStrength: -19 },
  { x: 1307, y: 394, width: 100, height: 24 },
  { x: 1608, y: 356, width: 70, height: 29 },
  { x: 1842, y: 356, width: 313, height: 29 },
  { x: 2337, y: 285, width: 83, height: 18, moveAxis: "x", moveRange: 91, moveSpeed: 0.05, movePhase: 2.2 },
  { x: 2827, y: 210, width: 46, height: 15, melt: true, meltDelay: 21 },
  { x: 3051, y: 131, width: 104, height: 21 },
  { x: 3319, y: 131, width: 339, height: 29 },
  { x: 3855, y: 80, width: 96, height: 17, moveAxis: "x", moveRange: 95, moveSpeed: 0.053, movePhase: 5.34 },
  { x: 4157, y: 48, width: 222, height: 19 },
  { x: 4595, y: 39, width: 161, height: 28, bounce: true, bounceStrength: -17 },
  { x: 4920, y: 39, width: 274, height: 24 },
  { x: 5423, y: 67, width: 126, height: 29, ghost: true, ghostPeriod: 128, ghostOnRatio: 0.4247448979591837 },
  { x: 5793, y: 143, width: 72, height: 15, moveAxis: "x", moveRange: 107, moveSpeed: 0.047, movePhase: 3.15 },
  { x: 6109, y: 230, width: 189, height: 25, melt: true, meltDelay: 21 },
  { x: 6462, y: 230, width: 379, height: 18 },
  { x: 7085, y: 318, width: 191, height: 26, melt: true, meltDelay: 21 },
  { x: 7520, y: 388, width: 45, height: 18, ghost: true, ghostPeriod: 128, ghostOnRatio: 0.4247448979591837 },
  { x: 7809, y: 454, width: 154, height: 16, melt: true, meltDelay: 21 },
  { x: 8127, y: 454, width: 279, height: 16 },
  { x: 8626, y: 458, width: 120, height: 28 },
  { x: 9178, y: 446, width: 181, height: 18 },
  { x: 9776, y: 395, width: 121, height: 14 },
  { x: 10061, y: 395, width: 292, height: 22 },
  { x: 10751, y: 305, width: 58, height: 24 },
  { x: 10991, y: 230, width: 60, height: 24, bounce: true, bounceStrength: -17 },
  { x: 11232, y: 241, width: 396, height: 20 },
];

window.deadlyPlatforms = [
  { x: 2410, y: 319, width: 52, height: 17, moveAxis: "y", moveRange: 99, moveSpeed: 0.049, movePhase: 2.5 },
  { x: 3925, y: 109, width: 55, height: 16, moveAxis: "y", moveRange: 104, moveSpeed: 0.046, movePhase: 5.2 },
  { x: 1716, y: 350, width: 63, height: 20 },
  { x: 3192, y: 134, width: 77, height: 20 },
  { x: 4417, y: 44, width: 130, height: 20 },
  { x: 9931, y: 399, width: 79, height: 20 },
  { x: 10841, y: 297, width: 60, height: 20 },
];

window.spikes = [
  { x: 1322, y: 394, size: 16 },
  { x: 1632, y: 356, size: 17 },
  { x: 3084, y: 131, size: 17 },
  { x: 9203, y: 446, size: 35 },
  { x: 10765, y: 305, size: 32 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1999, y: 326, reached: false },
  { x: 3489, y: 101, reached: false },
  { x: 5057, y: 9, reached: false },
  { x: 6652, y: 200, reached: false },
  { x: 8267, y: 424, reached: false },
  { x: 10207, y: 365, reached: false },
  { x: 11430, y: 211, reached: false }, // Final
];
