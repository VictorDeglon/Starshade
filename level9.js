// Level 9 Data — "Ember Labyrinth"
// A zig-zagging path that doubles back on itself vertically — ascending,
// dropping, ascending again — with deadly "wrong turn" ledges and moving
// platforms placed right at the direction changes.

window.levelText = "Level 9";

window.platforms = [
  { x: 50, y: 400, width: 250, height: 20 }, // Start

  { x: 380, y: 340, width: 120, height: 20 },
  { x: 610, y: 280, width: 120, height: 20 },
  { x: 840, y: 220, width: 120, height: 20 }, // peak 1

  {
    x: 1070,
    y: 300,
    width: 130,
    height: 20,
    moveAxis: "y",
    moveRange: 45,
    moveSpeed: 0.022,
  },

  { x: 1320, y: 400, width: 120, height: 20 },
  { x: 1560, y: 480, width: 250, height: 20 }, // valley floor

  {
    x: 1930,
    y: 420,
    width: 130,
    height: 20,
    moveAxis: "x",
    moveRange: 60,
    moveSpeed: 0.022,
  },

  { x: 2200, y: 340, width: 120, height: 20 },
  { x: 2440, y: 260, width: 120, height: 20 },
  { x: 2680, y: 180, width: 120, height: 20 }, // peak 2

  {
    x: 2920,
    y: 260,
    width: 130,
    height: 20,
    moveAxis: "y",
    moveRange: 45,
    moveSpeed: 0.024,
  },

  { x: 3170, y: 340, width: 120, height: 20 },
  { x: 3410, y: 300, width: 250, height: 20 }, // small landing

  {
    x: 3780,
    y: 260,
    width: 130,
    height: 20,
    moveAxis: "x",
    moveRange: 55,
    moveSpeed: 0.026,
  },

  { x: 4050, y: 220, width: 120, height: 20 },
  { x: 4290, y: 180, width: 120, height: 20 }, // peak 3

  { x: 4530, y: 180, width: 400, height: 20 }, // Final
];

window.deadlyPlatforms = [
  { x: 970, y: 220, width: 90, height: 20 }, // wrong turn off peak 1
  { x: 2560, y: 180, width: 90, height: 20 }, // wrong turn off peak 2
  { x: 4170, y: 220, width: 90, height: 20 }, // wrong turn near peak 3
  { x: 3540, y: 300, width: 70, height: 20 },
];

window.spikes = [
  { x: 830, y: 220, size: 20 },
  { x: 1620, y: 480, size: 30 },
  { x: 1700, y: 480, size: 25 },
  { x: 2660, y: 180, size: 20 },
  { x: 4260, y: 180, size: 20 },
];

window.checkpoints = [
  { x: 150, y: 370, reached: false },
  { x: 890, y: 190, reached: false }, // peak 1
  { x: 1650, y: 450, reached: false }, // valley
  { x: 2730, y: 150, reached: false }, // peak 2
  { x: 3460, y: 270, reached: false },
  { x: 4650, y: 150, reached: false }, // Final
];
