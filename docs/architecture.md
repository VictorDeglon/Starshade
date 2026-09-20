# Architecture

No build step, no bundler, no module system — every `.js` file is a plain
classic (non-module) `<script>`. That matters more than usual here because
of how level data is loaded (see below).

## Page flow

```
index.html --Play---------> loading.html --(1.5s fake progress)--> game.html
    |------Levels--------> levels.html --pick a level--> loading.html --> game.html
    |                          '--Back to Menu--> index.html
    |------Skins---------> skins.html --Back to Menu--> index.html
    |------Achievements--> achievements.html --Back to Menu--> index.html
    |----Settings--------> settings.html --Back to Menu--> index.html
    '----Contact---------> contact.html --Back to Menu--> index.html

game.html --pause menu--> Level Map / Achievements / Settings / Quit to Menu
game.html --(no next level)--> "You beat Starshade!" screen --Back--> index.html
```

`levels.html` picking a level just writes `localStorage.savedLevel` and
goes through the same `loading.html` → `game.html` path as Play — it's not
a separate way to enter the game, just a way to aim Play at a different
level. A level is unlocked once the one before it is in
`StarshadeEconomy.getCompletedLevels()`; level 1 is always unlocked.

Each page is a standalone HTML file with its own `<link>`/`<script>` tags —
there's no shared header/nav component, so navigation buttons are wired up
by hand in each page's own `*.js` file (`document.getElementById(...).
addEventListener('click', ...)`).

## Menu music (`script.js`) vs. game music (`game.js`)

These are two **separate** `Audio` objects that don't know about each other:

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
