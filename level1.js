// Level 1 Data — "First Light" (tutorial)
// Deliberately the easiest level in the game: gentle, mostly single-jump
// gaps, sparse hazards, no moving platforms. Levels get harder from here
// — see docs/gameplay.md for the difficulty curve across all 12.

window.levelText = "Level 1";

window.platforms = [
  { x: 50, y: 400, width: 300, height: 20 }, // Start

  { x: 430, y: 380, width: 200, height: 20 },
  { x: 730, y: 360, width: 200, height: 20 },
  { x: 1030, y: 400, width: 250, height: 20 }, // gentle dip
  { x: 1400, y: 380, width: 200, height: 20 },
  { x: 1700, y: 340, width: 220, height: 20 },

  { x: 2020, y: 340, width: 300, height: 20 }, // breather 1

  { x: 2420, y: 300, width: 200, height: 20 },
  { x: 2720, y: 260, width: 200, height: 20 },

  { x: 3020, y: 260, width: 300, height: 20 }, // breather 2

  { x: 3420, y: 220, width: 200, height: 20 },
  { x: 3720, y: 180, width: 250, height: 20 },

  { x: 4070, y: 180, width: 350, height: 20 }, // Final
];

window.deadlyPlatforms = [
  // One clearly-telegraphed "don't land here" next to a real platform —
  // introduces the red = danger rule without any real threat of a
  // surprise death.
  { x: 1310, y: 480, width: 200, height: 20 },
];

window.spikes = [
  { x: 900, y: 400, size: 25 },
  { x: 2550, y: 300, size: 25 },
  { x: 3550, y: 220, size: 25 },
];

window.checkpoints = [
  { x: 150, y: 370, reached: false },
  { x: 1080, y: 370, reached: false },
  { x: 2120, y: 310, reached: false },
  { x: 3100, y: 230, reached: false },
  { x: 4200, y: 150, reached: false }, // Final
];
