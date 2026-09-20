// Level 49 Data — "Ashen Zenith"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 49";
window.levelAccent = "#b98fff";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 552, y: 465, width: 184, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 988, y: 546, width: 75, height: 16 },
  { x: 1309, y: 604, width: 201, height: 28, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 1674, y: 604, width: 240, height: 25 },
  { x: 2147, y: 616, width: 202, height: 17, conveyor: true, conveyorSpeed: -1.06 },
  { x: 2557, y: 581, width: 173, height: 21, moveAxis: "x", moveRange: 122, moveSpeed: 0.046, movePhase: 6.22 },
  { x: 3157, y: 525, width: 233, height: 15 },
  { x: 3554, y: 525, width: 255, height: 18 },
  { x: 4216, y: 428, width: 142, height: 30 },
  { x: 4527, y: 325, width: 102, height: 24, melt: true, meltDelay: 20 },
  { x: 5036, y: 225, width: 114, height: 14, melt: true, meltDelay: 20 },
  { x: 5561, y: 133, width: 101, height: 17, moveAxis: "y", moveRange: 109, moveSpeed: 0.046, movePhase: 4.27 },
  { x: 5662, y: 133, width: 290, height: 20 },
  { x: 6151, y: 108, width: 104, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.38306122448979585 },
  { x: 6435, y: 82, width: 275, height: 20 },
  { x: 7147, y: 47, width: 199, height: 29, moveAxis: "x", moveRange: 128, moveSpeed: 0.056, movePhase: 4.08 },
  { x: 7573, y: 56, width: 162, height: 15, conveyor: true, conveyorSpeed: 1.37 },
  { x: 7978, y: 94, width: 65, height: 15, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 8207, y: 94, width: 293, height: 17 },
  { x: 8752, y: 174, width: 172, height: 26, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 9176, y: 272, width: 146, height: 19, moveAxis: "y", moveRange: 73, moveSpeed: 0.052, movePhase: 2.17 },
  { x: 9574, y: 379, width: 132, height: 14, melt: true, meltDelay: 20 },
  { x: 9870, y: 379, width: 341, height: 26 },
  { x: 10463, y: 465, width: 215, height: 27, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 10924, y: 518, width: 130, height: 18, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 11291, y: 544, width: 219, height: 28, melt: true, meltDelay: 20 },
  { x: 11674, y: 544, width: 360, height: 16 },
  { x: 12247, y: 518, width: 164, height: 15 },
  { x: 12838, y: 456, width: 113, height: 27, moveAxis: "x", moveRange: 127, moveSpeed: 0.049, movePhase: 3.3 },
  { x: 13368, y: 375, width: 193, height: 18, bounce: true, bounceStrength: -18 },
  { x: 13725, y: 375, width: 344, height: 19 },
  { x: 14222, y: 371, width: 381, height: 20 },
];

window.deadlyPlatforms = [
  { x: 2507, y: 625, width: 120, height: 17, moveAxis: "y", moveRange: 120, moveSpeed: 0.049, movePhase: 1.07 },
  { x: 5501, y: 162, width: 68, height: 23, moveAxis: "x", moveRange: 103, moveSpeed: 0.047, movePhase: 2.68 },
  { x: 7233, y: 83, width: 142, height: 21, moveAxis: "y", moveRange: 117, moveSpeed: 0.048, movePhase: 3.93 },
  { x: 12764, y: 412, width: 83, height: 16, moveAxis: "y", moveRange: 147, moveSpeed: 0.055, movePhase: 6.24 },
  { x: 1097, y: 545, width: 60, height: 20 },
  { x: 3424, y: 527, width: 156, height: 20 },
  { x: 4395, y: 437, width: 79, height: 20 },
  { x: 12433, y: 517, width: 126, height: 20 },
];

window.spikes = [
  { x: 1001, y: 546, size: 21 },
  { x: 1022, y: 546, size: 14 },
  { x: 3190, y: 525, size: 52 },
  { x: 3242, y: 525, size: 28 },
  { x: 12281, y: 518, size: 33 },
  { x: 12314, y: 518, size: 48 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1794, y: 574, reached: false },
  { x: 3682, y: 495, reached: false },
  { x: 6495, y: 52, reached: false },
  { x: 8354, y: 64, reached: false },
  { x: 10041, y: 349, reached: false },
  { x: 11854, y: 514, reached: false },
  { x: 13897, y: 345, reached: false },
  { x: 14413, y: 341, reached: false }, // Final
];

window.forceZones = [
  { x: 3564, y: 435, width: 235, height: 90, axis: "x", force: -0.167 },
];

window.lasers = [
  { x: 1153, y: 491, length: 189, width: 4, baseAngle: 0.2, sweepAngle: 0.55, period: 155, blinkPeriod: 0, onRatio: 0.5 },
  { x: 5229, y: 184, length: 164, width: 4, baseAngle: 1.52, sweepAngle: 0.82, period: 155, blinkPeriod: 0, onRatio: 0.5 },
  { x: 12495, y: 458, length: 146, width: 4, baseAngle: 0.43, sweepAngle: 0, period: 155, blinkPeriod: 106, onRatio: 0.5 },
];

window.fallers = [
  { x: 7818, y: -44, size: 44, triggerX: 7634 },
];
