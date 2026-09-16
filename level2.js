// Level 2 Data — "Steady Climb"
// Still easy, but introduces two things for the first time: a gentle
// moving platform (small range, slow), and a short stretch of narrower
// footing. Both are safe to fail — checkpoints sit right before each.

window.levelText = "Level 2";

window.platforms = [
  { x: 50, y: 460, width: 300, height: 20 }, // Start

  { x: 430, y: 420, width: 180, height: 20 },
  { x: 700, y: 380, width: 180, height: 20 },
  { x: 970, y: 340, width: 180, height: 20 },

  { x: 1250, y: 340, width: 280, height: 20 }, // breather 1

  // First moving platform — small, slow, easy to read and time.
  {
    x: 1650,
    y: 320,
    width: 160,
    height: 20,
    moveAxis: "x",
    moveRange: 50,
    moveSpeed: 0.018,
  },

  { x: 1980, y: 300, width: 220, height: 20 },

  { x: 2300, y: 260, width: 150, height: 20 },
  { x: 2560, y: 260, width: 150, height: 20 },

  { x: 2870, y: 260, width: 300, height: 20 }, // breather 2

  { x: 3270, y: 220, width: 180, height: 20 },
  { x: 3560, y: 180, width: 180, height: 20 },

  { x: 3860, y: 180, width: 350, height: 20 }, // Final
];

window.deadlyPlatforms = [{ x: 1140, y: 420, width: 90, height: 20 }];

window.spikes = [
  { x: 830, y: 380, size: 25 },
  { x: 2140, y: 300, size: 25 },
  { x: 3420, y: 220, size: 25 },
];

window.checkpoints = [
  { x: 150, y: 430, reached: false },
  { x: 1300, y: 310, reached: false }, // before the moving platform
  { x: 2920, y: 230, reached: false },
  { x: 3960, y: 150, reached: false }, // Final
];
