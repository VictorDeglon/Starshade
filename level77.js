// Level 77 Data — "Skybreak Chasm"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 77";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 711, y: 292, width: 196, height: 30, bounce: true, bounceStrength: -17 },
  { x: 1314, y: 195, width: 181, height: 16, moveAxis: "x", moveRange: 120, moveSpeed: 0.06, movePhase: 1.55 },
  { x: 1683, y: 118, width: 213, height: 27 },
  { x: 2090, y: 50, width: 115, height: 21, conveyor: true, conveyorSpeed: 1.03 },
  { x: 2626, y: -21, width: 120, height: 28 },
  { x: 2954, y: -57, width: 161, height: 30, melt: true, meltDelay: 20 },
  { x: 3279, y: -57, width: 286, height: 17 },
  { x: 3782, y: -69, width: 193, height: 24, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 4208, y: -55, width: 233, height: 27, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 4668, y: -54, width: 215, height: 16 },
  { x: 5116, y: -39, width: 87, height: 20, melt: true, meltDelay: 20 },
  { x: 5436, y: -19, width: 60, height: 22, melt: true, meltDelay: 20 },
  { x: 5946, y: -29, width: 47, height: 15, moveAxis: "y", moveRange: 127, moveSpeed: 0.045, movePhase: 4.17 },
  { x: 6157, y: -29, width: 278, height: 27 },
  { x: 6881, y: -45, width: 140, height: 25 },
  { x: 7219, y: -99, width: 128, height: 26, melt: true, meltDelay: 20 },
  { x: 7778, y: -151, width: 102, height: 15, melt: true, meltDelay: 20 },
  { x: 8297, y: -234, width: 106, height: 14 },
  { x: 8581, y: -324, width: 160, height: 19 },
  { x: 9152, y: -417, width: 124, height: 18, melt: true, meltDelay: 20 },
  { x: 9687, y: -508, width: 231, height: 17, melt: true, meltDelay: 20 },
  { x: 10082, y: -508, width: 261, height: 28 },
  { x: 10518, y: -607, width: 219, height: 18 },
  { x: 10921, y: -687, width: 78, height: 15 },
  { x: 11420, y: -761, width: 59, height: 25, moveAxis: "y", moveRange: 129, moveSpeed: 0.046, movePhase: 2.6 },
  { x: 11687, y: -795, width: 89, height: 27, melt: true, meltDelay: 20 },
  { x: 12222, y: -816, width: 93, height: 21, moveAxis: "y", moveRange: 132, moveSpeed: 0.047, movePhase: 1.33 },
  { x: 12538, y: -821, width: 138, height: 15, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 12676, y: -821, width: 266, height: 20 },
  { x: 13138, y: -850, width: 102, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 13434, y: -875, width: 252, height: 20 },
  { x: 13919, y: -859, width: 210, height: 30, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 14356, y: -848, width: 198, height: 29, bounce: true, bounceStrength: -18 },
  { x: 14781, y: -838, width: 121, height: 22, moveAxis: "x", moveRange: 88, moveSpeed: 0.052, movePhase: 1.64 },
  { x: 15135, y: -825, width: 230, height: 16, bounce: true, bounceStrength: -17 },
  { x: 15588, y: -828, width: 179, height: 16, melt: true, meltDelay: 20 },
  { x: 15980, y: -859, width: 81, height: 18 },
  { x: 16498, y: -894, width: 176, height: 27 },
  { x: 16838, y: -894, width: 258, height: 14 },
  { x: 17517, y: -968, width: 221, height: 16, moveAxis: "y", moveRange: 135, moveSpeed: 0.06, movePhase: 4.59 },
  { x: 17926, y: -1044, width: 233, height: 14 },
  { x: 18566, y: -1141, width: 71, height: 14, moveAxis: "x", moveRange: 142, moveSpeed: 0.056, movePhase: 3.31 },
  { x: 18811, y: -1128, width: 427, height: 20 },
];

window.deadlyPlatforms = [
  { x: 5996, y: -64, width: 50, height: 18, moveAxis: "x", moveRange: 96, moveSpeed: 0.055, movePhase: 4.23 },
  { x: 11483, y: -726, width: 50, height: 14, moveAxis: "x", moveRange: 153, moveSpeed: 0.049, movePhase: 0.6 },
  { x: 14827, y: -874, width: 99, height: 21, moveAxis: "y", moveRange: 94, moveSpeed: 0.048, movePhase: 1.08 },
  { x: 17468, y: -1021, width: 171, height: 25, moveAxis: "x", moveRange: 138, moveSpeed: 0.07, movePhase: 1.39 },
  { x: 18526, y: -1110, width: 50, height: 16, moveAxis: "y", moveRange: 149, moveSpeed: 0.064, movePhase: 0.18 },
  { x: 1931, y: 108, width: 168, height: 20 },
  { x: 2772, y: -31, width: 60, height: 20 },
  { x: 4910, y: -59, width: 165, height: 20 },
  { x: 8427, y: -239, width: 89, height: 20 },
  { x: 8773, y: -331, width: 127, height: 20 },
  { x: 10758, y: -609, width: 140, height: 20 },
  { x: 11027, y: -691, width: 60, height: 20 },
  { x: 16092, y: -868, width: 60, height: 20 },
  { x: 16695, y: -894, width: 158, height: 20 },
  { x: 18188, y: -1052, width: 141, height: 20 },
];

window.spikes = [
  { x: 1723, y: 118, size: 61 },
  { x: 1784, y: 118, size: 37 },
  { x: 1821, y: 118, size: 35 },
  { x: 2649, y: -21, size: 49 },
  { x: 2698, y: -21, size: 24 },
  { x: 6915, y: -45, size: 23 },
  { x: 8616, y: -324, size: 22 },
  { x: 8638, y: -324, size: 27 },
  { x: 8665, y: -324, size: 61 },
  { x: 10562, y: -607, size: 32 },
  { x: 10940, y: -687, size: 49 },
  { x: 15996, y: -859, size: 35 },
  { x: 16031, y: -859, size: 24 },
  { x: 16559, y: -894, size: 17 },
  { x: 16576, y: -894, size: 31 },
  { x: 16607, y: -894, size: 34 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 3422, y: -87, reached: false },
  { x: 6296, y: -59, reached: false },
  { x: 10213, y: -538, reached: false },
  { x: 13494, y: -905, reached: false },
  { x: 16967, y: -924, reached: false },
  { x: 19025, y: -1158, reached: false }, // Final
];
