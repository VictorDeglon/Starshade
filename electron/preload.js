// Exposes a small, explicit API to the renderer under window.starshadeDesktop.
// contextIsolation is on and nodeIntegration is off (see main.js), so this
// bridge is the only way game code can reach anything Node/Electron-specific
// — index.html/game.js otherwise run completely unmodified from the browser
// version.
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("starshadeDesktop", {
  checkForUpdate: () => ipcRenderer.invoke("starshade:check-for-update"),
  downloadUpdate: (dmgUrl, dmgName) =>
    ipcRenderer.invoke("starshade:download-update", { dmgUrl, dmgName }),
  openReleasePage: (url) => ipcRenderer.invoke("starshade:open-external", url),
  onDownloadProgress: (callback) => {
    const listener = (_event, progress) => callback(progress);
    ipcRenderer.on("starshade:download-progress", listener);
    return () => ipcRenderer.removeListener("starshade:download-progress", listener);
  },
});
