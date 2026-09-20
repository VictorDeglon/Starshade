// Level 29 Data — "Ashen Causeway"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 29";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 537, y: 433, width: 115, height: 18, ghost: true, ghostPeriod: 130, ghostOnRatio: 0.4298469387755102 },
  { x: 895, y: 513, width: 145, height: 22 },
  { x: 1283, y: 596, width: 57, height: 18, ghost: true, ghostPeriod: 130, ghostOnRatio: 0.4298469387755102 },
  { x: 1583, y: 693, width: 132, height: 24, ghost: true, ghostPeriod: 130, ghostOnRatio: 0.4298469387755102 },
  { x: 1879, y: 693, width: 372, height: 24 },
  { x: 2488, y: 745, width: 119, height: 25 },
  { x: 2835, y: 776, width: 206, height: 26, melt: true, meltDelay: 21 },
  { x: 3259, y: 782, width: 145, height: 14, bounce: true, bounceStrength: -19 },
  { x: 3568, y: 782, width: 367, height: 28 },
  { x: 4355, y: 743, width: 74, height: 20 },
  { x: 4834, y: 676, width: 132, height: 14, conveyor: true, conveyorSpeed: 2.06 },
  { x: 5143, y: 591, width: 78, height: 25 },
  { x: 5385, y: 591, width: 327, height: 15 },
  { x: 6114, y: 513, width: 177, height: 21 },
  { x: 6687, y: 425, width: 92, height: 21 },
  { x: 6966, y: 357, width: 77, height: 15 },
  { x: 7239, y: 313, width: 230, height: 15, melt: true, meltDelay: 21 },
  { x: 7633, y: 313, width: 334, height: 26 },
  { x: 8185, y: 315, width: 107, height: 14 },
  { x: 8525, y: 358, width: 124, height: 24, melt: true, meltDelay: 21 },
  { x: 8886, y: 412, width: 65, height: 20, ghost: true, ghostPeriod: 130, ghostOnRatio: 0.4298469387755102 },
  { x: 9115, y: 412, width: 331, height: 15 },
  { x: 9689, y: 500, width: 100, height: 21, ghost: true, ghostPeriod: 130, ghostOnRatio: 0.4298469387755102 },
  { x: 10032, y: 580, width: 170, height: 29, ghost: true, ghostPeriod: 130, ghostOnRatio: 0.4298469387755102 },
  { x: 10445, y: 667, width: 110, height: 25, moveAxis: "x", moveRange: 104, moveSpeed: 0.052, movePhase: 0.94 },
  { x: 10798, y: 747, width: 167, height: 21 },
  { x: 11129, y: 747, width: 289, height: 17 },
  { x: 11608, y: 734, width: 398, height: 20 },
];

window.deadlyPlatforms = [
  { x: 10365, y: 707, width: 97, height: 15, moveAxis: "y", moveRange: 104, moveSpeed: 0.059, movePhase: 1.64 },
  { x: 2629, y: 748, width: 90, height: 20 },
  { x: 5254, y: 582, width: 62, height: 20 },
  { x: 6328, y: 521, width: 108, height: 20 },
  { x: 6811, y: 420, width: 80, height: 20 },
  { x: 7075, y: 349, width: 60, height: 20 },
  { x: 11004, y: 749, width: 134, height: 20 },
];

window.spikes = [
  { x: 912, y: 513, size: 44 },
  { x: 4368, y: 743, size: 12 },
  { x: 6147, y: 513, size: 28 },
  { x: 6175, y: 513, size: 40 },
  { x: 6706, y: 425, size: 35 },
  { x: 10843, y: 747, size: 47 },
  { x: 10890, y: 747, size: 40 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2065, y: 663, reached: false },
  { x: 3752, y: 752, reached: false },
  { x: 5549, y: 561, reached: false },
  { x: 7800, y: 283, reached: false },
  { x: 9281, y: 382, reached: false },
  { x: 11274, y: 717, reached: false },
  { x: 11807, y: 704, reached: false }, // Final
];
