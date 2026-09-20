// Level 95 Data — "Mirror's End"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Mirror's End";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 475, y: 286, width: 208, height: 22, bounce: true, bounceStrength: -17 },
  { x: 1090, y: 182, width: 170, height: 16, melt: true, meltDelay: 20 },
  { x: 1667, y: 77, width: 143, height: 18, conveyor: true, conveyorSpeed: -1.47 },
  { x: 2221, y: -18, width: 75, height: 30 },
  { x: 2471, y: -111, width: 150, height: 20, moveAxis: "x", moveRange: 124, moveSpeed: 0.06, movePhase: 2.93 },
  { x: 3038, y: -189, width: 214, height: 23, bounce: true, bounceStrength: -19 },
  { x: 3436, y: -273, width: 164, height: 20, melt: true, meltDelay: 20 },
  { x: 3764, y: -273, width: 215, height: 18 },
  { x: 4187, y: -308, width: 194, height: 26 },
  { x: 4821, y: -335, width: 49, height: 29, conveyor: true, conveyorSpeed: 1.49 },
  { x: 5093, y: -342, width: 226, height: 17, bounce: true, bounceStrength: -18 },
  { x: 5546, y: -338, width: 67, height: 22, moveAxis: "x", moveRange: 149, moveSpeed: 0.049, movePhase: 3.31 },
  { x: 5836, y: -341, width: 224, height: 23, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 6060, y: -341, width: 251, height: 20 },
  { x: 6519, y: -353, width: 99, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 6817, y: -376, width: 261, height: 20 },
  { x: 7301, y: -379, width: 65, height: 14, melt: true, meltDelay: 20 },
  { x: 7589, y: -387, width: 60, height: 15 },
  { x: 8095, y: -409, width: 66, height: 26, moveAxis: "x", moveRange: 120, moveSpeed: 0.062, movePhase: 5.08 },
  { x: 8374, y: -438, width: 52, height: 14, melt: true, meltDelay: 20 },
  { x: 8630, y: -490, width: 97, height: 14, melt: true, meltDelay: 20 },
  { x: 8727, y: -490, width: 240, height: 20 },
  { x: 9171, y: -518, width: 90, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 9465, y: -540, width: 260, height: 20 },
  { x: 10136, y: -628, width: 77, height: 28, moveAxis: "y", moveRange: 151, moveSpeed: 0.052, movePhase: 1.73 },
  { x: 10388, y: -724, width: 156, height: 18, melt: true, meltDelay: 20 },
  { x: 10951, y: -828, width: 189, height: 17, melt: true, meltDelay: 20 },
  { x: 11318, y: -916, width: 68, height: 29, moveAxis: "x", moveRange: 135, moveSpeed: 0.049, movePhase: 2.37 },
  { x: 11561, y: -1014, width: 218, height: 15, melt: true, meltDelay: 20 },
  { x: 11957, y: -1103, width: 63, height: 25 },
  { x: 12184, y: -1103, width: 229, height: 28 },
  { x: 12607, y: -1171, width: 168, height: 19, moveAxis: "x", moveRange: 153, moveSpeed: 0.077, movePhase: 4.45 },
  { x: 12979, y: -1219, width: 109, height: 18, melt: true, meltDelay: 20 },
  { x: 13528, y: -1253, width: 229, height: 19, melt: true, meltDelay: 20 },
  { x: 14203, y: -1275, width: 174, height: 16, moveAxis: "x", moveRange: 105, moveSpeed: 0.05, movePhase: 0.46 },
  { x: 14594, y: -1292, width: 52, height: 24, moveAxis: "x", moveRange: 139, moveSpeed: 0.068, movePhase: 2.04 },
  { x: 14873, y: -1290, width: 228, height: 21, melt: true, meltDelay: 20 },
  { x: 15328, y: -1279, width: 158, height: 24, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 15650, y: -1279, width: 266, height: 17 },
  { x: 16143, y: -1279, width: 221, height: 18 },
  { x: 16810, y: -1302, width: 98, height: 21, moveAxis: "y", moveRange: 126, moveSpeed: 0.071, movePhase: 2.68 },
  { x: 17112, y: -1347, width: 54, height: 16 },
  { x: 17603, y: -1385, width: 231, height: 29, melt: true, meltDelay: 20 },
  { x: 18255, y: -1455, width: 203, height: 19, conveyor: true, conveyorSpeed: -1.77 },
  { x: 18648, y: -1465, width: 402, height: 20 },
];

window.deadlyPlatforms = [
  { x: 2550, y: -139, width: 84, height: 21, moveAxis: "y", moveRange: 152, moveSpeed: 0.062, movePhase: 4.22 },
  { x: 5466, y: -391, width: 52, height: 22, moveAxis: "y", moveRange: 137, moveSpeed: 0.044, movePhase: 0.27 },
  { x: 8160, y: -352, width: 50, height: 14, moveAxis: "y", moveRange: 131, moveSpeed: 0.077, movePhase: 4.57 },
  { x: 10053, y: -679, width: 50, height: 18, moveAxis: "x", moveRange: 179, moveSpeed: 0.054, movePhase: 3.25 },
  { x: 11381, y: -963, width: 50, height: 22, moveAxis: "y", moveRange: 124, moveSpeed: 0.044, movePhase: 0.74 },
  { x: 12695, y: -1230, width: 99, height: 16, moveAxis: "y", moveRange: 157, moveSpeed: 0.079, movePhase: 0.91 },
  { x: 14261, y: -1314, width: 118, height: 21, moveAxis: "y", moveRange: 109, moveSpeed: 0.051, movePhase: 1.66 },
  { x: 2323, y: -27, width: 60, height: 20 },
  { x: 4408, y: -305, width: 166, height: 20 },
  { x: 7679, y: -390, width: 60, height: 20 },
  { x: 12042, y: -1112, width: 60, height: 20 },
  { x: 16401, y: -1270, width: 186, height: 20 },
  { x: 17202, y: -1349, width: 60, height: 20 },
];

window.spikes = [
  { x: 2235, y: -18, size: 14 },
  { x: 2249, y: -18, size: 33 },
  { x: 4217, y: -308, size: 36 },
  { x: 4253, y: -308, size: 27 },
  { x: 4280, y: -308, size: 29 },
  { x: 4309, y: -308, size: 27 },
  { x: 11970, y: -1103, size: 26 },
  { x: 16194, y: -1279, size: 38 },
  { x: 16232, y: -1279, size: 39 },
  { x: 16271, y: -1279, size: 45 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 3872, y: -303, reached: false },
  { x: 6877, y: -406, reached: false },
  { x: 9525, y: -570, reached: false },
  { x: 12299, y: -1133, reached: false },
  { x: 15783, y: -1309, reached: false },
  { x: 18849, y: -1495, reached: false }, // Final
];
