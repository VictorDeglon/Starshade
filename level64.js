// Level 64 Data — "Nightglass Span"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 64";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 707, y: 281, width: 147, height: 26, melt: true, meltDelay: 20 },
  { x: 1023, y: 179, width: 84, height: 17 },
  { x: 1518, y: 86, width: 171, height: 17, melt: true, meltDelay: 20 },
  { x: 1853, y: 86, width: 216, height: 17 },
  { x: 2486, y: 5, width: 87, height: 16, moveAxis: "x", moveRange: 95, moveSpeed: 0.059, movePhase: 4.98 },
  { x: 3010, y: -32, width: 116, height: 26, bounce: true, bounceStrength: -19 },
  { x: 3572, y: -49, width: 88, height: 18, bounce: true, bounceStrength: -17 },
  { x: 3893, y: -30, width: 158, height: 21, melt: true, meltDelay: 20 },
  { x: 4215, y: -30, width: 218, height: 22 },
  { x: 4685, y: 37, width: 212, height: 22, melt: true, meltDelay: 20 },
  { x: 5149, y: 120, width: 208, height: 17, bounce: true, bounceStrength: -17 },
  { x: 5609, y: 213, width: 52, height: 15, bounce: true, bounceStrength: -17 },
  { x: 5825, y: 213, width: 304, height: 23 },
  { x: 6381, y: 303, width: 120, height: 30, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 6753, y: 380, width: 207, height: 30, moveAxis: "x", moveRange: 135, moveSpeed: 0.056, movePhase: 3.36 },
  { x: 7203, y: 428, width: 177, height: 26, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 7544, y: 428, width: 376, height: 27 },
  { x: 8366, y: 415, width: 91, height: 19 },
  { x: 8888, y: 363, width: 202, height: 29, conveyor: true, conveyorSpeed: 1.07 },
  { x: 9284, y: 293, width: 69, height: 23, melt: true, meltDelay: 20 },
  { x: 9353, y: 293, width: 279, height: 20 },
  { x: 9837, y: 275, width: 95, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.3524489795918367 },
  { x: 10133, y: 261, width: 235, height: 20 },
  { x: 10527, y: 149, width: 172, height: 24 },
  { x: 11101, y: 40, width: 50, height: 18, melt: true, meltDelay: 20 },
  { x: 11568, y: -39, width: 45, height: 23, bounce: true, bounceStrength: -19 },
  { x: 11807, y: -104, width: 81, height: 14, moveAxis: "x", moveRange: 84, moveSpeed: 0.053, movePhase: 4.15 },
  { x: 12052, y: -104, width: 375, height: 20 },
  { x: 12873, y: -125, width: 146, height: 17, melt: true, meltDelay: 20 },
  { x: 13252, y: -107, width: 79, height: 22, bounce: true, bounceStrength: -20 },
  { x: 13574, y: -62, width: 143, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 13969, y: 6, width: 60, height: 25, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 14180, y: 8, width: 392, height: 20 },
];

window.deadlyPlatforms = [
  { x: 2439, y: 58, width: 78, height: 20, moveAxis: "y", moveRange: 109, moveSpeed: 0.052, movePhase: 0.35 },
  { x: 6693, y: 333, width: 176, height: 18, moveAxis: "y", moveRange: 145, moveSpeed: 0.065, movePhase: 5.22 },
  { x: 11729, y: -77, width: 54, height: 16, moveAxis: "y", moveRange: 66, moveSpeed: 0.058, movePhase: 4.7 },
  { x: 8479, y: 421, width: 77, height: 20 },
  { x: 10738, y: 141, width: 118, height: 20 },
];

window.spikes = [
  { x: 1040, y: 179, size: 26 },
  { x: 10547, y: 149, size: 39 },
  { x: 10586, y: 149, size: 55 },
  { x: 10641, y: 149, size: 33 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1961, y: 56, reached: false },
  { x: 4324, y: -60, reached: false },
  { x: 5977, y: 183, reached: false },
  { x: 7732, y: 398, reached: false },
  { x: 10193, y: 231, reached: false },
  { x: 12240, y: -134, reached: false },
  { x: 14376, y: -22, reached: false }, // Final
];
