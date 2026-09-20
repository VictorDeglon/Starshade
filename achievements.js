// Gallery/grid UI for the achievements defined in achievementsData.js —
// mirrors skins.js's relationship to skinsData.js (data+logic in one
// shared file, page-specific rendering in this one).

const grid = document.getElementById("achievements-grid");
const progressEl = document.getElementById("achievements-progress");

function renderAchievements() {
  // Re-check on every render (not just on page load) — e.g. an
  // achievement based on total coins could have been earned on a
  // previous page and only now gets reflected here.
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

document.getElementById("back-button").addEventListener("click", () => {
  window.location.href = "index.html";
});

// Top-corner back arrow — delegates to the handler above.
document.getElementById("top-back-button").addEventListener("click", () => {
  document.getElementById("back-button").click();
});

renderAchievements();
