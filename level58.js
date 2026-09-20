// Level 58 Data — "Cinderfall Vault"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 58";
window.levelAccent = "#50e6ff";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 465, y: 270, width: 82, height: 16, melt: true, meltDelay: 20 },
  { x: 731, y: 187, width: 113, height: 28, bounce: true, bounceStrength: -19 },
  { x: 1032, y: 110, width: 232, height: 15, bounce: true, bounceStrength: -19 },
  { x: 1428, y: 110, width: 322, height: 20 },
  { x: 1958, y: 76, width: 197, height: 18, melt: true, meltDelay: 20 },
  { x: 2605, y: 66, width: 97, height: 30, moveAxis: "x", moveRange: 114, moveSpeed: 0.043, movePhase: 6.01 },
  { x: 2935, y: 80, width: 107, height: 23, conveyor: true, conveyorSpeed: -1.81 },
  { x: 3288, y: 137, width: 198, height: 22, conveyor: true, conveyorSpeed: -1.02 },
  { x: 3486, y: 137, width: 270, height: 20 },
  { x: 3921, y: 125, width: 110, height: 16, gated: true, gateId: "g58_0" },
  { x: 4101, y: 124, width: 237, height: 20 },
  { x: 4590, y: 206, width: 102, height: 15, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 4944, y: 309, width: 154, height: 28, bounce: true, bounceStrength: -19 },
  { x: 5350, y: 413, width: 183, height: 27, conveyor: true, conveyorSpeed: -1.39 },
  { x: 5785, y: 494, width: 101, height: 29, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 6050, y: 494, width: 385, height: 25 },
  { x: 6672, y: 530, width: 153, height: 22 },
  { x: 7058, y: 548, width: 54, height: 30, moveAxis: "x", moveRange: 117, moveSpeed: 0.054, movePhase: 1.68 },
  { x: 7562, y: 546, width: 77, height: 23 },
  { x: 7803, y: 546, width: 292, height: 21 },
  { x: 8516, y: 474, width: 233, height: 28 },
  { x: 8933, y: 394, width: 97, height: 25, conveyor: true, conveyorSpeed: 1.61 },
  { x: 9205, y: 297, width: 154, height: 29 },
  { x: 9523, y: 297, width: 391, height: 29 },
  { x: 10321, y: 198, width: 216, height: 27, bounce: true, bounceStrength: -16 },
  { x: 10721, y: 116, width: 179, height: 25, bounce: true, bounceStrength: -16 },
  { x: 11331, y: 65, width: 123, height: 23, moveAxis: "x", moveRange: 120, moveSpeed: 0.047, movePhase: 4.33 },
  { x: 11894, y: 40, width: 59, height: 15 },
  { x: 12117, y: 40, width: 282, height: 30 },
  { x: 12645, y: 96, width: 192, height: 26, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 13089, y: 163, width: 71, height: 30, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 13412, y: 246, width: 183, height: 16, moveAxis: "x", moveRange: 83, moveSpeed: 0.054, movePhase: 6.27 },
  { x: 13780, y: 236, width: 431, height: 20 },
];

window.deadlyPlatforms = [
  { x: 2553, y: 91, width: 87, height: 18, moveAxis: "y", moveRange: 129, moveSpeed: 0.046, movePhase: 0.01 },
  { x: 11406, y: 19, width: 78, height: 22, moveAxis: "y", moveRange: 111, moveSpeed: 0.053, movePhase: 4.5 },
  { x: 13477, y: 215, width: 124, height: 18, moveAxis: "y", moveRange: 96, moveSpeed: 0.048, movePhase: 5 },
  { x: 6849, y: 520, width: 121, height: 20 },
  { x: 7673, y: 538, width: 60, height: 20 },
  { x: 8781, y: 465, width: 156, height: 20 },
  { x: 9380, y: 288, width: 86, height: 20 },
  { x: 11986, y: 39, width: 60, height: 20 },
];

window.spikes = [
  { x: 6700, y: 530, size: 54 },
  { x: 6754, y: 530, size: 46 },
  { x: 8583, y: 474, size: 56 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1589, y: 80, reached: false },
  { x: 4161, y: 94, reached: false },
  { x: 6243, y: 464, reached: false },
  { x: 7949, y: 516, reached: false },
  { x: 9719, y: 267, reached: false },
  { x: 12258, y: 10, reached: false },
  { x: 13996, y: 206, reached: false }, // Final
];

window.lasers = [
  { x: 2764, y: 1, length: 169, width: 4, baseAngle: 4.18, sweepAngle: 0, period: 149, blinkPeriod: 101, onRatio: 0.5 },
  { x: 9091, y: 299, length: 180, width: 4, baseAngle: 4.81, sweepAngle: 0.66, period: 149, blinkPeriod: 0, onRatio: 0.5 },
  { x: 10597, y: 100, length: 106, width: 4, baseAngle: 2.22, sweepAngle: 0.67, period: 149, blinkPeriod: 0, onRatio: 0.5 },
  { x: 11524, y: 5, length: 135, width: 4, baseAngle: 5.89, sweepAngle: 0, period: 149, blinkPeriod: 101, onRatio: 0.5 },
  { x: 12921, y: 18, length: 168, width: 4, baseAngle: 0.08, sweepAngle: 1.08, period: 149, blinkPeriod: 0, onRatio: 0.5 },
];

window.fallers = [
  { x: 2229, y: -50, size: 36, triggerX: 2092 },
  { x: 5594, y: 291, size: 42, triggerX: 5422 },
  { x: 5966, y: 362, size: 40, triggerX: 5812 },
  { x: 7211, y: 413, size: 22, triggerX: 7072 },
  { x: 9429, y: 176, size: 24, triggerX: 9290 },
  { x: 13669, y: 154, size: 43, triggerX: 13509 },
];

window.switches = [
  { x: 3734, y: 107, radius: 26, gateId: "g58_0" },
];
