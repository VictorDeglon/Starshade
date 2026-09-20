// Level 90 Data — "Cinderspire Reach"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 90";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 469, y: 278, width: 109, height: 30, melt: true, meltDelay: 20 },
  { x: 989, y: 184, width: 201, height: 16, melt: true, meltDelay: 20 },
  { x: 1607, y: 99, width: 123, height: 24 },
  { x: 1934, y: 51, width: 133, height: 29, melt: true, meltDelay: 20 },
  { x: 2498, y: 5, width: 168, height: 28 },
  { x: 2666, y: 5, width: 280, height: 20 },
  { x: 3152, y: -17, width: 95, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 3435, y: -39, width: 225, height: 20 },
  { x: 4106, y: -54, width: 156, height: 28, moveAxis: "y", moveRange: 102, moveSpeed: 0.056, movePhase: 2.45 },
  { x: 4489, y: -43, width: 207, height: 21, conveyor: true, conveyorSpeed: -0.98 },
  { x: 4923, y: -36, width: 215, height: 27, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 5361, y: -39, width: 153, height: 25, melt: true, meltDelay: 20 },
  { x: 5747, y: -27, width: 175, height: 14 },
  { x: 6368, y: -39, width: 103, height: 19, bounce: true, bounceStrength: -17 },
  { x: 6921, y: -48, width: 112, height: 15, conveyor: true, conveyorSpeed: 2.16 },
  { x: 7033, y: -48, width: 264, height: 20 },
  { x: 7498, y: -59, width: 95, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 7796, y: -71, width: 270, height: 20 },
  { x: 8270, y: -115, width: 147, height: 22 },
  { x: 8605, y: -186, width: 227, height: 17 },
  { x: 9007, y: -284, width: 224, height: 26, bounce: true, bounceStrength: -16 },
  { x: 9396, y: -391, width: 69, height: 15 },
  { x: 9640, y: -490, width: 220, height: 14, melt: true, meltDelay: 20 },
  { x: 10267, y: -594, width: 62, height: 22, bounce: true, bounceStrength: -17 },
  { x: 10493, y: -594, width: 265, height: 23 },
  { x: 10936, y: -684, width: 114, height: 15, moveAxis: "x", moveRange: 98, moveSpeed: 0.053, movePhase: 4.41 },
  { x: 11244, y: -748, width: 106, height: 30, conveyor: true, conveyorSpeed: 2.15 },
  { x: 11777, y: -811, width: 222, height: 22 },
  { x: 12439, y: -840, width: 226, height: 26, bounce: true, bounceStrength: -17 },
  { x: 13105, y: -871, width: 86, height: 17 },
  { x: 13637, y: -883, width: 197, height: 17, moveAxis: "x", moveRange: 125, moveSpeed: 0.066, movePhase: 3.76 },
  { x: 13998, y: -883, width: 344, height: 19 },
  { x: 14575, y: -869, width: 93, height: 22, bounce: true, bounceStrength: -17 },
  { x: 14895, y: -859, width: 232, height: 20, moveAxis: "x", moveRange: 148, moveSpeed: 0.058, movePhase: 4.99 },
  { x: 15354, y: -857, width: 196, height: 25, conveyor: true, conveyorSpeed: -0.91 },
  { x: 15773, y: -861, width: 138, height: 19, conveyor: true, conveyorSpeed: -1.68 },
  { x: 16357, y: -884, width: 232, height: 23, moveAxis: "x", moveRange: 130, moveSpeed: 0.053, movePhase: 2.7 },
  { x: 16753, y: -884, width: 185, height: 23 },
  { x: 17146, y: -923, width: 212, height: 30, melt: true, meltDelay: 20 },
  { x: 17775, y: -1007, width: 85, height: 30 },
  { x: 18044, y: -1086, width: 141, height: 26 },
  { x: 18592, y: -1189, width: 127, height: 17, moveAxis: "x", moveRange: 126, moveSpeed: 0.057, movePhase: 5.05 },
  { x: 19126, y: -1294, width: 162, height: 17, bounce: true, bounceStrength: -18 },
  { x: 19457, y: -1394, width: 168, height: 18, melt: true, meltDelay: 20 },
  { x: 19821, y: -1394, width: 421, height: 20 },
];

window.deadlyPlatforms = [
  { x: 14845, y: -825, width: 131, height: 25, moveAxis: "y", moveRange: 154, moveSpeed: 0.066, movePhase: 4.17 },
  { x: 16305, y: -824, width: 182, height: 23, moveAxis: "y", moveRange: 100, moveSpeed: 0.046, movePhase: 2.46 },
  { x: 18545, y: -1140, width: 106, height: 21, moveAxis: "y", moveRange: 103, moveSpeed: 0.054 },
  { x: 1764, y: 108, width: 64, height: 20 },
  { x: 2701, y: 10, width: 114, height: 20 },
  { x: 5953, y: -29, width: 148, height: 20 },
  { x: 8438, y: -122, width: 99, height: 20 },
  { x: 8862, y: -194, width: 119, height: 20 },
  { x: 9490, y: -398, width: 60, height: 20 },
  { x: 13216, y: -861, width: 68, height: 20 },
  { x: 17891, y: -1004, width: 60, height: 20 },
  { x: 18219, y: -1088, width: 115, height: 20 },
];

window.spikes = [
  { x: 1629, y: 99, size: 34 },
  { x: 1663, y: 99, size: 27 },
  { x: 5792, y: -27, size: 39 },
  { x: 5831, y: -27, size: 53 },
  { x: 8316, y: -115, size: 47 },
  { x: 8363, y: -115, size: 34 },
  { x: 8684, y: -186, size: 35 },
  { x: 8719, y: -186, size: 33 },
  { x: 8752, y: -186, size: 64 },
  { x: 11848, y: -811, size: 15 },
  { x: 13124, y: -871, size: 59 },
  { x: 17802, y: -1007, size: 30 },
  { x: 18083, y: -1086, size: 38 },
  { x: 18121, y: -1086, size: 32 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 3495, y: -69, reached: false },
  { x: 7856, y: -101, reached: false },
  { x: 10626, y: -624, reached: false },
  { x: 14170, y: -913, reached: false },
  { x: 16846, y: -914, reached: false },
  { x: 20032, y: -1424, reached: false }, // Final
];
