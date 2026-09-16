// Level 1 Data

window.levelText = "Level 1"; // The text to display

// Platforms and spikes setup
window.platforms = [
  { x: 65, y: 400, width: 250, height: 20 },
  { x: 400, y: 350, width: 200, height: 20 },
  { x: 700, y: 300, width: 250, height: 20 },
  { x: 1100, y: 250, width: 200, height: 20 },
  { x: 1400, y: 200, width: 300, height: 20 },
  { x: 1450, y: 550, width: 100, height: 20 },
  { x: 1600, y: 500, width: 100, height: 20 },
  { x: 1750, y: 450, width: 100, height: 20 },
  { x: 2000, y: 300, width: 75, height: 20 },
  { x: 2250, y: 200, width: 400, height: 20 },
  { x: 1900, y: 200, width: 20, height: 150 },

  { x: 2750, y: 250, width: 20, height: 15 },
  { x: 2850, y: 250, width: 20, height: 15 },
  { x: 2975, y: 250, width: 20, height: 15 },
  { x: 3125, y: 250, width: 20, height: 15 },

  { x: 3400, y: 450, width: 100, height: 20 },
  { x: 3800, y: 400, width: 100, height: 20 },
  { x: 4200, y: 350, width: 100, height: 20 },
  { x: 4600, y: 300, width: 100, height: 20 },

  { x: 5000, y: 250, width: 300, height: 20 },
];

window.deadlyPlatforms = [
  { x: 3600, y: 375, width: 75, height: 20 },
  { x: 4000, y: 325, width: 75, height: 20 },
  { x: 4400, y: 275, width: 75, height: 20 },
  { x: 4800, y: 225, width: 75, height: 20 },
];

window.spikes = [
  { x: 650, y: 380, size: 30 },
  { x: 1000, y: 250, size: 30 },
  { x: 2001, y: 299, size: 20 },

  { x: 2800, y: 250, size: 20 },
  { x: 2905, y: 250, size: 30 },
  { x: 3040, y: 250, size: 40 },
];

// Checkpoints setup
// The original level only had 4 checkpoints across ~5300px, and the last
// one (4650) was ~300px before the actual final platform (5000-5300) —
// that whole stretch was dead space you could never "finish" from. Added
// checkpoints at 1600 and 3400 for pacing, and a real final one on the
// last platform so reaching the end of the level actually completes it.
window.checkpoints = [
  { x: 200, y: 370, reached: false },
  { x: 875, y: 240, reached: false },
  { x: 1600, y: 470, reached: false },
  { x: 2400, y: 150, reached: false },
  { x: 3400, y: 420, reached: false },
  { x: 4650, y: 270, reached: false },
  { x: 5150, y: 220, reached: false },
];
