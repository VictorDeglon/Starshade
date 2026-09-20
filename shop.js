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
    // The persistent top-right coin HUD (game.js) needs to reflect a Shop
    // purchase immediately too, not just this overlay's own balance line.
    if (typeof window.updateCoinHud === "function") window.updateCoinHud();
  }

  // A brief "claimed" flourish right after a successful purchase — a
  // quick scale-pop plus a ring of particles bursting out from behind the
  // icon (pure CSS, see shop.css's .shop-item-card.claiming). Every grid
  // re-renders its cards from scratch on any change (simplest way to keep
  // lock-state/afford-state always correct — see renderSkinsGrid()/
  // renderGenericGrid()), so the *element* a purchase click landed on is
  // already gone by the time the animation would play; recording just the
  // id here and checking it while building the fresh card is what lets
  // the newly-built card pick the animation up instead.
  let recentlyClaimedId = null;
  function markRecentlyClaimed(id) {
    recentlyClaimedId = id;
    setTimeout(() => {
      if (recentlyClaimedId === id) recentlyClaimedId = null;
    }, 700);
  }
  function applyClaimAnimationIfRecent(cardEl, id) {
    if (id !== recentlyClaimedId) return;
    cardEl.classList.add("claiming");
  }

  // -----------------------------------------------------------
  // SKINS — gallery (same carousel approach the old standalone skins.js
  // used) reading STARSHADE_SKINS directly; custom skins live in their own
  // sub-tab below instead of mixed into this list.
  // -----------------------------------------------------------
  // baseClass defaults to "skin-preview" (the custom-builder's own big
  // preview swatch) — the skins grid below passes "shop-item-swatch"
  // instead so this doesn't stomp the grid-card sizing/border that class
  // provides; el.className is reset to exactly baseClass either way
  // since this can run more than once on the same element as its shape
  // changes (the builder preview) and stale shape-* classes shouldn't
  // accumulate.
  function applySkinShape(el, skin, baseClass) {
    el.className = baseClass || "skin-preview";
    el.style.clipPath = "";
    el.style.borderRadius = "";
    el.style.animation = "";
    el.style.borderColor = "";
    // Clearing the `background` *shorthand* also clears any longhand
    // (like backgroundImage below) already set on this element — the
    // CSSOM treats a shorthand assignment as authoritative over its own
    // longhands, even when the shorthand's new value is empty. Clearing
    // it up front, before any branch below sets backgroundImage, avoids
    // wiping out whichever one just set it (this exact bug silently blanked
    // the shop preview for both `art` skins and the pre-existing `image`
    // skin, Eclipse).
    el.style.background = "";

    if (skin.art) {
      // Real illustrated SVG art, clipped to the skin's own shape family
      // (not forced circular the way plain `image` skins below are) — see
      // skinsData.js's field docs.
      el.style.backgroundImage = `url('${skin.art}')`;
      if (skin.shape === "circle") el.classList.add("shape-circle");
      else if (skin.shape === "triangle") el.classList.add("shape-triangle");
      else el.classList.add("shape-square");
    } else if (skin.shape === "image" && skin.image) {
      el.style.backgroundImage = `url('${skin.image}')`;
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

  // Grid instead of the old one-at-a-time carousel (renderSkin()/
  // goToSkin()/dots) — 63 skins is enough that "one visible, click an
  // arrow 62 times to see them all" was the actual problem being fixed
  // here, not just a style pass. Reuses the exact same .shop-item-card
  // shape renderGenericGrid() below uses for Particles/Skills/Power-Ups,
  // swapping in applySkinShape() for the swatch (skins need their real
  // square/circle/triangle/image shape, not a plain circle) so all four
  // tabs read as one consistent grid instead of skins being the odd one
  // out.
  const skinsGridEl = document.getElementById("skins-grid");

  function renderSkinsGrid() {
    if (!skinsGridEl) return;
    const equippedId = StarshadeEconomy.getEquippedSkinId();
    const coins = StarshadeEconomy.getCoins();

    skinsGridEl.innerHTML = "";
    STARSHADE_SKINS.forEach((skin) => {
      const unlocked = StarshadeEconomy.isUnlocked(skin);
      const equipped = unlocked && equippedId === skin.id;
      const canAfford = skin.unlockType === "coins" && coins >= skin.cost;
      const rarityColor = RARITY_COLORS[skin.rarity] || RARITY_COLORS.common;

      const card = document.createElement("div");
      card.className = "shop-item-card";
      card.style.setProperty("--glow", skin.glow || rarityColor);
      applyClaimAnimationIfRecent(card, skin.id);

      // The lock badge lives in a plain, never-animated wrapper sibling to
      // the swatch (not a child of it) — `shape-animated` skins rotate the
      // swatch itself via transform, and a child inherits that rotation
      // visually, which is what made locked+animated skins show a spinning
      // lock. The wrapper is display:inline-block so it shrinks exactly to
      // the swatch's own box, keeping the badge centered on it either way.
      const swatchWrap = document.createElement("div");
      swatchWrap.className = "shop-swatch-wrap";
      const swatch = document.createElement("div");
      applySkinShape(swatch, skin, "shop-item-swatch");
      if (!unlocked) swatch.classList.add("locked");
      swatchWrap.appendChild(swatch);
      if (!unlocked) {
        const lockBadge = document.createElement("div");
        lockBadge.className = "skin-lock-badge";
        lockBadge.innerHTML = LOCK_ICON_SVG;
        swatchWrap.appendChild(lockBadge);
      }
      card.appendChild(swatchWrap);

      const h3 = document.createElement("h3");
      h3.textContent = skin.name;
      card.appendChild(h3);

      if (skin.rarity) {
        const badge = document.createElement("span");
        badge.className = "rarity-badge";
        badge.style.setProperty("--rarity-color", rarityColor);
        badge.textContent = skin.rarity;
        card.appendChild(badge);
      }

      const desc = document.createElement("p");
      desc.className = "shop-item-desc";
      desc.innerHTML = `<span class="coins">${describeUnlock(skin, unlocked)}</span>`;
      card.appendChild(desc);

      const actionButton = document.createElement("button");
      actionButton.className = "shop-action-button";
      if (equipped) {
        actionButton.textContent = "Equipped";
        actionButton.disabled = true;
      } else if (unlocked) {
        actionButton.textContent = "Equip";
        actionButton.addEventListener("click", () => {
          StarshadeEconomy.setEquippedSkinId(skin.id);
          renderSkinsGrid();
          renderSavedCustomSkins();
        });
      } else if (skin.unlockType === "coins") {
        actionButton.textContent = canAfford ? `Buy — ${skin.cost}` : "Not enough coins";
        actionButton.disabled = !canAfford;
        actionButton.addEventListener("click", () => {
          if (StarshadeEconomy.unlockWithCoins(skin)) {
            updateCoinBalance();
            if (window.StarshadeAchievements) StarshadeAchievements.checkAndNotify();
            markRecentlyClaimed(skin.id);
            renderSkinsGrid();
          }
        });
      } else {
        actionButton.textContent = "Locked";
        actionButton.disabled = true;
      }
      card.appendChild(actionButton);
      skinsGridEl.appendChild(card);
    });

    updateCoinBalance();
  }

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
    // Skills and Power-Ups are `multi: true` — several equipped at once
    // (StarshadeEconomy.MAX_EQUIPPED_ABILITIES/MAX_EQUIPPED_POWERUPS)
    // instead of Particles' one-at-a-time slot, via toggleEquip() rather
    // than a plain setEquippedId(). See shopData.js's header comment.
    ability: {
      grid: "abilities-grid",
      catalog: () => STARSHADE_ABILITIES,
      isUnlocked: StarshadeEconomy.isAbilityUnlocked,
      unlock: StarshadeEconomy.unlockAbilityWithCoins,
      multi: true,
      label: "Skill",
      maxEquipped: StarshadeEconomy.MAX_EQUIPPED_ABILITIES,
      getEquippedIds: StarshadeEconomy.getEquippedAbilityIds,
      toggleEquip: StarshadeEconomy.toggleEquippedAbility,
    },
    powerup: {
      grid: "powerups-grid",
      catalog: () => STARSHADE_POWERUPS,
      isUnlocked: StarshadeEconomy.isPowerUpUnlocked,
      unlock: StarshadeEconomy.unlockPowerUpWithCoins,
      multi: true,
      label: "Power-Up",
      maxEquipped: StarshadeEconomy.MAX_EQUIPPED_POWERUPS,
      getEquippedIds: StarshadeEconomy.getEquippedPowerUpIds,
      toggleEquip: StarshadeEconomy.toggleEquippedPowerUp,
    },
  };

  function renderGenericGrid(kind) {
    const config = GRID_KINDS[kind];
    const gridEl = document.getElementById(config.grid);
    if (!gridEl) return;
    const coins = StarshadeEconomy.getCoins();
    const equippedId = config.multi ? null : config.getEquippedId();
    const equippedIds = config.multi ? config.getEquippedIds() : null;
    const atCap = config.multi && equippedIds.length >= config.maxEquipped;

    gridEl.innerHTML = "";

    // "2 / 3 Skills equipped" — the only way a multi-equip category's cap
    // is otherwise visible is a disabled button several cards down, which
    // doesn't explain *why* on its own.
    if (config.multi) {
      const countEl = document.createElement("div");
      countEl.className = "shop-equip-count";
      countEl.textContent = `${equippedIds.length} / ${config.maxEquipped} ${config.label}s equipped`;
      gridEl.appendChild(countEl);
    }

    config.catalog().forEach((item) => {
      const unlocked = config.isUnlocked(item);
      const equipped = config.multi ? unlocked && equippedIds.includes(item.id) : unlocked && equippedId === item.id;
      const canAfford = item.unlockType === "coins" && coins >= item.cost;
      const rarityColor = RARITY_COLORS[item.rarity] || RARITY_COLORS.common;
      // `requires` always names a STARSHADE_ABILITIES (Skill) id, even on
      // a Power-Up entry (see shopData.js) — Featherfall Boost requires
      // the Featherfall *Skill*, not another Power-Up.
      const requiresItem = item.requires ? STARSHADE_ABILITIES.find((a) => a.id === item.requires) : null;
      const prereqMet = !item.requires || (equippedIds ? equippedIds.includes(item.requires) : false);

      const card = document.createElement("div");
      card.className = "shop-item-card";
      card.style.setProperty("--glow", rarityColor);
      applyClaimAnimationIfRecent(card, item.id);

      // A parametric badge-ring + glyph icon (shopIcons.js) instead of a
      // flat color swatch — every Particle/Skill/Power-Up gets a distinct,
      // "complex" (multi-layer, not a single flat shape) icon this way,
      // with a subtle rotating-ring hover loop and this same element also
      // doubling as the anchor the claim-burst animation radiates from
      // (see shop.css's .shop-item-card.claiming).
      const iconWrap = document.createElement("div");
      iconWrap.className = "shop-item-icon" + (unlocked ? "" : " locked");
      iconWrap.innerHTML = buildShopIcon(item.icon, { rarity: item.rarity, size: 48 });
      if (!unlocked) {
        const lockBadge = document.createElement("div");
        lockBadge.className = "skin-lock-badge";
        lockBadge.innerHTML = LOCK_ICON_SVG;
        iconWrap.appendChild(lockBadge);
      }
      card.appendChild(iconWrap);

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

      if (requiresItem) {
        const reqNote = document.createElement("p");
        reqNote.className = "shop-item-requires" + (prereqMet ? " met" : "");
        reqNote.textContent = prereqMet
          ? `✓ ${requiresItem.name} equipped`
          : `Requires ${requiresItem.name} equipped`;
        card.appendChild(reqNote);
      }

      const btn = document.createElement("button");
      btn.className = "shop-action-button";
      if (equipped) {
        btn.textContent = "Unequip";
        btn.addEventListener("click", () => {
          if (config.multi) config.toggleEquip(item.id);
          else config.setEquippedId("");
          renderGenericGrid(kind);
        });
      } else if (unlocked && config.multi && !prereqMet) {
        btn.textContent = `Requires ${requiresItem ? requiresItem.name : "another Skill"}`;
        btn.disabled = true;
      } else if (unlocked && config.multi && atCap) {
        btn.textContent = `${config.label} slots full`;
        btn.disabled = true;
      } else if (unlocked) {
        btn.textContent = "Equip";
        btn.addEventListener("click", () => {
          if (config.multi) {
            if (!config.toggleEquip(item.id)) return; // blocked — cap or missing prerequisite
          } else {
            config.setEquippedId(item.id);
          }
          renderGenericGrid(kind);
        });
      } else if (item.unlockType === "coins") {
        btn.textContent = canAfford ? `Buy — ${item.cost}` : "Not enough coins";
        btn.disabled = !canAfford;
        btn.addEventListener("click", () => {
          if (config.unlock(item)) {
            updateCoinBalance();
            markRecentlyClaimed(item.id);
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
  const builderState = {
    shape: "square",
    fill: "#a042d3",
    stroke: "#5d1a91",
    glow: "#a042d3",
    trail: false,
    outlineWidth: 3,
    glowPulse: false,
    accessory: "accessory-none",
    accessoryColor: "#a042d3",
    accessorySize: 1,
  };

  // shopData.js's STARSHADE_ACCESSORIES id -> shopIcons.js glyph key,
  // reused for both the picker row below and the small overlay preview —
  // the actual in-game accessory rendering is real canvas art
  // (drawSkinAccessory() in game.js), this is just a representative icon,
  // not a pixel match.
  const ACCESSORY_ICON_MAP = {
    "accessory-none": "blank",
    "accessory-crown": "crown",
    "accessory-halo": "halo",
    "accessory-wings": "wingsSmall",
    "accessory-visor": "visor",
    "accessory-horns": "horns",
    "accessory-aura": "auraRing",
    "accessory-tail": "tail",
    "accessory-mask": "mask",
    "accessory-spikes": "spikes",
    "accessory-scarf": "scarf",
  };

  // Where each accessory actually sits on the in-game shape (see
  // drawSkinAccessory() in game.js) — crown/horns/spikes sit above it,
  // wings/tail/scarf sit to the sides or below, visor/mask sit mid-body,
  // aura rings the whole shape. The overlay was previously always
  // top-center regardless of type, which misrepresented every accessory
  // except crown/halo. A CSS class per position (shop.css) moves the
  // overlay to roughly match.
  const ACCESSORY_OVERLAY_POSITION = {
    "accessory-crown": "pos-top",
    "accessory-halo": "pos-top",
    "accessory-horns": "pos-top",
    "accessory-spikes": "pos-top",
    "accessory-wings": "pos-side",
    "accessory-tail": "pos-side",
    "accessory-scarf": "pos-mid",
    "accessory-visor": "pos-mid",
    "accessory-mask": "pos-mid",
    "accessory-aura": "pos-ring",
  };

  function refreshBuilderPreview() {
    const el = document.getElementById("builder-preview");
    if (!el) return;
    el.className = "skin-preview shape-" + builderState.shape;
    el.style.background = builderState.fill;
    el.style.borderColor = builderState.stroke;
    el.style.borderWidth = builderState.outlineWidth + "px";
    el.style.setProperty("--glow", builderState.glow);
    el.classList.toggle("glow-pulse", builderState.glowPulse);

    const overlay = document.getElementById("builder-accessory-overlay");
    if (overlay) {
      overlay.innerHTML =
        builderState.accessory === "accessory-none"
          ? ""
          : buildShopIcon(ACCESSORY_ICON_MAP[builderState.accessory], { rarity: "custom", size: 44 });
      overlay.className =
        "builder-accessory-overlay " + (ACCESSORY_OVERLAY_POSITION[builderState.accessory] || "pos-top");
      overlay.style.setProperty("--accessory-color", builderState.accessoryColor);
      overlay.style.setProperty("--accessory-size", builderState.accessorySize);
    }
  }

  document.querySelectorAll(".builder-shape-option").forEach((btn) => {
    if (btn.dataset.shape === builderState.shape) btn.classList.add("active");
    btn.addEventListener("click", () => {
      builderState.shape = btn.dataset.shape;
      document.querySelectorAll(".builder-shape-option").forEach((b) => b.classList.toggle("active", b === btn));
      refreshBuilderPreview();
    });
  });

  // Built from STARSHADE_ACCESSORIES (shopData.js) rather than hardcoded
  // here, so adding a new accessory to the catalog is the only place that
  // needs to change.
  const accessoryRowEl = document.getElementById("builder-accessory-row");
  if (accessoryRowEl && typeof STARSHADE_ACCESSORIES !== "undefined") {
    STARSHADE_ACCESSORIES.forEach((accessory) => {
      const btn = document.createElement("button");
      btn.className = "builder-shape-option builder-accessory-option";
      btn.dataset.accessory = accessory.id;
      btn.title = accessory.name;
      btn.innerHTML = buildShopIcon(accessory.icon, { rarity: "custom", size: 22 });
      if (accessory.id === builderState.accessory) btn.classList.add("active");
      btn.addEventListener("click", () => {
        builderState.accessory = accessory.id;
        accessoryRowEl.querySelectorAll(".builder-accessory-option").forEach((b) => b.classList.toggle("active", b === btn));
        refreshBuilderPreview();
      });
      accessoryRowEl.appendChild(btn);
    });
  }

  const fillInput = document.getElementById("builder-fill-color");
  const strokeInput = document.getElementById("builder-stroke-color");
  const glowInput = document.getElementById("builder-glow-color");
  const trailInput = document.getElementById("builder-trail");
  const outlineWidthInput = document.getElementById("builder-outline-width");
  const glowPulseInput = document.getElementById("builder-glow-pulse");
  const accessoryColorInput = document.getElementById("builder-accessory-color");
  const accessorySizeInput = document.getElementById("builder-accessory-size");
  if (fillInput) fillInput.addEventListener("input", (e) => { builderState.fill = e.target.value; refreshBuilderPreview(); });
  if (strokeInput) strokeInput.addEventListener("input", (e) => { builderState.stroke = e.target.value; refreshBuilderPreview(); });
  if (glowInput) glowInput.addEventListener("input", (e) => { builderState.glow = e.target.value; refreshBuilderPreview(); });
  if (trailInput) trailInput.addEventListener("change", (e) => { builderState.trail = e.target.checked; });
  if (outlineWidthInput) outlineWidthInput.addEventListener("input", (e) => { builderState.outlineWidth = Number(e.target.value); refreshBuilderPreview(); });
  if (glowPulseInput) glowPulseInput.addEventListener("change", (e) => { builderState.glowPulse = e.target.checked; refreshBuilderPreview(); });
  if (accessoryColorInput) accessoryColorInput.addEventListener("input", (e) => { builderState.accessoryColor = e.target.value; refreshBuilderPreview(); });
  if (accessorySizeInput) accessorySizeInput.addEventListener("input", (e) => { builderState.accessorySize = Number(e.target.value); refreshBuilderPreview(); });

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
        renderSkinsGrid();
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
      if (tab.classList.contains("locked")) return;
      document.querySelectorAll(".shop-subtab").forEach((t) => t.classList.toggle("active", t === tab));
      document.querySelectorAll(".shop-subtab-panel").forEach((p) => {
        p.classList.toggle("hidden", p.dataset.subpanel !== tab.dataset.subtab);
      });
    });
  });

  // Custom Builder unlocks once StarshadeEconomy.isCustomizationUnlocked()
  // is true (see skinsData.js's CUSTOMIZATION_UNLOCK_LEVEL) — until then the
  // subtab is shown but disabled with a lock message, and if it was
  // somehow left open (e.g. re-render mid-session right as the gate
  // closes, which can't actually happen since the gate only ever opens,
  // but kept for safety) it's forced back to the Gallery subtab.
  function refreshCustomBuilderLock() {
    const tab = document.querySelector('.shop-subtab[data-subtab="custom"]');
    const panel = document.querySelector('.shop-subtab-panel[data-subpanel="custom"]');
    if (!tab || !panel) return;
    const unlocked = StarshadeEconomy.isCustomizationUnlocked();
    tab.classList.toggle("locked", !unlocked);
    tab.setAttribute("aria-disabled", unlocked ? "false" : "true");
    tab.title = unlocked ? "" : `Unlocks at Level ${StarshadeEconomy.CUSTOMIZATION_UNLOCK_LEVEL}`;
    let lockMsg = panel.querySelector(".builder-locked-message");
    if (!unlocked) {
      if (tab.classList.contains("active")) {
        tab.classList.remove("active");
        panel.classList.add("hidden");
        const galleryTab = document.querySelector('.shop-subtab[data-subtab="gallery"]');
        const galleryPanel = document.querySelector('.shop-subtab-panel[data-subpanel="gallery"]');
        if (galleryTab) galleryTab.classList.add("active");
        if (galleryPanel) galleryPanel.classList.remove("hidden");
      }
      if (!lockMsg) {
        lockMsg = document.createElement("div");
        lockMsg.className = "builder-locked-message";
        panel.prepend(lockMsg);
      }
      lockMsg.textContent = `Character Shop locked — reach Level ${StarshadeEconomy.CUSTOMIZATION_UNLOCK_LEVEL} to design your own skin.`;
      lockMsg.classList.remove("hidden");
      const builder = panel.querySelector("#skin-builder");
      if (builder) builder.classList.add("hidden");
    } else {
      if (lockMsg) lockMsg.classList.add("hidden");
      const builder = panel.querySelector("#skin-builder");
      if (builder) builder.classList.remove("hidden");
    }
  }

  // Fires the one-time "Character Shop unlocked" popup the moment the
  // player crosses CUSTOMIZATION_UNLOCK_LEVEL — called from game.js's
  // advanceToNextLevel() right after each level completes, the same spot
  // achievement unlocks are checked.
  function checkCustomizationUnlockNotify() {
    if (!StarshadeEconomy.isCustomizationUnlocked()) return;
    if (StarshadeEconomy.wasCustomizationUnlockNotified()) return;
    StarshadeEconomy.markCustomizationUnlockNotified();
    showCharacterShopUnlockedPopup();
    refreshCustomBuilderLock();
  }

  function showCharacterShopUnlockedPopup() {
    if (typeof getAchievementPopupContainer !== "function") return;
    const container = getAchievementPopupContainer();
    const card = document.createElement("div");
    card.className = "achievement-popup";
    card.innerHTML = `
      <div class="achievement-popup-icon">${buildShopIcon("crown", { rarity: "legendary", size: 44 })}</div>
      <div class="achievement-popup-text">
        <div class="achievement-popup-label">New Shop Tab</div>
        <div class="achievement-popup-name">Character Shop Unlocked</div>
        <div class="achievement-popup-desc">Design your own skin in Skins &rarr; Custom Builder.</div>
      </div>
    `;
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

  // Called by game.js's openShopOverlay() every time the overlay is shown
  // — coin balance/unlock state can have changed since the last render (or
  // this may be the first render this page load), so nothing here is
  // trusted to still be fresh.
  function renderShopOverlay() {
    renderSkinsGrid();
    renderGenericGrid("particle");
    renderGenericGrid("ability");
    renderGenericGrid("powerup");
    refreshBuilderPreview();
    renderSavedCustomSkins();
    refreshCustomBuilderLock();
    updateCoinBalance();
  }
  window.renderShopOverlay = renderShopOverlay;
  window.StarshadeShop = { checkCustomizationUnlockNotify };

  renderShopOverlay();
})();
