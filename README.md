# Starshade

A browser-based 2D platformer — "The Cosmic Platformer." Plain HTML/CSS/JS,
no build step, no framework, no backend. Run it by serving the folder over
HTTP (see below) and opening `index.html`.

## Structure

Each screen is its own HTML/CSS/JS trio:

| Screen | Files | Purpose |
|---|---|---|
| Main menu | `index.html`, `styles.css`, `script.js` | Title screen: Play, Levels, Skins, Settings, Contact |
| Loading | `loading.html`, `loading.css`, `loading.js` | Fake progress bar between menu and game |
| Game | `game.html`, `game.css`, `game.js`, `level1.js`-`level100.js` | The actual platformer, 100 levels (including a handful of named branch levels — see docs/gameplay.md) |
| Level Map | `levels.html`, `levels.css`, `levels.js` | Level-select grid — lock/current/completed state, jump to any unlocked level |
| Skins | `skins.html`, `skins.css`, `skins.js` | Skin shop — buy/equip skins with coins earned from playing |
| Settings | `settings.html`, `settings.js` (styled via `styles.css`) | Volume, difficulty, controls/key rebinding, screen shake, click-to-jump, display name |
| Contact | `contact.html`, `contact.css`, `contact.js` | Feedback form (front-end only, no submit handler) |

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
