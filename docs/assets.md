# Assets

## Images

- `starshade.png` — the game's logo/favicon, used across every page.
- `assets/icons/icon-192.png`, `assets/icons/icon-512.png` — generated from
  `starshade.png` (`sips -z <size> <size> starshade.png`) for
  `manifest.json`'s home-screen icon — see
  [gameplay.md](gameplay.md#fullscreen-and-staying-installed). Regenerate
  the same way if `starshade.png` ever changes; nothing keeps them in sync
  automatically.
- `assets/skins/EclipseSkin.png` — the only real skin artwork that shipped.
  The other six skins referenced in the original `skins.html`
  (`skin1.jpg`...`skin6.jpg`) were never included in the project — those
  files don't exist anywhere in the zip this was built from. Rather than
  ship five broken `<img>`s, the skins carousel (`skins.js`) renders those
  skins as CSS radial-gradient "orbs" with a themed glow instead — see
  [architecture.md](architecture.md) if you're adding a skin and want to
  swap in real art later (replace a skin's `preview` gradient with an
  `image` path, same as the Eclipse entry).

## Audio

- `assets/music/starshade.mp3` — the only track actually used in the game
  right now (main menu, via `script.js`'s `AudioContext`, and in-game, via
  `game.js`'s own `Audio` — see [architecture.md](architecture.md) for why
  there are two separate players for the same file).
- `assets/music/futuristicLevel.mp3`, `assets/music/finalLevel.mp3` — not
  referenced by any code. Presumably intended for later levels; nothing
  currently swaps the track based on `currentLevel`.
- `assets/sfx/` — empty. No sound-effect files exist and nothing in
  `game.js` plays one (landing, jumping, and dying are all silent aside
  from music).
- `assets/RAW_ASSETS/` — a handful of unprocessed/original audio takes
  (a footstep thud, a respawn line in two takes, an unlabeled "sound
  effect," and one longer mixed file). None of these are referenced by any
  page or script — they read as source material for whoever was going to
  cut the `assets/sfx/` set, kept here rather than deleted since they're
  not obviously replaceable if lost.

If you want to wire up level-specific music or actual sound effects, both
`futuristicLevel.mp3`/`finalLevel.mp3` and the `RAW_ASSETS` files are the
starting material already in the repo — nothing needs to be sourced from
scratch.
