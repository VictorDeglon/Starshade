// Level 35 Data — "Skyline Interlude"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Skyline Interlude";
window.levelAccent = "#ff9838";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 531, y: 405, width: 197, height: 28, ghost: true, ghostPeriod: 125, ghostOnRatio: 0.4145408163265306 },
  { x: 969, y: 460, width: 94, height: 16, moveAxis: "x", moveRange: 101, moveSpeed: 0.035, movePhase: 0.09 },
  { x: 1309, y: 543, width: 165, height: 18, conveyor: true, conveyorSpeed: -0.94 },
  { x: 1638, y: 543, width: 221, height: 28 },
  { x: 2105, y: 644, width: 139, height: 28, ghost: true, ghostPeriod: 125, ghostOnRatio: 0.4145408163265306 },
  { x: 2490, y: 731, width: 102, height: 19 },
  { x: 2838, y: 797, width: 107, height: 27, moveAxis: "y", moveRange: 90, moveSpeed: 0.038, movePhase: 2.78 },
  { x: 3109, y: 797, width: 267, height: 15 },
  { x: 3598, y: 803, width: 77, height: 25, moveAxis: "x", moveRange: 93, moveSpeed: 0.054, movePhase: 1.08 },
  { x: 3893, y: 796, width: 158, height: 29, conveyor: true, conveyorSpeed: -0.92 },
  { x: 4481, y: 765, width: 208, height: 15, conveyor: true, conveyorSpeed: -1.43 },
  { x: 5106, y: 709, width: 109, height: 30, conveyor: true, conveyorSpeed: -1.27 },
  { x: 5379, y: 709, width: 187, height: 26 },
  { x: 5750, y: 635, width: 140, height: 22, moveAxis: "x", moveRange: 86, moveSpeed: 0.047, movePhase: 4.47 },
  { x: 6292, y: 548, width: 92, height: 23, conveyor: true, conveyorSpeed: 0.97 },
  { x: 6786, y: 457, width: 170, height: 29, conveyor: true, conveyorSpeed: -1.07 },
  { x: 7120, y: 457, width: 236, height: 18 },
  { x: 7786, y: 426, width: 177, height: 28, bounce: true, bounceStrength: -19 },
  { x: 8399, y: 413, width: 47, height: 30, conveyor: true, conveyorSpeed: -1.13 },
  { x: 8673, y: 426, width: 158, height: 14, conveyor: true, conveyorSpeed: 1.32 },
  { x: 9068, y: 473, width: 68, height: 30, conveyor: true, conveyorSpeed: -2.07 },
  { x: 9300, y: 473, width: 242, height: 25 },
  { x: 9788, y: 562, width: 97, height: 30, ghost: true, ghostPeriod: 125, ghostOnRatio: 0.4145408163265306 },
  { x: 10131, y: 657, width: 65, height: 15, ghost: true, ghostPeriod: 125, ghostOnRatio: 0.4145408163265306 },
  { x: 10442, y: 743, width: 73, height: 21, ghost: true, ghostPeriod: 125, ghostOnRatio: 0.4145408163265306 },
  { x: 10679, y: 743, width: 307, height: 23 },
  { x: 11227, y: 804, width: 211, height: 15, ghost: true, ghostPeriod: 125, ghostOnRatio: 0.4145408163265306 },
  { x: 11645, y: 804, width: 421, height: 20 },
];

window.deadlyPlatforms = [
  { x: 2623, y: 730, width: 65, height: 20 },
];

window.spikes = [
  { x: 2509, y: 731, size: 45 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1749, y: 513, reached: false },
  { x: 3243, y: 767, reached: false },
  { x: 5473, y: 679, reached: false },
  { x: 7238, y: 427, reached: false },
  { x: 9421, y: 443, reached: false },
  { x: 10833, y: 713, reached: false },
  { x: 11856, y: 774, reached: false }, // Final
];

window.forceZones = [
  { x: 3119, y: 707, width: 247, height: 90, axis: "x", force: -0.212 },
  { x: 9310, y: 383, width: 222, height: 90, axis: "x", force: 0.166 },
];
