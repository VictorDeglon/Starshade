// Level 44 Data — "The Umbral Stair"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 44";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 523, y: 377, width: 203, height: 26 },
  { x: 943, y: 360, width: 144, height: 24, conveyor: true, conveyorSpeed: -1.88 },
  { x: 1507, y: 293, width: 103, height: 23, moveAxis: "x", moveRange: 73, moveSpeed: 0.046, movePhase: 6.05 },
  { x: 1774, y: 293, width: 264, height: 29 },
  { x: 2454, y: 207, width: 164, height: 17 },
  { x: 2802, y: 126, width: 76, height: 14, moveAxis: "x", moveRange: 114, moveSpeed: 0.054, movePhase: 5.69 },
  { x: 3298, y: 52, width: 144, height: 19 },
  { x: 3442, y: 52, width: 265, height: 20 },
  { x: 3899, y: 37, width: 93, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.3932653061224489 },
  { x: 4189, y: 11, width: 271, height: 20 },
  { x: 4657, y: -44, width: 134, height: 25, moveAxis: "x", moveRange: 120, moveSpeed: 0.039, movePhase: 5.33 },
  { x: 4998, y: -84, width: 55, height: 24 },
  { x: 5276, y: -89, width: 209, height: 23 },
  { x: 5649, y: -89, width: 258, height: 19 },
  { x: 6159, y: -23, width: 156, height: 22, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 6567, y: 58, width: 172, height: 25, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 6991, y: 156, width: 145, height: 20, moveAxis: "x", moveRange: 82, moveSpeed: 0.049, movePhase: 0.16 },
  { x: 7388, y: 246, width: 47, height: 25 },
  { x: 7599, y: 246, width: 348, height: 25 },
  { x: 8199, y: 321, width: 60, height: 21 },
  { x: 8501, y: 364, width: 98, height: 16 },
  { x: 8831, y: 386, width: 60, height: 20, moveAxis: "x", moveRange: 125, moveSpeed: 0.04, movePhase: 5.71 },
  { x: 9055, y: 386, width: 371, height: 21 },
  { x: 9871, y: 372, width: 145, height: 16, conveyor: true, conveyorSpeed: -2.14 },
  { x: 10219, y: 321, width: 47, height: 20, melt: true, meltDelay: 20 },
  { x: 10682, y: 243, width: 97, height: 30 },
  { x: 10943, y: 243, width: 300, height: 28 },
  { x: 11427, y: 161, width: 165, height: 15, melt: true, meltDelay: 20 },
  { x: 12008, y: 75, width: 204, height: 19, conveyor: true, conveyorSpeed: 0.96 },
  { x: 12632, y: 5, width: 129, height: 23, bounce: true, bounceStrength: -18 },
  { x: 12954, y: -5, width: 410, height: 20 },
];

window.deadlyPlatforms = [
  { x: 1466, y: 346, width: 89, height: 20, moveAxis: "y", moveRange: 70, moveSpeed: 0.047, movePhase: 3.63 },
  { x: 6902, y: 128, width: 119, height: 15, moveAxis: "y", moveRange: 74, moveSpeed: 0.057, movePhase: 4.15 },
  { x: 750, y: 371, width: 176, height: 20 },
  { x: 2641, y: 204, width: 133, height: 20 },
  { x: 3463, y: 53, width: 94, height: 20 },
  { x: 5086, y: -81, width: 60, height: 20 },
  { x: 5512, y: -85, width: 169, height: 20 },
  { x: 7467, y: 244, width: 60, height: 20 },
];

window.spikes = [
  { x: 583, y: 377, size: 17 },
  { x: 2512, y: 207, size: 50 },
  { x: 2562, y: 207, size: 15 },
  { x: 3328, y: 52, size: 53 },
  { x: 3381, y: 52, size: 28 },
  { x: 5006, y: -84, size: 17 },
  { x: 5337, y: -89, size: 32 },
  { x: 5369, y: -89, size: 24 },
  { x: 8218, y: 321, size: 16 },
  { x: 8521, y: 364, size: 37 },
  { x: 10714, y: 243, size: 25 },
  { x: 10739, y: 243, size: 12 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1906, y: 263, reached: false },
  { x: 4249, y: -19, reached: false },
  { x: 5778, y: -119, reached: false },
  { x: 7773, y: 216, reached: false },
  { x: 9241, y: 356, reached: false },
  { x: 11093, y: 213, reached: false },
  { x: 13159, y: -35, reached: false }, // Final
];
