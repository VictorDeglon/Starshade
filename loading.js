// Select elements for loading
const loadingPopup = document.getElementById("loading-popup");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");

// Function to start loading and progress bar
function startLoadingSequence() {
  let progress = 0;

  const loadingInterval = setInterval(() => {
    progress += Math.floor(Math.random() * 10) + 5;
    if (progress > 100) progress = 100;

    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${progress}%`;

    if (progress === 100) {
      clearInterval(loadingInterval);

      setTimeout(() => {
        loadingPopup.style.opacity = "0"; // Fade out

        setTimeout(() => {
          window.location.href = "game.html"; // Redirect to the game page
        }, 500); // Wait for fade-out to finish
      }, 500);
    }
  }, 300);
}

// Start the loading sequence when the document is ready
document.addEventListener("DOMContentLoaded", () => {
  startLoadingSequence();
});
