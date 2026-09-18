// Level 16 Data — "The Hollow Spiral"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 16";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 486, y: 407, width: 135, height: 31 },
  { x: 765, y: 438, width: 195, height: 31, melt: true, meltDelay: 24 },
  { x: 1136, y: 484, width: 229, height: 19, moveAxis: "x", moveRange: 81, moveSpeed: 0.041, movePhase: 1.68 },
  { x: 1569, y: 484, width: 275, height: 18 },
  { x: 2010, y: 552, width: 78, height: 16 },
  { x: 2253, y: 609, width: 131, height: 22, ghost: true, ghostPeriod: 151, ghostOnRatio: 0.49782608695652175 },
  { x: 2572, y: 675, width: 178, height: 45 },
  { x: 2750, y: 675, width: 255, height: 20 },
  { x: 3207, y: 656, width: 108, height: 20, ghost: true, ghostPeriod: 147, ghostOnRatio: 0.47826086956521735 },
  { x: 3489, y: 639, width: 245, height: 20 },
  { x: 3907, y: 667, width: 139, height: 36 },
  { x: 4189, y: 663, width: 72, height: 36 },
  { x: 4545, y: 648, width: 206, height: 37 },
  { x: 4899, y: 611, width: 108, height: 44, moveAxis: "x", moveRange: 100, moveSpeed: 0.045, movePhase: 4.25 },
  { x: 5161, y: 611, width: 200, height: 24 },
  { x: 5502, y: 546, width: 76, height: 32 },
  { x: 5871, y: 480, width: 116, height: 14, melt: true, meltDelay: 24 },
  { x: 6247, y: 403, width: 129, height: 14 },
  { x: 6547, y: 403, width: 330, height: 21 },
  { x: 7061, y: 349, width: 56, height: 37, ghost: true, ghostPeriod: 151, ghostOnRatio: 0.49782608695652175 },
  { x: 7258, y: 323, width: 184, height: 17 },
  { x: 7729, y: 305, width: 125, height: 28, melt: true, meltDelay: 24 },
  { x: 8009, y: 326, width: 140, height: 38 },
  { x: 8344, y: 326, width: 355, height: 27 },
  { x: 8879, y: 393, width: 80, height: 43, moveAxis: "x", moveRange: 63, moveSpeed: 0.033, movePhase: 0.96 },
  { x: 9114, y: 473, width: 232, height: 25, moveAxis: "y", moveRange: 76, moveSpeed: 0.038, movePhase: 2.96 },
  { x: 9530, y: 471, width: 430, height: 20 },
];

window.deadlyPlatforms = [
  { x: 2782, y: 675, width: 141, height: 20 },
  { x: 4288, y: 662, width: 60, height: 20 },
  { x: 5612, y: 548, width: 60, height: 20 },
  { x: 6397, y: 405, width: 84, height: 20 },
  { x: 7470, y: 324, width: 138, height: 20 },
  { x: 8180, y: 335, width: 100, height: 20 },
];

window.spikes = [
  { x: 2021, y: 552, size: 12 },
  { x: 2627, y: 675, size: 37 },
  { x: 2664, y: 675, size: 17 },
  { x: 2681, y: 675, size: 33 },
  { x: 3943, y: 667, size: 23 },
  { x: 4208, y: 663, size: 38 },
  { x: 4603, y: 648, size: 35 },
  { x: 8050, y: 326, size: 42 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1707, y: 454, reached: false },
  { x: 3549, y: 609, reached: false },
  { x: 5261, y: 581, reached: false },
  { x: 6712, y: 373, reached: false },
  { x: 8522, y: 296, reached: false },
  { x: 9745, y: 441, reached: false }, // Final
];
