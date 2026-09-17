// Generates levelN.js files (default: level13.js..level25.js) using the
// exact same physics game.js and the safety audits (audit-*.js in this
// directory) use, so every gap is verified feasible (or deliberately
// gated by a ghost platform, like level 3) at generation time instead of
// hand-placed and hoped safe.
//
// Usage: node .claude/gen-levels.js [outDir] [fromLevel] [toLevel]
//   outDir defaults to the project root; fromLevel/toLevel default to 13/25.
// After running, always re-run audit-gaps.js and audit-checkpoints.js —
// this script validates gaps and checkpoints it places directly, but
// doesn't replace those as the source of truth for the whole level set.
const fs = require("fs");
const path = require("path");

const gravity = 0.5;
const jumpStrength = -12;
const horizontalSpeed = 5;

function simulate(secondJumpFrame) {
  let y = 0, dy = jumpStrength, x = 0;
  let doubleUsed = false;
  const pts = [{ x, y }];
  for (let frame = 0; frame < 250; frame++) {
    dy += gravity;
    x += horizontalSpeed;
    y += dy;
    if (secondJumpFrame != null && frame === secondJumpFrame && !doubleUsed) {
      dy = jumpStrength;
      doubleUsed = true;
    }
    pts.push({ x, y });
  }
  return pts;
}
const singlePath = simulate(null);
const doublePaths = [];
for (let t = 0; t <= 45; t++) doublePaths.push(simulate(t));

function canClearPath(pts, dx, rise) {
  for (const p of pts) {
    if (p.x >= dx) return -p.y >= rise;
  }
  return false;
}
const canSingle = (dx, rise) => canClearPath(singlePath, dx, rise);
const canDouble = (dx, rise) => doublePaths.some((p) => canClearPath(p, dx, rise));

// Deterministic PRNG (mulberry32) so re-runs are reproducible.
function mulberry32(seed) {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const LEVEL_NAMES = {
  13: "Crimson Descent",
  14: "Glass Causeway",
  15: "Wraith's Crossing",
  16: "The Hollow Spiral",
  17: "Emberfall Reach",
  18: "Phantom Causeway",
  19: "The Shattered Path",
  20: "Void Marrow",
  21: "Starlit Precipice",
  22: "The Last Bastion",
  23: "Eclipse Corridor",
  24: "The Abyssal Climb",
  25: "Starshade's Zenith",
};

function generateLevel(n, rampFrom, rampTo) {
  const rand = mulberry32(n * 97531 + 7);
  const t = rampTo > rampFrom ? (n - rampFrom) / (rampTo - rampFrom) : 0;

  const spikeChance = 0.32 + 0.33 * t;
  const movableChance = 0.4 + 0.3 * t;
  const ghostShare = 0.35 + 0.15 * t; // share of "movable" slots that become ghost instead of moving
  const meltShare = 0.18 + 0.1 * t;
  const decoyChance = 0.22 + 0.33 * t;
  const moveSpeedBase = 0.02 + 0.016 * t;
  const moveRangeBase = 45 + 35 * t;
  const numSteps = 16 + Math.round(8 * t);
  // Mandatory ghost gates (a gap too wide for even a double jump, like
  // level 3's — see the sanity checks below) only start appearing in the
  // harder back half of the ramp.
  const mandatoryGhostGates = t < 0.45 ? 0 : t < 0.8 ? 1 : 2;

  const platforms = [];
  const deadlyPlatforms = [];
  const spikes = [];
  const checkpoints = [];

  let x = 50;
  let y = 380; // nominal, runtime centering handles the real viewport
  const startWidth = 250;
  platforms.push({ x, y, width: startWidth, height: 20 });
  checkpoints.push({ x: x + 100, y: y - 30, reached: false });

  let sinceBreather = 0;
  let ghostGatesPlaced = 0;
  let curX = x + startWidth;
  let curY = y;
  const candidateIndices = []; // indices into `platforms` eligible to become moving/ghost/melt

  function placeStep(riseTarget, wide) {
    // Pick the largest dx that keeps this gap within single-jump range for
    // the target rise; occasionally (climbing hard) fall back to a
    // double-jump-only distance instead, matching the existing levels'
    // "needs a double jump (ok if intentional)" design language.
    const wantsDouble = rand() < 0.22 + 0.25 * t && riseTarget > 0;
    let dx;
    if (wantsDouble && canDouble(320, riseTarget)) {
      dx = 260 + Math.floor(rand() * 70);
      if (!canDouble(dx, riseTarget)) dx = 240;
    } else {
      dx = 130 + Math.floor(rand() * 90);
      while (dx > 60 && !canSingle(dx, riseTarget)) dx -= 10;
    }
    const width = wide ? 220 + Math.floor(rand() * 80) : 70 + Math.floor(rand() * 110);
    const px = curX + dx;
    const py = curY - riseTarget;
    curX = px + width; // track the RIGHT edge — the next gap is measured from here
    curY = py;
    return { x: px, y: py, width };
  }

  for (let i = 0; i < numSteps; i++) {
    sinceBreather++;
    const isBreather = sinceBreather >= 4 + Math.floor(rand() * 2);
    // Oscillating climb/dip pattern, like levels 6/9's rollercoaster
    // shape, so the level has visual rhythm instead of monotonically
    // climbing off the visible band forever.
    const phase = Math.sin(i / 3.2 + n) ;
    const riseTarget = Math.round(phase * (40 + 50 * t) + (rand() - 0.5) * 30);

    // Occasionally gate a gap behind a mandatory ghost platform (like
    // level 3) — only in the harder back half of the new levels, and only
    // a couple of times per level.
    if (
      ghostGatesPlaced < mandatoryGhostGates &&
      isBreather &&
      rand() < 0.5 &&
      i > 4 &&
      i < numSteps - 4
    ) {
      const preGap = { x: curX, y: curY, width: 240 + Math.floor(rand() * 60), height: 20 };
      platforms.push(preGap);
      curX = preGap.x + preGap.width;
      curY = preGap.y;

      const bridgeY = curY - (10 + Math.floor(rand() * 20));
      const bridgeX = curX + 190 + Math.floor(rand() * 20);
      platforms.push({
        x: bridgeX,
        y: bridgeY,
        width: 90 + Math.floor(rand() * 20),
        ghost: true,
        height: 20,
        ghostPeriod: Math.max(120, 190 - Math.round(70 * t)),
        ghostOnRatio: Math.max(0.35, 0.6 - 0.2 * t),
      });
      const bridgeEnd = bridgeX + 90;

      const postRise = 10 + Math.floor(rand() * 20);
      const postX = bridgeEnd + 190 + Math.floor(rand() * 20);
      const postY = bridgeY - postRise;
      const postPlatform = { x: postX, y: postY, width: 220 + Math.floor(rand() * 60), height: 20 };
      platforms.push(postPlatform);
      curX = postPlatform.x + postPlatform.width;
      curY = postPlatform.y;

      // Sanity: the direct pre->post distance must genuinely exceed a
      // double jump's reach, and each half must be a comfortable single
      // jump, or this generator has a bug.
      const directDx = postPlatform.x - preGap.x - preGap.width;
      const directRise = preGap.y - postPlatform.y;
      if (canDouble(directDx, directRise)) {
        throw new Error(`Level ${n}: ghost gate not actually mandatory (direct dx=${directDx} rise=${directRise})`);
      }
      const hop1Dx = bridgeX - (preGap.x + preGap.width);
      const hop1Rise = preGap.y - bridgeY;
      const hop2Dx = postX - bridgeEnd;
      const hop2Rise = bridgeY - postY;
      if (!canSingle(hop1Dx, hop1Rise) || !canSingle(hop2Dx, hop2Rise)) {
        throw new Error(`Level ${n}: ghost gate sub-hop not single-jump safe`);
      }

      ghostGatesPlaced++;
      checkpoints.push({ x: postPlatform.x + 60, y: postPlatform.y - 30, reached: false });
      sinceBreather = 0;
      continue;
    }

    // Every step is generated as a plain solid platform first — whether it
    // becomes a moving/ghost/melt platform is decided in a second pass
    // below, once every position is finalized and neighbors are known.
    // (An earlier version decided this up front, per-step; that let an
    // incidental ghost/melt platform silently turn the gap around it into
    // an unvalidated, accidental "mandatory gate" — the very thing the
    // explicit gate mechanic above exists to do safely.)
    const step = placeStep(isBreather ? 0 : riseTarget, isBreather);
    step.height = 20;
    platforms.push(step);

    if (!isBreather) candidateIndices.push(platforms.length - 1);

    if (isBreather) {
      checkpoints.push({ x: step.x + step.width / 2, y: step.y - 30, reached: false });
      sinceBreather = 0;
    }
  }

  // Final platform + finish checkpoint.
  const finalWidth = 380 + Math.floor(rand() * 60);
  let finalGapDx = 150 + Math.floor(rand() * 60);
  const finalRise = Math.round((rand() - 0.5) * 30);
  while (finalGapDx > 60 && !canSingle(finalGapDx, finalRise)) finalGapDx -= 10;
  const finalX = curX + finalGapDx;
  const finalY = curY - finalRise;
  platforms.push({ x: finalX, y: finalY, width: finalWidth, height: 20 });
  checkpoints.push({ x: finalX + finalWidth / 2, y: finalY - 30, reached: false });

  // --- Pass 2: decide which candidate steps become moving/ghost/melt ---
  // Every position is finalized now, so — unlike deciding this per-step
  // during generation — each candidate can be checked against its actual
  // current solid neighbors (accounting for earlier conversions in this
  // same pass) before committing to making it intangible.
  function solidNeighbors(index) {
    let before = null;
    for (let i = index - 1; i >= 0; i--) {
      if (!platforms[i].ghost) { before = platforms[i]; break; }
    }
    let after = null;
    for (let i = index + 1; i < platforms.length; i++) {
      if (!platforms[i].ghost) { after = platforms[i]; break; }
    }
    return { before, after };
  }

  candidateIndices.forEach((index) => {
    if (rand() >= movableChance) return;
    const step = platforms[index];
    const subRoll = rand();
    const wantsGhost = subRoll < ghostShare;
    const wantsMelt = !wantsGhost && subRoll < ghostShare + meltShare;

    if (wantsGhost) {
      // Ghost platforms are excluded from the "is this level completable"
      // check (see .claude/audit-gaps.js) — removing this one must still
      // leave its solid neighbors a feasible double jump apart, or this
      // would silently become an unintended, unvalidated mandatory gate.
      const { before, after } = solidNeighbors(index);
      if (before && after) {
        const gap = after.x - (before.x + before.width);
        const rise = before.y - after.y;
        if (rise > 0 && !canDouble(gap, rise)) return; // leave it solid
      }
      step.ghost = true;
      step.ghostPeriod = Math.max(120, 200 - Math.round(80 * t));
      step.ghostOnRatio = Math.max(0.4, 0.65 - 0.25 * t);
    } else if (wantsMelt) {
      // Melt platforms count as solid (they're always there the first
      // time you reach them — see docs/gameplay.md), so no feasibility
      // recheck is needed here.
      step.melt = true;
      step.meltDelay = Math.max(20, 30 - Math.round(10 * t));
    } else {
      step.moveAxis = rand() < 0.6 ? "x" : "y";
      step.moveRange = Math.round(moveRangeBase * (0.7 + rand() * 0.6));
      step.moveSpeed = +(moveSpeedBase * (0.8 + rand() * 0.5)).toFixed(3);
      step.movePhase = +(rand() * 6.28).toFixed(2);
    }
  });

  // --- Pass 3: spikes and deadly decoys on whatever's left plain ---
  candidateIndices.forEach((index) => {
    const step = platforms[index];
    if (step.moveAxis || step.ghost || step.melt) return;
    if (rand() < spikeChance) {
      const size = 18 + Math.floor(rand() * 15);
      const sx = step.x + Math.max(10, Math.floor(step.width * (0.2 + rand() * 0.5)));
      spikes.push({ x: sx, y: step.y, size });
    }
    if (rand() < decoyChance) {
      deadlyPlatforms.push({
        x: step.x + step.width + 20 + Math.floor(rand() * 20),
        y: step.y + Math.round((rand() - 0.5) * 20),
        width: Math.max(60, Math.round(step.width * (0.5 + rand() * 0.4))),
        height: 20,
      });
    }
  });

  return {
    n,
    name: LEVEL_NAMES[n] || `Level ${n}`,
    platforms,
    deadlyPlatforms,
    spikes,
    checkpoints,
  };
}

function serializePlatform(p) {
  // A missing field here silently serializes as the literal text
  // "undefined" — valid JS, but it poisons every downstream min/max in
  // applyLevelVerticalLayout() (game.js) with NaN, which then wrecks
  // every platform/checkpoint position in the whole level, not just this
  // one platform. Fail loudly here instead.
  for (const key of ["x", "y", "width", "height"]) {
    if (typeof p[key] !== "number" || Number.isNaN(p[key])) {
      throw new Error(`platform missing numeric ${key}: ${JSON.stringify(p)}`);
    }
  }
  const parts = [`x: ${p.x}`, `y: ${p.y}`, `width: ${p.width}`, `height: ${p.height}`];
  if (p.moveAxis) {
    parts.push(`moveAxis: "${p.moveAxis}"`);
    parts.push(`moveRange: ${p.moveRange}`);
    parts.push(`moveSpeed: ${p.moveSpeed}`);
    if (p.movePhase) parts.push(`movePhase: ${p.movePhase}`);
  }
  if (p.ghost) {
    parts.push(`ghost: true`);
    parts.push(`ghostPeriod: ${p.ghostPeriod}`);
    parts.push(`ghostOnRatio: ${p.ghostOnRatio}`);
  }
  if (p.melt) {
    parts.push(`melt: true`);
    parts.push(`meltDelay: ${p.meltDelay}`);
  }
  return `  { ${parts.join(", ")} },`;
}

function writeLevel(level) {
  const lines = [];
  lines.push(`// Level ${level.n} Data — "${level.name}"`);
  lines.push(`// Generated to fit the established difficulty curve (see`);
  lines.push(`// docs/gameplay.md) — every gap here is verified against the same`);
  lines.push(`// physics .claude/audit-gaps.js checks, and any ghost-gated gap is`);
  lines.push(`// confirmed to genuinely require the ghost platform.`);
  lines.push(``);
  lines.push(`window.levelText = "Level ${level.n}";`);
  lines.push(``);
  lines.push(`window.platforms = [`);
  level.platforms.forEach((p) => lines.push(serializePlatform(p)));
  lines.push(`];`);
  lines.push(``);
  lines.push(`window.deadlyPlatforms = [`);
  level.deadlyPlatforms.forEach((p) =>
    lines.push(`  { x: ${p.x}, y: ${p.y}, width: ${p.width}, height: ${p.height} },`)
  );
  lines.push(`];`);
  lines.push(``);
  lines.push(`window.spikes = [`);
  level.spikes.forEach((s) => lines.push(`  { x: ${s.x}, y: ${s.y}, size: ${s.size} },`));
  lines.push(`];`);
  lines.push(``);
  lines.push(`window.checkpoints = [`);
  level.checkpoints.forEach((c, i) => {
    const tag = i === level.checkpoints.length - 1 ? " // Final" : "";
    lines.push(`  { x: ${Math.round(c.x)}, y: ${Math.round(c.y)}, reached: false },${tag}`);
  });
  lines.push(`];`);
  lines.push(``);

  return lines.join("\n");
}

const outDir = process.argv[2] || path.join(__dirname, "..");
const fromLevel = parseInt(process.argv[3] || "13", 10);
const toLevel = parseInt(process.argv[4] || "25", 10);

const results = [];
for (let n = fromLevel; n <= toLevel; n++) {
  const level = generateLevel(n, fromLevel, toLevel);
  const content = writeLevel(level);
  results.push({ n, content });
}

results.forEach(({ n, content }) => {
  fs.writeFileSync(path.join(outDir, `level${n}.js`), content);
});
console.log(`Wrote ${results.length} level files (level${fromLevel}.js..level${toLevel}.js) to ${outDir}`);
