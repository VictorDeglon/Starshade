// Level 40 Data — "The Hush Between"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 40";
window.levelAccent = "#b98fff";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 722, y: 322, width: 58, height: 17 },
  { x: 976, y: 269, width: 150, height: 14 },
  { x: 1567, y: 257, width: 70, height: 30, melt: true, meltDelay: 20 },
  { x: 1867, y: 280, width: 78, height: 22, conveyor: true, conveyorSpeed: 1.23 },
  { x: 2109, y: 280, width: 252, height: 24 },
  { x: 2604, y: 338, width: 190, height: 20, ghost: true, ghostPeriod: 121, ghostOnRatio: 0.4017857142857143 },
  { x: 3043, y: 423, width: 176, height: 23, ghost: true, ghostPeriod: 121, ghostOnRatio: 0.4017857142857143 },
  { x: 3468, y: 508, width: 217, height: 26, ghost: true, ghostPeriod: 121, ghostOnRatio: 0.4017857142857143 },
  { x: 3934, y: 604, width: 163, height: 25 },
  { x: 4261, y: 604, width: 208, height: 16 },
  { x: 4718, y: 682, width: 188, height: 16, conveyor: true, conveyorSpeed: -1.42 },
  { x: 5140, y: 716, width: 84, height: 16, conveyor: true, conveyorSpeed: -1.74 },
  { x: 5458, y: 746, width: 58, height: 23, melt: true, meltDelay: 20 },
  { x: 5957, y: 734, width: 221, height: 29, moveAxis: "y", moveRange: 76, moveSpeed: 0.052, movePhase: 5.24 },
  { x: 6342, y: 734, width: 273, height: 28 },
  { x: 6801, y: 662, width: 234, height: 20, bounce: true, bounceStrength: -17 },
  { x: 7217, y: 578, width: 220, height: 28 },
  { x: 7604, y: 478, width: 156, height: 19, moveAxis: "x", moveRange: 114, moveSpeed: 0.041, movePhase: 3.42 },
  { x: 8163, y: 376, width: 162, height: 18, bounce: true, bounceStrength: -19 },
  { x: 8489, y: 376, width: 283, height: 30 },
  { x: 9194, y: 311, width: 151, height: 26 },
  { x: 9767, y: 253, width: 96, height: 26 },
  { x: 10304, y: 232, width: 232, height: 24 },
  { x: 10700, y: 232, width: 224, height: 22 },
  { x: 11154, y: 251, width: 201, height: 28, ghost: true, ghostPeriod: 121, ghostOnRatio: 0.4017857142857143 },
  { x: 11598, y: 315, width: 128, height: 27, ghost: true, ghostPeriod: 121, ghostOnRatio: 0.4017857142857143 },
  { x: 11975, y: 399, width: 165, height: 19, ghost: true, ghostPeriod: 121, ghostOnRatio: 0.4017857142857143 },
  { x: 12389, y: 482, width: 174, height: 25, moveAxis: "y", moveRange: 119, moveSpeed: 0.052, movePhase: 0.08 },
  { x: 12753, y: 479, width: 433, height: 20 },
];

window.deadlyPlatforms = [
  { x: 5903, y: 764, width: 190, height: 19, moveAxis: "x", moveRange: 65, moveSpeed: 0.059, movePhase: 4.53 },
  { x: 7676, y: 424, width: 131, height: 19, moveAxis: "y", moveRange: 103, moveSpeed: 0.044, movePhase: 4.78 },
  { x: 809, y: 325, width: 60, height: 20 },
  { x: 1158, y: 273, width: 106, height: 20 },
  { x: 4125, y: 600, width: 136, height: 20 },
  { x: 7476, y: 586, width: 116, height: 20 },
  { x: 9892, y: 261, width: 78, height: 20 },
  { x: 10566, y: 232, width: 195, height: 20 },
];

window.spikes = [
  { x: 731, y: 322, size: 37 },
  { x: 1005, y: 269, size: 48 },
  { x: 1053, y: 269, size: 19 },
  { x: 1072, y: 269, size: 46 },
  { x: 7289, y: 578, size: 12 },
  { x: 7301, y: 578, size: 42 },
  { x: 7343, y: 578, size: 33 },
  { x: 9216, y: 311, size: 35 },
  { x: 9251, y: 311, size: 47 },
  { x: 9298, y: 311, size: 27 },
  { x: 10340, y: 232, size: 38 },
  { x: 10378, y: 232, size: 22 },
  { x: 10400, y: 232, size: 46 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2235, y: 250, reached: false },
  { x: 4365, y: 574, reached: false },
  { x: 6479, y: 704, reached: false },
  { x: 8631, y: 346, reached: false },
  { x: 10812, y: 202, reached: false },
  { x: 12970, y: 449, reached: false }, // Final
];

window.forceZones = [
  { x: 4271, y: 514, width: 188, height: 90, axis: "x", force: 0.181 },
  { x: 10710, y: 142, width: 204, height: 90, axis: "x", force: -0.198 },
];

window.lasers = [
  { x: 3291, y: 349, length: 179, width: 4, baseAngle: 5.98, sweepAngle: 0, period: 160, blinkPeriod: 110, onRatio: 0.5 },
  { x: 5285, y: 645, length: 146, width: 4, baseAngle: 4.88, sweepAngle: 0, period: 160, blinkPeriod: 110, onRatio: 0.5 },
  { x: 7838, y: 418, length: 211, width: 4, baseAngle: 1.56, sweepAngle: 0.61, period: 160, blinkPeriod: 0, onRatio: 0.5 },
];
