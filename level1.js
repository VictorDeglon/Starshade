// Level 1 Data — "First Light" (tutorial)
// A fresh, gentle wave: rise, dip, rise, dip. Sparse hazards, no moving
// platforms, every gap comfortably inside single-jump range. The point is
// to teach the controls, not test them — see docs/gameplay.md for the
// difficulty curve across all 12 levels.

window.levelText = "Level 1";

window.platforms = [
  { x: 50, y: 420, width: 280, height: 20 }, // Start

  { x: 400, y: 400, width: 160, height: 20 },
  { x: 640, y: 370, width: 160, height: 20 },
  { x: 880, y: 400, width: 160, height: 20 }, // gentle dip
  { x: 1120, y: 430, width: 160, height: 20 },

  { x: 1400, y: 400, width: 280, height: 20 }, // breather 1

  { x: 1780, y: 360, width: 150, height: 20 },
  { x: 2010, y: 320, width: 150, height: 20 },
  { x: 2240, y: 350, width: 150, height: 20 }, // dip again
  { x: 2470, y: 300, width: 150, height: 20 },

  { x: 2720, y: 280, width: 300, height: 20 }, // breather 2

  { x: 3120, y: 250, width: 150, height: 20 },
  { x: 3350, y: 220, width: 150, height: 20 },
  { x: 3580, y: 250, width: 150, height: 20 },
  { x: 3810, y: 200, width: 200, height: 20 },

  { x: 4110, y: 200, width: 380, height: 20 }, // Final
];

window.deadlyPlatforms = [
  // One clearly-telegraphed "don't land here" next to a real platform —
  // introduces the red = danger rule without any real threat of a
  // surprise death.
  { x: 1300, y: 500, width: 200, height: 20 },
];

window.spikes = [
  { x: 970, y: 400, size: 22 },
  { x: 2330, y: 350, size: 22 },
  { x: 3670, y: 250, size: 25 },
];

window.checkpoints = [
  { x: 150, y: 390, reached: false },
  { x: 1450, y: 370, reached: false },
  { x: 2770, y: 250, reached: false },
  { x: 3400, y: 190, reached: false },
  { x: 4260, y: 170, reached: false }, // Final
];
