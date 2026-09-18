// Level 9 Data — "Level 9"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 9";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 435, y: 360, width: 123, height: 23, melt: true, meltDelay: 27 },
  { x: 739, y: 359, width: 69, height: 23, ghost: true, ghostPeriod: 176, ghostOnRatio: 0.5739130434782609 },
  { x: 998, y: 383, width: 151, height: 12 },
  { x: 1334, y: 383, width: 189, height: 34 },
  { x: 1713, y: 426, width: 214, height: 28 },
  { x: 2059, y: 462, width: 178, height: 44 },
  { x: 2384, y: 526, width: 84, height: 12, ghost: true, ghostPeriod: 176, ghostOnRatio: 0.5739130434782609 },
  { x: 2622, y: 526, width: 396, height: 28 },
  { x: 3150, y: 569, width: 164, height: 35 },
  { x: 3532, y: 622, width: 184, height: 37, moveAxis: "y", moveRange: 80, moveSpeed: 0.028, movePhase: 4.14 },
  { x: 3911, y: 643, width: 225, height: 44, moveAxis: "x", moveRange: 55, moveSpeed: 0.03, movePhase: 4.18 },
  { x: 4269, y: 660, width: 217, height: 42, ghost: true, ghostPeriod: 176, ghostOnRatio: 0.5739130434782609 },
  { x: 4632, y: 660, width: 326, height: 43 },
  { x: 5103, y: 645, width: 143, height: 25 },
  { x: 5563, y: 613, width: 132, height: 28 },
  { x: 6002, y: 556, width: 201, height: 31 },
  { x: 6334, y: 516, width: 85, height: 44, ghost: true, ghostPeriod: 176, ghostOnRatio: 0.5739130434782609 },
  { x: 6611, y: 516, width: 226, height: 23 },
  { x: 7127, y: 480, width: 177, height: 29, moveAxis: "x", moveRange: 56, moveSpeed: 0.023, movePhase: 3.51 },
  { x: 7450, y: 447, width: 54, height: 29, moveAxis: "y", moveRange: 73, moveSpeed: 0.024, movePhase: 4.63 },
  { x: 7795, y: 435, width: 53, height: 37 },
  { x: 8015, y: 442, width: 392, height: 20 },
];

window.deadlyPlatforms = [
  { x: 1953, y: 422, width: 178, height: 20 },
  { x: 2257, y: 469, width: 156, height: 20 },
  { x: 3341, y: 565, width: 113, height: 20 },
  { x: 5274, y: 643, width: 114, height: 20 },
];

window.spikes = [
  { x: 1037, y: 383, size: 22 },
  { x: 1761, y: 426, size: 32 },
  { x: 2111, y: 462, size: 17 },
  { x: 2128, y: 462, size: 25 },
  { x: 2153, y: 462, size: 20 },
  { x: 2173, y: 462, size: 33 },
  { x: 5582, y: 613, size: 13 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1429, y: 353, reached: false },
  { x: 2820, y: 496, reached: false },
  { x: 4795, y: 630, reached: false },
  { x: 6724, y: 486, reached: false },
  { x: 8211, y: 412, reached: false }, // Final
];
