// Level 76 Data — "The Vertical Ledge"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 76";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 717, y: 303, width: 190, height: 22, bounce: true, bounceStrength: -18 },
  { x: 1324, y: 220, width: 169, height: 15, melt: true, meltDelay: 20 },
  { x: 1671, y: 128, width: 174, height: 21, melt: true, meltDelay: 20 },
  { x: 2029, y: 48, width: 169, height: 15 },
  { x: 2382, y: -31, width: 161, height: 22, melt: true, meltDelay: 20 },
  { x: 2960, y: -111, width: 142, height: 19, melt: true, meltDelay: 20 },
  { x: 3266, y: -111, width: 377, height: 21 },
  { x: 4064, y: -178, width: 227, height: 14, conveyor: true, conveyorSpeed: -2.17 },
  { x: 4731, y: -211, width: 173, height: 18, moveAxis: "x", moveRange: 80, moveSpeed: 0.054, movePhase: 0.33 },
  { x: 5117, y: -243, width: 204, height: 26 },
  { x: 5538, y: -256, width: 215, height: 20 },
  { x: 6203, y: -267, width: 48, height: 16 },
  { x: 6478, y: -267, width: 102, height: 23, bounce: true, bounceStrength: -16 },
  { x: 6580, y: -267, width: 280, height: 20 },
  { x: 7051, y: -282, width: 93, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 7342, y: -297, width: 228, height: 20 },
  { x: 7803, y: -277, width: 218, height: 30, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 8244, y: -288, width: 109, height: 27 },
  { x: 8566, y: -311, width: 180, height: 24 },
  { x: 8963, y: -328, width: 201, height: 27 },
  { x: 9595, y: -375, width: 51, height: 19 },
  { x: 9810, y: -375, width: 204, height: 17 },
  { x: 10441, y: -433, width: 78, height: 23 },
  { x: 10936, y: -512, width: 128, height: 17, conveyor: true, conveyorSpeed: -1.56 },
  { x: 11485, y: -587, width: 113, height: 22, melt: true, meltDelay: 20 },
  { x: 11767, y: -688, width: 62, height: 28, moveAxis: "x", moveRange: 128, moveSpeed: 0.055, movePhase: 1.56 },
  { x: 12004, y: -785, width: 167, height: 26, bounce: true, bounceStrength: -16 },
  { x: 12349, y: -872, width: 154, height: 26, melt: true, meltDelay: 20 },
  { x: 12667, y: -872, width: 259, height: 22 },
  { x: 13347, y: -943, width: 219, height: 29, melt: true, meltDelay: 20 },
  { x: 13764, y: -1002, width: 135, height: 21, melt: true, meltDelay: 20 },
  { x: 14339, y: -1032, width: 159, height: 24 },
  { x: 14725, y: -1032, width: 107, height: 23, moveAxis: "y", moveRange: 96, moveSpeed: 0.054, movePhase: 4.19 },
  { x: 15059, y: -1026, width: 161, height: 16, bounce: true, bounceStrength: -18 },
  { x: 15447, y: -1022, width: 78, height: 29, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 15689, y: -1022, width: 366, height: 27 },
  { x: 16288, y: -1007, width: 184, height: 23, conveyor: true, conveyorSpeed: -1.61 },
  { x: 16699, y: -1004, width: 125, height: 21 },
  { x: 17274, y: -1011, width: 75, height: 14, bounce: true, bounceStrength: -19 },
  { x: 17562, y: -1038, width: 214, height: 29, conveyor: true, conveyorSpeed: 1.8 },
  { x: 18216, y: -1069, width: 108, height: 22, moveAxis: "x", moveRange: 96, moveSpeed: 0.047, movePhase: 2.2 },
  { x: 18761, y: -1114, width: 223, height: 29 },
  { x: 19134, y: -1124, width: 395, height: 20 },
];

window.deadlyPlatforms = [
  { x: 11855, y: -718, width: 54, height: 14, moveAxis: "y", moveRange: 123, moveSpeed: 0.053, movePhase: 4.77 },
  { x: 14646, y: -990, width: 81, height: 18, moveAxis: "x", moveRange: 76, moveSpeed: 0.047, movePhase: 4.99 },
  { x: 2222, y: 56, width: 113, height: 20 },
  { x: 5348, y: -236, width: 181, height: 20 },
  { x: 5786, y: -249, width: 175, height: 20 },
  { x: 6273, y: -273, width: 60, height: 20 },
  { x: 8388, y: -295, width: 82, height: 20 },
  { x: 8785, y: -320, width: 157, height: 20 },
  { x: 9188, y: -320, width: 112, height: 20 },
  { x: 10544, y: -433, width: 60, height: 20 },
  { x: 14528, y: -1034, width: 137, height: 20 },
  { x: 19022, y: -1106, width: 124, height: 20 },
];

window.spikes = [
  { x: 2081, y: 48, size: 24 },
  { x: 2105, y: 48, size: 45 },
  { x: 5148, y: -243, size: 58 },
  { x: 5206, y: -243, size: 32 },
  { x: 5578, y: -256, size: 12 },
  { x: 5590, y: -256, size: 30 },
  { x: 5620, y: -256, size: 24 },
  { x: 5644, y: -256, size: 57 },
  { x: 8597, y: -311, size: 34 },
  { x: 8631, y: -311, size: 45 },
  { x: 8676, y: -311, size: 13 },
  { x: 8689, y: -311, size: 37 },
  { x: 9032, y: -328, size: 57 },
  { x: 9089, y: -328, size: 24 },
  { x: 9603, y: -375, size: 13 },
  { x: 10469, y: -433, size: 22 },
  { x: 14394, y: -1032, size: 46 },
  { x: 16728, y: -1004, size: 57 },
  { x: 16785, y: -1004, size: 29 },
  { x: 18816, y: -1114, size: 22 },
  { x: 18838, y: -1114, size: 45 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 3455, y: -141, reached: false },
  { x: 7402, y: -327, reached: false },
  { x: 9912, y: -405, reached: false },
  { x: 12797, y: -902, reached: false },
  { x: 15872, y: -1052, reached: false },
  { x: 19332, y: -1154, reached: false }, // Final
];
