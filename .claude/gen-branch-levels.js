// Generates the ten stand-alone "true" branch levels (levelB1.js -
// levelB10.js — see levels.js's TRUE_BRANCH_LEVELS and docs/gameplay.md's
// "Ten themed branch levels"). Not part of the sequential 1-100 path at
// all (see game.js's startBranchLevelFromOverlay()/completeBranchLevel())
// — each is reachable only from its own Level Map node, longer and more
// densely built than an ordinary generated level, with its own wholesale
// visual theme (THEMES in game.js) and a "hero mechanic" pairing turned
// up far past its normal mainline share.
//
// Usage: node .claude/gen-branch-levels.js [outDir]
//   outDir defaults to the project root.
//
// Shares its jump-feasibility kernel (simulate/canSingle/canDouble/
// mulberry32) and its per-step placement/serialization approach with
// .claude/gen-levels.js verbatim — every gap here is checked against the
// exact same physics, and after running this, re-run audit-gaps.js /
// audit-checkpoints.js exactly like after gen-levels.js (they detect
// levelB*.js files too).
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
function maxSingleDx(rise, searchCeiling = 260) {
  let dx = searchCeiling;
  while (dx > 20 && !canSingle(dx, rise)) dx -= 2;
  return dx;
}
function maxDoubleDx(rise, searchCeiling = 500) {
  let dx = searchCeiling;
  while (dx > 20 && !canDouble(dx, rise)) dx -= 2;
  return dx;
}

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

// -------------------------------------------------------------------
// Ten branches — id/name/theme must exactly match levels.js's
// TRUE_BRANCH_LEVELS and game.js's THEMES. `t` is a fixed difficulty
// position (not a per-level ramp like the mainline — these are all
// roughly "harder than the level they anchor off," matching
// docs/gameplay.md's placement), `numSteps` deliberately longer than a
// typical mainline level ("make all our super levels longer and more
// detailed"), and `mech` is each branch's own mechanic-share table —
// every branch turns at least one thing far past its mainline share, per
// docs/gameplay.md's per-branch table.
// -------------------------------------------------------------------
const BRANCHES = [
  {
    id: "b1", name: "Ember Forge", theme: "ember", seed: 1001, t: 1.05, numSteps: 40,
    mech: { spikeChance: 0.55, movableChance: 0.62, ghostShare: 0.22, meltShare: 0.34, bounceShare: 0.14, conveyorShare: 0.1,
      decoyChance: 0.5, crisscrossChance: 0.3, laserChance: 0.4, fallerChance: 0.55, forceZoneChance: 0.12, gateChance: 0.08 },
  },
  {
    id: "b2", name: "Glacier Spire", theme: "glacier", seed: 1002, t: 1.15, numSteps: 42,
    mech: { spikeChance: 0.5, movableChance: 0.6, ghostShare: 0.42, meltShare: 0.1, bounceShare: 0.12, conveyorShare: 0.08,
      decoyChance: 0.4, crisscrossChance: 0.22, laserChance: 0.18, fallerChance: 0.2, forceZoneChance: 0.4, gateChance: 0.1 },
  },
  {
    id: "b3", name: "Toxic Hollow", theme: "toxic", seed: 1003, t: 1.2, numSteps: 41,
    mech: { spikeChance: 0.5, movableChance: 0.6, ghostShare: 0.16, meltShare: 0.4, bounceShare: 0.08, conveyorShare: 0.12,
      decoyChance: 0.5, crisscrossChance: 0.26, laserChance: 0.2, fallerChance: 0.18, forceZoneChance: 0.16, gateChance: 0.26 },
  },
  {
    id: "b4", name: "Storm Reach", theme: "storm", seed: 1004, t: 1.3, numSteps: 43,
    mech: { spikeChance: 0.55, movableChance: 0.65, ghostShare: 0.2, meltShare: 0.14, bounceShare: 0.1, conveyorShare: 0.1,
      decoyChance: 0.5, crisscrossChance: 0.42, laserChance: 0.5, fallerChance: 0.2, forceZoneChance: 0.36, gateChance: 0.08 },
  },
  {
    id: "b5", name: "Gilded Vault", theme: "gilded", seed: 1005, t: 1.25, numSteps: 40, portals: 2,
    mech: { spikeChance: 0.45, movableChance: 0.55, ghostShare: 0.2, meltShare: 0.1, bounceShare: 0.14, conveyorShare: 0.16,
      decoyChance: 0.4, crisscrossChance: 0.2, laserChance: 0.16, fallerChance: 0.14, forceZoneChance: 0.14, gateChance: 0.34 },
  },
  {
    id: "b6", name: "Abyssal Trench", theme: "abyssal", seed: 1006, t: 1.3, numSteps: 42,
    mech: { spikeChance: 0.5, movableChance: 0.62, ghostShare: 0.24, meltShare: 0.12, bounceShare: 0.26, conveyorShare: 0.08,
      decoyChance: 0.44, crisscrossChance: 0.24, laserChance: 0.16, fallerChance: 0.16, forceZoneChance: 0.42, gateChance: 0.1 },
  },
  {
    id: "b7", name: "Crimson Bastion", theme: "crimson", seed: 1007, t: 1.4, numSteps: 42,
    mech: { spikeChance: 0.6, movableChance: 0.66, ghostShare: 0.18, meltShare: 0.1, bounceShare: 0.08, conveyorShare: 0.08,
      decoyChance: 0.55, crisscrossChance: 0.46, laserChance: 0.46, fallerChance: 0.22, forceZoneChance: 0.14, gateChance: 0.24 },
  },
  {
    id: "b8", name: "Aurora Veil", theme: "aurora", seed: 1008, t: 1.2, numSteps: 41, portals: 2,
    mech: { spikeChance: 0.42, movableChance: 0.56, ghostShare: 0.3, meltShare: 0.12, bounceShare: 0.12, conveyorShare: 0.08,
      decoyChance: 0.38, crisscrossChance: 0.2, laserChance: 0.16, fallerChance: 0.14, forceZoneChance: 0.4, gateChance: 0.16 },
  },
  {
    id: "b9", name: "Obsidian Rift", theme: "obsidian", seed: 1009, t: 1.35, numSteps: 42,
    mech: { spikeChance: 0.55, movableChance: 0.62, ghostShare: 0.36, meltShare: 0.1, bounceShare: 0.1, conveyorShare: 0.08,
      decoyChance: 0.46, crisscrossChance: 0.28, laserChance: 0.36, fallerChance: 0.36, forceZoneChance: 0.14, gateChance: 0.12 },
  },
  {
    id: "b10", name: "Solar Crown", theme: "solar", seed: 1010, t: 1.55, numSteps: 48, portals: 1,
    mech: { spikeChance: 0.6, movableChance: 0.7, ghostShare: 0.24, meltShare: 0.14, bounceShare: 0.2, conveyorShare: 0.14,
      decoyChance: 0.55, crisscrossChance: 0.5, laserChance: 0.42, fallerChance: 0.34, forceZoneChance: 0.3, gateChance: 0.2 },
  },
];

function solidNeighborsOf(platforms, index) {
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

function generateBranch(branch) {
  const rand = mulberry32(branch.seed);
  const t = branch.t;
  const m = branch.mech;

  const platforms = [];
  const deadlyPlatforms = [];
  const spikes = [];
  const checkpoints = [];
  const forceZones = [];
  const lasers = [];
  const fallers = [];
  const switches = [];
  const portals = [];

  let x = 50;
  let y = 380;
  const startWidth = 260;
  platforms.push({ x, y, width: startWidth, height: 20 });
  checkpoints.push({ x: x + 100, y: y - 30, reached: false });

  let curX = x + startWidth;
  let curY = y;
  let sinceBreather = 0;
  const candidateIndices = [];
  const breatherIndices = [];
  const portalAnchors = []; // platform indices eligible as a portal endpoint (breathers, always solid)

  function placeStep(riseTarget, wide) {
    const marginFactor = wide ? 0.68 : Math.min(0.95, 0.72 + 0.2 * t);
    const wantsDouble = rand() < 0.3 + 0.2 * t && riseTarget > 0;
    let dx;
    if (wantsDouble && canDouble(320, riseTarget)) {
      const maxDx = maxDoubleDx(riseTarget);
      dx = Math.max(180, Math.round(maxDx * marginFactor));
      while (dx > 180 && !canDouble(dx, riseTarget)) dx -= 5;
    } else {
      const maxDx = maxSingleDx(riseTarget);
      dx = Math.max(60, Math.round(maxDx * marginFactor));
      while (dx > 60 && !canSingle(dx, riseTarget)) dx -= 5;
    }
    const width = wide ? 190 + Math.floor(rand() * 230) : 50 + Math.floor(rand() * 200);
    const height = 14 + Math.floor(rand() * 18);
    const px = curX + dx;
    const py = curY - riseTarget;
    curX = px + width;
    curY = py;
    return { x: px, y: py, width, height };
  }

  for (let i = 0; i < branch.numSteps; i++) {
    sinceBreather++;
    const isBreather = sinceBreather >= 4 + Math.floor(rand() * 3);
    const phase = Math.sin(i / 3.1 + branch.seed);
    const oscAmplitude = 45 + 45 * t;
    const riseTarget = Math.round(phase * oscAmplitude + (rand() - 0.5) * 32);

    const step = placeStep(isBreather ? 0 : riseTarget, isBreather);
    platforms.push(step);
    const idx = platforms.length - 1;
    if (!isBreather) candidateIndices.push(idx);
    else {
      breatherIndices.push(idx);
      portalAnchors.push(idx);
      checkpoints.push({ x: step.x + step.width / 2, y: step.y - 30, reached: false });
      sinceBreather = 0;
    }
  }

  const finalWidth = 400 + Math.floor(rand() * 70);
  let finalGapDx = 160 + Math.floor(rand() * 60);
  const finalRise = Math.round((rand() - 0.5) * 30);
  while (finalGapDx > 60 && !canSingle(finalGapDx, finalRise)) finalGapDx -= 10;
  const finalX = curX + finalGapDx;
  const finalY = curY - finalRise;
  platforms.push({ x: finalX, y: finalY, width: finalWidth, height: 20 });
  checkpoints.push({ x: finalX + finalWidth / 2, y: finalY - 30, reached: false });

  // --- Pass 2: moving/ghost/melt/bounce/conveyor ---
  const ghostCut = m.ghostShare;
  const meltCut = ghostCut + m.meltShare;
  const bounceCut = meltCut + m.bounceShare;
  const conveyorCut = bounceCut + m.conveyorShare;
  candidateIndices.forEach((index) => {
    if (rand() >= m.movableChance) return;
    const step = platforms[index];
    const subRoll = rand();
    if (subRoll < ghostCut) {
      const { before, after } = solidNeighborsOf(platforms, index);
      if (before && after) {
        const gap = after.x - (before.x + before.width);
        const rise = before.y - after.y;
        if (rise > 0 && !canDouble(gap, rise)) return;
      }
      step.ghost = true;
      step.ghostPeriod = Math.max(120, 200 - Math.round(80 * t));
      step.ghostOnRatio = Math.max(0.4, 0.65 - 0.25 * t);
    } else if (subRoll < meltCut) {
      step.melt = true;
      step.meltDelay = Math.max(18, 28 - Math.round(10 * t));
    } else if (subRoll < bounceCut) {
      step.bounce = true;
      step.bounceStrength = -17 - Math.round(rand() * 5);
    } else if (subRoll < conveyorCut) {
      step.conveyor = true;
      const dir = rand() < 0.5 ? -1 : 1;
      step.conveyorSpeed = +(dir * (0.9 + rand() * 1.4)).toFixed(2);
    } else {
      step.moveAxis = rand() < 0.6 ? "x" : "y";
      step.moveRange = Math.round((60 + 50 * t) * (0.7 + rand() * 0.6));
      step.moveSpeed = +((0.028 + 0.02 * t) * (0.8 + rand() * 0.5)).toFixed(3);
      step.movePhase = +(rand() * 6.28).toFixed(2);
    }
  });

  // --- Pass 3: crisscrossing decoys ---
  candidateIndices.forEach((index) => {
    const step = platforms[index];
    if (!step.moveAxis || rand() >= m.crisscrossChance) return;
    const twinX = step.x + (rand() < 0.5 ? -1 : 1) * (40 + rand() * 55);
    const twinY = step.y + (rand() < 0.5 ? -1 : 1) * (25 + rand() * 40);
    const twinCenter = { x: twinX + step.width / 2, y: twinY };
    if (checkpoints.some((c) => Math.hypot(c.x - twinCenter.x, c.y - twinCenter.y) < 110)) return;
    deadlyPlatforms.push({
      x: Math.round(twinX), y: Math.round(twinY),
      width: Math.max(50, Math.round(step.width * (0.55 + rand() * 0.35))),
      height: 14 + Math.floor(rand() * 12),
      moveAxis: step.moveAxis === "x" ? "y" : "x",
      moveRange: Math.round((step.moveRange || 60) * (0.75 + rand() * 0.5)),
      moveSpeed: +((step.moveSpeed || 0.03) * (0.85 + rand() * 0.4)).toFixed(3),
      movePhase: +(rand() * 6.28).toFixed(2),
    });
  });

  // --- Pass 4: spikes + static decoys ---
  candidateIndices.forEach((index) => {
    const step = platforms[index];
    if (step.moveAxis || step.ghost || step.melt || step.bounce || step.conveyor) return;
    if (rand() < m.spikeChance) {
      const clusterChance = 0.2 + 0.4 * t;
      const clusterSize = rand() < clusterChance ? 2 + Math.floor(rand() * 3) : 1;
      const sizeMin = 12, sizeMax = 28 + Math.round(26 * t);
      let sx = step.x + Math.max(8, Math.floor(step.width * (0.12 + rand() * 0.25)));
      for (let c = 0; c < clusterSize; c++) {
        const size = sizeMin + Math.floor(rand() * (sizeMax - sizeMin));
        if (sx + size > step.x + step.width - 6) break;
        spikes.push({ x: sx, y: step.y, size });
        sx += size;
      }
    }
    if (rand() < m.decoyChance) {
      deadlyPlatforms.push({
        x: step.x + step.width + 20 + Math.floor(rand() * 20),
        y: step.y + Math.round((rand() - 0.5) * 20),
        width: Math.max(60, Math.round(step.width * (0.5 + rand() * 0.4))),
        height: 20,
      });
    }
  });

  // --- Pass 5: force zones on breathers ---
  breatherIndices.forEach((index) => {
    if (rand() >= m.forceZoneChance) return;
    const step = platforms[index];
    if (step.width < 130) return;
    const vertical = rand() < 0.35;
    const dir = rand() < 0.5 ? -1 : 1;
    if (vertical) {
      forceZones.push({
        x: step.x + 6, y: step.y - 140, width: step.width - 12, height: 140,
        axis: "y", force: +(dir < 0 ? -(0.14 + rand() * 0.1) : 0.1 + rand() * 0.08).toFixed(3),
      });
    } else {
      forceZones.push({
        x: step.x + 10, y: step.y - 90, width: step.width - 20, height: 90,
        axis: "x", force: +(dir * (0.13 + rand() * 0.11)).toFixed(3),
      });
    }
  });

  // --- Pass 6: lasers + fallers ---
  candidateIndices.forEach((index) => {
    const step = platforms[index];
    const anchorX = step.x + step.width + 55 + Math.floor(rand() * 45);
    const anchorY = step.y - 40 - Math.floor(rand() * 70);
    if (checkpoints.some((c) => Math.hypot(c.x - anchorX, c.y - anchorY) < 120)) return;
    if (rand() < m.laserChance) {
      const sweeping = rand() < 0.55;
      lasers.push({
        x: anchorX, y: anchorY,
        length: 110 + Math.floor(rand() * (90 + 60 * t)),
        width: 4,
        baseAngle: +(rand() * Math.PI * 2).toFixed(2),
        sweepAngle: sweeping ? +((0.6 + rand() * 0.9) * (Math.PI / 4)).toFixed(2) : 0,
        period: Math.max(85, Math.round(210 - 55 * t)),
        blinkPeriod: sweeping ? 0 : Math.max(65, Math.round(150 - 45 * t)),
        onRatio: 0.5,
      });
    } else if (rand() < m.fallerChance) {
      fallers.push({
        x: anchorX, y: anchorY - 40,
        size: 24 + Math.floor(rand() * (16 + 16 * t)),
        triggerX: anchorX - 130 - Math.floor(rand() * 90),
      });
    }
  });

  // --- Pass 7: switch-gated shortcuts (constructed with room to spare,
  // same approach as gen-levels.js's main-loop version) ---
  let gatesPlaced = 0;
  const maxGates = m.gateChance > 0.28 ? 3 : m.gateChance > 0.16 ? 2 : m.gateChance > 0 ? 1 : 0;
  for (let gi = 0; gi < breatherIndices.length - 1 && gatesPlaced < maxGates; gi++) {
    if (rand() >= m.gateChance) continue;
    const before = platforms[breatherIndices[gi]];
    const rise = 15 + Math.floor(rand() * 40);
    const directMaxDx = maxDoubleDx(rise);
    const directDx = Math.max(230, Math.round(directMaxDx * 0.72));
    const postX = before.x + before.width + directDx;
    const postY = before.y - rise;
    const postWidth = 200 + Math.floor(rand() * 60);
    const midX = before.x + before.width + Math.round(directDx * (0.42 + rand() * 0.16));
    const midY = before.y - Math.round(rise * 0.5) - (5 + Math.floor(rand() * 15));
    const gatePlatform = { x: midX, y: midY, width: 90 + Math.floor(rand() * 30), height: 16, gated: true, gateId: `${branch.id}_g${gatesPlaced}` };
    const directRise = rise;
    if (!canDouble(directDx, directRise)) continue;
    const hop1Dx = gatePlatform.x - (before.x + before.width);
    const hop1Rise = before.y - gatePlatform.y;
    const hop2Dx = postX - (gatePlatform.x + gatePlatform.width);
    const hop2Rise = gatePlatform.y - postY;
    if (!canSingle(hop1Dx, hop1Rise) || !canSingle(hop2Dx, hop2Rise)) continue;
    // Only place this beside an EXISTING gap in the sequence (i.e. don't
    // insert new platforms mid-sequence, which would require re-threading
    // curX/curY) — instead, drop the gate + a small reward-flavored decoy
    // spike cluster nearby, purely additive/optional, anchored off the
    // breather itself rather than replacing any already-placed step.
    platforms.push(gatePlatform);
    switches.push({ x: before.x + before.width - 22, y: before.y - 30, radius: 26, gateId: gatePlatform.gateId });
    gatesPlaced++;
  }

  // --- Pass 8: portal pairs (branches with `portals` set only) — always
  // links two ALREADY-solid breather platforms further apart in the
  // sequence than an ordinary jump could cover, so stepping into either
  // pad and landing at the other is inherently safe (both endpoints are
  // real, already-reachable ground) and always a shortcut, never
  // load-bearing for base completability (the ungated route between them
  // still exists via the normal platform sequence). ---
  if (branch.portals && portalAnchors.length >= 4) {
    const pairs = Math.min(branch.portals, Math.floor(portalAnchors.length / 4));
    for (let p = 0; p < pairs; p++) {
      const fromIdx = portalAnchors[1 + p * 3];
      const toIdx = portalAnchors[Math.min(portalAnchors.length - 2, 3 + p * 3)];
      if (fromIdx === undefined || toIdx === undefined || fromIdx === toIdx) continue;
      const fromPlatform = platforms[fromIdx];
      const toPlatform = platforms[toIdx];
      const idA = `${branch.id}_p${p}a`;
      const idB = `${branch.id}_p${p}b`;
      portals.push({ id: idA, x: Math.round(fromPlatform.x + fromPlatform.width * 0.2), y: fromPlatform.y - 46, width: 40, height: 46, linkId: idB });
      portals.push({ id: idB, x: Math.round(toPlatform.x + toPlatform.width * 0.6), y: toPlatform.y - 46, width: 40, height: 46, linkId: idA });
    }
  }

  return {
    id: branch.id, name: branch.name, theme: branch.theme,
    platforms, deadlyPlatforms, spikes, checkpoints, forceZones, lasers, fallers, switches, portals,
  };
}

function serializePlatform(p) {
  for (const key of ["x", "y", "width", "height"]) {
    if (typeof p[key] !== "number" || Number.isNaN(p[key])) {
      throw new Error(`platform missing numeric ${key}: ${JSON.stringify(p)}`);
    }
  }
  const parts = [`x: ${p.x}`, `y: ${p.y}`, `width: ${p.width}`, `height: ${p.height}`];
  if (p.moveAxis) {
    parts.push(`moveAxis: "${p.moveAxis}"`, `moveRange: ${p.moveRange}`, `moveSpeed: ${p.moveSpeed}`);
    if (p.movePhase) parts.push(`movePhase: ${p.movePhase}`);
  }
  if (p.ghost) parts.push(`ghost: true`, `ghostPeriod: ${p.ghostPeriod}`, `ghostOnRatio: ${p.ghostOnRatio}`);
  if (p.melt) parts.push(`melt: true`, `meltDelay: ${p.meltDelay}`);
  if (p.bounce) parts.push(`bounce: true`, `bounceStrength: ${p.bounceStrength}`);
  if (p.conveyor) parts.push(`conveyor: true`, `conveyorSpeed: ${p.conveyorSpeed}`);
  if (p.gated) parts.push(`gated: true`, `gateId: ${JSON.stringify(p.gateId)}`);
  return `  { ${parts.join(", ")} },`;
}
function serializeEntity(e, fields) {
  const parts = fields.map((key) => {
    const v = e[key];
    return `${key}: ${typeof v === "string" ? JSON.stringify(v) : v}`;
  });
  return `  { ${parts.join(", ")} },`;
}

function writeBranch(level) {
  const lines = [];
  lines.push(`// Branch Level "${level.name}" (id: ${level.id}) — see levels.js's`);
  lines.push(`// TRUE_BRANCH_LEVELS and docs/gameplay.md's "Ten themed branch levels".`);
  lines.push(`// Reachable only from its own Level Map node, never part of the`);
  lines.push(`// sequential 1-100 path — see game.js's startBranchLevelFromOverlay()/`);
  lines.push(`// completeBranchLevel(). Generated by .claude/gen-branch-levels.js;`);
  lines.push(`// re-run audit-gaps.js/audit-checkpoints.js after regenerating.`);
  lines.push(``);
  lines.push(`window.levelText = ${JSON.stringify(level.name)};`);
  lines.push(`window.levelTheme = ${JSON.stringify(level.theme)};`);
  lines.push(`window.levelBranchId = ${JSON.stringify(level.id)};`);
  lines.push(``);
  lines.push(`window.platforms = [`);
  level.platforms.forEach((p) => lines.push(serializePlatform(p)));
  lines.push(`];`);
  lines.push(``);
  lines.push(`window.deadlyPlatforms = [`);
  level.deadlyPlatforms.forEach((p) => lines.push(serializePlatform(p)));
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
  if (level.forceZones.length) {
    lines.push(`window.forceZones = [`);
    level.forceZones.forEach((z) => lines.push(serializeEntity(z, ["x", "y", "width", "height", "axis", "force"])));
    lines.push(`];`);
    lines.push(``);
  }
  if (level.lasers.length) {
    lines.push(`window.lasers = [`);
    level.lasers.forEach((l) => lines.push(serializeEntity(l, ["x", "y", "length", "width", "baseAngle", "sweepAngle", "period", "blinkPeriod", "onRatio"])));
    lines.push(`];`);
    lines.push(``);
  }
  if (level.fallers.length) {
    lines.push(`window.fallers = [`);
    level.fallers.forEach((fl) => lines.push(serializeEntity(fl, ["x", "y", "size", "triggerX"])));
    lines.push(`];`);
    lines.push(``);
  }
  if (level.switches.length) {
    lines.push(`window.switches = [`);
    level.switches.forEach((s) => lines.push(serializeEntity(s, ["x", "y", "radius", "gateId"])));
    lines.push(`];`);
    lines.push(``);
  }
  if (level.portals.length) {
    lines.push(`window.portals = [`);
    level.portals.forEach((p) => lines.push(serializeEntity(p, ["id", "x", "y", "width", "height", "linkId"])));
    lines.push(`];`);
    lines.push(``);
  }
  return lines.join("\n");
}

const outDir = process.argv[2] || path.join(__dirname, "..");
const results = BRANCHES.map((b) => ({ id: b.id, content: writeBranch(generateBranch(b)) }));
results.forEach(({ id, content }) => {
  const fname = `level${id[0].toUpperCase()}${id.slice(1)}.js`; // b1 -> levelB1.js
  fs.writeFileSync(path.join(outDir, fname), content);
});
console.log(`Wrote ${results.length} branch level files to ${outDir}`);
