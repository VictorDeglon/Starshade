document.getElementById("back-button").addEventListener("click", () => {
  window.location.href = "index.html"; // Navigates to index page
});

// Persist the volume sliders to localStorage so game.js (and future pages)
// can read and apply them. Other controls on this page (graphics quality,
// controls scheme, key bindings, resolution) are not implemented yet — see
// docs/settings.md.
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
