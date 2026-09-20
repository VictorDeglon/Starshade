// Shop overlay — Skins (gallery + custom builder), Particles, Skills
// (abilities), and Power-Ups. Reads/writes the same StarshadeEconomy
// (skinsData.js) every other screen uses, plus the catalogs in
// shopData.js, so buying/equipping here actually changes what renders and
// how the player controls in-game.
//
// Unlike settings.js/levels.js/achievements.js, this has no standalone
// page to also support (skins.html is retired — see docs/architecture.md)
// — it only ever runs embedded in index.html, so there's no
// isEmbeddedInGame branching here. Still wrapped in an IIFE so its
// top-level names can't collide with game.js's or the other overlay
// scripts' (see their own top comments for why that matters on a page
// where every script shares one global scope).
(function () {
  let currentSkinIndex = 0;

  const track = document.getElementById("showcase-track");
  const dotsContainer = document.getElementById("dots");
  const coinBalanceEl = document.getElementById("shop-coin-balance");

  const RARITY_COLORS = {
    common: "#7c88b8",
    rare: "#4fb3e0",
    epic: "#a042d3",
    legendary: "#8a5cff",
    mythic: "#c9b6ff",
    custom: "#ffcf4d",
  };

  function updateCoinBalance() {
    coinBalanceEl.textContent = `${StarshadeEconomy.getCoins()} Coins`;
  }

  // -----------------------------------------------------------
  // SKINS — gallery (same carousel approach the old standalone skins.js
  // used) reading STARSHADE_SKINS directly; custom skins live in their own
  // sub-tab below instead of mixed into this list.
  // -----------------------------------------------------------
  function applySkinShape(el, skin) {
    el.className = "skin-preview";
    el.style.clipPath = "";
    el.style.borderRadius = "";
    el.style.animation = "";
    el.style.borderColor = "";

    if (skin.shape === "image" && skin.image) {
      el.style.backgroundImage = `url('${skin.image}')`;
      el.style.background = "";
      el.classList.add("shape-circle");
    } else {
      el.style.backgroundImage = "";
      el.style.background = skin.preview || skin.fill || "";
      if (skin.shape === "circle") el.classList.add("shape-circle");
      else if (skin.shape === "triangle") el.classList.add("shape-triangle");
      else el.classList.add("shape-square");
    }
    if (skin.animated) el.classList.add("shape-animated");
  }

  const LOCK_ICON_SVG = `
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="11" width="14" height="10" rx="2.5" fill="#1e0f3f" stroke="#9b86ff" stroke-width="1.4" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" fill="none" stroke="#9b86ff" stroke-width="1.8" stroke-linecap="round" />
      <circle cx="12" cy="15" r="1.5" fill="#9b86ff" />
      <rect x="11.25" y="15.3" width="1.5" height="3.2" rx="0.75" fill="#9b86ff" />
    </svg>
  `;

  function describeUnlock(skin, unlocked) {
    if (skin.unlockType === "free") return "Starting skin";
    if (skin.unlockType === "coins") return unlocked ? "Owned" : `${skin.cost} Coins`;
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
        renderSkin(currentSkinIndex);
        renderSavedCustomSkins();
      });
    } else if (skin.unlockType === "coins") {
      actionButton.textContent = canAfford ? "Buy" : "Not enough coins";
      actionButton.disabled = !canAfford;
      actionButton.addEventListener("click", () => {
        if (StarshadeEconomy.unlockWithCoins(skin)) {
          updateCoinBalance();
          if (window.StarshadeAchievements) StarshadeAchievements.checkAndNotify();
          renderSkin(currentSkinIndex);
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
      dot.addEventListener("click", () => goToSkin(index));
      dotsContainer.appendChild(dot);
    });
  }

  function goToSkin(index) {
    currentSkinIndex = (index + STARSHADE_SKINS.length) % STARSHADE_SKINS.length;
    renderSkin(currentSkinIndex);
  }

  document.getElementById("prev-button").addEventListener("click", () => goToSkin(currentSkinIndex - 1));
  document.getElementById("next-button").addEventListener("click", () => goToSkin(currentSkinIndex + 1));

  // -----------------------------------------------------------
  // GENERIC GRID — Particles / Skills / Power-Ups tabs. All three share
  // the same unlockType/cost shape as a skin (see shopData.js), just
  // against StarshadeEconomy's per-category accessors instead of the
  // skin-specific ones above.
  // -----------------------------------------------------------
  const GRID_KINDS = {
    particle: {
      grid: "particles-grid",
      catalog: () => STARSHADE_PARTICLES,
      isUnlocked: StarshadeEconomy.isParticleUnlocked,
      unlock: StarshadeEconomy.unlockParticleWithCoins,
      getEquippedId: StarshadeEconomy.getEquippedParticleId,
      setEquippedId: StarshadeEconomy.setEquippedParticleId,
    },
    ability: {
      grid: "abilities-grid",
      catalog: () => STARSHADE_ABILITIES,
      isUnlocked: StarshadeEconomy.isAbilityUnlocked,
      unlock: StarshadeEconomy.unlockAbilityWithCoins,
      getEquippedId: StarshadeEconomy.getEquippedAbilityId,
      setEquippedId: StarshadeEconomy.setEquippedAbilityId,
    },
    powerup: {
      grid: "powerups-grid",
      catalog: () => STARSHADE_POWERUPS,
      isUnlocked: StarshadeEconomy.isPowerUpUnlocked,
      unlock: StarshadeEconomy.unlockPowerUpWithCoins,
      getEquippedId: StarshadeEconomy.getEquippedPowerUpId,
      setEquippedId: StarshadeEconomy.setEquippedPowerUpId,
    },
  };

  function renderGenericGrid(kind) {
    const config = GRID_KINDS[kind];
    const gridEl = document.getElementById(config.grid);
    if (!gridEl) return;
    const equippedId = config.getEquippedId();
    const coins = StarshadeEconomy.getCoins();

    gridEl.innerHTML = "";
    config.catalog().forEach((item) => {
      const unlocked = config.isUnlocked(item);
      const equipped = unlocked && equippedId === item.id;
      const canAfford = item.unlockType === "coins" && coins >= item.cost;
      const rarityColor = RARITY_COLORS[item.rarity] || RARITY_COLORS.common;

      const card = document.createElement("div");
      card.className = "shop-item-card";
      card.style.setProperty("--glow", rarityColor);

      const swatch = document.createElement("div");
      swatch.className = "shop-item-swatch";
      swatch.style.background = item.preview || rarityColor;
      if (!unlocked) swatch.style.filter = "grayscale(0.6) brightness(0.7)";
      card.appendChild(swatch);

      const h3 = document.createElement("h3");
      h3.textContent = item.name;
      card.appendChild(h3);

      if (item.rarity) {
        const badge = document.createElement("span");
        badge.className = "rarity-badge";
        badge.style.setProperty("--rarity-color", rarityColor);
        badge.textContent = item.rarity;
        card.appendChild(badge);
      }

      if (item.description) {
        const desc = document.createElement("p");
        desc.className = "shop-item-desc";
        desc.textContent = item.description;
        card.appendChild(desc);
      }

      const btn = document.createElement("button");
      btn.className = "shop-action-button";
      if (equipped) {
        btn.textContent = "Unequip";
        btn.addEventListener("click", () => {
          config.setEquippedId("");
          renderGenericGrid(kind);
        });
      } else if (unlocked) {
        btn.textContent = "Equip";
        btn.addEventListener("click", () => {
          config.setEquippedId(item.id);
          renderGenericGrid(kind);
        });
      } else if (item.unlockType === "coins") {
        btn.textContent = canAfford ? `Buy — ${item.cost}` : "Not enough coins";
        btn.disabled = !canAfford;
        btn.addEventListener("click", () => {
          if (config.unlock(item)) {
            updateCoinBalance();
            renderGenericGrid(kind);
          }
        });
      } else {
        btn.textContent = item.unlockType === "completion" ? "Beat the game to unlock" : "Locked";
        btn.disabled = true;
      }
      card.appendChild(btn);
      gridEl.appendChild(card);
    });
  }

  // -----------------------------------------------------------
  // CUSTOM SKIN BUILDER
  // -----------------------------------------------------------
  const builderState = { shape: "square", fill: "#a042d3", stroke: "#5d1a91", glow: "#a042d3", trail: false };

  function refreshBuilderPreview() {
    const el = document.getElementById("builder-preview");
    if (!el) return;
    el.className = "skin-preview shape-" + builderState.shape;
    el.style.background = builderState.fill;
    el.style.borderColor = builderState.stroke;
    el.style.setProperty("--glow", builderState.glow);
  }

  document.querySelectorAll(".builder-shape-option").forEach((btn) => {
    if (btn.dataset.shape === builderState.shape) btn.classList.add("active");
    btn.addEventListener("click", () => {
      builderState.shape = btn.dataset.shape;
      document.querySelectorAll(".builder-shape-option").forEach((b) => b.classList.toggle("active", b === btn));
      refreshBuilderPreview();
    });
  });

  const fillInput = document.getElementById("builder-fill-color");
  const strokeInput = document.getElementById("builder-stroke-color");
  const glowInput = document.getElementById("builder-glow-color");
  const trailInput = document.getElementById("builder-trail");
  if (fillInput) fillInput.addEventListener("input", (e) => { builderState.fill = e.target.value; refreshBuilderPreview(); });
  if (strokeInput) strokeInput.addEventListener("input", (e) => { builderState.stroke = e.target.value; refreshBuilderPreview(); });
  if (glowInput) glowInput.addEventListener("input", (e) => { builderState.glow = e.target.value; refreshBuilderPreview(); });
  if (trailInput) trailInput.addEventListener("change", (e) => { builderState.trail = e.target.checked; });

  function renderSavedCustomSkins() {
    const list = document.getElementById("builder-saved-list");
    if (!list) return;
    list.innerHTML = "";
    const equippedId = StarshadeEconomy.getEquippedSkinId();
    StarshadeEconomy.getCustomSkins().forEach((skin) => {
      const chip = document.createElement("button");
      chip.className = "builder-saved-item" + (skin.id === equippedId ? " equipped" : "");
      chip.textContent = skin.name + (skin.id === equippedId ? " ✓" : "");
      chip.title = "Click to equip, shift-click to delete";
      chip.addEventListener("click", (e) => {
        if (e.shiftKey) {
          StarshadeEconomy.deleteCustomSkin(skin.id);
        } else {
          StarshadeEconomy.setEquippedSkinId(skin.id);
        }
        renderSavedCustomSkins();
        renderSkin(currentSkinIndex);
      });
      list.appendChild(chip);
    });
  }

  const saveButton = document.getElementById("builder-save-button");
  if (saveButton) {
    saveButton.addEventListener("click", () => {
      const nameInput = document.getElementById("builder-name");
      const name = (nameInput.value || "").trim() || "My Skin";
      const skin = StarshadeEconomy.saveCustomSkin({ ...builderState, name });
      StarshadeEconomy.setEquippedSkinId(skin.id);
      nameInput.value = "";
      renderSavedCustomSkins();
    });
  }

  // -----------------------------------------------------------
  // TABS
  // -----------------------------------------------------------
  document.querySelectorAll(".shop-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".shop-tab").forEach((t) => t.setAttribute("aria-selected", t === tab ? "true" : "false"));
      document.querySelectorAll(".shop-tab-panel").forEach((p) => {
        p.classList.toggle("hidden", p.dataset.panel !== tab.dataset.tab);
      });
    });
  });

  document.querySelectorAll(".shop-subtab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".shop-subtab").forEach((t) => t.classList.toggle("active", t === tab));
      document.querySelectorAll(".shop-subtab-panel").forEach((p) => {
        p.classList.toggle("hidden", p.dataset.subpanel !== tab.dataset.subtab);
      });
    });
  });

  // Called by game.js's openShopOverlay() every time the overlay is shown
  // — coin balance/unlock state can have changed since the last render (or
  // this may be the first render this page load), so nothing here is
  // trusted to still be fresh.
  function renderShopOverlay() {
    const equippedIndex = STARSHADE_SKINS.findIndex((s) => s.id === StarshadeEconomy.getEquippedSkinId());
    currentSkinIndex = equippedIndex >= 0 ? equippedIndex : 0;
    renderSkin(currentSkinIndex);
    renderGenericGrid("particle");
    renderGenericGrid("ability");
    renderGenericGrid("powerup");
    refreshBuilderPreview();
    renderSavedCustomSkins();
    updateCoinBalance();
  }
  window.renderShopOverlay = renderShopOverlay;

  renderShopOverlay();
})();
