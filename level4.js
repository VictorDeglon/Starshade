// Level 4 Data — "Ashfall Ruins"
// Safe (blue) and deadly (red) platforms are interleaved at similar
// heights — they're always visually distinct, so this is a test of
// paying attention under time pressure, not a memory puzzle.

let levelText = "Level 4";

const platforms = [
  { x: 50, y: 400, width: 250, height: 20 }, // Start

  { x: 380, y: 360, width: 120, height: 20 },
  { x: 620, y: 320, width: 120, height: 20 },
  { x: 860, y: 280, width: 120, height: 20 },

  { x: 1150, y: 280, width: 150, height: 20 }, // safe, flanked by decoys below
  { x: 1470, y: 260, width: 120, height: 20 },
  { x: 1750, y: 240, width: 120, height: 20 },

  { x: 2050, y: 220, width: 300, height: 20 }, // breather ledge

  { x: 2450, y: 220, width: 100, height: 20 },
  { x: 2680, y: 200, width: 100, height: 20 },
  { x: 2910, y: 180, width: 100, height: 20 },
  { x: 3140, y: 160, width: 100, height: 20 },

  { x: 3450, y: 160, width: 300, height: 20 }, // Final
];

const deadlyPlatforms = [
  { x: 1000, y: 300, width: 100, height: 20 }, // decoy between 860 and 1150
  { x: 1320, y: 300, width: 100, height: 20 }, // decoy between 1150 and 1470
  { x: 1610, y: 280, width: 100, height: 20 }, // decoy between 1470 and 1750
  { x: 1900, y: 260, width: 100, height: 20 }, // decoy between 1750 and 2050
  { x: 2570, y: 240, width: 60, height: 20 },
  { x: 2800, y: 220, width: 60, height: 20 },
  { x: 3030, y: 200, width: 60, height: 20 },
  { x: 3260, y: 180, width: 100, height: 20 },
];

const spikes = [
  { x: 2150, y: 220, size: 25 },
  { x: 3350, y: 160, size: 35 },
];

const checkpoints = [
  { x: 150, y: 370, reached: false },
  { x: 900, y: 250, reached: false },
  { x: 2150, y: 190, reached: false },
  { x: 3180, y: 130, reached: false },
  { x: 3600, y: 130, reached: false }, // Final
];
