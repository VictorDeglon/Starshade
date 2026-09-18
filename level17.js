// Level 17 Data — "Emberfall Reach"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 17";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 524, y: 436, width: 88, height: 23, melt: true, meltDelay: 23 },
  { x: 836, y: 494, width: 73, height: 19, ghost: true, ghostPeriod: 148, ghostOnRatio: 0.48695652173913045 },
  { x: 1139, y: 577, width: 144, height: 30, moveAxis: "y", moveRange: 94, moveSpeed: 0.038, movePhase: 5.53 },
  { x: 1504, y: 621, width: 112, height: 29, ghost: true, ghostPeriod: 148, ghostOnRatio: 0.48695652173913045 },
  { x: 1780, y: 621, width: 399, height: 18 },
  { x: 2391, y: 638, width: 75, height: 27, ghost: true, ghostPeriod: 148, ghostOnRatio: 0.48695652173913045 },
  { x: 2673, y: 640, width: 56, height: 17, moveAxis: "x", moveRange: 94, moveSpeed: 0.035, movePhase: 2.12 },
  { x: 2923, y: 610, width: 60, height: 28, moveAxis: "y", moveRange: 70, moveSpeed: 0.043, movePhase: 6.02 },
  { x: 3147, y: 610, width: 373, height: 14 },
  { x: 3700, y: 549, width: 138, height: 22 },
  { x: 4018, y: 490, width: 63, height: 25, melt: true, meltDelay: 23 },
  { x: 4244, y: 403, width: 193, height: 25 },
  { x: 4601, y: 403, width: 205, height: 20 },
  { x: 4992, y: 352, width: 140, height: 20 },
  { x: 5533, y: 324, width: 91, height: 21 },
  { x: 5818, y: 299, width: 173, height: 24, ghost: true, ghostPeriod: 148, ghostOnRatio: 0.48695652173913045 },
  { x: 5991, y: 299, width: 295, height: 20 },
  { x: 6494, y: 287, width: 108, height: 20, ghost: true, ghostPeriod: 144, ghostOnRatio: 0.4695652173913043 },
  { x: 6777, y: 273, width: 275, height: 20 },
  { x: 7268, y: 305, width: 70, height: 16, moveAxis: "x", moveRange: 88, moveSpeed: 0.032, movePhase: 2.26 },
  { x: 7559, y: 351, width: 115, height: 24 },
  { x: 7904, y: 416, width: 200, height: 20, moveAxis: "y", moveRange: 61, moveSpeed: 0.03, movePhase: 2.78 },
  { x: 8334, y: 487, width: 191, height: 24, melt: true, meltDelay: 23 },
  { x: 8689, y: 487, width: 260, height: 14 },
  { x: 9179, y: 555, width: 161, height: 17, ghost: true, ghostPeriod: 148, ghostOnRatio: 0.48695652173913045 },
  { x: 9561, y: 602, width: 45, height: 28, moveAxis: "y", moveRange: 69, moveSpeed: 0.031, movePhase: 3.75 },
  { x: 9822, y: 631, width: 151, height: 29, ghost: true, ghostPeriod: 148, ghostOnRatio: 0.48695652173913045 },
  { x: 10147, y: 619, width: 383, height: 20 },
];

window.deadlyPlatforms = [
  { x: 3874, y: 544, width: 78, height: 20 },
  { x: 4458, y: 402, width: 155, height: 20 },
  { x: 5160, y: 361, width: 89, height: 20 },
  { x: 5663, y: 319, width: 60, height: 20 },
];

window.spikes = [
  { x: 3736, y: 549, size: 23 },
  { x: 4307, y: 403, size: 41 },
  { x: 4348, y: 403, size: 40 },
  { x: 4388, y: 403, size: 37 },
  { x: 5020, y: 352, size: 33 },
  { x: 7583, y: 351, size: 33 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1980, y: 591, reached: false },
  { x: 3334, y: 580, reached: false },
  { x: 4704, y: 373, reached: false },
  { x: 6837, y: 243, reached: false },
  { x: 8819, y: 457, reached: false },
  { x: 10339, y: 589, reached: false }, // Final
];
