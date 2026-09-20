#!/usr/bin/env node
// Generates 50 new STARSHADE_SKINS entries (skinsData.js) — 45 purely
// cosmetic across common/rare/epic rarity, 4 legendary skins each carrying
// one gameplay ability (dash/tripleJump/sticky/slippery), and 1 mythic
// "bouncy" skin locked behind the hardest achievement. Run with:
//
//   node .claude/gen-skins.js
//
// Prints the new entries as JS object literals, ready to paste into
// STARSHADE_SKINS in skinsData.js (right before the closing `];`) — it
// does not edit the file itself, same hands-off relationship gen-levels.js
// has with the levelN.js files it produces.

// A small deterministic PRNG (mulberry32) so re-running this with the same
// seed always reproduces the same 50 skins — reproducible content, not a
// one-shot fresh random set every time someone re-runs the generator.
function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rand = mulberry32(0xc0ffee);

const SHAPES = ["circle", "triangle", "square"];

const ADJECTIVES = [
  "Neon", "Plasma", "Quantum", "Astral", "Lunar", "Solar", "Cosmic",
  "Crystal", "Spectral", "Radiant", "Prismatic", "Electric", "Frozen",
  "Molten", "Toxic", "Arcane", "Rogue", "Feral", "Silent", "Rapid",
  "Ancient", "Fractured", "Glacial", "Blazing", "Iridescent", "Phantom",
  "Stellar", "Nebular", "Ionic", "Chromatic",
];
const NOUNS = [
  "Vortex", "Drifter", "Wraith", "Sentinel", "Comet", "Specter", "Pulse",
  "Nova", "Rift", "Shard", "Warden", "Reaver", "Harbinger", "Echo",
  "Wanderer", "Seeker", "Strider", "Glider", "Ronin", "Oracle", "Cipher",
  "Mirage", "Ember", "Frost", "Storm", "Voyager", "Nomad", "Zephyr",
  "Talon", "Eclipse",
];

function pick(arr) {
  return arr[Math.floor(rand() * arr.length)];
}

function usedNames() {
  return new Set([
    "Square (Default)", "Circle (Nova)", "Triangle (Prism)", "Frost Hunter",
    "Crimson Fury", "Golden Glider", "Azure Phantom", "Comet",
    "Void Walker", "Shadow Stalker", "Obsidian Wraith", "Eclipse",
    "Starshade Prime",
  ]);
}

function makeName(taken) {
  let name;
  do {
    name = `${pick(ADJECTIVES)} ${pick(NOUNS)}`;
  } while (taken.has(name));
  taken.add(name);
  return name;
}

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

// HSL is far easier than RGB to keep vibrant/neon here — every skin's
// preview/glow/fill/stroke are all derived from one random hue so the
// four colors always read as "the same skin," never an arbitrary clash.
function hsl(h, s, l, a = 1) {
  return `hsla(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l)}%, ${a})`;
}

function makeSkin({ id, name, shape, rarity, unlockType, cost, achievement, ability, trail, animated }) {
  const hue = Math.round(rand() * 360);
  const light = hsl(hue, 85, 88);
  const mid = hsl(hue, 90, 62);
  const dark = hsl(hue, 70, 16);
  const preview = animated
    ? `conic-gradient(from 0deg, ${hsl(hue, 90, 62)}, ${hsl((hue + 90) % 360, 90, 62)}, ${hsl((hue + 180) % 360, 90, 62)}, ${hsl((hue + 270) % 360, 90, 62)}, ${hsl(hue, 90, 62)})`
    : `radial-gradient(circle at 35% 30%, ${light}, ${mid} 45%, ${dark} 100%)`;

  const skin = {
    id,
    rarity,
    name,
    shape,
    unlockType,
    preview,
    glow: hsl(hue, 90, 65, 0.6),
    fill: hsl(hue, 85, 60, 0.85),
    stroke: hsl(hue, 60, 20, 0.9),
  };
  if (unlockType === "coins") skin.cost = cost;
  if (achievement) skin.achievement = achievement;
  if (ability) skin.ability = ability;
  if (trail) skin.trail = true;
  if (animated) skin.animated = true;
  return skin;
}

function serializeSkin(skin) {
  const lines = [`  {`];
  const order = [
    "id", "rarity", "name", "shape", "unlockType", "cost", "achievement",
    "ability", "trail", "animated", "preview", "glow", "fill", "stroke",
  ];
  for (const key of order) {
    if (!(key in skin)) continue;
    const value = skin[key];
    const serialized = typeof value === "string" ? JSON.stringify(value) : value;
    lines.push(`    ${key}: ${serialized},`);
  }
  lines.push(`  },`);
  return lines.join("\n");
}

const taken = usedNames();
const skins = [];

// 21 common
for (let i = 0; i < 21; i++) {
  const name = makeName(taken);
  skins.push(
    makeSkin({
      id: slugify(name),
      name,
      shape: pick(SHAPES),
      rarity: "common",
      unlockType: "coins",
      cost: 120 + Math.floor(rand() * 330),
    })
  );
}

// 14 rare
for (let i = 0; i < 14; i++) {
  const name = makeName(taken);
  skins.push(
    makeSkin({
      id: slugify(name),
      name,
      shape: pick(SHAPES),
      rarity: "rare",
      unlockType: "coins",
      cost: 500 + Math.floor(rand() * 900),
    })
  );
}

// 10 epic (half get a trail)
for (let i = 0; i < 10; i++) {
  const name = makeName(taken);
  skins.push(
    makeSkin({
      id: slugify(name),
      name,
      shape: pick(SHAPES),
      rarity: "epic",
      unlockType: "coins",
      cost: 1500 + Math.floor(rand() * 1700),
      trail: i % 2 === 0,
    })
  );
}

// 4 legendary — each carries one movement ability, unlocked by a specific
// achievement (see achievementsData.js's grantsSkin) rather than coins:
// these are meant to feel earned, not bought.
const ABILITY_SKINS = [
  { ability: "dash", name: "Comet Runner", achievement: 'Achievement: "Speed Demon"' },
  { ability: "tripleJump", name: "Skyward Herald", achievement: 'Achievement: "Sky Conqueror"' },
  { ability: "sticky", name: "Wallcrawler Wisp", achievement: 'Achievement: "Cling Master"' },
  { ability: "slippery", name: "Glacial Drifter", achievement: 'Achievement: "Ice Cold"' },
];
for (const def of ABILITY_SKINS) {
  taken.add(def.name);
  skins.push(
    makeSkin({
      id: slugify(def.name),
      name: def.name,
      shape: pick(SHAPES),
      rarity: "legendary",
      unlockType: "achievement",
      achievement: def.achievement,
      ability: def.ability,
      trail: true,
    })
  );
}

// 1 mythic — the "bouncy" ability, locked behind the hardest achievement.
const mythicName = "Nebula Bouncer";
taken.add(mythicName);
skins.push(
  makeSkin({
    id: slugify(mythicName),
    name: mythicName,
    shape: "circle",
    rarity: "mythic",
    unlockType: "achievement",
    achievement: 'Achievement: "Bounce King"',
    ability: "bouncy",
    trail: true,
    animated: true,
  })
);

console.log(`// --- ${skins.length} generated skins (.claude/gen-skins.js) ---`);
console.log(skins.map(serializeSkin).join("\n"));
