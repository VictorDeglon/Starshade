// Level 81 Data — "Ashen Spire"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 81";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 527, y: 383, width: 150, height: 15 },
  { x: 1123, y: 370, width: 190, height: 15 },
  { x: 1744, y: 317, width: 104, height: 17, conveyor: true, conveyorSpeed: -1.99 },
  { x: 2052, y: 271, width: 219, height: 26, bounce: true, bounceStrength: -16 },
  { x: 2688, y: 191, width: 203, height: 23, bounce: true, bounceStrength: -16 },
  { x: 3308, y: 105, width: 48, height: 21, moveAxis: "y", moveRange: 81, moveSpeed: 0.059, movePhase: 3.62 },
  { x: 3520, y: 105, width: 213, height: 22 },
  { x: 4135, y: -1, width: 233, height: 26, melt: true, meltDelay: 20 },
  { x: 4552, y: -84, width: 73, height: 30 },
  { x: 4809, y: -163, width: 212, height: 18, conveyor: true, conveyorSpeed: -2.13 },
  { x: 5438, y: -243, width: 188, height: 14, bounce: true, bounceStrength: -20 },
  { x: 6047, y: -319, width: 64, height: 23, melt: true, meltDelay: 20 },
  { x: 6548, y: -358, width: 103, height: 25, melt: true, meltDelay: 20 },
  { x: 6651, y: -358, width: 280, height: 20 },
  { x: 7128, y: -368, width: 102, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 7427, y: -389, width: 271, height: 20 },
  { x: 8138, y: -413, width: 132, height: 28, melt: true, meltDelay: 20 },
  { x: 8497, y: -405, width: 65, height: 16, melt: true, meltDelay: 20 },
  { x: 8789, y: -398, width: 194, height: 24, conveyor: true, conveyorSpeed: -1.52 },
  { x: 9210, y: -395, width: 80, height: 28, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 9517, y: -393, width: 229, height: 27, moveAxis: "y", moveRange: 144, moveSpeed: 0.06, movePhase: 0.58 },
  { x: 10196, y: -401, width: 143, height: 16 },
  { x: 10785, y: -421, width: 134, height: 26, melt: true, meltDelay: 20 },
  { x: 10919, y: -421, width: 253, height: 20 },
  { x: 11373, y: -438, width: 106, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 11658, y: -461, width: 230, height: 20 },
  { x: 12325, y: -500, width: 51, height: 17 },
  { x: 12797, y: -569, width: 63, height: 30, conveyor: true, conveyorSpeed: 1.88 },
  { x: 13281, y: -637, width: 65, height: 27 },
  { x: 13767, y: -711, width: 225, height: 21 },
  { x: 14403, y: -806, width: 143, height: 19, moveAxis: "x", moveRange: 128, moveSpeed: 0.059, movePhase: 0.74 },
  { x: 14710, y: -806, width: 311, height: 19 },
  { x: 15432, y: -893, width: 161, height: 18 },
  { x: 15762, y: -993, width: 232, height: 25, melt: true, meltDelay: 20 },
  { x: 16405, y: -1088, width: 126, height: 16 },
  { x: 16735, y: -1140, width: 54, height: 26, melt: true, meltDelay: 20 },
  { x: 16993, y: -1185, width: 140, height: 22 },
  { x: 17570, y: -1226, width: 206, height: 20, moveAxis: "x", moveRange: 103, moveSpeed: 0.054, movePhase: 4.87 },
  { x: 17940, y: -1226, width: 309, height: 30 },
  { x: 18695, y: -1240, width: 110, height: 24, melt: true, meltDelay: 20 },
  { x: 19032, y: -1234, width: 195, height: 23, moveAxis: "x", moveRange: 130, moveSpeed: 0.044, movePhase: 0.09 },
  { x: 19677, y: -1237, width: 51, height: 26 },
  { x: 20178, y: -1244, width: 167, height: 29, melt: true, meltDelay: 20 },
  { x: 20572, y: -1240, width: 193, height: 14 },
  { x: 20964, y: -1247, width: 427, height: 20 },
];

window.deadlyPlatforms = [
  { x: 17483, y: -1272, width: 178, height: 15, moveAxis: "y", moveRange: 94, moveSpeed: 0.061, movePhase: 1.38 },
  { x: 705, y: 386, width: 104, height: 20 },
  { x: 4660, y: -81, width: 60, height: 20 },
  { x: 10370, y: -399, width: 121, height: 20 },
  { x: 12415, y: -502, width: 60, height: 20 },
  { x: 13383, y: -643, width: 60, height: 20 },
  { x: 14017, y: -719, width: 175, height: 20 },
  { x: 15628, y: -893, width: 137, height: 20 },
  { x: 16562, y: -1086, width: 97, height: 20 },
  { x: 17158, y: -1189, width: 92, height: 20 },
  { x: 19752, y: -1229, width: 60, height: 20 },
  { x: 20793, y: -1241, width: 144, height: 20 },
];

window.spikes = [
  { x: 576, y: 383, size: 51 },
  { x: 627, y: 383, size: 26 },
  { x: 653, y: 383, size: 12 },
  { x: 1166, y: 370, size: 25 },
  { x: 4562, y: -84, size: 54 },
  { x: 10235, y: -401, size: 55 },
  { x: 13290, y: -637, size: 24 },
  { x: 13314, y: -637, size: 16 },
  { x: 15485, y: -893, size: 30 },
  { x: 16429, y: -1088, size: 61 },
  { x: 16490, y: -1088, size: 29 },
  { x: 17037, y: -1185, size: 22 },
  { x: 19687, y: -1237, size: 17 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 3627, y: 75, reached: false },
  { x: 7487, y: -419, reached: false },
  { x: 11718, y: -491, reached: false },
  { x: 14866, y: -836, reached: false },
  { x: 18095, y: -1256, reached: false },
  { x: 21178, y: -1277, reached: false }, // Final
];
