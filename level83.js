// Level 83 Data — "The Fracturing Sky"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 83";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 478, y: 291, width: 118, height: 21 },
  { x: 1007, y: 196, width: 106, height: 29, bounce: true, bounceStrength: -20 },
  { x: 1282, y: 95, width: 161, height: 23, melt: true, meltDelay: 20 },
  { x: 1854, y: 7, width: 112, height: 17, bounce: true, bounceStrength: -16 },
  { x: 2150, y: -78, width: 68, height: 21, conveyor: true, conveyorSpeed: 0.92 },
  { x: 2382, y: -78, width: 216, height: 22 },
  { x: 3035, y: -116, width: 150, height: 29, moveAxis: "y", moveRange: 123, moveSpeed: 0.058, movePhase: 5.21 },
  { x: 3625, y: -148, width: 125, height: 29 },
  { x: 4196, y: -165, width: 182, height: 16, bounce: true, bounceStrength: -19 },
  { x: 4605, y: -164, width: 127, height: 18, conveyor: true, conveyorSpeed: -1.31 },
  { x: 4955, y: -165, width: 144, height: 21, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 5099, y: -165, width: 288, height: 20 },
  { x: 5595, y: -183, width: 92, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 5885, y: -207, width: 278, height: 20 },
  { x: 6396, y: -189, width: 162, height: 20 },
  { x: 7004, y: -206, width: 179, height: 23, moveAxis: "y", moveRange: 128, moveSpeed: 0.049, movePhase: 3.47 },
  { x: 7629, y: -224, width: 104, height: 17 },
  { x: 7937, y: -270, width: 79, height: 18, conveyor: true, conveyorSpeed: 1.04 },
  { x: 8453, y: -313, width: 120, height: 15 },
  { x: 8767, y: -376, width: 80, height: 29, bounce: true, bounceStrength: -18 },
  { x: 8847, y: -376, width: 289, height: 20 },
  { x: 9328, y: -396, width: 104, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 9608, y: -410, width: 262, height: 20 },
  { x: 10287, y: -495, width: 174, height: 27, moveAxis: "y", moveRange: 93, moveSpeed: 0.066, movePhase: 3.85 },
  { x: 10872, y: -585, width: 72, height: 25, moveAxis: "x", moveRange: 98, moveSpeed: 0.048, movePhase: 1.35 },
  { x: 11361, y: -671, width: 108, height: 25, moveAxis: "x", moveRange: 116, moveSpeed: 0.044, movePhase: 0.58 },
  { x: 11634, y: -779, width: 197, height: 30 },
  { x: 12238, y: -875, width: 67, height: 19, moveAxis: "y", moveRange: 127, moveSpeed: 0.059, movePhase: 2.17 },
  { x: 12499, y: -942, width: 185, height: 25 },
  { x: 12848, y: -942, width: 200, height: 26 },
  { x: 13252, y: -988, width: 190, height: 16 },
  { x: 13655, y: -1015, width: 204, height: 15, bounce: true, bounceStrength: -16 },
  { x: 14309, y: -1023, width: 224, height: 26, conveyor: true, conveyorSpeed: 2.04 },
  { x: 14760, y: -1020, width: 50, height: 28, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 15037, y: -1009, width: 92, height: 30, melt: true, meltDelay: 20 },
  { x: 15362, y: -991, width: 142, height: 26, melt: true, meltDelay: 20 },
  { x: 15954, y: -999, width: 112, height: 25 },
  { x: 16230, y: -999, width: 298, height: 25 },
  { x: 16968, y: -1028, width: 124, height: 23, moveAxis: "x", moveRange: 106, moveSpeed: 0.07, movePhase: 0.08 },
  { x: 17300, y: -1066, width: 94, height: 21 },
  { x: 17825, y: -1116, width: 163, height: 18 },
  { x: 18419, y: -1171, width: 189, height: 16 },
  { x: 19019, y: -1258, width: 146, height: 28, bounce: true, bounceStrength: -16 },
  { x: 19576, y: -1353, width: 47, height: 23 },
  { x: 19818, y: -1343, width: 403, height: 20 },
];

window.deadlyPlatforms = [
  { x: 7079, y: -253, width: 150, height: 20, moveAxis: "x", moveRange: 108, moveSpeed: 0.043, movePhase: 5.03 },
  { x: 12285, y: -835, width: 50, height: 22, moveAxis: "x", moveRange: 98, moveSpeed: 0.061, movePhase: 0.11 },
  { x: 628, y: 296, width: 69, height: 20 },
  { x: 3771, y: -144, width: 94, height: 20 },
  { x: 6596, y: -197, width: 127, height: 20 },
  { x: 7766, y: -219, width: 82, height: 20 },
  { x: 8596, y: -321, width: 99, height: 20 },
  { x: 11853, y: -771, width: 152, height: 20 },
  { x: 12704, y: -932, width: 113, height: 20 },
  { x: 13465, y: -982, width: 148, height: 20 },
  { x: 16101, y: -999, width: 91, height: 20 },
  { x: 17432, y: -1066, width: 60, height: 20 },
  { x: 18642, y: -1172, width: 151, height: 20 },
  { x: 19657, y: -1356, width: 60, height: 20 },
];

window.spikes = [
  { x: 521, y: 291, size: 24 },
  { x: 3641, y: -148, size: 12 },
  { x: 6429, y: -189, size: 35 },
  { x: 6464, y: -189, size: 17 },
  { x: 7657, y: -224, size: 16 },
  { x: 8470, y: -313, size: 57 },
  { x: 8527, y: -313, size: 28 },
  { x: 12554, y: -942, size: 40 },
  { x: 13320, y: -988, size: 25 },
  { x: 13345, y: -988, size: 37 },
  { x: 15979, y: -999, size: 62 },
  { x: 17312, y: -1066, size: 34 },
  { x: 17848, y: -1116, size: 55 },
  { x: 17903, y: -1116, size: 50 },
  { x: 18457, y: -1171, size: 25 },
  { x: 19584, y: -1353, size: 31 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2490, y: -108, reached: false },
  { x: 5945, y: -237, reached: false },
  { x: 9668, y: -440, reached: false },
  { x: 12948, y: -972, reached: false },
  { x: 16379, y: -1029, reached: false },
  { x: 20020, y: -1373, reached: false }, // Final
];
