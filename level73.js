// Level 73 Data — "Starfall Reprise"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 73";
window.levelAccent = "#bfe6ff";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 552, y: 448, width: 57, height: 27, melt: true, meltDelay: 20 },
  { x: 861, y: 537, width: 91, height: 27, moveAxis: "y", moveRange: 116, moveSpeed: 0.066, movePhase: 2.34 },
  { x: 1204, y: 642, width: 153, height: 19, melt: true, meltDelay: 20 },
  { x: 1609, y: 757, width: 156, height: 24, bounce: true, bounceStrength: -19 },
  { x: 1929, y: 757, width: 275, height: 27 },
  { x: 2456, y: 839, width: 187, height: 15, conveyor: true, conveyorSpeed: -1.32 },
  { x: 2886, y: 881, width: 109, height: 14, melt: true, meltDelay: 20 },
  { x: 3222, y: 892, width: 119, height: 27, melt: true, meltDelay: 20 },
  { x: 3341, y: 892, width: 289, height: 20 },
  { x: 3839, y: 863, width: 94, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 4124, y: 845, width: 254, height: 20 },
  { x: 4818, y: 811, width: 102, height: 23, conveyor: true, conveyorSpeed: -1.63 },
  { x: 5118, y: 755, width: 138, height: 30 },
  { x: 5673, y: 675, width: 135, height: 21 },
  { x: 5808, y: 675, width: 258, height: 20 },
  { x: 6270, y: 657, width: 99, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 6564, y: 641, width: 239, height: 20 },
  { x: 7214, y: 547, width: 147, height: 17, moveAxis: "y", moveRange: 108, moveSpeed: 0.055, movePhase: 0.65 },
  { x: 7520, y: 434, width: 93, height: 30, moveAxis: "x", moveRange: 101, moveSpeed: 0.045, movePhase: 1.44 },
  { x: 8024, y: 344, width: 234, height: 20 },
  { x: 8462, y: 292, width: 154, height: 30, melt: true, meltDelay: 20 },
  { x: 8616, y: 292, width: 272, height: 20 },
  { x: 9058, y: 265, width: 114, height: 16, gated: true, gateId: "g73_0" },
  { x: 9229, y: 264, width: 207, height: 20 },
  { x: 9659, y: 260, width: 168, height: 28, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 10070, y: 304, width: 83, height: 17, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 10405, y: 382, width: 62, height: 17, bounce: true, bounceStrength: -20 },
  { x: 10719, y: 460, width: 202, height: 28, moveAxis: "y", moveRange: 78, moveSpeed: 0.065, movePhase: 0.12 },
  { x: 10921, y: 460, width: 243, height: 20 },
  { x: 11333, y: 423, width: 106, height: 16, gated: true, gateId: "g73_1" },
  { x: 11502, y: 417, width: 200, height: 20 },
  { x: 11954, y: 514, width: 64, height: 23, moveAxis: "x", moveRange: 139, moveSpeed: 0.065, movePhase: 3.28 },
  { x: 12270, y: 601, width: 223, height: 30, bounce: true, bounceStrength: -18 },
  { x: 12745, y: 696, width: 138, height: 23, melt: true, meltDelay: 20 },
  { x: 13047, y: 696, width: 326, height: 21 },
  { x: 13610, y: 726, width: 169, height: 23, melt: true, meltDelay: 20 },
  { x: 14229, y: 715, width: 123, height: 22, bounce: true, bounceStrength: -19 },
  { x: 14792, y: 690, width: 128, height: 24, melt: true, meltDelay: 20 },
  { x: 15084, y: 690, width: 382, height: 23 },
  { x: 15616, y: 694, width: 390, height: 20 },
];

window.deadlyPlatforms = [
  { x: 917, y: 563, width: 57, height: 14, moveAxis: "x", moveRange: 129, moveSpeed: 0.072, movePhase: 3.38 },
  { x: 7597, y: 395, width: 57, height: 15, moveAxis: "y", moveRange: 88, moveSpeed: 0.049, movePhase: 2.14 },
  { x: 10647, y: 500, width: 119, height: 20, moveAxis: "x", moveRange: 82, moveSpeed: 0.06, movePhase: 0.99 },
  { x: 11879, y: 565, width: 52, height: 20, moveAxis: "y", moveRange: 138, moveSpeed: 0.056, movePhase: 2.62 },
  { x: 5291, y: 762, width: 119, height: 20 },
  { x: 5840, y: 683, width: 86, height: 20 },
  { x: 8286, y: 337, width: 198, height: 20 },
];

window.spikes = [
  { x: 5140, y: 755, size: 42 },
  { x: 5700, y: 675, size: 34 },
  { x: 5734, y: 675, size: 59 },
  { x: 8071, y: 344, size: 48 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2067, y: 727, reached: false },
  { x: 4184, y: 815, reached: false },
  { x: 6624, y: 611, reached: false },
  { x: 9289, y: 234, reached: false },
  { x: 11562, y: 387, reached: false },
  { x: 13210, y: 666, reached: false },
  { x: 15275, y: 660, reached: false },
  { x: 15811, y: 664, reached: false }, // Final
];

window.lasers = [
  { x: 2727, y: 740, length: 163, width: 4, baseAngle: 4.44, sweepAngle: 0, period: 140, blinkPeriod: 94, onRatio: 0.5 },
  { x: 5348, y: 677, length: 133, width: 4, baseAngle: 3.62, sweepAngle: 0.71, period: 140, blinkPeriod: 0, onRatio: 0.5 },
  { x: 7422, y: 464, length: 100, width: 4, baseAngle: 2.97, sweepAngle: 0, period: 140, blinkPeriod: 94, onRatio: 0.5 },
  { x: 12084, y: 449, length: 223, width: 4, baseAngle: 4.31, sweepAngle: 0.61, period: 140, blinkPeriod: 0, onRatio: 0.5 },
  { x: 12568, y: 542, length: 137, width: 4, baseAngle: 0.7, sweepAngle: 0, period: 140, blinkPeriod: 94, onRatio: 0.5 },
  { x: 12949, y: 624, length: 252, width: 4, baseAngle: 1.72, sweepAngle: 0.66, period: 140, blinkPeriod: 0, onRatio: 0.5 },
  { x: 14421, y: 631, length: 181, width: 4, baseAngle: 1.36, sweepAngle: 0.8, period: 140, blinkPeriod: 0, onRatio: 0.5 },
];

window.fallers = [
  { x: 1045, y: 407, size: 41, triggerX: 860 },
  { x: 5877, y: 561, size: 36, triggerX: 5693 },
  { x: 10236, y: 201, size: 34, triggerX: 10061 },
];

window.switches = [
  { x: 8866, y: 262, radius: 26, gateId: "g73_0" },
  { x: 11142, y: 430, radius: 26, gateId: "g73_1" },
];
