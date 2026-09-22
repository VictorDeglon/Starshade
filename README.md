# Starshade

A browser-based 2D platformer — "The Cosmic Platformer." Plain HTML/CSS/JS,
no build step, no framework, no backend. Run it by serving the folder over
HTTP (see below) and opening `index.html`.

## Structure

**Single-page app — one HTML file, loaded once.** `index.html` is the
entire app: a persistent canvas plus every screen as a show/hide overlay
(loading, main menu, pause, settings, level map, achievements, shop,
contact). Nothing after the initial load is a real navigation — see
[docs/architecture.md](docs/architecture.md) for why and how.

| Area | Files | Purpose |
|---|---|---|
| App shell | `index.html`, `game.css` | Canvas, every overlay's markup, loading screen, main menu |
| Game engine | `game.js`, `level1.js`-`level100.js` | Physics, rendering, level loading, the pause/overlay system, 100 levels (including a handful of named branch levels — see docs/gameplay.md) |
| Level Map | `levels.js` (overlay markup lives in `index.html`) | Lock/current/completed state, jump to any unlocked level |
| Shop | `shop.js`, `shop.css`, `shopData.js`, `skinsData.js` | Skins gallery + custom skin builder, particles, skills, power-ups — buy/equip with coins earned from playing |
| Settings | `settings.js` | Volume, difficulty, controls/key rebinding, screen shake, click-to-jump, display name |
| Achievements | `achievements.js`, `achievementsData.js`, `achievements.css` | Unlock tracking + popup notifications |
| Contact | `contact.css` (markup/handlers live in `index.html`/`game.js`) | Feedback form (front-end only, no submit handler) |

See [docs/architecture.md](docs/architecture.md) for how the pages and
scripts connect, [docs/gameplay.md](docs/gameplay.md) for how the game
engine and all 100 levels work, [docs/assets.md](docs/assets.md) for the
audio/image assets, and [docs/known-issues.md](docs/known-issues.md) for
bugs found during review — which ones were fixed and which are still open.

## Running it locally

There's no build step, but the game **must** be served over `http://`, not
opened as a `file://` URL — `game.js` loads level files via a dynamically
injected `<script>` tag, which browsers block for local files. Any static
file server works, e.g.:

```bash
python3 -m http.server 8123
```

Then open `http://localhost:8123/index.html`.

## Controls

- Move: `A`/`D` or Arrow Left/Right
- Jump: `Space`, `W`, or Arrow Up (press again in mid-air for a double jump)

## macOS desktop app

`electron/main.js` and `electron/preload.js` package this exact game as a
native macOS app — same `index.html`/`game.js`/levels, unmodified, served
from a local `http://127.0.0.1` origin inside the app (not `file://`, for
the same dynamic-`<script>` reason as above) so it runs fully offline once
installed. `desktopUpdate.js` is the only game-side file this touches: it
feature-detects `window.starshadeDesktop` (injected by the preload script)
and is a no-op in the plain browser version.

```bash
npm install        # once
npm start           # run the desktop app in dev mode
npm run dist         # build release/Starshade-<version>-arm64.dmg locally, unsigned
```

**Updates:** on launch, the app calls GitHub's `releases/latest` API for
this repo and compares the tag against `package.json`'s `version`. If
newer, a corner banner offers to download that release's `.dmg` and opens
it in Finder — the user drags the new build over the old one. There's no
silent auto-update: the app isn't code-signed (no Apple Developer account),
so Gatekeeper needs a human to approve a new build either way.

**Cutting a release:** bump `version` in `package.json`, commit, then
`git tag vX.Y.Z && git push origin vX.Y.Z`. `.github/workflows/release-mac-app.yml`
builds on `macos-latest` and publishes the `.dmg` to a GitHub Release under
that tag — that's the release the update check above looks for. Since the
app is unsigned, first launch needs a right-click → Open (or, on newer
macOS, System Settings → Privacy & Security → "Open Anyway") to get past
Gatekeeper.
