const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Game settings
const gravity = 0.5;
const jumpStrength = -12;
const horizontalSpeed = 5;
let doubleJumpUsed = false;

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

//Fade Settings
let isFading = false;
let fadeOpacity = 0;
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

// Set current level from saved data if it exists, otherwise start at 1
let currentLevel = parseInt(localStorage.getItem("savedLevel")) || 1;
localStorage.removeItem("savedLevel"); // optional: clear after loading

// Player setup
const player = {
  x: 100,
  y: 300,
  width: 25,
  height: 25,
  dx: 0,
  dy: 0,
  color: ctx.createLinearGradient(15, 15, 30, 30),
};
player.color.addColorStop(1, "rgba(160, 66, 211, 0.79)");
player.color.addColorStop(0, "rgba(79, 0, 128, 0.81)");

// Controls
const keys = {};

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
    script.src = `level${levelNumber}.js`;
    script.id = "activeLevelScript";
    script.onload = () => {
      resetLevelState();
      resolve();
    };
    script.onerror = () =>
      reject(new Error(`Failed to load level${levelNumber}.js`));
    document.body.appendChild(script);
  });
}

function resetLevelState() {
  textOpacity = 1;
  textFadeStartTime = null;
  player.x = 100;
  player.y = 300;
  player.dx = 0;
  player.dy = 0;

  if (typeof checkpoints !== "undefined") {
    checkpoints.forEach((c) => (c.reached = false));
  }
}

// -------------------------------------------------------------
// DRAWING
// -------------------------------------------------------------
function drawPlayer() {
  ctx.save();
  ctx.translate(player.x - cameraOffsetX, player.y);
  ctx.scale(squashX, squashY);
  ctx.fillStyle = player.color;
  ctx.strokeStyle = "rgba(93, 26, 145, 0.85)";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.rect(-player.width / 2, -player.height / 2, player.width, player.height);
  ctx.fill();
  // Inset the stroke so its outer edge lands exactly on the collision
  // boundary instead of straddling it — a centered stroke used to draw
  // ~1.5px outside the fill, making the player look like it overlapped
  // whatever it was standing on/against by a couple of pixels.
  ctx.strokeRect(
    -player.width / 2 + ctx.lineWidth / 2,
    -player.height / 2 + ctx.lineWidth / 2,
    player.width - ctx.lineWidth,
    player.height - ctx.lineWidth
  );
  ctx.restore();
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
      platform.x,
      platform.y,
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
      platform.x,
      platform.y,
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

function drawCheckpoints() {
  const now = Date.now();
  checkpoints.forEach((checkpoint) => {
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
    ctx.fillStyle = checkpoint.reached ? "rgba(50, 255, 50, 0.8)" : "#fff";
    ctx.strokeStyle = checkpoint.reached ? "#32cd32" : "#ccc";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, 0, 15 + pulse + pop, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
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
// FADE-TO-BLACK OVERLAY
// -------------------------------------------------------------
function drawFadeOverlay() {
  if (isFading) {
    fadeOpacity += 0.016; // ~1 second fade at 60fps
    if (fadeOpacity >= 1) {
      fadeOpacity = 1;
      isFading = false;
      if (fadeCallback) {
        fadeCallback();
        fadeCallback = null;
      }
    }
    ctx.fillStyle = `rgba(0, 0, 0, ${fadeOpacity})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}

// -------------------------------------------------------------
// UPDATE
// -------------------------------------------------------------
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

  platforms.forEach((platform) => {
    const pNear = isX ? platform.x : platform.y;
    const pFar = isX ? platform.x + platform.width : platform.y + platform.height;

    // Only a platform the player currently overlaps on the OTHER axis can
    // block this axis's movement.
    const otherAxisOverlap = isX
      ? player.y + player.height / 2 > platform.y &&
        player.y - player.height / 2 < platform.y + platform.height
      : player.x + player.width / 2 > platform.x &&
        player.x - player.width / 2 < platform.x + platform.width;
    if (!otherAxisOverlap) return;

    if (delta > 0) {
      const newFar = newPos + size / 2;
      if (oldFar <= pNear && newFar > pNear) {
        newPos = pNear - size / 2;
        if (isX) player.dx = 0;
        else {
          player.dy = 0;
          grounded = true;
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
  return grounded;
}

function updatePlayer() {
  player.dy += gravity;

  if (keys["ArrowRight"] || keys["d"]) player.dx = horizontalSpeed;
  else if (keys["ArrowLeft"] || keys["a"]) player.dx = -horizontalSpeed;
  else player.dx = 0;

  resolveAxis("x");
  const grounded = resolveAxis("y");

  if (grounded) {
    doubleJumpUsed = false;
    if (!wasGrounded) {
      // Just landed — a quick squash that eases back to normal in draw().
      squashX = 1.3;
      squashY = 0.7;
    }
  }
  wasGrounded = grounded;

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
      Math.hypot(player.x - checkpoint.x, player.y - checkpoint.y) < 20 &&
      !checkpoint.reached
    ) {
      checkpoint.reached = true;
      checkpoint.reachedAt = Date.now();

      // If it's the final checkpoint → start fade
      if (index === checkpoints.length - 1 && !isFading) {
        isFading = true;
        fadeOpacity = 0;
        fadeCallback = () => {
          const nextLevel = currentLevel + 1;
          localStorage.setItem("savedLevel", nextLevel);
          window.location.reload();
        };
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
function update() {
  updatePlayer();
  updateLevelText();
  draw();
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

  drawPlatforms();
  drawSpikes();
  drawCheckpoints();
  drawPlayer();
  drawLevelText();
  drawDeadlyPlatforms();

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
  keys[e.key] = true;
  // Ignore key-repeat events fired while a key is held down — otherwise
  // holding the jump key auto-consumes the double jump instantly instead
  // of requiring a second, deliberate press.
  if (e.repeat) return;

  if (
    (e.key === " " || e.key === "w" || e.key === "ArrowUp") &&
    player.dy === 0
  ) {
    player.dy = jumpStrength;
    squashX = 0.7;
    squashY = 1.3;
  } else if (
    (e.key === " " || e.key === "w" || e.key === "ArrowUp") &&
    player.dy !== 0 &&
    !doubleJumpUsed
  ) {
    player.dy = jumpStrength;
    doubleJumpUsed = true;
    squashX = 0.7;
    squashY = 1.3;
  }
});

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
    // No levelN.js exists for this number — the player has finished the
    // last level. Show a completion screen instead of a frozen blank canvas.
    localStorage.removeItem("savedLevel");
    document.getElementById("gameCompleteMenu").classList.remove("hidden");
    document
      .getElementById("game-complete-menu-button")
      .addEventListener("click", () => {
        window.location.href = "index.html";
      });
  });
