// Desktop-app update banner. window.starshadeDesktop only exists when this
// same index.html is running inside the Electron app (see
// electron/preload.js) — when served as the plain browser game it's
// undefined, so this whole file is a silent no-op there.
(function () {
  if (!window.starshadeDesktop) return;

  const banner = document.getElementById("desktopUpdateBanner");
  const messageEl = document.getElementById("desktopUpdateMessage");
  const actionButton = document.getElementById("desktopUpdateAction");
  const dismissButton = document.getElementById("desktopUpdateDismiss");
  if (!banner || !messageEl || !actionButton || !dismissButton) return;

  let pendingUpdate = null;

  function showBanner(text, actionText) {
    messageEl.textContent = text;
    actionButton.textContent = actionText;
    banner.classList.remove("hidden");
  }

  dismissButton.addEventListener("click", () => {
    banner.classList.add("hidden");
  });

  actionButton.addEventListener("click", async () => {
    if (!pendingUpdate) return;

    if (!pendingUpdate.dmgUrl) {
      window.starshadeDesktop.openReleasePage(pendingUpdate.releaseUrl);
      return;
    }

    actionButton.disabled = true;
    const stopListening = window.starshadeDesktop.onDownloadProgress(
      ({ receivedBytes, totalBytes }) => {
        if (totalBytes) {
          const pct = Math.round((receivedBytes / totalBytes) * 100);
          actionButton.textContent = `Downloading… ${pct}%`;
        } else {
          actionButton.textContent = "Downloading…";
        }
      }
    );

    try {
      await window.starshadeDesktop.downloadUpdate(
        pendingUpdate.dmgUrl,
        pendingUpdate.dmgName
      );
      messageEl.textContent =
        "Downloaded — open the mounted disk image and drag Starshade into Applications to finish.";
      actionButton.textContent = "Done";
    } catch (err) {
      messageEl.textContent = "Update download failed — try again later.";
      actionButton.textContent = "Retry";
      actionButton.disabled = false;
    } finally {
      stopListening();
    }
  });

  window.starshadeDesktop
    .checkForUpdate()
    .then((result) => {
      if (!result || !result.updateAvailable) return;
      pendingUpdate = result;
      const actionText = result.dmgUrl ? "Download update" : "View release";
      showBanner(
        `Starshade v${result.latestVersion} is available (you have v${result.currentVersion}).`,
        actionText
      );
    })
    .catch(() => {
      // Offline or GitHub unreachable — fail silently. The game itself
      // works fully offline regardless of whether this check succeeds.
    });
})();
