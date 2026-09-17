// Level 16 Data — "The Hollow Spiral"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 16";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 486, y: 402, width: 122, height: 20, ghost: true, ghostPeriod: 180, ghostOnRatio: 0.5875 },
  { x: 773, y: 417, width: 88, height: 20 },
  { x: 1064, y: 457, width: 165, height: 20 },
  { x: 1371, y: 492, width: 152, height: 20, ghost: true, ghostPeriod: 180, ghostOnRatio: 0.5875 },
  { x: 1692, y: 492, width: 234, height: 20 },
  { x: 2092, y: 540, width: 89, height: 20, ghost: true, ghostPeriod: 180, ghostOnRatio: 0.5875 },
  { x: 2338, y: 585, width: 112, height: 20, ghost: true, ghostPeriod: 180, ghostOnRatio: 0.5875 },
  { x: 2602, y: 623, width: 112, height: 20, melt: true, meltDelay: 27 },
  { x: 2866, y: 635, width: 141, height: 20 },
  { x: 3193, y: 635, width: 295, height: 20 },
  { x: 3697, y: 632, width: 110, height: 20 },
  { x: 4002, y: 604, width: 82, height: 20 },
  { x: 4354, y: 558, width: 148, height: 20 },
  { x: 4663, y: 558, width: 287, height: 20 },
  { x: 5135, y: 502, width: 92, height: 20 },
  { x: 5389, y: 438, width: 162, height: 20, moveAxis: "x", moveRange: 54, moveSpeed: 0.026, movePhase: 0.78 },
  { x: 5721, y: 406, width: 120, height: 20 },
  { x: 6144, y: 384, width: 106, height: 20, moveAxis: "y", moveRange: 42, moveSpeed: 0.024, movePhase: 2.66 },
  { x: 6400, y: 384, width: 400, height: 20 },
];

window.deadlyPlatforms = [
  { x: 5265, y: 508, width: 60, height: 20 },
  { x: 5880, y: 404, width: 100, height: 20 },
];

window.spikes = [
  { x: 2949, y: 635, size: 25 },
  { x: 5179, y: 502, size: 18 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1809, y: 462, reached: false },
  { x: 3341, y: 605, reached: false },
  { x: 4807, y: 528, reached: false },
  { x: 6600, y: 354, reached: false }, // Final
];
