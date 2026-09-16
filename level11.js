// Level 11 Data — "The Ascent"
// One long, mostly-uninterrupted climb — chained double jumps up a
// staircase of narrow ledges, with breather platforms every few steps.
//
// NOTE: the camera only scrolls horizontally (see cameraOffsetX in
// game.js) — there's no vertical scroll at all, so every platform's `y`
// has to stay inside the same visible band the other levels use
// (roughly 80-560) or it renders off the top/bottom of the canvas on
// smaller windows. This level is "tall" in feel (lots of double-jump
// chaining) but not in absolute pixels.

window.levelText = "Level 11";

window.platforms = [
  { x: 50, y: 500, width: 250, height: 20 }, // Start

  { x: 380, y: 460, width: 100, height: 20 },
  { x: 600, y: 420, width: 100, height: 20 },
  { x: 820, y: 380, width: 100, height: 20 },

  { x: 1050, y: 380, width: 250, height: 20 }, // breather 1

  { x: 1420, y: 320, width: 80, height: 20 }, // double jump: 170 gap + 60 rise
  { x: 1620, y: 260, width: 80, height: 20 }, // double jump: 200 gap + 60 rise
  { x: 1820, y: 220, width: 80, height: 20 },

  { x: 2020, y: 220, width: 250, height: 20 }, // breather 2

  { x: 2400, y: 160, width: 80, height: 20 },
  { x: 2600, y: 120, width: 80, height: 20 },
  { x: 2800, y: 100, width: 80, height: 20 },

  { x: 3000, y: 100, width: 300, height: 20 }, // was Final, now mid-level

  // --- Act 2: we're already near the top of the visible band (see the
  // note above about no vertical scroll), so this doesn't climb higher —
  // instead it's a sustained double-jump gauntlet at altitude, including
  // the level's first moving pillar. ---
  { x: 3460, y: 90, width: 70, height: 20 },
  {
    x: 3710,
    y: 70,
    width: 70,
    height: 20,
    moveAxis: "x",
    moveRange: 40,
    moveSpeed: 0.025,
  },
  { x: 3950, y: 80, width: 70, height: 20 },
  { x: 4170, y: 80, width: 250, height: 20 }, // breather

  { x: 4550, y: 60, width: 350, height: 20 }, // Final
];

window.deadlyPlatforms = [
  { x: 900, y: 560, width: 3400, height: 20 }, // catch-net far below the whole climb
];

window.spikes = [
  { x: 1000, y: 380, size: 25 },
  { x: 1980, y: 220, size: 25 },
  { x: 2980, y: 100, size: 25 },
  { x: 4220, y: 80, size: 25 },
];

window.checkpoints = [
  { x: 150, y: 470, reached: false },
  { x: 1150, y: 350, reached: false }, // breather 1
  { x: 2100, y: 190, reached: false }, // breather 2
  { x: 2630, y: 90, reached: false }, // On the ledge before the final approach
  { x: 3990, y: 50, reached: false }, // after the moving pillar
  { x: 4720, y: 30, reached: false }, // Final
];
