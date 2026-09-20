// Level-select screen. Reads the same StarshadeEconomy (skinsData.js)
// game.js writes to, so completion state here never drifts from what's
// actually been played — and clicking a level writes the same
// `savedLevel` key game.js reads on startup, so picking one here is just
// "aim Play at a different level," not a separate code path.
//
// Wrapped in an IIFE so every name here stays local — this script is also
// loaded on game.html (see the pause menu's Level Map overlay), which
// shares one global scope with game.js and settings.js as plain classic
// scripts; a top-level `const`/`let` name repeated across them throws a
// SyntaxError (see docs/architecture.md). Doesn't change anything about
// how this behaves on the standalone levels.html.
(function () {

// Flavor names match docs/gameplay.md's level table — the level files
// themselves only set `levelText` to "Level N", so this is the only place
// these names actually appear in the game.
const LEVEL_NAMES = [
  "First Light",
  "Steady Climb",
  "Nebula Steps",
  "Ashfall Ruins",
  "Spike Gardens",
  "The Long Fall",
  "Twin Pillars",
  "Void Bridge",
  "Ember Labyrinth",
  "Starfall Gauntlet",
  "The Ascent",
  "Starshade's Reach",
  "Crimson Descent",
  "Glass Causeway",
  "Wraith's Crossing",
  "The Hollow Spiral",
  "Emberfall Reach",
  "Phantom Causeway",
  "The Shattered Path",
  "Void Marrow",
  "Starlit Precipice",
  "The Last Bastion",
  "Eclipse Corridor",
  "The Abyssal Climb",
  "Starshade's Zenith",
];
const TOTAL_LEVELS = LEVEL_NAMES.length;

function updateCoinBalance() {
  document.getElementById("coin-balance").textContent =
    `${StarshadeEconomy.getCoins()} Coins`;
}

// A level is unlocked once the one before it has been completed — level 1
// is always unlocked. Finishing the whole game resets `savedLevel` back to
// 1 for a fresh run (see game.js), but every level stays unlocked/complete
// here since StarshadeEconomy's completed-levels list isn't reset with it.
function highestUnlockedLevel() {
  const completed = StarshadeEconomy.getCompletedLevels();
  return completed.length ? Math.max(...completed) + 1 : 1;
}

// Node positions form a winding path (a sine wave down the page) rather
// than a grid — depends on the wrapper's actual rendered width, so it's
// computed here in JS instead of being layout-able in pure CSS, and
// recomputed on resize so it never goes stale across a window resize or
// the mobile breakpoint changing the wrapper's max-width.
const SPACING_Y = 128;
const TOP_PAD = 30;

function computeNodePositions(width) {
  const centerX = width / 2;
  const amplitude = Math.max(40, Math.min(160, width / 2 - 60));
  const positions = [];
  for (let n = 1; n <= TOTAL_LEVELS; n++) {
    positions.push({
      x: centerX + Math.sin((n - 1) * 0.85) * amplitude,
      y: TOP_PAD + (n - 1) * SPACING_Y,
    });
  }
  return positions;
}

function pathString(positions, indices) {
  return indices
    .map((i, k) => `${k === 0 ? "M" : "L"}${positions[i].x},${positions[i].y}`)
    .join(" ");
}

function renderLevels() {
  const wrap = document.querySelector(".tree-wrap");
  const nodesContainer = document.getElementById("tree-nodes");
  const svg = document.getElementById("tree-lines");
  nodesContainer.innerHTML = "";
  svg.innerHTML = "";

  const completed = StarshadeEconomy.getCompletedLevels();
  const unlockedThrough = highestUnlockedLevel();
  const currentLevel = parseInt(localStorage.getItem("savedLevel"), 10) || 1;

  const width = wrap.clientWidth || 340;
  const positions = computeNodePositions(width);
  const totalHeight = TOP_PAD + (TOTAL_LEVELS - 1) * SPACING_Y + 60;

  nodesContainer.style.height = `${totalHeight}px`;
  svg.setAttribute("viewBox", `0 0 ${width} ${totalHeight}`);
  svg.setAttribute("preserveAspectRatio", "none");

  const svgNS = "http://www.w3.org/2000/svg";
  const allIndices = positions.map((_, i) => i);

  // The full path, dashed and dim — "where the trail goes."
  const fullPath = document.createElementNS(svgNS, "path");
  fullPath.setAttribute("d", pathString(positions, allIndices));
  fullPath.setAttribute("class", "tree-path tree-path-full");
  svg.appendChild(fullPath);

  // The completed portion, solid and glowing green — "how far you've
  // actually come." Extends one node past the last completed level (to
  // the current one) so it visibly leads up to where the player is.
  const maxCompleted = completed.length ? Math.max(...completed) : 0;
  const litThrough = Math.min(TOTAL_LEVELS, Math.max(maxCompleted, 1));
  if (litThrough > 1 || maxCompleted > 0) {
    const litIndices = allIndices.slice(0, litThrough);
    const litPath = document.createElementNS(svgNS, "path");
    litPath.setAttribute("d", pathString(positions, litIndices));
    litPath.setAttribute("class", "tree-path tree-path-lit");
    svg.appendChild(litPath);
  }

  positions.forEach((pos, idx) => {
    const n = idx + 1;
    const isCompleted = completed.includes(n);
    const isUnlocked = n <= unlockedThrough;
    const isCurrent = n === currentLevel && !isCompleted;

    const node = document.createElement("button");
    node.className = "level-node";
    if (isCompleted) node.classList.add("completed");
    else if (isCurrent) node.classList.add("current");
    if (!isUnlocked) node.classList.add("locked");
    node.style.left = `${pos.x}px`;
    node.style.top = `${pos.y}px`;

    const circleContent = isCompleted ? "&#9733;" : isUnlocked ? String(n) : "&#128274;";
    node.innerHTML = `
      <span class="level-node-circle">${circleContent}</span>
      <span class="level-node-name">${n}. ${LEVEL_NAMES[n - 1]}</span>
    `;

    if (isUnlocked) {
      node.addEventListener("click", () => {
        // Embedded in game.html (see the pause menu's Level Map button) —
        // start the level in-page instead of navigating through
        // loading.html's fake progress bar. window.startLevelFromOverlay
        // is only defined there (see game.js).
        if (typeof window.startLevelFromOverlay === "function") {
          window.startLevelFromOverlay(n);
        } else {
          localStorage.setItem("savedLevel", String(n));
          window.location.href = "loading.html";
        }
      });
    } else {
      node.disabled = true;
      node.setAttribute("aria-disabled", "true");
    }

    nodesContainer.appendChild(node);
  });
}

// Embedded in game.html: settings.js is loaded on that same page and
// already owns the literal id "back-button" for its own overlay, so the
// level map's back button there is "level-map-back-button" instead —
// falling back to "back-button" is what makes this same code work
// unchanged on the standalone levels.html, which has no such element.
const levelMapBackButton =
  document.getElementById("level-map-back-button") ||
  document.getElementById("back-button");

levelMapBackButton.addEventListener("click", () => {
  if (typeof window.closeLevelMapOverlay === "function") {
    window.closeLevelMapOverlay();
  } else {
    window.location.href = "index.html";
  }
});

// Top-corner back arrow (standalone levels.html only — game.html's
// embedded overlay has no such element, hence the guard).
const topBackButton = document.getElementById("top-back-button");
if (topBackButton) {
  topBackButton.addEventListener("click", () => levelMapBackButton.click());
}

// Exposed so game.js can re-run these each time the overlay opens (coin
// balance/unlock state can have changed since the last time it was shown).
window.updateLevelMapCoinBalance = updateCoinBalance;
window.renderLevelMap = renderLevels;

updateCoinBalance();
renderLevels();

// Node x-positions depend on the wrapper's rendered width (see
// computeNodePositions) — a plain resize listener is enough here, there's
// no animation loop already running to piggyback on like in game.js.
let resizeRaf = null;
window.addEventListener("resize", () => {
  if (resizeRaf) cancelAnimationFrame(resizeRaf);
  resizeRaf = requestAnimationFrame(renderLevels);
});

})();
