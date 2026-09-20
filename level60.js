// Level 60 Data — "Umbral Gauntlet"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 60";
window.levelAccent = "#9dff4d";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 533, y: 396, width: 172, height: 30, melt: true, meltDelay: 20 },
  { x: 951, y: 450, width: 228, height: 16, moveAxis: "y", moveRange: 118, moveSpeed: 0.055, movePhase: 1.41 },
  { x: 1431, y: 524, width: 155, height: 25 },
  { x: 1750, y: 524, width: 257, height: 26 },
  { x: 2259, y: 612, width: 47, height: 26, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 2558, y: 704, width: 67, height: 15, melt: true, meltDelay: 20 },
  { x: 2877, y: 772, width: 96, height: 17, moveAxis: "y", moveRange: 108, moveSpeed: 0.049, movePhase: 5.84 },
  { x: 3137, y: 772, width: 368, height: 26 },
  { x: 3748, y: 818, width: 178, height: 22, bounce: true, bounceStrength: -18 },
  { x: 4153, y: 829, width: 161, height: 22 },
  { x: 4754, y: 805, width: 188, height: 21, bounce: true, bounceStrength: -17 },
  { x: 4942, y: 805, width: 245, height: 20 },
  { x: 5378, y: 781, width: 102, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.3606122448979592 },
  { x: 5676, y: 771, width: 259, height: 20 },
  { x: 6356, y: 704, width: 207, height: 20 },
  { x: 6974, y: 613, width: 195, height: 27 },
  { x: 7338, y: 509, width: 164, height: 25, moveAxis: "x", moveRange: 98, moveSpeed: 0.042, movePhase: 4.6 },
  { x: 7502, y: 509, width: 220, height: 20 },
  { x: 7895, y: 493, width: 102, height: 16, gated: true, gateId: "g60_0" },
  { x: 8067, y: 494, width: 225, height: 20 },
  { x: 8480, y: 416, width: 222, height: 27, conveyor: true, conveyorSpeed: 1.66 },
  { x: 9133, y: 361, width: 77, height: 15 },
  { x: 9414, y: 314, width: 101, height: 20, bounce: true, bounceStrength: -17 },
  { x: 9679, y: 314, width: 195, height: 24 },
  { x: 10107, y: 331, width: 168, height: 26, moveAxis: "x", moveRange: 103, moveSpeed: 0.058, movePhase: 3.46 },
  { x: 10521, y: 390, width: 118, height: 19, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 10891, y: 463, width: 84, height: 16, melt: true, meltDelay: 20 },
  { x: 11139, y: 463, width: 235, height: 27 },
  { x: 11626, y: 563, width: 92, height: 14, melt: true, meltDelay: 20 },
  { x: 11970, y: 651, width: 80, height: 14, bounce: true, bounceStrength: -16 },
  { x: 12302, y: 737, width: 199, height: 23, moveAxis: "x", moveRange: 132, moveSpeed: 0.049, movePhase: 1.49 },
  { x: 12665, y: 737, width: 297, height: 30 },
  { x: 13195, y: 758, width: 230, height: 14, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 13648, y: 754, width: 99, height: 14, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 13908, y: 754, width: 402, height: 20 },
];

window.deadlyPlatforms = [
  { x: 892, y: 502, width: 202, height: 15, moveAxis: "x", moveRange: 93, moveSpeed: 0.054, movePhase: 4.16 },
  { x: 2808, y: 830, width: 83, height: 16, moveAxis: "x", moveRange: 113, moveSpeed: 0.061, movePhase: 5.2 },
  { x: 10055, y: 287, width: 101, height: 20, moveAxis: "y", moveRange: 123, moveSpeed: 0.057, movePhase: 0.48 },
  { x: 1614, y: 520, width: 127, height: 20 },
  { x: 4350, y: 833, width: 132, height: 20 },
  { x: 6588, y: 711, width: 149, height: 20 },
  { x: 7206, y: 621, width: 167, height: 20 },
  { x: 9239, y: 368, width: 60, height: 20 },
];

window.spikes = [
  { x: 1479, y: 524, size: 40 },
  { x: 4198, y: 829, size: 16 },
  { x: 6415, y: 704, size: 33 },
  { x: 6448, y: 704, size: 45 },
  { x: 6493, y: 704, size: 14 },
  { x: 7032, y: 613, size: 41 },
  { x: 7073, y: 613, size: 30 },
  { x: 7103, y: 613, size: 27 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1879, y: 494, reached: false },
  { x: 3321, y: 742, reached: false },
  { x: 5736, y: 741, reached: false },
  { x: 8127, y: 464, reached: false },
  { x: 9777, y: 284, reached: false },
  { x: 11257, y: 433, reached: false },
  { x: 12814, y: 707, reached: false },
  { x: 14109, y: 724, reached: false }, // Final
];

window.lasers = [
  { x: 3991, y: 757, length: 118, width: 4, baseAngle: 0.99, sweepAngle: 0, period: 148, blinkPeriod: 100, onRatio: 0.5 },
  { x: 8797, y: 346, length: 183, width: 4, baseAngle: 0.66, sweepAngle: 0, period: 148, blinkPeriod: 100, onRatio: 0.5 },
  { x: 9613, y: 235, length: 166, width: 4, baseAngle: 2.22, sweepAngle: 0, period: 148, blinkPeriod: 100, onRatio: 0.5 },
  { x: 10350, y: 237, length: 211, width: 4, baseAngle: 0.02, sweepAngle: 0.82, period: 148, blinkPeriod: 0, onRatio: 0.5 },
  { x: 13836, y: 662, length: 145, width: 4, baseAngle: 4.36, sweepAngle: 1.14, period: 148, blinkPeriod: 0, onRatio: 0.5 },
];

window.fallers = [
  { x: 1680, y: 399, size: 38, triggerX: 1526 },
  { x: 3033, y: 682, size: 39, triggerX: 2898 },
  { x: 7246, y: 476, size: 45, triggerX: 7051 },
  { x: 13512, y: 630, size: 24, triggerX: 13325 },
];

window.switches = [
  { x: 7700, y: 479, radius: 26, gateId: "g60_0" },
];
