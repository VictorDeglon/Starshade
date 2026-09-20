// Level 84 Data — "Starwell Descent"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 84";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 721, y: 309, width: 190, height: 24, bounce: true, bounceStrength: -18 },
  { x: 1105, y: 245, width: 75, height: 26 },
  { x: 1374, y: 177, width: 218, height: 28, melt: true, meltDelay: 20 },
  { x: 2029, y: 138, width: 134, height: 29, conveyor: true, conveyorSpeed: -1.26 },
  { x: 2609, y: 122, width: 63, height: 23, melt: true, meltDelay: 20 },
  { x: 2889, y: 101, width: 207, height: 23, moveAxis: "x", moveRange: 91, moveSpeed: 0.055, movePhase: 2.15 },
  { x: 3096, y: 101, width: 240, height: 20 },
  { x: 3533, y: 79, width: 106, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 3828, y: 68, width: 277, height: 20 },
  { x: 4338, y: 89, width: 54, height: 18, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 4619, y: 96, width: 211, height: 26, moveAxis: "x", moveRange: 150, moveSpeed: 0.066, movePhase: 3.97 },
  { x: 5280, y: 87, width: 80, height: 28 },
  { x: 5583, y: 85, width: 216, height: 14 },
  { x: 6022, y: 78, width: 135, height: 20, moveAxis: "x", moveRange: 101, moveSpeed: 0.047, movePhase: 3.93 },
  { x: 6594, y: 38, width: 76, height: 30 },
  { x: 6874, y: -14, width: 192, height: 17, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 7066, y: -14, width: 274, height: 20 },
  { x: 7548, y: -42, width: 103, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 7835, y: -52, width: 225, height: 20 },
  { x: 8244, y: -135, width: 194, height: 17, moveAxis: "y", moveRange: 137, moveSpeed: 0.065, movePhase: 0.09 },
  { x: 8855, y: -215, width: 198, height: 16 },
  { x: 9218, y: -321, width: 101, height: 23 },
  { x: 9730, y: -413, width: 154, height: 24, melt: true, meltDelay: 20 },
  { x: 10049, y: -522, width: 197, height: 29 },
  { x: 10421, y: -618, width: 161, height: 20, moveAxis: "y", moveRange: 115, moveSpeed: 0.062, movePhase: 2.97 },
  { x: 10746, y: -618, width: 194, height: 20 },
  { x: 11361, y: -685, width: 177, height: 28 },
  { x: 11742, y: -729, width: 217, height: 18 },
  { x: 12405, y: -742, width: 118, height: 26, bounce: true, bounceStrength: -19 },
  { x: 12740, y: -755, width: 65, height: 23 },
  { x: 13032, y: -752, width: 149, height: 18, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 13414, y: -736, width: 50, height: 15, conveyor: true, conveyorSpeed: 1.81 },
  { x: 13628, y: -736, width: 203, height: 22 },
  { x: 14058, y: -732, width: 175, height: 28, bounce: true, bounceStrength: -18 },
  { x: 14460, y: -732, width: 117, height: 15 },
  { x: 15023, y: -755, width: 156, height: 24, bounce: true, bounceStrength: -16 },
  { x: 15625, y: -777, width: 63, height: 24, melt: true, meltDelay: 20 },
  { x: 16115, y: -840, width: 229, height: 21, bounce: true, bounceStrength: -17 },
  { x: 16765, y: -907, width: 85, height: 15, bounce: true, bounceStrength: -17 },
  { x: 17038, y: -985, width: 185, height: 26 },
  { x: 17387, y: -985, width: 254, height: 27 },
  { x: 17816, y: -1084, width: 109, height: 18, moveAxis: "y", moveRange: 130, moveSpeed: 0.068, movePhase: 0.27 },
  { x: 18094, y: -1185, width: 105, height: 21, conveyor: true, conveyorSpeed: -1.78 },
  { x: 18616, y: -1267, width: 135, height: 30, melt: true, meltDelay: 20 },
  { x: 18920, y: -1267, width: 433, height: 20 },
];

window.deadlyPlatforms = [
  { x: 2837, y: 45, width: 140, height: 23, moveAxis: "y", moveRange: 101, moveSpeed: 0.054, movePhase: 3.91 },
  { x: 4548, y: 43, width: 139, height: 16, moveAxis: "y", moveRange: 146, moveSpeed: 0.06, movePhase: 1.46 },
  { x: 5956, y: 41, width: 112, height: 24, moveAxis: "y", moveRange: 121, moveSpeed: 0.041, movePhase: 0.1 },
  { x: 17904, y: -1126, width: 87, height: 16, moveAxis: "x", moveRange: 100, moveSpeed: 0.058, movePhase: 2.47 },
  { x: 1212, y: 252, width: 67, height: 20 },
  { x: 5385, y: 89, width: 71, height: 20 },
  { x: 5838, y: 84, width: 151, height: 20 },
  { x: 6694, y: 32, width: 60, height: 20 },
  { x: 9083, y: -205, width: 103, height: 20 },
  { x: 9350, y: -319, width: 89, height: 20 },
  { x: 10282, y: -522, width: 120, height: 20 },
  { x: 11575, y: -686, width: 152, height: 20 },
  { x: 11979, y: -727, width: 176, height: 20 },
  { x: 14616, y: -725, width: 81, height: 20 },
  { x: 17261, y: -988, width: 150, height: 20 },
];

window.spikes = [
  { x: 1125, y: 245, size: 48 },
  { x: 5612, y: 85, size: 55 },
  { x: 6604, y: 38, size: 14 },
  { x: 8923, y: -215, size: 55 },
  { x: 8978, y: -215, size: 49 },
  { x: 9027, y: -215, size: 19 },
  { x: 10096, y: -522, size: 19 },
  { x: 11420, y: -685, size: 43 },
  { x: 12754, y: -755, size: 27 },
  { x: 14497, y: -732, size: 60 },
  { x: 17104, y: -985, size: 30 },
  { x: 17134, y: -985, size: 18 },
  { x: 17152, y: -985, size: 63 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 3888, y: 38, reached: false },
  { x: 7895, y: -82, reached: false },
  { x: 10843, y: -648, reached: false },
  { x: 13730, y: -766, reached: false },
  { x: 17514, y: -1015, reached: false },
  { x: 19137, y: -1297, reached: false }, // Final
];
