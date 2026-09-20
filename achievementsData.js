// Shared achievement catalog + unlock tracking + popup notifications.
// Loaded by every page that can trigger an achievement (game.html,
// skins.html) or display them (achievements.html, index.html) — same
// "one source of truth" reasoning as skinsData.js.
//
// Each achievement:
//   id          — stable key, used for localStorage + cross-referencing
//                 skinsData.js's `achievement` display string
//   name        — shown everywhere; skinsData.js's ability skins expect
//                 an exact `Achievement: "<name>"` match (see grantsSkin)
//   description — what to do
//   rarity      — 'common' | 'rare' | 'epic' | 'legendary' | 'mythic',
//                 same scale as a skin's rarity — purely a badge color,
//                 doesn't affect how hard `check()` actually is (that's
//                 just up to the condition itself)
//   icon        — one of ICONS below, which SVG glyph to draw
//   grantsSkin  — optional skinsData.js id: the moment this achievement
//                 unlocks, that skin is granted via StarshadeEconomy.
//                 grantSkin() (see skinsData.js's 'achievement' unlockType)
//   grantsCoins — optional number: the moment this achievement unlocks,
//                 that many bonus coins are added via StarshadeEconomy.
//                 addCoins() — used on the easier (common/rare) entries
//                 as a small extra reward, distinct from grantsSkin which
//                 is reserved for the five legendary/mythic signature
//                 skins below
//   check(stats) — pure function over collectStats()'s snapshot; no side
//                 effects, so it's safe to call every time checkAll() runs
const STARSHADE_ACHIEVEMENTS = [
  { id: "first-steps", name: "First Steps", description: "Complete Level 1", rarity: "common", icon: "flag",
    check: (s) => s.completedLevels.includes(1) },
  { id: "pocket-change", name: "Pocket Change", description: "Earn 100 coins total", rarity: "common", icon: "coin",
    check: (s) => s.totalCoinsEarned >= 100 },
  { id: "new-look", name: "New Look", description: "Unlock a new skin", rarity: "common", icon: "mask",
    check: (s) => s.unlockedSkinCount >= 2 },
  { id: "wipeout", name: "Wipeout", description: "Die for the first time", rarity: "common", icon: "skull",
    check: (s) => s.totalDeaths >= 1 },
  { id: "quarter-way", name: "Quarter Way", description: "Complete Level 25", rarity: "common", icon: "flag",
    check: (s) => s.completedLevels.includes(25) },
  { id: "halfway-hero", name: "Halfway Hero", description: "Complete Level 50", rarity: "common", icon: "flag",
    check: (s) => s.completedLevels.includes(50) },

  { id: "coin-collector", name: "Coin Collector", description: "Earn 1,000 coins total", rarity: "rare", icon: "coin",
    check: (s) => s.totalCoinsEarned >= 1000 },
  { id: "style-icon", name: "Style Icon", description: "Unlock 10 skins", rarity: "rare", icon: "mask",
    check: (s) => s.unlockedSkinCount >= 10 },
  { id: "three-quarters", name: "Three Quarters", description: "Complete Level 75", rarity: "rare", icon: "flag",
    check: (s) => s.completedLevels.includes(75) },
  { id: "hardcore", name: "Hardcore", description: "Complete a level on Hard difficulty", rarity: "rare", icon: "lightning",
    check: (s) => s.hasHardModeWin },
  { id: "persistent", name: "Persistent", description: "Die 25 times total", rarity: "rare", icon: "skull",
    check: (s) => s.totalDeaths >= 25 },

  { id: "coin-hoarder", name: "Coin Hoarder", description: "Earn 5,000 coins total", rarity: "epic", icon: "coin",
    check: (s) => s.totalCoinsEarned >= 5000 },
  { id: "fashionista", name: "Fashionista", description: "Unlock 25 skins", rarity: "epic", icon: "mask",
    check: (s) => s.unlockedSkinCount >= 25 },
  { id: "almost-there", name: "Almost There", description: "Complete Level 99", rarity: "epic", icon: "flag",
    check: (s) => s.completedLevels.includes(99) },
  { id: "daredevil", name: "Daredevil", description: "Die 100 times total", rarity: "epic", icon: "skull",
    check: (s) => s.totalDeaths >= 100 },

  { id: "speed-demon", name: "Speed Demon", description: "Beat the game", rarity: "legendary", icon: "trophy",
    grantsSkin: "comet-runner", check: (s) => s.isGameCompleted },
  { id: "sky-conqueror", name: "Sky Conqueror", description: "Unlock 30 skins", rarity: "legendary", icon: "star",
    grantsSkin: "skyward-herald", check: (s) => s.unlockedSkinCount >= 30 },
  { id: "cling-master", name: "Cling Master", description: "Earn 10,000 coins total", rarity: "legendary", icon: "crown",
    grantsSkin: "wallcrawler-wisp", check: (s) => s.totalCoinsEarned >= 10000 },
  { id: "ice-cold", name: "Ice Cold", description: "Die 200 times total", rarity: "legendary", icon: "crown",
    grantsSkin: "glacial-drifter", check: (s) => s.totalDeaths >= 200 },

  // -1 so this fires the instant every OTHER skin is owned — it's the one
  // that grants the mythic skin, so requiring it to already be owned
  // first would make it permanently unreachable.
  { id: "bounce-king", name: "Bounce King", description: "Own every other skin in the game", rarity: "mythic", icon: "trophy",
    grantsSkin: "nebula-bouncer", check: (s) => s.unlockedSkinCount >= s.totalSkinCount - 1 },

  // ---------------------------------------------------------------
  // Per-level completions for most of 2-23 (the milestones above cover
  // 1/25/50/75/99/100 — rescaled to those fractions of the full 100-level
  // game rather than the original 25-level one; that rescale means levels
  // 6/13/19/24 no longer have their own achievement, which is fine — the
  // milestones' job is to mark quarter/half/three-quarter/finish, not to
  // guarantee unbroken per-level coverage). Rarity climbs with the level
  // number, same as the game's own difficulty curve. Common/rare ones
  // also pay a small coin bonus; epic and up are just bragging rights,
  // matching the existing milestones above.
  // ---------------------------------------------------------------
  { id: "second-step", name: "Second Step", description: "Complete Level 2", rarity: "common", icon: "flag",
    grantsCoins: 25, check: (s) => s.completedLevels.includes(2) },
  { id: "getting-traction", name: "Getting Traction", description: "Complete Level 3", rarity: "common", icon: "flag",
    grantsCoins: 25, check: (s) => s.completedLevels.includes(3) },
  { id: "fourth-wall", name: "Fourth Wall", description: "Complete Level 4", rarity: "common", icon: "flag",
    grantsCoins: 25, check: (s) => s.completedLevels.includes(4) },
  { id: "high-five", name: "High Five", description: "Complete Level 5", rarity: "common", icon: "flag",
    grantsCoins: 25, check: (s) => s.completedLevels.includes(5) },
  { id: "lucky-seven", name: "Lucky Seven", description: "Complete Level 7", rarity: "rare", icon: "flag",
    grantsCoins: 60, check: (s) => s.completedLevels.includes(7) },
  { id: "figure-eight", name: "Figure Eight", description: "Complete Level 8", rarity: "rare", icon: "flag",
    grantsCoins: 60, check: (s) => s.completedLevels.includes(8) },
  { id: "cloud-nine", name: "Cloud Nine", description: "Complete Level 9", rarity: "rare", icon: "flag",
    grantsCoins: 60, check: (s) => s.completedLevels.includes(9) },
  { id: "perfect-ten", name: "Perfect Ten", description: "Complete Level 10", rarity: "rare", icon: "flag",
    grantsCoins: 60, check: (s) => s.completedLevels.includes(10) },
  { id: "eleven-and-climbing", name: "Eleven and Climbing", description: "Complete Level 11", rarity: "rare", icon: "flag",
    grantsCoins: 60, check: (s) => s.completedLevels.includes(11) },
  { id: "dozen-down", name: "Dozen Down", description: "Complete Level 12", rarity: "rare", icon: "flag",
    grantsCoins: 60, check: (s) => s.completedLevels.includes(12) },
  { id: "fourteen-forward", name: "Fourteen Forward", description: "Complete Level 14", rarity: "epic", icon: "flag",
    check: (s) => s.completedLevels.includes(14) },
  { id: "fifteen-foothold", name: "Fifteen Foothold", description: "Complete Level 15", rarity: "epic", icon: "flag",
    check: (s) => s.completedLevels.includes(15) },
  { id: "sweet-sixteen", name: "Sweet Sixteen", description: "Complete Level 16", rarity: "epic", icon: "flag",
    check: (s) => s.completedLevels.includes(16) },
  { id: "seventeen-and-soaring", name: "Seventeen and Soaring", description: "Complete Level 17", rarity: "epic", icon: "flag",
    check: (s) => s.completedLevels.includes(17) },
  { id: "eighteen-ascending", name: "Eighteen Ascending", description: "Complete Level 18", rarity: "epic", icon: "flag",
    check: (s) => s.completedLevels.includes(18) },
  { id: "twenty-and-tenacious", name: "Twenty and Tenacious", description: "Complete Level 20", rarity: "legendary", icon: "flag",
    check: (s) => s.completedLevels.includes(20) },
  { id: "twenty-one-nerves-of-steel", name: "Nerves of Steel", description: "Complete Level 21", rarity: "legendary", icon: "flag",
    check: (s) => s.completedLevels.includes(21) },
  { id: "twenty-two-trials", name: "Twenty-Two Trials", description: "Complete Level 22", rarity: "legendary", icon: "flag",
    check: (s) => s.completedLevels.includes(22) },
  { id: "twenty-three-skyward", name: "Skyward Bound", description: "Complete Level 23", rarity: "legendary", icon: "flag",
    check: (s) => s.completedLevels.includes(23) },
  { id: "final-ascent", name: "Final Ascent", description: "Complete Level 100", rarity: "mythic", icon: "flag",
    check: (s) => s.completedLevels.includes(100) },

  // ---------------------------------------------------------------
  // More coin-total milestones, filling the gaps between the original
  // 100/1,000/5,000/10,000 thresholds and pushing well past them.
  // ---------------------------------------------------------------
  { id: "loose-change", name: "Loose Change", description: "Earn 250 coins total", rarity: "common", icon: "coin",
    grantsCoins: 25, check: (s) => s.totalCoinsEarned >= 250 },
  { id: "piggy-bank", name: "Piggy Bank", description: "Earn 500 coins total", rarity: "common", icon: "coin",
    grantsCoins: 25, check: (s) => s.totalCoinsEarned >= 500 },
  { id: "savings-streak", name: "Savings Streak", description: "Earn 750 coins total", rarity: "common", icon: "coin",
    grantsCoins: 25, check: (s) => s.totalCoinsEarned >= 750 },
  { id: "treasure-trove", name: "Treasure Trove", description: "Earn 1,500 coins total", rarity: "rare", icon: "coin",
    grantsCoins: 60, check: (s) => s.totalCoinsEarned >= 1500 },
  { id: "coin-connoisseur", name: "Coin Connoisseur", description: "Earn 2,000 coins total", rarity: "rare", icon: "coin",
    grantsCoins: 60, check: (s) => s.totalCoinsEarned >= 2000 },
  { id: "vault-builder", name: "Vault Builder", description: "Earn 3,000 coins total", rarity: "rare", icon: "coin",
    grantsCoins: 60, check: (s) => s.totalCoinsEarned >= 3000 },
  { id: "gold-rush", name: "Gold Rush", description: "Earn 4,000 coins total", rarity: "epic", icon: "coin",
    check: (s) => s.totalCoinsEarned >= 4000 },
  { id: "coin-baron", name: "Coin Baron", description: "Earn 6,000 coins total", rarity: "epic", icon: "coin",
    check: (s) => s.totalCoinsEarned >= 6000 },
  { id: "fortune-seeker", name: "Fortune Seeker", description: "Earn 7,500 coins total", rarity: "epic", icon: "coin",
    check: (s) => s.totalCoinsEarned >= 7500 },
  { id: "riches-untold", name: "Riches Untold", description: "Earn 8,500 coins total", rarity: "epic", icon: "coin",
    check: (s) => s.totalCoinsEarned >= 8500 },
  { id: "coin-tycoon", name: "Coin Tycoon", description: "Earn 12,000 coins total", rarity: "legendary", icon: "coin",
    check: (s) => s.totalCoinsEarned >= 12000 },
  { id: "midas-touch", name: "Midas Touch", description: "Earn 15,000 coins total", rarity: "legendary", icon: "coin",
    check: (s) => s.totalCoinsEarned >= 15000 },
  { id: "coin-emperor", name: "Coin Emperor", description: "Earn 20,000 coins total", rarity: "legendary", icon: "coin",
    check: (s) => s.totalCoinsEarned >= 20000 },
  { id: "galactic-fortune", name: "Galactic Fortune", description: "Earn 30,000 coins total", rarity: "legendary", icon: "coin",
    check: (s) => s.totalCoinsEarned >= 30000 },

  // ---------------------------------------------------------------
  // More skin-collection milestones, filling the gaps between the
  // original 2/10/25/30 thresholds (and the mythic "own them all").
  // ---------------------------------------------------------------
  { id: "getting-dressed", name: "Getting Dressed", description: "Unlock 5 skins", rarity: "common", icon: "mask",
    grantsCoins: 25, check: (s) => s.unlockedSkinCount >= 5 },
  { id: "wardrobe-growing", name: "Wardrobe Growing", description: "Unlock 15 skins", rarity: "rare", icon: "mask",
    grantsCoins: 60, check: (s) => s.unlockedSkinCount >= 15 },
  { id: "trendsetter", name: "Trendsetter", description: "Unlock 20 skins", rarity: "rare", icon: "mask",
    grantsCoins: 60, check: (s) => s.unlockedSkinCount >= 20 },
  { id: "closet-full", name: "Closet Full", description: "Unlock 35 skins", rarity: "epic", icon: "mask",
    check: (s) => s.unlockedSkinCount >= 35 },
  { id: "style-collector", name: "Style Collector", description: "Unlock 40 skins", rarity: "epic", icon: "mask",
    check: (s) => s.unlockedSkinCount >= 40 },
  { id: "runway-ready", name: "Runway Ready", description: "Unlock 45 skins", rarity: "legendary", icon: "mask",
    check: (s) => s.unlockedSkinCount >= 45 },
  { id: "icon-status", name: "Icon Status", description: "Unlock 50 skins", rarity: "legendary", icon: "mask",
    check: (s) => s.unlockedSkinCount >= 50 },
  { id: "nearly-everything", name: "Nearly Everything", description: "Unlock 60 skins", rarity: "mythic", icon: "mask",
    check: (s) => s.unlockedSkinCount >= 60 },

  // ---------------------------------------------------------------
  // More death-count milestones, filling the gaps between the original
  // 1/25/100/200 thresholds and pushing well past them.
  // ---------------------------------------------------------------
  { id: "rough-start", name: "Rough Start", description: "Die 5 times total", rarity: "common", icon: "skull",
    grantsCoins: 25, check: (s) => s.totalDeaths >= 5 },
  { id: "getting-the-hang-of-dying", name: "Getting the Hang of Dying", description: "Die 10 times total", rarity: "common", icon: "skull",
    grantsCoins: 25, check: (s) => s.totalDeaths >= 10 },
  { id: "frequent-flyer", name: "Frequent Flyer", description: "Die 50 times total", rarity: "rare", icon: "skull",
    grantsCoins: 60, check: (s) => s.totalDeaths >= 50 },
  { id: "bounce-back", name: "Bounce Back", description: "Die 75 times total", rarity: "rare", icon: "skull",
    grantsCoins: 60, check: (s) => s.totalDeaths >= 75 },
  { id: "glutton-for-punishment", name: "Glutton for Punishment", description: "Die 150 times total", rarity: "epic", icon: "skull",
    check: (s) => s.totalDeaths >= 150 },
  { id: "nine-lives-and-counting", name: "Nine Lives and Counting", description: "Die 300 times total", rarity: "epic", icon: "skull",
    check: (s) => s.totalDeaths >= 300 },
  { id: "death-defiant", name: "Death Defiant", description: "Die 500 times total", rarity: "legendary", icon: "skull",
    check: (s) => s.totalDeaths >= 500 },
  { id: "immortal-grind", name: "Immortal Grind", description: "Die 750 times total", rarity: "mythic", icon: "skull",
    check: (s) => s.totalDeaths >= 750 },
];

const StarshadeAchievements = (() => {
  const UNLOCKED_KEY = "starshadeUnlockedAchievements";

  function getUnlockedIds() {
    try {
      return JSON.parse(localStorage.getItem(UNLOCKED_KEY)) || [];
    } catch {
      return [];
    }
  }

  function isUnlocked(id) {
    return getUnlockedIds().includes(id);
  }

  function collectStats() {
    return {
      completedLevels: StarshadeEconomy.getCompletedLevels(),
      isGameCompleted: StarshadeEconomy.isGameCompleted(),
      totalCoinsEarned: StarshadeEconomy.getTotalCoinsEarned(),
      totalDeaths: StarshadeEconomy.getTotalDeaths(),
      hasHardModeWin: StarshadeEconomy.hasHardModeWin(),
      unlockedSkinCount: STARSHADE_SKINS.filter((sk) => StarshadeEconomy.isUnlocked(sk)).length,
      totalSkinCount: STARSHADE_SKINS.length,
    };
  }

  // Evaluates every not-yet-unlocked achievement against the current
  // stats snapshot, persists any newly met ones, grants their skin
  // reward if they have one, and returns the list of newly-unlocked
  // achievements (for the caller to pop up — see showPopup()). Safe to
  // call after any stat-changing action (level complete, coins earned,
  // skin purchased) since it's a no-op for anything already unlocked.
  function checkAll() {
    const unlocked = getUnlockedIds();
    const stats = collectStats();
    const newlyUnlocked = [];
    STARSHADE_ACHIEVEMENTS.forEach((ach) => {
      if (unlocked.includes(ach.id)) return;
      if (!ach.check(stats)) return;
      unlocked.push(ach.id);
      if (ach.grantsSkin) StarshadeEconomy.grantSkin(ach.grantsSkin);
      if (ach.grantsCoins) StarshadeEconomy.addCoins(ach.grantsCoins);
      newlyUnlocked.push(ach);
    });
    if (newlyUnlocked.length) {
      localStorage.setItem(UNLOCKED_KEY, JSON.stringify(unlocked));
    }
    return newlyUnlocked;
  }

  // Runs checkAll() and pops up a notification for each newly-unlocked
  // achievement, one call site any page can use after something that
  // might have unlocked one.
  function checkAndNotify() {
    const newlyUnlocked = checkAll();
    newlyUnlocked.forEach(showPopup);
    return newlyUnlocked;
  }

  return {
    getUnlockedIds,
    isUnlocked,
    collectStats,
    checkAll,
    checkAndNotify,
  };
})();

// -------------------------------------------------------------
// ICONS — every achievement badge is built from one of these glyphs
// (24x24 viewBox) plus a rarity-colored ring, all purple/blue/black.
// -------------------------------------------------------------
const ACHIEVEMENT_ICON_PATHS = {
  flag: '<path d="M6 3v18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" fill="none"/><path d="M6 4h11l-3 4 3 4H6z" fill="currentColor"/>',
  coin: '<circle cx="12" cy="12" r="7.5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M12 9v6M10.3 10.2c0-.9.8-1.5 1.7-1.5s1.7.5 1.7 1.3c0 1.8-3.4 1-3.4 2.8 0 .8.8 1.3 1.7 1.3s1.7-.6 1.7-1.5" stroke="currentColor" stroke-width="0.9" fill="none" stroke-linecap="round"/>',
  skull: '<ellipse cx="12" cy="10.5" rx="6.2" ry="5.8" fill="currentColor"/><rect x="8.5" y="14.5" width="7" height="4.5" rx="1.5" fill="currentColor"/><circle cx="9.6" cy="10" r="1.6" fill="#050012"/><circle cx="14.4" cy="10" r="1.6" fill="#050012"/><path d="M11 17.2v2M13 17.2v2" stroke="#050012" stroke-width="1" stroke-linecap="round"/>',
  lightning: '<path d="M13 2 4 14h6l-1 8 9-12h-6z" fill="currentColor"/>',
  mask: '<path d="M4 8c2-3 5-4 8-4s6 1 8 4c0 6-3 11-8 11S4 14 4 8Z" fill="currentColor"/><ellipse cx="9" cy="9.5" rx="1.6" ry="2" fill="#050012"/><ellipse cx="15" cy="9.5" rx="1.6" ry="2" fill="#050012"/><path d="M9 15c1.4 1 4.6 1 6 0" stroke="#050012" stroke-width="1.2" fill="none" stroke-linecap="round"/>',
  trophy: '<path d="M7 4h10v5a5 5 0 0 1-10 0z" fill="currentColor"/><path d="M7 5H4a3 3 0 0 0 3 5M17 5h3a3 3 0 0 1-3 5" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="10.5" y="14" width="3" height="4" fill="currentColor"/><rect x="7.5" y="18" width="9" height="2.4" rx="1" fill="currentColor"/>',
  star: '<path d="M12 2.5l2.9 6 6.6.8-4.9 4.6 1.3 6.5L12 17l-5.9 3.4 1.3-6.5L2.5 9.3l6.6-.8Z" fill="currentColor"/>',
  crown: '<path d="M3 18h18l-1.5-9-4 4-3.5-6-3.5 6-4-4Z" fill="currentColor"/><rect x="3" y="19" width="18" height="2.2" rx="1" fill="currentColor"/>',
};

const ACHIEVEMENT_RARITY_COLORS = {
  common: { ring: "#6c7aa0", glow: "rgba(108, 122, 160, 0.55)" },
  rare: { ring: "#4fb3e0", glow: "rgba(79, 179, 224, 0.6)" },
  epic: { ring: "#a042d3", glow: "rgba(160, 66, 211, 0.65)" },
  legendary: { ring: "#8a5cff", glow: "rgba(138, 92, 255, 0.75)" },
  mythic: { ring: "#e4d9ff", glow: "rgba(201, 182, 255, 0.9)" },
};

// Builds the badge SVG for one achievement — a rarity-colored ring/glow
// behind whichever glyph it uses, all rendered in the same purple/blue/
// black family regardless of rarity (rarity changes brightness/glow
// intensity, never hue, per the game's existing color language).
function achievementIconSVG(achievement, options = {}) {
  const size = options.size || 48;
  const locked = !!options.locked;
  const colors = ACHIEVEMENT_RARITY_COLORS[achievement.rarity] || ACHIEVEMENT_RARITY_COLORS.common;
  const glyph = ACHIEVEMENT_ICON_PATHS[achievement.icon] || ACHIEVEMENT_ICON_PATHS.star;
  const ringColor = locked ? "#3a3560" : colors.ring;
  const glowColor = locked ? "rgba(60,55,100,0.3)" : colors.glow;
  const bg = locked ? "#181430" : "#120a2e";
  return `
    <svg viewBox="0 0 48 48" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="21" fill="${bg}" stroke="${ringColor}" stroke-width="2" />
      <circle cx="24" cy="24" r="21" fill="none" stroke="${glowColor}" stroke-width="5" opacity="0.5" />
      <g transform="translate(12, 12)" color="${locked ? "#4a4470" : "#ffffff"}" opacity="${locked ? 0.5 : 1}">
        ${glyph}
      </g>
    </svg>
  `;
}

// -------------------------------------------------------------
// POPUP NOTIFICATIONS — a vertical stack (like a real OS notification
// center) so several achievements unlocking at once queue up instead of
// overlapping each other. Any page that includes this file can call
// showPopup() and get the same look/behavior, with its own container
// created lazily on first use.
// -------------------------------------------------------------
let achievementPopupContainer = null;

function getAchievementPopupContainer() {
  if (achievementPopupContainer && document.body.contains(achievementPopupContainer)) {
    return achievementPopupContainer;
  }
  const container = document.createElement("div");
  container.id = "achievement-popup-stack";
  document.body.appendChild(container);
  achievementPopupContainer = container;
  return container;
}

function showPopup(achievement) {
  const container = getAchievementPopupContainer();
  const card = document.createElement("div");
  card.className = "achievement-popup";
  card.innerHTML = `
    <div class="achievement-popup-icon">${achievementIconSVG(achievement, { size: 44 })}</div>
    <div class="achievement-popup-text">
      <div class="achievement-popup-label">Achievement Unlocked</div>
      <div class="achievement-popup-name">${achievement.name}</div>
      <div class="achievement-popup-desc">${achievement.description}</div>
    </div>
  `;
  // Each popup is its own flow item in a column — the stack itself (see
  // achievements.css) handles keeping them from overlapping; this only
  // has to handle one card's own enter/exit.
  container.appendChild(card);
  requestAnimationFrame(() => card.classList.add("show"));
  const dismiss = () => {
    card.classList.remove("show");
    card.classList.add("hide");
    setTimeout(() => card.remove(), 400);
  };
  setTimeout(dismiss, 4500);
  card.addEventListener("click", dismiss);
}
