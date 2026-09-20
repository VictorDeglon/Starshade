// Level 65 Data — "Crossfire Causeway"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Crossfire Causeway";
window.levelAccent = "#9dff4d";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 475, y: 287, width: 157, height: 21 },
  { x: 836, y: 238, width: 139, height: 22, melt: true, meltDelay: 20 },
  { x: 1179, y: 190, width: 153, height: 19 },
  { x: 1549, y: 172, width: 231, height: 24, melt: true, meltDelay: 20 },
  { x: 1944, y: 172, width: 396, height: 24 },
  { x: 2592, y: 237, width: 226, height: 19, conveyor: true, conveyorSpeed: 1.61 },
  { x: 3070, y: 304, width: 162, height: 15, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 3484, y: 397, width: 160, height: 14, melt: true, meltDelay: 20 },
  { x: 3808, y: 397, width: 197, height: 20 },
  { x: 4257, y: 490, width: 218, height: 14, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 4727, y: 578, width: 106, height: 26, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 5079, y: 636, width: 177, height: 24, moveAxis: "x", moveRange: 136, moveSpeed: 0.05, movePhase: 4.51 },
  { x: 5256, y: 636, width: 250, height: 20 },
  { x: 5711, y: 617, width: 95, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35040816326530605 },
  { x: 6007, y: 600, width: 239, height: 20 },
  { x: 6479, y: 619, width: 130, height: 25, moveAxis: "x", moveRange: 91, moveSpeed: 0.057, movePhase: 5.23 },
  { x: 7046, y: 583, width: 164, height: 17, melt: true, meltDelay: 20 },
  { x: 7418, y: 542, width: 121, height: 25, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 7539, y: 542, width: 256, height: 20 },
  { x: 7962, y: 507, width: 96, height: 16, gated: true, gateId: "g65_0" },
  { x: 8133, y: 503, width: 226, height: 20 },
  { x: 8770, y: 413, width: 45, height: 15, melt: true, meltDelay: 20 },
  { x: 8990, y: 320, width: 103, height: 20, moveAxis: "y", moveRange: 131, moveSpeed: 0.055, movePhase: 4.47 },
  { x: 9271, y: 229, width: 85, height: 29 },
  { x: 9534, y: 138, width: 89, height: 14, bounce: true, bounceStrength: -17 },
  { x: 9787, y: 138, width: 268, height: 28 },
  { x: 10259, y: 92, width: 65, height: 22, moveAxis: "y", moveRange: 129, moveSpeed: 0.062, movePhase: 4.8 },
  { x: 10770, y: 73, width: 86, height: 15 },
  { x: 11089, y: 90, width: 152, height: 22, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 11405, y: 90, width: 394, height: 29 },
  { x: 12051, y: 163, width: 214, height: 30, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 12517, y: 243, width: 71, height: 30, melt: true, meltDelay: 20 },
  { x: 12840, y: 352, width: 189, height: 16, conveyor: true, conveyorSpeed: -1.06 },
  { x: 13193, y: 352, width: 395, height: 24 },
  { x: 13740, y: 340, width: 380, height: 20 },
];

window.deadlyPlatforms = [
  { x: 5008, y: 603, width: 99, height: 15, moveAxis: "y", moveRange: 164, moveSpeed: 0.053, movePhase: 5.34 },
  { x: 6390, y: 650, width: 83, height: 20, moveAxis: "y", moveRange: 82, moveSpeed: 0.068, movePhase: 5.79 },
  { x: 9077, y: 370, width: 76, height: 18, moveAxis: "x", moveRange: 143, moveSpeed: 0.064, movePhase: 1.86 },
  { x: 10323, y: 60, width: 50, height: 23, moveAxis: "x", moveRange: 148, moveSpeed: 0.058, movePhase: 4.33 },
  { x: 657, y: 280, width: 115, height: 20 },
  { x: 9385, y: 221, width: 75, height: 20 },
  { x: 10882, y: 68, width: 73, height: 20 },
];

window.spikes = [
  { x: 1212, y: 190, size: 51 },
  { x: 1263, y: 190, size: 52 },
  { x: 9299, y: 229, size: 51 },
  { x: 10797, y: 73, size: 48 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2142, y: 142, reached: false },
  { x: 3907, y: 367, reached: false },
  { x: 6067, y: 570, reached: false },
  { x: 8193, y: 473, reached: false },
  { x: 9921, y: 108, reached: false },
  { x: 11602, y: 60, reached: false },
  { x: 13391, y: 322, reached: false },
  { x: 13930, y: 310, reached: false }, // Final
];

window.forceZones = [
  { x: 1954, y: 82, width: 376, height: 90, axis: "x", force: -0.15 },
  { x: 3818, y: 307, width: 177, height: 90, axis: "x", force: 0.216 },
];

window.lasers = [
  { x: 693, y: 241, length: 105, width: 4, baseAngle: 1.85, sweepAngle: 0.8, period: 145, blinkPeriod: 0, onRatio: 0.5 },
  { x: 3706, y: 339, length: 197, width: 4, baseAngle: 5.49, sweepAngle: 0.98, period: 145, blinkPeriod: 0, onRatio: 0.5 },
  { x: 4544, y: 434, length: 195, width: 4, baseAngle: 3.85, sweepAngle: 0, period: 145, blinkPeriod: 98, onRatio: 0.5 },
  { x: 4901, y: 504, length: 191, width: 4, baseAngle: 5.76, sweepAngle: 0.55, period: 145, blinkPeriod: 0, onRatio: 0.5 },
  { x: 7638, y: 464, length: 239, width: 4, baseAngle: 5.3, sweepAngle: 0, period: 145, blinkPeriod: 98, onRatio: 0.5 },
  { x: 9177, y: 261, length: 232, width: 4, baseAngle: 5.51, sweepAngle: 0.98, period: 145, blinkPeriod: 0, onRatio: 0.5 },
  { x: 11340, y: 8, length: 162, width: 4, baseAngle: 1.44, sweepAngle: 0, period: 145, blinkPeriod: 98, onRatio: 0.5 },
];

window.fallers = [
  { x: 1875, y: 80, size: 30, triggerX: 1718 },
  { x: 13107, y: 251, size: 49, triggerX: 12948 },
];

window.switches = [
  { x: 7773, y: 512, radius: 26, gateId: "g65_0" },
];
