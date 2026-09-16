// Level 2 Data

window.levelText = "Level 2"; // The text to display

// Platforms (taller climbs, spaced jumps, moving-style layouts)
window.platforms = [
  // Starting ground
  { x: 50, y: 500, width: 300, height: 20 },
  { x: 400, y: 450, width: 150, height: 20 },

  // Staggered climb
  { x: 650, y: 400, width: 150, height: 20 },
  { x: 850, y: 350, width: 150, height: 20 },
  { x: 1050, y: 300, width: 150, height: 20 },

  // Long risky run
  { x: 1350, y: 250, width: 400, height: 20 },

  // Floating islands
  { x: 1900, y: 400, width: 120, height: 20 },
  { x: 2100, y: 350, width: 120, height: 20 },
  { x: 2300, y: 300, width: 120, height: 20 },
  { x: 2500, y: 250, width: 120, height: 20 },

  // Final stretch
  { x: 2800, y: 200, width: 300, height: 20 },
  { x: 3200, y: 150, width: 400, height: 20 },
];

// Deadly red kill platforms (placed where it hurts)
window.deadlyPlatforms = [
  { x: 1500, y: 230, width: 150, height: 20 },
  { x: 2600, y: 230, width: 120, height: 20 },
  { x: 3350, y: 130, width: 150, height: 20 },
];

// Spikes (small traps + big spike walls)
window.spikes = [
  // Early bait spikes
  { x: 500, y: 448, size: 30 },
  { x: 700, y: 398, size: 30 },

  // Mid section spike traps
  { x: 1150, y: 280, size: 40 },
  { x: 1400, y: 230, size: 30 },
  { x: 1600, y: 230, size: 30 },

  // Floating islands — precision spike hell
  { x: 1950, y: 380, size: 25 },
  { x: 2150, y: 330, size: 25 },
  { x: 2350, y: 280, size: 25 },

  // Final gauntlet
  { x: 2850, y: 180, size: 35 },
  { x: 3000, y: 180, size: 35 },
  { x: 3450, y: 130, size: 50 },
];

// Checkpoints
// Added two mid-points — the gaps between the original 3 checkpoints
// (1250px, then 1800px through the floating islands' spike gauntlet) were
// long enough that one death near the end meant redoing a lot of the level.
window.checkpoints = [
  { x: 200, y: 470, reached: false }, // Start
  { x: 1150, y: 270, reached: false }, // Top of the staggered climb
  { x: 1450, y: 210, reached: false }, // Mid-point before the hell run
  { x: 2300, y: 270, reached: false }, // Mid floating islands
  { x: 3250, y: 120, reached: false }, // Near the finish
];
