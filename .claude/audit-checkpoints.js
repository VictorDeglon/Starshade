// Static safety audit for level checkpoints — run with:
//   node .claude/audit-checkpoints.js
//
// For every checkpoint in every level, simulates what resetPlayer() would
// actually put the player through: spawn at (checkpoint.x, checkpoint.y - 30)
// and simulate real per-frame physics (same gravity/collision as game.js)
// for a few seconds with no input, checking whether the player:
//   (a) is dropped immediately into a deadly platform or spike, or
//   (b) never finds solid ground and falls off the bottom of the world.
// Either of those is an "eternal death loop" — the checkpoint would just
// respawn the player into the same death forever with no way out.
const fs = require("fs");
const path = require("path");

const gravity = 0.5;
const playerSize = 25;

function loadLevel(n) {
  const file = path.join(__dirname, "..", `level${n}.js`);
  const src = fs.readFileSync(file, "utf8");
  const sandbox = { window: {} };
  // Level files assign to `window.platforms` etc (see docs/architecture.md)
  // rather than declaring bare `const`/`let` bindings, so — unlike in a
  // real browser, where `window` IS the global object and bare
  // identifiers fall back to its properties — a plain `new Function`
  // sandbox needs the return statement to read back off `window`
  // explicitly; a bare `platforms` here would just be a ReferenceError.
  const fn = new Function(
    "window",
    src + "\nreturn window;"
  );
  return fn(sandbox.window);
}

function overlapsDeadly(x, y, deadlyPlatforms) {
  const half = playerSize / 2;
  return deadlyPlatforms.some(
    (p) =>
      x + half > p.x &&
      x - half < p.x + p.width &&
      y + half > p.y &&
      y - half < p.y + p.height
  );
}

function overlapsSpike(x, y, spikes) {
  const half = playerSize / 2;
  return spikes.some((spike) => {
    const spikeTipY = spike.y - spike.size;
    if (
      x + half > spike.x &&
      x - half < spike.x + spike.size &&
      y + half > spikeTipY &&
      y < spike.y
    ) {
      const spikeCenterX = spike.x + spike.size / 2;
      const spikeSlope = spike.size / (spike.size / 2);
      const distanceFromCenter = Math.abs(x - spikeCenterX);
      return distanceFromCenter * spikeSlope + y + half > spikeTipY;
    }
    return false;
  });
}

// Mirrors resolveAxis('y') from game.js for a stationary (dx=0) player.
function simulateFall(startX, startY, platforms, maxFrames) {
  let y = startY;
  let dy = 0;
  const half = playerSize / 2;
  for (let frame = 0; frame < maxFrames; frame++) {
    dy += gravity;
    const oldFar = y + half;
    const newY = y + dy;
    const newFar = newY + half;
    let landed = false;
    for (const p of platforms) {
      const xOverlap = startX + half > p.x && startX - half < p.x + p.width;
      if (!xOverlap) continue;
      if (oldFar <= p.y && newFar > p.y) {
        y = p.y - half;
        dy = 0;
        landed = true;
        break;
      }
    }
    if (landed) return { landed: true, frame, y };
    y = newY;
    if (y > 3000) return { landed: false, frame, y }; // fell forever
  }
  return { landed: false, frame: maxFrames, y };
}

// Scales automatically as more levels are added — no hardcoded "25" to
// remember to bump every time the level count grows.
let maxLevel = 1;
while (fs.existsSync(path.join(__dirname, "..", `level${maxLevel + 1}.js`))) maxLevel++;

// See audit-gaps.js's identical comment — the ten branch levels aren't
// part of the numeric probe loop above, so they're appended explicitly.
const BRANCH_IDS = ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10"];

const issues = [];
const allIds = [];
for (let n = 1; n <= maxLevel; n++) allIds.push(n);
BRANCH_IDS.forEach((id) => {
  if (fs.existsSync(path.join(__dirname, "..", `level${id}.js`))) allIds.push(id);
});
for (const n of allIds) {
  const level = loadLevel(n);
  level.checkpoints.forEach((cp, index) => {
    const spawnX = cp.x;
    const spawnY = cp.y - 30;

    if (overlapsDeadly(spawnX, spawnY, level.deadlyPlatforms)) {
      issues.push({
        level: n,
        checkpointIndex: index,
        checkpoint: cp,
        problem: "respawn point overlaps a deadly platform",
      });
    }
    if (overlapsSpike(spawnX, spawnY, level.spikes)) {
      issues.push({
        level: n,
        checkpointIndex: index,
        checkpoint: cp,
        problem: "respawn point overlaps a spike",
      });
    }

    // Ghost platforms (see game.js's updateGhostPlatforms()) are only
    // sometimes solid — a checkpoint must be safe to land on regardless of
    // where a ghost platform's cycle happens to be, so they're excluded
    // here rather than treated as guaranteed ground. Gated platforms
    // (levels 50+ — see .claude/gen-levels.js's Pass 7) start intangible
    // until their switch is thrown, exactly the same "not guaranteed
    // solid" case, so they're excluded here too.
    const solidPlatforms = level.platforms.filter((p) => !p.ghost && !p.gated);
    const fall = simulateFall(spawnX, spawnY, solidPlatforms, 600);
    if (!fall.landed) {
      issues.push({
        level: n,
        checkpointIndex: index,
        checkpoint: cp,
        problem: `never lands on any platform within 600 frames (fell to y=${fall.y.toFixed(0)})`,
      });
    } else {
      // Landed — now check if THAT landing spot is itself inside a hazard
      // (e.g. lands exactly on a deadly platform's matching-height twin).
      if (overlapsDeadly(spawnX, fall.y, level.deadlyPlatforms)) {
        issues.push({
          level: n,
          checkpointIndex: index,
          checkpoint: cp,
          problem: `falls and lands inside a deadly platform after ${fall.frame} frames`,
        });
      }
    }
  });
}

if (issues.length === 0) {
  console.log(`No checkpoint safety issues found across all ${maxLevel} levels (plus ${allIds.length - maxLevel} branch level(s)).`);
} else {
  console.log(`Found ${issues.length} issue(s):\n`);
  issues.forEach((i) => {
    console.log(
      `Level ${i.level}, checkpoint #${i.checkpointIndex} (${i.checkpoint.x}, ${i.checkpoint.y}): ${i.problem}`
    );
  });
}
