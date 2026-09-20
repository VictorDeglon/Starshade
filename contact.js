document.getElementById("back-button").addEventListener("click", () => {
  window.location.href = "index.html"; // Navigates to index page
});

// Top-corner back arrow — delegates to the handler above.
document.getElementById("top-back-button").addEventListener("click", () => {
  document.getElementById("back-button").click();
});
