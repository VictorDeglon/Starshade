// Level 5 Data — "Spike Gardens"
// Long ground-level spike beds cleared by jumping (or double-jumping) over
// them rather than around them — the first level where a gap is wide
// enough that it wants the double jump, not just a well-timed single one.

let levelText = "Level 5";

const platforms = [
  { x: 50, y: 400, width: 250, height: 20 }, // Start

  { x: 380, y: 400, width: 500, height: 20 }, // long ground strip #1 (spike bed)
  { x: 1000, y: 400, width: 500, height: 20 }, // long ground strip #2 (spike bed)

  { x: 1650, y: 350, width: 200, height: 20 },
  { x: 1980, y: 300, width: 200, height: 20 },

  // Wide gap — double jump territory
  { x: 2550, y: 300, width: 250, height: 20 },

  { x: 2950, y: 260, width: 500, height: 20 }, // long ground strip #3 (spike bed)

  { x: 3600, y: 220, width: 300, height: 20 }, // Final
];

const deadlyPlatforms = [];

const spikes = [
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
];

const checkpoints = [
  { x: 150, y: 370, reached: false },
  { x: 1650, y: 320, reached: false },
  { x: 2050, y: 270, reached: false },
  { x: 2650, y: 270, reached: false },
  { x: 3750, y: 190, reached: false }, // Final
];
