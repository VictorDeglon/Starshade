// Level 47 Data — "Starless Culvert"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 47";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 750, y: 372, width: 149, height: 26, moveAxis: "x", moveRange: 85, moveSpeed: 0.052, movePhase: 3.44 },
  { x: 1136, y: 398, width: 95, height: 26, conveyor: true, conveyorSpeed: -1.76 },
  { x: 1474, y: 447, width: 98, height: 28, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 1736, y: 447, width: 227, height: 23 },
  { x: 2215, y: 522, width: 47, height: 27 },
  { x: 2514, y: 604, width: 134, height: 16, moveAxis: "x", moveRange: 126, moveSpeed: 0.039, movePhase: 2.98 },
  { x: 2900, y: 684, width: 47, height: 26 },
  { x: 3199, y: 770, width: 199, height: 20 },
  { x: 3562, y: 770, width: 328, height: 20 },
  { x: 4127, y: 798, width: 103, height: 26 },
  { x: 4463, y: 820, width: 51, height: 29 },
  { x: 4727, y: 791, width: 168, height: 22, moveAxis: "y", moveRange: 107, moveSpeed: 0.057, movePhase: 2.74 },
  { x: 5059, y: 791, width: 272, height: 27 },
  { x: 5758, y: 727, width: 181, height: 25 },
  { x: 6356, y: 641, width: 115, height: 29, melt: true, meltDelay: 20 },
  { x: 6646, y: 544, width: 183, height: 30, melt: true, meltDelay: 20 },
  { x: 7246, y: 462, width: 152, height: 17 },
  { x: 7562, y: 462, width: 280, height: 20 },
  { x: 8030, y: 390, width: 89, height: 18, moveAxis: "x", moveRange: 124, moveSpeed: 0.041, movePhase: 3.41 },
  { x: 8559, y: 361, width: 190, height: 15, melt: true, meltDelay: 20 },
  { x: 9195, y: 342, width: 45, height: 21, moveAxis: "y", moveRange: 120, moveSpeed: 0.055, movePhase: 0.82 },
  { x: 9404, y: 342, width: 395, height: 15 },
  { x: 10045, y: 397, width: 141, height: 17, moveAxis: "x", moveRange: 83, moveSpeed: 0.052, movePhase: 4.05 },
  { x: 10432, y: 449, width: 224, height: 30, moveAxis: "x", moveRange: 86, moveSpeed: 0.047, movePhase: 4.13 },
  { x: 10908, y: 523, width: 189, height: 23 },
  { x: 11349, y: 617, width: 72, height: 30 },
  { x: 11585, y: 617, width: 192, height: 24 },
  { x: 12029, y: 702, width: 90, height: 15, moveAxis: "x", moveRange: 122, moveSpeed: 0.045, movePhase: 0.11 },
  { x: 12371, y: 772, width: 79, height: 22, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 12628, y: 763, width: 391, height: 20 },
];

window.deadlyPlatforms = [
  { x: 9236, y: 290, width: 50, height: 23, moveAxis: "x", moveRange: 113, moveSpeed: 0.058, movePhase: 0.21 },
  { x: 9998, y: 363, width: 111, height: 25, moveAxis: "y", moveRange: 85, moveSpeed: 0.061, movePhase: 1.15 },
  { x: 11984, y: 647, width: 52, height: 18, moveAxis: "y", moveRange: 119, moveSpeed: 0.042, movePhase: 1.27 },
  { x: 2981, y: 691, width: 60, height: 20 },
  { x: 3431, y: 769, width: 108, height: 20 },
  { x: 4258, y: 797, width: 75, height: 20 },
  { x: 5974, y: 737, width: 131, height: 20 },
  { x: 7423, y: 464, width: 134, height: 20 },
  { x: 11119, y: 525, width: 156, height: 20 },
  { x: 11446, y: 621, width: 60, height: 20 },
];

window.spikes = [
  { x: 3256, y: 770, size: 33 },
  { x: 4141, y: 798, size: 51 },
  { x: 4474, y: 820, size: 32 },
  { x: 5817, y: 727, size: 36 },
  { x: 5853, y: 727, size: 28 },
  { x: 7288, y: 462, size: 51 },
  { x: 7339, y: 462, size: 15 },
  { x: 7354, y: 462, size: 23 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1850, y: 417, reached: false },
  { x: 3726, y: 740, reached: false },
  { x: 5195, y: 761, reached: false },
  { x: 7702, y: 432, reached: false },
  { x: 9602, y: 312, reached: false },
  { x: 11681, y: 587, reached: false },
  { x: 12824, y: 733, reached: false }, // Final
];
