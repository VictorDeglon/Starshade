// Level 5 Data — "Spike Gardens"
// Ground-level spike beds alternate with clear platforms, climbing overall.
// Two wide gaps sized for a double jump, plus a moving platform hovering
// directly over the second spike bed for extra tension.

window.levelText = "Level 5";

window.platforms = [
  { x: 50, y: 420, width: 250, height: 20 }, // Start

  { x: 380, y: 420, width: 450, height: 20 }, // spike bed #1

  { x: 930, y: 380, width: 200, height: 20 }, // clear breather

  { x: 1250, y: 380, width: 450, height: 20 }, // spike bed #2

  {
    x: 1820,
    y: 320,
    width: 140,
    height: 20,
    moveAxis: "x",
    moveRange: 60,
    moveSpeed: 0.022,
  },

  { x: 2100, y: 300, width: 220, height: 20 }, // breather

  // Wide gap — double jump territory.
  { x: 2620, y: 280, width: 260, height: 20 },

  { x: 3000, y: 250, width: 450, height: 20 }, // spike bed #3

  {
    x: 3570,
    y: 200,
    width: 130,
    height: 20,
    moveAxis: "y",
    moveRange: 40,
    moveSpeed: 0.025,
  },

  { x: 3860, y: 180, width: 260, height: 20 }, // breather

  // Second wide gap, a bit higher this time.
  { x: 4300, y: 150, width: 260, height: 20 },

  { x: 4680, y: 130, width: 400, height: 20 }, // Final
];

window.deadlyPlatforms = [];

window.spikes = [
  { x: 450, y: 420, size: 30 },
  { x: 560, y: 420, size: 30 },
  { x: 670, y: 420, size: 30 },
  { x: 780, y: 420, size: 30 },

  { x: 1320, y: 380, size: 30 },
  { x: 1430, y: 380, size: 30 },
  { x: 1540, y: 380, size: 30 },
  { x: 1650, y: 380, size: 30 },

  { x: 3050, y: 250, size: 30 },
  { x: 3160, y: 250, size: 30 },
  { x: 3270, y: 250, size: 30 },
  { x: 3380, y: 250, size: 30 },
  { x: 3410, y: 250, size: 30 },
];

window.checkpoints = [
  { x: 150, y: 390, reached: false },
  { x: 980, y: 350, reached: false },
  { x: 2150, y: 270, reached: false },
  { x: 2700, y: 250, reached: false }, // after the first wide gap
  { x: 3910, y: 150, reached: false },
  { x: 4880, y: 100, reached: false }, // Final
];
