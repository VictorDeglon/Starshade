// Level 48 Data — "The Withering Span"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 48";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 552, y: 465, width: 106, height: 28, melt: true, meltDelay: 20 },
  { x: 910, y: 547, width: 183, height: 26, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 1345, y: 643, width: 159, height: 17, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 1668, y: 643, width: 356, height: 17 },
  { x: 2276, y: 730, width: 46, height: 15 },
  { x: 2568, y: 788, width: 129, height: 30, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 2934, y: 820, width: 127, height: 22, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 3061, y: 820, width: 287, height: 20 },
  { x: 3548, y: 796, width: 103, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.3851020408163265 },
  { x: 3840, y: 775, width: 223, height: 20 },
  { x: 4509, y: 752, width: 90, height: 19 },
  { x: 5036, y: 715, width: 220, height: 24 },
  { x: 5454, y: 658, width: 73, height: 18, conveyor: true, conveyorSpeed: 1.7 },
  { x: 5944, y: 578, width: 54, height: 24 },
  { x: 6162, y: 578, width: 264, height: 16 },
  { x: 6837, y: 490, width: 227, height: 18, bounce: true, bounceStrength: -18 },
  { x: 7242, y: 404, width: 131, height: 23 },
  { x: 7804, y: 357, width: 107, height: 16, melt: true, meltDelay: 20 },
  { x: 8124, y: 331, width: 172, height: 28, bounce: true, bounceStrength: -19 },
  { x: 8460, y: 331, width: 220, height: 25 },
  { x: 8913, y: 343, width: 86, height: 29 },
  { x: 9245, y: 398, width: 192, height: 17 },
  { x: 9689, y: 468, width: 116, height: 16, moveAxis: "x", moveRange: 116, moveSpeed: 0.049, movePhase: 6.12 },
  { x: 9969, y: 468, width: 312, height: 16 },
  { x: 10533, y: 573, width: 159, height: 19, bounce: true, bounceStrength: -18 },
  { x: 10944, y: 672, width: 231, height: 17 },
  { x: 11427, y: 748, width: 205, height: 17, moveAxis: "y", moveRange: 118, moveSpeed: 0.039, movePhase: 0.71 },
  { x: 11796, y: 748, width: 297, height: 20 },
  { x: 12330, y: 780, width: 179, height: 16, melt: true, meltDelay: 20 },
  { x: 12736, y: 789, width: 139, height: 30, moveAxis: "x", moveRange: 112, moveSpeed: 0.057, movePhase: 0.43 },
  { x: 13315, y: 763, width: 158, height: 17 },
  { x: 13626, y: 755, width: 385, height: 20 },
];

window.deadlyPlatforms = [
  { x: 11371, y: 694, width: 142, height: 24, moveAxis: "x", moveRange: 107, moveSpeed: 0.04, movePhase: 3.83 },
  { x: 12656, y: 742, width: 89, height: 14, moveAxis: "y", moveRange: 125, moveSpeed: 0.06, movePhase: 3.05 },
  { x: 2355, y: 735, width: 60, height: 20 },
  { x: 4619, y: 758, width: 64, height: 20 },
  { x: 6026, y: 573, width: 60, height: 20 },
  { x: 7401, y: 414, width: 113, height: 20 },
  { x: 9020, y: 338, width: 71, height: 20 },
  { x: 9468, y: 406, width: 98, height: 20 },
  { x: 13501, y: 755, width: 134, height: 20 },
];

window.spikes = [
  { x: 2291, y: 730, size: 12 },
  { x: 4537, y: 752, size: 31 },
  { x: 5068, y: 715, size: 55 },
  { x: 5123, y: 715, size: 50 },
  { x: 5173, y: 715, size: 47 },
  { x: 7270, y: 404, size: 31 },
  { x: 7301, y: 404, size: 45 },
  { x: 8934, y: 343, size: 47 },
  { x: 9297, y: 398, size: 15 },
  { x: 11009, y: 672, size: 15 },
  { x: 13342, y: 763, size: 27 },
  { x: 13369, y: 763, size: 47 },
  { x: 13416, y: 763, size: 37 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1846, y: 613, reached: false },
  { x: 3900, y: 745, reached: false },
  { x: 6294, y: 548, reached: false },
  { x: 8570, y: 301, reached: false },
  { x: 10125, y: 438, reached: false },
  { x: 11945, y: 718, reached: false },
  { x: 13819, y: 725, reached: false }, // Final
];
