// Level 91 Data — "The Faultline Ascent"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 91";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 737, y: 339, width: 224, height: 18, moveAxis: "x", moveRange: 121, moveSpeed: 0.063, movePhase: 4.64 },
  { x: 1401, y: 305, width: 64, height: 30 },
  { x: 1911, y: 288, width: 62, height: 14 },
  { x: 2190, y: 274, width: 69, height: 30, bounce: true, bounceStrength: -17 },
  { x: 2709, y: 273, width: 198, height: 16 },
  { x: 3071, y: 273, width: 316, height: 23 },
  { x: 3610, y: 263, width: 229, height: 23, melt: true, meltDelay: 20 },
  { x: 4289, y: 252, width: 196, height: 24 },
  { x: 4702, y: 235, width: 91, height: 14 },
  { x: 5006, y: 209, width: 221, height: 25, melt: true, meltDelay: 20 },
  { x: 5431, y: 162, width: 117, height: 30 },
  { x: 5712, y: 162, width: 272, height: 14 },
  { x: 6405, y: 88, width: 203, height: 22, moveAxis: "x", moveRange: 100, moveSpeed: 0.072, movePhase: 2.37 },
  { x: 7019, y: -7, width: 64, height: 28, moveAxis: "y", moveRange: 98, moveSpeed: 0.06, movePhase: 4.13 },
  { x: 7490, y: -109, width: 193, height: 25 },
  { x: 7858, y: -208, width: 176, height: 18, bounce: true, bounceStrength: -18 },
  { x: 8445, y: -301, width: 133, height: 24, melt: true, meltDelay: 20 },
  { x: 8989, y: -388, width: 130, height: 19, bounce: true, bounceStrength: -17 },
  { x: 9119, y: -388, width: 253, height: 20 },
  { x: 9571, y: -402, width: 103, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 9866, y: -431, width: 243, height: 20 },
  { x: 10526, y: -509, width: 201, height: 16, melt: true, meltDelay: 20 },
  { x: 11148, y: -576, width: 105, height: 27, bounce: true, bounceStrength: -17 },
  { x: 11690, y: -612, width: 165, height: 18, melt: true, meltDelay: 20 },
  { x: 12072, y: -627, width: 79, height: 29, conveyor: true, conveyorSpeed: 1.1 },
  { x: 12601, y: -631, width: 85, height: 23 },
  { x: 13132, y: -645, width: 174, height: 19 },
  { x: 13470, y: -645, width: 180, height: 27 },
  { x: 14100, y: -653, width: 190, height: 30, melt: true, meltDelay: 20 },
  { x: 14740, y: -656, width: 219, height: 26 },
  { x: 15186, y: -655, width: 49, height: 19, melt: true, meltDelay: 20 },
  { x: 15681, y: -678, width: 123, height: 17 },
  { x: 16241, y: -720, width: 227, height: 28 },
  { x: 16899, y: -769, width: 105, height: 17, conveyor: true, conveyorSpeed: 1.51 },
  { x: 17004, y: -769, width: 297, height: 20 },
  { x: 17504, y: -794, width: 96, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 17788, y: -808, width: 274, height: 20 },
  { x: 18479, y: -886, width: 142, height: 18 },
  { x: 19028, y: -990, width: 130, height: 19, moveAxis: "x", moveRange: 104, moveSpeed: 0.072, movePhase: 0.1 },
  { x: 19565, y: -1090, width: 232, height: 26, bounce: true, bounceStrength: -19 },
  { x: 19966, y: -1192, width: 214, height: 14, melt: true, meltDelay: 20 },
  { x: 20345, y: -1300, width: 159, height: 27, bounce: true, bounceStrength: -19 },
  { x: 20915, y: -1391, width: 233, height: 26, bounce: true, bounceStrength: -17 },
  { x: 21565, y: -1472, width: 84, height: 16, bounce: true, bounceStrength: -19 },
  { x: 21840, y: -1458, width: 401, height: 20 },
];

window.deadlyPlatforms = [
  { x: 780, y: 279, width: 158, height: 15, moveAxis: "y", moveRange: 127, moveSpeed: 0.077, movePhase: 3.77 },
  { x: 1491, y: 315, width: 60, height: 20 },
  { x: 2007, y: 287, width: 60, height: 20 },
  { x: 2929, y: 280, width: 124, height: 20 },
  { x: 4523, y: 242, width: 156, height: 20 },
  { x: 4818, y: 225, width: 79, height: 20 },
  { x: 5569, y: 155, width: 98, height: 20 },
  { x: 7705, y: -109, width: 110, height: 20 },
  { x: 12720, y: -639, width: 60, height: 20 },
  { x: 13327, y: -647, width: 141, height: 20 },
  { x: 14989, y: -661, width: 122, height: 20 },
  { x: 15839, y: -677, width: 101, height: 20 },
  { x: 16504, y: -729, width: 200, height: 20 },
  { x: 18650, y: -894, width: 111, height: 20 },
];

window.spikes = [
  { x: 4352, y: 252, size: 31 },
  { x: 4383, y: 252, size: 62 },
  { x: 4718, y: 235, size: 18 },
  { x: 7521, y: -109, size: 56 },
  { x: 7577, y: -109, size: 42 },
  { x: 12619, y: -631, size: 55 },
  { x: 13168, y: -645, size: 57 },
  { x: 13225, y: -645, size: 22 },
  { x: 14810, y: -656, size: 19 },
  { x: 14829, y: -656, size: 15 },
  { x: 14844, y: -656, size: 33 },
  { x: 14877, y: -656, size: 54 },
  { x: 15721, y: -678, size: 52 },
  { x: 18529, y: -886, size: 33 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 3229, y: 243, reached: false },
  { x: 5848, y: 132, reached: false },
  { x: 9926, y: -461, reached: false },
  { x: 13560, y: -675, reached: false },
  { x: 17848, y: -838, reached: false },
  { x: 22041, y: -1488, reached: false }, // Final
];
