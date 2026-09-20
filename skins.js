// Shop UI for the skins defined in skinsData.js (STARSHADE_SKINS +
// StarshadeEconomy) — this used to be a standalone carousel with its own
// disconnected skin list; now it reads/writes the same economy game.js
// uses, so buying and equipping here actually changes the in-game player.

let currentIndex = 0;

const track = document.getElementById("showcase-track");
const dotsContainer = document.getElementById("dots");
const coinBalanceEl = document.getElementById("coin-balance");

function updateCoinBalance() {
  coinBalanceEl.textContent = `${StarshadeEconomy.getCoins()} Coins`;
}

// Renders a skin's shape into a container div using plain CSS (no canvas
// needed here — the shop preview doesn't need to match pixel-for-pixel,
// just clearly communicate square/circle/triangle/image).
function applySkinShape(el, skin) {
  el.className = "skin-preview";
  el.style.clipPath = "";
  el.style.borderRadius = "";
  el.style.animation = "";

  if (skin.shape === "image" && skin.image) {
    el.style.backgroundImage = `url('${skin.image}')`;
    el.style.background = "";
    el.classList.add("shape-circle");
  } else {
    el.style.backgroundImage = "";
    el.style.background = skin.preview;
    if (skin.shape === "circle") {
      el.classList.add("shape-circle");
    } else if (skin.shape === "triangle") {
      el.classList.add("shape-triangle");
    } else {
      el.classList.add("shape-square");
    }
  }

  if (skin.animated) el.classList.add("shape-animated");
}

// A real SVG element (see renderSkin()) rather than a unicode "🔒" glyph
// — crisp at any size, and themed to the game's purple/blue/black look
// instead of whatever a given OS/browser's default emoji lock looks like.
const LOCK_ICON_SVG = `
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="11" width="14" height="10" rx="2.5" fill="#1e0f3f" stroke="#9b86ff" stroke-width="1.4" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" fill="none" stroke="#9b86ff" stroke-width="1.8" stroke-linecap="round" />
    <circle cx="12" cy="15" r="1.5" fill="#9b86ff" />
    <rect x="11.25" y="15.3" width="1.5" height="3.2" rx="0.75" fill="#9b86ff" />
  </svg>
`;

// Purple/blue/black throughout, per rarity tier — see skinsData.js's
// `rarity` field. Just a badge color; it doesn't gate anything.
const RARITY_COLORS = {
  common: "#7c88b8",
  rare: "#4fb3e0",
  epic: "#a042d3",
  legendary: "#8a5cff",
  mythic: "#c9b6ff",
};

function describeUnlock(skin, unlocked) {
  if (skin.unlockType === "free") return "Starting skin";
  if (skin.unlockType === "coins") {
    return unlocked ? "Owned" : `${skin.cost} Coins`;
  }
  // 'completion' and 'achievement' skins share this path — both show
  // "Owned" once granted, and their `achievement` string (the thing that
  // grants them) otherwise.
  if (unlocked) return "Owned";
  return skin.achievement || "Beat the game to unlock";
}

function renderSkin(index) {
  const skin = STARSHADE_SKINS[index];
  const unlocked = StarshadeEconomy.isUnlocked(skin);
  const equipped = StarshadeEconomy.getEquippedSkinId() === skin.id;
  const coins = StarshadeEconomy.getCoins();
  const canAfford = skin.unlockType === "coins" && coins >= skin.cost;

  track.innerHTML = "";
  const card = document.createElement("div");
  card.className = "skin-card";
  card.style.setProperty("--glow", skin.glow || "rgba(160,66,211,0.5)");

  const preview = document.createElement("div");
  applySkinShape(preview, skin);
  if (!unlocked) {
    preview.classList.add("locked");
    const lockBadge = document.createElement("div");
    lockBadge.className = "skin-lock-badge";
    lockBadge.innerHTML = LOCK_ICON_SVG;
    preview.appendChild(lockBadge);
  }

  const info = document.createElement("div");
  info.className = "skin-info";
  const rarityColor = RARITY_COLORS[skin.rarity] || RARITY_COLORS.common;
  const rarityLabel = skin.rarity
    ? `<span class="rarity-badge" style="--rarity-color: ${rarityColor}">${skin.rarity}</span>`
    : "";
  info.innerHTML = `<h2>${skin.name}</h2>${rarityLabel}<p><span class="coins">${describeUnlock(skin, unlocked)}</span></p>`;

  const actionButton = document.createElement("button");
  actionButton.className = "shop-action-button";
  if (equipped) {
    actionButton.textContent = "Equipped";
    actionButton.disabled = true;
  } else if (unlocked) {
    actionButton.textContent = "Equip";
    actionButton.addEventListener("click", () => {
      StarshadeEconomy.setEquippedSkinId(skin.id);
      renderSkin(currentIndex);
    });
  } else if (skin.unlockType === "coins") {
    actionButton.textContent = canAfford ? "Buy" : "Not enough coins";
    actionButton.disabled = !canAfford;
    actionButton.addEventListener("click", () => {
      if (StarshadeEconomy.unlockWithCoins(skin)) {
        updateCoinBalance();
        StarshadeAchievements.checkAndNotify();
        renderSkin(currentIndex);
      }
    });
  } else {
    actionButton.textContent = "Locked";
    actionButton.disabled = true;
  }

  card.appendChild(preview);
  card.appendChild(info);
  card.appendChild(actionButton);
  track.appendChild(card);

  // Re-trigger the CSS entrance animation on every render.
  card.classList.remove("enter");
  requestAnimationFrame(() => card.classList.add("enter"));

  renderDots(index);
  updateCoinBalance();
}

function renderDots(activeIndex) {
  dotsContainer.innerHTML = "";
  STARSHADE_SKINS.forEach((skin, index) => {
    const dot = document.createElement("button");
    dot.className = "dot" + (index === activeIndex ? " active" : "");
    if (StarshadeEconomy.isUnlocked(skin)) dot.classList.add("owned");
    dot.setAttribute("aria-label", `Show ${skin.name}`);
    dot.addEventListener("click", () => goTo(index));
    dotsContainer.appendChild(dot);
  });
}

function goTo(index) {
  currentIndex = (index + STARSHADE_SKINS.length) % STARSHADE_SKINS.length;
  renderSkin(currentIndex);
}

document.getElementById("prev-button").addEventListener("click", () => {
  goTo(currentIndex - 1);
});

document.getElementById("next-button").addEventListener("click", () => {
  goTo(currentIndex + 1);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") goTo(currentIndex - 1);
  if (e.key === "ArrowRight") goTo(currentIndex + 1);
});

document.getElementById("back-button").addEventListener("click", () => {
  window.location.href = "index.html";
});

// Top-corner back arrow — delegates to the handler above.
document.getElementById("top-back-button").addEventListener("click", () => {
  document.getElementById("back-button").click();
});

// Catches anything already earned before this page loaded (coins spent
// elsewhere, levels completed since the last visit here) rather than only
// reacting to a purchase made on this page.
StarshadeAchievements.checkAndNotify();

// Start on the currently-equipped skin rather than always the first.
const equippedIndex = STARSHADE_SKINS.findIndex(
  (s) => s.id === StarshadeEconomy.getEquippedSkinId()
);
renderSkin(equippedIndex >= 0 ? equippedIndex : 0);
