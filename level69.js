// Level 69 Data — "Molten Meridian"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 69";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 750, y: 378, width: 137, height: 14, melt: true, meltDelay: 20 },
  { x: 1337, y: 371, width: 139, height: 27, conveyor: true, conveyorSpeed: 1.11 },
  { x: 1680, y: 321, width: 120, height: 19, moveAxis: "y", moveRange: 140, moveSpeed: 0.046, movePhase: 0.55 },
  { x: 1964, y: 321, width: 332, height: 30 },
  { x: 2713, y: 236, width: 74, height: 15, melt: true, meltDelay: 20 },
  { x: 3185, y: 118, width: 118, height: 19, bounce: true, bounceStrength: -18 },
  { x: 3705, y: 8, width: 180, height: 30 },
  { x: 4296, y: -79, width: 209, height: 14, melt: true, meltDelay: 20 },
  { x: 4505, y: -79, width: 251, height: 20 },
  { x: 4957, y: -89, width: 106, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 5246, y: -111, width: 263, height: 20 },
  { x: 5946, y: -152, width: 48, height: 20 },
  { x: 6440, y: -166, width: 66, height: 19 },
  { x: 6743, y: -138, width: 163, height: 27 },
  { x: 7070, y: -138, width: 344, height: 30 },
  { x: 7660, y: -74, width: 71, height: 15, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 7983, y: 27, width: 105, height: 23, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 8340, y: 139, width: 157, height: 22, melt: true, meltDelay: 20 },
  { x: 8497, y: 139, width: 262, height: 20 },
  { x: 8960, y: 112, width: 97, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 9248, y: 87, width: 279, height: 20 },
  { x: 9779, y: 183, width: 162, height: 17, moveAxis: "y", moveRange: 82, moveSpeed: 0.044, movePhase: 2.58 },
  { x: 10193, y: 262, width: 165, height: 24, moveAxis: "y", moveRange: 118, moveSpeed: 0.061, movePhase: 5.31 },
  { x: 10604, y: 319, width: 187, height: 21, melt: true, meltDelay: 20 },
  { x: 10955, y: 319, width: 356, height: 15 },
  { x: 11757, y: 301, width: 72, height: 21 },
  { x: 12260, y: 250, width: 167, height: 14, moveAxis: "x", moveRange: 126, moveSpeed: 0.058, movePhase: 1.51 },
  { x: 12611, y: 166, width: 124, height: 17, moveAxis: "y", moveRange: 122, moveSpeed: 0.063, movePhase: 4.01 },
  { x: 13152, y: 84, width: 97, height: 17 },
  { x: 13413, y: 84, width: 237, height: 21 },
  { x: 14061, y: -10, width: 230, height: 28, melt: true, meltDelay: 20 },
  { x: 14698, y: -115, width: 203, height: 23, moveAxis: "x", moveRange: 84, moveSpeed: 0.057, movePhase: 6.03 },
  { x: 15079, y: -204, width: 208, height: 21 },
  { x: 15718, y: -255, width: 59, height: 25, moveAxis: "y", moveRange: 140, moveSpeed: 0.057, movePhase: 4.95 },
  { x: 15941, y: -255, width: 269, height: 21 },
  { x: 16374, y: -251, width: 416, height: 20 },
];

window.deadlyPlatforms = [
  { x: 9858, y: 126, width: 90, height: 18, moveAxis: "x", moveRange: 80, moveSpeed: 0.038, movePhase: 3.78 },
  { x: 12679, y: 127, width: 92, height: 23, moveAxis: "x", moveRange: 123, moveSpeed: 0.069, movePhase: 5.94 },
  { x: 14638, y: -79, width: 175, height: 25, moveAxis: "y", moveRange: 105, moveSpeed: 0.063, movePhase: 5.08 },
  { x: 15666, y: -206, width: 50, height: 22, moveAxis: "x", moveRange: 124, moveSpeed: 0.063, movePhase: 2.37 },
  { x: 3920, y: -2, width: 150, height: 20 },
  { x: 6014, y: -161, width: 60, height: 20 },
  { x: 6527, y: -172, width: 60, height: 20 },
  { x: 11854, y: 297, width: 60, height: 20 },
  { x: 13286, y: 90, width: 86, height: 20 },
  { x: 15319, y: -203, width: 117, height: 20 },
];

window.spikes = [
  { x: 3753, y: 8, size: 43 },
  { x: 3796, y: 8, size: 56 },
  { x: 5957, y: -152, size: 27 },
  { x: 6462, y: -166, size: 25 },
  { x: 6763, y: -138, size: 58 },
  { x: 6821, y: -138, size: 14 },
  { x: 6835, y: -138, size: 14 },
  { x: 11781, y: 301, size: 35 },
  { x: 13171, y: 84, size: 56 },
  { x: 15123, y: -204, size: 21 },
  { x: 15144, y: -204, size: 14 },
  { x: 15158, y: -204, size: 45 },
  { x: 15203, y: -204, size: 31 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2130, y: 291, reached: false },
  { x: 5306, y: -141, reached: false },
  { x: 7242, y: -168, reached: false },
  { x: 9308, y: 57, reached: false },
  { x: 11133, y: 289, reached: false },
  { x: 13532, y: 54, reached: false },
  { x: 16076, y: -285, reached: false },
  { x: 16582, y: -281, reached: false }, // Final
];
