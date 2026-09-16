// Level 7 Data — "Twin Pillars"
// Narrow pillar-top platforms (as little as 60px wide) with a few gaps
// large enough, combined with the height gained, to need a double jump.

window.levelText = "Level 7";

window.platforms = [
  { x: 50, y: 400, width: 250, height: 20 }, // Start

  { x: 380, y: 360, width: 70, height: 20 },
  { x: 560, y: 320, width: 70, height: 20 },
  { x: 740, y: 280, width: 70, height: 20 },

  { x: 950, y: 260, width: 250, height: 20 }, // breather

  { x: 1320, y: 220, width: 60, height: 20 },
  { x: 1490, y: 180, width: 60, height: 20 }, // double-jump gap (170 gap + 40 rise)
  { x: 1660, y: 140, width: 60, height: 20 },

  { x: 1850, y: 140, width: 250, height: 20 }, // breather

  { x: 2220, y: 120, width: 70, height: 20 },
  { x: 2410, y: 100, width: 70, height: 20 }, // double-jump gap (190 gap + 20 rise)
  { x: 2600, y: 130, width: 70, height: 20 },
  { x: 2790, y: 160, width: 70, height: 20 },

  { x: 3000, y: 160, width: 300, height: 20 }, // was Final, now mid-level

  // --- Act 2: a moving narrow pillar, then one more pillar pair ---
  { x: 3430, y: 190, width: 200, height: 20 },
  {
    x: 3740,
    y: 120,
    width: 70,
    height: 20,
    moveAxis: "x",
    moveRange: 70,
    moveSpeed: 0.025,
  },
  { x: 3910, y: 80, width: 70, height: 20 },
  { x: 4110, y: 80, width: 250, height: 20 }, // breather

  { x: 4500, y: 100, width: 350, height: 20 }, // Final
];

window.deadlyPlatforms = [
  { x: 1200, y: 500, width: 700, height: 20 },
  { x: 2100, y: 500, width: 700, height: 20 },
  { x: 3650, y: 500, width: 700, height: 20 },
];

window.spikes = [
  { x: 1000, y: 260, size: 25 },
  { x: 1900, y: 140, size: 25 },
  { x: 4160, y: 80, size: 25 },
];

window.checkpoints = [
  { x: 150, y: 370, reached: false },
  { x: 1050, y: 230, reached: false },
  { x: 1950, y: 110, reached: false },
  { x: 2820, y: 130, reached: false }, // On the pillar before the final approach
  { x: 3945, y: 50, reached: false }, // after the moving pillar
  { x: 4680, y: 70, reached: false }, // Final
];
