// Level 11 Data — "The Ascent"
// A sustained climb with heavy double-jump chaining and several moving
// pillars near the top, where the visible band runs out of headroom (see
// the note in docs/gameplay.md — no vertical scroll at all).

window.levelText = "Level 11";

window.platforms = [
  { x: 50, y: 500, width: 250, height: 20 }, // Start

  { x: 380, y: 460, width: 100, height: 20 },
  { x: 600, y: 420, width: 100, height: 20 },
  { x: 820, y: 380, width: 100, height: 20 },

  { x: 1050, y: 380, width: 250, height: 20 }, // breather 1

  {
    x: 1420,
    y: 320,
    width: 75,
    height: 20,
    moveAxis: "x",
    moveRange: 55,
    moveSpeed: 0.022,
  },
  { x: 1650, y: 260, width: 75, height: 20 },
  {
    x: 1860,
    y: 220,
    width: 75,
    height: 20,
    moveAxis: "x",
    moveRange: 45,
    moveSpeed: 0.026,
  },

  { x: 2080, y: 220, width: 250, height: 20 }, // breather 2

  { x: 2450, y: 170, width: 75, height: 20 },
  {
    x: 2670,
    y: 130,
    width: 75,
    height: 20,
    moveAxis: "y",
    moveRange: 35,
    moveSpeed: 0.024,
  },
  { x: 2900, y: 100, width: 75, height: 20 },

  { x: 3120, y: 100, width: 250, height: 20 }, // breather 3

  { x: 3500, y: 70, width: 75, height: 20 },
  { x: 3720, y: 40, width: 75, height: 20 },

  { x: 3950, y: 60, width: 400, height: 20 }, // Final
];

window.deadlyPlatforms = [
  { x: 900, y: 560, width: 3200, height: 20 }, // catch-net far below the whole climb
];

window.spikes = [
  { x: 1000, y: 380, size: 25 },
  { x: 2130, y: 220, size: 25 },
  { x: 3170, y: 100, size: 25 },
];

window.checkpoints = [
  { x: 150, y: 470, reached: false },
  { x: 1150, y: 350, reached: false }, // breather 1
  { x: 2130, y: 190, reached: false }, // breather 2
  { x: 3170, y: 70, reached: false }, // breather 3
  { x: 4070, y: 30, reached: false }, // Final
];
