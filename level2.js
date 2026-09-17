// Level 2 Data — "Steady Climb"
// Still gentle, but introduces two firsts: a slow moving platform (safely
// telegraphed with a checkpoint right before it), and a stretch of
// narrower footing. Both are easy to fail without losing much progress.

window.levelText = "Level 2";

window.platforms = [
  { x: 50, y: 460, width: 300, height: 20 }, // Start

  { x: 430, y: 430, width: 170, height: 20 },
  { x: 680, y: 400, width: 170, height: 20 },
  { x: 930, y: 370, width: 170, height: 20 },
  { x: 1180, y: 400, width: 170, height: 20 }, // gentle dip

  { x: 1450, y: 380, width: 260, height: 20 }, // breather 1

  // First moving platform — small, slow, easy to read and time.
  {
    x: 1830,
    y: 350,
    width: 150,
    height: 20,
    moveAxis: "x",
    moveRange: 55,
    moveSpeed: 0.018,
  },

  { x: 2140, y: 320, width: 210, height: 20 },

  { x: 2460, y: 290, width: 130, height: 20 },
  { x: 2690, y: 290, width: 130, height: 20 },
  { x: 2920, y: 260, width: 130, height: 20 },

  { x: 3170, y: 250, width: 280, height: 20 }, // breather 2

  {
    x: 3560,
    y: 220,
    width: 140,
    height: 20,
    moveAxis: "y",
    moveRange: 35,
    moveSpeed: 0.02,
  },

  { x: 3870, y: 190, width: 180, height: 20 },
  { x: 4160, y: 160, width: 180, height: 20 },

  { x: 4450, y: 160, width: 360, height: 20 }, // Final
];

window.deadlyPlatforms = [{ x: 1200, y: 500, width: 100, height: 20 }];

window.spikes = [
  { x: 860, y: 400, size: 25 },
  { x: 2340, y: 320, size: 25 },
  { x: 3730, y: 190, size: 25 },
];

window.checkpoints = [
  { x: 150, y: 430, reached: false },
  { x: 1500, y: 350, reached: false }, // before the first moving platform
  { x: 3220, y: 220, reached: false }, // before the vertical moving platform
  { x: 4560, y: 130, reached: false }, // Final
];
