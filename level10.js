// Level 10 Data — "Starfall Gauntlet"
// Everything from the previous levels in one longer run: spike beds,
// deadly decoys, narrow moving pillars, and double-jump-only gaps.

window.levelText = "Level 10";

window.platforms = [
  { x: 50, y: 400, width: 250, height: 20 }, // Start

  { x: 380, y: 400, width: 450, height: 20 }, // spike bed #1

  { x: 900, y: 360, width: 100, height: 20 }, // real, next to a decoy
  { x: 1160, y: 320, width: 100, height: 20 },

  {
    x: 1400,
    y: 280,
    width: 65,
    height: 20,
    moveAxis: "x",
    moveRange: 55,
    moveSpeed: 0.022,
  },
  { x: 1620, y: 240, width: 65, height: 20 },
  {
    x: 1840,
    y: 200,
    width: 65,
    height: 20,
    moveAxis: "x",
    moveRange: 45,
    moveSpeed: 0.026,
  },

  { x: 2060, y: 200, width: 250, height: 20 }, // breather

  // Double-jump gap
  { x: 2570, y: 220, width: 200, height: 20 },

  { x: 2920, y: 220, width: 400, height: 20 }, // spike bed #2

  {
    x: 3470,
    y: 170,
    width: 130,
    height: 20,
    moveAxis: "y",
    moveRange: 40,
    moveSpeed: 0.024,
  },

  { x: 3750, y: 150, width: 100, height: 20 }, // decoy nearby
  { x: 4000, y: 180, width: 100, height: 20 },

  { x: 4250, y: 180, width: 350, height: 20 }, // spike bed #3

  {
    x: 4750,
    y: 130,
    width: 130,
    height: 20,
    moveAxis: "x",
    moveRange: 70,
    moveSpeed: 0.028,
  },

  { x: 5030, y: 100, width: 70, height: 20 },
  { x: 5210, y: 70, width: 70, height: 20 },

  { x: 5430, y: 90, width: 400, height: 20 }, // Final
];

window.deadlyPlatforms = [
  { x: 1030, y: 360, width: 100, height: 20 }, // decoy between the two real ledges
  { x: 3890, y: 150, width: 100, height: 20 }, // decoy beneath the moving platform
];

window.spikes = [
  { x: 450, y: 400, size: 30 },
  { x: 560, y: 400, size: 30 },
  { x: 670, y: 400, size: 30 },
  { x: 780, y: 400, size: 30 },

  { x: 2960, y: 220, size: 30 },
  { x: 3070, y: 220, size: 30 },
  { x: 3180, y: 220, size: 30 },
  { x: 3290, y: 220, size: 30 },

  { x: 4280, y: 180, size: 30 },
  { x: 4390, y: 180, size: 30 },
  { x: 4500, y: 180, size: 30 },
];

window.checkpoints = [
  { x: 150, y: 370, reached: false },
  { x: 1210, y: 290, reached: false }, // right after the decoy stretch
  { x: 2100, y: 170, reached: false }, // top of the pillars
  { x: 2650, y: 190, reached: false }, // after the double-jump gap
  { x: 4050, y: 100, reached: false }, // after the vertical moving platform
  { x: 5580, y: 40, reached: false }, // Final
];
