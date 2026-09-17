// Level 8 Data — "Void Bridge"
// A long horizontal crossing over open void — small stepping platforms,
// several of which move, strung across wide gaps. Most gaps are flat or
// gently descending (easier with a long jump); a few climb and want a
// double jump.

window.levelText = "Level 8";

window.platforms = [
  { x: 50, y: 400, width: 250, height: 20 }, // Start

  { x: 480, y: 400, width: 100, height: 20 }, // flat, wide gap
  {
    x: 880,
    y: 420,
    width: 110,
    height: 20,
    moveAxis: "x",
    moveRange: 55,
    moveSpeed: 0.02,
  },
  { x: 1280, y: 440, width: 100, height: 20 },

  { x: 1680, y: 380, width: 200, height: 20 }, // rising back up — double jump

  { x: 2100, y: 380, width: 100, height: 20 }, // flat
  {
    x: 2500,
    y: 360,
    width: 110,
    height: 20,
    moveAxis: "y",
    moveRange: 40,
    moveSpeed: 0.022,
  },
  { x: 2880, y: 300, width: 100, height: 20 }, // rising — double jump

  // A ghost stepping-stone across the widest gap on the bridge.
  {
    x: 3110,
    y: 280,
    width: 90,
    height: 20,
    ghost: true,
    ghostPeriod: 150,
    ghostOnRatio: 0.5,
  },

  { x: 3280, y: 260, width: 250, height: 20 }, // breather

  { x: 3710, y: 280, width: 130, height: 20 },
  {
    x: 3980,
    y: 220,
    width: 130,
    height: 20,
    moveAxis: "x",
    moveRange: 70,
    moveSpeed: 0.024,
  },
  { x: 4420, y: 190, width: 260, height: 20 }, // double jump, with a rise

  { x: 4850, y: 220, width: 380, height: 20 }, // Final
];

window.deadlyPlatforms = [];

window.spikes = [
  { x: 520, y: 400, size: 20 },
  { x: 1730, y: 380, size: 25 },
  { x: 2140, y: 380, size: 20 },
  { x: 2930, y: 300, size: 25 },
  { x: 3300, y: 260, size: 20 },
  { x: 4470, y: 190, size: 25 },
  { x: 4900, y: 220, size: 20 },
];

window.checkpoints = [
  { x: 150, y: 370, reached: false },
  { x: 1330, y: 410, reached: false },
  { x: 1780, y: 350, reached: false },
  { x: 2550, y: 330, reached: false },
  { x: 3430, y: 230, reached: false },
  { x: 4055, y: 190, reached: false },
  { x: 5030, y: 190, reached: false }, // Final
];
