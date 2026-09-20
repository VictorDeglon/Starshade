// Wires every .overlay-close-x button (see index.html — one per overlay,
// a DOM sibling of that overlay's .menu-panel so it never scrolls away)
// to a click on that overlay's real Back button (data-closes names its
// id). Deliberately a separate, tiny, standalone file rather than adding
// this to game.js: it only ever forwards a click, needs no game state,
// and every other overlay script here is already its own small IIFE for
// the same "don't add unrelated surface area to game.js" reason — see
// docs/architecture.md.
(function () {
  document.querySelectorAll(".overlay-close-x").forEach((closeButton) => {
    const targetId = closeButton.dataset.closes;
    const target = targetId && document.getElementById(targetId);
    if (!target) return;
    closeButton.addEventListener("click", () => target.click());
  });
})();
