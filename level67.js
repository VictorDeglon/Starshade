// Level 67 Data — "Starbound Furrow"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 67";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 552, y: 470, width: 200, height: 15, conveyor: true, conveyorSpeed: -1.05 },
  { x: 1004, y: 585, width: 61, height: 19, melt: true, meltDelay: 20 },
  { x: 1317, y: 692, width: 58, height: 15, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 1627, y: 801, width: 173, height: 17, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 1964, y: 801, width: 395, height: 30 },
  { x: 2602, y: 850, width: 218, height: 23 },
  { x: 3057, y: 887, width: 115, height: 29, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 3389, y: 868, width: 92, height: 15 },
  { x: 3912, y: 817, width: 88, height: 29, melt: true, meltDelay: 20 },
  { x: 4164, y: 817, width: 380, height: 15 },
  { x: 4732, y: 742, width: 107, height: 24, bounce: true, bounceStrength: -17 },
  { x: 5004, y: 632, width: 157, height: 23, melt: true, meltDelay: 20 },
  { x: 5336, y: 533, width: 219, height: 25 },
  { x: 5724, y: 430, width: 219, height: 19, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 5943, y: 430, width: 294, height: 20 },
  { x: 6436, y: 406, width: 100, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 6722, y: 385, width: 241, height: 20 },
  { x: 7394, y: 336, width: 233, height: 28 },
  { x: 8073, y: 318, width: 85, height: 21, moveAxis: "x", moveRange: 112, moveSpeed: 0.059, movePhase: 5.52 },
  { x: 8385, y: 323, width: 49, height: 24, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 8671, y: 348, width: 56, height: 24, bounce: true, bounceStrength: -20 },
  { x: 8727, y: 348, width: 250, height: 20 },
  { x: 9176, y: 325, width: 90, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 9458, y: 309, width: 245, height: 20 },
  { x: 9955, y: 405, width: 144, height: 15, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 10351, y: 517, width: 155, height: 27, bounce: true, bounceStrength: -18 },
  { x: 10758, y: 630, width: 84, height: 16, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 11094, y: 719, width: 89, height: 26, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 11347, y: 719, width: 209, height: 19 },
  { x: 11808, y: 786, width: 124, height: 24 },
  { x: 12165, y: 800, width: 73, height: 15, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 12688, y: 789, width: 212, height: 15, melt: true, meltDelay: 20 },
  { x: 13113, y: 761, width: 62, height: 20, moveAxis: "y", moveRange: 92, moveSpeed: 0.045, movePhase: 2.54 },
  { x: 13339, y: 761, width: 332, height: 18 },
  { x: 14088, y: 679, width: 228, height: 29 },
  { x: 14486, y: 692, width: 432, height: 20 },
];

window.deadlyPlatforms = [
  { x: 13175, y: 797, width: 50, height: 25, moveAxis: "x", moveRange: 113, moveSpeed: 0.046, movePhase: 3.32 },
  { x: 2850, y: 845, width: 159, height: 20 },
  { x: 3501, y: 859, width: 65, height: 20 },
  { x: 5578, y: 543, width: 136, height: 20 },
  { x: 7650, y: 345, width: 168, height: 20 },
  { x: 11961, y: 776, width: 102, height: 20 },
];

window.spikes = [
  { x: 2650, y: 850, size: 44 },
  { x: 2694, y: 850, size: 24 },
  { x: 3406, y: 868, size: 13 },
  { x: 3419, y: 868, size: 44 },
  { x: 5374, y: 533, size: 49 },
  { x: 5423, y: 533, size: 33 },
  { x: 5456, y: 533, size: 36 },
  { x: 5492, y: 533, size: 43 },
  { x: 7474, y: 336, size: 23 },
  { x: 7497, y: 336, size: 25 },
  { x: 11825, y: 786, size: 56 },
  { x: 11881, y: 786, size: 16 },
  { x: 11897, y: 786, size: 23 },
  { x: 14172, y: 679, size: 31 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2162, y: 771, reached: false },
  { x: 4354, y: 787, reached: false },
  { x: 6782, y: 355, reached: false },
  { x: 9518, y: 279, reached: false },
  { x: 11452, y: 689, reached: false },
  { x: 13505, y: 731, reached: false },
  { x: 14702, y: 662, reached: false }, // Final
];
