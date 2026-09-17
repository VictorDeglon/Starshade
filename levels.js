// Level-select screen. Reads the same StarshadeEconomy (skinsData.js)
// game.js writes to, so completion state here never drifts from what's
// actually been played — and clicking a level writes the same
// `savedLevel` key game.js reads on startup, so picking one here is just
// "aim Play at a different level," not a separate code path.

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

function renderLevels() {
  const grid = document.getElementById("level-grid");
  grid.innerHTML = "";

  const completed = StarshadeEconomy.getCompletedLevels();
  const unlockedThrough = highestUnlockedLevel();
  const currentLevel = parseInt(localStorage.getItem("savedLevel"), 10) || 1;

  for (let n = 1; n <= TOTAL_LEVELS; n++) {
    const isCompleted = completed.includes(n);
    const isUnlocked = n <= unlockedThrough;
    const isCurrent = n === currentLevel && !isCompleted;

    const tile = document.createElement("button");
    tile.className = "level-tile";
    if (isCompleted) tile.classList.add("completed");
    else if (isCurrent) tile.classList.add("current");
    if (!isUnlocked) tile.classList.add("locked");

    const statusText = isCompleted
      ? "★ Completed"
      : !isUnlocked
      ? "🔒 Locked"
      : isCurrent
      ? "Continue here"
      : "Ready";

    tile.innerHTML = `
      <span class="level-number">${n}</span>
      <span class="level-name">${LEVEL_NAMES[n - 1]}</span>
      <span class="level-status">${statusText}</span>
    `;

    if (isUnlocked) {
      tile.addEventListener("click", () => {
        localStorage.setItem("savedLevel", String(n));
        window.location.href = "loading.html";
      });
    } else {
      tile.disabled = true;
      tile.setAttribute("aria-disabled", "true");
    }

    grid.appendChild(tile);
  }
}

document.getElementById("back-button").addEventListener("click", () => {
  window.location.href = "index.html";
});

updateCoinBalance();
renderLevels();
