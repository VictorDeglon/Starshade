// Level 67 Data — "Starbound Furrow"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 67";
window.levelAccent = "#9dff4d";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 552, y: 470, width: 200, height: 15, conveyor: true, conveyorSpeed: -1.05 },
  { x: 1004, y: 585, width: 61, height: 19, melt: true, meltDelay: 20 },
  { x: 1317, y: 692, width: 58, height: 15, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 1627, y: 801, width: 173, height: 17, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 1964, y: 801, width: 387, height: 17 },
  { x: 2597, y: 861, width: 153, height: 18, bounce: true, bounceStrength: -17 },
  { x: 2983, y: 875, width: 215, height: 16, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 3648, y: 865, width: 56, height: 29, melt: true, meltDelay: 20 },
  { x: 4144, y: 833, width: 215, height: 16, bounce: true, bounceStrength: -17 },
  { x: 4523, y: 833, width: 238, height: 15 },
  { x: 4945, y: 750, width: 94, height: 28, melt: true, meltDelay: 20 },
  { x: 5208, y: 647, width: 173, height: 20 },
  { x: 5536, y: 531, width: 230, height: 26 },
  { x: 6168, y: 422, width: 171, height: 24 },
  { x: 6339, y: 422, width: 252, height: 20 },
  { x: 6754, y: 394, width: 98, height: 16, gated: true, gateId: "g67_0" },
  { x: 6932, y: 389, width: 218, height: 20 },
  { x: 7344, y: 319, width: 173, height: 17, moveAxis: "x", moveRange: 112, moveSpeed: 0.059, movePhase: 5.52 },
  { x: 7963, y: 301, width: 187, height: 23, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 8383, y: 321, width: 189, height: 29, bounce: true, bounceStrength: -20 },
  { x: 8815, y: 371, width: 81, height: 30, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 9060, y: 371, width: 184, height: 19 },
  { x: 9496, y: 460, width: 78, height: 24, bounce: true, bounceStrength: -18 },
  { x: 9826, y: 572, width: 59, height: 29, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 10137, y: 667, width: 79, height: 15, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 10380, y: 667, width: 342, height: 17 },
  { x: 10974, y: 761, width: 233, height: 16 },
  { x: 11453, y: 812, width: 220, height: 21, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 11906, y: 832, width: 108, height: 16, melt: true, meltDelay: 20 },
  { x: 12178, y: 832, width: 373, height: 15 },
  { x: 12764, y: 804, width: 62, height: 20, moveAxis: "y", moveRange: 92, moveSpeed: 0.045, movePhase: 2.54 },
  { x: 13014, y: 733, width: 176, height: 18 },
  { x: 13607, y: 651, width: 228, height: 29, melt: true, meltDelay: 20 },
  { x: 14005, y: 664, width: 432, height: 20 },
];

window.deadlyPlatforms = [
  { x: 12820, y: 746, width: 55, height: 18, moveAxis: "x", moveRange: 93, moveSpeed: 0.048, movePhase: 2.02 },
  { x: 5409, y: 649, width: 99, height: 20 },
  { x: 5792, y: 540, width: 136, height: 20 },
  { x: 6375, y: 418, width: 96, height: 20 },
  { x: 11229, y: 753, width: 178, height: 20 },
  { x: 13219, y: 723, width: 145, height: 20 },
];

window.spikes = [
  { x: 5239, y: 647, size: 23 },
  { x: 5262, y: 647, size: 37 },
  { x: 5299, y: 647, size: 25 },
  { x: 5568, y: 531, size: 14 },
  { x: 5582, y: 531, size: 13 },
  { x: 5595, y: 531, size: 37 },
  { x: 6215, y: 422, size: 45 },
  { x: 6260, y: 422, size: 19 },
  { x: 11002, y: 761, size: 21 },
  { x: 11023, y: 761, size: 58 },
  { x: 13039, y: 733, size: 23 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2158, y: 771, reached: false },
  { x: 4642, y: 803, reached: false },
  { x: 6992, y: 359, reached: false },
  { x: 9152, y: 341, reached: false },
  { x: 10551, y: 637, reached: false },
  { x: 12365, y: 802, reached: false },
  { x: 14221, y: 634, reached: false }, // Final
];

window.lasers = [
  { x: 1154, y: 519, length: 161, width: 4, baseAngle: 5.95, sweepAngle: 0, period: 144, blinkPeriod: 97, onRatio: 0.5 },
  { x: 1457, y: 619, length: 104, width: 4, baseAngle: 4.58, sweepAngle: 0.62, period: 144, blinkPeriod: 0, onRatio: 0.5 },
  { x: 4451, y: 741, length: 149, width: 4, baseAngle: 3.48, sweepAngle: 0.68, period: 144, blinkPeriod: 0, onRatio: 0.5 },
  { x: 5828, y: 435, length: 106, width: 4, baseAngle: 4.72, sweepAngle: 0.9, period: 144, blinkPeriod: 0, onRatio: 0.5 },
  { x: 11267, y: 693, length: 250, width: 4, baseAngle: 4.02, sweepAngle: 0.76, period: 144, blinkPeriod: 0, onRatio: 0.5 },
  { x: 12092, y: 785, length: 116, width: 4, baseAngle: 1.77, sweepAngle: 1.12, period: 144, blinkPeriod: 0, onRatio: 0.5 },
  { x: 13930, y: 611, length: 190, width: 4, baseAngle: 4.11, sweepAngle: 0.83, period: 144, blinkPeriod: 0, onRatio: 0.5 },
];

window.fallers = [
  { x: 830, y: 371, size: 30, triggerX: 665 },
  { x: 9968, y: 488, size: 30, triggerX: 9784 },
];

window.switches = [
  { x: 6569, y: 392, radius: 26, gateId: "g67_0" },
];
