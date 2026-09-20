// Level 51 Data — "The Fractured Choir"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 51";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 498, y: 324, width: 112, height: 18, conveyor: true, conveyorSpeed: -0.96 },
  { x: 794, y: 242, width: 197, height: 25, melt: true, meltDelay: 20 },
  { x: 1166, y: 147, width: 165, height: 27, conveyor: true, conveyorSpeed: -1.44 },
  { x: 1515, y: 65, width: 186, height: 27 },
  { x: 1865, y: 65, width: 189, height: 26 },
  { x: 2481, y: 9, width: 157, height: 30, moveAxis: "x", moveRange: 94, moveSpeed: 0.053, movePhase: 5.68 },
  { x: 3065, y: -54, width: 101, height: 17 },
  { x: 3383, y: -76, width: 68, height: 14, conveyor: true, conveyorSpeed: 1.16 },
  { x: 3678, y: -67, width: 223, height: 17 },
  { x: 4065, y: -67, width: 381, height: 14 },
  { x: 4692, y: -5, width: 198, height: 25, melt: true, meltDelay: 20 },
  { x: 5142, y: 80, width: 139, height: 16, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 5533, y: 171, width: 188, height: 27, bounce: true, bounceStrength: -18 },
  { x: 5885, y: 171, width: 272, height: 20 },
  { x: 6409, y: 263, width: 89, height: 19, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 6750, y: 332, width: 178, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 7174, y: 389, width: 181, height: 28 },
  { x: 7519, y: 389, width: 300, height: 29 },
  { x: 8269, y: 384, width: 130, height: 16 },
  { x: 8839, y: 357, width: 121, height: 29, bounce: true, bounceStrength: -20 },
  { x: 9387, y: 298, width: 119, height: 21 },
  { x: 9694, y: 226, width: 218, height: 30, conveyor: true, conveyorSpeed: -2.11 },
  { x: 9912, y: 226, width: 240, height: 20 },
  { x: 10347, y: 204, width: 108, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.3789795918367347 },
  { x: 10637, y: 180, width: 256, height: 20 },
  { x: 11068, y: 81, width: 68, height: 23, bounce: true, bounceStrength: -18 },
  { x: 11305, y: -20, width: 52, height: 16, melt: true, meltDelay: 20 },
  { x: 11541, y: -105, width: 112, height: 14 },
  { x: 12080, y: -162, width: 220, height: 14 },
  { x: 12464, y: -162, width: 270, height: 15 },
  { x: 12957, y: -165, width: 119, height: 20, melt: true, meltDelay: 20 },
  { x: 13235, y: -172, width: 423, height: 20 },
];

window.deadlyPlatforms = [
  { x: 2536, y: 62, width: 88, height: 19, moveAxis: "y", moveRange: 83, moveSpeed: 0.056, movePhase: 1.35 },
  { x: 1736, y: 64, width: 99, height: 20 },
  { x: 3924, y: -61, width: 149, height: 20 },
  { x: 7385, y: 392, width: 121, height: 20 },
  { x: 8434, y: 381, width: 76, height: 20 },
  { x: 9542, y: 294, width: 78, height: 20 },
  { x: 11677, y: -106, width: 60, height: 20 },
  { x: 12324, y: -171, width: 127, height: 20 },
];

window.spikes = [
  { x: 1562, y: 65, size: 32 },
  { x: 1594, y: 65, size: 27 },
  { x: 3732, y: -67, size: 33 },
  { x: 3765, y: -67, size: 48 },
  { x: 7218, y: 389, size: 41 },
  { x: 8312, y: 384, size: 13 },
  { x: 8325, y: 384, size: 41 },
  { x: 9403, y: 298, size: 24 },
  { x: 9427, y: 298, size: 44 },
  { x: 9471, y: 298, size: 15 },
  { x: 12161, y: -162, size: 47 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1960, y: 35, reached: false },
  { x: 4256, y: -97, reached: false },
  { x: 6021, y: 141, reached: false },
  { x: 7669, y: 359, reached: false },
  { x: 10697, y: 150, reached: false },
  { x: 12599, y: -192, reached: false },
  { x: 13447, y: -202, reached: false }, // Final
];
