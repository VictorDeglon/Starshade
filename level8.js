// Level 8 Data — "Void Bridge"
// Small stepping platforms strung across wide open gaps with nothing but
// the void below — most gaps are flat or gently descending (easier to
// clear with a long jump), but a few climb and need the double jump.

window.levelText = "Level 8";

window.platforms = [
  { x: 50, y: 400, width: 250, height: 20 }, // Start

  { x: 480, y: 400, width: 100, height: 20 }, // flat, wide gap
  { x: 880, y: 420, width: 100, height: 20 }, // slightly descending
  { x: 1280, y: 440, width: 100, height: 20 },

  { x: 1680, y: 380, width: 200, height: 20 }, // rising back up — needs double jump

  { x: 2100, y: 380, width: 100, height: 20 }, // flat
  { x: 2500, y: 360, width: 100, height: 20 },
  { x: 2880, y: 300, width: 100, height: 20 }, // rising — double jump

  { x: 3280, y: 260, width: 300, height: 20 }, // was Final, now mid-level

  // --- Act 2: one more moving platform, then the widest gap yet ---
  { x: 3710, y: 280, width: 150, height: 20 },
  {
    x: 3980,
    y: 220,
    width: 150,
    height: 20,
    moveAxis: "x",
    moveRange: 70,
    moveSpeed: 0.025,
  },
  { x: 4420, y: 190, width: 300, height: 20 }, // double jump again, this time with a rise

  { x: 4850, y: 220, width: 350, height: 20 }, // Final
];

window.deadlyPlatforms = [];

window.spikes = [
  { x: 1730, y: 380, size: 25 },
  { x: 2930, y: 300, size: 25 },
  { x: 4470, y: 190, size: 25 },
];

window.checkpoints = [
  { x: 150, y: 370, reached: false },
  { x: 1330, y: 410, reached: false },
  { x: 1780, y: 350, reached: false },
  { x: 2550, y: 330, reached: false },
  { x: 3430, y: 230, reached: false },
  { x: 4055, y: 190, reached: false }, // after the moving platform
  { x: 5020, y: 190, reached: false }, // Final
];
