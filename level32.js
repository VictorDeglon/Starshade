// Level 32 Data — "Ember Threshold"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 32";
window.levelAccent = "#ff9838";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 727, y: 347, width: 115, height: 16 },
  { x: 1250, y: 274, width: 112, height: 23 },
  { x: 1544, y: 202, width: 171, height: 29, bounce: true, bounceStrength: -19 },
  { x: 2119, y: 125, width: 197, height: 25, melt: true, meltDelay: 21 },
  { x: 2480, y: 125, width: 304, height: 26 },
  { x: 2963, y: 42, width: 232, height: 16, moveAxis: "x", moveRange: 71, moveSpeed: 0.052, movePhase: 3.39 },
  { x: 3383, y: -27, width: 81, height: 29 },
  { x: 3891, y: -55, width: 154, height: 24, moveAxis: "y", moveRange: 107, moveSpeed: 0.046, movePhase: 0.15 },
  { x: 4209, y: -55, width: 272, height: 16 },
  { x: 4707, y: -39, width: 176, height: 14, melt: true, meltDelay: 21 },
  { x: 5118, y: 10, width: 192, height: 19 },
  { x: 5549, y: 63, width: 72, height: 26, ghost: true, ghostPeriod: 127, ghostOnRatio: 0.42219387755102045 },
  { x: 5866, y: 135, width: 166, height: 23, bounce: true, bounceStrength: -19 },
  { x: 6196, y: 135, width: 283, height: 24 },
  { x: 6724, y: 219, width: 57, height: 30, melt: true, meltDelay: 21 },
  { x: 7020, y: 277, width: 219, height: 18, moveAxis: "y", moveRange: 94, moveSpeed: 0.036, movePhase: 5.21 },
  { x: 7484, y: 344, width: 179, height: 29, conveyor: true, conveyorSpeed: -1.92 },
  { x: 7827, y: 344, width: 264, height: 22 },
  { x: 8527, y: 336, width: 219, height: 27, melt: true, meltDelay: 21 },
  { x: 8957, y: 322, width: 218, height: 23, moveAxis: "y", moveRange: 80, moveSpeed: 0.039, movePhase: 4.92 },
  { x: 9367, y: 266, width: 127, height: 27 },
  { x: 9658, y: 266, width: 356, height: 26 },
  { x: 10183, y: 173, width: 87, height: 24, moveAxis: "x", moveRange: 68, moveSpeed: 0.04, movePhase: 6.21 },
  { x: 10439, y: 80, width: 86, height: 26, conveyor: true, conveyorSpeed: 1.41 },
  { x: 10698, y: -6, width: 188, height: 15, moveAxis: "x", moveRange: 112, moveSpeed: 0.039, movePhase: 4.01 },
  { x: 11050, y: -6, width: 239, height: 14 },
  { x: 11477, y: -75, width: 116, height: 15 },
  { x: 11779, y: -62, width: 418, height: 20 },
];

window.deadlyPlatforms = [
  { x: 3957, y: -20, width: 96, height: 20, moveAxis: "x", moveRange: 84, moveSpeed: 0.055, movePhase: 3.04 },
  { x: 6952, y: 219, width: 168, height: 15, moveAxis: "x", moveRange: 113, moveSpeed: 0.037, movePhase: 5.66 },
  { x: 10259, y: 123, width: 71, height: 15, moveAxis: "y", moveRange: 52, moveSpeed: 0.038, movePhase: 2.02 },
  { x: 10613, y: 48, width: 167, height: 25, moveAxis: "y", moveRange: 94, moveSpeed: 0.042, movePhase: 2.54 },
  { x: 878, y: 341, width: 60, height: 20 },
  { x: 3501, y: -26, width: 70, height: 20 },
  { x: 5333, y: 17, width: 142, height: 20 },
  { x: 9519, y: 272, width: 88, height: 20 },
];

window.spikes = [
  { x: 758, y: 347, size: 31 },
  { x: 1286, y: 274, size: 20 },
  { x: 3404, y: -27, size: 46 },
  { x: 5168, y: 10, size: 45 },
  { x: 5213, y: 10, size: 18 },
  { x: 9390, y: 266, size: 18 },
  { x: 9408, y: 266, size: 40 },
  { x: 11518, y: -75, size: 19 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2632, y: 95, reached: false },
  { x: 4345, y: -85, reached: false },
  { x: 6338, y: 105, reached: false },
  { x: 7959, y: 314, reached: false },
  { x: 9836, y: 236, reached: false },
  { x: 11170, y: -36, reached: false },
  { x: 11988, y: -92, reached: false }, // Final
];
