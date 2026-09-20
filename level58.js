// Level 58 Data — "Cinderfall Vault"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 58";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 465, y: 270, width: 82, height: 16 },
  { x: 731, y: 187, width: 113, height: 28, bounce: true, bounceStrength: -19 },
  { x: 1032, y: 110, width: 232, height: 15, melt: true, meltDelay: 20 },
  { x: 1428, y: 110, width: 278, height: 24 },
  { x: 2143, y: 69, width: 196, height: 27, bounce: true, bounceStrength: -19 },
  { x: 2785, y: 54, width: 105, height: 18, bounce: true, bounceStrength: -19 },
  { x: 3127, y: 86, width: 192, height: 19, melt: true, meltDelay: 20 },
  { x: 3556, y: 123, width: 158, height: 27, moveAxis: "x", moveRange: 114, moveSpeed: 0.043, movePhase: 6.01 },
  { x: 3714, y: 123, width: 277, height: 20 },
  { x: 4197, y: 111, width: 91, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.36469387755102034 },
  { x: 4484, y: 89, width: 222, height: 20 },
  { x: 4958, y: 178, width: 72, height: 19, conveyor: true, conveyorSpeed: -1.81 },
  { x: 5282, y: 280, width: 183, height: 23, conveyor: true, conveyorSpeed: -1.02 },
  { x: 5717, y: 364, width: 203, height: 26, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 6172, y: 445, width: 200, height: 19 },
  { x: 6536, y: 445, width: 292, height: 19 },
  { x: 7071, y: 483, width: 187, height: 30, bounce: true, bounceStrength: -17 },
  { x: 7491, y: 497, width: 112, height: 20 },
  { x: 7816, y: 466, width: 49, height: 17, melt: true, meltDelay: 20 },
  { x: 8029, y: 466, width: 228, height: 29 },
  { x: 8678, y: 395, width: 197, height: 23, moveAxis: "x", moveRange: 134, moveSpeed: 0.046, movePhase: 4.54 },
  { x: 9044, y: 292, width: 179, height: 18 },
  { x: 9401, y: 201, width: 75, height: 22 },
  { x: 9645, y: 101, width: 100, height: 27 },
  { x: 9909, y: 101, width: 382, height: 16 },
  { x: 10485, y: 34, width: 201, height: 26, conveyor: true, conveyorSpeed: 1.61 },
  { x: 10884, y: -19, width: 176, height: 22 },
  { x: 11506, y: -35, width: 152, height: 24, bounce: true, bounceStrength: -16 },
  { x: 11891, y: -15, width: 56, height: 15, bounce: true, bounceStrength: -16 },
  { x: 12111, y: -15, width: 282, height: 30 },
  { x: 12645, y: 66, width: 192, height: 26, moveAxis: "x", moveRange: 120, moveSpeed: 0.047, movePhase: 4.33 },
  { x: 13089, y: 151, width: 71, height: 30, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 13348, y: 163, width: 425, height: 20 },
];

window.deadlyPlatforms = [
  { x: 8623, y: 449, width: 119, height: 16, moveAxis: "y", moveRange: 144, moveSpeed: 0.057, movePhase: 2.62 },
  { x: 12567, y: 7, width: 129, height: 23, moveAxis: "y", moveRange: 122, moveSpeed: 0.04, movePhase: 4.12 },
  { x: 571, y: 274, width: 60, height: 20 },
  { x: 6401, y: 438, width: 129, height: 20 },
  { x: 7625, y: 496, width: 68, height: 20 },
  { x: 9254, y: 298, width: 106, height: 20 },
  { x: 9498, y: 194, width: 60, height: 20 },
  { x: 9765, y: 99, width: 89, height: 20 },
  { x: 11086, y: -11, width: 131, height: 20 },
];

window.spikes = [
  { x: 489, y: 270, size: 12 },
  { x: 6209, y: 445, size: 49 },
  { x: 7507, y: 497, size: 49 },
  { x: 9680, y: 101, size: 25 },
  { x: 10911, y: -19, size: 48 },
  { x: 10959, y: -19, size: 34 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1567, y: 80, reached: false },
  { x: 4544, y: 59, reached: false },
  { x: 6682, y: 415, reached: false },
  { x: 8143, y: 436, reached: false },
  { x: 10100, y: 71, reached: false },
  { x: 12252, y: -45, reached: false },
  { x: 13561, y: 133, reached: false }, // Final
];
