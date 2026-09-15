// Level 9 Data — "Ember Labyrinth"
// A zig-zagging path that doubles back on itself vertically — ascending,
// then dropping, then ascending again — with deadly "wrong turn" ledges
// and dense spikes at the direction changes.

let levelText = "Level 9";

const platforms = [
  { x: 50, y: 400, width: 250, height: 20 }, // Start

  { x: 380, y: 340, width: 130, height: 20 },
  { x: 620, y: 280, width: 130, height: 20 },
  { x: 860, y: 220, width: 130, height: 20 }, // peak 1

  { x: 1100, y: 320, width: 130, height: 20 }, // drop back down
  { x: 1340, y: 420, width: 130, height: 20 },
  { x: 1580, y: 480, width: 250, height: 20 }, // valley floor

  { x: 1950, y: 420, width: 130, height: 20 }, // climb again
  { x: 2190, y: 340, width: 130, height: 20 },
  { x: 2430, y: 260, width: 130, height: 20 },
  { x: 2670, y: 180, width: 130, height: 20 }, // peak 2

  { x: 2910, y: 260, width: 130, height: 20 }, // one more dip
  { x: 3150, y: 340, width: 130, height: 20 },

  { x: 3400, y: 300, width: 300, height: 20 }, // Final
];

const deadlyPlatforms = [
  { x: 990, y: 220, width: 90, height: 20 }, // wrong turn off peak 1
  { x: 2560, y: 180, width: 90, height: 20 }, // wrong turn off peak 2
  { x: 3060, y: 260, width: 70, height: 20 },
];

const spikes = [
  { x: 850, y: 220, size: 20 },
  { x: 1620, y: 480, size: 30 },
  { x: 1700, y: 480, size: 25 },
  { x: 2660, y: 180, size: 20 },
];

const checkpoints = [
  { x: 150, y: 370, reached: false },
  { x: 910, y: 190, reached: false }, // peak 1
  { x: 1700, y: 450, reached: false }, // valley
  { x: 2720, y: 150, reached: false }, // peak 2
  { x: 3550, y: 270, reached: false }, // Final
];
