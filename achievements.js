// Gallery/grid UI for the achievements defined in achievementsData.js —
// mirrors skins.js's relationship to skinsData.js (data+logic in one
// shared file, page-specific rendering in this one).
//
// Wrapped in an IIFE so every name here stays local — this script is also
// loaded on game.html (see the pause menu's Achievements overlay), which
// shares one global scope with game.js/settings.js/levels.js as plain
// classic scripts; a repeated top-level `const`/`let` name throws a
// SyntaxError (see docs/architecture.md). Doesn't change anything about
// how this behaves on the standalone achievements.html.
(function () {

const grid = document.getElementById("achievements-grid");
const progressEl = document.getElementById("achievements-progress");

function renderAchievements() {
  // Re-check on every render (not just on page load) — e.g. an
  // achievement based on total coins could have been earned on a
  // previous page and only now gets reflected here. revalidateUnlocked()
  // runs first so a stale unlock (see game.js's call at startup) never
  // flashes as "unlocked" for a frame before checkAll() would otherwise
  // fix it.
  StarshadeAchievements.revalidateUnlocked();
  StarshadeAchievements.checkAll();
  const unlockedIds = StarshadeAchievements.getUnlockedIds();

  grid.innerHTML = "";
  STARSHADE_ACHIEVEMENTS.forEach((achievement) => {
    const unlocked = unlockedIds.includes(achievement.id);
    const card = document.createElement("div");
    card.className = `achievement-card ${unlocked ? "unlocked" : "locked"}`;

    const icon = document.createElement("div");
    icon.className = "achievement-card-icon";
    icon.innerHTML = achievementIconSVG(achievement, { size: 56, locked: !unlocked });

    const body = document.createElement("div");
    body.className = "achievement-card-body";
    const rarityColor = (ACHIEVEMENT_RARITY_COLORS[achievement.rarity] || ACHIEVEMENT_RARITY_COLORS.common).ring;
    const rewardLine = achievement.grantsSkin
      ? `<div class="achievement-card-reward">Reward: a signature skin</div>`
      : achievement.grantsCoins
      ? `<div class="achievement-card-reward">Reward: +${achievement.grantsCoins} coins</div>`
      : "";
    body.innerHTML = `
      <p class="achievement-card-name">${achievement.name}</p>
      <p class="achievement-card-desc">${achievement.description}</p>
      <span class="achievement-card-rarity" style="--rarity-color: ${rarityColor}">${achievement.rarity}</span>
      ${rewardLine}
    `;

    card.appendChild(icon);
    card.appendChild(body);
    grid.appendChild(card);
  });

  progressEl.textContent = `${unlockedIds.length} / ${STARSHADE_ACHIEVEMENTS.length} unlocked`;
}

// Embedded in game.html: settings.js already owns the literal id
// "back-button" for its own overlay, so this one is
// "achievements-back-button" instead — falling back to "back-button" is
// what makes this same code work unchanged on the standalone
// achievements.html, which has no such element.
const achievementsBackButton =
  document.getElementById("achievements-back-button") ||
  document.getElementById("back-button");

achievementsBackButton.addEventListener("click", () => {
  if (typeof window.closeAchievementsOverlay === "function") {
    window.closeAchievementsOverlay();
  } else {
    window.location.href = "index.html";
  }
});

// Top-corner back arrow (standalone achievements.html only — game.html's
// embedded overlay has no such element).
const topBackButton = document.getElementById("top-back-button");
if (topBackButton) {
  topBackButton.addEventListener("click", () => achievementsBackButton.click());
}

// Exposed so game.js can re-run this each time the overlay opens (an
// achievement could have unlocked since the last time it was shown).
window.renderAchievementsOverlay = renderAchievements;

renderAchievements();

})();
