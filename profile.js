// Player Profile overlay — pulls together identity (display name, equipped
// skin), the "journey" (level progress), and the stat/achievement/skin
// counts that used to each live on a separate page into one place, so a
// player has a single "this is me, this is what I've done" screen instead
// of piecing it together from three different menus. See
// docs/design-standards.md's personalization/hook section for why.
//
// Wrapped in an IIFE so every name here stays local — this script is only
// ever loaded on game.html (the pause menu's Profile overlay), which
// shares one global scope with game.js/settings.js/levels.js/achievements.js
// as plain classic scripts; a repeated top-level `const`/`let` name throws
// a SyntaxError (see docs/architecture.md).
(function () {

const nameEl = document.getElementById("profile-name");
const swatchEl = document.getElementById("profile-skin-swatch");
const journeyLabelEl = document.getElementById("profile-journey-label");
const journeyFillEl = document.getElementById("profile-journey-fill");
const statGridEl = document.getElementById("profile-stat-grid");

// Minimal, local re-implementation of skins.js's applySkinShape() —
// duplicated rather than shared because skins.js/skins.css aren't loaded
// on game.html (this overlay only needs a small static swatch, not the
// full shop carousel), so pulling those in would be a bigger dependency
// than the few lines this actually needs.
function renderSkinSwatch(el, skin) {
  el.className = "profile-skin-swatch";
  el.style.backgroundImage = "";
  el.style.background = "";
  if (skin.shape === "image" && skin.image) {
    el.style.backgroundImage = `url('${skin.image}')`;
    el.classList.add("shape-circle");
  } else {
    el.style.background = skin.preview || skin.fill || "#8a5cff";
    el.classList.add(
      skin.shape === "circle"
        ? "shape-circle"
        : skin.shape === "triangle"
        ? "shape-triangle"
        : "shape-square"
    );
  }
}

// One row of the stat grid. `value` is already formatted (a string) so
// callers can decide "12 / 100" vs "1,250" vs "3" per stat without this
// needing to know the difference.
function statCard(label, value) {
  const card = document.createElement("div");
  card.className = "profile-stat-card";
  card.innerHTML = `
    <div class="profile-stat-value">${value}</div>
    <div class="profile-stat-label">${label}</div>
  `;
  return card;
}

function renderProfile() {
  // Same "don't trust a stale unlock" reasoning as achievements.js's
  // renderAchievements() — coins/completions can change on another page
  // and this overlay might not have been re-rendered since.
  StarshadeAchievements.revalidateUnlocked();
  StarshadeAchievements.checkAll();

  const displayName = (safeLocalStorageGet("playerName") || "").trim() || "Explorer";
  nameEl.textContent = displayName;

  renderSkinSwatch(swatchEl, StarshadeEconomy.getEquippedSkin());

  const totalLevels = typeof TOTAL_LEVELS === "number" ? TOTAL_LEVELS : 100;
  const completed = StarshadeEconomy.getCompletedLevels();
  const highestCompleted = completed.length ? Math.max(...completed) : 0;
  const journeyLevel = Math.min(totalLevels, Math.max(highestCompleted, currentLevel || 1));
  journeyLabelEl.textContent = StarshadeEconomy.isGameCompleted()
    ? `Starshade complete — ${completed.length} / ${totalLevels} levels`
    : `Level ${journeyLevel} of ${totalLevels}`;
  journeyFillEl.style.width = `${Math.round((completed.length / totalLevels) * 100)}%`;

  const stats = StarshadeAchievements.collectStats();
  const unlockedAchievements = StarshadeAchievements.getUnlockedIds().length;
  const totalAchievements = STARSHADE_ACHIEVEMENTS.length;

  statGridEl.innerHTML = "";
  [
    statCard("Levels completed", `${stats.completedLevels.length} / ${totalLevels}`),
    statCard("Coins earned (total)", stats.totalCoinsEarned.toLocaleString()),
    statCard("Coins on hand", StarshadeEconomy.getCoins().toLocaleString()),
    statCard("Skins unlocked", `${stats.unlockedSkinCount} / ${stats.totalSkinCount}`),
    statCard("Achievements", `${unlockedAchievements} / ${totalAchievements}`),
    statCard("Deaths", stats.totalDeaths.toLocaleString()),
  ].forEach((card) => statGridEl.appendChild(card));
}

const profileBackButton = document.getElementById("profile-back-button");
profileBackButton.addEventListener("click", () => {
  if (typeof window.closeProfileOverlay === "function") window.closeProfileOverlay();
});

// Exposed so game.js's openProfileOverlay() can re-run this each time the
// overlay opens — state it reads can have changed since the last time it
// was shown (or it may never have rendered this page load at all).
window.renderProfileOverlay = renderProfile;

})();
