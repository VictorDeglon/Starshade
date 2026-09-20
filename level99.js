// Level 99 Data — "The Abyssal Spire"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 99";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 527, y: 383, width: 107, height: 27, melt: true, meltDelay: 20 },
  { x: 861, y: 389, width: 80, height: 16, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 1164, y: 383, width: 45, height: 29 },
  { x: 1655, y: 371, width: 118, height: 29, melt: true, meltDelay: 20 },
  { x: 1986, y: 344, width: 135, height: 16 },
  { x: 2329, y: 301, width: 222, height: 23, bounce: true, bounceStrength: -19 },
  { x: 2715, y: 301, width: 383, height: 15 },
  { x: 3276, y: 211, width: 192, height: 14, moveAxis: "y", moveRange: 163, moveSpeed: 0.054, movePhase: 4.42 },
  { x: 3885, y: 132, width: 208, height: 14, moveAxis: "x", moveRange: 155, moveSpeed: 0.051, movePhase: 0.38 },
  { x: 4504, y: 43, width: 148, height: 30, bounce: true, bounceStrength: -19 },
  { x: 4827, y: -52, width: 203, height: 26, melt: true, meltDelay: 20 },
  { x: 5432, y: -161, width: 196, height: 17 },
  { x: 6039, y: -250, width: 55, height: 23, conveyor: true, conveyorSpeed: -1.53 },
  { x: 6094, y: -250, width: 292, height: 20 },
  { x: 6595, y: -260, width: 104, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 6880, y: -282, width: 240, height: 20 },
  { x: 7547, y: -348, width: 50, height: 29 },
  { x: 8028, y: -402, width: 179, height: 27 },
  { x: 8653, y: -421, width: 57, height: 18, moveAxis: "x", moveRange: 156, moveSpeed: 0.068, movePhase: 5.54 },
  { x: 8927, y: -433, width: 177, height: 29, bounce: true, bounceStrength: -19 },
  { x: 9331, y: -430, width: 124, height: 16, bounce: true, bounceStrength: -19 },
  { x: 9688, y: -415, width: 223, height: 19, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 10075, y: -415, width: 294, height: 14 },
  { x: 10592, y: -426, width: 193, height: 20, moveAxis: "x", moveRange: 109, moveSpeed: 0.078, movePhase: 5.68 },
  { x: 11012, y: -419, width: 186, height: 29 },
  { x: 11648, y: -430, width: 152, height: 15, melt: true, meltDelay: 20 },
  { x: 12008, y: -470, width: 84, height: 16, moveAxis: "y", moveRange: 156, moveSpeed: 0.051, movePhase: 0.72 },
  { x: 12296, y: -514, width: 192, height: 20, bounce: true, bounceStrength: -17 },
  { x: 12909, y: -586, width: 154, height: 28, melt: true, meltDelay: 20 },
  { x: 13063, y: -586, width: 266, height: 20 },
  { x: 13535, y: -607, width: 91, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 13824, y: -621, width: 228, height: 20 },
  { x: 14227, y: -718, width: 83, height: 26, moveAxis: "x", moveRange: 104, moveSpeed: 0.066, movePhase: 4.91 },
  { x: 14717, y: -823, width: 211, height: 28, conveyor: true, conveyorSpeed: 1.81 },
  { x: 15106, y: -912, width: 150, height: 23, moveAxis: "y", moveRange: 107, moveSpeed: 0.059, movePhase: 5.79 },
  { x: 15658, y: -1025, width: 186, height: 17, moveAxis: "x", moveRange: 122, moveSpeed: 0.072, movePhase: 4.16 },
  { x: 16251, y: -1129, width: 159, height: 17, moveAxis: "y", moveRange: 121, moveSpeed: 0.062, movePhase: 3.1 },
  { x: 16574, y: -1129, width: 335, height: 21 },
  { x: 17093, y: -1209, width: 233, height: 27, melt: true, meltDelay: 20 },
  { x: 17763, y: -1251, width: 212, height: 19 },
  { x: 18183, y: -1291, width: 89, height: 16 },
  { x: 18722, y: -1300, width: 183, height: 14 },
  { x: 19128, y: -1311, width: 208, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 19563, y: -1300, width: 174, height: 16, melt: true, meltDelay: 20 },
  { x: 19946, y: -1297, width: 424, height: 20 },
];

window.deadlyPlatforms = [
  { x: 3955, y: 159, width: 144, height: 19, moveAxis: "y", moveRange: 163, moveSpeed: 0.047, movePhase: 0.82 },
  { x: 8694, y: -388, width: 50, height: 16, moveAxis: "y", moveRange: 173, moveSpeed: 0.083, movePhase: 5.51 },
  { x: 10665, y: -372, width: 159, height: 14, moveAxis: "y", moveRange: 119, moveSpeed: 0.082, movePhase: 5.36 },
  { x: 11933, y: -424, width: 56, height: 21, moveAxis: "x", moveRange: 158, moveSpeed: 0.056, movePhase: 2.52 },
  { x: 14165, y: -759, width: 57, height: 17, moveAxis: "y", moveRange: 121, moveSpeed: 0.072, movePhase: 5.65 },
  { x: 15178, y: -943, width: 88, height: 21, moveAxis: "x", moveRange: 107, moveSpeed: 0.073, movePhase: 4.52 },
  { x: 1234, y: 384, width: 60, height: 20 },
  { x: 7636, y: -352, width: 60, height: 20 },
  { x: 8230, y: -401, width: 119, height: 20 },
  { x: 11236, y: -412, width: 138, height: 20 },
  { x: 18013, y: -1259, width: 136, height: 20 },
  { x: 18292, y: -1295, width: 60, height: 20 },
  { x: 18941, y: -1299, width: 119, height: 20 },
];

window.spikes = [
  { x: 2003, y: 344, size: 59 },
  { x: 2062, y: 344, size: 48 },
  { x: 5474, y: -161, size: 24 },
  { x: 5498, y: -161, size: 62 },
  { x: 7557, y: -348, size: 26 },
  { x: 8051, y: -402, size: 27 },
  { x: 11039, y: -419, size: 49 },
  { x: 18194, y: -1291, size: 30 },
  { x: 18224, y: -1291, size: 12 },
  { x: 18778, y: -1300, size: 19 },
  { x: 18797, y: -1300, size: 47 },
  { x: 18844, y: -1300, size: 27 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2907, y: 271, reached: false },
  { x: 6940, y: -312, reached: false },
  { x: 10222, y: -445, reached: false },
  { x: 13884, y: -651, reached: false },
  { x: 16742, y: -1159, reached: false },
  { x: 20158, y: -1327, reached: false }, // Final
];
