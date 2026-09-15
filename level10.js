// Level 10 Data — "Starfall Gauntlet"
// Everything so far in one longer run: spike beds, deadly decoys, narrow
// pillars, and a couple of double-jump-only gaps, roughly in that order.

let levelText = "Level 10";

const platforms = [
  { x: 50, y: 400, width: 250, height: 20 }, // Start

  // Spike bed
  { x: 380, y: 400, width: 450, height: 20 },

  // A real safe platform sits right next to a deadly decoy at the same
  // height (see deadlyPlatforms below) — jump clear over both rather than
  // landing partway.
  { x: 900, y: 360, width: 100, height: 20 },
  { x: 1160, y: 320, width: 100, height: 20 },

  // Narrow pillars
  { x: 1400, y: 280, width: 70, height: 20 },
  { x: 1580, y: 240, width: 70, height: 20 },
  { x: 1760, y: 200, width: 70, height: 20 },

  { x: 1950, y: 200, width: 250, height: 20 }, // breather

  // Double-jump gap
  { x: 2450, y: 220, width: 200, height: 20 },

  // Second spike bed
  { x: 2800, y: 220, width: 400, height: 20 },

  // Final narrow approach
  { x: 3350, y: 180, width: 70, height: 20 },
  { x: 3530, y: 150, width: 70, height: 20 },

  { x: 3700, y: 150, width: 300, height: 20 }, // Final
];

const deadlyPlatforms = [
  { x: 1030, y: 360, width: 100, height: 20 }, // decoy between the two real ledges
];

const spikes = [
  { x: 450, y: 400, size: 30 },
  { x: 560, y: 400, size: 30 },
  { x: 670, y: 400, size: 30 },
  { x: 780, y: 400, size: 30 },

  { x: 2840, y: 220, size: 30 },
  { x: 2950, y: 220, size: 30 },
  { x: 3060, y: 220, size: 30 },
  { x: 3170, y: 220, size: 30 },
];

const checkpoints = [
  { x: 150, y: 370, reached: false },
  { x: 1210, y: 290, reached: false }, // right after the decoy stretch
  { x: 1800, y: 170, reached: false }, // top of the pillars
  { x: 2000, y: 170, reached: false },
  { x: 3400, y: 150, reached: false },
  { x: 3850, y: 120, reached: false }, // Final
];
