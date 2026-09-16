// Level 3 Data — "Nebula Steps"
// Tighter gaps than levels 1-2, a first stretch of narrow stepping-stone
// platforms, and one gap near the end long enough to want a double jump.

window.levelText = "Level 3";

window.platforms = [
  { x: 50, y: 400, width: 250, height: 20 }, // Start

  { x: 400, y: 350, width: 150, height: 20 },
  { x: 680, y: 300, width: 150, height: 20 },
  { x: 980, y: 250, width: 150, height: 20 },

  { x: 1280, y: 250, width: 300, height: 20 }, // long flat run, spike mid-way
  { x: 1720, y: 200, width: 150, height: 20 },

  // Narrow stepping stones
  { x: 1950, y: 200, width: 80, height: 20 },
  { x: 2130, y: 180, width: 80, height: 20 },
  { x: 2310, y: 160, width: 80, height: 20 },

  { x: 2460, y: 140, width: 200, height: 20 },

  // Long gap here — comfortable with a double jump
  { x: 2860, y: 170, width: 250, height: 20 },

  { x: 3160, y: 120, width: 300, height: 20 }, // Final
];

window.deadlyPlatforms = [
  // Danger strip beneath the stepping stones — mistiming a jump there
  // drops you onto this instead of falling all the way to the void.
  { x: 1930, y: 320, width: 480, height: 20 },
];

window.spikes = [
  { x: 1400, y: 250, size: 30 },
  { x: 2640, y: 140, size: 30 },
];

window.checkpoints = [
  { x: 150, y: 370, reached: false },
  { x: 1050, y: 220, reached: false },
  { x: 1780, y: 170, reached: false },
  { x: 2560, y: 110, reached: false },
  { x: 3300, y: 90, reached: false }, // Final
];
