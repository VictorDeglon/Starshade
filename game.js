const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Set canvas dimensions, and keep them in sync with the window — this used
// to run once at load, which (rarely) could pick up a 0x0 size if the
// viewport hadn't finished laying out yet, and never noticed an actual
// window resize either since nothing re-ran it.
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Game settings
const gravity = 0.5;
const jumpStrength = -12;
const horizontalSpeed = 5;
let doubleJumpUsed = false;

// Difficulty (set on the Settings page, StarshadeEconomy.getDifficulty()
// reads the same localStorage key) — Easy slows hazards down and widens
// the checkpoint touch radius; Hard speeds hazards up and tightens it.
// Coin rewards scale to match (see skinsData.js).
const DIFFICULTY_SETTINGS = {
  easy: { platformSpeedMultiplier: 0.7, checkpointRadius: 28 },
  normal: { platformSpeedMultiplier: 1, checkpointRadius: 20 },
  hard: { platformSpeedMultiplier: 1.3, checkpointRadius: 14 },
};
const difficultySettings =
  DIFFICULTY_SETTINGS[StarshadeEconomy.getDifficulty()] ||
  DIFFICULTY_SETTINGS.normal;

// Camera settings
let cameraOffsetX = 0;
const cameraSmoothing = 0.12; // lower = more lag/trailing behind the player

// Screen shake (triggered on death)
let shakeTime = 0;
let shakeMagnitude = 0;

// Player squash & stretch animation
let squashX = 1;
let squashY = 1;
let wasGrounded = false;

// -------------------------------------------------------------
// PARTICLES
// -------------------------------------------------------------
// A minimal, allocation-light particle system: plain objects in one
// array, updated and drawn every frame, pruned once their life runs out.
// Used for jump dust, landing impact, death shatter, checkpoint sparkle,
// and (for skins that opt in via `trail: true`) a continuous motion trail.
let particles = [];

function spawnParticles(x, y, count, options = {}) {
  const {
    colors = ["rgba(255,255,255,0.9)"],
    speed = 3,
    life = 30,
    size = 3,
    gravity: particleGravity = 0.15,
    spread = Math.PI * 2,
    baseAngle = 0,
  } = options;
  for (let i = 0; i < count; i++) {
    const angle = baseAngle + (Math.random() - 0.5) * spread;
    const velocity = speed * (0.5 + Math.random() * 0.5);
    particles.push({
      x,
      y,
      vx: Math.cos(angle) * velocity,
      vy: Math.sin(angle) * velocity,
      life,
      maxLife: life,
      size: size * (0.6 + Math.random() * 0.8),
      color: colors[Math.floor(Math.random() * colors.length)],
      gravity: particleGravity,
    });
  }
}

function updateParticles() {
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.vy += p.gravity;
    p.x += p.vx;
    p.y += p.vy;
    p.life--;
    if (p.life <= 0) particles.splice(i, 1);
  }
}

function drawParticles() {
  particles.forEach((p) => {
    ctx.save();
    ctx.globalAlpha = Math.max(0, p.life / p.maxLife);
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x - cameraOffsetX, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  });
}

// Fade settings — direction 1 = fading to black, -1 = fading back in,
// 0 = pinned at full black waiting for the next level to finish loading.
let isFading = false;
let fadeOpacity = 0;
let fadeDirection = 1;
let fadeCallback = null;

// Audio
const audio = new Audio("./assets/music/starshade.mp3");
audio.loop = true;
const savedMusicVolume = parseInt(localStorage.getItem("musicVolume"));
audio.volume = isNaN(savedMusicVolume) ? 0.33 : savedMusicVolume / 100;

function startAudioOnInteraction() {
  audio
    .play()
    .then(() => {
      console.log("Audio playback started successfully.");
      document.removeEventListener("click", startAudioOnInteraction);
      document.removeEventListener("keydown", startAudioOnInteraction);
    })
    .catch((error) => {
      console.error("Audio playback failed:", error);
    });
}
document.addEventListener("click", startAudioOnInteraction);
document.addEventListener("keydown", startAudioOnInteraction);

// Level state
let textOpacity = 1;
let textFadeStartTime = null;

// Set current level from saved data if it exists, otherwise start at 1.
// Unlike the old reload-based flow, this is now only a "resume after a
// manual browser refresh" convenience — normal level-to-level progress
// happens in-page via advanceToNextLevel() and never touches this read.
let currentLevel = parseInt(localStorage.getItem("savedLevel"), 10) || 1;

// Player setup — shape/color now comes from the equipped skin (see
// drawPlayer()), so there's nothing skin-related to set up here.
const player = {
  x: 100,
  y: 300,
  width: 25,
  height: 25,
  dx: 0,
  dy: 0,
};

// Controls
const keys = {};

// Rebindable via the Settings page ("Controls" preset or "Edit Key
// Bindings"), stored as { left, right, jump } key lists in localStorage
// under "keyBindings". Falls back to this default (both WASD and arrow
// keys, plus Space) when nothing's been customized.
const DEFAULT_KEY_BINDINGS = {
  left: ["ArrowLeft", "a"],
  right: ["ArrowRight", "d"],
  jump: [" ", "w", "ArrowUp"],
};

function loadKeyBindings() {
  try {
    const saved = JSON.parse(localStorage.getItem("keyBindings"));
    if (saved && saved.left && saved.right && saved.jump) return saved;
  } catch (e) {
    // ignore malformed data, fall back to defaults
  }
  return DEFAULT_KEY_BINDINGS;
}

const keyBindings = loadKeyBindings();
const isBound = (action, key) => keyBindings[action].includes(key);
const anyPressed = (action) => keyBindings[action].some((k) => keys[k]);

// -------------------------------------------------------------
// LEVEL LOADING
// -------------------------------------------------------------
function loadLevel(levelNumber) {
  return new Promise((resolve, reject) => {
    // Remove old script
    const oldScript = document.getElementById("activeLevelScript");
    if (oldScript) oldScript.remove();

    // Reset globals
    window.platforms = [];
    window.deadlyPlatforms = [];
    window.spikes = [];
    window.checkpoints = [];
    window.levelText = "";

    const script = document.createElement("script");
    // Cache-busted: level files just changed from `const`/`let` to
    // `window.x = ...` assignments (see the comment in game.html) so that
    // levels can be swapped in-page without a reload. A browser that had
    // already cached an old copy of this exact URL under the previous
    // format would hit the very SyntaxError that change was meant to fix
    // the moment a second level loads — the query string forces a fresh
    // fetch instead of serving that stale, incompatible copy.
    script.src = `level${levelNumber}.js?v=2`;
    script.id = "activeLevelScript";
    script.onload = () => {
      resetLevelState();
      resolve();
    };
    script.onerror = () => {
      script.remove();
      reject(new Error(`Failed to load level${levelNumber}.js`));
    };
    document.body.appendChild(script);
  });
}

function resetLevelState() {
  // Re-check the canvas size here too, not just on an actual window
  // resize — if the very first frame happened to run before the viewport
  // had finished laying out (see known-issues.md #15), canvas.width/height
  // could still be stuck at 0 by now with no resize event ever having
  // fired to fix it, and a 0-height canvas makes the "fell off the
  // bottom" check (`player.y > canvas.height`) trip on frame one.
  resizeCanvas();

  textOpacity = 1;
  textFadeStartTime = null;
  player.x = 100;
  player.y = 300;
  player.dx = 0;
  player.dy = 0;
  doubleJumpUsed = false;
  wasGrounded = false;
  squashX = 1;
  squashY = 1;
  shakeTime = 0;
  levelFrameCount = 0;
  particles = [];
  // Snap (don't smoothly lerp) the camera to the new level's start — this
  // runs while the screen is fully black mid-transition, so a lerp would
  // just be wasted motion nobody sees, and skipping it means the fade-in
  // never has to "catch up" to the player.
  cameraOffsetX = player.x - canvas.width / 2;

  if (typeof checkpoints !== "undefined") {
    checkpoints.forEach((c) => (c.reached = false));
  }
}

function advanceToNextLevel() {
  const coinsEarned = StarshadeEconomy.markLevelCompleted(currentLevel);
  if (coinsEarned > 0) showCoinToast(`+${coinsEarned} Coins`);

  currentLevel++;
  localStorage.setItem("savedLevel", String(currentLevel));

  return loadLevel(currentLevel).catch(() => {
    // No levelN.js exists for this number — the player has finished the
    // last level.
    const bonus = StarshadeEconomy.setGameCompleted();
    showGameCompleteScreen(bonus);
    // So the next "Play" from the main menu starts a fresh run instead of
    // immediately hitting this same "no next level" case forever.
    localStorage.setItem("savedLevel", "1");
    isFading = false;
  });
}

function showGameCompleteScreen(bonus) {
  const totalCoins = StarshadeEconomy.getCoins();
  document.getElementById("gameCompleteCoins").textContent =
    bonus > 0
      ? `+${bonus} bonus coins — ${totalCoins} total`
      : `${totalCoins} coins`;
  document.getElementById("gameCompleteMenu").classList.remove("hidden");
}

document
  .getElementById("game-complete-menu-button")
  .addEventListener("click", () => {
    window.location.href = "index.html";
  });

// -------------------------------------------------------------
// PAUSE MENU
// -------------------------------------------------------------
document.getElementById("pause-open-button").addEventListener("click", () => {
  setPaused(!isPaused);
});
document.getElementById("resume-button").addEventListener("click", () => {
  setPaused(false);
});
document
  .getElementById("pause-settings-button")
  .addEventListener("click", () => {
    // ?from=pause tells settings.js to send "Back" to game.html instead of
    // all the way to the main menu, since currentLevel is saved on every
    // transition anyway (see advanceToNextLevel) — checking a setting
    // mid-run resumes close to where you left off instead of losing it.
    window.location.href = "settings.html?from=pause";
  });
document.getElementById("pause-quit-button").addEventListener("click", () => {
  window.location.href = "index.html";
});

// -------------------------------------------------------------
// COIN TOAST
// -------------------------------------------------------------
let coinToastTimeout = null;
function showCoinToast(text) {
  const toast = document.getElementById("coinToast");
  toast.textContent = text;
  toast.classList.add("show");
  clearTimeout(coinToastTimeout);
  coinToastTimeout = setTimeout(() => toast.classList.remove("show"), 2500);
}

// -------------------------------------------------------------
// SKIN RENDERING
// -------------------------------------------------------------
const skinImageCache = {};
function getSkinImage(src) {
  if (!skinImageCache[src]) {
    const img = new Image();
    img.src = src;
    skinImageCache[src] = img;
  }
  return skinImageCache[src];
}

// -------------------------------------------------------------
// DRAWING
// -------------------------------------------------------------
function drawPlayer() {
  const skin = StarshadeEconomy.getEquippedSkin();
  const halfW = player.width / 2;
  const halfH = player.height / 2;
  const lineWidth = 3;

  ctx.save();
  ctx.translate(player.x - cameraOffsetX, player.y);
  ctx.scale(squashX, squashY);

  if (skin.shape === "image" && skin.image) {
    drawImageSkin(skin, halfW, lineWidth);
    ctx.restore();
    return;
  }

  ctx.fillStyle = skin.fill;
  ctx.strokeStyle = skin.stroke;
  ctx.lineWidth = lineWidth;

  // Every shape is drawn slightly inset from the collision box's true
  // extents so a centered stroke's outer edge lands exactly on the
  // collision boundary instead of sticking out past it (see
  // docs/known-issues.md #4 for why that matters).
  if (skin.shape === "circle") {
    ctx.beginPath();
    ctx.arc(0, 0, halfW - lineWidth / 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  } else if (skin.shape === "triangle") {
    const inset = (halfW - lineWidth / 2) / halfW;
    ctx.beginPath();
    ctx.moveTo(0, -halfH * inset);
    ctx.lineTo(halfW * inset, halfH * inset);
    ctx.lineTo(-halfW * inset, halfH * inset);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  } else {
    ctx.beginPath();
    ctx.rect(-halfW, -halfH, player.width, player.height);
    ctx.fill();
    ctx.strokeRect(
      -halfW + lineWidth / 2,
      -halfH + lineWidth / 2,
      player.width - lineWidth,
      player.height - lineWidth
    );
  }

  ctx.restore();
}

function drawImageSkin(skin, halfW, lineWidth) {
  const img = getSkinImage(skin.image);
  const r = halfW - lineWidth / 2;

  ctx.save();
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.closePath();
  ctx.clip();
  if (img.complete && img.naturalWidth > 0) {
    ctx.drawImage(img, -r, -r, r * 2, r * 2);
  } else {
    // Image hasn't loaded yet — fall back to the default look for now.
    ctx.fillStyle = "rgba(160, 66, 211, 0.79)";
    ctx.fillRect(-r, -r, r * 2, r * 2);
  }
  ctx.restore();

  ctx.strokeStyle = skin.glow || "rgba(160, 66, 211, 0.85)";
  ctx.lineWidth = lineWidth;
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.stroke();
}

function drawInsetRect(x, y, width, height, fillStyle, strokeStyle) {
  ctx.save();
  ctx.translate(x - cameraOffsetX, y);
  ctx.fillStyle = fillStyle;
  ctx.strokeStyle = strokeStyle;
  ctx.lineWidth = 3;
  ctx.fillRect(0, 0, width, height);
  ctx.strokeRect(
    ctx.lineWidth / 2,
    ctx.lineWidth / 2,
    width - ctx.lineWidth,
    height - ctx.lineWidth
  );
  ctx.restore();
}

function drawPlatforms() {
  platforms.forEach((platform) => {
    drawInsetRect(
      platformX(platform),
      platformY(platform),
      platform.width,
      platform.height,
      "rgba(15, 100, 156, 0.63)",
      "rgba(31, 113, 168, 0.77)"
    );
  });
}

function drawDeadlyPlatforms() {
  deadlyPlatforms.forEach((platform) => {
    drawInsetRect(
      platformX(platform),
      platformY(platform),
      platform.width,
      platform.height,
      "rgba(190, 7, 7, 0.63)",
      "rgba(240, 22, 22, 0.61)"
    );
  });
}

function drawSpikes() {
  spikes.forEach((spike) => {
    ctx.save();
    ctx.translate(spike.x - cameraOffsetX, spike.y);
    ctx.fillStyle = "rgba(190, 7, 7, 0.63)";
    ctx.strokeStyle = "rgba(240, 22, 22, 0.61)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(spike.size / 2, -spike.size);
    ctx.lineTo(spike.size, 0);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  });
}

// Draws an n-pointed star path centered at the origin, alternating
// between outerRadius and innerRadius, rotated by `rotation` radians.
function starPath(points, outerRadius, innerRadius, rotation) {
  ctx.beginPath();
  for (let i = 0; i < points * 2; i++) {
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    const angle = (Math.PI / points) * i + rotation;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
}

function drawCheckpoints() {
  const now = Date.now();
  checkpoints.forEach((checkpoint, index) => {
    const isFinish = index === checkpoints.length - 1;

    // Idle glow pulse on unreached checkpoints, a brief "pop" the moment
    // a checkpoint is reached.
    const pulse = checkpoint.reached
      ? 0
      : Math.sin(now / 300 + checkpoint.x) * 2;
    const timeSinceReached = checkpoint.reached
      ? now - (checkpoint.reachedAt || now)
      : 0;
    const pop =
      checkpoint.reached && timeSinceReached < 300
        ? (1 - timeSinceReached / 300) * 8
        : 0;

    ctx.save();
    ctx.translate(checkpoint.x - cameraOffsetX, checkpoint.y);

    if (isFinish) {
      // The level's finish is a slowly-spinning gold star (green once
      // reached) instead of a plain circle, so it reads as a distinct
      // "goal," not just another checkpoint along the way.
      const rotation = now / 1000;
      const outer = 18 + pulse + pop;
      ctx.fillStyle = checkpoint.reached
        ? "rgba(80, 255, 120, 0.9)"
        : "rgba(255, 207, 77, 0.9)";
      ctx.strokeStyle = checkpoint.reached ? "#32cd32" : "#e8a800";
      ctx.shadowColor = checkpoint.reached
        ? "rgba(80,255,120,0.8)"
        : "rgba(255,207,77,0.8)";
      ctx.shadowBlur = 15;
      ctx.lineWidth = 3;
      starPath(5, outer, outer * 0.45, rotation);
      ctx.fill();
      ctx.stroke();
    } else {
      ctx.fillStyle = checkpoint.reached ? "rgba(50, 255, 50, 0.8)" : "#fff";
      ctx.strokeStyle = checkpoint.reached ? "#32cd32" : "#ccc";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(0, 0, 15 + pulse + pop, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }
    ctx.restore();
  });
}

function drawLevelText() {
  if (textOpacity > 0 && levelText) {
    ctx.save();
    ctx.globalAlpha = textOpacity;
    ctx.fillStyle = "#ffffff";
    ctx.font = "72px Cinzel";
    ctx.textAlign = "center";
    ctx.fillText(levelText, canvas.width / 2, canvas.height / 2);
    ctx.restore();
  }
}

// -------------------------------------------------------------
// FADE-TO-BLACK / FADE-BACK-IN OVERLAY
// -------------------------------------------------------------
function drawFadeOverlay() {
  if (!isFading) return;

  if (fadeDirection === 1) {
    fadeOpacity += 0.02;
    if (fadeOpacity >= 1) {
      fadeOpacity = 1;
      fadeDirection = 0; // pinned at black until the next level finishes loading
      const cb = fadeCallback;
      fadeCallback = null;
      if (cb) {
        Promise.resolve(cb()).then(() => {
          fadeDirection = -1;
        });
      } else {
        fadeDirection = -1;
      }
    }
  } else if (fadeDirection === -1) {
    fadeOpacity -= 0.02;
    if (fadeOpacity <= 0) {
      fadeOpacity = 0;
      isFading = false;
    }
  }

  ctx.fillStyle = `rgba(0, 0, 0, ${fadeOpacity})`;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// -------------------------------------------------------------
// MOVING PLATFORMS
// -------------------------------------------------------------
// A platform opts in by declaring `moveAxis: 'x'|'y'`, `moveRange` (how far
// it travels from its base x/y, in px) and optionally `moveSpeed` (default
// 0.03) and `movePhase` (default 0, lets platforms in the same level be
// offset from each other so they don't all move in lockstep). Position is
// a simple sine wave — smooth, perfectly periodic, and easy to reason
// about when designing a level around one ("it'll be back here in about
// N frames").
let levelFrameCount = 0;

function updateMovingPlatforms() {
  levelFrameCount++;
  platforms.forEach((p) => {
    if (!p.moveAxis) return;
    const prevOffset = p._offset || 0;
    const t =
      levelFrameCount *
      (p.moveSpeed || 0.03) *
      difficultySettings.platformSpeedMultiplier;
    const newOffset = Math.sin(t + (p.movePhase || 0)) * (p.moveRange || 0);
    p._deltaOffset = newOffset - prevOffset;
    p._offset = newOffset;
  });
}

function platformX(p) {
  return p.x + (p.moveAxis === "x" ? p._offset || 0 : 0);
}

function platformY(p) {
  return p.y + (p.moveAxis === "y" ? p._offset || 0 : 0);
}

// Resolves player movement against solid platforms one axis at a time using
// a "crossing" test (did the relevant edge start on one side of the
// platform's edge and end up on the other?) rather than an after-the-move
// overlap test. This is what makes it real collision instead of just a
// landing check: it also stops the player on the underside of a platform
// when jumping into it from below, and it can't be skipped over at high
// speed the way a plain overlap check can — the overlap window used to be
// only as wide as the platform is thick (or a hardcoded few px for walls),
// so a big enough dx/dy could land entirely on the far side of it within a
// single frame and never appear "inside" the check at all.
function resolveAxis(axis) {
  const isX = axis === "x";
  const size = isX ? player.width : player.height;
  const delta = isX ? player.dx : player.dy;
  const oldPos = isX ? player.x : player.y;
  let newPos = oldPos + delta;

  const oldNear = oldPos - size / 2; // left or top edge before moving
  const oldFar = oldPos + size / 2; // right or bottom edge before moving

  let grounded = false;
  let groundedOn = null;

  platforms.forEach((platform) => {
    const px = platformX(platform);
    const py = platformY(platform);
    const pNear = isX ? px : py;
    const pFar = isX ? px + platform.width : py + platform.height;

    // Only a platform the player currently overlaps on the OTHER axis can
    // block this axis's movement.
    const otherAxisOverlap = isX
      ? player.y + player.height / 2 > py &&
        player.y - player.height / 2 < py + platform.height
      : player.x + player.width / 2 > px &&
        player.x - player.width / 2 < px + platform.width;
    if (!otherAxisOverlap) return;

    if (delta > 0) {
      const newFar = newPos + size / 2;
      if (oldFar <= pNear && newFar > pNear) {
        newPos = pNear - size / 2;
        if (isX) player.dx = 0;
        else {
          player.dy = 0;
          grounded = true;
          groundedOn = platform;
        }
      }
    } else if (delta < 0) {
      const newNear = newPos - size / 2;
      if (oldNear >= pFar && newNear < pFar) {
        newPos = pFar + size / 2;
        if (isX) player.dx = 0;
        else player.dy = 0;
      }
    }
  });

  if (isX) player.x = newPos;
  else player.y = newPos;
  return { grounded, groundedOn };
}

function updatePlayer() {
  updateMovingPlatforms();
  player.dy += gravity;

  if (anyPressed("right")) player.dx = horizontalSpeed;
  else if (anyPressed("left")) player.dx = -horizontalSpeed;
  else player.dx = 0;

  resolveAxis("x");
  const { grounded, groundedOn } = resolveAxis("y");

  // Carry the player along with whatever platform they're standing on —
  // without this, standing still on a moving platform would mean sliding
  // off the moment it moved, since collision resolution only ever stops
  // relative penetration, it doesn't know to bring a resting object along.
  if (grounded && groundedOn && groundedOn.moveAxis) {
    if (groundedOn.moveAxis === "x") player.x += groundedOn._deltaOffset;
    else player.y += groundedOn._deltaOffset;
  }

  if (grounded) {
    doubleJumpUsed = false;
    if (!wasGrounded) {
      // Just landed — a quick squash that eases back to normal in draw(),
      // plus a small dust-impact burst along the ground.
      squashX = 1.3;
      squashY = 0.7;
      spawnParticles(player.x, player.y + player.height / 2, 8, {
        colors: ["rgba(200,210,230,0.8)", "rgba(150,165,190,0.7)"],
        speed: 2.5,
        life: 22,
        size: 3,
        spread: Math.PI * 0.9,
        baseAngle: -Math.PI / 2,
        gravity: 0.2,
      });
    }
  }
  wasGrounded = grounded;

  // Continuous motion trail for skins that opt in (see skinsData.js).
  const equippedSkin = StarshadeEconomy.getEquippedSkin();
  if (equippedSkin.trail && (player.dx !== 0 || player.dy !== 0)) {
    spawnParticles(player.x, player.y, 1, {
      colors: [equippedSkin.fill || "rgba(255,255,255,0.7)"],
      speed: 0.3,
      life: 18,
      size: 4,
      spread: Math.PI * 2,
      gravity: 0,
    });
  }

  // Deadly
  deadlyPlatforms.forEach((platform) => {
    if (
      player.x + player.width / 2 > platform.x &&
      player.x - player.width / 2 < platform.x + platform.width &&
      player.y + player.height / 2 > platform.y &&
      player.y - player.height / 2 < platform.y + platform.height
    ) {
      resetPlayer();
    }
  });
  // Checkpoints
  checkpoints.forEach((checkpoint, index) => {
    if (
      Math.hypot(player.x - checkpoint.x, player.y - checkpoint.y) <
        difficultySettings.checkpointRadius &&
      !checkpoint.reached
    ) {
      checkpoint.reached = true;
      checkpoint.reachedAt = Date.now();
      spawnParticles(checkpoint.x, checkpoint.y, 14, {
        colors: ["rgba(50,255,50,0.9)", "rgba(180,255,180,0.9)", "#fff"],
        speed: 3.5,
        life: 35,
        size: 3,
        gravity: 0.05,
      });

      // If it's the final checkpoint → start fade
      if (index === checkpoints.length - 1 && !isFading) {
        isFading = true;
        fadeOpacity = 0;
        fadeDirection = 1;
        fadeCallback = advanceToNextLevel;
      }
    }
  });

  // Spikes
  spikes.forEach((spike) => {
    const spikeTipY = spike.y - spike.size;
    if (
      player.x + player.width / 2 > spike.x &&
      player.x - player.width / 2 < spike.x + spike.size &&
      player.y + player.height / 2 > spikeTipY &&
      player.y < spike.y
    ) {
      const playerCenterX = player.x;
      const spikeCenterX = spike.x + spike.size / 2;
      const spikeSlope = spike.size / (spike.size / 2);
      const distanceFromCenter = Math.abs(playerCenterX - spikeCenterX);
      if (
        distanceFromCenter * spikeSlope + player.y + player.height / 2 >
        spikeTipY
      ) {
        resetPlayer();
      }
    }
  });

  if (player.y > canvas.height) {
    resetPlayer();
  }

  const targetCameraOffsetX = player.x - canvas.width / 2;
  cameraOffsetX += (targetCameraOffsetX - cameraOffsetX) * cameraSmoothing;

  // Ease the landing squash back to a normal 1:1 scale.
  squashX += (1 - squashX) * 0.2;
  squashY += (1 - squashY) * 0.2;

  if (shakeTime > 0) shakeTime--;
}

function updateLevelText() {
  if (textFadeStartTime === null) {
    textFadeStartTime = Date.now();
  }
  const elapsedTime = (Date.now() - textFadeStartTime) / 1000;
  if (elapsedTime > 1) {
    textOpacity -= 0.02;
    if (textOpacity <= 0) {
      textOpacity = 0;
      levelText = "";
    }
  }
}

function resetPlayer() {
  shakeTime = 15;
  shakeMagnitude = 6;

  const skin = StarshadeEconomy.getEquippedSkin();
  spawnParticles(player.x, player.y, 20, {
    colors: [skin.fill || "rgba(160,66,211,0.85)", "#fff", "rgba(255,80,80,0.8)"],
    speed: 5,
    life: 32,
    size: 3.5,
    gravity: 0.2,
  });

  const lastCheckpoint = [...checkpoints].reverse().find((c) => c.reached);
  if (lastCheckpoint) {
    player.x = lastCheckpoint.x;
    player.y = lastCheckpoint.y - 30;
  } else {
    player.x = 100;
    player.y = 300;
  }
  player.dx = 0;
  player.dy = 0;
}

// -------------------------------------------------------------
// GAME LOOP
// -------------------------------------------------------------
let isPaused = false;

function update() {
  if (isPaused) {
    draw();
    return;
  }
  // While pinned at black between levels (fadeDirection === 0) or actively
  // fading, the outgoing level's platforms/checkpoints/etc. may already
  // have been cleared by loadLevel() — skip gameplay updates and just let
  // the overlay run until the new level is ready.
  if (!isFading || fadeDirection === -1) {
    updatePlayer();
    updateLevelText();
  }
  updateParticles();
  draw();
}

function setPaused(paused) {
  // Disallowed mid-transition (the level data may momentarily be empty)
  // or once the game-complete screen is already up.
  if (isFading) return;
  if (!document.getElementById("gameCompleteMenu").classList.contains("hidden")) return;
  isPaused = paused;
  document.getElementById("pauseMenu").classList.toggle("hidden", !paused);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  if (shakeTime > 0) {
    ctx.translate(
      (Math.random() - 0.5) * shakeMagnitude,
      (Math.random() - 0.5) * shakeMagnitude
    );
  }

  if (typeof platforms !== "undefined") {
    drawPlatforms();
    drawSpikes();
    drawCheckpoints();
    drawParticles();
    drawPlayer();
    drawLevelText();
    drawDeadlyPlatforms();
  }

  ctx.restore();
  drawFadeOverlay(); // <-- overlay on top of everything, unaffected by shake
}

function gameLoop() {
  update();
  requestAnimationFrame(gameLoop);
}

// -------------------------------------------------------------
// CONTROLS
// -------------------------------------------------------------
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !e.repeat) {
    setPaused(!isPaused);
    return;
  }
  if (isPaused) return;

  keys[e.key] = true;
  // Ignore key-repeat events fired while a key is held down — otherwise
  // holding the jump key auto-consumes the double jump instantly instead
  // of requiring a second, deliberate press.
  if (e.repeat) return;

  if (isBound("jump", e.key) && player.dy === 0) {
    player.dy = jumpStrength;
    squashX = 0.7;
    squashY = 1.3;
    spawnJumpDust();
  } else if (
    isBound("jump", e.key) &&
    player.dy !== 0 &&
    !doubleJumpUsed
  ) {
    player.dy = jumpStrength;
    doubleJumpUsed = true;
    squashX = 0.7;
    squashY = 1.3;
    spawnJumpDust();
  }
});

function spawnJumpDust() {
  spawnParticles(player.x, player.y + player.height / 2, 6, {
    colors: ["rgba(255,255,255,0.7)", "rgba(200,200,220,0.6)"],
    speed: 2,
    life: 18,
    size: 2.5,
    spread: Math.PI,
    baseAngle: Math.PI / 2,
    gravity: 0.05,
  });
}

document.addEventListener("keyup", (e) => {
  keys[e.key] = false;
});

// -------------------------------------------------------------
// START GAME
// -------------------------------------------------------------
loadLevel(currentLevel)
  .then(() => {
    gameLoop();
  })
  .catch(() => {
    // Saved progress points past the last level (the player already beat
    // the game and came back to game.html directly). Show the completion
    // screen rather than a frozen blank canvas, and reset progress so the
    // next Play starts a fresh run.
    const bonus = StarshadeEconomy.setGameCompleted();
    showGameCompleteScreen(bonus);
    localStorage.setItem("savedLevel", "1");
  });
