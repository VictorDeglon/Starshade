// Skin data. `preview` is a CSS background value — most skins are drawn
// entirely in CSS (gradients + a glow) since we only actually have art for
// one of them (`assets/skins/EclipseSkin.png`); the other six used to
// reference skin1.jpg...skin6.jpg, files that were never included in the
// project. Rendering everything as CSS means every skin has a real,
// distinct look instead of five broken-image icons.
const skins = [
  {
    name: "Frost Hunter",
    cost: "500 Coins",
    preview:
      "radial-gradient(circle at 35% 30%, #e8faff, #9fdfff 40%, #1c4a66 100%)",
    glow: "rgba(159, 223, 255, 0.55)",
  },
  {
    name: "Shadow Stalker",
    cost: 'Achievement: "Silent Walker"',
    preview:
      "radial-gradient(circle at 35% 30%, #4a3b6b, #1a0f2e 55%, #050208 100%)",
    glow: "rgba(106, 66, 179, 0.5)",
  },
  {
    name: "Crimson Fury",
    cost: "750 Coins",
    preview:
      "radial-gradient(circle at 35% 30%, #ffdca8, #e8542f 45%, #4a0d0d 100%)",
    glow: "rgba(232, 84, 47, 0.55)",
  },
  {
    name: "Golden Glider",
    cost: "1,250 Coins",
    preview:
      "radial-gradient(circle at 35% 30%, #fff6d8, #ffcf4d 45%, #6b4c00 100%)",
    glow: "rgba(255, 207, 77, 0.55)",
  },
  {
    name: "Azure Phantom",
    cost: "1,500 Coins",
    preview:
      "radial-gradient(circle at 35% 30%, #e4f7ff, #4fb3e0 45%, #0c2e4a 100%)",
    glow: "rgba(79, 179, 224, 0.55)",
  },
  {
    name: "Obsidian Wraith",
    cost: 'Achievement: "Conqueror of Shadows"',
    preview:
      "radial-gradient(circle at 35% 30%, #6a2fa0, #1a0a2e 55%, #000000 100%)",
    glow: "rgba(106, 47, 160, 0.6)",
  },
  {
    name: "Eclipse",
    cost: 'Achievement: "The End?"',
    image: "assets/skins/EclipseSkin.png",
    glow: "rgba(160, 66, 211, 0.6)",
  },
];

let currentIndex = 0;

const track = document.getElementById("showcase-track");
const dotsContainer = document.getElementById("dots");

function renderSkin(index) {
  const skin = skins[index];

  track.innerHTML = "";
  const card = document.createElement("div");
  card.className = "skin-card";
  card.style.setProperty("--glow", skin.glow);

  const preview = document.createElement("div");
  preview.className = "skin-preview";
  if (skin.image) {
    preview.style.backgroundImage = `url('${skin.image}')`;
  } else {
    preview.style.background = skin.preview;
  }

  const info = document.createElement("div");
  info.className = "skin-info";
  info.innerHTML = `<h2>${skin.name}</h2><p><span class="coins">${skin.cost}</span></p>`;

  card.appendChild(preview);
  card.appendChild(info);
  track.appendChild(card);

  // Re-trigger the CSS entrance animation on every render.
  card.classList.remove("enter");
  requestAnimationFrame(() => card.classList.add("enter"));

  renderDots(index);
}

function renderDots(activeIndex) {
  dotsContainer.innerHTML = "";
  skins.forEach((skin, index) => {
    const dot = document.createElement("button");
    dot.className = "dot" + (index === activeIndex ? " active" : "");
    dot.setAttribute("aria-label", `Show ${skin.name}`);
    dot.addEventListener("click", () => goTo(index));
    dotsContainer.appendChild(dot);
  });
}

function goTo(index) {
  currentIndex = (index + skins.length) % skins.length;
  renderSkin(currentIndex);
}

document.getElementById("prev-button").addEventListener("click", () => {
  goTo(currentIndex - 1);
});

document.getElementById("next-button").addEventListener("click", () => {
  goTo(currentIndex + 1);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") goTo(currentIndex - 1);
  if (e.key === "ArrowRight") goTo(currentIndex + 1);
});

document.getElementById("back-button").addEventListener("click", () => {
  window.location.href = "index.html";
});

renderSkin(currentIndex);
