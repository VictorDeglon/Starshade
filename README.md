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
| Game engine | `game.js`, `level1.js`-`level100.js`, `levelB1.js`-`levelB10.js` | Physics, rendering, level loading, the pause/overlay system, 100 levels (including a handful of named branch levels) plus ten stand-alone, fully-themed branch levels reached only from the Level Map — see docs/gameplay.md |
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
