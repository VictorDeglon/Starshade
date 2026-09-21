// Wrapped in an IIFE so every name in this file stays local — this script
// is also loaded on game.html (see the pause menu's Settings overlay),
// which loads game.js (and, for the Level Map overlay, levels.js) as
// plain classic scripts sharing one global scope. Top-level `const`/`let`
// with the same name in two of those scripts throws a SyntaxError (see
// docs/architecture.md) — this file's DEFAULT_KEY_BINDINGS/loadKeyBindings
// already collide with game.js's own, and topBackButton collides with
// levels.js's. An IIFE sidesteps the whole class of problem regardless of
// what either file is named internally, without changing this script's
// behavior on the standalone settings.html at all.
(function () {

// Embedded in game.html (see the pause menu's Settings button): this
// whole file also runs there, driving the same-markup overlay in place
// instead of navigating anywhere — window.closeSettingsOverlay only
// exists in that context (see game.js). Standalone settings.html has no
// such function, so it falls back to the original navigation, including
// the "opened from the pause menu via ?from=pause" case (settings.html
// can still be reached that way directly, e.g. a bookmarked/shared link).
const cameFromPause = new URLSearchParams(location.search).get("from") === "pause";
const isEmbeddedInGame = typeof window.closeSettingsOverlay === "function";

document.getElementById("back-button").addEventListener("click", () => {
  if (isEmbeddedInGame) window.closeSettingsOverlay();
  else window.location.href = cameFromPause ? "game.html" : "index.html";
});
if (cameFromPause && !isEmbeddedInGame) {
  document.getElementById("back-button").textContent = "Back to Game";
}

// Top-corner back arrow (standalone settings.html only — game.html's
// embedded overlay has no such element).
const topBackButton = document.getElementById("top-back-button");
if (topBackButton) {
  topBackButton.addEventListener("click", () => {
    document.getElementById("back-button").click();
  });
}

// Display name — saved locally, read back by script.js for the main
// menu's "Welcome back" greeting.
const playerNameInput = document.getElementById("player-name");
const savedPlayerName = safeLocalStorageGet("playerName");
if (savedPlayerName) playerNameInput.value = savedPlayerName;

playerNameInput.addEventListener("input", () => {
  const trimmed = playerNameInput.value.trim();
  if (trimmed) safeLocalStorageSet("playerName", trimmed);
  else localStorage.removeItem("playerName");
});

// Persist the volume sliders to localStorage so game.js (and future pages)
// can read and apply them.
const volumeSlider = document.getElementById("volume");
const musicVolumeSlider = document.getElementById("background-volume");

const savedVolume = safeLocalStorageGet("soundVolume");
if (savedVolume !== null) volumeSlider.value = savedVolume;

const savedMusicVolume = safeLocalStorageGet("musicVolume");
if (savedMusicVolume !== null) musicVolumeSlider.value = savedMusicVolume;

volumeSlider.addEventListener("input", () => {
  safeLocalStorageSet("soundVolume", volumeSlider.value);
});

musicVolumeSlider.addEventListener("input", () => {
  safeLocalStorageSet("musicVolume", musicVolumeSlider.value);
  // Applies to the actual playing track immediately when embedded, rather
  // than only on the next page load — see game.js's refreshLiveSettings().
  if (typeof window.refreshLiveSettings === "function") window.refreshLiveSettings();
});

// -------------------------------------------------------------
// KEY BINDINGS
// -------------------------------------------------------------
// Mirrors the defaults in game.js — kept in sync manually since these are
// plain scripts with no shared module system.
const DEFAULT_KEY_BINDINGS = {
  left: ["ArrowLeft", "a"],
  right: ["ArrowRight", "d"],
  jump: [" ", "w", "ArrowUp"],
};

const CONTROL_PRESETS = {
  wasd: { left: ["a"], right: ["d"], jump: [" "] },
  arrowkeys: { left: ["ArrowLeft"], right: ["ArrowRight"], jump: ["ArrowUp"] },
};

const KEY_DISPLAY_NAMES = {
  " ": "Space",
  ArrowLeft: "←",
  ArrowRight: "→",
  ArrowUp: "↑",
  ArrowDown: "↓",
};

function displayName(key) {
  if (KEY_DISPLAY_NAMES[key]) return KEY_DISPLAY_NAMES[key];
  if (key.length === 1) return key.toUpperCase();
  return key;
}

function loadKeyBindings() {
  try {
    const saved = JSON.parse(safeLocalStorageGet("keyBindings"));
    if (saved && saved.left && saved.right && saved.jump) return saved;
  } catch (e) {
    // ignore malformed data
  }
  return { ...DEFAULT_KEY_BINDINGS };
}

let keyBindings = loadKeyBindings();

function saveKeyBindings() {
  safeLocalStorageSet("keyBindings", JSON.stringify(keyBindings));
  // Rebinding a key while embedded needs game.js's own `keyBindings`
  // object (a separate copy read once at load — see game.js) to pick up
  // the change immediately, or the new binding wouldn't do anything until
  // the level reloads.
  if (typeof window.refreshLiveSettings === "function") window.refreshLiveSettings();
}

const rebindButtons = document.querySelectorAll(".rebind-button");

function renderBindingLabels() {
  rebindButtons.forEach((button) => {
    const action = button.dataset.action;
    const keysForAction = keyBindings[action] || [];
    button.textContent = keysForAction.map(displayName).join(" / ") || "—";
  });
}

renderBindingLabels();

const bindingsPanel = document.getElementById("bindings-panel");
const editBindingsButton = document.getElementById("edit-bindings-button");

editBindingsButton.addEventListener("click", () => {
  bindingsPanel.hidden = !bindingsPanel.hidden;
});

let listeningButton = null;

function stopListening() {
  if (listeningButton) listeningButton.classList.remove("listening");
  listeningButton = null;
  document.removeEventListener("keydown", captureRebindKey);
  // Exposed so game.js's own (separately-attached, earlier-registered)
  // Escape handler can tell a rebind is in progress and step aside — its
  // listener fires *before* this file's, so stopImmediatePropagation in
  // captureRebindKey alone can't stop it from also acting on the same
  // keystroke.
  window.isCapturingKeyRebind = false;
}

function captureRebindKey(e) {
  if (!listeningButton) return;
  e.preventDefault();
  // Embedded in game.html, its own keydown listener is on this same
  // document — stopImmediatePropagation keeps it from *also* seeing this
  // press (Escape in particular would otherwise both cancel the rebind
  // here and close the whole settings overlay in the same keystroke).
  e.stopImmediatePropagation();
  const action = listeningButton.dataset.action;

  if (e.key === "Escape") {
    stopListening();
    renderBindingLabels();
    return;
  }

  keyBindings = { ...keyBindings, [action]: [e.key] };
  saveKeyBindings();
  stopListening();
  renderBindingLabels();
}

rebindButtons.forEach((button) => {
  button.addEventListener("click", () => {
    stopListening();
    listeningButton = button;
    window.isCapturingKeyRebind = true;
    button.classList.add("listening");
    button.textContent = "Press a key…";
    document.addEventListener("keydown", captureRebindKey);
  });
});

// -------------------------------------------------------------
// CONTROLS PRESET
// -------------------------------------------------------------
// A convenience that overwrites both movement bindings at once. Click/Tap
// to Jump (below) covers the "use the mouse" case instead of a fake
// "Mouse Clicks" movement preset — this is a physics-based platformer
// (gravity, jump arcs), not a click-to-move scheme, so there's nothing
// sensible for the mouse to drive left/right with.
const controlsSelect = document.getElementById("controls");

controlsSelect.addEventListener("change", () => {
  const preset = CONTROL_PRESETS[controlsSelect.value];
  if (!preset) return;
  keyBindings = { ...preset };
  saveKeyBindings();
  renderBindingLabels();
});

// -------------------------------------------------------------
// DIFFICULTY
// -------------------------------------------------------------
// Mirrors DIFFICULTY_SETTINGS in game.js — kept in sync manually since
// these are plain scripts with no shared module system.
const difficultySelect = document.getElementById("difficulty");
const savedDifficulty = safeLocalStorageGet("difficulty");
if (savedDifficulty) difficultySelect.value = savedDifficulty;

difficultySelect.addEventListener("change", () => {
  safeLocalStorageSet("difficulty", difficultySelect.value);
  if (typeof window.refreshLiveSettings === "function") window.refreshLiveSettings();
});

// -------------------------------------------------------------
// CLICK/TAP TO JUMP & SCREEN SHAKE
// -------------------------------------------------------------
// Both read back by game.js (screenShakeEnabled/clickToJumpEnabled) —
// simple on/off toggles that actually change behavior, unlike the old
// disabled "Screen Resolution" placeholder and dead "Mouse Clicks" preset
// they replaced.
const clickToJumpSelect = document.getElementById("click-to-jump");
const savedClickToJump = safeLocalStorageGet("clickToJump");
if (savedClickToJump) clickToJumpSelect.value = savedClickToJump;

clickToJumpSelect.addEventListener("change", () => {
  safeLocalStorageSet("clickToJump", clickToJumpSelect.value);
  if (typeof window.refreshLiveSettings === "function") window.refreshLiveSettings();
});

const screenShakeSelect = document.getElementById("screen-shake");
const savedScreenShake = safeLocalStorageGet("screenShake");
if (savedScreenShake) screenShakeSelect.value = savedScreenShake;

screenShakeSelect.addEventListener("change", () => {
  safeLocalStorageSet("screenShake", screenShakeSelect.value);
  if (typeof window.refreshLiveSettings === "function") window.refreshLiveSettings();
});

})();
