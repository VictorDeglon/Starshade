// Level 43 Data — "Duskbound Causeway"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 43";
window.levelAccent = "#b98fff";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 551, y: 463, width: 139, height: 19, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 941, y: 533, width: 99, height: 28, melt: true, meltDelay: 20 },
  { x: 1281, y: 576, width: 58, height: 27, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 1571, y: 589, width: 134, height: 27, conveyor: true, conveyorSpeed: -1.11 },
  { x: 1869, y: 589, width: 313, height: 27 },
  { x: 2611, y: 539, width: 77, height: 22, moveAxis: "x", moveRange: 113, moveSpeed: 0.049, movePhase: 3.39 },
  { x: 2875, y: 463, width: 79, height: 19 },
  { x: 3137, y: 382, width: 125, height: 17 },
  { x: 3667, y: 279, width: 63, height: 24 },
  { x: 3730, y: 279, width: 246, height: 20 },
  { x: 4180, y: 262, width: 91, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.39530612244897956 },
  { x: 4479, y: 248, width: 265, height: 20 },
  { x: 5159, y: 163, width: 228, height: 18 },
  { x: 5816, y: 110, width: 112, height: 27, moveAxis: "x", moveRange: 102, moveSpeed: 0.055, movePhase: 2.64 },
  { x: 6140, y: 80, width: 227, height: 14 },
  { x: 6593, y: 81, width: 106, height: 28, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 6863, y: 81, width: 376, height: 27 },
  { x: 7474, y: 118, width: 161, height: 25, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 7886, y: 192, width: 50, height: 14 },
  { x: 8187, y: 268, width: 94, height: 30, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 8445, y: 268, width: 314, height: 18 },
  { x: 9010, y: 367, width: 76, height: 23, bounce: true, bounceStrength: -17 },
  { x: 9337, y: 459, width: 148, height: 24, melt: true, meltDelay: 20 },
  { x: 9726, y: 503, width: 233, height: 21, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 10194, y: 532, width: 147, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 10505, y: 532, width: 321, height: 30 },
  { x: 11270, y: 513, width: 227, height: 24, bounce: true, bounceStrength: -16 },
  { x: 11926, y: 463, width: 65, height: 14 },
  { x: 12416, y: 404, width: 158, height: 30, melt: true, meltDelay: 20 },
  { x: 12983, y: 313, width: 110, height: 20 },
  { x: 13273, y: 316, width: 433, height: 20 },
];

window.deadlyPlatforms = [
  { x: 2663, y: 583, width: 55, height: 16, moveAxis: "y", moveRange: 85, moveSpeed: 0.059, movePhase: 5.83 },
  { x: 3298, y: 383, width: 95, height: 20 },
  { x: 5420, y: 169, width: 149, height: 20 },
  { x: 6394, y: 86, width: 163, height: 20 },
  { x: 7956, y: 196, width: 60, height: 20 },
  { x: 12030, y: 468, width: 60, height: 20 },
];

window.spikes = [
  { x: 2892, y: 463, size: 12 },
  { x: 2904, y: 463, size: 38 },
  { x: 3155, y: 382, size: 23 },
  { x: 3178, y: 382, size: 51 },
  { x: 3682, y: 279, size: 25 },
  { x: 6178, y: 80, size: 14 },
  { x: 11936, y: 463, size: 47 },
  { x: 13021, y: 313, size: 33 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2026, y: 559, reached: false },
  { x: 4539, y: 218, reached: false },
  { x: 7051, y: 51, reached: false },
  { x: 8602, y: 238, reached: false },
  { x: 10666, y: 502, reached: false },
  { x: 13490, y: 286, reached: false }, // Final
];

window.forceZones = [
  { x: 8455, y: 178, width: 294, height: 90, axis: "x", force: 0.173 },
];
