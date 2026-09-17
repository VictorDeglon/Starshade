// Level 3 Data — "Nebula Steps"
// Alternating small/large stepping stones climbing in a loose spiral, with
// two moving platforms. First level where a gap is sized for a double
// jump rather than a running jump.

window.levelText = "Level 3";

window.platforms = [
  { x: 50, y: 420, width: 260, height: 20 }, // Start

  { x: 400, y: 380, width: 90, height: 20 },
  { x: 600, y: 340, width: 200, height: 20 },
  { x: 900, y: 300, width: 90, height: 20 },
  { x: 1100, y: 260, width: 200, height: 20 },

  { x: 1420, y: 240, width: 260, height: 20 }, // breather 1

  {
    x: 1800,
    y: 200,
    width: 130,
    height: 20,
    moveAxis: "x",
    moveRange: 60,
    moveSpeed: 0.022,
  },

  { x: 2100, y: 170, width: 90, height: 20 },
  { x: 2300, y: 140, width: 90, height: 20 },
  { x: 2500, y: 170, width: 90, height: 20 },

  { x: 2720, y: 160, width: 260, height: 20 }, // breather 2

  // The void here is too wide for even a well-timed double jump — this
  // ghost platform isn't a bonus shortcut like the others, it's the only
  // way across. Miss its solid window and there's nothing to do but wait
  // for the next one.
  {
    x: 3180,
    y: 145,
    width: 100,
    height: 20,
    ghost: true,
    ghostPeriod: 190,
    ghostOnRatio: 0.6,
  },

  { x: 3500, y: 130, width: 220, height: 20 },

  {
    x: 3880,
    y: 100,
    width: 120,
    height: 20,
    moveAxis: "y",
    moveRange: 40,
    moveSpeed: 0.024,
  },

  { x: 4180, y: 90, width: 250, height: 20 },

  { x: 4560, y: 90, width: 380, height: 20 }, // Final
];

window.deadlyPlatforms = [
  // Danger strip beneath the first stepping-stone cluster.
  { x: 550, y: 500, width: 700, height: 20 },
];

window.spikes = [
  { x: 750, y: 340, size: 20 },
  { x: 1000, y: 300, size: 25 },
  { x: 2150, y: 170, size: 20 },
  { x: 2200, y: 140, size: 25 },
  { x: 4260, y: 90, size: 25 },
  { x: 4340, y: 90, size: 20 },
];

window.checkpoints = [
  { x: 150, y: 390, reached: false },
  { x: 1470, y: 210, reached: false },
  { x: 2770, y: 130, reached: false }, // right before the ghost-only gap
  { x: 4230, y: 60, reached: false },
  { x: 4740, y: 60, reached: false }, // Final
];
