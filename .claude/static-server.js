// Minimal static file server — stand-in for `python3 -m http.server`,
// which is currently blocked on this machine by an unaccepted Xcode
// license (python3 is an Apple-provided CLT stub; node is Homebrew-
// installed and unaffected). Usage: node .claude/static-server.js [port]
const http = require("http");
const fs = require("fs");
const path = require("path");

const port = Number(process.argv[2]) || 8123;
const root = path.join(__dirname, "..");

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

http
  .createServer((req, res) => {
    let urlPath = decodeURIComponent(req.url.split("?")[0]);
    if (urlPath === "/") urlPath = "/index.html";
    const filePath = path.join(root, urlPath);

    if (!filePath.startsWith(root)) {
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
      res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
      res.end(data);
    });
  })
  .listen(port, () => {
    console.log(`Serving ${root} at http://localhost:${port}`);
  });
