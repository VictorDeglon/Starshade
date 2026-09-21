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
  // 26-100: continues in .claude/gen-levels.js's NEW_LEVEL_NAMES — the two
  // lists have to stay in sync (that script generates the level files,
  // this one only labels them on the map), see docs/gameplay.md.
  "Comet's Wake",
  "Fractured Skyline",
  "The Drifting Vault",
  "Ashen Causeway",
  "Hollow Meridian",
  "The Silent Reach",
  "Ember Threshold",
  "Wraithlight Span",
  "The Cinder Steps",
  "Skyline Interlude",
  "Obsidian Furrow",
  "The Widening Dark",
  "Starcross Gauntlet",
  "Molten Parapet",
  "The Hush Between",
  "Ravenfall Reach",
  "The Splintered Vault",
  "Duskbound Causeway",
  "The Umbral Stair",
  "Cindermarch",
  "The Glass Divide",
  "Starless Culvert",
  "The Withering Span",
  "Ashen Zenith",
  "The Neon Rift",
  "The Fractured Choir",
  "Voidlight Traverse",
  "The Ember Maze",
  "Graven Skyway",
  "The Hollow Ascent",
  "Starwake Perimeter",
  "The Splitting Dark",
  "Cinderfall Vault",
  "The Widow's Ledge",
  "Umbral Gauntlet",
  "The Drowned Sky",
  "Ashfall Perimeter",
  "The Ember Choir",
  "Nightglass Span",
  "Crossfire Causeway",
  "The Faultline Reach",
  "Starbound Furrow",
  "The Whispering Vault",
  "Molten Meridian",
  "The Cracked Horizon",
  "Ravenous Span",
  "The Deep Cinder",
  "Starfall Reprise",
  "The Last Ember",
  "Starshade's Ascension",
  "The Vertical Ledge",
  "Skybreak Chasm",
  "The Climbing Dark",
  "Cindertower Reach",
  "The Wraith Stair",
  "Ashen Spire",
  "The Vertical Vein",
  "The Fracturing Sky",
  "Starwell Descent",
  "The Molten Stair",
  "Umbral Spire",
  "The Hollow Zenith",
  "Starcross Spire",
  "The Widening Vault",
  "Cinderspire Reach",
  "The Faultline Ascent",
  "Nightglass Spire",
  "The Drowned Zenith",
  "Starfall Spire",
  "Mirror's End",
  "The Final Cinder",
  "Starshade's Trial",
  "The Last Ascent",
  "The Abyssal Spire",
  "Starshade's Eternity",
];
const TOTAL_LEVELS = LEVEL_NAMES.length;

// Named "branch" levels (see BONUS_LEVELS in .claude/gen-levels.js — the
// level numbers here must match that script's) — rendered as a spur off
// the main path instead of another rung on it (see computeNodePositions()
// and the "bonus" path/node below).
const BONUS_LEVEL_NUMBERS = new Set([35, 50, 65, 82, 95]);

// Purely organizational — 100 unbroken levels on one winding trail reads
// as an undifferentiated wall of dots (and gives a player no sense of
// "how far into the game am I"), so the trail is split into five named
// stretches. Titles are new (not level names) and deliberately don't
// reuse LEVEL_NAMES entries. Chapter 1 doesn't get a divider drawn (see
// renderLevels()) — it's already the top of the map, right under the
// "Level Map" heading.
const CHAPTERS = [
  { start: 1, title: "The Nebula Climb" },
  { start: 21, title: "Emberlight Reaches" },
  { start: 41, title: "The Hollow Expanse" },
  { start: 61, title: "Starfall Depths" },
  { start: 81, title: "The Final Ascent" },
];
// Extra vertical breathing room inserted once per chapter boundary (see
// chapterGapBefore()) — both to give the divider label somewhere to sit
// without crowding the node above/below it, and so the connecting trail
// itself visibly stretches at that point, reading as "distance" between
// chapters rather than just a label dropped on top of an unbroken line.
const CHAPTER_GAP_EXTRA = 70;

function chapterGapBefore(n) {
  let gap = 0;
  for (const chapter of CHAPTERS) {
    if (chapter.start > 1 && n >= chapter.start) gap += CHAPTER_GAP_EXTRA;
  }
  return gap;
}

function updateCoinBalance() {
  document.getElementById("coin-balance").textContent =
    `${StarshadeEconomy.getCoins()} Coins`;
}

// Updates the "X / 100 completed" label + fill under the coin balance.
// Separate from updateCoinBalance() (coins can change without completion
// changing, e.g. from the shop) but always called alongside it below.
function updateProgressSummary(completed) {
  const label = document.getElementById("levelmap-progress-label");
  const fill = document.getElementById("levelmap-progress-fill");
  if (label) label.textContent = `${completed.length} / ${TOTAL_LEVELS} completed`;
  if (fill) fill.style.width = `${Math.round((completed.length / TOTAL_LEVELS) * 100)}%`;
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

// Bonus/branch levels (BONUS_LEVEL_NUMBERS) get pushed further out to
// whichever side they're already leaning, so they visibly poke out from
// the main winding path — `onPathX` (what the plain sine wave would have
// put there) is kept separately so the main path line itself stays smooth
// and undistorted; only the node and a short spur line (see renderLevels())
// use the offset `x`.
const BONUS_BRANCH_OFFSET = 70;
// Half a .level-node's own width (see game.css) — bonus nodes clamp to
// stay this far from either edge of the wrap so the branch offset can
// never push one half off the side and force a horizontal scrollbar
// (it could: amplitude alone already reaches close to the edge, and
// BONUS_BRANCH_OFFSET adds up to 70px more on top of that).
const NODE_HALF_WIDTH = 46;

function computeNodePositions(width) {
  const centerX = width / 2;
  const amplitude = Math.max(40, Math.min(160, width / 2 - 60));
  const positions = [];
  for (let n = 1; n <= TOTAL_LEVELS; n++) {
    const onPathX = centerX + Math.sin((n - 1) * 0.85) * amplitude;
    const y = TOP_PAD + (n - 1) * SPACING_Y + chapterGapBefore(n);
    const isBonus = BONUS_LEVEL_NUMBERS.has(n);
    const side = onPathX >= centerX ? 1 : -1;
    const rawX = isBonus ? onPathX + side * BONUS_BRANCH_OFFSET : onPathX;
    const x = Math.max(NODE_HALF_WIDTH, Math.min(width - NODE_HALF_WIDTH, rawX));
    positions.push({ x, onPathX, y, isBonus });
  }
  return positions;
}

// `useOnPath` draws through each node's undistorted on-path position
// (see computeNodePositions()) rather than its actual (possibly
// branch-offset) one — used for the main winding path so a bonus node
// off to one side doesn't kink the whole trail toward it.
function pathString(positions, indices, useOnPath) {
  return indices
    .map((i, k) => {
      const p = positions[i];
      const x = useOnPath ? p.onPathX : p.x;
      return `${k === 0 ? "M" : "L"}${x},${p.y}`;
    })
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
  const currentLevel = parseInt(safeLocalStorageGet("savedLevel"), 10) || 1;
  updateProgressSummary(completed);

  const width = wrap.clientWidth || 340;
  const positions = computeNodePositions(width);
  const totalHeight =
    TOP_PAD + (TOTAL_LEVELS - 1) * SPACING_Y + chapterGapBefore(TOTAL_LEVELS) + 60;

  nodesContainer.style.height = `${totalHeight}px`;
  svg.setAttribute("viewBox", `0 0 ${width} ${totalHeight}`);
  svg.setAttribute("preserveAspectRatio", "none");

  const svgNS = "http://www.w3.org/2000/svg";
  const allIndices = positions.map((_, i) => i);

  // The full path, dashed and dim — "where the trail goes." Drawn through
  // every node's on-path position (see pathString()) so branch/bonus
  // nodes, offset to one side, don't kink the main trail toward them.
  const fullPath = document.createElementNS(svgNS, "path");
  fullPath.setAttribute("d", pathString(positions, allIndices, true));
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
    litPath.setAttribute("d", pathString(positions, litIndices, true));
    litPath.setAttribute("class", "tree-path tree-path-lit");
    svg.appendChild(litPath);
  }

  // A short gold spur from each bonus node's on-path spot out to where it
  // actually sits — the visual "this is a detour" cue that pairs with the
  // diamond shape/gold color in levels.css.
  positions.forEach((pos) => {
    if (!pos.isBonus) return;
    const spur = document.createElementNS(svgNS, "path");
    spur.setAttribute("d", `M${pos.onPathX},${pos.y} L${pos.x},${pos.y}`);
    spur.setAttribute("class", "tree-path tree-path-bonus");
    svg.appendChild(spur);
  });

  // Chapter dividers — see CHAPTERS above. Sits in the extra gap
  // chapterGapBefore() already opened up before this chapter's first
  // node, roughly centered in it (60px above the node vs. ~70px of added
  // gap), so it never has to compete with either that node's circle or
  // the previous node's name label for space.
  CHAPTERS.forEach((chapter) => {
    if (chapter.start <= 1 || chapter.start > TOTAL_LEVELS) return;
    const startPos = positions[chapter.start - 1];
    const divider = document.createElement("div");
    divider.className = "levelmap-chapter";
    divider.style.top = `${startPos.y - 60}px`;
    divider.innerHTML = `<span class="levelmap-chapter-label">${chapter.title}</span>`;
    nodesContainer.appendChild(divider);
  });

  positions.forEach((pos, idx) => {
    const n = idx + 1;
    const isCompleted = completed.includes(n);
    const isUnlocked = n <= unlockedThrough;
    const isCurrent = n === currentLevel && !isCompleted;

    const node = document.createElement("button");
    node.className = "level-node";
    node.dataset.level = String(n);
    if (pos.isBonus) node.classList.add("bonus");
    if (isCompleted) node.classList.add("completed");
    else if (isCurrent) node.classList.add("current");
    if (!isUnlocked) node.classList.add("locked");
    node.style.left = `${pos.x}px`;
    node.style.top = `${pos.y}px`;

    const circleContent = isCompleted ? "&#9733;" : isUnlocked ? String(n) : "&#128274;";
    // Bonus/branch nodes show their real name on its own, not prefixed
    // with a number — the whole point is that they read as a named
    // destination, not another rung on the ladder (see BONUS_LEVEL_NUMBERS
    // above). The glyph is wrapped in its own span so levels.css can
    // counter-rotate it back upright inside the diamond-rotated circle.
    const label = pos.isBonus ? LEVEL_NAMES[n - 1] : `${n}. ${LEVEL_NAMES[n - 1]}`;
    node.innerHTML = `
      <span class="level-node-circle"><span class="level-node-circle-glyph">${circleContent}</span></span>
      <span class="level-node-name">${label}</span>
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
          safeLocalStorageSet("savedLevel", String(n));
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

// The level a fresh open (or the jump button) should scroll to: the
// player's in-progress level, or — if that one's already done (e.g. they
// finished it and haven't started the next yet) — the next unlocked one.
function focusLevelNumber() {
  const completed = StarshadeEconomy.getCompletedLevels();
  const currentLevel = parseInt(safeLocalStorageGet("savedLevel"), 10) || 1;
  if (completed.includes(currentLevel)) {
    return Math.min(TOTAL_LEVELS, highestUnlockedLevel());
  }
  return currentLevel;
}

// With 100 levels at 128px+ apart, the trail runs well past 10,000px
// tall — opening the map used to always drop the player at level 1, so
// finding "where am I" meant scrolling for a while first. .menu-panel is
// the actual scrolling element (see game.css), and scrollIntoView finds
// it as the nearest scrollable ancestor on its own, so no manual offset
// math against menu-panel/tree-wrap's own padding is needed here.
function scrollToLevel(n, behavior) {
  const node = document.querySelector(`#tree-nodes .level-node[data-level="${n}"]`);
  if (node) node.scrollIntoView({ behavior: behavior || "auto", block: "center", inline: "nearest" });
}

const jumpButton = document.getElementById("levelmap-jump-button");
if (jumpButton) {
  jumpButton.addEventListener("click", () => scrollToLevel(focusLevelNumber(), "smooth"));
}

// Exposed so game.js can re-run these each time the overlay opens (coin
// balance/unlock state can have changed since the last time it was shown).
window.updateLevelMapCoinBalance = updateCoinBalance;
window.renderLevelMap = renderLevels;
// Separate from renderLevelMap on purpose: renderLevels() also reruns on
// every window resize (see below), and yanking the player's scroll
// position back to their current level on every resize — rather than
// only the moment the overlay opens — would fight anyone who scrolled
// away on purpose to browse other levels.
window.focusLevelMapOnOpen = function () {
  scrollToLevel(focusLevelNumber(), "auto");
};

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
