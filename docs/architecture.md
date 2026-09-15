# Architecture

No build step, no bundler, no module system — every `.js` file is a plain
classic (non-module) `<script>`. That matters more than usual here because
of how level data is loaded (see below).

## Page flow

```
index.html --Play--> loading.html --(1.5s fake progress)--> game.html
    |------Skins----> skins.html --Back to Menu--> index.html
    |----Settings---> settings.html --Back to Menu--> index.html
    '----Contact----> contact.html --Back to Menu--> index.html

game.html --(no next level)--> "You beat Starshade!" screen --Back--> index.html
```

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
  because browsers block autoplay with sound before user interaction).

Both read/write the same `localStorage.musicVolume` key (0–100, set from the
Settings page) so the volume setting applies consistently even though the
two players are otherwise independent.

## Level loading — the one thing to know before touching `game.js`

`game.js` defines `loadLevel(levelNumber)`, which:

1. Removes whatever `<script id="activeLevelScript">` is currently on the
   page (if any).
2. Resets `window.platforms`, `window.deadlyPlatforms`, `window.spikes`,
   `window.checkpoints`, `window.levelText` to empty/blank.
3. Injects a fresh `<script id="activeLevelScript" src="levelN.js">`.

Each `levelN.js` file declares its data with top-level `const`/`let`
(`const platforms = [...]`, `let levelText = "Level N"`, etc.) using the
**same identifier names** in every level file.

This is why `game.html` must only ever have **one** level script attached
to the page at a time. Top-level `let`/`const`/`class` declared in any
`<script>` tag on a page share **one global lexical scope** across the whole
document — if two `<script>` tags each declare `const platforms = [...]`,
the second one throws `SyntaxError: Identifier 'platforms' has already been
declared` the moment it runs, and that error kills the *entire* script (the
whole file fails to execute, not just that one line, because redeclaration
is caught at parse time). `game.html` used to statically include
`level1.js` *and* `level2.js` directly, which hit exactly this — see
[known-issues.md](known-issues.md#1-critical--every-page-load-of-gamehtml-threw-a-syntaxerror).

Because of this constraint, level transitions in `game.js` don't swap the
script in-place — `loadNextLevel`-style hot-swapping would still work once
per transition, but the actual mechanism used is simpler and sidesteps the
scoping issue entirely: reaching the final checkpoint of a level sets
`localStorage.savedLevel = currentLevel + 1` and calls
`window.location.reload()`, which throws away the whole page (and its global
scope) and starts over. The bottom of `game.js` reads `savedLevel` back out
of `localStorage` on that fresh load to pick up where it left off. If
`loadLevel()` for that number 404s (i.e. there's no next `levelN.js`), the
`.catch()` shows the "You beat Starshade!" overlay instead.
