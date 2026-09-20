// Level 56 Data — "Starwake Perimeter"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 56";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 543, y: 420, width: 166, height: 25 },
  { x: 946, y: 455, width: 116, height: 28, melt: true, meltDelay: 20 },
  { x: 1289, y: 461, width: 78, height: 20, melt: true, meltDelay: 20 },
  { x: 1531, y: 461, width: 275, height: 21 },
  { x: 1994, y: 386, width: 218, height: 20, moveAxis: "x", moveRange: 75, moveSpeed: 0.046, movePhase: 1.17 },
  { x: 2390, y: 300, width: 168, height: 29, moveAxis: "x", moveRange: 106, moveSpeed: 0.041, movePhase: 5.45 },
  { x: 2965, y: 203, width: 126, height: 17, melt: true, meltDelay: 20 },
  { x: 3091, y: 203, width: 293, height: 20 },
  { x: 3581, y: 179, width: 102, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.3687755102040816 },
  { x: 3863, y: 150, width: 253, height: 20 },
  { x: 4300, y: 70, width: 115, height: 16, melt: true, meltDelay: 20 },
  { x: 4603, y: -8, width: 188, height: 19, moveAxis: "x", moveRange: 112, moveSpeed: 0.047, movePhase: 3.1 },
  { x: 4989, y: -68, width: 193, height: 14, conveyor: true, conveyorSpeed: -2.17 },
  { x: 5395, y: -91, width: 234, height: 18, melt: true, meltDelay: 20 },
  { x: 5793, y: -91, width: 243, height: 14 },
  { x: 6273, y: -57, width: 196, height: 28, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 6712, y: -9, width: 92, height: 24, melt: true, meltDelay: 20 },
  { x: 7056, y: 79, width: 47, height: 28 },
  { x: 7355, y: 166, width: 96, height: 27, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 7615, y: 166, width: 244, height: 24 },
  { x: 8111, y: 248, width: 211, height: 27, bounce: true, bounceStrength: -20 },
  { x: 8574, y: 325, width: 215, height: 27 },
  { x: 9041, y: 390, width: 191, height: 22, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 9465, y: 403, width: 98, height: 16, melt: true, meltDelay: 20 },
  { x: 9727, y: 403, width: 303, height: 20 },
  { x: 10470, y: 376, width: 104, height: 25 },
  { x: 10772, y: 317, width: 132, height: 14, moveAxis: "x", moveRange: 127, moveSpeed: 0.045, movePhase: 3 },
  { x: 11079, y: 222, width: 184, height: 16, melt: true, meltDelay: 20 },
  { x: 11670, y: 123, width: 194, height: 30, moveAxis: "x", moveRange: 123, moveSpeed: 0.045, movePhase: 5.55 },
  { x: 12028, y: 123, width: 318, height: 20 },
  { x: 12530, y: 38, width: 144, height: 23 },
  { x: 13095, y: -37, width: 188, height: 17, conveyor: true, conveyorSpeed: -2.15 },
  { x: 13489, y: -50, width: 388, height: 20 },
];

window.deadlyPlatforms = [
  { x: 11736, y: 177, width: 139, height: 22, moveAxis: "y", moveRange: 102, moveSpeed: 0.042, movePhase: 5.36 },
  { x: 733, y: 419, width: 124, height: 20 },
  { x: 7138, y: 83, width: 60, height: 20 },
  { x: 10612, y: 383, width: 82, height: 20 },
  { x: 12713, y: 41, width: 105, height: 20 },
];

window.spikes = [
  { x: 564, y: 420, size: 28 },
  { x: 592, y: 420, size: 37 },
  { x: 629, y: 420, size: 20 },
  { x: 649, y: 420, size: 31 },
  { x: 8643, y: 325, size: 23 },
  { x: 8666, y: 325, size: 16 },
  { x: 8682, y: 325, size: 56 },
  { x: 8738, y: 325, size: 12 },
  { x: 10493, y: 376, size: 31 },
  { x: 12571, y: 38, size: 57 },
  { x: 12628, y: 38, size: 25 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1669, y: 431, reached: false },
  { x: 3923, y: 120, reached: false },
  { x: 5915, y: -121, reached: false },
  { x: 7737, y: 136, reached: false },
  { x: 9879, y: 373, reached: false },
  { x: 12187, y: 93, reached: false },
  { x: 13683, y: -80, reached: false }, // Final
];
