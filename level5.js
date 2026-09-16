// Level 5 Data — "Spike Gardens"
// Long ground-level spike beds cleared by jumping (or double-jumping) over
// them rather than around them — the first level where a gap is wide
// enough that it wants the double jump, not just a well-timed single one.

window.levelText = "Level 5";

window.platforms = [
  { x: 50, y: 400, width: 250, height: 20 }, // Start

  { x: 380, y: 400, width: 500, height: 20 }, // long ground strip #1 (spike bed)
  { x: 1000, y: 400, width: 500, height: 20 }, // long ground strip #2 (spike bed)

  { x: 1650, y: 350, width: 200, height: 20 },
  { x: 1980, y: 300, width: 200, height: 20 },

  // Wide gap — double jump territory
  { x: 2550, y: 300, width: 250, height: 20 },

  { x: 2950, y: 260, width: 500, height: 20 }, // long ground strip #3 (spike bed)

  { x: 3600, y: 220, width: 300, height: 20 }, // was Final, now mid-level

  // --- Act 2: a second moving platform, a fourth spike bed, and the
  // level's second wide gap ---
  { x: 4030, y: 260, width: 200, height: 20 },
  {
    x: 4350,
    y: 200,
    width: 150,
    height: 20,
    moveAxis: "x",
    moveRange: 60,
    moveSpeed: 0.025,
  },
  { x: 4650, y: 160, width: 300, height: 20 }, // spike bed #4

  // Second wide gap — needs a double jump again, this time with a bit of
  // extra height on top.
  { x: 5230, y: 140, width: 300, height: 20 },

  { x: 5660, y: 160, width: 300, height: 20 }, // breather

  { x: 6090, y: 200, width: 350, height: 20 }, // Final
];

window.deadlyPlatforms = [];

window.spikes = [
  { x: 450, y: 400, size: 30 },
  { x: 560, y: 400, size: 30 },
  { x: 670, y: 400, size: 30 },
  { x: 780, y: 400, size: 30 },

  { x: 1070, y: 400, size: 30 },
  { x: 1180, y: 400, size: 30 },
  { x: 1290, y: 400, size: 30 },
  { x: 1400, y: 400, size: 30 },

  { x: 3020, y: 260, size: 30 },
  { x: 3130, y: 260, size: 30 },
  { x: 3240, y: 260, size: 30 },
  { x: 3350, y: 260, size: 30 },
  { x: 3460, y: 260, size: 30 },

  { x: 4670, y: 160, size: 30 },
  { x: 4780, y: 160, size: 30 },
  { x: 4890, y: 160, size: 30 },
];

window.checkpoints = [
  { x: 150, y: 370, reached: false },
  { x: 1650, y: 320, reached: false },
  { x: 2050, y: 270, reached: false },
  { x: 2650, y: 270, reached: false },
  { x: 3750, y: 190, reached: false },
  { x: 4425, y: 170, reached: false }, // after the moving platform
  { x: 5780, y: 130, reached: false },
  { x: 6260, y: 170, reached: false }, // Final
];
