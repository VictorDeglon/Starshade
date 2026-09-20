// Shop catalogs for Particles, Skills (abilities), and Power-Ups — the
// three tabs alongside Skins (STARSHADE_SKINS, skinsData.js) in the Shop
// overlay (see shop.js/shop.css). Same `unlockType`/`cost`/`rarity` shape
// skinsData.js already uses, read through StarshadeEconomy's matching
// isXUnlocked()/unlockXWithCoins()/getEquippedX() accessors (skinsData.js)
// so buying/equipping here works exactly like buying/equipping a skin.
//
// Loaded before game.js (see index.html) so game.js can read these
// catalogs by name (STARSHADE_ABILITIES/STARSHADE_POWERUPS) the moment it
// needs to resolve an equipped ability/power-up id back to its effect.

// `colors` feeds spawnParticles() directly (see game.js's continuous
// trail effect) — one entry picked at random per particle. `preview` is a
// CSS gradient for the shop card, same convention as a skin's `preview`.
const STARSHADE_PARTICLES = [
  {
    id: "particle-embers",
    name: "Embers",
    rarity: "common",
    unlockType: "free",
    colors: ["rgba(255,180,90,0.85)", "rgba(255,120,60,0.7)"],
    preview: "radial-gradient(circle, #ffb45a, #ff5a1e)",
  },
  {
    id: "particle-frost",
    name: "Frost",
    rarity: "common",
    unlockType: "coins",
    cost: 120,
    colors: ["rgba(180,230,255,0.9)", "rgba(120,190,255,0.7)"],
    preview: "radial-gradient(circle, #d6f3ff, #6fc2ff)",
  },
  {
    id: "particle-nebula",
    name: "Nebula Dust",
    rarity: "rare",
    unlockType: "coins",
    cost: 260,
    colors: ["rgba(200,150,255,0.9)", "rgba(120,90,220,0.75)"],
    preview: "radial-gradient(circle, #e2c9ff, #7c4de0)",
  },
  {
    id: "particle-verdant",
    name: "Verdant Spark",
    rarity: "rare",
    unlockType: "coins",
    cost: 260,
    colors: ["rgba(150,255,170,0.9)", "rgba(60,210,110,0.75)"],
    preview: "radial-gradient(circle, #c6ffd2, #35c96a)",
  },
  {
    id: "particle-solar",
    name: "Solar Flare",
    rarity: "epic",
    unlockType: "coins",
    cost: 420,
    colors: ["rgba(255,230,120,0.95)", "rgba(255,140,40,0.8)"],
    preview: "radial-gradient(circle, #fff2b0, #ff8c28)",
  },
  {
    id: "particle-void",
    name: "Void Trail",
    rarity: "legendary",
    unlockType: "completion",
    colors: ["rgba(120,80,200,0.9)", "rgba(10,5,25,0.85)"],
    preview: "radial-gradient(circle, #7c50c8, #0a0519)",
  },
];

// `ability` is the exact string game.js's physics loop already checks
// (dash/tripleJump/sticky/slippery/bouncy — see docs/gameplay.md's
// Abilities section and StarshadeEconomy.getEquippedAbility()). These are
// the same five effects skins have always been able to bundle — promoted
// here into their own independently-purchasable/equippable catalog so a
// player isn't forced to also change their cosmetic look to get one.
const STARSHADE_ABILITIES = [
  {
    id: "skill-dash",
    name: "Dash",
    rarity: "rare",
    unlockType: "coins",
    cost: 300,
    ability: "dash",
    description: "Double-tap Left/Right for a short fast burst.",
  },
  {
    id: "skill-triple-jump",
    name: "Triple Jump",
    rarity: "rare",
    unlockType: "coins",
    cost: 300,
    ability: "tripleJump",
    description: "An extra mid-air jump (2 total instead of the usual 1).",
  },
  {
    id: "skill-sticky",
    name: "Wall Cling",
    rarity: "epic",
    unlockType: "coins",
    cost: 380,
    ability: "sticky",
    description: "Cling to a wall while holding into it, refreshing your air jump.",
  },
  {
    id: "skill-slippery",
    name: "Momentum",
    rarity: "common",
    unlockType: "coins",
    cost: 150,
    ability: "slippery",
    description: "Eases toward speed and keeps coasting instead of stopping instantly.",
  },
  {
    id: "skill-bouncy",
    name: "Rebound",
    rarity: "epic",
    unlockType: "coins",
    cost: 380,
    ability: "bouncy",
    description: "Rebounds a bit on landing instead of coming to rest.",
  },
];

// `effect` is read by game.js at the one specific point each power-up
// actually applies — extraAirJumps() for "extraAirJump", the coin payout
// in advanceToNextLevel() for "coinBoost". Equipped one at a time (see
// StarshadeEconomy.getEquippedPowerUp()), as a persistent perk rather
// than a per-use consumable — simpler to reason about, and to a build a
// shop UI for, than tracking per-level consumption.
const STARSHADE_POWERUPS = [
  {
    id: "powerup-air-jump",
    name: "Air Jump Boost",
    rarity: "rare",
    unlockType: "coins",
    cost: 350,
    effect: "extraAirJump",
    description: "+1 extra mid-air jump, stacking with any equipped Skill.",
  },
  {
    id: "powerup-coin-boost",
    name: "Coin Boost",
    rarity: "epic",
    unlockType: "coins",
    cost: 450,
    effect: "coinBoost",
    description: "+50% coins from every level you complete while equipped.",
  },
];
