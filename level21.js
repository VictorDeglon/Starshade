// Level 21 Data — "Starlit Precipice"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 21";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 456, y: 320, width: 172, height: 31 },
  { x: 788, y: 274, width: 148, height: 14, moveAxis: "x", moveRange: 101, moveSpeed: 0.034, movePhase: 1.27 },
  { x: 1202, y: 256, width: 83, height: 37 },
  { x: 1419, y: 262, width: 90, height: 28 },
  { x: 1718, y: 262, width: 278, height: 34 },
  { x: 2198, y: 314, width: 234, height: 40, moveAxis: "x", moveRange: 72, moveSpeed: 0.034, movePhase: 2.73 },
  { x: 2594, y: 389, width: 184, height: 30, ghost: true, ghostPeriod: 134, ghostOnRatio: 0.4434782608695652 },
  { x: 2921, y: 473, width: 224, height: 21, melt: true, meltDelay: 22 },
  { x: 3348, y: 473, width: 329, height: 13 },
  { x: 3843, y: 542, width: 51, height: 34, melt: true, meltDelay: 22 },
  { x: 4066, y: 621, width: 76, height: 22, ghost: true, ghostPeriod: 134, ghostOnRatio: 0.4434782608695652 },
  { x: 4278, y: 679, width: 221, height: 22, melt: true, meltDelay: 22 },
  { x: 4703, y: 716, width: 52, height: 19, ghost: true, ghostPeriod: 134, ghostOnRatio: 0.4434782608695652 },
  { x: 4755, y: 716, width: 272, height: 20 },
  { x: 5225, y: 702, width: 100, height: 20, ghost: true, ghostPeriod: 132, ghostOnRatio: 0.4347826086956521 },
  { x: 5521, y: 674, width: 278, height: 20 },
  { x: 5963, y: 640, width: 87, height: 42 },
  { x: 6314, y: 597, width: 166, height: 12, melt: true, meltDelay: 22 },
  { x: 6651, y: 535, width: 216, height: 14, melt: true, meltDelay: 22 },
  { x: 7056, y: 462, width: 71, height: 15 },
  { x: 7285, y: 462, width: 304, height: 25 },
  { x: 7875, y: 375, width: 224, height: 22 },
  { x: 8413, y: 308, width: 171, height: 16 },
  { x: 8746, y: 267, width: 201, height: 27 },
  { x: 9264, y: 240, width: 109, height: 44 },
  { x: 9506, y: 240, width: 248, height: 45 },
  { x: 9908, y: 266, width: 225, height: 41 },
  { x: 10337, y: 308, width: 227, height: 39, melt: true, meltDelay: 22 },
  { x: 10715, y: 311, width: 407, height: 20 },
];

window.deadlyPlatforms = [
  { x: 1307, y: 263, width: 70, height: 20 },
  { x: 7149, y: 470, width: 60, height: 20 },
  { x: 8126, y: 368, width: 187, height: 20 },
  { x: 8610, y: 310, width: 126, height: 20 },
  { x: 8986, y: 258, width: 162, height: 20 },
];

window.spikes = [
  { x: 511, y: 320, size: 48 },
  { x: 559, y: 320, size: 24 },
  { x: 1223, y: 256, size: 25 },
  { x: 1443, y: 262, size: 27 },
  { x: 5994, y: 640, size: 48 },
  { x: 7079, y: 462, size: 24 },
  { x: 7911, y: 375, size: 47 },
  { x: 7958, y: 375, size: 41 },
  { x: 7999, y: 375, size: 37 },
  { x: 9292, y: 240, size: 14 },
  { x: 9306, y: 240, size: 20 },
  { x: 9326, y: 240, size: 25 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1857, y: 232, reached: false },
  { x: 3513, y: 443, reached: false },
  { x: 5581, y: 644, reached: false },
  { x: 7437, y: 432, reached: false },
  { x: 9630, y: 210, reached: false },
  { x: 10919, y: 281, reached: false }, // Final
];
