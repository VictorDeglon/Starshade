// Parametric SVG icon system for the Shop — one glyph library shared by
// every Particle/Skill/Power-Up/Accessory card instead of ~55 fully
// hand-authored one-off files. Each catalog entry in shopData.js just
// names a glyph key; buildShopIcon() below layers that glyph over a
// badge ring + radial glow (colored from the item's rarity) to build a
// "complex" (multi-element, not a flat single-path icon) SVG on demand.
// Loaded before shop.js (see index.html) so shop.js's card renderers can
// call buildShopIcon() directly.
//
// Every glyph is a 24x24 viewBox stroke drawing (no fills inside the
// glyph itself — fill/stroke color comes from the wrapping <g>, see
// buildShopIcon()) so the whole library stays visually consistent
// regardless of which artist-in-a-hurry wrote which path.
const ICON_GLYPHS = {
  blank: "",

  // ---- particles ----
  flame: '<path d="M12 2c3 5-1 6 0 10 2-1 3.5-3 3.5-3 2.5 3.5 1 9-3.5 11-4.5-2-6.5-6.5-4.5-11 1-2.5 3-4.5 4.5-7z"/>',
  snowflake: '<path d="M12 2v20M4.5 7l15 10M19.5 7l-15 10M8 4l4 3 4-3M8 20l4-3 4 3M2.5 9.5l4 1-1 4M21.5 9.5l-4 1 1 4M2.5 14.5l4-1-1-4M21.5 14.5l-4-1 1-4"/>',
  spiral: '<path d="M12 12c0-1.5 1-2.5 2.5-2.5s2.5 1.5 2.5 3.2-1.4 3.3-3.5 3.3-4.5-1.8-4.5-4.5 2.2-5.5 5.5-5.5 6.5 2.6 6.5 6.5-3.4 7.5-7.5 7.5"/>',
  bolt: '<path d="M13 2 4 14h6l-1 8 9-12h-6z"/>',
  sun: '<circle cx="12" cy="12" r="4.5"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>',
  vortex: '<circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 6.5 15.2M12 21a9 9 0 0 1-6.5-15.2"/><circle cx="12" cy="12" r="2.2"/>',
  comet: '<circle cx="17" cy="7" r="2.6"/><path d="M15 9 5 19M13 8.5 4 15M16.5 11 9 20"/>',
  petal: '<path d="M12 3c3 2 4 5 4 8s-1 6-4 8c-3-2-4-5-4-8s1-6 4-8z"/><path d="M12 11v10"/>',
  biohazard: '<circle cx="12" cy="12" r="2"/><circle cx="12" cy="5.5" r="3"/><circle cx="6.7" cy="15" r="3"/><circle cx="17.3" cy="15" r="3"/>',
  storm: '<path d="M6 15a4 4 0 0 1 1-7.9 5.5 5.5 0 0 1 10.6 1.6A3.5 3.5 0 0 1 17 15H6z"/><path d="M11 17l-2 4M15 17l-2 4"/>',
  aurora: '<path d="M2 17c2-4 4-2 6-6s4-2 6-6M2 12c2-4 4-2 6-6s4-2 6-6M8 22c2-4 4-2 6-6s4-2 6-6"/>',
  star: '<path d="M12 2l2.6 6.6L21 10l-5 4.2L17.5 21 12 17.3 6.5 21 8 14.2 3 10l6.4-1.4z"/>',

  // ---- skills ----
  dash: '<path d="M3 12h7l-2-5 10 5-10 5 2-5H3z"/>',
  feather: '<path d="M19 5c-6 0-13 4-13 12 0 1 1 2 2 2 8 0 12-7 12-13 0-.4-.1-.8-1-1z"/><path d="M9 17l9-11"/>',
  wall: '<path d="M5 3v18M5 8h7a4 4 0 0 0 0-8H5M5 16h5a3 3 0 0 0 0-6H5"/>',
  wave: '<path d="M3 12c2-4 4 4 6 0s4 4 6 0 4 4 6 0"/><circle cx="20" cy="12" r="1.3"/>',
  bounce: '<path d="M4 19l4-7 4 5 4-9 4 6"/><path d="M4 19h16"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/><path d="M4 4l2 2"/>',
  arrowDown: '<path d="M12 3v14M7 12l5 5 5-5"/><path d="M6 21h12"/>',
  target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="0.8" fill="currentColor"/>',
  shield: '<path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z"/><path d="M9 12l2 2 4-4"/>',
  flag: '<path d="M6 3v18"/><path d="M6 4h12l-3 4 3 4H6"/>',
  hourglass: '<path d="M6 3h12M6 21h12M7 3c0 5 4 6 5 9 1-3 5-4 5-9M7 21c0-5 4-6 5-9 1 3 5 4 5 9"/>',
  ghost: '<path d="M6 20V11a6 6 0 0 1 12 0v9l-2-2-2 2-2-2-2 2-2-2z"/><circle cx="9.5" cy="11" r="1" fill="currentColor"/><circle cx="14.5" cy="11" r="1" fill="currentColor"/>',
  belt: '<rect x="3" y="9" width="18" height="6" rx="2"/><path d="M6 9v6M10 9v6M14 9v6M18 9v6"/>',
  spring: '<path d="M7 4h10M7 4c-2 1-2 3 0 4s2 3 0 4 2 3 0 4 2 3 0 4M17 4c2 1 2 3 0 4s-2 3 0 4-2 3 0 4-2 3 0 4"/><path d="M7 20h10"/>',
  grip: '<path d="M4 20V9a4 4 0 0 1 8 0M8 9v11"/><path d="M12 20v-7a3 3 0 0 1 6 0v7"/>',
  feather2: '<path d="M19 5c-6 0-13 4-13 12 0 1 1 2 2 2 8 0 12-7 12-13 0-.4-.1-.8-1-1z" stroke-dasharray="2 2"/>',
  bolt2: '<path d="M13 2 4 14h6l-1 8 9-12h-6z"/><path d="M2 12h1M21 12h1"/>',
  dashLong: '<path d="M2 12h5l-1.5-4L14 12l-8.5 4L7 12"/><path d="M13 12h5l-1.5-4L23 12l-6.5 4L18 12" opacity="0.5"/>',
  coinStack: '<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/><path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/>',
  heart: '<path d="M12 21s-8-5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6-8 11-8 11z"/><path d="M9 10h2l1-2 2 4 1-2h2"/>',
  slingshot: '<path d="M6 21 12 6l6 15"/><path d="M9 21h6"/><path d="M12 2v6"/><circle cx="12" cy="9" r="1.4" fill="currentColor"/>',
  crosshair: '<circle cx="12" cy="12" r="7"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>',
  rocket: '<path d="M12 2c3 2 5 6 5 10 0 2-1 4-2 5l-3 3-3-3c-1-1-2-3-2-5 0-4 2-8 5-10z"/><circle cx="12" cy="10" r="1.6"/><path d="M9 17l-2 4M15 17l2 4"/>',
  anchor: '<circle cx="12" cy="5" r="2"/><path d="M12 7v14M6 13a6 6 0 0 0 12 0"/><path d="M4 13h4M16 13h4"/>',
  pulse: '<path d="M2 12h4l2-7 3 14 2-9 2 5h7"/>',

  // ---- power-ups ----
  wings: '<path d="M12 4c-3 2-9 3-10 8 3 0 6-1 8-3-1 3-1 6 2 9 3-3 3-6 2-9 2 2 5 3 8 3-1-5-7-6-10-8z"/>',
  coin: '<circle cx="12" cy="12" r="8"/><path d="M12 7v10M9 9.5h6M9 14.5h6"/>',
  medal: '<circle cx="12" cy="15" r="6"/><path d="M12 9v-2M8.5 6.8 7 2M15.5 6.8 17 2"/><path d="M9.7 13.3 12 17l2.3-3.7"/>',
  footprints: '<ellipse cx="9" cy="6" rx="2.2" ry="3"/><ellipse cx="9" cy="15" rx="2.2" ry="3.4"/><ellipse cx="16" cy="10" rx="2.2" ry="3"/><ellipse cx="16" cy="19" rx="2.2" ry="3.4"/>',
  stopwatch: '<circle cx="12" cy="13" r="8"/><path d="M12 13V9M9 2h6M12 2v2"/>',
  gift: '<rect x="4" y="9" width="16" height="11" rx="1.5"/><path d="M4 13h16M12 9v11"/><path d="M12 9c-1.5-4-6-4.5-6-1.5S9 9 12 9c3 0 6-2.5 6-4.5S13.5 5 12 9z"/>',
  trophy: '<path d="M7 4h10v5a5 5 0 0 1-10 0V4z"/><path d="M4 5h3v3a3 3 0 0 1-3-3zM20 5h-3v3a3 3 0 0 0 3-3z"/><path d="M10 15v3h4v-3M9 21h6"/>',
  lifebuoy: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M5.3 5.3l3.3 3.3M18.7 5.3l-3.3 3.3M5.3 18.7l3.3-3.3M18.7 18.7l-3.3-3.3"/>',
  waveform: '<path d="M2 12h2l2-6 2 12 2-14 2 16 2-10 2 4 2-2h2"/>',
  refresh: '<path d="M20 12a8 8 0 1 1-2.6-5.9"/><path d="M20 3v5h-5"/>',
  feather3: '<path d="M19 5c-6 0-13 4-13 12 0 1 1 2 2 2 8 0 12-7 12-13 0-.4-.1-.8-1-1z"/><path d="M9 17l9-11"/><path d="M12 14l3-3.6"/>',
  slingshotPlus: '<path d="M6 21 12 8l6 13"/><path d="M9 21h6"/><path d="M12 2v6"/><path d="M18 4h4M20 2v4"/>',
  hand: '<path d="M8 13V5.5a1.5 1.5 0 0 1 3 0V12"/><path d="M11 12V4a1.5 1.5 0 0 1 3 0v8"/><path d="M14 12V5.5a1.5 1.5 0 0 1 3 0V13"/><path d="M8 13l-2 .5c-1 .3-1 1.6-.2 2.3L9 19c1 1 2.3 1.5 3.7 1.5H15a4 4 0 0 0 4-4v-3.5"/>',
  clover: '<path d="M12 12c0-2.2-1.8-4-4-4s-4 1.8-4 4 1.8 4 4 4 4-1.8 4-4z"/><path d="M12 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"/><path d="M12 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"/><path d="M12 12v8"/>',
  wallet: '<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/><circle cx="16" cy="14" r="1.3" fill="currentColor"/>',
  umbrella: '<path d="M4 11a8 8 0 0 1 16 0z"/><path d="M12 11v8a2 2 0 0 1-3.5 1.3"/><path d="M12 3v2"/>',
  shieldPulse: '<path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z"/><path d="M8 12h2l1.5-2.5 1.5 5 1.5-2.5h2"/>',

  // ---- accessories ----
  crown: '<path d="M4 18h16l-1-8-4 3-3-6-3 6-4-3z"/><path d="M4 18v2h16v-2"/>',
  halo: '<ellipse cx="12" cy="6" rx="6" ry="2.2"/><ellipse cx="12" cy="6" rx="3.2" ry="1.1"/>',
  wingsSmall: '<path d="M11 8c-2 1-6 1-7 4 2 0 4-.5 5-1.5-1 2 0 3.5 1 4.5"/><path d="M13 8c2 1 6 1 7 4-2 0-4-.5-5-1.5 1 2 0 3.5-1 4.5"/>',
  visor: '<path d="M4 10a8 8 0 0 1 16 0"/><path d="M4 10h16v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2z"/>',
  horns: '<path d="M8 12c-2-3-1-7 1-9-1 3 0 6 2 7"/><path d="M16 12c2-3 1-7-1-9 1 3 0 6-2 7"/>',
  auraRing: '<circle cx="12" cy="12" r="9" stroke-dasharray="3 3"/><circle cx="12" cy="12" r="5" stroke-dasharray="2 2" opacity="0.6"/>',
  tail: '<path d="M11 13c3 0 7 1 8 5-3 1-6 0-7-3"/><path d="M19 18c1 1 1 3-1 4"/>',
  mask: '<path d="M2 9c3-2.5 7-3.5 10-3.5s7 1 10 3.5c-1 3.5-4.5 6-10 6S3 12.5 2 9z"/><circle cx="8" cy="9.5" r="1.3" fill="currentColor"/><circle cx="16" cy="9.5" r="1.3" fill="currentColor"/>',
  spikes: '<path d="M4 13 6 3l2 7 2-9 2 9 2-9 2 7 2-9 2 10"/>',
  scarf: '<path d="M3 9c5 2.5 13 2.5 18 0"/><path d="M14 9c1.5 4 0.5 9-2 11"/><path d="M9 9c-1 2.5-0.5 5 1 6"/>',
};

const RARITY_HEX = {
  common: "#9C97C4",
  rare: "#4FB3E0",
  epic: "#A855F7",
  legendary: "#F5B942",
  mythic: "#FF7AD9",
  custom: "#ffcf4d",
};

let iconInstanceCounter = 0;

// Builds one badge-ring + glyph SVG. `size` in px (the rendered <svg>'s
// width/height — the internal viewBox always stays 48x48 so every icon
// scales identically regardless of where it's used). `hover`/`claim` add
// the CSS classes game.css/shop.css key their animation loops off of.
function buildShopIcon(glyphKey, opts) {
  const { rarity = "common", size = 40 } = opts || {};
  const color = RARITY_HEX[rarity] || RARITY_HEX.common;
  const glyph = ICON_GLYPHS[glyphKey] || ICON_GLYPHS.blank;
  const uid = `shopicon-${iconInstanceCounter++}`;
  return `
    <svg class="shop-item-icon-svg" viewBox="0 0 48 48" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="${uid}-glow" cx="50%" cy="38%" r="65%">
          <stop offset="0%" stop-color="${color}" stop-opacity="0.55" />
          <stop offset="100%" stop-color="${color}" stop-opacity="0.05" />
        </radialGradient>
      </defs>
      <circle class="icon-glow-fill" cx="24" cy="24" r="21" fill="url(#${uid}-glow)" />
      <circle class="icon-ring-outer" cx="24" cy="24" r="21" fill="none" stroke="${color}" stroke-width="1" opacity="0.35" />
      <circle class="icon-ring-inner" cx="24" cy="24" r="16.5" fill="none" stroke="${color}" stroke-width="1" stroke-dasharray="2 3" opacity="0.5" />
      <g class="icon-glyph" stroke="${color}" stroke-width="1.9" fill="none" stroke-linecap="round" stroke-linejoin="round" transform="translate(12,12) scale(1)">
        ${glyph}
      </g>
    </svg>
  `;
}
