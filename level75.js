// Level 75 Data — "Starshade's Ascension"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 75";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 543, y: 419, width: 135, height: 30, conveyor: true, conveyorSpeed: -1.63 },
  { x: 901, y: 414, width: 203, height: 16 },
  { x: 1321, y: 395, width: 96, height: 22, moveAxis: "y", moveRange: 79, moveSpeed: 0.044, movePhase: 5.61 },
  { x: 1848, y: 346, width: 182, height: 28, melt: true, meltDelay: 20 },
  { x: 2194, y: 346, width: 371, height: 20 },
  { x: 2967, y: 233, width: 189, height: 25 },
  { x: 3315, y: 118, width: 135, height: 26 },
  { x: 3609, y: 7, width: 196, height: 30 },
  { x: 4222, y: -76, width: 49, height: 17, moveAxis: "x", moveRange: 138, moveSpeed: 0.046, movePhase: 5.9 },
  { x: 4271, y: -76, width: 254, height: 20 },
  { x: 4728, y: -101, width: 101, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 5009, y: -112, width: 263, height: 20 },
  { x: 5703, y: -162, width: 61, height: 18, conveyor: true, conveyorSpeed: 1.72 },
  { x: 5991, y: -160, width: 69, height: 30, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 6293, y: -147, width: 202, height: 27, moveAxis: "x", moveRange: 85, moveSpeed: 0.065, movePhase: 5.07 },
  { x: 6738, y: -105, width: 200, height: 21, melt: true, meltDelay: 20 },
  { x: 7102, y: -105, width: 262, height: 26 },
  { x: 7616, y: -21, width: 223, height: 24, melt: true, meltDelay: 20 },
  { x: 8091, y: 96, width: 60, height: 21, melt: true, meltDelay: 20 },
  { x: 8403, y: 213, width: 166, height: 28, moveAxis: "x", moveRange: 120, moveSpeed: 0.051, movePhase: 2.46 },
  { x: 8569, y: 213, width: 240, height: 20 },
  { x: 9006, y: 195, width: 93, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 9301, y: 175, width: 272, height: 20 },
  { x: 9825, y: 261, width: 119, height: 30, bounce: true, bounceStrength: -19 },
  { x: 10187, y: 307, width: 204, height: 24, melt: true, meltDelay: 20 },
  { x: 10628, y: 333, width: 176, height: 20, moveAxis: "x", moveRange: 90, moveSpeed: 0.042, movePhase: 5.34 },
  { x: 10968, y: 333, width: 314, height: 15 },
  { x: 11713, y: 282, width: 201, height: 14, bounce: true, bounceStrength: -16 },
  { x: 12092, y: 193, width: 158, height: 25, bounce: true, bounceStrength: -16 },
  { x: 12657, y: 88, width: 213, height: 20 },
  { x: 13034, y: 88, width: 351, height: 18 },
  { x: 13787, y: -23, width: 73, height: 29 },
  { x: 14035, y: -121, width: 171, height: 20 },
  { x: 14617, y: -210, width: 97, height: 25 },
  { x: 14878, y: -210, width: 266, height: 25 },
  { x: 15361, y: -224, width: 94, height: 26 },
  { x: 15646, y: -239, width: 385, height: 20 },
];

window.deadlyPlatforms = [
  { x: 1370, y: 343, width: 73, height: 19, moveAxis: "x", moveRange: 74, moveSpeed: 0.038, movePhase: 1.77 },
  { x: 4300, y: -36, width: 50, height: 24, moveAxis: "y", moveRange: 126, moveSpeed: 0.052, movePhase: 3.77 },
  { x: 8355, y: 248, width: 102, height: 18, moveAxis: "y", moveRange: 92, moveSpeed: 0.061, movePhase: 2.88 },
  { x: 1141, y: 410, width: 178, height: 20 },
  { x: 3191, y: 235, width: 158, height: 20 },
  { x: 3474, y: 119, width: 115, height: 20 },
  { x: 3836, y: 8, width: 108, height: 20 },
  { x: 12902, y: 84, width: 138, height: 20 },
  { x: 14245, y: -127, width: 104, height: 20 },
  { x: 14749, y: -213, width: 62, height: 20 },
  { x: 15490, y: -218, width: 60, height: 20 },
];

window.spikes = [
  { x: 941, y: 414, size: 29 },
  { x: 970, y: 414, size: 47 },
  { x: 1017, y: 414, size: 51 },
  { x: 3003, y: 233, size: 52 },
  { x: 3055, y: 233, size: 62 },
  { x: 3363, y: 118, size: 57 },
  { x: 3677, y: 7, size: 18 },
  { x: 3695, y: 7, size: 42 },
  { x: 12685, y: 88, size: 36 },
  { x: 12721, y: 88, size: 15 },
  { x: 12736, y: 88, size: 25 },
  { x: 12761, y: 88, size: 52 },
  { x: 13810, y: -23, size: 27 },
  { x: 14091, y: -121, size: 17 },
  { x: 14108, y: -121, size: 32 },
  { x: 14140, y: -121, size: 34 },
  { x: 14632, y: -210, size: 30 },
  { x: 14662, y: -210, size: 45 },
  { x: 15375, y: -224, size: 46 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2380, y: 316, reached: false },
  { x: 5069, y: -142, reached: false },
  { x: 7233, y: -135, reached: false },
  { x: 9361, y: 145, reached: false },
  { x: 11125, y: 303, reached: false },
  { x: 13210, y: 58, reached: false },
  { x: 15011, y: -240, reached: false },
  { x: 15839, y: -269, reached: false }, // Final
];
