// Level 6 Data — "The Long Fall"
// A climb up, then a deliberate multi-stage drop back down through
// staggered platforms, then a climb back up again. Falling is free (the
// only fall damage in this game is falling off the bottom of the world),
// so this level is about aiming your fall, not avoiding it.

window.levelText = "Level 6";

window.platforms = [
  { x: 50, y: 400, width: 250, height: 20 }, // Start

  { x: 380, y: 340, width: 150, height: 20 },
  { x: 650, y: 280, width: 150, height: 20 },
  { x: 920, y: 220, width: 150, height: 20 },
  { x: 1190, y: 160, width: 250, height: 20 }, // top of the climb

  // The long fall — staggered ledges on the way down, alternating sides
  { x: 1550, y: 260, width: 120, height: 20 },
  { x: 1780, y: 380, width: 120, height: 20 },
  { x: 2010, y: 500, width: 120, height: 20 },

  { x: 2250, y: 500, width: 300, height: 20 }, // bottom floor

  // Climb back up
  { x: 2650, y: 440, width: 130, height: 20 },
  { x: 2890, y: 380, width: 130, height: 20 },
  { x: 3130, y: 320, width: 130, height: 20 },
  { x: 3370, y: 260, width: 130, height: 20 },

  { x: 3650, y: 220, width: 300, height: 20 }, // Final
];

window.deadlyPlatforms = [
  // Sits directly under the staggered drop — overshoot a ledge and you
  // land here instead of the void.
  { x: 1700, y: 560, width: 500, height: 20 },
];

window.spikes = [
  { x: 1240, y: 160, size: 25 },
  { x: 3700, y: 220, size: 30 },
];

window.checkpoints = [
  { x: 150, y: 370, reached: false },
  { x: 1290, y: 130, reached: false }, // top of the climb
  { x: 2100, y: 470, reached: false }, // bottom of the fall
  { x: 2400, y: 470, reached: false },
  { x: 3420, y: 230, reached: false },
  { x: 3800, y: 190, reached: false }, // Final
];
