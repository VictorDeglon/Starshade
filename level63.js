// Level 63 Data — "The Ember Choir"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 63";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 517, y: 363, width: 45, height: 14 },
  { x: 760, y: 310, width: 113, height: 22, conveyor: true, conveyorSpeed: 1.53 },
  { x: 1290, y: 227, width: 90, height: 26, melt: true, meltDelay: 20 },
  { x: 1544, y: 227, width: 328, height: 26 },
  { x: 2283, y: 140, width: 177, height: 19, moveAxis: "x", moveRange: 134, moveSpeed: 0.041, movePhase: 5.33 },
  { x: 2877, y: 54, width: 81, height: 14 },
  { x: 3375, y: -26, width: 109, height: 22 },
  { x: 3911, y: -92, width: 106, height: 24, melt: true, meltDelay: 20 },
  { x: 4017, y: -92, width: 246, height: 20 },
  { x: 4462, y: -112, width: 109, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.3544897959183673 },
  { x: 4745, y: -131, width: 237, height: 20 },
  { x: 5199, y: -143, width: 190, height: 21, moveAxis: "y", moveRange: 108, moveSpeed: 0.044, movePhase: 1.95 },
  { x: 5616, y: -138, width: 48, height: 23, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 5901, y: -101, width: 151, height: 17, bounce: true, bounceStrength: -17 },
  { x: 6052, y: -101, width: 257, height: 20 },
  { x: 6501, y: -119, width: 93, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.3544897959183673 },
  { x: 6794, y: -137, width: 263, height: 20 },
  { x: 7309, y: -53, width: 173, height: 30, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 7734, y: 55, width: 60, height: 15, conveyor: true, conveyorSpeed: -1 },
  { x: 8046, y: 158, width: 83, height: 18, bounce: true, bounceStrength: -20 },
  { x: 8381, y: 240, width: 60, height: 16, bounce: true, bounceStrength: -16 },
  { x: 8605, y: 240, width: 226, height: 25 },
  { x: 9077, y: 302, width: 161, height: 29, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 9471, y: 315, width: 185, height: 29, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 10106, y: 305, width: 206, height: 23, bounce: true, bounceStrength: -19 },
  { x: 10752, y: 276, width: 55, height: 18, bounce: true, bounceStrength: -19 },
  { x: 10971, y: 276, width: 384, height: 14 },
  { x: 11530, y: 179, width: 126, height: 21 },
  { x: 12063, y: 82, width: 188, height: 30, melt: true, meltDelay: 20 },
  { x: 12658, y: -17, width: 224, height: 23, melt: true, meltDelay: 20 },
  { x: 13046, y: -17, width: 235, height: 26 },
  { x: 13702, y: -84, width: 229, height: 20 },
  { x: 14135, y: -135, width: 219, height: 17 },
  { x: 14800, y: -151, width: 45, height: 24, melt: true, meltDelay: 20 },
  { x: 15013, y: -137, width: 416, height: 20 },
];

window.deadlyPlatforms = [
  { x: 2347, y: 197, width: 151, height: 18, moveAxis: "y", moveRange: 140, moveSpeed: 0.048, movePhase: 1.79 },
  { x: 584, y: 371, width: 60, height: 20 },
  { x: 2993, y: 60, width: 62, height: 20 },
  { x: 3513, y: -35, width: 61, height: 20 },
  { x: 11686, y: 176, width: 90, height: 20 },
  { x: 14384, y: -127, width: 121, height: 20 },
];

window.spikes = [
  { x: 529, y: 363, size: 13 },
  { x: 2887, y: 54, size: 39 },
  { x: 11547, y: 179, size: 54 },
  { x: 13734, y: -84, size: 23 },
  { x: 13757, y: -84, size: 15 },
  { x: 13772, y: -84, size: 52 },
  { x: 13824, y: -84, size: 50 },
  { x: 14210, y: -135, size: 37 },
  { x: 14247, y: -135, size: 36 },
  { x: 14283, y: -135, size: 43 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1708, y: 197, reached: false },
  { x: 4805, y: -161, reached: false },
  { x: 6854, y: -167, reached: false },
  { x: 8718, y: 210, reached: false },
  { x: 11163, y: 246, reached: false },
  { x: 13164, y: -47, reached: false },
  { x: 15221, y: -167, reached: false }, // Final
];
