// Set up the audio element and audio context
const audioElement = new Audio("assets/music/starshade.mp3");
audioElement.loop = true; // Loop the music indefinitely

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const track = audioContext.createMediaElementSource(audioElement);
const gainNode = audioContext.createGain();
track.connect(gainNode).connect(audioContext.destination);

gainNode.gain.value = 0; // Start muted for fade-in

// Fade-in function to gradually increase volume up to the saved music
// volume setting (defaults to the pre-existing 100% if none is set yet)
function fadeIn(duration = 3000) {
  const savedMusicVolume = parseInt(localStorage.getItem("musicVolume"));
  const targetGain = isNaN(savedMusicVolume) ? 1 : savedMusicVolume / 100;

  const step = 0.01;
  const interval = duration / (targetGain / step || 1);
  let currentGain = gainNode.gain.value;

  const fade = setInterval(() => {
    if (currentGain < targetGain) {
      currentGain += step;
      gainNode.gain.value = Math.min(currentGain, targetGain);
    } else {
      clearInterval(fade);
    }
  }, interval);
}

// Start music with fade-in
function startMusic() {
  if (audioContext.state === "suspended") {
    audioContext.resume();
  }
  audioElement.play().catch((err) => console.error("Autoplay blocked:", err));
  fadeIn(3000); // Fade-in duration (3 seconds)

  // Set flag in localStorage to keep music playing across pages
  localStorage.setItem("musicPlaying", "true");
}

// "Welcome back" greeting using the Display Name set on the Settings page
// (see settings.js) — nothing shown for a first-time/nameless visitor.
const playerName = localStorage.getItem("playerName");
if (playerName) {
  document.getElementById("welcome-message").textContent =
    `Welcome back, ${playerName}!`;
}

// Check if music should be playing when the page is loaded
window.addEventListener("load", () => {
  if (localStorage.getItem("musicPlaying") === "true") {
    startMusic();
  }
});

// Trigger the music when the player clicks the "Start Game" button
document.getElementById("start-button").addEventListener("click", () => {
  startMusic();
  window.location.href = "loading.html"; // Redirect to loading page
});

document.getElementById("settings-button").addEventListener("click", () => {
  window.location.href = "settings.html"; // Navigates to settings page
});

document.getElementById("levels-button").addEventListener("click", () => {
  window.location.href = "levels.html"; // Navigates to the level-select map
});

document.getElementById("skins-button").addEventListener("click", () => {
  startMusic();
  window.location.href = "skins.html"; // Navigates to skins page
});

document.getElementById("contact-button").addEventListener("click", () => {
  window.location.href = "contact.html"; // Navigates to contact page
});
