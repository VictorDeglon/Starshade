// Level 62 Data — "Ashfall Perimeter"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 62";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 552, y: 466, width: 59, height: 22, conveyor: true, conveyorSpeed: 2.04 },
  { x: 854, y: 511, width: 185, height: 15, moveAxis: "y", moveRange: 74, moveSpeed: 0.058, movePhase: 4.45 },
  { x: 1272, y: 531, width: 224, height: 29, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 1660, y: 531, width: 309, height: 27 },
  { x: 2173, y: 486, width: 54, height: 22, melt: true, meltDelay: 20 },
  { x: 2644, y: 405, width: 166, height: 24 },
  { x: 2994, y: 320, width: 58, height: 21 },
  { x: 3459, y: 218, width: 176, height: 23, bounce: true, bounceStrength: -19 },
  { x: 3799, y: 218, width: 192, height: 18 },
  { x: 4166, y: 123, width: 48, height: 22, bounce: true, bounceStrength: -18 },
  { x: 4402, y: 48, width: 71, height: 17 },
  { x: 4671, y: -7, width: 129, height: 24 },
  { x: 5017, y: -22, width: 145, height: 29, melt: true, meltDelay: 20 },
  { x: 5326, y: -22, width: 277, height: 23 },
  { x: 5840, y: 8, width: 181, height: 21, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 6267, y: 71, width: 198, height: 25, melt: true, meltDelay: 20 },
  { x: 6717, y: 164, width: 165, height: 22, bounce: true, bounceStrength: -19 },
  { x: 6882, y: 164, width: 279, height: 20 },
  { x: 7365, y: 141, width: 91, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.3565306122448979 },
  { x: 7651, y: 123, width: 247, height: 20 },
  { x: 8150, y: 224, width: 101, height: 25, moveAxis: "y", moveRange: 110, moveSpeed: 0.049, movePhase: 4.53 },
  { x: 8503, y: 311, width: 166, height: 30, moveAxis: "x", moveRange: 91, moveSpeed: 0.04, movePhase: 1.71 },
  { x: 8921, y: 399, width: 221, height: 27, melt: true, meltDelay: 20 },
  { x: 9142, y: 399, width: 270, height: 20 },
  { x: 9619, y: 389, width: 95, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.3565306122448979 },
  { x: 9904, y: 370, width: 269, height: 20 },
  { x: 10406, y: 387, width: 130, height: 28, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 10763, y: 388, width: 63, height: 16 },
  { x: 11039, y: 363, width: 96, height: 17, moveAxis: "x", moveRange: 79, moveSpeed: 0.052, movePhase: 2.44 },
  { x: 11299, y: 363, width: 290, height: 25 },
  { x: 12006, y: 278, width: 83, height: 20, bounce: true, bounceStrength: -17 },
  { x: 12500, y: 187, width: 132, height: 26, melt: true, meltDelay: 20 },
  { x: 12807, y: 89, width: 220, height: 26, conveyor: true, conveyorSpeed: -1.38 },
  { x: 13434, y: -11, width: 142, height: 20, melt: true, meltDelay: 20 },
  { x: 13776, y: -14, width: 380, height: 20 },
];

window.deadlyPlatforms = [
  { x: 766, y: 471, width: 139, height: 24, moveAxis: "x", moveRange: 83, moveSpeed: 0.063, movePhase: 5.11 },
  { x: 8097, y: 181, width: 65, height: 17, moveAxis: "x", moveRange: 135, moveSpeed: 0.057, movePhase: 2.73 },
  { x: 10976, y: 398, width: 57, height: 24, moveAxis: "y", moveRange: 94, moveSpeed: 0.059, movePhase: 2.26 },
  { x: 2838, y: 414, width: 84, height: 20 },
  { x: 4503, y: 39, width: 60, height: 20 },
  { x: 4836, y: 3, width: 76, height: 20 },
  { x: 10846, y: 391, width: 60, height: 20 },
];

window.spikes = [
  { x: 2675, y: 405, size: 34 },
  { x: 2709, y: 405, size: 48 },
  { x: 2757, y: 405, size: 38 },
  { x: 3008, y: 320, size: 28 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1815, y: 501, reached: false },
  { x: 3895, y: 188, reached: false },
  { x: 5465, y: -52, reached: false },
  { x: 7711, y: 93, reached: false },
  { x: 9964, y: 340, reached: false },
  { x: 11444, y: 333, reached: false },
  { x: 13966, y: -44, reached: false }, // Final
];
