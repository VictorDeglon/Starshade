// Level 4 Data — "Ashfall Ruins"
// A field of rubble where nearly every real platform has a same-height
// deadly decoy right next to it — always visually distinct (red vs. blue),
// so this tests attention under time pressure, not memory. Two moving
// platforms thread through the middle and late sections.

window.levelText = "Level 4";

window.platforms = [
  { x: 50, y: 400, width: 250, height: 20 }, // Start

  { x: 380, y: 360, width: 110, height: 20 },
  { x: 640, y: 320, width: 110, height: 20 },
  { x: 900, y: 280, width: 110, height: 20 },

  { x: 1150, y: 260, width: 220, height: 20 }, // breather 1

  {
    x: 1500,
    y: 220,
    width: 130,
    height: 20,
    moveAxis: "x",
    moveRange: 65,
    moveSpeed: 0.02,
  },

  { x: 1800, y: 200, width: 110, height: 20 },

  // A ghost platform hovering over the rubble — solid a bit more than half
  // the time, with the usual flicker warning before it flips.
  {
    x: 1960,
    y: 165,
    width: 80,
    height: 20,
    ghost: true,
    ghostPeriod: 180,
    ghostOnRatio: 0.55,
  },

  { x: 2050, y: 180, width: 110, height: 20 },
  { x: 2300, y: 160, width: 110, height: 20 },

  { x: 2560, y: 150, width: 260, height: 20 }, // breather 2

  {
    x: 2960,
    y: 190,
    width: 130,
    height: 20,
    moveAxis: "y",
    moveRange: 45,
    moveSpeed: 0.022,
  },

  { x: 3260, y: 220, width: 100, height: 20 },
  { x: 3500, y: 190, width: 100, height: 20 },
  { x: 3740, y: 160, width: 100, height: 20 },

  { x: 3990, y: 150, width: 380, height: 20 }, // Final
];

window.deadlyPlatforms = [
  { x: 520, y: 360, width: 110, height: 20 }, // decoy next to 380
  { x: 780, y: 320, width: 110, height: 20 }, // decoy next to 640
  { x: 1040, y: 280, width: 110, height: 20 }, // decoy next to 900
  { x: 1940, y: 200, width: 100, height: 20 }, // decoy next to 1800/2050
  { x: 2190, y: 180, width: 100, height: 20 },
  { x: 3380, y: 220, width: 100, height: 20 }, // decoy under/around moving platform
  { x: 3620, y: 190, width: 100, height: 20 },
];

window.spikes = [
  { x: 430, y: 360, size: 20 },
  { x: 950, y: 280, size: 20 },
  { x: 1230, y: 260, size: 25 },
  { x: 2100, y: 180, size: 20 },
  { x: 2350, y: 160, size: 20 },
  { x: 2650, y: 150, size: 25 },
  { x: 3870, y: 160, size: 30 },
];

window.checkpoints = [
  { x: 150, y: 370, reached: false },
  { x: 1200, y: 230, reached: false },
  { x: 2610, y: 120, reached: false }, // before the vertical moving platform
  { x: 3800, y: 130, reached: false },
  { x: 4180, y: 120, reached: false }, // Final
];
