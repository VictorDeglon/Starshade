# Architecture

No build step, no bundler, no module system — every `.js` file is a plain
classic (non-module) `<script>`. That matters more than usual here because
of how level data is loaded (see below).

## Single-page app — one HTML file, loaded once

`index.html` is now the *entire* app. There used to be 8 separate HTML
pages (`index.html`, `loading.html`, `game.html`, `levels.html`,
`skins.html`, `settings.html`, `achievements.html`, `contact.html`), each
a real `window.location.href` navigation apart. Every one of those screens
is now a `<div class="menu">` overlay inside `index.html` itself, shown or
hidden with a `.hidden` class toggle instead of a navigation — the browser
loads this one page exactly once per app launch (a real refresh/URL entry)
and never again for the rest of the session.

```
Loading overlay (once, at launch)
    |
    +--(!isTouchDevice)--> Main Menu overlay --Play--> game running
    |
    '--(isTouchDevice)---> game running directly (rotate-prompt CSS gates
                            visibility until the phone is in landscape —
                            see game.css's `(pointer: coarse) and
                            (orientation: portrait)` rule; nothing to tap)

game running --pause menu / main menu--> Settings, Level Map, Achievements,
    Shop, Contact (all overlays — see below) / Main Menu (was "Quit to
    Menu"; now just shows the main-menu overlay, doesn't navigate)
game running --(no next level)--> "You beat Starshade!" screen --Back-->
    main-menu overlay
```

A level picked from the Level Map, or Play pressed from the main menu
before any run has started, both just call `startGame()`/`loadLevel()`
in-page — never a separate way to "enter the game." A level is unlocked
once the one before it is in `StarshadeEconomy.getCompletedLevels()`;
level 1 is always unlocked.

**Why the merge:** the pause menu's Settings/Level Map/Achievements were
already overlays rather than navigations (a prior change, kept as-is) for
one specific reason — `game.js`'s `audio` element gets torn down and
recreated by any real navigation, silently cutting the music, and a
navigation also loses all in-memory level/physics state. That same
argument applies to *every* screen once you don't want the loading screen
replaying on every single Play click — so the main menu, Shop, and
Contact became overlays too, and `index.html` absorbed everything
`game.html`/`loading.html`/`skins.html`/`contact.html` used to be.
`game.html`, `loading.html`/`.js`/`.css`, `skins.html`/`.js`/`.css`
(replaced by `shop.js`/`shop.css`), `contact.html`/`.js`, `styles.css`,
and the standalone `levels.html`/`.css`, `settings.html`, and
`achievements.html` (their embedded/overlay versions are the only copies
left) are all deleted — nothing else in the repo referenced them once
this landed.

**Two "root" screens, five "sub" overlays.** `game.js` tracks
`ROOT_MENU_IDS = ["pauseMenu", "mainMenuOverlay"]` — exactly one of these
two is visible whenever a sub-overlay is opened, and `openSubOverlay()`
remembers which one to restore when that sub-overlay closes (Back, the
top-left arrow, or Escape). `SUB_OVERLAY_IDS` covers
`settingsOverlay`/`levelMapOverlay`/`achievementsOverlay`/`shopOverlay`/
`contactOverlay`. This generalizes what used to be a pause-menu-only
`SUB_OVERLAY_IDS` covering just the first three — the same
`window.closeSettingsOverlay`/`window.startLevelFromOverlay`/
`window.closeAchievementsOverlay`/`window.closeShopOverlay`/
`window.closeContactOverlay` detection functions each embedded script
checks for still work exactly the same way, there just isn't a standalone
page for any of them to fall back to anymore — `shop.js` (skins.js's
replacement) and the main-menu/contact wiring in `game.js` were written
overlay-only from the start, no dual-mode branching needed.

Every embedded script (`settings.js`, `levels.js`, `achievements.js`,
`shop.js`) is still wrapped in its own IIFE — without that, several of
their top-level names collide with `game.js`'s own (or each other's) once
every script shares one document's global scope, which throws the exact
`SyntaxError` described below for level scripts.

## Menu music (was `script.js`) vs. game music (`game.js`)

`script.js` — the old main-menu page's separate `AudioContext`+`GainNode`
fade-in player — is retired along with `index.html`'s old standalone form.
There is now exactly one `Audio` object in the whole app (`game.js`'s),
started on the first click/keypress and never recreated, since there's
only one page load left to recreate it on.

Historical two-player split (no longer applies, kept for context on why
`game.js`'s player is written the way it is):

- `script.js` (loaded only by `index.html`) drives the main-menu track via
  the Web Audio API (`AudioContext` + `GainNode`) so it can fade in over 3
  seconds. It sets `localStorage.musicPlaying = "true"` when started, but
  that flag is only ever read back by `script.js` itself on `index.html` —
  no other page includes `script.js`, so navigating away always stops this
  track (a fresh `Audio`/`AudioContext` is created if you land back on
  `index.html`).
- `game.js` (loaded only by `game.html`) creates its own plain `Audio` for
  `starshade.mp3` and starts it on the player's first click/keypress (needed
  because browsers block autoplay with sound before user interaction). This
  one **Audio element is created exactly once per game.html page load** and
  is never recreated or paused by a level transition (see below) — that's
  what makes the music keep playing seamlessly as you move from level to
  level.

Both read/write the same `localStorage.musicVolume` key (0–100, set from the
Settings page) so the volume setting applies consistently even though the
two players are otherwise independent.

## Level loading — the one thing to know before touching `game.js`

`game.js` defines `loadLevel(levelNumber)`, which:

1. Removes whatever `<script id="activeLevelScript">` is currently on the
   page (if any).
2. Resets `window.platforms`, `window.deadlyPlatforms`, `window.spikes`,
   `window.checkpoints`, `window.levelText` to empty/blank.
3. Injects a fresh `<script id="activeLevelScript" src="levelN.js?v=2">`
   (the `?v=2` cache-busts a browser that cached an old copy of that exact
   URL under the previous file format — see below).

**Each `levelN.js` file assigns `window.platforms = [...]`,
`window.levelText = "..."`, etc. — plain property writes, not
`const`/`let` declarations.** This is deliberate and easy to get wrong if
you're used to normal JS scoping: top-level `let`/`const`/`class` declared
in any `<script>` tag on a page share **one global lexical scope** across
the whole document, so if a level file declared `const platforms = [...]`
and a *second* level script also declared `const platforms = [...]` later
in the same page's lifetime, the second one would throw `SyntaxError:
Identifier 'platforms' has already been declared` — a parse-time error
that kills that entire script, not just the one line. `game.html` used to
statically include both `level1.js` and `level2.js` and hit exactly this
(see [known-issues.md](known-issues.md)). Plain `window.foo = ...`
assignment has no such restriction — it can be repeated any number of
times — which is what actually lets `loadLevel()` be called again and
again, in-page, as the player advances through all 25 levels.

Reaching a level's final checkpoint doesn't reload the page at all
anymore. It starts a fade-to-black (`isFading`/`fadeDirection` in
`game.js`), and once the screen is fully black, `advanceToNextLevel()`
awards that level's coins, increments `currentLevel`, and calls
`loadLevel()` for the next one — all while the same `Audio` object from
step zero keeps playing, since nothing about this path ever touches it.
`currentLevel` is also written to `localStorage.savedLevel` on every
transition purely so a **manual page refresh** resumes roughly where you
left off; it's not required for the in-page advance to work. If
`loadLevel()` 404s (there's no next `levelN.js`), the `.catch()` shows the
"You beat Starshade!" screen and resets `savedLevel` back to `1` so the
next "Play" from the main menu starts a fresh run instead of immediately
re-hitting the same "no next level" case.
