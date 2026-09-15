// Level 8 Data — "Void Bridge"
// Small stepping platforms strung across wide open gaps with nothing but
// the void below — most gaps are flat or gently descending (easier to
// clear with a long jump), but a few climb and need the double jump.

let levelText = "Level 8";

const platforms = [
  { x: 50, y: 400, width: 250, height: 20 }, // Start

  { x: 480, y: 400, width: 100, height: 20 }, // flat, wide gap
  { x: 880, y: 420, width: 100, height: 20 }, // slightly descending
  { x: 1280, y: 440, width: 100, height: 20 },

  { x: 1680, y: 380, width: 200, height: 20 }, // rising back up — needs double jump

  { x: 2100, y: 380, width: 100, height: 20 }, // flat
  { x: 2500, y: 360, width: 100, height: 20 },
  { x: 2880, y: 300, width: 100, height: 20 }, // rising — double jump

  { x: 3280, y: 260, width: 300, height: 20 }, // Final
];

const deadlyPlatforms = [];

const spikes = [
  { x: 1730, y: 380, size: 25 },
  { x: 2930, y: 300, size: 25 },
];

const checkpoints = [
  { x: 150, y: 370, reached: false },
  { x: 1330, y: 410, reached: false },
  { x: 1780, y: 350, reached: false },
  { x: 2550, y: 330, reached: false },
  { x: 3430, y: 230, reached: false }, // Final
];
