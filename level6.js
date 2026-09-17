// Level 6 Data — "The Long Fall"
// A dramatic vertical rollercoaster: climb, huge fall, climb, even bigger
// fall. Falling is free (the only fall damage in this game is falling off
// the bottom of the world entirely), so this level is about aiming your
// descent, not avoiding it. Two moving platforms bridge the climbs back up.

window.levelText = "Level 6";

window.platforms = [
  { x: 50, y: 400, width: 250, height: 20 }, // Start

  { x: 380, y: 340, width: 150, height: 20 },
  { x: 620, y: 280, width: 150, height: 20 },
  { x: 860, y: 220, width: 150, height: 20 },
  { x: 1100, y: 160, width: 250, height: 20 }, // top of climb #1

  // The long fall — staggered ledges on the way down.
  { x: 1450, y: 260, width: 120, height: 20 },
  { x: 1680, y: 380, width: 120, height: 20 },
  { x: 1910, y: 500, width: 120, height: 20 },

  { x: 2150, y: 500, width: 280, height: 20 }, // bottom floor #1

  {
    x: 2520,
    y: 440,
    width: 150,
    height: 20,
    moveAxis: "x",
    moveRange: 70,
    moveSpeed: 0.022,
  },

  { x: 2820, y: 380, width: 130, height: 20 },
  { x: 3060, y: 320, width: 130, height: 20 },
  { x: 3300, y: 260, width: 250, height: 20 }, // top of climb #2

  // An even bigger fall — steeper, further down.
  { x: 3660, y: 320, width: 110, height: 20 },
  { x: 3880, y: 420, width: 110, height: 20 },
  { x: 4100, y: 520, width: 110, height: 20 },

  { x: 4340, y: 530, width: 280, height: 20 }, // bottom floor #2

  {
    x: 4720,
    y: 460,
    width: 130,
    height: 20,
    moveAxis: "y",
    moveRange: 55,
    moveSpeed: 0.025,
  },

  { x: 5000, y: 400, width: 130, height: 20 },
  { x: 5240, y: 330, width: 130, height: 20 },

  { x: 5480, y: 280, width: 380, height: 20 }, // Final
];

window.deadlyPlatforms = [
  // Catch-nets under each staggered drop — overshoot a ledge and you land
  // here instead of the void.
  { x: 1400, y: 560, width: 700, height: 20 },
  { x: 3600, y: 560, width: 700, height: 20 },
];

window.spikes = [
  { x: 1150, y: 160, size: 25 },
  { x: 3350, y: 260, size: 25 },
  { x: 5530, y: 280, size: 25 },
];

window.checkpoints = [
  { x: 150, y: 370, reached: false },
  { x: 1190, y: 130, reached: false }, // top of climb #1
  { x: 2200, y: 470, reached: false }, // bottom floor #1
  { x: 3370, y: 230, reached: false }, // top of climb #2
  { x: 4390, y: 500, reached: false }, // bottom floor #2
  { x: 5670, y: 250, reached: false }, // Final
];
