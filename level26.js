// Level 26 Data — "Comet's Wake"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 26";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 495, y: 331, width: 209, height: 18 },
  { x: 884, y: 257, width: 190, height: 20 },
  { x: 1245, y: 169, width: 76, height: 18 },
  { x: 1714, y: 81, width: 227, height: 28 },
  { x: 2105, y: 81, width: 327, height: 19 },
  { x: 2840, y: 18, width: 208, height: 21 },
  { x: 3256, y: -3, width: 182, height: 28, conveyor: true, conveyorSpeed: -1.08 },
  { x: 3651, y: -8, width: 85, height: 16, ghost: true, ghostPeriod: 132, ghostOnRatio: 0.4375 },
  { x: 3962, y: 23, width: 121, height: 22, ghost: true, ghostPeriod: 132, ghostOnRatio: 0.4375 },
  { x: 4247, y: 23, width: 286, height: 22 },
  { x: 4768, y: 78, width: 193, height: 14, conveyor: true, conveyorSpeed: 2.04 },
  { x: 5196, y: 141, width: 164, height: 20, melt: true, meltDelay: 21 },
  { x: 5601, y: 226, width: 71, height: 30, ghost: true, ghostPeriod: 132, ghostOnRatio: 0.4375 },
  { x: 5913, y: 303, width: 60, height: 15, ghost: true, ghostPeriod: 132, ghostOnRatio: 0.4375 },
  { x: 6137, y: 303, width: 398, height: 20 },
  { x: 6776, y: 370, width: 105, height: 27, ghost: true, ghostPeriod: 132, ghostOnRatio: 0.4375 },
  { x: 7103, y: 392, width: 50, height: 17, moveAxis: "x", moveRange: 74, moveSpeed: 0.039, movePhase: 3.82 },
  { x: 7370, y: 394, width: 45, height: 22, moveAxis: "y", moveRange: 93, moveSpeed: 0.039, movePhase: 5.26 },
  { x: 7836, y: 369, width: 188, height: 24, conveyor: true, conveyorSpeed: 1.55 },
  { x: 8188, y: 369, width: 284, height: 26 },
  { x: 8880, y: 305, width: 209, height: 17 },
  { x: 9497, y: 242, width: 167, height: 29 },
  { x: 9835, y: 152, width: 124, height: 22 },
  { x: 10123, y: 152, width: 255, height: 22 },
  { x: 10777, y: 69, width: 87, height: 16 },
  { x: 11281, y: 24, width: 84, height: 24, moveAxis: "x", moveRange: 66, moveSpeed: 0.035, movePhase: 1.45 },
  { x: 11563, y: -13, width: 141, height: 21, bounce: true, bounceStrength: -16 },
  { x: 11892, y: -7, width: 417, height: 20 },
];

window.deadlyPlatforms = [
  { x: 7021, y: 444, width: 50, height: 18, moveAxis: "y", moveRange: 71, moveSpeed: 0.04, movePhase: 1.13 },
  { x: 734, y: 323, width: 172, height: 20 },
  { x: 1350, y: 175, width: 60, height: 20 },
  { x: 3068, y: 18, width: 112, height: 20 },
  { x: 9112, y: 302, width: 177, height: 20 },
  { x: 10899, y: 73, width: 60, height: 20 },
];

window.spikes = [
  { x: 534, y: 331, size: 21 },
  { x: 910, y: 257, size: 20 },
  { x: 930, y: 257, size: 36 },
  { x: 966, y: 257, size: 42 },
  { x: 1008, y: 257, size: 24 },
  { x: 1256, y: 169, size: 22 },
  { x: 1278, y: 169, size: 25 },
  { x: 1756, y: 81, size: 36 },
  { x: 2914, y: 18, size: 38 },
  { x: 10795, y: 69, size: 29 },
  { x: 10824, y: 69, size: 29 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2269, y: 51, reached: false },
  { x: 4390, y: -7, reached: false },
  { x: 6336, y: 273, reached: false },
  { x: 8330, y: 339, reached: false },
  { x: 10251, y: 122, reached: false },
  { x: 12101, y: -37, reached: false }, // Final
];
