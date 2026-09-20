// Level 49 Data — "Ashen Zenith"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 49";

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
  { x: 5036, y: 225, width: 114, height: 14 },
  { x: 5561, y: 133, width: 101, height: 17 },
  { x: 5662, y: 133, width: 290, height: 20 },
  { x: 6151, y: 108, width: 104, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.38306122448979585 },
  { x: 6435, y: 82, width: 275, height: 20 },
  { x: 7147, y: 47, width: 199, height: 29 },
  { x: 7573, y: 56, width: 162, height: 15, bounce: true, bounceStrength: -18 },
  { x: 7978, y: 94, width: 65, height: 15, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 8207, y: 94, width: 293, height: 17 },
  { x: 8752, y: 174, width: 172, height: 26 },
  { x: 9176, y: 272, width: 146, height: 19, moveAxis: "y", moveRange: 108, moveSpeed: 0.037, movePhase: 4.81 },
  { x: 9574, y: 379, width: 132, height: 14, melt: true, meltDelay: 20 },
  { x: 9870, y: 379, width: 341, height: 26 },
  { x: 10463, y: 465, width: 215, height: 27, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 10924, y: 518, width: 130, height: 18, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 11291, y: 544, width: 219, height: 28 },
  { x: 11674, y: 544, width: 360, height: 16 },
  { x: 12247, y: 518, width: 164, height: 15 },
  { x: 12838, y: 456, width: 113, height: 27 },
  { x: 13368, y: 375, width: 193, height: 18 },
  { x: 13725, y: 375, width: 344, height: 19 },
  { x: 14222, y: 371, width: 381, height: 20 },
];

window.deadlyPlatforms = [
  { x: 1084, y: 539, width: 60, height: 20 },
  { x: 4390, y: 429, width: 95, height: 20 },
  { x: 7372, y: 46, width: 148, height: 20 },
  { x: 8954, y: 175, width: 103, height: 20 },
  { x: 11531, y: 539, width: 128, height: 20 },
  { x: 12440, y: 519, width: 96, height: 20 },
  { x: 13596, y: 372, width: 135, height: 20 },
];

window.spikes = [
  { x: 3196, y: 525, size: 48 },
  { x: 3244, y: 525, size: 34 },
  { x: 4258, y: 428, size: 33 },
  { x: 4291, y: 428, size: 14 },
  { x: 4305, y: 428, size: 29 },
  { x: 5054, y: 225, size: 27 },
  { x: 5081, y: 225, size: 18 },
  { x: 5099, y: 225, size: 29 },
  { x: 5582, y: 133, size: 29 },
  { x: 5611, y: 133, size: 30 },
  { x: 8796, y: 174, size: 20 },
  { x: 8816, y: 174, size: 14 },
  { x: 8830, y: 174, size: 41 },
  { x: 11371, y: 544, size: 13 },
  { x: 12296, y: 518, size: 31 },
  { x: 12862, y: 456, size: 24 },
  { x: 13394, y: 375, size: 51 },
  { x: 13445, y: 375, size: 52 },
  { x: 13497, y: 375, size: 17 },
  { x: 13514, y: 375, size: 19 },
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
