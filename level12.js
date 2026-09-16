// Level 12 Data — "Starshade's Reach"
// The finale: every hazard type from the previous eleven levels, back to
// back, with the tightest margins in the game. Reaching the last
// checkpoint here (there is no level13.js) shows the "You beat
// Starshade!" screen — see game.js's loadLevel().catch().

window.levelText = "Level 12";

window.platforms = [
  { x: 50, y: 400, width: 250, height: 20 }, // Start

  // Spike bed
  { x: 380, y: 400, width: 400, height: 20 },

  // Deadly decoys among narrow real ledges
  { x: 850, y: 360, width: 90, height: 20 },
  { x: 1120, y: 320, width: 90, height: 20 },
  { x: 1390, y: 280, width: 90, height: 20 },

  { x: 1600, y: 280, width: 220, height: 20 }, // breather

  // Twin-pillar double jumps
  { x: 1970, y: 230, width: 70, height: 20 },
  { x: 2150, y: 180, width: 70, height: 20 },
  { x: 2330, y: 140, width: 70, height: 20 },

  { x: 2520, y: 140, width: 220, height: 20 }, // breather

  // Void bridge — wide double-jump gaps
  { x: 3000, y: 170, width: 150, height: 20 },
  { x: 3450, y: 200, width: 150, height: 20 },

  // Final spike-and-decoy gauntlet
  { x: 3800, y: 200, width: 400, height: 20 },

  { x: 4400, y: 160, width: 350, height: 20 }, // was Final, now mid-level

  // --- Act 2: the hardest stretch in the game — two fast moving
  // platforms back to back (one horizontal, one vertical), a decoy right
  // next to the landing, and one last dense spike bed before the true
  // finish. ---
  { x: 4880, y: 190, width: 200, height: 20 },
  {
    x: 5190,
    y: 120,
    width: 120,
    height: 20,
    moveAxis: "x",
    moveRange: 80,
    moveSpeed: 0.035,
  },
  {
    x: 5410,
    y: 70,
    width: 100,
    height: 20,
    moveAxis: "y",
    moveRange: 45,
    moveSpeed: 0.035,
  },
  { x: 5640, y: 120, width: 150, height: 20 },
  { x: 5940, y: 140, width: 350, height: 20 }, // final spike bed

  { x: 6430, y: 180, width: 400, height: 20 }, // Final
];

window.deadlyPlatforms = [
  { x: 980, y: 360, width: 90, height: 20 },
  { x: 1250, y: 320, width: 90, height: 20 },
  { x: 3970, y: 200, width: 90, height: 20 },
  { x: 5790, y: 120, width: 90, height: 20 }, // right next to the last landing
  { x: 900, y: 600, width: 5400, height: 20 }, // catch-net under the whole gauntlet
];

window.spikes = [
  { x: 450, y: 400, size: 30 },
  { x: 560, y: 400, size: 30 },
  { x: 670, y: 400, size: 30 },
  { x: 780, y: 400, size: 30 },

  { x: 1650, y: 280, size: 25 },
  { x: 2570, y: 140, size: 25 },

  { x: 3840, y: 200, size: 30 },
  { x: 4120, y: 200, size: 35 },

  { x: 5960, y: 140, size: 30 },
  { x: 6070, y: 140, size: 30 },
  { x: 6180, y: 140, size: 35 },
  { x: 6260, y: 140, size: 30 },
];

window.checkpoints = [
  { x: 150, y: 370, reached: false },
  { x: 1650, y: 250, reached: false }, // after the decoy stretch
  { x: 2570, y: 110, reached: false }, // after the pillars
  { x: 3075, y: 140, reached: false }, // mid void bridge
  { x: 3900, y: 170, reached: false }, // after the bridge
  { x: 4550, y: 130, reached: false },
  { x: 5460, y: 40, reached: false }, // after both fast moving platforms
  { x: 6630, y: 150, reached: false }, // Final — beats the game
];
