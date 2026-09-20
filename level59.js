// Level 59 Data — "The Widow's Ledge"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 59";
window.levelAccent = "#50e6ff";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 494, y: 317, width: 130, height: 25, melt: true, meltDelay: 20 },
  { x: 837, y: 284, width: 47, height: 29, conveyor: true, conveyorSpeed: 1.9 },
  { x: 1107, y: 275, width: 202, height: 23, melt: true, meltDelay: 20 },
  { x: 1473, y: 275, width: 355, height: 29 },
  { x: 2074, y: 333, width: 187, height: 21, conveyor: true, conveyorSpeed: 1.8 },
  { x: 2513, y: 404, width: 217, height: 22, moveAxis: "x", moveRange: 109, moveSpeed: 0.049, movePhase: 2.86 },
  { x: 2982, y: 494, width: 173, height: 16, conveyor: true, conveyorSpeed: -2.17 },
  { x: 3155, y: 494, width: 265, height: 20 },
  { x: 3597, y: 476, width: 101, height: 16, gated: true, gateId: "g59_0" },
  { x: 3768, y: 484, width: 249, height: 20 },
  { x: 4269, y: 579, width: 224, height: 24, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 4745, y: 670, width: 229, height: 26, bounce: true, bounceStrength: -16 },
  { x: 5220, y: 723, width: 94, height: 23, moveAxis: "x", moveRange: 113, moveSpeed: 0.04, movePhase: 4.34 },
  { x: 5557, y: 765, width: 63, height: 25, conveyor: true, conveyorSpeed: 1.58 },
  { x: 5784, y: 765, width: 333, height: 24 },
  { x: 6557, y: 731, width: 77, height: 28, melt: true, meltDelay: 20 },
  { x: 7065, y: 678, width: 152, height: 30 },
  { x: 7401, y: 594, width: 231, height: 18 },
  { x: 7796, y: 594, width: 294, height: 23 },
  { x: 8265, y: 497, width: 148, height: 30, moveAxis: "y", moveRange: 105, moveSpeed: 0.043, movePhase: 0.93 },
  { x: 8824, y: 403, width: 120, height: 29, moveAxis: "x", moveRange: 115, moveSpeed: 0.058, movePhase: 1.7 },
  { x: 9355, y: 310, width: 154, height: 21, moveAxis: "y", moveRange: 130, moveSpeed: 0.062, movePhase: 4.76 },
  { x: 9707, y: 256, width: 100, height: 21, moveAxis: "y", moveRange: 115, moveSpeed: 0.062, movePhase: 0.61 },
  { x: 9971, y: 256, width: 314, height: 25 },
  { x: 10735, y: 255, width: 149, height: 24, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 11121, y: 289, width: 149, height: 24, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 11513, y: 339, width: 231, height: 27, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 11990, y: 399, width: 175, height: 21, moveAxis: "y", moveRange: 132, moveSpeed: 0.057, movePhase: 5.62 },
  { x: 12329, y: 399, width: 225, height: 17 },
  { x: 12806, y: 487, width: 89, height: 19, conveyor: true, conveyorSpeed: 1.47 },
  { x: 13147, y: 595, width: 200, height: 22, conveyor: true, conveyorSpeed: 1.26 },
  { x: 13599, y: 687, width: 119, height: 27, moveAxis: "x", moveRange: 104, moveSpeed: 0.04, movePhase: 2.41 },
  { x: 13913, y: 693, width: 383, height: 20 },
];

window.deadlyPlatforms = [
  { x: 2442, y: 432, width: 183, height: 19, moveAxis: "y", moveRange: 92, moveSpeed: 0.045, movePhase: 3.69 },
  { x: 5155, y: 688, width: 59, height: 20, moveAxis: "y", moveRange: 102, moveSpeed: 0.036, movePhase: 2.86 },
  { x: 8200, y: 443, width: 117, height: 23, moveAxis: "x", moveRange: 117, moveSpeed: 0.053, movePhase: 4.18 },
  { x: 9306, y: 362, width: 131, height: 17, moveAxis: "x", moveRange: 152, moveSpeed: 0.054, movePhase: 5.33 },
  { x: 9632, y: 285, width: 89, height: 15, moveAxis: "x", moveRange: 128, moveSpeed: 0.074, movePhase: 1.93 },
  { x: 11924, y: 447, width: 137, height: 19, moveAxis: "x", moveRange: 107, moveSpeed: 0.055, movePhase: 6.08 },
  { x: 13519, y: 653, width: 106, height: 15, moveAxis: "y", moveRange: 113, moveSpeed: 0.046, movePhase: 0.18 },
  { x: 7253, y: 678, width: 82, height: 20 },
  { x: 7665, y: 590, width: 117, height: 20 },
];

window.spikes = [
  { x: 7119, y: 678, size: 34 },
  { x: 7464, y: 594, size: 57 },
  { x: 7521, y: 594, size: 42 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1651, y: 245, reached: false },
  { x: 3828, y: 454, reached: false },
  { x: 5951, y: 735, reached: false },
  { x: 7943, y: 564, reached: false },
  { x: 10128, y: 226, reached: false },
  { x: 12442, y: 369, reached: false },
  { x: 14105, y: 663, reached: false }, // Final
];

window.forceZones = [
  { x: 7806, y: 504, width: 274, height: 90, axis: "x", force: -0.216 },
];

window.lasers = [
  { x: 957, y: 218, length: 214, width: 4, baseAngle: 3.57, sweepAngle: 0.54, period: 149, blinkPeriod: 0, onRatio: 0.5 },
  { x: 2325, y: 269, length: 189, width: 4, baseAngle: 3.54, sweepAngle: 0.67, period: 149, blinkPeriod: 0, onRatio: 0.5 },
  { x: 4558, y: 491, length: 224, width: 4, baseAngle: 3.63, sweepAngle: 0.98, period: 149, blinkPeriod: 0, onRatio: 0.5 },
  { x: 9874, y: 176, length: 218, width: 4, baseAngle: 5.03, sweepAngle: 0.49, period: 149, blinkPeriod: 0, onRatio: 0.5 },
  { x: 11831, y: 278, length: 137, width: 4, baseAngle: 1.86, sweepAngle: 0.58, period: 149, blinkPeriod: 0, onRatio: 0.5 },
  { x: 12242, y: 331, length: 105, width: 4, baseAngle: 0.36, sweepAngle: 0, period: 149, blinkPeriod: 101, onRatio: 0.5 },
];

window.fallers = [
  { x: 711, y: 183, size: 43, triggerX: 503 },
  { x: 2822, y: 289, size: 36, triggerX: 2676 },
  { x: 12990, y: 381, size: 35, triggerX: 12833 },
];

window.switches = [
  { x: 3398, y: 464, radius: 26, gateId: "g59_0" },
];
