// Level 9 Data — "Level 9"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 9";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 481, y: 360, width: 57, height: 21, ghost: true, ghostPeriod: 176, ghostOnRatio: 0.5739130434782609 },
  { x: 719, y: 342, width: 230, height: 23, melt: true, meltDelay: 27 },
  { x: 1143, y: 358, width: 60, height: 20 },
  { x: 1400, y: 383, width: 65, height: 23, moveAxis: "x", moveRange: 63, moveSpeed: 0.026, movePhase: 0.31 },
  { x: 1629, y: 383, width: 325, height: 15 },
  { x: 2156, y: 431, width: 214, height: 22, ghost: true, ghostPeriod: 176, ghostOnRatio: 0.5739130434782609 },
  { x: 2572, y: 472, width: 49, height: 25, ghost: true, ghostPeriod: 176, ghostOnRatio: 0.5739130434782609 },
  { x: 2823, y: 520, width: 137, height: 17, ghost: true, ghostPeriod: 176, ghostOnRatio: 0.5739130434782609 },
  { x: 3124, y: 520, width: 281, height: 28 },
  { x: 3599, y: 543, width: 62, height: 25 },
  { x: 3863, y: 581, width: 173, height: 20, ghost: true, ghostPeriod: 176, ghostOnRatio: 0.5739130434782609 },
  { x: 4222, y: 576, width: 184, height: 26, ghost: true, ghostPeriod: 176, ghostOnRatio: 0.5739130434782609 },
  { x: 4570, y: 576, width: 340, height: 30 },
  { x: 5276, y: 545, width: 140, height: 14 },
  { x: 5585, y: 493, width: 189, height: 27 },
  { x: 5939, y: 438, width: 82, height: 16 },
  { x: 6190, y: 393, width: 117, height: 25 },
  { x: 6471, y: 393, width: 281, height: 22 },
  { x: 7107, y: 337, width: 174, height: 27 },
  { x: 7639, y: 288, width: 113, height: 14 },
  { x: 8115, y: 250, width: 183, height: 17 },
  { x: 8460, y: 255, width: 421, height: 20 },
];

window.deadlyPlatforms = [
  { x: 1236, y: 357, width: 60, height: 20 },
  { x: 5808, y: 495, width: 114, height: 20 },
  { x: 7307, y: 333, width: 144, height: 20 },
  { x: 7772, y: 295, width: 99, height: 20 },
  { x: 8325, y: 246, width: 126, height: 20 },
];

window.spikes = [
  { x: 1163, y: 358, size: 33 },
  { x: 3616, y: 543, size: 13 },
  { x: 3629, y: 543, size: 17 },
  { x: 5301, y: 545, size: 16 },
  { x: 5317, y: 545, size: 30 },
  { x: 5626, y: 493, size: 32 },
  { x: 5658, y: 493, size: 30 },
  { x: 5688, y: 493, size: 29 },
  { x: 6206, y: 393, size: 21 },
  { x: 7672, y: 288, size: 17 },
  { x: 7689, y: 288, size: 25 },
  { x: 7714, y: 288, size: 20 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1792, y: 353, reached: false },
  { x: 3265, y: 490, reached: false },
  { x: 4740, y: 546, reached: false },
  { x: 6612, y: 363, reached: false },
  { x: 8671, y: 225, reached: false }, // Final
];
