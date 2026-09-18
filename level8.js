// Level 8 Data — "Level 8"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 8";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 467, y: 334, width: 144, height: 14, moveAxis: "x", moveRange: 68, moveSpeed: 0.031, movePhase: 4.08 },
  { x: 782, y: 299, width: 90, height: 13 },
  { x: 1043, y: 257, width: 91, height: 14 },
  { x: 1305, y: 220, width: 100, height: 35, melt: true, meltDelay: 27 },
  { x: 1569, y: 220, width: 239, height: 23 },
  { x: 1995, y: 227, width: 59, height: 29 },
  { x: 2249, y: 258, width: 116, height: 44 },
  { x: 2560, y: 283, width: 175, height: 37 },
  { x: 2899, y: 283, width: 388, height: 16 },
  { x: 3486, y: 324, width: 99, height: 21, moveAxis: "y", moveRange: 49, moveSpeed: 0.029, movePhase: 0.54 },
  { x: 3784, y: 370, width: 130, height: 34, ghost: true, ghostPeriod: 179, ghostOnRatio: 0.5847826086956522 },
  { x: 4117, y: 428, width: 192, height: 24, melt: true, meltDelay: 27 },
  { x: 4508, y: 472, width: 51, height: 17, ghost: true, ghostPeriod: 179, ghostOnRatio: 0.5847826086956522 },
  { x: 4723, y: 472, width: 392, height: 34 },
  { x: 5306, y: 496, width: 46, height: 27, melt: true, meltDelay: 27 },
  { x: 5539, y: 496, width: 137, height: 20 },
  { x: 5855, y: 479, width: 97, height: 13 },
  { x: 6127, y: 452, width: 223, height: 28 },
  { x: 6514, y: 452, width: 192, height: 44 },
  { x: 6873, y: 408, width: 189, height: 13, melt: true, meltDelay: 27 },
  { x: 7421, y: 369, width: 150, height: 38 },
  { x: 7747, y: 367, width: 429, height: 20 },
];

window.deadlyPlatforms = [
  { x: 2400, y: 267, width: 67, height: 20 },
  { x: 2764, y: 280, width: 103, height: 20 },
];

window.spikes = [
  { x: 2005, y: 227, size: 21 },
  { x: 2268, y: 258, size: 32 },
  { x: 2597, y: 283, size: 22 },
  { x: 5583, y: 496, size: 31 },
  { x: 5879, y: 479, size: 18 },
  { x: 5897, y: 479, size: 28 },
  { x: 7473, y: 369, size: 29 },
  { x: 7502, y: 369, size: 25 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1689, y: 190, reached: false },
  { x: 3093, y: 253, reached: false },
  { x: 4919, y: 442, reached: false },
  { x: 6610, y: 422, reached: false },
  { x: 7962, y: 337, reached: false }, // Final
];
