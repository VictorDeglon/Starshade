// Level 71 Data — "Ravenous Span"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 71";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 702, y: 268, width: 102, height: 25 },
  { x: 1221, y: 189, width: 88, height: 29 },
  { x: 1497, y: 116, width: 78, height: 23, moveAxis: "y", moveRange: 113, moveSpeed: 0.063, movePhase: 5.61 },
  { x: 1788, y: 92, width: 145, height: 17, conveyor: true, conveyorSpeed: 1.61 },
  { x: 2097, y: 92, width: 301, height: 22 },
  { x: 2631, y: 111, width: 46, height: 20 },
  { x: 2923, y: 164, width: 123, height: 23, bounce: true, bounceStrength: -18 },
  { x: 3298, y: 261, width: 131, height: 24, melt: true, meltDelay: 20 },
  { x: 3593, y: 261, width: 378, height: 21 },
  { x: 4223, y: 375, width: 208, height: 19, bounce: true, bounceStrength: -19 },
  { x: 4683, y: 471, width: 230, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 5165, y: 559, width: 145, height: 19, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 5474, y: 559, width: 221, height: 25 },
  { x: 5932, y: 587, width: 219, height: 28, melt: true, meltDelay: 20 },
  { x: 6374, y: 586, width: 200, height: 26 },
  { x: 7011, y: 543, width: 69, height: 22, melt: true, meltDelay: 20 },
  { x: 7268, y: 472, width: 116, height: 28, melt: true, meltDelay: 20 },
  { x: 7548, y: 472, width: 282, height: 27 },
  { x: 7995, y: 365, width: 148, height: 21 },
  { x: 8550, y: 268, width: 180, height: 25, conveyor: true, conveyorSpeed: 2.11 },
  { x: 9141, y: 180, width: 166, height: 29, conveyor: true, conveyorSpeed: 1.52 },
  { x: 9476, y: 80, width: 199, height: 29, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 9675, y: 80, width: 263, height: 20 },
  { x: 10129, y: 53, width: 101, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 10413, y: 43, width: 275, height: 20 },
  { x: 11128, y: 14, width: 176, height: 23, melt: true, meltDelay: 20 },
  { x: 11750, y: -2, width: 218, height: 21 },
  { x: 12205, y: 23, width: 158, height: 16, moveAxis: "x", moveRange: 107, moveSpeed: 0.063, movePhase: 5.09 },
  { x: 12615, y: 88, width: 102, height: 22, bounce: true, bounceStrength: -18 },
  { x: 12881, y: 88, width: 390, height: 27 },
  { x: 13523, y: 173, width: 120, height: 18, bounce: true, bounceStrength: -19 },
  { x: 13895, y: 265, width: 91, height: 25, bounce: true, bounceStrength: -17 },
  { x: 14238, y: 376, width: 111, height: 18, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 14530, y: 362, width: 406, height: 20 },
];

window.deadlyPlatforms = [
  { x: 1430, y: 163, width: 53, height: 14, moveAxis: "x", moveRange: 99, moveSpeed: 0.059, movePhase: 0.17 },
  { x: 12258, y: -34, width: 127, height: 21, moveAxis: "y", moveRange: 131, moveSpeed: 0.058, movePhase: 3.2 },
  { x: 838, y: 278, width: 90, height: 20 },
  { x: 1348, y: 187, width: 79, height: 20 },
  { x: 2699, y: 113, width: 60, height: 20 },
  { x: 6598, y: 582, width: 153, height: 20 },
  { x: 8174, y: 365, width: 106, height: 20 },
  { x: 12007, y: -9, width: 114, height: 20 },
];

window.spikes = [
  { x: 731, y: 268, size: 46 },
  { x: 2640, y: 111, size: 27 },
  { x: 6446, y: 586, size: 21 },
  { x: 6467, y: 586, size: 13 },
  { x: 6480, y: 586, size: 47 },
  { x: 6527, y: 586, size: 36 },
  { x: 8028, y: 365, size: 35 },
  { x: 8063, y: 365, size: 12 },
  { x: 11820, y: -2, size: 50 },
  { x: 11870, y: -2, size: 27 },
  { x: 11897, y: -2, size: 45 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2248, y: 62, reached: false },
  { x: 3782, y: 231, reached: false },
  { x: 5585, y: 529, reached: false },
  { x: 7689, y: 442, reached: false },
  { x: 10473, y: 13, reached: false },
  { x: 13076, y: 58, reached: false },
  { x: 14733, y: 332, reached: false }, // Final
];
