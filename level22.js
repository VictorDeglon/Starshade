// Level 22 Data — "The Last Bastion"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 22";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 434, y: 392, width: 118, height: 20 },
  { x: 717, y: 420, width: 170, height: 20, ghost: true, ghostPeriod: 140, ghostOnRatio: 0.4625 },
  { x: 1093, y: 477, width: 78, height: 20, melt: true, meltDelay: 22 },
  { x: 1336, y: 535, width: 136, height: 20 },
  { x: 1682, y: 535, width: 273, height: 20 },
  { x: 2094, y: 600, width: 91, height: 20, ghost: true, ghostPeriod: 140, ghostOnRatio: 0.4625 },
  { x: 2352, y: 689, width: 175, height: 20 },
  { x: 2670, y: 763, width: 112, height: 20 },
  { x: 2782, y: 763, width: 264, height: 20 },
  { x: 3240, y: 752, width: 106, height: 20, ghost: true, ghostPeriod: 137, ghostOnRatio: 0.44999999999999996 },
  { x: 3525, y: 732, width: 246, height: 20 },
  { x: 3988, y: 771, width: 108, height: 20, melt: true, meltDelay: 22 },
  { x: 4228, y: 771, width: 82, height: 20 },
  { x: 4631, y: 759, width: 177, height: 20 },
  { x: 4979, y: 721, width: 167, height: 20, melt: true, meltDelay: 22 },
  { x: 5323, y: 721, width: 225, height: 20 },
  { x: 5718, y: 658, width: 174, height: 20 },
  { x: 6032, y: 595, width: 138, height: 20 },
  { x: 6352, y: 522, width: 141, height: 20 },
  { x: 6781, y: 468, width: 117, height: 20, moveAxis: "x", moveRange: 80, moveSpeed: 0.028, movePhase: 6.06 },
  { x: 7068, y: 468, width: 277, height: 20 },
  { x: 7623, y: 456, width: 165, height: 20 },
  { x: 8079, y: 442, width: 131, height: 20 },
  { x: 8347, y: 457, width: 163, height: 20 },
  { x: 8707, y: 464, width: 428, height: 20 },
];

window.deadlyPlatforms = [
  { x: 586, y: 383, width: 85, height: 20 },
  { x: 2550, y: 680, width: 120, height: 20 },
  { x: 4843, y: 763, width: 139, height: 20 },
  { x: 5925, y: 667, width: 120, height: 20 },
  { x: 6519, y: 530, width: 119, height: 20 },
];

window.spikes = [
  { x: 1377, y: 535, size: 24 },
  { x: 2429, y: 689, size: 26 },
  { x: 2737, y: 763, size: 21 },
  { x: 4264, y: 771, size: 19 },
  { x: 7691, y: 456, size: 29 },
  { x: 8108, y: 442, size: 23 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1819, y: 505, reached: false },
  { x: 3585, y: 702, reached: false },
  { x: 5436, y: 691, reached: false },
  { x: 7207, y: 438, reached: false },
  { x: 8921, y: 434, reached: false }, // Final
];
