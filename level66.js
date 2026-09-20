// Level 66 Data — "The Faultline Reach"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 66";
window.levelAccent = "#9dff4d";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 750, y: 375, width: 53, height: 24, melt: true, meltDelay: 20 },
  { x: 1046, y: 421, width: 75, height: 14, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 1373, y: 488, width: 147, height: 21, bounce: true, bounceStrength: -19 },
  { x: 1772, y: 573, width: 130, height: 19, conveyor: true, conveyorSpeed: 1.92 },
  { x: 2066, y: 573, width: 293, height: 22 },
  { x: 2611, y: 679, width: 95, height: 20, conveyor: true, conveyorSpeed: 0.94 },
  { x: 2958, y: 780, width: 107, height: 25, bounce: true, bounceStrength: -16 },
  { x: 3317, y: 849, width: 84, height: 27, conveyor: true, conveyorSpeed: -1.15 },
  { x: 3647, y: 907, width: 81, height: 23, bounce: true, bounceStrength: -18 },
  { x: 3728, y: 907, width: 227, height: 20 },
  { x: 4148, y: 895, width: 106, height: 16, gated: true, gateId: "g66_0" },
  { x: 4303, y: 897, width: 220, height: 20 },
  { x: 4740, y: 883, width: 221, height: 17 },
  { x: 5407, y: 862, width: 200, height: 18 },
  { x: 5801, y: 797, width: 206, height: 16 },
  { x: 6418, y: 704, width: 79, height: 27 },
  { x: 6497, y: 704, width: 262, height: 20 },
  { x: 6957, y: 691, width: 99, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 7245, y: 663, width: 272, height: 20 },
  { x: 7924, y: 564, width: 174, height: 18 },
  { x: 8509, y: 476, width: 52, height: 26, conveyor: true, conveyorSpeed: -1.65 },
  { x: 8749, y: 402, width: 66, height: 24, melt: true, meltDelay: 20 },
  { x: 9242, y: 341, width: 67, height: 20, moveAxis: "x", moveRange: 99, moveSpeed: 0.05, movePhase: 3.32 },
  { x: 9473, y: 341, width: 395, height: 30 },
  { x: 10095, y: 348, width: 156, height: 20, melt: true, meltDelay: 20 },
  { x: 10494, y: 388, width: 91, height: 20, melt: true, meltDelay: 20 },
  { x: 10837, y: 453, width: 199, height: 15, melt: true, meltDelay: 20 },
  { x: 11036, y: 453, width: 289, height: 20 },
  { x: 11527, y: 431, width: 106, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 11818, y: 413, width: 244, height: 20 },
  { x: 12314, y: 515, width: 122, height: 30 },
  { x: 12688, y: 624, width: 157, height: 21, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 13097, y: 724, width: 64, height: 22, bounce: true, bounceStrength: -17 },
  { x: 13325, y: 724, width: 289, height: 20 },
  { x: 13860, y: 787, width: 50, height: 30, bounce: true, bounceStrength: -19 },
  { x: 14153, y: 830, width: 120, height: 15, moveAxis: "x", moveRange: 135, moveSpeed: 0.05, movePhase: 5.8 },
  { x: 14496, y: 824, width: 188, height: 23, melt: true, meltDelay: 20 },
  { x: 14861, y: 835, width: 400, height: 20 },
];

window.deadlyPlatforms = [
  { x: 9164, y: 296, width: 50, height: 16, moveAxis: "y", moveRange: 105, moveSpeed: 0.057, movePhase: 3.57 },
  { x: 14197, y: 855, width: 80, height: 22, moveAxis: "y", moveRange: 153, moveSpeed: 0.047, movePhase: 3.95 },
  { x: 4983, y: 879, width: 129, height: 20 },
  { x: 5631, y: 869, width: 150, height: 20 },
  { x: 6046, y: 797, width: 115, height: 20 },
  { x: 6530, y: 711, width: 60, height: 20 },
  { x: 8136, y: 559, width: 121, height: 20 },
  { x: 12458, y: 508, width: 88, height: 20 },
];

window.spikes = [
  { x: 4787, y: 883, size: 48 },
  { x: 5463, y: 862, size: 37 },
  { x: 5500, y: 862, size: 56 },
  { x: 5556, y: 862, size: 19 },
  { x: 5575, y: 862, size: 26 },
  { x: 5865, y: 797, size: 48 },
  { x: 5913, y: 797, size: 14 },
  { x: 5927, y: 797, size: 35 },
  { x: 7976, y: 564, size: 43 },
  { x: 12353, y: 515, size: 13 },
  { x: 12366, y: 515, size: 16 },
  { x: 12382, y: 515, size: 41 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2213, y: 543, reached: false },
  { x: 4363, y: 867, reached: false },
  { x: 7305, y: 633, reached: false },
  { x: 9671, y: 311, reached: false },
  { x: 11878, y: 383, reached: false },
  { x: 13470, y: 694, reached: false },
  { x: 15061, y: 805, reached: false }, // Final
];

window.lasers = [
  { x: 1186, y: 368, length: 218, width: 4, baseAngle: 3.48, sweepAngle: 1.04, period: 145, blinkPeriod: 0, onRatio: 0.5 },
  { x: 1610, y: 435, length: 117, width: 4, baseAngle: 1.58, sweepAngle: 0, period: 145, blinkPeriod: 97, onRatio: 0.5 },
  { x: 6097, y: 725, length: 178, width: 4, baseAngle: 3.21, sweepAngle: 0.62, period: 145, blinkPeriod: 0, onRatio: 0.5 },
  { x: 8640, y: 418, length: 123, width: 4, baseAngle: 5.04, sweepAngle: 1.12, period: 145, blinkPeriod: 0, onRatio: 0.5 },
  { x: 10334, y: 305, length: 124, width: 4, baseAngle: 1.33, sweepAngle: 1.11, period: 145, blinkPeriod: 0, onRatio: 0.5 },
  { x: 12934, y: 569, length: 241, width: 4, baseAngle: 2.8, sweepAngle: 0, period: 145, blinkPeriod: 97, onRatio: 0.5 },
  { x: 13229, y: 636, length: 246, width: 4, baseAngle: 5.07, sweepAngle: 0, period: 145, blinkPeriod: 97, onRatio: 0.5 },
  { x: 14370, y: 738, length: 243, width: 4, baseAngle: 2.93, sweepAngle: 0.89, period: 145, blinkPeriod: 0, onRatio: 0.5 },
];

window.fallers = [
  { x: 6569, y: 580, size: 49, triggerX: 6439 },
  { x: 8194, y: 465, size: 42, triggerX: 8021 },
  { x: 12511, y: 429, size: 33, triggerX: 12337 },
];

window.switches = [
  { x: 3933, y: 877, radius: 26, gateId: "g66_0" },
];
