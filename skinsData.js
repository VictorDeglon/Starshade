// Shared skin catalog + coin/progress economy. Loaded by both game.html
// (so the equipped skin actually renders in-game) and skins.html (the
// shop/carousel) so the two never drift out of sync with each other.
//
// Unlock types:
//   'free'       — always unlocked (the starting skin)
//   'coins'      — unlocked by spending `cost` coins, once
//   'completion' — unlocked by beating all 12 levels once
//     (StarshadeEconomy.isGameCompleted())
//
// `shape` controls how game.js's drawPlayer() renders the player when this
// skin is equipped: 'square' | 'circle' | 'triangle' | 'image'. 'image'
// skins also set `image` to an asset path and are drawn with drawImage()
// clipped to a circle instead of a flat fill.
//
// `trail: true` makes game.js spawn a continuous particle trail behind
// the player while moving/airborne (see spawnParticles() call sites).
// `animated: true` is a hint for the shop UI (skins.css) to apply a CSS
// animation to that skin's preview — it has no effect on gameplay.
const STARSHADE_SKINS = [
  {
    id: "square-default",
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
];

const StarshadeEconomy = (() => {
  const COINS_KEY = "starshadeCoins";
  const EQUIPPED_KEY = "starshadeEquippedSkin";
  const UNLOCKED_KEY = "starshadeUnlockedSkins";
  const COMPLETED_LEVELS_KEY = "starshadeCompletedLevels";
  const GAME_COMPLETED_KEY = "starshadeGameCompleted";

  // Coins awarded the first time each level's final checkpoint is reached.
  // Replaying an already-completed level doesn't pay out again, so this
  // can't be farmed by bouncing on the same checkpoint.
  const LEVEL_COMPLETION_REWARD = 75;
  const GAME_COMPLETION_BONUS = 1000;

  function getCoins() {
    return parseInt(localStorage.getItem(COINS_KEY), 10) || 0;
  }

  function addCoins(amount) {
    const total = getCoins() + amount;
    localStorage.setItem(COINS_KEY, String(total));
    return total;
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
    return getUnlockedSkinIds().includes(skin.id);
  }

  function unlockWithCoins(skin) {
    if (skin.unlockType !== "coins") return false;
    if (isUnlocked(skin)) return true;
    if (getCoins() < skin.cost) return false;
    addCoins(-skin.cost);
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
  }

  function getEquippedSkin() {
    const id = getEquippedSkinId();
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
    return addCoins(LEVEL_COMPLETION_REWARD) && LEVEL_COMPLETION_REWARD;
  }

  function isGameCompleted() {
    return localStorage.getItem(GAME_COMPLETED_KEY) === "true";
  }

  function setGameCompleted() {
    if (isGameCompleted()) return 0;
    localStorage.setItem(GAME_COMPLETED_KEY, "true");
    addCoins(GAME_COMPLETION_BONUS);
    return GAME_COMPLETION_BONUS;
  }

  return {
    LEVEL_COMPLETION_REWARD,
    GAME_COMPLETION_BONUS,
    getCoins,
    addCoins,
    isUnlocked,
    unlockWithCoins,
    getEquippedSkinId,
    setEquippedSkinId,
    getEquippedSkin,
    markLevelCompleted,
    getCompletedLevels,
    isGameCompleted,
    setGameCompleted,
  };
})();
