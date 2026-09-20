// Level 37 Data — "The Widening Dark"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 37";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 538, y: 428, width: 225, height: 28, moveAxis: "y", moveRange: 104, moveSpeed: 0.049, movePhase: 3.85 },
  { x: 995, y: 460, width: 231, height: 21, ghost: true, ghostPeriod: 123, ghostOnRatio: 0.40943877551020413 },
  { x: 1454, y: 481, width: 116, height: 26, moveAxis: "x", moveRange: 88, moveSpeed: 0.035, movePhase: 6.06 },
  { x: 1734, y: 481, width: 254, height: 25 },
  { x: 2407, y: 425, width: 148, height: 22 },
  { x: 2745, y: 356, width: 50, height: 23, melt: true, meltDelay: 20 },
  { x: 2976, y: 273, width: 200, height: 15 },
  { x: 3340, y: 273, width: 396, height: 15 },
  { x: 4140, y: 179, width: 74, height: 26, moveAxis: "y", moveRange: 79, moveSpeed: 0.047, movePhase: 4.33 },
  { x: 4633, y: 118, width: 213, height: 16 },
  { x: 5040, y: 58, width: 179, height: 18 },
  { x: 5383, y: 58, width: 212, height: 27 },
  { x: 5818, y: 59, width: 153, height: 29, ghost: true, ghostPeriod: 123, ghostOnRatio: 0.40943877551020413 },
  { x: 6199, y: 76, width: 94, height: 21, ghost: true, ghostPeriod: 123, ghostOnRatio: 0.40943877551020413 },
  { x: 6531, y: 126, width: 129, height: 30, melt: true, meltDelay: 20 },
  { x: 6907, y: 207, width: 131, height: 29, melt: true, meltDelay: 20 },
  { x: 7202, y: 207, width: 246, height: 28 },
  { x: 7695, y: 308, width: 96, height: 19 },
  { x: 8038, y: 402, width: 52, height: 30, moveAxis: "x", moveRange: 82, moveSpeed: 0.048, movePhase: 1.64 },
  { x: 8337, y: 489, width: 129, height: 28, ghost: true, ghostPeriod: 123, ghostOnRatio: 0.40943877551020413 },
  { x: 8630, y: 489, width: 339, height: 19 },
  { x: 9201, y: 523, width: 183, height: 25, ghost: true, ghostPeriod: 123, ghostOnRatio: 0.40943877551020413 },
  { x: 9607, y: 530, width: 136, height: 14, ghost: true, ghostPeriod: 123, ghostOnRatio: 0.40943877551020413 },
  { x: 9952, y: 505, width: 79, height: 14, moveAxis: "x", moveRange: 114, moveSpeed: 0.041, movePhase: 2.65 },
  { x: 10195, y: 505, width: 339, height: 20 },
  { x: 10947, y: 434, width: 178, height: 26 },
  { x: 11310, y: 359, width: 117, height: 19, conveyor: true, conveyorSpeed: 1.52 },
  { x: 11598, y: 265, width: 88, height: 23, moveAxis: "x", moveRange: 75, moveSpeed: 0.051, movePhase: 5.1 },
  { x: 11849, y: 254, width: 424, height: 20 },
];

window.deadlyPlatforms = [
  { x: 474, y: 385, width: 178, height: 15, moveAxis: "x", moveRange: 90, moveSpeed: 0.045, movePhase: 2.46 },
  { x: 8087, y: 442, width: 50, height: 21, moveAxis: "y", moveRange: 80, moveSpeed: 0.046, movePhase: 0.67 },
  { x: 2592, y: 419, width: 101, height: 20 },
  { x: 3209, y: 276, width: 114, height: 20 },
  { x: 5253, y: 54, width: 121, height: 20 },
  { x: 7828, y: 306, width: 60, height: 20 },
  { x: 11157, y: 443, width: 153, height: 20 },
];

window.spikes = [
  { x: 3023, y: 273, size: 37 },
  { x: 4662, y: 118, size: 46 },
  { x: 5089, y: 58, size: 24 },
  { x: 5113, y: 58, size: 26 },
  { x: 5139, y: 58, size: 44 },
  { x: 10992, y: 434, size: 24 },
  { x: 11016, y: 434, size: 48 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1861, y: 451, reached: false },
  { x: 3538, y: 243, reached: false },
  { x: 5489, y: 28, reached: false },
  { x: 7325, y: 177, reached: false },
  { x: 8800, y: 459, reached: false },
  { x: 10365, y: 475, reached: false },
  { x: 12061, y: 224, reached: false }, // Final
];
