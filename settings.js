document.getElementById("back-button").addEventListener("click", () => {
  window.location.href = "index.html"; // Navigates to index page
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
// A convenience that overwrites all three bindings at once. "Mouse Clicks"
// isn't implemented -- the game's movement is a physics-based platformer
// (gravity, jump arcs), not a click-to-move scheme, so there's nothing
// sensible to bind it to yet.
const controlsSelect = document.getElementById("controls");

controlsSelect.addEventListener("change", () => {
  const preset = CONTROL_PRESETS[controlsSelect.value];
  if (!preset) return; // "mouseclicks" -- no preset defined yet
  keyBindings = { ...preset };
  saveKeyBindings();
  renderBindingLabels();
});
