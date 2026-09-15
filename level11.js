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

let levelText = "Level 11";

const platforms = [
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

  { x: 3000, y: 100, width: 300, height: 20 }, // Final
];

const deadlyPlatforms = [
  { x: 900, y: 560, width: 2200, height: 20 }, // catch-net far below the whole climb
];

const spikes = [
  { x: 1000, y: 380, size: 25 },
  { x: 1980, y: 220, size: 25 },
  { x: 2980, y: 100, size: 25 },
];

const checkpoints = [
  { x: 150, y: 470, reached: false },
  { x: 1150, y: 350, reached: false }, // breather 1
  { x: 2100, y: 190, reached: false }, // breather 2
  { x: 2700, y: 90, reached: false },
  { x: 3150, y: 70, reached: false }, // Final
];
