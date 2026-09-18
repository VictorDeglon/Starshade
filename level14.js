// Level 14 Data — "Glass Causeway"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 14";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 474, y: 324, width: 57, height: 13 },
  { x: 902, y: 251, width: 196, height: 41 },
  { x: 1474, y: 191, width: 216, height: 44 },
  { x: 1854, y: 191, width: 196, height: 19 },
  { x: 2233, y: 153, width: 86, height: 37 },
  { x: 2519, y: 157, width: 110, height: 16, moveAxis: "y", moveRange: 57, moveSpeed: 0.042, movePhase: 3.41 },
  { x: 2829, y: 161, width: 58, height: 22 },
  { x: 2887, y: 161, width: 290, height: 20 },
  { x: 3369, y: 149, width: 105, height: 20, ghost: true, ghostPeriod: 153, ghostOnRatio: 0.49565217391304345 },
  { x: 3657, y: 130, width: 253, height: 20 },
  { x: 4124, y: 178, width: 75, height: 24 },
  { x: 4421, y: 249, width: 150, height: 26 },
  { x: 4788, y: 310, width: 141, height: 20 },
  { x: 5093, y: 310, width: 224, height: 45 },
  { x: 5534, y: 368, width: 82, height: 31, melt: true, meltDelay: 25 },
  { x: 5833, y: 425, width: 158, height: 31, moveAxis: "y", moveRange: 82, moveSpeed: 0.038, movePhase: 3.73 },
  { x: 6205, y: 467, width: 192, height: 43, melt: true, meltDelay: 25 },
  { x: 6561, y: 467, width: 224, height: 43 },
  { x: 6973, y: 444, width: 187, height: 12 },
  { x: 7348, y: 414, width: 116, height: 28, moveAxis: "x", moveRange: 72, moveSpeed: 0.038, movePhase: 3.78 },
  { x: 7638, y: 358, width: 69, height: 44, moveAxis: "y", moveRange: 59, moveSpeed: 0.03, movePhase: 1.06 },
  { x: 7887, y: 314, width: 115, height: 35, melt: true, meltDelay: 25 },
  { x: 8166, y: 314, width: 389, height: 20 },
  { x: 8729, y: 259, width: 188, height: 40 },
  { x: 9293, y: 194, width: 131, height: 40 },
  { x: 9602, y: 180, width: 396, height: 20 },
];

window.deadlyPlatforms = [
  { x: 564, y: 321, width: 60, height: 20 },
  { x: 1129, y: 247, width: 148, height: 20 },
  { x: 1729, y: 197, width: 125, height: 20 },
  { x: 2348, y: 146, width: 60, height: 20 },
  { x: 2907, y: 167, width: 60, height: 20 },
  { x: 4222, y: 170, width: 60, height: 20 },
  { x: 4605, y: 242, width: 121, height: 20 },
  { x: 4959, y: 310, width: 100, height: 20 },
];

window.spikes = [
  { x: 965, y: 251, size: 37 },
  { x: 1002, y: 251, size: 38 },
  { x: 4146, y: 178, size: 33 },
  { x: 4179, y: 178, size: 13 },
  { x: 4466, y: 249, size: 37 },
  { x: 9312, y: 194, size: 25 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1952, y: 161, reached: false },
  { x: 3717, y: 100, reached: false },
  { x: 5205, y: 280, reached: false },
  { x: 6673, y: 437, reached: false },
  { x: 8361, y: 284, reached: false },
  { x: 9800, y: 150, reached: false }, // Final
];
