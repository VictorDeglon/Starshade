// Level 75 Data — "Starshade's Ascension"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 75";
window.levelAccent = "#bfe6ff";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 543, y: 419, width: 135, height: 30, moveAxis: "x", moveRange: 105, moveSpeed: 0.058, movePhase: 0.78 },
  { x: 901, y: 414, width: 203, height: 16 },
  { x: 1321, y: 395, width: 96, height: 22 },
  { x: 1848, y: 346, width: 182, height: 28, moveAxis: "x", moveRange: 138, moveSpeed: 0.046, movePhase: 5.9 },
  { x: 2194, y: 346, width: 262, height: 28 },
  { x: 2631, y: 253, width: 177, height: 25, conveyor: true, conveyorSpeed: 1.72 },
  { x: 3206, y: 135, width: 189, height: 16 },
  { x: 3554, y: 20, width: 231, height: 26, moveAxis: "x", moveRange: 85, moveSpeed: 0.065, movePhase: 5.07 },
  { x: 3785, y: 20, width: 250, height: 20 },
  { x: 4233, y: 1, width: 90, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 4528, y: -13, width: 261, height: 20 },
  { x: 5216, y: -71, width: 182, height: 28, melt: true, meltDelay: 20 },
  { x: 5838, y: -105, width: 95, height: 20, melt: true, meltDelay: 20 },
  { x: 6383, y: -115, width: 227, height: 28, melt: true, meltDelay: 20 },
  { x: 6847, y: -78, width: 199, height: 28, moveAxis: "x", moveRange: 120, moveSpeed: 0.051, movePhase: 2.46 },
  { x: 7046, y: -78, width: 227, height: 20 },
  { x: 7459, y: -109, width: 111, height: 16, gated: true, gateId: "g75_0" },
  { x: 7611, y: -120, width: 249, height: 20 },
  { x: 8112, y: -54, width: 223, height: 24, bounce: true, bounceStrength: -19 },
  { x: 8587, y: 54, width: 60, height: 21, melt: true, meltDelay: 20 },
  { x: 8899, y: 173, width: 166, height: 28, moveAxis: "x", moveRange: 90, moveSpeed: 0.042, movePhase: 5.34 },
  { x: 9065, y: 173, width: 240, height: 20 },
  { x: 9502, y: 155, width: 93, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 9797, y: 135, width: 272, height: 20 },
  { x: 10321, y: 242, width: 119, height: 30, bounce: true, bounceStrength: -16 },
  { x: 10692, y: 316, width: 204, height: 24, bounce: true, bounceStrength: -16 },
  { x: 11142, y: 374, width: 176, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 11482, y: 374, width: 195, height: 15 },
  { x: 11900, y: 368, width: 45, height: 14 },
  { x: 12143, y: 314, width: 172, height: 29 },
  { x: 12503, y: 240, width: 123, height: 18 },
  { x: 12785, y: 128, width: 100, height: 30, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 12885, y: 128, width: 274, height: 20 },
  { x: 13336, y: 99, width: 101, height: 16, gated: true, gateId: "g75_1" },
  { x: 13500, y: 98, width: 237, height: 20 },
  { x: 14135, y: -22, width: 97, height: 25, conveyor: true, conveyorSpeed: -1.5 },
  { x: 14649, y: -103, width: 119, height: 25, bounce: true, bounceStrength: -18 },
  { x: 14956, y: -177, width: 94, height: 26 },
  { x: 15214, y: -177, width: 226, height: 27 },
  { x: 15886, y: -193, width: 58, height: 15 },
  { x: 16133, y: -179, width: 431, height: 20 },
];

window.deadlyPlatforms = [
  { x: 632, y: 362, width: 116, height: 17, moveAxis: "y", moveRange: 115, moveSpeed: 0.063, movePhase: 6.16 },
  { x: 1800, y: 381, width: 112, height: 18, moveAxis: "y", moveRange: 106, moveSpeed: 0.055, movePhase: 2.88 },
  { x: 6759, y: -115, width: 157, height: 23, moveAxis: "y", moveRange: 119, moveSpeed: 0.05, movePhase: 5.6 },
  { x: 8981, y: 147, width: 109, height: 23, moveAxis: "y", moveRange: 111, moveSpeed: 0.038, movePhase: 4.91 },
  { x: 1442, y: 403, width: 60, height: 20 },
  { x: 3426, y: 132, width: 163, height: 20 },
  { x: 11977, y: 364, width: 60, height: 20 },
  { x: 12336, y: 307, width: 115, height: 20 },
  { x: 12651, y: 241, width: 94, height: 20 },
  { x: 15077, y: -181, width: 84, height: 20 },
  { x: 15973, y: -184, width: 60, height: 20 },
];

window.spikes = [
  { x: 941, y: 414, size: 62 },
  { x: 1345, y: 395, size: 57 },
  { x: 3256, y: 135, size: 41 },
  { x: 12198, y: 314, size: 27 },
  { x: 12531, y: 240, size: 44 },
  { x: 14982, y: -177, size: 32 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2325, y: 316, reached: false },
  { x: 4588, y: -43, reached: false },
  { x: 7671, y: -150, reached: false },
  { x: 9857, y: 105, reached: false },
  { x: 11580, y: 344, reached: false },
  { x: 13560, y: 68, reached: false },
  { x: 15327, y: -207, reached: false },
  { x: 16349, y: -209, reached: false }, // Final
];

window.forceZones = [
  { x: 11492, y: 284, width: 175, height: 90, axis: "x", force: -0.205 },
  { x: 15224, y: -267, width: 206, height: 90, axis: "x", force: -0.208 },
];

window.lasers = [
  { x: 1181, y: 340, length: 152, width: 4, baseAngle: 1.83, sweepAngle: 0.73, period: 139, blinkPeriod: 0, onRatio: 0.5 },
  { x: 2897, y: 207, length: 167, width: 4, baseAngle: 4.19, sweepAngle: 0.68, period: 139, blinkPeriod: 0, onRatio: 0.5 },
  { x: 5492, y: -150, length: 145, width: 4, baseAngle: 2.05, sweepAngle: 0, period: 139, blinkPeriod: 93, onRatio: 0.5 },
  { x: 9136, y: 133, length: 227, width: 4, baseAngle: 5.18, sweepAngle: 0.56, period: 139, blinkPeriod: 0, onRatio: 0.5 },
  { x: 10525, y: 165, length: 219, width: 4, baseAngle: 4.97, sweepAngle: 0.94, period: 139, blinkPeriod: 0, onRatio: 0.5 },
  { x: 10995, y: 238, length: 105, width: 4, baseAngle: 3.63, sweepAngle: 1.1, period: 139, blinkPeriod: 0, onRatio: 0.5 },
  { x: 12408, y: 270, length: 116, width: 4, baseAngle: 0.14, sweepAngle: 0, period: 139, blinkPeriod: 93, onRatio: 0.5 },
  { x: 14312, y: -119, length: 203, width: 4, baseAngle: 1.47, sweepAngle: 0.57, period: 139, blinkPeriod: 0, onRatio: 0.5 },
  { x: 16010, y: -279, length: 157, width: 4, baseAngle: 1.46, sweepAngle: 0.88, period: 139, blinkPeriod: 0, onRatio: 0.5 },
];

window.fallers = [
  { x: 755, y: 303, size: 37, triggerX: 625 },
  { x: 1496, y: 277, size: 24, triggerX: 1328 },
  { x: 3873, y: -88, size: 36, triggerX: 3680 },
  { x: 7140, y: -191, size: 22, triggerX: 6954 },
  { x: 8403, y: -155, size: 51, triggerX: 8194 },
  { x: 12039, y: 258, size: 26, triggerX: 11838 },
];

window.switches = [
  { x: 7251, y: -108, radius: 26, gateId: "g75_0" },
  { x: 13137, y: 98, radius: 26, gateId: "g75_1" },
];
