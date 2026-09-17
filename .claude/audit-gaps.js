// Static jump-feasibility audit — run with: node .claude/audit-gaps.js
//
// For every level, sorts platforms by x and flags any horizontal gap
// between consecutive platforms that climbs (next platform higher) more
// than a single jump can cover, or more than a jump+double-jump can cover
// at all. Mirrors game.js's real gravity/jumpStrength/horizontalSpeed so
// this reflects the actual physics, not eyeballed pixel guesses.
const fs = require("fs");
const path = require("path");

const gravity = 0.5;
const jumpStrength = -12;
const horizontalSpeed = 5;

function loadLevel(n) {
  const file = path.join(__dirname, "..", `level${n}.js`);
  const src = fs.readFileSync(file, "utf8");
  const fn = new Function("window", src + "\nreturn window;");
  return fn({});
}

// Simulates holding a direction the whole time, jumping now, and
// optionally double-jumping `secondJumpFrame` frames later. Returns the
// (x, y) trajectory relative to the takeoff point.
function simulate(secondJumpFrame) {
  let y = 0,
    dy = jumpStrength,
    x = 0;
  let doubleUsed = false;
  const path = [{ x, y }];
  for (let frame = 0; frame < 250; frame++) {
    dy += gravity;
    x += horizontalSpeed;
    y += dy;
    if (secondJumpFrame != null && frame === secondJumpFrame && !doubleUsed) {
      dy = jumpStrength;
      doubleUsed = true;
    }
    path.push({ x, y });
  }
  return path;
}

const singleJumpPath = simulate(null);
// Every possible double-jump timing (0-45 frames after the first jump) —
// a gap only needs ONE of these timings to work, not the single path that
// happens to travel farthest overall (a late second jump maximizes total
// distance but arrives at that distance already low/falling, which is
// exactly wrong for a gap that also climbs).
const allDoublePaths = [];
for (let t = 0; t <= 45; t++) allDoublePaths.push(simulate(t));

function canClearPath(pathPoints, dx, riseNeeded) {
  // riseNeeded > 0 means the destination is HIGHER (harder). True if, at
  // the moment the trajectory reaches dx horizontally, it has climbed at
  // least riseNeeded (y is negative-going relative to the takeoff point).
  for (const p of pathPoints) {
    if (p.x >= dx) {
      return -p.y >= riseNeeded;
    }
  }
  return false;
}

function canClearSingle(dx, riseNeeded) {
  return canClearPath(singleJumpPath, dx, riseNeeded);
}

function canClearDouble(dx, riseNeeded) {
  return allDoublePaths.some((p) => canClearPath(p, dx, riseNeeded));
}

const results = [];
for (let n = 1; n <= 25; n++) {
  const level = loadLevel(n);
  // Ghost platforms (see game.js's updateGhostPlatforms()) are only
  // sometimes solid, so the level must be completable without ever relying
  // on one being there — they're an optional bonus route, not part of the
  // guaranteed path. Excluding them here checks exactly that: the original,
  // always-solid skeleton is still fully traversable on its own.
  const solid = level.platforms
    .filter((p) => !p.ghost)
    .sort((a, b) => a.x - b.x);
  for (let i = 0; i < solid.length - 1; i++) {
    const cur = solid[i];
    const next = solid[i + 1];
    const gap = next.x - (cur.x + cur.width);
    if (gap <= 0) continue;
    const rise = cur.y - next.y; // positive = next platform is higher
    if (rise <= 0) continue; // descending/flat gaps are always fine (see docs)

    const singleOk = canClearSingle(gap, rise);
    const doubleOk = canClearDouble(gap, rise);

    if (!doubleOk) {
      results.push({
        level: n,
        from: cur.x + cur.width,
        to: next.x,
        gap,
        rise,
        verdict: "IMPOSSIBLE even with a double jump",
      });
    } else if (!singleOk) {
      results.push({
        level: n,
        from: cur.x + cur.width,
        to: next.x,
        gap,
        rise,
        verdict: "needs a double jump (ok if intentional)",
      });
    }
  }
}

const impossible = results.filter((r) => r.verdict.startsWith("IMPOSSIBLE"));
console.log(`Checked all 25 levels.`);
console.log(
  `${impossible.length} IMPOSSIBLE gap(s), ${results.length - impossible.length} double-jump-required gap(s) (informational).\n`
);
results.forEach((r) => {
  console.log(
    `Level ${r.level}: gap ${r.gap}px, rise ${r.rise}px (x ${r.from}->${r.to}) — ${r.verdict}`
  );
});
