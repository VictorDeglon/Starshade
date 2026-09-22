// Electron main process for the Starshade desktop app.
//
// Packages the exact same static game (index.html + game.js + level*.js
// etc.) that runs in a browser. It's served over a local http://127.0.0.1
// origin rather than opened as file:// because game.js loads level scripts
// via a dynamically injected <script> tag (see loadLevel() in game.js and
// the README's "Running it locally" section) — that pattern is unreliable
// under file://. This mirrors .claude/static-server.js, just pointed at the
// packaged app's bundled resources instead of the repo root, so the app
// plays fully offline once installed.
const { app, BrowserWindow, ipcMain, shell } = require("electron");
const http = require("http");
const https = require("https");
const fs = require("fs");
const path = require("path");

const GITHUB_OWNER = "VictorDeglon";
const GITHUB_REPO = "Starshade";

// In development this is the repo root; packaged, electron-builder copies
// the "files" listed in package.json into Contents/Resources/app.
const GAME_ROOT = app.isPackaged
  ? path.join(process.resourcesPath, "app")
  : path.join(__dirname, "..");

const MIME = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".css": "text/css",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".mp3": "audio/mpeg",
  ".json": "application/json",
  ".ico": "image/x-icon",
};

function startLocalServer() {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      let urlPath = decodeURIComponent(req.url.split("?")[0]);
      if (urlPath === "/") urlPath = "/index.html";
      const filePath = path.join(GAME_ROOT, urlPath);

      if (!filePath.startsWith(GAME_ROOT)) {
        res.writeHead(403);
        res.end("Forbidden");
        return;
      }

      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(404);
          res.end("Not found");
          return;
        }
        const ext = path.extname(filePath);
        res.writeHead(200, {
          "Content-Type": MIME[ext] || "application/octet-stream",
        });
        res.end(data);
      });
    });

    // Port 0 = OS picks any free local port; the app never needs a fixed
    // one since only this window ever talks to it.
    server.listen(0, "127.0.0.1", () => resolve(server));
    server.on("error", reject);
  });
}

let mainWindow;
let localServer;

async function createWindow() {
  // Reused across window recreations (e.g. clicking the dock icon after
  // closing the last window) rather than restarted each time — on macOS,
  // closing every window doesn't quit the app, so the server needs to
  // survive until the app actually quits (see "will-quit" below).
  if (!localServer) {
    localServer = await startLocalServer();
  }
  const { port } = localServer.address();

  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 960,
    minHeight: 600,
    backgroundColor: "#050012",
    title: "Starshade",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
  });

  mainWindow.setMenuBarVisibility(false);
  mainWindow.loadURL(`http://127.0.0.1:${port}/index.html`);

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

app.on("will-quit", () => {
  if (localServer) localServer.close();
});

// ---------------------------------------------------------------
// Update check — hits GitHub's public releases API (no auth needed) and
// compares the latest release tag against the running app's version. There
// is no silent auto-update: the app isn't code-signed (no paid Apple
// Developer account), so Gatekeeper needs a human to approve a new build
// via drag-install regardless. Instead this downloads the release's .dmg
// and opens it in Finder so the user just drags the new build over the old
// one.
// ---------------------------------------------------------------
function githubGet(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { "User-Agent": "Starshade-App" } }, (res) => {
        if (
          res.statusCode >= 300 &&
          res.statusCode < 400 &&
          res.headers.location
        ) {
          resolve(githubGet(res.headers.location));
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error(`GitHub API returned ${res.statusCode}`));
          res.resume();
          return;
        }
        let body = "";
        res.on("data", (chunk) => (body += chunk));
        res.on("end", () => {
          try {
            resolve(JSON.parse(body));
          } catch (err) {
            reject(err);
          }
        });
      })
      .on("error", reject);
  });
}

function compareVersions(a, b) {
  const pa = a.split(".").map(Number);
  const pb = b.split(".").map(Number);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const diff = (pa[i] || 0) - (pb[i] || 0);
    if (diff !== 0) return diff > 0 ? 1 : -1;
  }
  return 0;
}

ipcMain.handle("starshade:check-for-update", async () => {
  const release = await githubGet(
    `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/releases/latest`
  );
  const latestVersion = String(release.tag_name || "").replace(/^v/, "");
  const currentVersion = app.getVersion();
  const dmgAsset = (release.assets || []).find((a) => a.name.endsWith(".dmg"));

  return {
    currentVersion,
    latestVersion,
    updateAvailable:
      Boolean(latestVersion) && compareVersions(latestVersion, currentVersion) > 0,
    releaseUrl: release.html_url,
    releaseNotes: release.body || "",
    dmgUrl: dmgAsset ? dmgAsset.browser_download_url : null,
    dmgName: dmgAsset ? dmgAsset.name : null,
  };
});

ipcMain.handle("starshade:open-external", (_event, url) => {
  if (typeof url === "string" && /^https:\/\//.test(url)) {
    shell.openExternal(url);
  }
});

ipcMain.handle("starshade:download-update", async (event, { dmgUrl, dmgName }) => {
  const destPath = path.join(app.getPath("downloads"), dmgName);
  const sender = event.sender;

  await downloadWithProgress(dmgUrl, destPath, (receivedBytes, totalBytes) => {
    sender.send("starshade:download-progress", { receivedBytes, totalBytes });
  });

  await shell.openPath(destPath);
  return { path: destPath };
});

function downloadWithProgress(url, destPath, onProgress) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);

    function request(currentUrl) {
      https
        .get(currentUrl, { headers: { "User-Agent": "Starshade-App" } }, (res) => {
          if (
            res.statusCode >= 300 &&
            res.statusCode < 400 &&
            res.headers.location
          ) {
            request(res.headers.location);
            return;
          }
          if (res.statusCode !== 200) {
            file.close();
            fs.unlink(destPath, () => {});
            reject(new Error(`Download failed with status ${res.statusCode}`));
            res.resume();
            return;
          }

          const totalBytes = Number(res.headers["content-length"] || 0);
          let receivedBytes = 0;
          res.on("data", (chunk) => {
            receivedBytes += chunk.length;
            onProgress(receivedBytes, totalBytes);
          });
          res.pipe(file);
        })
        .on("error", (err) => {
          file.close();
          fs.unlink(destPath, () => {});
          reject(err);
        });
    }

    file.on("finish", () => resolve());
    file.on("error", (err) => {
      fs.unlink(destPath, () => {});
      reject(err);
    });

    request(url);
  });
}
