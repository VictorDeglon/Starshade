// Opened from the pause menu (game.html links here with ?from=pause) goes
// back to the game instead of all the way to the main menu — otherwise
// checking a setting mid-run meant losing your place in the level.
const cameFromPause = new URLSearchParams(location.search).get("from") === "pause";

document.getElementById("back-button").addEventListener("click", () => {
  window.location.href = cameFromPause ? "game.html" : "index.html";
});
if (cameFromPause) {
  document.getElementById("back-button").textContent = "Back to Game";
}

// Top-corner back arrow — delegates to the exact same handler above
// (including the from-pause destination) instead of duplicating the logic.
document.getElementById("top-back-button").addEventListener("click", () => {
  document.getElementById("back-button").click();
});

// Display name — saved locally, read back by script.js for the main
// menu's "Welcome back" greeting.
const playerNameInput = document.getElementById("player-name");
const savedPlayerName = localStorage.getItem("playerName");
if (savedPlayerName) playerNameInput.value = savedPlayerName;

playerNameInput.addEventListener("input", () => {
  const trimmed = playerNameInput.value.trim();
  if (trimmed) localStorage.setItem("playerName", trimmed);
  else localStorage.removeItem("playerName");
});

// Persist the volume sliders to localStorage so game.js (and future pages)
// can read and apply them.
const volumeSlider = document.getElementById("volume");
const musicVolumeSlider = document.getElementById("background-volume");

const savedVolume = localStorage.getItem("soundVolume");
if (savedVolume !== null) volumeSlider.value = savedVolume;

const savedMusicVolume = localStorage.getItem("musicVolume");
if (savedMusicVolume !== null) musicVolumeSlider.value = savedMusicVolume;

volumeSlider.addEventListener("input", () => {
  localStorage.setItem("soundVolume", volumeSlider.value);
});

musicVolumeSlider.addEventListener("input", () => {
  localStorage.setItem("musicVolume", musicVolumeSlider.value);
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
    const saved = JSON.parse(localStorage.getItem("keyBindings"));
    if (saved && saved.left && saved.right && saved.jump) return saved;
  } catch (e) {
    // ignore malformed data
  }
  return { ...DEFAULT_KEY_BINDINGS };
}

let keyBindings = loadKeyBindings();

function saveKeyBindings() {
  localStorage.setItem("keyBindings", JSON.stringify(keyBindings));
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
}

function captureRebindKey(e) {
  if (!listeningButton) return;
  e.preventDefault();
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
const savedDifficulty = localStorage.getItem("difficulty");
if (savedDifficulty) difficultySelect.value = savedDifficulty;

difficultySelect.addEventListener("change", () => {
  localStorage.setItem("difficulty", difficultySelect.value);
});

// -------------------------------------------------------------
// CLICK/TAP TO JUMP & SCREEN SHAKE
// -------------------------------------------------------------
// Both read back by game.js (screenShakeEnabled/clickToJumpEnabled) —
// simple on/off toggles that actually change behavior, unlike the old
// disabled "Screen Resolution" placeholder and dead "Mouse Clicks" preset
// they replaced.
const clickToJumpSelect = document.getElementById("click-to-jump");
const savedClickToJump = localStorage.getItem("clickToJump");
if (savedClickToJump) clickToJumpSelect.value = savedClickToJump;

clickToJumpSelect.addEventListener("change", () => {
  localStorage.setItem("clickToJump", clickToJumpSelect.value);
});

const screenShakeSelect = document.getElementById("screen-shake");
const savedScreenShake = localStorage.getItem("screenShake");
if (savedScreenShake) screenShakeSelect.value = savedScreenShake;

screenShakeSelect.addEventListener("change", () => {
  localStorage.setItem("screenShake", screenShakeSelect.value);
});
