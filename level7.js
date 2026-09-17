// Level 7 Data — "Twin Pillars"
// Narrow (60-80px) pillar-top platforms, several of which move — this
// level's identity is precision landing on a moving target, not just
// clearing a gap.

window.levelText = "Level 7";

window.platforms = [
  { x: 50, y: 400, width: 250, height: 20 }, // Start

  { x: 380, y: 360, width: 70, height: 20 },
  { x: 560, y: 320, width: 70, height: 20 },
  { x: 740, y: 280, width: 70, height: 20 },

  { x: 950, y: 260, width: 240, height: 20 }, // breather 1

  {
    x: 1320,
    y: 220,
    width: 65,
    height: 20,
    moveAxis: "x",
    moveRange: 55,
    moveSpeed: 0.022,
  },
  { x: 1560, y: 180, width: 65, height: 20 },
  {
    x: 1780,
    y: 140,
    width: 65,
    height: 20,
    moveAxis: "x",
    moveRange: 45,
    moveSpeed: 0.026,
  },

  { x: 2000, y: 140, width: 240, height: 20 }, // breather 2

  // A ghost pillar — solid about half the time, flickering fair warning
  // before it flips, fitting right in with this level's precision-landing
  // identity.
  {
    x: 2300,
    y: 130,
    width: 70,
    height: 20,
    ghost: true,
    ghostPeriod: 150,
    ghostOnRatio: 0.5,
  },

  { x: 2380, y: 120, width: 65, height: 20 },
  {
    x: 2600,
    y: 90,
    width: 65,
    height: 20,
    moveAxis: "y",
    moveRange: 35,
    moveSpeed: 0.024,
  },
  { x: 2830, y: 120, width: 65, height: 20 },

  { x: 3050, y: 110, width: 240, height: 20 }, // breather 3

  {
    x: 3430,
    y: 90,
    width: 65,
    height: 20,
    moveAxis: "x",
    moveRange: 60,
    moveSpeed: 0.028,
  },
  { x: 3670, y: 70, width: 65, height: 20 },

  { x: 3900, y: 100, width: 380, height: 20 }, // Final
];

window.deadlyPlatforms = [
  { x: 1200, y: 500, width: 700, height: 20 },
  { x: 2300, y: 500, width: 700, height: 20 },
  { x: 3300, y: 500, width: 700, height: 20 },
];

window.spikes = [
  { x: 1000, y: 260, size: 25 },
  { x: 1120, y: 260, size: 20 },
  { x: 2050, y: 140, size: 25 },
  { x: 3200, y: 110, size: 20 },
  { x: 3970, y: 100, size: 25 },
];

window.checkpoints = [
  { x: 150, y: 370, reached: false },
  { x: 1000, y: 230, reached: false },
  { x: 2050, y: 110, reached: false },
  { x: 3100, y: 80, reached: false },
  { x: 4080, y: 70, reached: false }, // Final
];
