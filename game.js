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

// Accessibility/preference toggles set on the Settings page (see
// settings.js) — both default to on so existing behavior doesn't change
// for anyone who's never touched these.
const screenShakeEnabled = localStorage.getItem("screenShake") !== "off";
const clickToJumpEnabled = localStorage.getItem("clickToJump") !== "off";

// Subtle rubber-banding: after several deaths in a row without reaching a
// *new* checkpoint, nudge the odds back in the player's favor a little —
// a slightly wider checkpoint radius and slightly smaller spike/slightly
// bigger landing hitboxes (see resolveAxis()/the spike check below) —
// capped low enough that it never feels like the level itself changed.
let consecutiveDeaths = 0;
function leniencyLevel() {
  return Math.min(3, Math.floor(consecutiveDeaths / 4));
}

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

// Per-shape cosmetic movement flourishes (see drawPlayer()) — purely
// visual, never touch player.width/height or any collision math, so every
// skin shares the exact same hitbox regardless of how it's animated.
let triangleSpinActive = false;
let triangleSpinAngle = 0;
let triangleSpinSpeed = 0;
let circleRollAngle = 0;
let circleBounceOffset = 0;

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

// First-playthrough tutorial tips (see level1.js's window.tutorialTips) —
// short captions that pop up the first time the player reaches each new
// kind of thing (a gap, a spike, a deadly platform, a checkpoint, the
// finish), one at a time, then fade. Only level 1 defines any.
let tutorialTipTriggered = [];
let tutorialTipQueue = [];
let currentTutorialTip = null;
let tutorialTipOpacity = 0;
let tutorialTipShownAt = 0;

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
    window.tutorialTips = [];

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
  consecutiveDeaths = 0;
  tutorialTipTriggered = (tutorialTips || []).map(() => false);
  tutorialTipQueue = [];
  currentTutorialTip = null;
  tutorialTipOpacity = 0;

  applyLevelVerticalLayout();

  // Snap (don't smoothly lerp) the camera to the new level's start — this
  // runs while the screen is fully black mid-transition, so a lerp would
  // just be wasted motion nobody sees, and skipping it means the fade-in
  // never has to "catch up" to the player.
  cameraOffsetX = player.x - canvas.width / 2;

  if (typeof checkpoints !== "undefined") {
    checkpoints.forEach((c) => (c.reached = false));
  }
}

// Anti-cheat clearance above a level's own highest platform: comfortably
// more than a single jump's ~144px rise (so ordinary jumps near the top of
// a level are untouched) but less than the ~280-290px a double jump can
// reach if timed to maximize height rather than distance — the only way a
// player could reach that much height is by standing on the level's own
// topmost platform (there's nothing higher to legitimately reach for) and
// deliberately chaining straight up, which is exactly the "climb on top of
// everything and skip the intended path" cheese this caps.
const ROOF_CLEARANCE = 240;
// How far the ceiling extends past the level's own platforms on each side
// — comfortably more than any camera/backtracking range.
const ROOF_MARGIN = 1000;

// Re-centers a level's vertical layout on the *actual* viewport instead of
// wherever level authors happened to place it (window.innerHeight varies
// per player, but every levelN.js was authored against one nominal band —
// see docs/gameplay.md), then caps how high the player can climb above the
// level's own highest platform. Both are pure translations/additions of
// already-verified geometry: shifting every y by the same amount preserves
// every gap's rise and every checkpoint's relative safety (the audits in
// .claude/ check *relative* distances), and the roof sits above the
// highest legitimate point in the level, so neither can turn a
// previously-safe checkpoint or previously-possible jump into a bad one.
function applyLevelVerticalLayout() {
  if (typeof platforms === "undefined" || !platforms.length) return;

  const tops = [];
  const bottoms = [];
  platforms.forEach((p) => {
    tops.push(p.y);
    bottoms.push(p.y + p.height);
  });
  deadlyPlatforms.forEach((p) => {
    tops.push(p.y);
    bottoms.push(p.y + p.height);
  });
  spikes.forEach((s) => {
    tops.push(s.y - s.size);
    bottoms.push(s.y);
  });
  checkpoints.forEach((c) => {
    tops.push(c.y - 20);
    bottoms.push(c.y + 20);
  });

  const levelCenterY = (Math.min(...tops) + Math.max(...bottoms)) / 2;
  const shiftY = Math.round(canvas.height / 2 - levelCenterY);

  if (shiftY !== 0) {
    platforms.forEach((p) => (p.y += shiftY));
    deadlyPlatforms.forEach((p) => (p.y += shiftY));
    spikes.forEach((s) => (s.y += shiftY));
    checkpoints.forEach((c) => (c.y += shiftY));
    player.y += shiftY;
  }

  const topPlatformY = Math.min(...platforms.map((p) => p.y));
  const allX = platforms
    .concat(deadlyPlatforms)
    .flatMap((p) => [p.x, p.x + p.width]);
  const roofLeft = Math.min(0, ...allX) - ROOF_MARGIN;
  const roofRight = Math.max(...allX) + ROOF_MARGIN;

  platforms.push({
    x: roofLeft,
    y: topPlatformY - ROOF_CLEARANCE,
    width: roofRight - roofLeft,
    height: 30,
    roof: true,
  });
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
document.getElementById("pause-levels-button").addEventListener("click", () => {
  window.location.href = "levels.html";
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
    const r = halfW - lineWidth / 2;
    ctx.save();
    // A small rebound on landing and a roll proportional to horizontal
    // speed — cosmetic only, the hitbox stays the fixed 25x25 box.
    ctx.translate(0, circleBounceOffset);
    ctx.rotate(circleRollAngle);
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    // A rim mark so the roll is actually visible — a plain filled circle
    // looks identical at every rotation otherwise.
    ctx.beginPath();
    ctx.arc(r * 0.55, 0, 2.5, 0, Math.PI * 2);
    ctx.fillStyle = skin.stroke;
    ctx.fill();
    ctx.restore();
  } else if (skin.shape === "triangle") {
    const inset = (halfW - lineWidth / 2) / halfW;
    ctx.save();
    ctx.rotate(triangleSpinAngle); // sometimes tumbles in the air
    ctx.beginPath();
    ctx.moveTo(0, -halfH * inset);
    ctx.lineTo(halfW * inset, halfH * inset);
    ctx.lineTo(-halfW * inset, halfH * inset);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
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
    if (platform.ghost || platform.roof || platform.melt) return; // drawn separately, see below
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

// Ghost platforms flicker solid/intangible on a timer (see
// updateGhostPlatforms()) — drawn bright yellow and mostly opaque while
// solid, a faint yellow outline while intangible, with a fast flicker in
// the last few frames of either state so the flip is always telegraphed.
function drawGhostPlatforms() {
  platforms.forEach((platform) => {
    if (!platform.ghost) return;
    const solid = platform._solid !== false;
    let alpha = solid ? 0.85 : 0.2;
    if (platform._ghostWarning) {
      alpha = Math.floor(Date.now() / 90) % 2 === 0 ? alpha : alpha * 0.35;
    }
    ctx.save();
    ctx.globalAlpha = alpha;
    drawInsetRect(
      platformX(platform),
      platformY(platform),
      platform.width,
      platform.height,
      "rgba(255, 209, 46, 0.8)",
      "rgba(255, 236, 140, 0.95)"
    );
    ctx.restore();
  });
}

// Melt platforms (`melt: true`) — a second, distinct yellow platform type
// from ghost platforms: solid and safe to land on, but standing on one
// starts a short countdown (see the melt-timer block in updatePlayer())
// that ends with it crumbling away for good (until the next respawn). A
// deeper, cracked orange (vs. a ghost's clean bright yellow) with a
// shake/flicker that intensifies as the countdown runs out, so it reads as
// "get off me" rather than just another safe platform.
function drawMeltPlatforms() {
  platforms.forEach((platform) => {
    if (!platform.melt || platform._melted) return;
    const timer = platform._meltTimer || 0;
    const delay = platform.meltDelay || 28;
    const urgency = Math.min(1, timer / delay);
    const shakeX = urgency > 0.35 ? (Math.random() - 0.5) * urgency * 5 : 0;
    const alpha = urgency > 0.35 && Math.random() < urgency * 0.5 ? 0.45 : 0.85;

    ctx.save();
    ctx.globalAlpha = alpha;
    drawInsetRect(
      platformX(platform) + shakeX,
      platformY(platform),
      platform.width,
      platform.height,
      `rgba(255, ${Math.round(190 - urgency * 110)}, 30, 0.8)`,
      "rgba(255, 150, 40, 0.9)"
    );
    ctx.restore();
  });
}

// The anti-cheat ceiling added by applyLevelVerticalLayout() — drawn as a
// dark, hazard-striped boundary (distinct from every hand-placed platform
// color) so if a player ever does bump it, it reads as "the top of the
// world," not a bug.
function drawRoofPlatforms() {
  platforms.forEach((platform) => {
    if (!platform.roof) return;
    drawInsetRect(
      platform.x,
      platform.y,
      platform.width,
      platform.height,
      "rgba(20, 18, 28, 0.85)",
      "rgba(120, 60, 160, 0.5)"
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

// The finish checkpoint's logo image (see index.html's main-menu logo) —
// cached the same way skin images are (see getSkinImage()) so it's only
// ever loaded once no matter how many levels draw it.
const finishLogoImage = getSkinImage("starshade.png");

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
      // The level's finish is the Starshade logo itself instead of a plain
      // circle, so it reads as a distinct "goal" — slowly spinning, with
      // the same gold-idle/green-reached glow language as every other
      // checkpoint, tinted green once reached instead of staying its
      // native purple/blue so "you're teleporting" reads the same way it
      // does everywhere else in the game.
      const rotation = now / 4000;
      const outer = 18 + pulse + pop;
      // Purple/blue while unreached — matches the game's cosmic theme
      // (and the logo's own colors) instead of the gold used for ordinary
      // checkpoints — then green on reach, same "you're teleporting"
      // language as every other checkpoint.
      const glowColor = checkpoint.reached
        ? "rgba(80,255,120,0.8)"
        : "rgba(122,110,255,0.8)";
      const ringColor = checkpoint.reached ? "#32cd32" : "#7a6eff";

      ctx.save();
      ctx.beginPath();
      ctx.arc(0, 0, outer, 0, Math.PI * 2);
      ctx.strokeStyle = ringColor;
      ctx.shadowColor = glowColor;
      ctx.shadowBlur = 15;
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.restore();

      if (finishLogoImage.complete && finishLogoImage.naturalWidth > 0) {
        ctx.save();
        ctx.rotate(rotation);
        ctx.beginPath();
        ctx.arc(0, 0, outer - 2, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();
        ctx.drawImage(finishLogoImage, -outer, -outer, outer * 2, outer * 2);
        if (checkpoint.reached) {
          ctx.globalCompositeOperation = "source-atop";
          ctx.fillStyle = "rgba(60, 220, 100, 0.55)";
          ctx.fillRect(-outer, -outer, outer * 2, outer * 2);
        }
        ctx.restore();
      } else {
        // Fallback for the one frame or two before the image finishes
        // loading.
        ctx.beginPath();
        ctx.arc(0, 0, outer, 0, Math.PI * 2);
        ctx.fillStyle = glowColor;
        ctx.fill();
      }
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

// -------------------------------------------------------------
// GHOST PLATFORMS
// -------------------------------------------------------------
// A platform opts in with `ghost: true` and cycles solid/intangible on a
// timer: `ghostPeriod` (total cycle length in frames, default 180),
// `ghostOnRatio` (fraction of the cycle it's solid, default 0.55) and
// `ghostPhase` (frame offset, lets several ghost platforms in one level be
// out of sync with each other). resolveAxis() skips collision against one
// entirely while it's intangible, so standing on one the instant it flips
// just means falling through — no special-casing needed there.
function updateGhostPlatforms() {
  platforms.forEach((p) => {
    if (!p.ghost) return;
    const period = p.ghostPeriod || 180;
    const onFrames = Math.round(
      period * (p.ghostOnRatio != null ? p.ghostOnRatio : 0.55)
    );
    const t = (levelFrameCount + (p.ghostPhase || 0)) % period;
    p._solid = t < onFrames;
    // A short flicker window before every flip so the change is always
    // telegraphed, never a surprise.
    const framesLeftInState = p._solid ? onFrames - t : period - t;
    p._ghostWarning = framesLeftInState <= 20;
  });
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
    if (platform.ghost && platform._solid === false) return; // intangible right now
    if (platform.melt && platform._melted) return; // already crumbled away

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

    // A moving platform's own edge isn't where it was at the start of this
    // frame — using its current (post-move) position for BOTH sides of the
    // crossing test silently breaks the test for any platform moving
    // toward the player fast enough: e.g. a vertical platform rising into
    // a player resting on top moves its top edge above the player's old
    // foot position before the check even runs, so "did the foot start
    // above the edge and end below it" reads false and the player falls
    // straight through instead of being carried up. Comparing the OLD
    // player edge against where the platform edge WAS this frame (undoing
    // its own delta) keeps the test correct regardless of which side is
    // moving, and makes it track a moving platform every frame while
    // grounded — no separate "carry" step needed for this axis.
    const platformDelta =
      platform.moveAxis === axis ? platform._deltaOffset || 0 : 0;
    const pNearOld = pNear - platformDelta;
    const pFarOld = pFar - platformDelta;

    // A small constant landing forgiveness absorbs the sub-pixel jitter a
    // sine-driven moving platform's own delta can introduce right at its
    // steepest point (where oldFar and pNearOld can land a hair apart
    // purely from floating-point rounding) — without it, a resting player
    // can occasionally slip past a fast-descending platform by less than a
    // pixel and never re-catch it. leniencyLevel() (repeated deaths) adds
    // further forgiveness on top, only for landing, never walls/ceilings.
    const landingForgiveness =
      !isX && delta > 0 ? 1.5 + leniencyLevel() : 0;

    if (delta > 0) {
      const newFar = newPos + size / 2;
      if (oldFar <= pNearOld + landingForgiveness && newFar > pNear) {
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
      if (oldNear >= pFarOld && newNear < pFar) {
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
  updateGhostPlatforms();
  player.dy += gravity;

  if (anyPressed("right")) player.dx = horizontalSpeed;
  else if (anyPressed("left")) player.dx = -horizontalSpeed;
  else player.dx = 0;

  resolveAxis("x");
  const { grounded, groundedOn } = resolveAxis("y");

  // Melt platforms (`melt: true`) look solid but give way shortly after
  // you land on them — the countdown only runs while you're actually
  // standing on this exact one, and resets if you hop off before it gives,
  // so a quick crossing is always safe and only lingering costs you.
  platforms.forEach((p) => {
    if (!p.melt || p._melted) return;
    if (groundedOn === p) {
      p._meltTimer = (p._meltTimer || 0) + 1;
      if (p._meltTimer > (p.meltDelay || 28)) {
        p._melted = true;
        spawnParticles(
          platformX(p) + p.width / 2,
          platformY(p) + p.height / 2,
          14,
          {
            colors: ["rgba(255,196,46,0.85)", "rgba(160,110,20,0.8)"],
            speed: 3,
            life: 26,
            size: 3.5,
            gravity: 0.15,
          }
        );
      }
    } else {
      p._meltTimer = 0;
    }
  });

  // Carry the player horizontally when grounded on an X-moving platform —
  // resolveAxis('y') only tracks the axis it's resolving (Y), so a
  // platform sliding sideways underneath a resting player needs this
  // explicit nudge or they'd slide off the moment it moved. A Y-moving
  // platform doesn't need this: resolveAxis('y') already re-anchors the
  // player to its current surface every grounded frame (see the
  // platformDelta comment above), so adding the offset again here would
  // double-count that frame's movement.
  if (grounded && groundedOn && groundedOn.moveAxis === "x") {
    player.x += groundedOn._deltaOffset;
  }

  // Circle skins roll proportional to horizontal speed and give a tiny
  // extra rebound on landing (Y only, purely cosmetic — see drawPlayer()).
  circleRollAngle += player.dx * 0.05;
  if (grounded && !wasGrounded) circleBounceOffset = -4;
  circleBounceOffset *= 0.8;
  if (Math.abs(circleBounceOffset) < 0.1) circleBounceOffset = 0;

  // Triangle skins sometimes tumble while airborne, settling back to
  // point-up the instant they land.
  if (triangleSpinActive) {
    if (player.dy !== 0) triangleSpinAngle += triangleSpinSpeed;
    else {
      triangleSpinActive = false;
      triangleSpinAngle = 0;
    }
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
        difficultySettings.checkpointRadius + leniencyLevel() * 3 &&
      !checkpoint.reached
    ) {
      checkpoint.reached = true;
      checkpoint.reachedAt = Date.now();
      consecutiveDeaths = 0; // real progress — the rubber-banding resets
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

  // Spikes — inset the effective hitbox by a couple of px once
  // leniencyLevel() kicks in, same rubber-banding as the checkpoint radius
  // and landing forgiveness above.
  const spikeForgiveness = leniencyLevel() * 1.5;
  spikes.forEach((spike) => {
    const spikeTipY = spike.y - spike.size + spikeForgiveness;
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

function updateTutorialTips() {
  tutorialTips.forEach((tip, i) => {
    if (!tutorialTipTriggered[i] && player.x >= tip.x) {
      tutorialTipTriggered[i] = true;
      tutorialTipQueue.push(tip.text);
    }
  });

  if (!currentTutorialTip && tutorialTipQueue.length) {
    currentTutorialTip = tutorialTipQueue.shift();
    tutorialTipShownAt = Date.now();
  }

  if (currentTutorialTip) {
    const elapsed = Date.now() - tutorialTipShownAt;
    const fadeMs = 400;
    const holdMs = 3200;
    if (elapsed < fadeMs) tutorialTipOpacity = elapsed / fadeMs;
    else if (elapsed < holdMs - fadeMs) tutorialTipOpacity = 1;
    else if (elapsed < holdMs) tutorialTipOpacity = (holdMs - elapsed) / fadeMs;
    else {
      currentTutorialTip = null;
      tutorialTipOpacity = 0;
    }
  }
}

function drawTutorialTip() {
  if (!currentTutorialTip || tutorialTipOpacity <= 0) return;

  ctx.save();
  ctx.globalAlpha = tutorialTipOpacity;
  ctx.font = "20px Cinzel";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  const y = canvas.height - 80;
  const textWidth = ctx.measureText(currentTutorialTip).width;
  const boxW = textWidth + 48;
  const boxH = 46;
  const boxX = canvas.width / 2 - boxW / 2;
  const boxY = y - boxH / 2;

  ctx.fillStyle = "rgba(25, 0, 51, 0.88)";
  ctx.strokeStyle = "#4d3f91";
  ctx.lineWidth = 2;
  ctx.beginPath();
  if (ctx.roundRect) ctx.roundRect(boxX, boxY, boxW, boxH, 12);
  else ctx.rect(boxX, boxY, boxW, boxH);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#dcd4ff";
  ctx.fillText(currentTutorialTip, canvas.width / 2, y);
  ctx.restore();
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
  consecutiveDeaths++;

  // Give every melt platform back — dying and retrying a section shouldn't
  // permanently lose a platform a later attempt still needs to cross.
  platforms.forEach((p) => {
    if (p.melt) {
      p._melted = false;
      p._meltTimer = 0;
    }
  });

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
    updateTutorialTips();
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
  if (shakeTime > 0 && screenShakeEnabled) {
    ctx.translate(
      (Math.random() - 0.5) * shakeMagnitude,
      (Math.random() - 0.5) * shakeMagnitude
    );
  }

  if (typeof platforms !== "undefined") {
    drawRoofPlatforms();
    drawPlatforms();
    drawGhostPlatforms();
    drawMeltPlatforms();
    drawSpikes();
    drawCheckpoints();
    drawParticles();
    drawPlayer();
    drawLevelText();
    drawDeadlyPlatforms();
    drawTutorialTip();
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

  if (isBound("jump", e.key)) tryJump();
});

// Shared by the keyboard jump binding and click/tap-to-jump (see
// settings.js's "Click/Tap to Jump" toggle) so both trigger the exact same
// jump-or-double-jump logic.
function tryJump() {
  if (player.dy === 0) {
    player.dy = jumpStrength;
  } else if (!doubleJumpUsed) {
    player.dy = jumpStrength;
    doubleJumpUsed = true;
  } else {
    return; // already used the double jump — this press does nothing
  }
  squashX = 0.7;
  squashY = 1.3;
  spawnJumpDust();

  // A triangle skin only tumbles some of the time — "can rotate in the
  // air sometimes," not a spin on every single jump.
  if (StarshadeEconomy.getEquippedSkin().shape === "triangle" && Math.random() < 0.5) {
    triangleSpinActive = true;
    triangleSpinSpeed = (Math.random() < 0.5 ? -1 : 1) * (0.3 + Math.random() * 0.25);
  }
}

canvas.addEventListener("click", () => {
  if (clickToJumpEnabled && !isPaused && !isFading) tryJump();
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
