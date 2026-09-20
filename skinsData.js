// Shared skin catalog + coin/progress economy. Loaded by both game.html
// (so the equipped skin actually renders in-game) and skins.html (the
// shop/carousel) so the two never drift out of sync with each other.
//
// Unlock types:
//   'free'        — always unlocked (the starting skin)
//   'coins'       — unlocked by spending `cost` coins, once
//   'completion'  — unlocked by beating all levels once
//     (StarshadeEconomy.isGameCompleted())
//   'achievement' — unlocked the moment a specific achievement fires (see
//     achievementsData.js's `grantsSkin` field and StarshadeEconomy.
//     grantSkin()); set `achievement` to that achievement's name for the
//     shop's "how do I get this" text, same as a 'completion' skin does.
//
// `shape` controls how game.js's drawPlayer() renders the player when this
// skin is equipped: 'square' | 'circle' | 'triangle' | 'image'. 'image'
// skins also set `image` to an asset path and are drawn with drawImage()
// clipped to a circle instead of a flat fill.
//
// `rarity` ('common' | 'rare' | 'epic' | 'legendary' | 'mythic') is purely
// cosmetic — a badge color/glow in the shop (skins.css) reflecting how
// hard the skin is to get. It doesn't gate anything itself; `unlockType`/
// `cost` do that.
//
// `trail: true` makes game.js spawn a continuous particle trail behind
// the player while moving/airborne (see spawnParticles() call sites).
// `animated: true` is a hint for the shop UI (shop.css) to apply a CSS
// hue-rotate animation to that skin's preview — game.js mirrors the exact
// same hue-rotate (via ctx.filter) on the in-game player when `art` is
// set, so the two stay visually consistent.
//
// `art` is an optional SVG asset path (assets/skins/) layered inside the
// skin's own `shape` silhouette instead of a flat `fill` color — unlike
// `image` (below), which always renders as a plain circle regardless of
// `shape`, an `art` skin still clips to its square/circle/triangle
// outline in both the shop preview (shop.js's applySkinShape()) and
// in-game (game.js's drawPlayer()), so it reads as "the same shape, with
// real illustrated detail" rather than a different kind of skin.
//
// `ability` grants a gameplay perk on top of the cosmetic look — game.js
// checks `StarshadeEconomy.getEquippedSkin().ability` at the relevant
// point in the physics loop (see docs/gameplay.md's Abilities section):
//   'dash'       — double-tap Left/Right for a short fast burst
//   'tripleJump' — an extra mid-air jump (2 total instead of the usual 1)
//   'sticky'     — cling to a wall while holding into it, refreshing the
//                  air jump for a wall-jump
//   'slippery'   — eases toward speed and keeps coasting instead of
//                  stopping instantly (harder to control precisely)
//   'bouncy'     — rebounds a bit on landing instead of coming to rest
const STARSHADE_SKINS = [
  {
    id: "square-default",
    rarity: "common",
    name: "Square (Default)",
    shape: "square",
    unlockType: "free",
    preview: "linear-gradient(135deg, #a042d3, #4f0080)",
    glow: "rgba(160, 66, 211, 0.6)",
    fill: "rgba(160, 66, 211, 0.79)",
    stroke: "rgba(93, 26, 145, 0.85)",
  },
  {
    id: "circle-nova",
    rarity: "common",
    name: "Circle (Nova)",
    shape: "circle",
    unlockType: "coins",
    cost: 150,
    preview:
      "radial-gradient(circle at 35% 30%, #eaf6ff, #6fb8ff 45%, #123a66 100%)",
    glow: "rgba(111, 184, 255, 0.55)",
    fill: "rgba(111, 184, 255, 0.85)",
    stroke: "rgba(18, 58, 102, 0.9)",
  },
  {
    id: "triangle-prism",
    rarity: "common",
    name: "Triangle (Prism)",
    shape: "triangle",
    unlockType: "coins",
    cost: 300,
    preview:
      "radial-gradient(circle at 35% 30%, #fff6d8, #ffcf4d 45%, #6b4c00 100%)",
    glow: "rgba(255, 207, 77, 0.55)",
    fill: "rgba(255, 207, 77, 0.85)",
    stroke: "rgba(107, 76, 0, 0.9)",
  },
  {
    id: "frost-hunter",
    rarity: "rare",
    name: "Frost Hunter",
    shape: "circle",
    unlockType: "coins",
    cost: 500,
    preview:
      "radial-gradient(circle at 35% 30%, #e8faff, #9fdfff 40%, #1c4a66 100%)",
    glow: "rgba(159, 223, 255, 0.55)",
    fill: "rgba(159, 223, 255, 0.85)",
    stroke: "rgba(28, 74, 102, 0.9)",
  },
  {
    id: "crimson-fury",
    rarity: "rare",
    name: "Crimson Fury",
    shape: "triangle",
    unlockType: "coins",
    cost: 750,
    preview:
      "radial-gradient(circle at 35% 30%, #ffdca8, #e8542f 45%, #4a0d0d 100%)",
    glow: "rgba(232, 84, 47, 0.55)",
    fill: "rgba(232, 84, 47, 0.85)",
    stroke: "rgba(74, 13, 13, 0.9)",
  },
  {
    id: "golden-glider",
    rarity: "epic",
    name: "Golden Glider",
    shape: "circle",
    unlockType: "coins",
    cost: 1250,
    preview:
      "radial-gradient(circle at 35% 30%, #fff6d8, #ffcf4d 45%, #6b4c00 100%)",
    glow: "rgba(255, 207, 77, 0.55)",
    fill: "rgba(255, 246, 216, 0.85)",
    stroke: "rgba(107, 76, 0, 0.9)",
  },
  {
    id: "azure-phantom",
    rarity: "epic",
    name: "Azure Phantom",
    shape: "triangle",
    unlockType: "coins",
    cost: 1500,
    preview:
      "radial-gradient(circle at 35% 30%, #e4f7ff, #4fb3e0 45%, #0c2e4a 100%)",
    glow: "rgba(79, 179, 224, 0.55)",
    fill: "rgba(79, 179, 224, 0.85)",
    stroke: "rgba(12, 46, 74, 0.9)",
  },
  {
    id: "comet",
    rarity: "epic",
    name: "Comet",
    shape: "triangle",
    unlockType: "coins",
    cost: 2000,
    trail: true,
    preview:
      "radial-gradient(circle at 35% 30%, #fff2e0, #ff9d3d 45%, #7a2f00 100%)",
    glow: "rgba(255, 157, 61, 0.6)",
    fill: "rgba(255, 157, 61, 0.85)",
    stroke: "rgba(122, 47, 0, 0.9)",
  },
  {
    id: "void-walker",
    rarity: "legendary",
    name: "Void Walker",
    shape: "circle",
    unlockType: "coins",
    cost: 2500,
    trail: true,
    preview:
      "radial-gradient(circle at 35% 30%, #cdeaff, #2a6f9e 45%, #041018 100%)",
    glow: "rgba(42, 111, 158, 0.6)",
    fill: "rgba(42, 111, 158, 0.85)",
    stroke: "rgba(4, 16, 24, 0.9)",
  },
  {
    id: "shadow-stalker",
    rarity: "legendary",
    name: "Shadow Stalker",
    shape: "circle",
    unlockType: "completion",
    achievement: 'Achievement: "Silent Walker"',
    preview:
      "radial-gradient(circle at 35% 30%, #4a3b6b, #1a0f2e 55%, #050208 100%)",
    glow: "rgba(106, 66, 179, 0.5)",
    fill: "rgba(74, 59, 107, 0.85)",
    stroke: "rgba(5, 2, 8, 0.9)",
  },
  {
    id: "obsidian-wraith",
    rarity: "legendary",
    name: "Obsidian Wraith",
    shape: "triangle",
    unlockType: "completion",
    achievement: 'Achievement: "Conqueror of Shadows"',
    trail: true,
    preview:
      "radial-gradient(circle at 35% 30%, #6a2fa0, #1a0a2e 55%, #000000 100%)",
    glow: "rgba(106, 47, 160, 0.6)",
    fill: "rgba(106, 47, 160, 0.85)",
    stroke: "rgba(0, 0, 0, 0.9)",
  },
  {
    id: "eclipse",
    rarity: "mythic",
    name: "Eclipse",
    shape: "image",
    image: "assets/skins/EclipseSkin.png",
    unlockType: "completion",
    achievement: 'Achievement: "The End?"',
    trail: true,
    glow: "rgba(160, 66, 211, 0.6)",
    fill: "rgba(160, 66, 211, 0.7)",
  },
  {
    id: "starshade-prime",
    rarity: "mythic",
    name: "Starshade Prime",
    shape: "square",
    unlockType: "completion",
    achievement: 'Achievement: "True Ending"',
    trail: true,
    animated: true,
    preview:
      "conic-gradient(from 0deg, #a042d3, #ffcf4d, #4fb3e0, #e8542f, #a042d3)",
    glow: "rgba(255, 255, 255, 0.7)",
    fill: "rgba(230, 220, 255, 0.9)",
    stroke: "rgba(160, 66, 211, 0.95)",
  },
  {
    id: "neon-oracle",
    rarity: "common",
    name: "Neon Oracle",
    shape: "square",
    unlockType: "coins",
    cost: 364,
    preview: "radial-gradient(circle at 35% 30%, hsla(39, 85%, 88%, 1), hsla(39, 90%, 62%, 1) 45%, hsla(39, 70%, 16%, 1) 100%)",
    glow: "hsla(39, 90%, 65%, 0.6)",
    fill: "hsla(39, 85%, 60%, 0.85)",
    stroke: "hsla(39, 60%, 20%, 0.9)",
  },
  {
    id: "arcane-comet",
    rarity: "common",
    name: "Arcane Comet",
    shape: "triangle",
    unlockType: "coins",
    cost: 376,
    preview: "radial-gradient(circle at 35% 30%, hsla(107, 85%, 88%, 1), hsla(107, 90%, 62%, 1) 45%, hsla(107, 70%, 16%, 1) 100%)",
    glow: "hsla(107, 90%, 65%, 0.6)",
    fill: "hsla(107, 85%, 60%, 0.85)",
    stroke: "hsla(107, 60%, 20%, 0.9)",
  },
  {
    id: "electric-drifter",
    rarity: "common",
    name: "Electric Drifter",
    shape: "square",
    unlockType: "coins",
    cost: 301,
    preview: "radial-gradient(circle at 35% 30%, hsla(82, 85%, 88%, 1), hsla(82, 90%, 62%, 1) 45%, hsla(82, 70%, 16%, 1) 100%)",
    glow: "hsla(82, 90%, 65%, 0.6)",
    fill: "hsla(82, 85%, 60%, 0.85)",
    stroke: "hsla(82, 60%, 20%, 0.9)",
  },
  {
    id: "prismatic-seeker",
    rarity: "common",
    name: "Prismatic Seeker",
    shape: "square",
    unlockType: "coins",
    cost: 207,
    preview: "radial-gradient(circle at 35% 30%, hsla(149, 85%, 88%, 1), hsla(149, 90%, 62%, 1) 45%, hsla(149, 70%, 16%, 1) 100%)",
    glow: "hsla(149, 90%, 65%, 0.6)",
    fill: "hsla(149, 85%, 60%, 0.85)",
    stroke: "hsla(149, 60%, 20%, 0.9)",
  },
  {
    id: "rogue-frost",
    rarity: "common",
    name: "Rogue Frost",
    shape: "triangle",
    unlockType: "coins",
    cost: 310,
    preview: "radial-gradient(circle at 35% 30%, hsla(343, 85%, 88%, 1), hsla(343, 90%, 62%, 1) 45%, hsla(343, 70%, 16%, 1) 100%)",
    glow: "hsla(343, 90%, 65%, 0.6)",
    fill: "hsla(343, 85%, 60%, 0.85)",
    stroke: "hsla(343, 60%, 20%, 0.9)",
  },
  {
    id: "plasma-oracle",
    rarity: "common",
    name: "Plasma Oracle",
    shape: "circle",
    unlockType: "coins",
    cost: 199,
    preview: "radial-gradient(circle at 35% 30%, hsla(244, 85%, 88%, 1), hsla(244, 90%, 62%, 1) 45%, hsla(244, 70%, 16%, 1) 100%)",
    glow: "hsla(244, 90%, 65%, 0.6)",
    fill: "hsla(244, 85%, 60%, 0.85)",
    stroke: "hsla(244, 60%, 20%, 0.9)",
  },
  {
    id: "astral-pulse",
    rarity: "common",
    name: "Astral Pulse",
    shape: "circle",
    unlockType: "coins",
    cost: 339,
    preview: "radial-gradient(circle at 35% 30%, hsla(232, 85%, 88%, 1), hsla(232, 90%, 62%, 1) 45%, hsla(232, 70%, 16%, 1) 100%)",
    glow: "hsla(232, 90%, 65%, 0.6)",
    fill: "hsla(232, 85%, 60%, 0.85)",
    stroke: "hsla(232, 60%, 20%, 0.9)",
  },
  {
    id: "toxic-ronin",
    rarity: "common",
    name: "Toxic Ronin",
    shape: "circle",
    unlockType: "coins",
    cost: 339,
    preview: "radial-gradient(circle at 35% 30%, hsla(193, 85%, 88%, 1), hsla(193, 90%, 62%, 1) 45%, hsla(193, 70%, 16%, 1) 100%)",
    glow: "hsla(193, 90%, 65%, 0.6)",
    fill: "hsla(193, 85%, 60%, 0.85)",
    stroke: "hsla(193, 60%, 20%, 0.9)",
  },
  {
    id: "spectral-harbinger",
    rarity: "common",
    name: "Spectral Harbinger",
    shape: "triangle",
    unlockType: "coins",
    cost: 215,
    preview: "radial-gradient(circle at 35% 30%, hsla(160, 85%, 88%, 1), hsla(160, 90%, 62%, 1) 45%, hsla(160, 70%, 16%, 1) 100%)",
    glow: "hsla(160, 90%, 65%, 0.6)",
    fill: "hsla(160, 85%, 60%, 0.85)",
    stroke: "hsla(160, 60%, 20%, 0.9)",
  },
  {
    id: "frozen-talon",
    rarity: "common",
    name: "Frozen Talon",
    shape: "square",
    unlockType: "coins",
    cost: 417,
    preview: "radial-gradient(circle at 35% 30%, hsla(288, 85%, 88%, 1), hsla(288, 90%, 62%, 1) 45%, hsla(288, 70%, 16%, 1) 100%)",
    glow: "hsla(288, 90%, 65%, 0.6)",
    fill: "hsla(288, 85%, 60%, 0.85)",
    stroke: "hsla(288, 60%, 20%, 0.9)",
  },
  {
    id: "toxic-rift",
    rarity: "common",
    name: "Toxic Rift",
    shape: "square",
    unlockType: "coins",
    cost: 245,
    preview: "radial-gradient(circle at 35% 30%, hsla(121, 85%, 88%, 1), hsla(121, 90%, 62%, 1) 45%, hsla(121, 70%, 16%, 1) 100%)",
    glow: "hsla(121, 90%, 65%, 0.6)",
    fill: "hsla(121, 85%, 60%, 0.85)",
    stroke: "hsla(121, 60%, 20%, 0.9)",
  },
  {
    id: "lunar-sentinel",
    rarity: "common",
    name: "Lunar Sentinel",
    shape: "triangle",
    unlockType: "coins",
    cost: 130,
    preview: "radial-gradient(circle at 35% 30%, hsla(236, 85%, 88%, 1), hsla(236, 90%, 62%, 1) 45%, hsla(236, 70%, 16%, 1) 100%)",
    glow: "hsla(236, 90%, 65%, 0.6)",
    fill: "hsla(236, 85%, 60%, 0.85)",
    stroke: "hsla(236, 60%, 20%, 0.9)",
  },
  {
    id: "radiant-oracle",
    rarity: "common",
    name: "Radiant Oracle",
    shape: "circle",
    unlockType: "coins",
    cost: 300,
    preview: "radial-gradient(circle at 35% 30%, hsla(94, 85%, 88%, 1), hsla(94, 90%, 62%, 1) 45%, hsla(94, 70%, 16%, 1) 100%)",
    glow: "hsla(94, 90%, 65%, 0.6)",
    fill: "hsla(94, 85%, 60%, 0.85)",
    stroke: "hsla(94, 60%, 20%, 0.9)",
  },
  {
    id: "lunar-harbinger",
    rarity: "common",
    name: "Lunar Harbinger",
    shape: "triangle",
    unlockType: "coins",
    cost: 437,
    preview: "radial-gradient(circle at 35% 30%, hsla(308, 85%, 88%, 1), hsla(308, 90%, 62%, 1) 45%, hsla(308, 70%, 16%, 1) 100%)",
    glow: "hsla(308, 90%, 65%, 0.6)",
    fill: "hsla(308, 85%, 60%, 0.85)",
    stroke: "hsla(308, 60%, 20%, 0.9)",
  },
  {
    id: "phantom-specter",
    rarity: "common",
    name: "Phantom Specter",
    shape: "triangle",
    unlockType: "coins",
    cost: 223,
    preview: "radial-gradient(circle at 35% 30%, hsla(115, 85%, 88%, 1), hsla(115, 90%, 62%, 1) 45%, hsla(115, 70%, 16%, 1) 100%)",
    glow: "hsla(115, 90%, 65%, 0.6)",
    fill: "hsla(115, 85%, 60%, 0.85)",
    stroke: "hsla(115, 60%, 20%, 0.9)",
  },
  {
    id: "plasma-nova",
    rarity: "common",
    name: "Plasma Nova",
    shape: "square",
    unlockType: "coins",
    cost: 269,
    preview: "radial-gradient(circle at 35% 30%, hsla(354, 85%, 88%, 1), hsla(354, 90%, 62%, 1) 45%, hsla(354, 70%, 16%, 1) 100%)",
    glow: "hsla(354, 90%, 65%, 0.6)",
    fill: "hsla(354, 85%, 60%, 0.85)",
    stroke: "hsla(354, 60%, 20%, 0.9)",
  },
  {
    id: "iridescent-wanderer",
    rarity: "common",
    name: "Iridescent Wanderer",
    shape: "square",
    unlockType: "coins",
    cost: 439,
    preview: "radial-gradient(circle at 35% 30%, hsla(315, 85%, 88%, 1), hsla(315, 90%, 62%, 1) 45%, hsla(315, 70%, 16%, 1) 100%)",
    glow: "hsla(315, 90%, 65%, 0.6)",
    fill: "hsla(315, 85%, 60%, 0.85)",
    stroke: "hsla(315, 60%, 20%, 0.9)",
  },
  {
    id: "crystal-rift",
    rarity: "common",
    name: "Crystal Rift",
    shape: "square",
    unlockType: "coins",
    cost: 431,
    preview: "radial-gradient(circle at 35% 30%, hsla(134, 85%, 88%, 1), hsla(134, 90%, 62%, 1) 45%, hsla(134, 70%, 16%, 1) 100%)",
    glow: "hsla(134, 90%, 65%, 0.6)",
    fill: "hsla(134, 85%, 60%, 0.85)",
    stroke: "hsla(134, 60%, 20%, 0.9)",
  },
  {
    id: "solar-seeker",
    rarity: "common",
    name: "Solar Seeker",
    shape: "circle",
    unlockType: "coins",
    cost: 412,
    preview: "radial-gradient(circle at 35% 30%, hsla(32, 85%, 88%, 1), hsla(32, 90%, 62%, 1) 45%, hsla(32, 70%, 16%, 1) 100%)",
    glow: "hsla(32, 90%, 65%, 0.6)",
    fill: "hsla(32, 85%, 60%, 0.85)",
    stroke: "hsla(32, 60%, 20%, 0.9)",
  },
  {
    id: "lunar-shard",
    rarity: "common",
    name: "Lunar Shard",
    shape: "square",
    unlockType: "coins",
    cost: 205,
    preview: "radial-gradient(circle at 35% 30%, hsla(320, 85%, 88%, 1), hsla(320, 90%, 62%, 1) 45%, hsla(320, 70%, 16%, 1) 100%)",
    glow: "hsla(320, 90%, 65%, 0.6)",
    fill: "hsla(320, 85%, 60%, 0.85)",
    stroke: "hsla(320, 60%, 20%, 0.9)",
  },
  {
    id: "solar-nova",
    rarity: "common",
    name: "Solar Nova",
    shape: "square",
    unlockType: "coins",
    cost: 237,
    preview: "radial-gradient(circle at 35% 30%, hsla(313, 85%, 88%, 1), hsla(313, 90%, 62%, 1) 45%, hsla(313, 70%, 16%, 1) 100%)",
    glow: "hsla(313, 90%, 65%, 0.6)",
    fill: "hsla(313, 85%, 60%, 0.85)",
    stroke: "hsla(313, 60%, 20%, 0.9)",
  },
  {
    id: "neon-nomad",
    rarity: "rare",
    name: "Neon Nomad",
    shape: "circle",
    unlockType: "coins",
    cost: 951,
    preview: "radial-gradient(circle at 35% 30%, hsla(40, 85%, 88%, 1), hsla(40, 90%, 62%, 1) 45%, hsla(40, 70%, 16%, 1) 100%)",
    glow: "hsla(40, 90%, 65%, 0.6)",
    fill: "hsla(40, 85%, 60%, 0.85)",
    stroke: "hsla(40, 60%, 20%, 0.9)",
  },
  {
    id: "silent-nomad",
    rarity: "rare",
    name: "Silent Nomad",
    shape: "triangle",
    unlockType: "coins",
    cost: 894,
    preview: "radial-gradient(circle at 35% 30%, hsla(97, 85%, 88%, 1), hsla(97, 90%, 62%, 1) 45%, hsla(97, 70%, 16%, 1) 100%)",
    glow: "hsla(97, 90%, 65%, 0.6)",
    fill: "hsla(97, 85%, 60%, 0.85)",
    stroke: "hsla(97, 60%, 20%, 0.9)",
  },
  {
    id: "chromatic-vortex",
    rarity: "rare",
    name: "Chromatic Vortex",
    shape: "triangle",
    unlockType: "coins",
    cost: 1041,
    preview: "radial-gradient(circle at 35% 30%, hsla(328, 85%, 88%, 1), hsla(328, 90%, 62%, 1) 45%, hsla(328, 70%, 16%, 1) 100%)",
    glow: "hsla(328, 90%, 65%, 0.6)",
    fill: "hsla(328, 85%, 60%, 0.85)",
    stroke: "hsla(328, 60%, 20%, 0.9)",
  },
  {
    id: "cosmic-rift",
    rarity: "rare",
    name: "Cosmic Rift",
    shape: "circle",
    unlockType: "coins",
    cost: 1150,
    preview: "radial-gradient(circle at 35% 30%, hsla(14, 85%, 88%, 1), hsla(14, 90%, 62%, 1) 45%, hsla(14, 70%, 16%, 1) 100%)",
    glow: "hsla(14, 90%, 65%, 0.6)",
    fill: "hsla(14, 85%, 60%, 0.85)",
    stroke: "hsla(14, 60%, 20%, 0.9)",
  },
  {
    id: "ionic-shard",
    rarity: "rare",
    name: "Ionic Shard",
    shape: "triangle",
    unlockType: "coins",
    cost: 1356,
    preview: "radial-gradient(circle at 35% 30%, hsla(35, 85%, 88%, 1), hsla(35, 90%, 62%, 1) 45%, hsla(35, 70%, 16%, 1) 100%)",
    glow: "hsla(35, 90%, 65%, 0.6)",
    fill: "hsla(35, 85%, 60%, 0.85)",
    stroke: "hsla(35, 60%, 20%, 0.9)",
  },
  {
    id: "arcane-strider",
    rarity: "rare",
    name: "Arcane Strider",
    shape: "circle",
    unlockType: "coins",
    cost: 671,
    preview: "radial-gradient(circle at 35% 30%, hsla(140, 85%, 88%, 1), hsla(140, 90%, 62%, 1) 45%, hsla(140, 70%, 16%, 1) 100%)",
    glow: "hsla(140, 90%, 65%, 0.6)",
    fill: "hsla(140, 85%, 60%, 0.85)",
    stroke: "hsla(140, 60%, 20%, 0.9)",
  },
  {
    id: "glacial-sentinel",
    rarity: "rare",
    name: "Glacial Sentinel",
    shape: "triangle",
    unlockType: "coins",
    cost: 1210,
    preview: "radial-gradient(circle at 35% 30%, hsla(194, 85%, 88%, 1), hsla(194, 90%, 62%, 1) 45%, hsla(194, 70%, 16%, 1) 100%)",
    glow: "hsla(194, 90%, 65%, 0.6)",
    fill: "hsla(194, 85%, 60%, 0.85)",
    stroke: "hsla(194, 60%, 20%, 0.9)",
  },
  {
    id: "fractured-specter",
    rarity: "rare",
    name: "Fractured Specter",
    shape: "circle",
    unlockType: "coins",
    cost: 1069,
    preview: "radial-gradient(circle at 35% 30%, hsla(117, 85%, 88%, 1), hsla(117, 90%, 62%, 1) 45%, hsla(117, 70%, 16%, 1) 100%)",
    glow: "hsla(117, 90%, 65%, 0.6)",
    fill: "hsla(117, 85%, 60%, 0.85)",
    stroke: "hsla(117, 60%, 20%, 0.9)",
  },
  {
    id: "radiant-zephyr",
    rarity: "rare",
    name: "Radiant Zephyr",
    shape: "circle",
    unlockType: "coins",
    cost: 710,
    preview: "radial-gradient(circle at 35% 30%, hsla(127, 85%, 88%, 1), hsla(127, 90%, 62%, 1) 45%, hsla(127, 70%, 16%, 1) 100%)",
    glow: "hsla(127, 90%, 65%, 0.6)",
    fill: "hsla(127, 85%, 60%, 0.85)",
    stroke: "hsla(127, 60%, 20%, 0.9)",
  },
  {
    id: "frozen-glider",
    rarity: "rare",
    name: "Frozen Glider",
    shape: "triangle",
    unlockType: "coins",
    cost: 1202,
    preview: "radial-gradient(circle at 35% 30%, hsla(332, 85%, 88%, 1), hsla(332, 90%, 62%, 1) 45%, hsla(332, 70%, 16%, 1) 100%)",
    glow: "hsla(332, 90%, 65%, 0.6)",
    fill: "hsla(332, 85%, 60%, 0.85)",
    stroke: "hsla(332, 60%, 20%, 0.9)",
  },
  {
    id: "chromatic-glider",
    rarity: "rare",
    name: "Chromatic Glider",
    shape: "circle",
    unlockType: "coins",
    cost: 980,
    preview: "radial-gradient(circle at 35% 30%, hsla(280, 85%, 88%, 1), hsla(280, 90%, 62%, 1) 45%, hsla(280, 70%, 16%, 1) 100%)",
    glow: "hsla(280, 90%, 65%, 0.6)",
    fill: "hsla(280, 85%, 60%, 0.85)",
    stroke: "hsla(280, 60%, 20%, 0.9)",
  },
  {
    id: "stellar-eclipse",
    rarity: "rare",
    name: "Stellar Eclipse",
    shape: "circle",
    unlockType: "coins",
    cost: 636,
    preview: "radial-gradient(circle at 35% 30%, hsla(263, 85%, 88%, 1), hsla(263, 90%, 62%, 1) 45%, hsla(263, 70%, 16%, 1) 100%)",
    glow: "hsla(263, 90%, 65%, 0.6)",
    fill: "hsla(263, 85%, 60%, 0.85)",
    stroke: "hsla(263, 60%, 20%, 0.9)",
  },
  {
    id: "plasma-drifter",
    rarity: "rare",
    name: "Plasma Drifter",
    shape: "square",
    unlockType: "coins",
    cost: 770,
    preview: "radial-gradient(circle at 35% 30%, hsla(208, 85%, 88%, 1), hsla(208, 90%, 62%, 1) 45%, hsla(208, 70%, 16%, 1) 100%)",
    glow: "hsla(208, 90%, 65%, 0.6)",
    fill: "hsla(208, 85%, 60%, 0.85)",
    stroke: "hsla(208, 60%, 20%, 0.9)",
  },
  {
    id: "spectral-nomad",
    rarity: "rare",
    name: "Spectral Nomad",
    shape: "square",
    unlockType: "coins",
    cost: 1262,
    preview: "radial-gradient(circle at 35% 30%, hsla(322, 85%, 88%, 1), hsla(322, 90%, 62%, 1) 45%, hsla(322, 70%, 16%, 1) 100%)",
    glow: "hsla(322, 90%, 65%, 0.6)",
    fill: "hsla(322, 85%, 60%, 0.85)",
    stroke: "hsla(322, 60%, 20%, 0.9)",
  },
  {
    id: "radiant-ember",
    rarity: "epic",
    name: "Radiant Ember",
    shape: "triangle",
    unlockType: "coins",
    cost: 2485,
    trail: true,
    preview: "radial-gradient(circle at 35% 30%, hsla(246, 85%, 88%, 1), hsla(246, 90%, 62%, 1) 45%, hsla(246, 70%, 16%, 1) 100%)",
    glow: "hsla(246, 90%, 65%, 0.6)",
    fill: "hsla(246, 85%, 60%, 0.85)",
    stroke: "hsla(246, 60%, 20%, 0.9)",
  },
  {
    id: "quantum-shard",
    rarity: "epic",
    name: "Quantum Shard",
    shape: "triangle",
    unlockType: "coins",
    cost: 2664,
    preview: "radial-gradient(circle at 35% 30%, hsla(177, 85%, 88%, 1), hsla(177, 90%, 62%, 1) 45%, hsla(177, 70%, 16%, 1) 100%)",
    glow: "hsla(177, 90%, 65%, 0.6)",
    fill: "hsla(177, 85%, 60%, 0.85)",
    stroke: "hsla(177, 60%, 20%, 0.9)",
  },
  {
    id: "arcane-reaver",
    rarity: "epic",
    name: "Arcane Reaver",
    shape: "circle",
    unlockType: "coins",
    cost: 2768,
    trail: true,
    preview: "radial-gradient(circle at 35% 30%, hsla(211, 85%, 88%, 1), hsla(211, 90%, 62%, 1) 45%, hsla(211, 70%, 16%, 1) 100%)",
    glow: "hsla(211, 90%, 65%, 0.6)",
    fill: "hsla(211, 85%, 60%, 0.85)",
    stroke: "hsla(211, 60%, 20%, 0.9)",
  },
  {
    id: "crystal-seeker",
    rarity: "epic",
    name: "Crystal Seeker",
    shape: "square",
    unlockType: "coins",
    cost: 2799,
    preview: "radial-gradient(circle at 35% 30%, hsla(30, 85%, 88%, 1), hsla(30, 90%, 62%, 1) 45%, hsla(30, 70%, 16%, 1) 100%)",
    glow: "hsla(30, 90%, 65%, 0.6)",
    fill: "hsla(30, 85%, 60%, 0.85)",
    stroke: "hsla(30, 60%, 20%, 0.9)",
  },
  {
    id: "lunar-wanderer",
    rarity: "epic",
    name: "Lunar Wanderer",
    shape: "square",
    unlockType: "coins",
    cost: 2180,
    trail: true,
    preview: "radial-gradient(circle at 35% 30%, hsla(133, 85%, 88%, 1), hsla(133, 90%, 62%, 1) 45%, hsla(133, 70%, 16%, 1) 100%)",
    glow: "hsla(133, 90%, 65%, 0.6)",
    fill: "hsla(133, 85%, 60%, 0.85)",
    stroke: "hsla(133, 60%, 20%, 0.9)",
  },
  {
    id: "feral-drifter",
    rarity: "epic",
    name: "Feral Drifter",
    shape: "triangle",
    unlockType: "coins",
    cost: 2069,
    preview: "radial-gradient(circle at 35% 30%, hsla(284, 85%, 88%, 1), hsla(284, 90%, 62%, 1) 45%, hsla(284, 70%, 16%, 1) 100%)",
    glow: "hsla(284, 90%, 65%, 0.6)",
    fill: "hsla(284, 85%, 60%, 0.85)",
    stroke: "hsla(284, 60%, 20%, 0.9)",
  },
  {
    id: "stellar-rift",
    rarity: "epic",
    name: "Stellar Rift",
    shape: "circle",
    unlockType: "coins",
    cost: 2039,
    trail: true,
    preview: "radial-gradient(circle at 35% 30%, hsla(320, 85%, 88%, 1), hsla(320, 90%, 62%, 1) 45%, hsla(320, 70%, 16%, 1) 100%)",
    glow: "hsla(320, 90%, 65%, 0.6)",
    fill: "hsla(320, 85%, 60%, 0.85)",
    stroke: "hsla(320, 60%, 20%, 0.9)",
  },
  {
    id: "stellar-shard",
    rarity: "epic",
    name: "Stellar Shard",
    shape: "circle",
    unlockType: "coins",
    cost: 2403,
    preview: "radial-gradient(circle at 35% 30%, hsla(144, 85%, 88%, 1), hsla(144, 90%, 62%, 1) 45%, hsla(144, 70%, 16%, 1) 100%)",
    glow: "hsla(144, 90%, 65%, 0.6)",
    fill: "hsla(144, 85%, 60%, 0.85)",
    stroke: "hsla(144, 60%, 20%, 0.9)",
  },
  {
    id: "rogue-seeker",
    rarity: "epic",
    name: "Rogue Seeker",
    shape: "circle",
    unlockType: "coins",
    cost: 2901,
    trail: true,
    preview: "radial-gradient(circle at 35% 30%, hsla(58, 85%, 88%, 1), hsla(58, 90%, 62%, 1) 45%, hsla(58, 70%, 16%, 1) 100%)",
    glow: "hsla(58, 90%, 65%, 0.6)",
    fill: "hsla(58, 85%, 60%, 0.85)",
    stroke: "hsla(58, 60%, 20%, 0.9)",
  },
  {
    id: "blazing-warden",
    rarity: "epic",
    name: "Blazing Warden",
    shape: "triangle",
    unlockType: "coins",
    cost: 2186,
    preview: "radial-gradient(circle at 35% 30%, hsla(266, 85%, 88%, 1), hsla(266, 90%, 62%, 1) 45%, hsla(266, 70%, 16%, 1) 100%)",
    glow: "hsla(266, 90%, 65%, 0.6)",
    fill: "hsla(266, 85%, 60%, 0.85)",
    stroke: "hsla(266, 60%, 20%, 0.9)",
  },
  {
    id: "comet-runner",
    rarity: "legendary",
    name: "Comet Runner",
    shape: "square",
    unlockType: "achievement",
    achievement: "Achievement: \"Speed Demon\"",
    ability: "dash",
    art: "assets/skins/comet-runner.svg",
    animated: true,
    trail: true,
    preview: "radial-gradient(circle at 35% 30%, hsla(340, 85%, 88%, 1), hsla(340, 90%, 62%, 1) 45%, hsla(340, 70%, 16%, 1) 100%)",
    glow: "hsla(340, 90%, 65%, 0.6)",
    fill: "hsla(340, 85%, 60%, 0.85)",
    stroke: "hsla(340, 60%, 20%, 0.9)",
  },
  {
    id: "skyward-herald",
    rarity: "legendary",
    name: "Skyward Herald",
    shape: "square",
    unlockType: "achievement",
    achievement: "Achievement: \"Sky Conqueror\"",
    ability: "tripleJump",
    art: "assets/skins/skyward-herald.svg",
    animated: true,
    trail: true,
    preview: "radial-gradient(circle at 35% 30%, hsla(54, 85%, 88%, 1), hsla(54, 90%, 62%, 1) 45%, hsla(54, 70%, 16%, 1) 100%)",
    glow: "hsla(54, 90%, 65%, 0.6)",
    fill: "hsla(54, 85%, 60%, 0.85)",
    stroke: "hsla(54, 60%, 20%, 0.9)",
  },
  {
    id: "wallcrawler-wisp",
    rarity: "legendary",
    name: "Wallcrawler Wisp",
    shape: "circle",
    unlockType: "achievement",
    achievement: "Achievement: \"Cling Master\"",
    ability: "sticky",
    art: "assets/skins/wallcrawler-wisp.svg",
    animated: true,
    trail: true,
    preview: "radial-gradient(circle at 35% 30%, hsla(274, 85%, 88%, 1), hsla(274, 90%, 62%, 1) 45%, hsla(274, 70%, 16%, 1) 100%)",
    glow: "hsla(274, 90%, 65%, 0.6)",
    fill: "hsla(274, 85%, 60%, 0.85)",
    stroke: "hsla(274, 60%, 20%, 0.9)",
  },
  {
    id: "glacial-drifter",
    rarity: "legendary",
    name: "Glacial Drifter",
    shape: "triangle",
    unlockType: "achievement",
    achievement: "Achievement: \"Ice Cold\"",
    ability: "slippery",
    art: "assets/skins/glacial-drifter.svg",
    animated: true,
    trail: true,
    preview: "radial-gradient(circle at 35% 30%, hsla(359, 85%, 88%, 1), hsla(359, 90%, 62%, 1) 45%, hsla(359, 70%, 16%, 1) 100%)",
    glow: "hsla(359, 90%, 65%, 0.6)",
    fill: "hsla(359, 85%, 60%, 0.85)",
    stroke: "hsla(359, 60%, 20%, 0.9)",
  },
  {
    id: "nebula-bouncer",
    rarity: "mythic",
    name: "Nebula Bouncer",
    shape: "circle",
    unlockType: "achievement",
    achievement: "Achievement: \"Bounce King\"",
    ability: "bouncy",
    art: "assets/skins/nebula-bouncer.svg",
    trail: true,
    animated: true,
    preview: "conic-gradient(from 0deg, hsla(87, 90%, 62%, 1), hsla(177, 90%, 62%, 1), hsla(267, 90%, 62%, 1), hsla(357, 90%, 62%, 1), hsla(87, 90%, 62%, 1))",
    glow: "hsla(87, 90%, 65%, 0.6)",
    fill: "hsla(87, 85%, 60%, 0.85)",
    stroke: "hsla(87, 60%, 20%, 0.9)",
  },
];

const StarshadeEconomy = (() => {
  const COINS_KEY = "starshadeCoins";
  const EQUIPPED_KEY = "starshadeEquippedSkin";
  const UNLOCKED_KEY = "starshadeUnlockedSkins";
  const COMPLETED_LEVELS_KEY = "starshadeCompletedLevels";
  const GAME_COMPLETED_KEY = "starshadeGameCompleted";
  // Lifetime totals — separate from the spendable `starshadeCoins` balance
  // (which goes down when you buy a skin) and from game.js's in-session
  // `consecutiveDeaths` (which resets on progress) — these only ever go
  // up, so achievements.js can use them as permanent milestones.
  const TOTAL_COINS_EARNED_KEY = "starshadeTotalCoinsEarned";
  const TOTAL_DEATHS_KEY = "starshadeTotalDeaths";
  const HARD_MODE_WIN_KEY = "starshadeHardModeLevelWin";
  // Backing storage for the "weird" achievements in achievementsData.js —
  // same "only ever goes up" reasoning as TOTAL_COINS_EARNED_KEY/
  // TOTAL_DEATHS_KEY above, so they're safe for
  // StarshadeAchievements.revalidateUnlocked() to re-test at any time: an
  // achievement built on one of these can never spuriously fail once
  // truly earned, unlike a real-world-clock condition (see
  // achievementsData.js's `retestable` field).
  const TOTAL_LEVEL_PLAYTHROUGHS_KEY = "starshadeTotalLevelPlaythroughs";
  const DEATHLESS_COMPLETIONS_KEY = "starshadeDeathlessCompletions";
  const NO_DOUBLE_JUMP_COMPLETIONS_KEY = "starshadeNoDoubleJumpCompletions";
  const BOUNCE_PAD_USES_KEY = "starshadeBouncePadUses";
  const CONVEYOR_RIDES_KEY = "starshadeConveyorRides";
  const EQUIPPED_NON_FREE_SKIN_KEY = "starshadeEquippedNonFreeSkin";
  const COMPLETED_GAME_DEATHLESS_KEY = "starshadeCompletedGameDeathless";

  // Coins awarded the first time each level's final checkpoint is reached.
  // Replaying an already-completed level doesn't pay out again, so this
  // can't be farmed by bouncing on the same checkpoint.
  const LEVEL_COMPLETION_REWARD = 75;
  const GAME_COMPLETION_BONUS = 1000;

  // Difficulty (set on the Settings page) scales coin rewards — Hard pays
  // more since hazards move faster and checkpoints are less forgiving
  // there (see DIFFICULTY_SETTINGS in game.js for the other two effects).
  const DIFFICULTY_COIN_MULTIPLIERS = { easy: 0.75, normal: 1, hard: 1.5 };

  function getDifficulty() {
    return localStorage.getItem("difficulty") || "normal";
  }

  function getCoinMultiplier() {
    return DIFFICULTY_COIN_MULTIPLIERS[getDifficulty()] || 1;
  }

  function getCoins() {
    return parseInt(localStorage.getItem(COINS_KEY), 10) || 0;
  }

  function addCoins(amount) {
    const total = getCoins() + amount;
    localStorage.setItem(COINS_KEY, String(total));
    if (amount > 0) {
      const earned = getTotalCoinsEarned() + amount;
      localStorage.setItem(TOTAL_COINS_EARNED_KEY, String(earned));
    }
    return total;
  }

  function getTotalCoinsEarned() {
    return parseInt(localStorage.getItem(TOTAL_COINS_EARNED_KEY), 10) || 0;
  }

  function getTotalDeaths() {
    return parseInt(localStorage.getItem(TOTAL_DEATHS_KEY), 10) || 0;
  }

  function incrementTotalDeaths() {
    const total = getTotalDeaths() + 1;
    localStorage.setItem(TOTAL_DEATHS_KEY, String(total));
    return total;
  }

  function hasHardModeWin() {
    return localStorage.getItem(HARD_MODE_WIN_KEY) === "true";
  }

  // Simple "read an int, bump it by 1, write it back" helper — every
  // counter below (playthroughs, deathless/no-double-jump completions,
  // bounce-pad uses, conveyor rides) follows this exact shape.
  function bumpCounter(key) {
    const total = (parseInt(localStorage.getItem(key), 10) || 0) + 1;
    localStorage.setItem(key, String(total));
    return total;
  }

  // Every level completion, including a replay of one already beaten —
  // unlike markLevelCompleted() below, which only records/pays out the
  // first time. The gap between this and getCompletedLevels().length is
  // exactly "how many times you've replayed something" (see the
  // Déjà Vu achievement).
  function getTotalLevelPlaythroughs() {
    return parseInt(localStorage.getItem(TOTAL_LEVEL_PLAYTHROUGHS_KEY), 10) || 0;
  }
  function recordLevelPlaythrough() {
    return bumpCounter(TOTAL_LEVEL_PLAYTHROUGHS_KEY);
  }

  // A level completed without dying since it was last (re)loaded — see
  // game.js's `leveldiedThisAttempt`.
  function getDeathlessCompletions() {
    return parseInt(localStorage.getItem(DEATHLESS_COMPLETIONS_KEY), 10) || 0;
  }
  function recordDeathlessCompletion() {
    return bumpCounter(DEATHLESS_COMPLETIONS_KEY);
  }

  // A level completed without ever using a double/extra air jump since it
  // was last (re)loaded — see game.js's `usedExtraJumpThisAttempt`.
  function getNoDoubleJumpCompletions() {
    return parseInt(localStorage.getItem(NO_DOUBLE_JUMP_COMPLETIONS_KEY), 10) || 0;
  }
  function recordNoDoubleJumpCompletion() {
    return bumpCounter(NO_DOUBLE_JUMP_COMPLETIONS_KEY);
  }

  function getBouncePadUses() {
    return parseInt(localStorage.getItem(BOUNCE_PAD_USES_KEY), 10) || 0;
  }
  function recordBouncePadUse() {
    return bumpCounter(BOUNCE_PAD_USES_KEY);
  }

  // Counts rides, not frames — game.js only calls this once per landing
  // on a conveyor (edge-detected), not every frame spent standing on one,
  // so a single long ride and a series of short hops both count sanely.
  function getConveyorRides() {
    return parseInt(localStorage.getItem(CONVEYOR_RIDES_KEY), 10) || 0;
  }
  function recordConveyorRide() {
    return bumpCounter(CONVEYOR_RIDES_KEY);
  }

  // Sticky flag: once true, stays true forever (there's no "un-equip
  // everything back to only ever having worn the default"), set from
  // setEquippedSkinId() below the moment anything but the free starting
  // skin gets equipped.
  function hasEquippedNonFreeSkin() {
    return localStorage.getItem(EQUIPPED_NON_FREE_SKIN_KEY) === "true";
  }

  // Captured once, at the exact moment the game is first completed (see
  // setGameCompleted() below) — deliberately NOT re-derived later from
  // "is totalDeaths still 0," since casually dying in a post-completion
  // replay would otherwise make a legitimately-earned zero-death clear
  // look unearned in hindsight.
  function hasCompletedGameDeathless() {
    return localStorage.getItem(COMPLETED_GAME_DEATHLESS_KEY) === "true";
  }

  function recordHardModeWinIfApplicable() {
    if (getDifficulty() === "hard") localStorage.setItem(HARD_MODE_WIN_KEY, "true");
  }

  // -----------------------------------------------------------
  // SHOP — particles / abilities / power-ups / custom skins
  // -----------------------------------------------------------
  // Particles, abilities, and power-ups (catalogs in shopData.js — see
  // STARSHADE_PARTICLES/STARSHADE_ABILITIES/STARSHADE_POWERUPS) share the
  // exact same unlockType/cost/rarity shape STARSHADE_SKINS already uses
  // above, just against their own unlocked-ids list — these two generic
  // helpers are what isUnlocked()/unlockWithCoins() below would look like
  // if they weren't hardcoded to the skins list specifically.
  function getUnlockedIds(storageKey) {
    try {
      return JSON.parse(localStorage.getItem(storageKey)) || [];
    } catch {
      return [];
    }
  }

  function isItemUnlocked(item, storageKey) {
    if (item.unlockType === "free") return true;
    if (item.unlockType === "completion") return isGameCompleted();
    return getUnlockedIds(storageKey).includes(item.id);
  }

  // Big Spender (power-up, shopData.js) — a 1-in-10 chance any Shop
  // purchase partially refunds itself. Shared by unlockItemWithCoins below
  // and unlockWithCoins (skins) further down rather than duplicated in
  // shop.js, so it applies uniformly no matter which tab the purchase
  // happened in. References getEquippedPowerUp(), defined further down in
  // this same IIFE — safe since this only runs inside a function body,
  // called well after the whole file has parsed.
  function applyBigSpenderRefund(cost) {
    const powerUp = getEquippedPowerUp();
    if (powerUp && powerUp.effect === "bigSpender" && Math.random() < 0.1) {
      addCoins(Math.round(cost * 0.3));
    }
  }

  function unlockItemWithCoins(item, storageKey) {
    if (item.unlockType !== "coins") return false;
    if (isItemUnlocked(item, storageKey)) return true;
    if (getCoins() < item.cost) return false;
    addCoins(-item.cost);
    applyBigSpenderRefund(item.cost);
    const unlocked = getUnlockedIds(storageKey);
    unlocked.push(item.id);
    localStorage.setItem(storageKey, JSON.stringify(unlocked));
    return true;
  }

  const UNLOCKED_PARTICLES_KEY = "starshadeUnlockedParticles";
  const UNLOCKED_ABILITIES_KEY = "starshadeUnlockedAbilities";
  const UNLOCKED_POWERUPS_KEY = "starshadeUnlockedPowerups";
  const EQUIPPED_PARTICLE_KEY = "starshadeEquippedParticle";
  const EQUIPPED_ABILITY_KEY = "starshadeEquippedAbility";
  const EQUIPPED_POWERUP_KEY = "starshadeEquippedPowerup";
  const CUSTOM_SKINS_KEY = "starshadeCustomSkins";

  function isParticleUnlocked(particle) {
    return isItemUnlocked(particle, UNLOCKED_PARTICLES_KEY);
  }
  function unlockParticleWithCoins(particle) {
    return unlockItemWithCoins(particle, UNLOCKED_PARTICLES_KEY);
  }
  function getEquippedParticleId() {
    return localStorage.getItem(EQUIPPED_PARTICLE_KEY) || "";
  }
  function setEquippedParticleId(id) {
    localStorage.setItem(EQUIPPED_PARTICLE_KEY, id);
  }
  // Returns the equipped particle *style* (a STARSHADE_PARTICLES entry),
  // not just its id — null if nothing's equipped, in which case callers
  // (game.js's trail effect) fall back to the skin's own fill color exactly
  // as they always have.
  function getEquippedParticleStyle() {
    const id = getEquippedParticleId();
    if (!id || typeof STARSHADE_PARTICLES === "undefined") return null;
    return STARSHADE_PARTICLES.find((p) => p.id === id) || null;
  }

  function isAbilityUnlocked(ability) {
    return isItemUnlocked(ability, UNLOCKED_ABILITIES_KEY);
  }
  function unlockAbilityWithCoins(ability) {
    return unlockItemWithCoins(ability, UNLOCKED_ABILITIES_KEY);
  }
  function getEquippedAbilityId() {
    return localStorage.getItem(EQUIPPED_ABILITY_KEY) || "";
  }
  function setEquippedAbilityId(id) {
    localStorage.setItem(EQUIPPED_ABILITY_KEY, id);
  }
  // The actual ability *string* game.js's physics loop checks
  // (dash/tripleJump/featherFall/sticky/slippery/bouncy) — falls back to the equipped
  // skin's own bundled `ability` field (unchanged from before this
  // existed) if nothing's been independently equipped from the Shop's
  // Skills tab, so every already-existing skin's built-in ability keeps
  // working exactly as it always has.
  function getEquippedAbility() {
    const id = getEquippedAbilityId();
    if (id && typeof STARSHADE_ABILITIES !== "undefined") {
      const found = STARSHADE_ABILITIES.find((a) => a.id === id);
      if (found) return found.ability;
    }
    return getEquippedSkin().ability || null;
  }

  // Power-ups are equipped one at a time (same pattern as abilities/
  // particles above) rather than a consumed-on-use inventory — a
  // persistent passive perk while equipped is simpler to reason about and
  // to build a shop UI for than per-level consumption accounting, and
  // still delivers the "buy a power-up" shop category. game.js reads the
  // effect via getEquippedPowerUp() at the point each one actually applies
  // (extraAirJumps() for "extraAirJump", markLevelCompleted's coin payout
  // for "coinBoost" — see shopData.js's STARSHADE_POWERUPS `effect` field).
  function isPowerUpUnlocked(powerUp) {
    return isItemUnlocked(powerUp, UNLOCKED_POWERUPS_KEY);
  }
  function unlockPowerUpWithCoins(powerUp) {
    return unlockItemWithCoins(powerUp, UNLOCKED_POWERUPS_KEY);
  }
  function getEquippedPowerUpId() {
    return localStorage.getItem(EQUIPPED_POWERUP_KEY) || "";
  }
  function setEquippedPowerUpId(id) {
    localStorage.setItem(EQUIPPED_POWERUP_KEY, id);
  }
  function getEquippedPowerUp() {
    const id = getEquippedPowerUpId();
    if (!id || typeof STARSHADE_POWERUPS === "undefined") return null;
    return STARSHADE_POWERUPS.find((p) => p.id === id) || null;
  }

  // Custom skins built in the Shop's "Custom Builder" sub-tab — plain
  // skin-like objects (same shape/fill/stroke/glow fields STARSHADE_SKINS
  // entries have) stored separately so the built-in catalog above never
  // needs to change. getEquippedSkin() above checks this list first.
  function getCustomSkins() {
    try {
      return JSON.parse(localStorage.getItem(CUSTOM_SKINS_KEY)) || [];
    } catch {
      return [];
    }
  }
  function saveCustomSkin(config) {
    const skins = getCustomSkins();
    const id = config.id || `custom-${Date.now()}`;
    const skin = {
      id,
      name: config.name || "Custom Skin",
      shape: config.shape || "square",
      unlockType: "free",
      rarity: "custom",
      fill: config.fill,
      stroke: config.stroke,
      glow: config.glow,
      trail: !!config.trail,
      outlineWidth: config.outlineWidth || 3,
      glowPulse: !!config.glowPulse,
      accessory: config.accessory || "accessory-none",
      custom: true,
    };
    const existingIndex = skins.findIndex((s) => s.id === id);
    if (existingIndex >= 0) skins[existingIndex] = skin;
    else skins.push(skin);
    localStorage.setItem(CUSTOM_SKINS_KEY, JSON.stringify(skins));
    return skin;
  }
  function deleteCustomSkin(id) {
    localStorage.setItem(
      CUSTOM_SKINS_KEY,
      JSON.stringify(getCustomSkins().filter((s) => s.id !== id))
    );
    if (getEquippedSkinId() === id) setEquippedSkinId("square-default");
  }

  function getUnlockedSkinIds() {
    try {
      return JSON.parse(localStorage.getItem(UNLOCKED_KEY)) || [];
    } catch {
      return [];
    }
  }

  function isUnlocked(skin) {
    if (skin.unlockType === "free") return true;
    if (skin.unlockType === "completion") return isGameCompleted();
    // 'coins' skins land here after unlockWithCoins() below; 'achievement'
    // skins land here the same way, via grantSkin() called from
    // achievementsData.js the moment their achievement unlocks — both
    // share the one "extra unlocked skins" list rather than needing
    // separate storage.
    return getUnlockedSkinIds().includes(skin.id);
  }

  function grantSkin(skinId) {
    const unlocked = getUnlockedSkinIds();
    if (!unlocked.includes(skinId)) {
      unlocked.push(skinId);
      localStorage.setItem(UNLOCKED_KEY, JSON.stringify(unlocked));
    }
  }

  function unlockWithCoins(skin) {
    if (skin.unlockType !== "coins") return false;
    if (isUnlocked(skin)) return true;
    if (getCoins() < skin.cost) return false;
    addCoins(-skin.cost);
    applyBigSpenderRefund(skin.cost);
    const unlocked = getUnlockedSkinIds();
    unlocked.push(skin.id);
    localStorage.setItem(UNLOCKED_KEY, JSON.stringify(unlocked));
    return true;
  }

  function getEquippedSkinId() {
    return localStorage.getItem(EQUIPPED_KEY) || "square-default";
  }

  function setEquippedSkinId(id) {
    localStorage.setItem(EQUIPPED_KEY, id);
    if (id !== "square-default") {
      localStorage.setItem(EQUIPPED_NON_FREE_SKIN_KEY, "true");
    }
  }

  function getEquippedSkin() {
    const id = getEquippedSkinId();
    const custom = getCustomSkins().find((s) => s.id === id);
    if (custom) return custom;
    return STARSHADE_SKINS.find((s) => s.id === id) || STARSHADE_SKINS[0];
  }

  function getCompletedLevels() {
    try {
      return JSON.parse(localStorage.getItem(COMPLETED_LEVELS_KEY)) || [];
    } catch {
      return [];
    }
  }

  // Returns the number of coins actually awarded (0 if already completed
  // before, so reaching the same checkpoint again via death/respawn or
  // revisiting a level never pays out twice).
  function markLevelCompleted(levelNumber) {
    const completed = getCompletedLevels();
    if (completed.includes(levelNumber)) return 0;
    completed.push(levelNumber);
    localStorage.setItem(COMPLETED_LEVELS_KEY, JSON.stringify(completed));
    recordHardModeWinIfApplicable();
    const reward = Math.round(LEVEL_COMPLETION_REWARD * getCoinMultiplier());
    addCoins(reward);
    return reward;
  }

  function isGameCompleted() {
    return localStorage.getItem(GAME_COMPLETED_KEY) === "true";
  }

  function setGameCompleted() {
    if (isGameCompleted()) return 0;
    localStorage.setItem(GAME_COMPLETED_KEY, "true");
    if (getTotalDeaths() === 0) {
      localStorage.setItem(COMPLETED_GAME_DEATHLESS_KEY, "true");
    }
    const bonus = Math.round(GAME_COMPLETION_BONUS * getCoinMultiplier());
    addCoins(bonus);
    return bonus;
  }

  return {
    LEVEL_COMPLETION_REWARD,
    GAME_COMPLETION_BONUS,
    getCoins,
    addCoins,
    getTotalCoinsEarned,
    getTotalDeaths,
    incrementTotalDeaths,
    hasHardModeWin,
    isUnlocked,
    unlockWithCoins,
    grantSkin,
    getEquippedSkinId,
    setEquippedSkinId,
    getEquippedSkin,
    markLevelCompleted,
    getCompletedLevels,
    isGameCompleted,
    setGameCompleted,
    getDifficulty,
    getCoinMultiplier,
    getTotalLevelPlaythroughs,
    recordLevelPlaythrough,
    getDeathlessCompletions,
    recordDeathlessCompletion,
    getNoDoubleJumpCompletions,
    recordNoDoubleJumpCompletion,
    getBouncePadUses,
    recordBouncePadUse,
    getConveyorRides,
    recordConveyorRide,
    hasEquippedNonFreeSkin,
    hasCompletedGameDeathless,
    isParticleUnlocked,
    unlockParticleWithCoins,
    getEquippedParticleId,
    setEquippedParticleId,
    getEquippedParticleStyle,
    isAbilityUnlocked,
    unlockAbilityWithCoins,
    getEquippedAbilityId,
    setEquippedAbilityId,
    getEquippedAbility,
    isPowerUpUnlocked,
    unlockPowerUpWithCoins,
    getEquippedPowerUpId,
    setEquippedPowerUpId,
    getEquippedPowerUp,
    getCustomSkins,
    saveCustomSkin,
    deleteCustomSkin,
  };
})();
