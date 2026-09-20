const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Logical viewport size in CSS px. Every gameplay/camera/UI calculation in
// this file is written against these, never against canvas.width/height
// directly, because the canvas's actual pixel buffer is scaled up by
// devicePixelRatio (see resizeCanvas()) for crisp rendering on retina/
// high-DPI phones — mixing the two up would center the camera on a quarter
// of the real screen on a 2x-DPR phone instead of the whole thing.
let viewportWidth = window.innerWidth;
let viewportHeight = window.innerHeight;

// Set canvas dimensions, and keep them in sync with the window — this used
// to run once at load, which (rarely) could pick up a 0x0 size if the
// viewport hadn't finished laying out yet, and never noticed an actual
// window resize either since nothing re-ran it.
//
// The backing pixel buffer is sized at window size * devicePixelRatio (a
// phone's DPR is commonly 2-3x) while the CSS/display size stays at the
// logical window size — otherwise every draw call only fills as many
// physical pixels as a 1x display would, and the browser stretches that
// blurrily across the real, much denser screen (very visible on mobile).
// ctx.setTransform bakes the DPR scale into every draw call so the rest of
// this file keeps working entirely in logical/CSS pixels
// (viewportWidth/viewportHeight), same as before this existed.
function resizeCanvas() {
  viewportWidth = window.innerWidth;
  viewportHeight = window.innerHeight;
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.round(viewportWidth * dpr);
  canvas.height = Math.round(viewportHeight * dpr);
  canvas.style.width = viewportWidth + "px";
  canvas.style.height = viewportHeight + "px";
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// True on an actual touchscreen (phones/tablets), false for a mouse-driven
// desktop browser even if the window is resized narrow — same test
// game.css uses to decide whether to show the on-screen touch controls at
// all. `(pointer: coarse)` alone isn't enough: a touchscreen laptop/2-in-1
// with a trackpad or mouse also attached reports coarse (the hardware
// exists), even though its actual primary input is that mouse/trackpad —
// which showed up as on-screen touch controls, extra touch forgiveness,
// and the mobile-only camera framing all incorrectly kicking in on a
// regular desktop setup. `(hover: none)` is what's actually specific to
// "the primary pointer can't hover" (true for a phone/tablet's finger,
// false whenever a mouse/trackpad is the primary pointer, touchscreen
// hardware or not) — requiring both is the standard fix for this class of
// false positive. Declared this early because DIFFICULTY_SETTINGS below
// needs it: touch input is inherently less precise than a mouse/keyboard
// (no pixel-perfect pointer, fingers occlude what they're touching), so
// touch play gets a bit more forgiveness baked in rather than expecting
// phone players to match desktop precision.
const isTouchDevice = window.matchMedia("(pointer: coarse) and (hover: none)").matches;

// Drives every device-specific overlay layout (see game.css's
// `.layout-desktop`/`.layout-mobile` rules — most visibly the Shop
// overlay's spread-out desktop grid vs. its compact tabbed mobile layout)
// off the same test everything else on this page already uses, rather
// than a separate detection.
document.body.classList.add(isTouchDevice ? "layout-mobile" : "layout-desktop");

// Game settings
const gravity = 0.5;
const jumpStrength = -12;
const horizontalSpeed = 5;
// Bounce pads (see the landing check in updatePlayer()) launch harder than
// a normal jump — enough to clear noticeably more height than jumping
// unaided, so a chain of them reads as genuinely different traversal, not
// just "jump but yellow."
const BOUNCE_STRENGTH = -18;
// How many mid-air jumps have been used since the last time the player
// was grounded — generalized from a plain "has the double jump been used"
// boolean so a skin can grant more than one (see extraAirJumps() below;
// the "Triple Threat" skin's tripleJump ability sets this to 2 instead of
// the default 1).
let airJumpsUsed = 0;

// How many *extra* (mid-air) jumps the currently equipped skin grants on
// top of the always-available grounded jump — 1 for every skin by
// default (a normal double jump), 2 for a skin with `ability: "tripleJump"`.
function extraAirJumps() {
  const base = StarshadeEconomy.getEquippedAbility() === "tripleJump" ? 2 : 1;
  const powerUp = StarshadeEconomy.getEquippedPowerUp();
  return powerUp && powerUp.effect === "extraAirJump" ? base + 1 : base;
}

// Dash ability — a double-tap of Left/Right (keyboard or the touch d-pad,
// see onDirectionTap() below) fires a short, fast burst in that direction
// for any skin with `ability: "dash"`. A no-op for every other skin, and
// for a double-tap while a dash is already in progress (no re-triggering
// mid-dash).
let dashTimeRemaining = 0;
let dashDirection = 0; // -1 left, 1 right, meaningless while dashTimeRemaining <= 0
const DASH_SPEED = horizontalSpeed * 2.6;
const DASH_DURATION_TICKS = 10; // in 60fps-equivalent ticks, like everything else physics-timed
const DASH_DOUBLE_TAP_WINDOW_MS = 300;
const lastDirectionTapAt = { left: 0, right: 0 };

function onDirectionTap(direction) {
  if (isPaused || isFading || isDying) return;
  if (StarshadeEconomy.getEquippedAbility() !== "dash") return;
  const now = Date.now();
  if (
    dashTimeRemaining <= 0 &&
    now - lastDirectionTapAt[direction] < DASH_DOUBLE_TAP_WINDOW_MS
  ) {
    dashTimeRemaining = DASH_DURATION_TICKS;
    dashDirection = direction === "right" ? 1 : -1;
    vibrateHaptic(20);
    spawnParticles(player.x, player.y, 10, {
      colors: ["rgba(255,255,255,0.85)", "rgba(200,220,255,0.7)"],
      speed: 4,
      life: 16,
      size: 3,
      spread: 0.5,
      baseAngle: dashDirection > 0 ? Math.PI : 0, // burst backward, away from travel direction
      gravity: 0,
    });
  }
  lastDirectionTapAt[direction] = now;
}

// Slingshot launch pads — an Angry-Birds-style aim-and-launch mechanic
// (see window.slingshots, a per-level entity declared just like
// spikes/checkpoints — level data lives in levelN.js). Standing on one
// arms it (see the proximity check in updatePlayer()); dragging on the
// canvas while armed (mouse or touch — see the input listeners further
// down) previews a trajectory and, on release, launches the player.
// Modeled after the dash ability just above: just set player.dx/dy once
// and let gravity/resolveAxis() keep running normally afterward, rather
// than a whole separate canned-animation branch like updatePortalSuck().
let playerOnSlingshot = null; // the slingshot object the player is currently standing on, if any
let slingshotAim = null; // { dragStartX, dragStartY, dragX, dragY } while actively dragging, else null
let slingshotRecoveryTicks = 0; // mirrors dashTimeRemaining — briefly ignores input right after launch
const SLINGSHOT_RECOVERY_TICKS = 12;
const SLINGSHOT_POWER_SCALE = 0.12; // drag distance (px) -> launch speed

// Invisible anti-cheat ceiling (see updatePlayer()) — how close to the
// literal top edge of the viewport the player can get before being
// stopped. Small on purpose: it's a last-resort "can't leave the visible
// area" boundary, not a level-design element.
const SCREEN_TOP_MARGIN = 16;

// Difficulty (set on the Settings page, StarshadeEconomy.getDifficulty()
// reads the same localStorage key) — Easy slows hazards down and widens
// the checkpoint touch radius; Hard speeds hazards up and tightens it.
// Coin rewards scale to match (see skinsData.js).
// Checkpoint radii nudged up a bit across the board (was 28/20/14) — easier
// to actually trigger without changing where checkpoints are placed.
const DIFFICULTY_SETTINGS = {
  easy: { platformSpeedMultiplier: 0.7, checkpointRadius: 32 },
  normal: { platformSpeedMultiplier: 1, checkpointRadius: 24 },
  hard: { platformSpeedMultiplier: 1.3, checkpointRadius: 18 },
};
// `let`, not `const` — the pause menu's Settings overlay (see
// openSettingsOverlay()/refreshLiveSettings() below) can change the
// difficulty without a page reload, unlike the old standalone
// settings.html which always came back to game.html via a full navigation
// that re-ran this whole file fresh.
let difficultySettings =
  DIFFICULTY_SETTINGS[StarshadeEconomy.getDifficulty()] ||
  DIFFICULTY_SETTINGS.normal;

// Extra forgiveness added only on a touchscreen — a finger can't land as
// precisely as a mouse pointer, and it physically covers the thing it's
// touching, so the same checkpoint radius/spike hitbox that feels fair
// with a mouse feels needlessly punishing with a thumb. Added on top of
// (not replacing) the difficulty setting and the death-streak leniency
// below, so Easy+touch is the most forgiving combination and Hard+desktop
// is unaffected by any of this.
const TOUCH_INPUT_BONUS = isTouchDevice
  ? { checkpointRadius: 10, spikeForgiveness: 5 }
  : { checkpointRadius: 0, spikeForgiveness: 0 };

// Accessibility/preference toggles set on the Settings page (see
// settings.js) — both default to on so existing behavior doesn't change
// for anyone who's never touched these. `let`, not `const` — same
// live-update reasoning as difficultySettings above.
let screenShakeEnabled = localStorage.getItem("screenShake") !== "off";
let clickToJumpEnabled = localStorage.getItem("clickToJump") !== "off";

// Re-reads every setting the pause menu's Settings overlay can change, so
// adjusting one mid-run actually takes effect immediately instead of only
// on the next full page load. Also updates the live Audio element's
// volume, key bindings, and difficulty in one place rather than needing a
// bespoke listener per control (see settings.js, which calls this after
// every change). Exposed on window so settings.js — a separate classic
// script wrapped in its own IIFE (see its top comment) — can reach it.
function refreshLiveSettings() {
  screenShakeEnabled = localStorage.getItem("screenShake") !== "off";
  clickToJumpEnabled = localStorage.getItem("clickToJump") !== "off";
  difficultySettings =
    DIFFICULTY_SETTINGS[StarshadeEconomy.getDifficulty()] ||
    DIFFICULTY_SETTINGS.normal;
  const savedKeyBindings = loadKeyBindings();
  keyBindings.left = savedKeyBindings.left;
  keyBindings.right = savedKeyBindings.right;
  keyBindings.jump = savedKeyBindings.jump;
  const liveMusicVolume = parseInt(localStorage.getItem("musicVolume"), 10);
  audio.volume = isNaN(liveMusicVolume) ? 0.33 : liveMusicVolume / 100;
}
window.refreshLiveSettings = refreshLiveSettings;

// Subtle rubber-banding: after several deaths in a row without reaching a
// *new* checkpoint, nudge the odds back in the player's favor a little —
// a slightly wider checkpoint radius and slightly smaller spike/slightly
// bigger landing hitboxes (see resolveAxis()/the spike check below) —
// capped low enough that it never feels like the level itself changed.
let consecutiveDeaths = 0;
function leniencyLevel() {
  return Math.min(3, Math.floor(consecutiveDeaths / 4));
}

// Camera settings — the camera follows the player on both axes (see
// updatePlayer()), easing toward centering them rather than snapping
// instantly. Levels are no longer restricted to a single screen-height
// band of y values (see applyLevelVerticalLayout()/docs/gameplay.md) now
// that the view actually scrolls to follow the player up and down, not
// just left and right.
let cameraOffsetX = 0;
let cameraOffsetY = 0;
const cameraSmoothing = 0.12; // lower = more lag/trailing behind the player
// Vertical follow is deliberately laggier than horizontal — a lower decay
// factor here means the camera moves noticeably less than the player does
// during any short burst of vertical motion (a jump, a landing) before
// gradually catching back up, rather than snapping to match the player's
// own Y movement 1:1. Purely a feel tweak (smoother, a bit more "the
// player moves, the world settles behind them") — horizontal tracking
// (cameraSmoothing above) is untouched.
const cameraSmoothingY = 0.08;

// Zooms the whole world view out a little during a fall (see the
// fall-speed-proportional openAmount in updatePlayer()) and back to
// normal on landing — seeing more of the level around you while you're
// falling, where you most need to spot the platform you're aiming for,
// without needing a hard cap on jump height or a bigger, more
// disorienting jump-instant zoom. Proportional to actual fall speed
// rather than a flat "airborne y/n" toggle, so the tiniest hop still
// barely opens up at all — earlier versions of this snapped to the
// zoomed-out target the instant the player left the ground at all, which
// made a routine hop look and feel different from how the game always
// played. CAMERA_OPEN_FALL_SPEED_MIN is now low enough that an ordinary
// jump's own landing speed (dy approaches jumpStrength's magnitude, 12,
// by the time it comes back down) opens the view a little too — the
// level should stay in view through a normal jump, not just a real,
// dangerous fall.
let cameraZoom = 1;
const CAMERA_ZOOM_GROUNDED = 1;
const CAMERA_ZOOM_OPEN_RANGE = 0.2; // how far zoom drops at full "openAmount"
const CAMERA_ZOOM_SMOOTHING = 0.06;

// Where the player sits vertically on screen, as a fraction of
// viewportHeight from the top — 0.5 is dead-center. At rest that's the
// normal "centered" framing; during a fast fall it eases toward a smaller
// fraction (the player sits higher up on screen), which hands most of the
// freed-up space at the bottom to whatever's below them — exactly the
// area they need to actually see to land safely, which a purely-centered
// camera (or the zoom above alone) doesn't prioritize. Driven by the same
// openAmount as the zoom above, so it shares the same "never during a
// normal jump" guarantee.
let cameraVerticalAnchor = 0.5;
const CAMERA_ANCHOR_GROUNDED = 0.5;
const CAMERA_ANCHOR_OPEN_RANGE = 0.2; // how far the anchor rises at full "openAmount"
const CAMERA_ANCHOR_SMOOTHING = 0.05;

// The player.dy range (px/tick) that "openAmount" ramps across — a normal
// jump's descent brushes the low end right near landing (a brief, gentle
// widen-then-settle rather than a snap), while a real, dangerous fall
// (a long drop, a missed platform) climbs toward the high end and holds
// the view open the whole way down.
const CAMERA_OPEN_FALL_SPEED_MIN = 9;
const CAMERA_OPEN_FALL_SPEED_MAX = 24;

// How far the camera leans in the direction the player is actually
// moving (see the cameraTargetX adjustment in updatePlayer()) — a classic
// platformer "look-ahead" camera trick for a more open field of view in
// front of the player without touching zoom at all. Small on purpose:
// horizontalSpeed (and DASH_SPEED, faster still) are the only values dx
// ever takes since this game has no acceleration, so this is really a
// fixed lean while moving vs. not, smoothed into place by the existing
// camera easing rather than a snap.
const CAMERA_LOOKAHEAD_FACTOR = 14;

// Screen shake (triggered on death)
let shakeTime = 0;
let shakeMagnitude = 0;

// Player squash & stretch animation
let squashX = 1;
let squashY = 1;
let wasGrounded = false;

// The moving platform the player is currently resting on, if any (see the
// carry step at the top of updatePlayer()) — tracked persistently across
// frames rather than only within a single resolveAxis() call, so the
// player can be carried proactively every frame instead of depending on
// the collision crossing-test to keep re-discovering the landing, which a
// platform moving faster than gravity alone pulls the player down can
// outrun (see updatePlayer()'s carry comment for the full story).
let riddenPlatform = null;

// Per-attempt flags for the "weird" achievements (achievementsData.js) —
// reset every time a level (re)loads (see resetLevelState()), so they
// track only the CURRENT attempt at the current level, not the whole
// session. Read (and, if still true/false the right way, acted on) once
// in advanceToNextLevel() right before the next level's load resets them.
let leveldiedThisAttempt = false;
let usedExtraJumpThisAttempt = false;
// Edge-detected (not "grounded on a conveyor" every single frame) so a
// long ride only counts once, not once per frame — see the conveyor
// carry step in updatePlayer().
let wasOnConveyorLastFrame = false;

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

// The portal-suck effect (see updatePortalSuck()) needs particles moving
// *toward* a point instead of away from one — spawnParticles() above
// always starts at (x, y) and radiates outward, which can't produce that,
// so this spawns them scattered in a ring around the target and aimed
// inward instead. Pushes directly into the same `particles` array with
// the same shape spawnParticles() produces, so updateParticles()/
// drawParticles() handle these identically without needing to know the
// difference.
function spawnConvergingParticles(targetX, targetY, count, colors) {
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const radius = 35 + Math.random() * 45;
    const speed = 3 + Math.random() * 2.5;
    particles.push({
      x: targetX + Math.cos(angle) * radius,
      y: targetY + Math.sin(angle) * radius,
      vx: -Math.cos(angle) * speed,
      vy: -Math.sin(angle) * speed,
      life: 20,
      maxLife: 20,
      size: 2 + Math.random() * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      gravity: 0,
    });
  }
}

function updateParticles(dtScale) {
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.vy += p.gravity * dtScale;
    p.x += p.vx * dtScale;
    p.y += p.vy * dtScale;
    p.life -= dtScale;
    if (p.life <= 0) particles.splice(i, 1);
  }
}

function drawParticles() {
  particles.forEach((p) => {
    ctx.save();
    ctx.globalAlpha = Math.max(0, p.life / p.maxLife);
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x - cameraOffsetX, p.y - cameraOffsetY, p.size, 0, Math.PI * 2);
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

// "Portal suck" — a short canned animation that plays the instant the
// *final* checkpoint of a level is touched, before the fade-to-black
// transition (isFading above) even starts: the player visibly shrinks,
// spins, and slides into the checkpoint, with particles converging
// inward instead of the usual outward burst. Runs in place of normal
// updatePlayer() (see update()) — no input has anything left to do once
// the level is already complete, and freezing the camera here reads as
// "the world holds still while you get pulled in" rather than the camera
// also chasing the animation. Colors are drawn from the equipped skin
// (see updatePortalSuck()), so this looks at least a little different
// per skin without needing a wholly separate effect per one.
let isPortalSucking = false;
let portalSuckProgress = 0; // 0..1
const PORTAL_SUCK_DURATION = 34; // ticks, ~0.55s at 60fps
let portalStartX = 0;
let portalStartY = 0;
let portalTargetX = 0;
let portalTargetY = 0;
let portalSpinAngle = 0;

// "Dying" — a short canned animation that plays the instant a hazard
// (deadly platform, spike, falling off the bottom) actually kills the
// player, before the checkpoint respawn happens — see triggerDeath()/
// updateDeathAnimation() below. Mirrors the portal-suck animation's
// shape (a frozen, animation-only interlude instead of normal
// updatePlayer() — see update()) but plays in the opposite emotional
// direction: spinning apart and shrinking to nothing at the death
// location, flashing toward red, instead of gracefully sliding into a
// checkpoint. The player stays frozen exactly where they died for the
// animation's duration — teleporting to the respawn point only happens
// once it finishes (see finishDeath()) — so the moment of death actually
// reads as a moment, not an instant cut.
let isDying = false;
let deathProgress = 0; // 0..1
const DEATH_ANIM_DURATION = 26; // ticks, ~0.43s at 60fps — snappier than
// the portal-suck's 34 (PORTAL_SUCK_DURATION above); dying is frequent
// enough (especially on a hard section) that it can't afford to feel
// sluggish the way a once-per-level finish animation can.
let deathSpinAngle = 0;
let deathAnimX = 0;
let deathAnimY = 0;

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

// -------------------------------------------------------------
// MOBILE: fullscreen + keep-awake
// -------------------------------------------------------------
// isTouchDevice is declared near the top of the file (DIFFICULTY_SETTINGS
// needs it too) — fullscreen is only requested on touch devices, since a
// mouse-driven desktop player never asked to have their browser chrome
// hijacked.

// The Fullscreen API needs a direct user gesture to succeed, and iOS
// Safari doesn't support it at all for anything but a <video> — that's
// what manifest.json plus the apple-mobile-web-app-capable meta tags (see
// every page's <head>) are for: installed to the home screen, iOS launches
// the page in its own fullscreen chrome without ever touching this API.
// This is the Android Chrome / other-touch-browser path: ask for
// fullscreen the moment the player actually touches the screen, so the
// address bar doesn't eat into the play area for anyone who didn't
// install it.
function requestGameFullscreen() {
  const el = document.documentElement;
  const request = el.requestFullscreen || el.webkitRequestFullscreen;
  if (!request) return;
  try {
    const result = request.call(el);
    if (result && result.catch) result.catch(() => {});
  } catch (e) {
    // Ignore — fullscreen is a nice-to-have, never worth failing over.
  }
}

if (isTouchDevice) {
  document.addEventListener("touchstart", requestGameFullscreen, { once: true });
}

// Haptic feedback on jump/death/checkpoint — navigator.vibrate() only
// exists on Android Chrome and a handful of other touch browsers (iOS
// Safari has never implemented it at all), and only inside a real touch
// session, never a mouse-driven desktop tab. Wrapped so every call site
// below can fire-and-forget without its own feature check.
function vibrateHaptic(pattern) {
  if (isTouchDevice && navigator.vibrate) navigator.vibrate(pattern);
}

// Screen Wake Lock — without this, a phone left untouched for its normal
// screen-timeout (reading level text, lining up a jump, no taps for a
// stretch) dims and locks mid-run. Re-requested every time the tab
// becomes visible again because the browser silently releases the lock
// whenever it's backgrounded (switching apps, locking the phone manually,
// the pause menu's Settings link navigating away) and never restores it
// on its own.
let wakeLock = null;
async function requestWakeLock() {
  if (!("wakeLock" in navigator)) return;
  try {
    wakeLock = await navigator.wakeLock.request("screen");
  } catch (e) {
    // Denied (e.g. low battery mode) or unsupported in this context —
    // there's no fallback, just don't crash over it.
  }
}
requestWakeLock();
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") requestWakeLock();
});

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

// Mechanic-discovery tips: unlike level1.js's hand-authored tips above
// (movement/jump/spikes/checkpoints/finish, which only ever run once,
// on level 1), these cover platform *mechanics* — moving, ghost, melt,
// bounce, conveyor — generically across all 100 levels, so a mechanic
// introduced on any level (level 2's moving/melt/ghost platforms, for
// instance, which otherwise get zero explanation — see
// docs/design-standards.md #2) doesn't go unexplained just because it
// isn't level 1. Fires once ever per mechanic *type*, tracked in
// localStorage rather than per-level, so a mechanic already learned on
// an earlier level never re-explains itself later. The ghost tip's
// wording also covers the "mandatory gate" rule change starting level
// 41 (docs/design-standards.md #3) up front, rather than staying silent
// until a player hits that with no warning.
const MECHANIC_TIP_TEXT = {
  moving: "Some platforms move — time your jump to land on them.",
  ghost:
    "Ghost platforms flicker between solid and see-through. Most are just a bonus shortcut — but a few, later on, are the only way across a gap. Watch the timing.",
  melt: "Platforms with a warm glow crumble a moment after you land — keep moving.",
  bounce: "Bounce pads launch you upward on contact — ride the momentum for extra height.",
  conveyor: "Conveyor belts push you sideways while you stand on them.",
};
const MECHANIC_TIP_LOOKAHEAD = 140;

function loadSeenMechanicTips() {
  try {
    return JSON.parse(localStorage.getItem("seenMechanicTips") || "{}");
  } catch {
    return {};
  }
}

function markMechanicTipSeen(key) {
  const seen = loadSeenMechanicTips();
  if (seen[key]) return;
  seen[key] = true;
  localStorage.setItem("seenMechanicTips", JSON.stringify(seen));
}

function mechanicKeyForPlatform(p) {
  if (p.ghost) return "ghost";
  if (p.melt) return "melt";
  if (p.bounce) return "bounce";
  if (p.conveyor) return "conveyor";
  if (p.moveAxis) return "moving";
  return null;
}

// Appends one synthetic tip per not-yet-seen mechanic present in this
// level to window.tutorialTips (alongside whatever the level itself
// defines), positioned a little before that mechanic's first platform so
// there's time to read it before arriving. Marking a mechanic "seen"
// happens when its tip actually fires (updateTutorialTips(), below), not
// here — so quitting before reaching it doesn't burn the one-time tip.
function injectMechanicDiscoveryTips() {
  // Idempotent: strips any synthetic tips a previous call already added
  // (identified by `mechanicKey`, which no level-authored tip sets) before
  // recomputing, so calling this more than once for the same level load —
  // resetLevelState() running twice, say — can't duplicate entries.
  window.tutorialTips = (window.tutorialTips || []).filter((t) => !t.mechanicKey);
  const seen = loadSeenMechanicTips();
  const firstXByMechanic = {};
  (platforms || []).forEach((p) => {
    const key = mechanicKeyForPlatform(p);
    if (!key || seen[key]) return;
    if (firstXByMechanic[key] == null || p.x < firstXByMechanic[key]) {
      firstXByMechanic[key] = p.x;
    }
  });
  Object.keys(firstXByMechanic).forEach((key) => {
    window.tutorialTips.push({
      x: Math.max(0, firstXByMechanic[key] - MECHANIC_TIP_LOOKAHEAD),
      text: MECHANIC_TIP_TEXT[key],
      mechanicKey: key,
    });
  });
  window.tutorialTips.sort((a, b) => a.x - b.x);
}

// Set current level from saved data if it exists, otherwise start at 1.
// Unlike the old reload-based flow, this is now only a "resume after a
// manual browser refresh" convenience — normal level-to-level progress
// happens in-page via advanceToNextLevel() and never touches this read.
let currentLevel = parseInt(localStorage.getItem("savedLevel"), 10) || 1;

// How far through the sky's "low altitude to deep cosmos" progression the
// backdrop should look (see drawBackground()) — 0 at level 1, 1 by
// SKY_PROGRESS_LEVEL_COUNT, then held there for the rest of the game —
// recomputed once per level load in resetLevelState(). Deliberately NOT
// tied to the actual total level count: the star/cloud/planet fade-in
// thresholds below (drawStarLayer()/drawCloudLayer()/drawPlanetLayer())
// were hand-tuned as fractions of this to land on specific absolute level
// numbers (stars starting around level 4, fully visible by level ~17,
// same numbers docs/gameplay.md's background section describes). Using
// the full 100-level count here instead — what this used to do, back
// when the game only had 25 levels and "the whole game" and "this
// progression" were the same span — stretched those same fractions out to
// level ~13/~65 instead, leaving the sky looking flat and starless for
// the entire early game. Finishing the transition a bit past a quarter of
// the way through a much longer game reads better than barely completing
// it by the very end.
const SKY_PROGRESS_LEVEL_COUNT = 25;
let sceneProgress = 0;

// A level opts into a wholesale visual reskin with `window.levelTheme`
// (currently only `"neon"` — see drawBackground()/drawInsetRect() callers)
// instead of the normal progress-based nebula backdrop and violet/crimson
// palette. Reset to null on every load (see loadLevel()) so a themed
// level can't leak its look into the next, ordinary one.
let currentLevelTheme = null;

// The level's actual spawn point, captured once per level load (see
// resetLevelState()) *after* applyLevelVerticalLayout() has shifted the
// authored (100, 300) start position to match wherever it centered this
// level on this viewport. resetPlayer()'s "no checkpoint reached yet"
// fallback needs these, not the literal (100, 300) — otherwise, on a
// viewport short enough for that shift to be more than trivial (a phone
// in landscape is exactly this — see docs/gameplay.md), dying before the
// first checkpoint respawns the player into empty air at the *unshifted*
// coordinates, with no ground anywhere near them: an unrecoverable "fall
// forever, hit the off-screen death check, respawn into the same empty
// air" loop.
let levelStartX = 100;
let levelStartY = 300;

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

// -------------------------------------------------------------
// CHECKPOINT PROGRESS (resume exactly where you left off)
// -------------------------------------------------------------
// `savedLevel` (see currentLevel above) only remembers *which level* to
// resume into — reloading the page, or coming back to a level via the
// Level Map after picking it up later, always restarted that level from
// its very first platform even if the last session had already reached
// its third checkpoint. This remembers the furthest checkpoint *index*
// reached per level (not full checkpoint objects — those are re-created
// fresh from that level's own script every load, see loadLevel() — just
// which one to fast-forward past), keyed by level number so every level's
// progress is independent and a level never played yet simply has none.
const CHECKPOINT_PROGRESS_KEY = "checkpointProgress";

function loadAllCheckpointProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(CHECKPOINT_PROGRESS_KEY));
    if (saved && typeof saved === "object") return saved;
  } catch (e) {
    // ignore malformed data
  }
  return {};
}

function saveCheckpointProgress(levelNumber, index) {
  const all = loadAllCheckpointProgress();
  // Checkpoints are reached in order during normal play, but take the max
  // defensively rather than assuming — never want a stray write to move
  // a saved resume point backwards.
  if (!(levelNumber in all) || index > all[levelNumber]) {
    all[levelNumber] = index;
    try {
      localStorage.setItem(CHECKPOINT_PROGRESS_KEY, JSON.stringify(all));
    } catch (e) {
      // Storage full/unavailable — resuming from the level start instead
      // of losing progress entirely isn't worth crashing over.
    }
  }
}

function loadCheckpointProgress(levelNumber) {
  const all = loadAllCheckpointProgress();
  const index = all[levelNumber];
  return typeof index === "number" ? index : -1;
}

// Touch d-pad state (see the #touch-left/#touch-right listeners below) —
// a separate flag rather than synthesizing key events, since key bindings
// are user-rebindable and a touch button isn't "a key" at all.
const touchState = { left: false, right: false };
const anyPressed = (action) =>
  keyBindings[action].some((k) => keys[k]) ||
  (action === "left" && touchState.left) ||
  (action === "right" && touchState.right);

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
    window.levelTheme = null;
    window.slingshots = [];

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
  sceneProgress = Math.max(
    0,
    Math.min(1, (currentLevel - 1) / (SKY_PROGRESS_LEVEL_COUNT - 1))
  );
  currentLevelTheme = typeof levelTheme !== "undefined" ? levelTheme : null;

  // Re-check the canvas size here too, not just on an actual window
  // resize — if the very first frame happened to run before the viewport
  // had finished laying out (see known-issues.md #15), viewportWidth/
  // viewportHeight could still be stuck at 0 by now with no resize event
  // ever having fired to fix it, and a 0-height viewport makes the "fell
  // off the bottom" check (`player.y - cameraOffsetY > viewportHeight`)
  // trip on frame one.
  resizeCanvas();

  textOpacity = 1;
  textFadeStartTime = null;
  player.x = 100;
  player.y = 300;
  player.dx = 0;
  player.dy = 0;
  airJumpsUsed = 0;
  leveldiedThisAttempt = false;
  usedExtraJumpThisAttempt = false;
  wasOnConveyorLastFrame = false;
  playerOnSlingshot = null;
  slingshotAim = null;
  slingshotRecoveryTicks = 0;
  // The player starts standing on the level's opening platform, not
  // airborne — wasGrounded is what tryJump() actually checks for "can
  // take a fresh (non-double) jump," so this needs to be true from frame
  // one, or a jump pressed before the first physics tick has run would
  // wrongly consume the double jump instead of registering as the first.
  wasGrounded = true;
  // A fresh level has an entirely new platforms array (loadLevel()
  // re-injects the level script from scratch) — any platform object this
  // pointed at no longer belongs to it.
  riddenPlatform = null;
  squashX = 1;
  squashY = 1;
  cameraZoom = 1;
  cameraVerticalAnchor = 0.5;
  dashTimeRemaining = 0;
  isPortalSucking = false;
  portalSuckProgress = 0;
  isDying = false;
  deathProgress = 0;
  shakeTime = 0;
  levelFrameCount = 0;
  particles = [];
  consecutiveDeaths = 0;
  // Per-shape cosmetic state (see drawPlayer()) shouldn't carry a
  // mid-spin/mid-roll motion across a level transition.
  triangleSpinActive = false;
  triangleSpinAngle = 0;
  circleRollAngle = 0;
  circleBounceOffset = 0;
  injectMechanicDiscoveryTips();
  tutorialTipTriggered = (tutorialTips || []).map(() => false);
  tutorialTipQueue = [];
  currentTutorialTip = null;
  tutorialTipOpacity = 0;

  applyLevelVerticalLayout();

  // Capture the *actual* spawn point after the shift above, for
  // resetPlayer()'s no-checkpoint-yet fallback — see levelStartX/Y's
  // declaration for why the literal (100, 300) this function set player.x/y
  // to a moment ago isn't the right thing to respawn into.
  levelStartX = player.x;
  levelStartY = player.y;

  if (typeof checkpoints !== "undefined") {
    checkpoints.forEach((c) => (c.reached = false));

    // Resume exactly where this level was last left off, not its very
    // first platform — see CHECKPOINT_PROGRESS_KEY's declaration. Marks
    // every checkpoint up to (and including) the saved one as already
    // reached — matters for the *last* checkpoint specifically, since a
    // save mid-way through a level should never come back already
    // fading into the next one — and spawns the player there exactly the
    // way a mid-level death respawn already does (see resetPlayer()).
    const savedIndex = loadCheckpointProgress(currentLevel);
    if (savedIndex >= 0 && savedIndex < checkpoints.length) {
      // reachedAt = 0 (not left undefined) so drawCheckpoints()'s
      // "just reached" pop — meant to decay over 300ms — doesn't fall back
      // to `|| now` every frame and render these permanently oversized.
      for (let i = 0; i <= savedIndex; i++) {
        checkpoints[i].reached = true;
        checkpoints[i].reachedAt = 0;
      }
      player.x = checkpoints[savedIndex].x;
      player.y = checkpoints[savedIndex].y - 30;
    }
  }

  // Snap (don't smoothly lerp) the camera to the new level's start — this
  // runs while the screen is fully black mid-transition, so a lerp would
  // just be wasted motion nobody sees, and skipping it means the fade-in
  // never has to "catch up" to the player.
  cameraOffsetX = player.x - viewportWidth / 2;
  cameraOffsetY = player.y - viewportHeight * cameraVerticalAnchor;
}

// Gives a level's opening view a nice frame: shifts every y (platforms,
// hazards, checkpoints, the player's start) by a constant so the level's
// own vertical center lands on the viewport's center at the moment it
// loads, rather than wherever a level file happened to author its numbers.
// This used to be load-bearing (there was no vertical camera scroll at
// all, so anything outside one screen-height band was simply never
// visible — see docs/gameplay.md); now that the camera follows the player
// vertically too (see updatePlayer()'s targetCameraOffsetY), it's just a
// nicer starting frame, not a visibility requirement — a level is free to
// span far more vertical space than one screen. A pure translation of
// already-verified geometry: shifting every y by the same amount preserves
// every gap's rise and every checkpoint's relative safety (the audits in
// .claude/ check *relative* distances), so this can't turn a
// previously-safe checkpoint or previously-possible jump into a bad one.
//
// The anti-cheat ceiling that used to live here (a solid platform placed
// above the level's own highest point) is gone — see the screen-pinned
// clamp in updatePlayer() instead: pinning to the live camera position
// rather than level-space geometry means it can't go stale across a
// window resize or a vertical scroll, and it's invisible on purpose
// (nothing to draw — you just can't go there).
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
  (window.slingshots || []).forEach((s) => {
    tops.push(s.y);
    bottoms.push(s.y + s.height);
  });

  const levelCenterY = (Math.min(...tops) + Math.max(...bottoms)) / 2;
  const shiftY = Math.round(viewportHeight / 2 - levelCenterY);

  if (shiftY !== 0) {
    platforms.forEach((p) => (p.y += shiftY));
    deadlyPlatforms.forEach((p) => (p.y += shiftY));
    spikes.forEach((s) => (s.y += shiftY));
    checkpoints.forEach((c) => (c.y += shiftY));
    (window.slingshots || []).forEach((s) => (s.y += shiftY));
    player.y += shiftY;
  }
}

function advanceToNextLevel() {
  let coinsEarned = StarshadeEconomy.markLevelCompleted(currentLevel);
  // "Coin Boost" power-up (see shopData.js's STARSHADE_POWERUPS) — a
  // persistent perk while equipped, not a one-time consumable, so it
  // applies to every level completion for as long as it stays equipped.
  const equippedPowerUp = StarshadeEconomy.getEquippedPowerUp();
  if (coinsEarned > 0 && equippedPowerUp && equippedPowerUp.effect === "coinBoost") {
    const bonus = Math.round(coinsEarned * 0.5);
    StarshadeEconomy.addCoins(bonus);
    coinsEarned += bonus;
  }
  if (coinsEarned > 0) showCoinToast(`+${coinsEarned} Coins`);
  // "Weird" achievement bookkeeping — read the CURRENT level's per-attempt
  // flags before the next level's load resets them (see
  // resetLevelState()). recordLevelPlaythrough() counts every completion,
  // including replays of an already-beaten level, unlike markLevelCompleted()
  // above which only pays out/records the first time.
  StarshadeEconomy.recordLevelPlaythrough();
  if (!leveldiedThisAttempt) StarshadeEconomy.recordDeathlessCompletion();
  if (!usedExtraJumpThisAttempt) StarshadeEconomy.recordNoDoubleJumpCompletion();
  StarshadeAchievements.checkAndNotify();

  currentLevel++;
  localStorage.setItem("savedLevel", String(currentLevel));

  return loadLevel(currentLevel).catch(() => {
    // No levelN.js exists for this number — the player has finished the
    // last level.
    const bonus = StarshadeEconomy.setGameCompleted();
    showGameCompleteScreen(bonus);
    StarshadeAchievements.checkAndNotify();
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

let hasGameStarted = false;

document
  .getElementById("game-complete-menu-button")
  .addEventListener("click", () => {
    document.getElementById("gameCompleteMenu").classList.add("hidden");
    // So the main menu's Play button (see below) starts a fresh run
    // instead of trying to resume past the last level again.
    currentLevel = 1;
    localStorage.setItem("savedLevel", "1");
    isFading = false;
    loadLevel(1);
    openMainMenuOverlay();
  });

// -------------------------------------------------------------
// PAUSE MENU + MAIN MENU + every full-screen overlay
// -------------------------------------------------------------
// Settings, the Level Map, Achievements, Profile, and the Shop all open
// as overlays *on top of* whichever root screen was showing —
// the pause menu mid-run, or the main menu — rather than navigating to a
// separate page. Every one of those overlays' own scripts is also loaded
// here (each wrapped in its own IIFE — see their top comments) and drives
// this exact same markup in place instead. Besides keeping the game's
// state intact the way a full navigation never could mid-run, this keeps
// game.js's own `audio` element alive and playing throughout (see
// docs/architecture.md) — there's only one page in the whole app now, so
// nothing ever tears it down. Even "Main Menu" (what used to be "Quit to
// Menu", a real navigation) is just another overlay swap now.
const ROOT_MENU_IDS = ["pauseMenu", "mainMenuOverlay"];
const SUB_OVERLAY_IDS = [
  "settingsOverlay",
  "levelMapOverlay",
  "achievementsOverlay",
  "profileOverlay",
  "shopOverlay",
];
// Which root menu a sub-overlay should return to when it closes — set by
// openSubOverlay() below at the moment it's opened, since a sub-overlay
// can now be reached from either root.
let activeRootMenuId = null;

function hideRootMenus() {
  ROOT_MENU_IDS.forEach((id) => document.getElementById(id).classList.add("hidden"));
}

function closeSubOverlays() {
  let closedAny = false;
  SUB_OVERLAY_IDS.forEach((id) => {
    const el = document.getElementById(id);
    if (!el.classList.contains("hidden")) {
      el.classList.add("hidden");
      closedAny = true;
    }
  });
  if (closedAny && activeRootMenuId) {
    document.getElementById(activeRootMenuId).classList.remove("hidden");
  }
  return closedAny;
}

function openSubOverlay(overlayId) {
  activeRootMenuId = document.getElementById("pauseMenu").classList.contains("hidden")
    ? "mainMenuOverlay"
    : "pauseMenu";
  hideRootMenus();
  document.getElementById(overlayId).classList.remove("hidden");
}

function openSettingsOverlay() {
  openSubOverlay("settingsOverlay");
}
function closeSettingsOverlay() {
  closeSubOverlays();
}
window.closeSettingsOverlay = closeSettingsOverlay;

function openLevelMapOverlay() {
  openSubOverlay("levelMapOverlay");
  // Coin balance/unlock state can have changed since this was last shown
  // (or never shown this page load) — re-render rather than trusting a
  // stale first pass. Guarded because these only exist once levels.js has
  // actually finished loading and run (see its IIFE).
  if (typeof window.updateLevelMapCoinBalance === "function") window.updateLevelMapCoinBalance();
  if (typeof window.renderLevelMap === "function") window.renderLevelMap();
}
function closeLevelMapOverlay() {
  closeSubOverlays();
}
window.closeLevelMapOverlay = closeLevelMapOverlay;

function openAchievementsOverlay() {
  openSubOverlay("achievementsOverlay");
  // Same "don't trust a stale first render" reasoning as the level map.
  if (typeof window.renderAchievementsOverlay === "function") window.renderAchievementsOverlay();
}
function closeAchievementsOverlay() {
  closeSubOverlays();
}
window.closeAchievementsOverlay = closeAchievementsOverlay;

function openProfileOverlay() {
  openSubOverlay("profileOverlay");
  // Same "don't trust a stale first render" reasoning as the level map
  // and achievements overlays — coins/completions/unlocks can all have
  // changed since this was last opened.
  if (typeof window.renderProfileOverlay === "function") window.renderProfileOverlay();
}
function closeProfileOverlay() {
  closeSubOverlays();
}
window.closeProfileOverlay = closeProfileOverlay;

function openShopOverlay() {
  openSubOverlay("shopOverlay");
  if (typeof window.renderShopOverlay === "function") window.renderShopOverlay();
}
function closeShopOverlay() {
  closeSubOverlays();
}
window.closeShopOverlay = closeShopOverlay;

// Pauses gameplay (if a run is in progress) and shows the main menu.
// Replaces what used to be "Quit to Menu"'s real navigation back to
// index.html — there's only one page left, so quitting to the menu is
// just showing a different overlay over the same still-running
// canvas/Audio, not leaving anything.
function openMainMenuOverlay() {
  if (hasGameStarted) isPaused = true;
  hideRootMenus();
  activeRootMenuId = null;
  document.getElementById("mainMenuOverlay").classList.remove("hidden");
}

// Picking a level from the map overlay starts it immediately in-page — a
// fade + loadLevel(), the exact mechanism advancing to the next level
// already uses — instead of navigating through a loading screen. If the
// game hasn't started yet (the level map was opened straight from the
// main menu before Play was ever pressed), there's no run to fade out of
// — just start fresh at that level instead.
function startLevelFromOverlay(levelNumber) {
  currentLevel = levelNumber;
  localStorage.setItem("savedLevel", String(levelNumber));
  document.getElementById("levelMapOverlay").classList.add("hidden");
  if (!hasGameStarted) {
    hideRootMenus();
    startGame();
    return;
  }
  hideRootMenus();
  isPaused = false;
  if (isFading || isPortalSucking) return; // shouldn't happen, but never stack transitions
  isFading = true;
  fadeOpacity = 0;
  fadeDirection = 1;
  fadeCallback = () => loadLevel(levelNumber);
}
window.startLevelFromOverlay = startLevelFromOverlay;

document.getElementById("pause-open-button").addEventListener("click", () => {
  // A sub-overlay covers the pause menu itself — back out of that first,
  // the same way Escape does below, rather than also toggling pause and
  // leaving the sub-overlay stranded on screen with gameplay running
  // underneath it.
  if (closeSubOverlays()) return;
  setPaused(!isPaused);
});
document.getElementById("resume-button").addEventListener("click", () => {
  setPaused(false);
});
document.getElementById("pause-settings-button").addEventListener("click", openSettingsOverlay);
document.getElementById("pause-levels-button").addEventListener("click", openLevelMapOverlay);
document.getElementById("pause-achievements-button").addEventListener("click", openAchievementsOverlay);
document.getElementById("pause-profile-button").addEventListener("click", openProfileOverlay);
document.getElementById("pause-shop-button").addEventListener("click", openShopOverlay);
document.getElementById("pause-main-menu-button").addEventListener("click", openMainMenuOverlay);

// -------------------------------------------------------------
// MAIN MENU
// -------------------------------------------------------------
// "Welcome back" greeting using the Display Name set in Settings — nothing
// shown for a first-time/nameless visitor. Used to live in script.js,
// which is retired now that this is the only page in the app.
const savedPlayerName = localStorage.getItem("playerName");
if (savedPlayerName) {
  document.getElementById("welcome-message").textContent = `Welcome back, ${savedPlayerName}!`;
}

document.getElementById("main-menu-play-button").addEventListener("click", () => {
  hideRootMenus();
  activeRootMenuId = null;
  if (!hasGameStarted) {
    startGame();
  } else {
    isPaused = false;
  }
});
document.getElementById("main-menu-levels-button").addEventListener("click", openLevelMapOverlay);
document.getElementById("main-menu-shop-button").addEventListener("click", openShopOverlay);
document.getElementById("main-menu-achievements-button").addEventListener("click", openAchievementsOverlay);
document.getElementById("main-menu-settings-button").addEventListener("click", openSettingsOverlay);
document.getElementById("shop-back-button").addEventListener("click", closeShopOverlay);

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
// SURFACE TEXTURES (platforms, hazards, ghost/melt platforms, checkpoints)
// -------------------------------------------------------------
// Real SVG images (assets/textures/) turned into tileable canvas
// patterns, rather than a plain flat fillStyle — a `ctx.createPattern()`
// needs its source image already loaded, which happens asynchronously,
// so every consumer below just checks for `null` and falls back to the
// flat color alone until it's ready (a handful of frames at most, and
// only ever noticeable on the very first level load).
let platformTexturePattern = null;
let hazardTexturePattern = null;
let ghostTexturePattern = null;
// Three severity stages (see drawMeltPlatforms()) instead of one static
// texture — swapped by how close a melt platform's own countdown is to
// running out, so the crack art itself visibly worsens over time instead
// of only the existing shake/flicker communicating urgency.
let meltTexturePatternStages = [null, null, null];

function loadTexturePattern(src, onReady) {
  const img = new Image();
  img.onload = () => onReady(ctx.createPattern(img, "repeat"));
  img.src = src;
}
loadTexturePattern("assets/textures/platform-texture.svg", (pattern) => {
  platformTexturePattern = pattern;
});
loadTexturePattern("assets/textures/hazard-texture.svg", (pattern) => {
  hazardTexturePattern = pattern;
});
loadTexturePattern("assets/textures/ghost-texture.svg", (pattern) => {
  ghostTexturePattern = pattern;
});
[1, 2, 3].forEach((stage) => {
  loadTexturePattern(`assets/textures/melt-texture-${stage}.svg`, (pattern) => {
    meltTexturePatternStages[stage - 1] = pattern;
  });
});
// The ordinary-checkpoint beacon (see drawCheckpoints()) — a discrete
// rotating rune icon drawn with drawImage(), the same treatment the
// level-finish Starshade logo already gets, rather than a tiled pattern.
// Idle and claimed are two entirely separate pieces of art (not one image
// recolored with a source-atop tint) — checkpoint-beacon-claimed.svg is a
// "bloomed open" redesign (a radiant 8-point star core instead of the
// idle beacon's closed diamond, a lit glass mid-ring instead of a bare
// outline), so claiming a checkpoint changes what it *is*, not just what
// color it is.
const checkpointBeaconImage = getSkinImage("assets/textures/checkpoint-beacon.svg");
const checkpointBeaconClaimedImage = getSkinImage("assets/textures/checkpoint-beacon-claimed.svg");

// -------------------------------------------------------------
// BACKGROUND — layered parallax sky, blending into deep cosmos
// -------------------------------------------------------------
// A few small math helpers used only by the background — kept local to
// this section rather than pulled in from a utility library that doesn't
// exist in this no-build-step project.
function lerp(a, b, t) {
  return a + (b - a) * t;
}

function smoothstep(edge0, edge1, x) {
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

function lerpColor(c1, c2, t) {
  return [
    Math.round(lerp(c1[0], c2[0], t)),
    Math.round(lerp(c1[1], c2[1], t)),
    Math.round(lerp(c1[2], c2[2], t)),
  ];
}

// Deterministic pseudo-random in [0, 1) from integer cell coordinates plus
// a salt (so several independent "random" values can be drawn per cell —
// position, size, phase — without needing to store anything). The same
// cell always produces the same stars/clouds, so scrolling away and back
// never makes them jump or re-roll; and since nothing is stored, a level's
// backdrop can cover arbitrarily large x/y ranges (see the vertical camera
// work in docs/gameplay.md) for zero memory cost.
function hash01(ix, iy, salt) {
  let h = (ix * 374761393) ^ (iy * 668265263) ^ (salt * 2147483647);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967296;
}

// Each background layer scrolls at its own fraction of the real camera
// movement ("parallax") — smaller fractions read as farther away, since
// distant things appear to move less as you travel. Sizes are cell
// side-lengths in world px; layers are deliberately sparse-per-cell (a
// `hash01(...) > threshold` skip) rather than one-per-cell, so density
// varies without needing a second pass.
const STAR_CELL = 260;
const STAR_PARALLAX = 0.08;
const STARS_PER_CELL = 3;

const CLOUD_CELL = 480;
const CLOUD_PARALLAX = 0.2;

const PLANET_CELL = 1800;
const PLANET_PARALLAX = 0.03;

// Iterates every cell of `cellSize` overlapping the current viewport at
// the given parallax fraction, handing back both the cell indices (for
// hashing) and the screen-space camera offset to draw against.
function forEachVisibleCell(cellSize, parallax, fn) {
  const camX = cameraOffsetX * parallax;
  const camY = cameraOffsetY * parallax;
  const cx0 = Math.floor(camX / cellSize) - 1;
  const cx1 = Math.floor((camX + viewportWidth) / cellSize) + 1;
  const cy0 = Math.floor(camY / cellSize) - 1;
  const cy1 = Math.floor((camY + viewportHeight) / cellSize) + 1;
  for (let cx = cx0; cx <= cx1; cx++) {
    for (let cy = cy0; cy <= cy1; cy++) {
      fn(cx, cy, camX, camY);
    }
  }
}

// A chunky four-point cartoon sparkle (a pinched diamond, not a pointy
// 5-star) for the brightest handful of stars — plain circles alone read
// as a realistic photo starfield; mixing in a few of these per screen is
// what actually sells "cartoon sky" at a glance. Cheap: one filled path
// plus a matching shadowBlur glow, no gradient.
function drawSparkleStar(x, y, r, alpha) {
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.translate(x, y);
  ctx.fillStyle = "#fff8e6";
  ctx.shadowColor = "rgba(255, 244, 214, 0.95)";
  ctx.shadowBlur = r * 1.6;
  ctx.beginPath();
  ctx.moveTo(0, -r);
  ctx.quadraticCurveTo(r * 0.16, -r * 0.16, r, 0);
  ctx.quadraticCurveTo(r * 0.16, r * 0.16, 0, r);
  ctx.quadraticCurveTo(-r * 0.16, r * 0.16, -r, 0);
  ctx.quadraticCurveTo(-r * 0.16, -r * 0.16, 0, -r);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

// Farthest layer: a starfield that grows richer as the backdrop climbs
// toward deep cosmos — a dim but real baseline is visible from level 1
// onward (STAR_BASE_ALPHA) rather than a completely flat, empty sky at
// the very start of the game; by level ~17 (see SKY_PROGRESS_LEVEL_COUNT)
// it's ramped up to full brightness. Mostly plain dots (cheap, and there
// are a lot of them), with roughly one in eight promoted to a chunky
// drawSparkleStar() glint instead — see above.
const STAR_BASE_ALPHA = 0.3;
function drawStarLayer(forceAlpha, denseVariant) {
  const alpha =
    forceAlpha != null
      ? forceAlpha
      : STAR_BASE_ALPHA + (1 - STAR_BASE_ALPHA) * smoothstep(0.12, 0.65, sceneProgress);
  if (alpha <= 0.01) return;
  ctx.save();
  ctx.fillStyle = "#ffffff";
  const now = Date.now();
  // The second neon-only pass uses a different cell size/hash salt (not
  // just redrawing the same cells) so it reads as a genuinely deeper field
  // of smaller, dimmer background stars rather than the same dots twice.
  const cellSize = denseVariant ? STAR_CELL * 0.6 : STAR_CELL;
  const salt = denseVariant ? 200 : 0;
  forEachVisibleCell(cellSize, STAR_PARALLAX, (cx, cy, camX, camY) => {
    for (let i = 0; i < STARS_PER_CELL; i++) {
      const rx = hash01(cx, cy, salt + i * 5 + 1);
      // Raised to a power > 1 skews the result toward 0 — stars cluster
      // toward the top of each cell rather than spreading evenly, so the
      // sky overall reads as "stars up top" instead of uniformly speckled
      // (there's no single, camera-independent "top of the level" once
      // the view can scroll vertically — see drawCloudLayer()'s matching
      // bottom-bias for the same reasoning from the other direction).
      const ry = Math.pow(hash01(cx, cy, salt + i * 5 + 2), 1.8);
      const rsize = hash01(cx, cy, salt + i * 5 + 3);
      const rphase = hash01(cx, cy, salt + i * 5 + 4);
      const rsparkle = hash01(cx, cy, salt + i * 5 + 5);
      const screenX = cx * cellSize + rx * cellSize - camX;
      const screenY = cy * cellSize + ry * cellSize - camY;
      const size = (denseVariant ? 0.4 : 0.6) + rsize * (denseVariant ? 1 : 1.6);
      const twinkle = 0.55 + 0.45 * Math.sin(now / 550 + rphase * Math.PI * 2);
      const a = alpha * twinkle;
      if (!denseVariant && rsparkle > 0.87) {
        drawSparkleStar(screenX, screenY, size * 2.8, a);
      } else {
        ctx.globalAlpha = a;
        ctx.beginPath();
        ctx.arc(screenX, screenY, size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  });
  ctx.restore();
}

// A flat-shaded "cumulus" nebula puff — a small cluster of overlapping
// circles unioned into one silhouette (one fill() over several arcs on
// the same path, rather than a separate shape per lobe), a single flat
// base color plus one offset highlight patch for cheap two-tone shading,
// and a soft same-hue glow behind it (shadowBlur). Deliberately has no
// hard outline stroke, unlike drawCartoonPlanet() below — a soft-edged
// gas cloud reads as a genuinely different kind of background object than
// a solid outlined "sticker" planet, rather than the two layers blurring
// into "a bunch of circles." Replaces the old soft radial-gradient blob,
// which read as a blurry smudge rather than a distinct illustrated shape.
function drawNebulaPuff(x, y, r, hue, sat, light, alpha) {
  const base = `hsl(${hue}, ${sat}%, ${light}%)`;
  const glow = `hsla(${hue}, ${Math.min(100, sat + 10)}%, ${Math.min(70, light + 15)}%, 0.5)`;
  const lobes = [
    [0, 0, r],
    [-r * 0.58, r * 0.24, r * 0.52],
    [r * 0.56, r * 0.2, r * 0.48],
    [-r * 0.2, -r * 0.4, r * 0.42],
    [r * 0.3, -r * 0.34, r * 0.4],
  ];
  ctx.save();
  ctx.translate(x, y);
  ctx.globalAlpha = alpha;
  ctx.shadowColor = glow;
  ctx.shadowBlur = r * 0.65;
  ctx.fillStyle = base;
  ctx.beginPath();
  lobes.forEach(([lx, ly, lr]) => {
    ctx.moveTo(lx + lr, ly);
    ctx.arc(lx, ly, lr, 0, Math.PI * 2);
  });
  ctx.fill();
  ctx.shadowBlur = 0;
  // Flat highlight patch, offset toward upper-left — a second flat tone
  // instead of a gradient is what makes this read as "illustrated" rather
  // than "softly lit," without needing an outline to define the shape.
  ctx.globalAlpha = alpha * 0.45;
  ctx.fillStyle = `hsl(${hue}, ${Math.min(100, sat + 15)}%, ${Math.min(88, light + 28)}%)`;
  ctx.beginPath();
  ctx.arc(-r * 0.3, -r * 0.36, r * 0.36, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

// Mid layer: sparse flat-shaded nebula puffs (see drawNebulaPuff() above).
// HSL rather than a two-color RGB lerp, so hue can drift across a wide,
// genuinely nebula-like band (blue/violet/magenta/pink) with real
// per-cloud variation instead of everything sharing one or two repeating
// tones — gradually warming from cooler blue-violets toward magenta/pink
// as the backdrop climbs toward deep cosmos. Kept deliberately restrained
// (sparser, smaller, dimmer than an earlier pass at this) — the backdrop
// is set dressing, and the actual level (platforms/hazards/checkpoints)
// needs to stay the thing your eye goes to first.
function drawCloudLayer() {
  const baseAlpha = lerp(0.5, 0.44, sceneProgress);
  const hueBase = lerp(230, 300, sceneProgress);
  forEachVisibleCell(CLOUD_CELL, CLOUD_PARALLAX, (cx, cy, camX, camY) => {
    if (hash01(cx, cy, 90) > 0.4) return; // sparse — most cells get none at all
    const rx = hash01(cx, cy, 1);
    // Skewed toward 1 (the bottom of the cell) — the mirror image of the
    // star layer's top bias above, so clouds read as "low in the sky"
    // without needing a single fixed world-space "bottom" to anchor to.
    const ry = 1 - Math.pow(hash01(cx, cy, 2), 1.8);
    const rw = hash01(cx, cy, 3);
    // A wide hue spread around the current base — real nebula photos are
    // patches of several distinct colors next to each other, not one
    // uniform tint.
    const hueJitter = (hash01(cx, cy, 6) - 0.5) * 140;
    const hue = Math.round(((hueBase + hueJitter) % 360 + 360) % 360);
    const sat = Math.round(50 + hash01(cx, cy, 7) * 28);
    const light = Math.round(34 + hash01(cx, cy, 8) * 14);
    const screenX = cx * CLOUD_CELL + rx * CLOUD_CELL - camX;
    const screenY = cy * CLOUD_CELL + ry * CLOUD_CELL - camY;
    const w = 40 + rw * 36;
    drawNebulaPuff(screenX, screenY, w, hue, sat, light, baseAlpha);
  });
}

// A flat two-tone cartoon planet — a lit base color, a hard-edged shadow
// crescent (clipped to the sphere, not a soft gradient), a bold rim
// stroke, and a small glossy highlight dot for a "sticker" pop. About a
// third get a simple ellipse ring behind them for extra silhouette
// variety. Replaces the old single soft radial-gradient glow ball, which
// had no real light/shadow shape of its own.
function drawCartoonPlanet(x, y, r, hue, alpha, hasRing) {
  ctx.save();
  ctx.translate(x, y);
  ctx.globalAlpha = alpha;

  if (hasRing) {
    ctx.save();
    ctx.scale(1, 0.32);
    ctx.strokeStyle = `hsla(${hue}, 50%, 80%, 0.5)`;
    ctx.lineWidth = r * 0.16;
    ctx.beginPath();
    ctx.arc(0, 0, r * 1.55, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  ctx.shadowColor = `hsla(${hue}, 70%, 55%, 0.4)`;
  ctx.shadowBlur = r * 0.35;
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fillStyle = `hsl(${hue}, 70%, 68%)`;
  ctx.fill();
  ctx.shadowBlur = 0;

  // Hard-edged shadow crescent — an offset circle clipped to the sphere,
  // not a gradient blur, so the terminator reads as one clean flat shape.
  ctx.save();
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.clip();
  ctx.beginPath();
  ctx.arc(r * 0.55, r * 0.3, r * 1.05, 0, Math.PI * 2);
  ctx.fillStyle = `hsl(${hue}, 55%, 32%)`;
  ctx.fill();
  ctx.restore();

  ctx.lineWidth = Math.max(1.5, r * 0.06);
  ctx.strokeStyle = `hsl(${hue}, 60%, 20%)`;
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
  ctx.beginPath();
  ctx.arc(-r * 0.35, -r * 0.35, r * 0.12, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

// Nearest (but still very slow — these read as huge and distant) layer:
// sparse cartoon planets, only appearing in the back half of the game as
// a "you've come a long way" payoff, each with a random pastel-cosmic hue
// so they don't all look identical. Kept rare, modestly sized, and
// dimmer than an earlier pass at this — a handful of huge, saturated
// planets competed with the actual level for attention, which is exactly
// backwards for a background layer.
function drawPlanetLayer() {
  // Was gated to only the back half of a 25-level game (0.35-0.8); with
  // the level count now 100, that pushed the first planet to roughly
  // level 36 — moved earlier so the sky has some depth well before then.
  const alpha = smoothstep(0.05, 0.55, sceneProgress);
  if (alpha <= 0.01) return;
  forEachVisibleCell(PLANET_CELL, PLANET_PARALLAX, (cx, cy, camX, camY) => {
    if (hash01(cx, cy, 55) > 0.18) return; // rare — most cells have no planet at all
    const rx = hash01(cx, cy, 1);
    const ry = hash01(cx, cy, 2);
    const rsize = hash01(cx, cy, 3);
    const rhue = hash01(cx, cy, 4);
    const rring = hash01(cx, cy, 10);
    const screenX = cx * PLANET_CELL + rx * PLANET_CELL - camX;
    const screenY = cy * PLANET_CELL + ry * PLANET_CELL - camY;
    const r = 18 + rsize * 30;
    const hue = Math.round(250 + rhue * 90);
    drawCartoonPlanet(screenX, screenY, r, hue, alpha * 0.7, rring > 0.65);
  });
}

// Sky gradient colors at the two ends of the game's progress — a bolder,
// more saturated jewel-tone magenta-violet band through the middle
// (previously quite muted/muddy, maxing out around rgb(46,16,74)) against
// deep near-black indigo top/bottom, closer to a flat cartoon-poster sky
// than a soft realistic gradient — see the full background rewrite below
// (drawStarLayer()/drawCloudLayer()/drawPlanetLayer()) for the matching
// flat-shaded, outlined art style. Still fades toward near-black cosmos
// by level 25, close to the #050012 used on every other page's background.
const SKY_TOP_LOW = [10, 8, 26];
const SKY_TOP_HIGH = [3, 2, 9];
const SKY_MID_LOW = [92, 28, 122];
const SKY_MID_HIGH = [54, 14, 84];
const SKY_BOTTOM_LOW = [16, 10, 34];
const SKY_BOTTOM_HIGH = [4, 2, 10];

// Draws the full backdrop for this frame: the sky gradient (screen-space —
// a fixed backdrop, not part of the scrolling world) followed by the
// three parallax layers above, back-to-front. Fully opaque, so this
// doubles as the frame clear that used to be a plain ctx.clearRect() —
// see draw().
// Neon levels (`window.levelTheme = "neon"`) skip the nebula/planet/cloud
// backdrop entirely — pure black, "empty night sky" territory — so the
// only color anywhere on screen comes from the level's own glowing
// platforms. drawStarLayer() is reused rather than duplicated, forced to
// full brightness (its normal alpha ramps in with sceneProgress, which a
// neon level shouldn't depend on) and drawn twice at two densities for a
// deeper, more crowded sky than the ordinary backdrop ever shows.
function drawNeonBackground() {
  ctx.fillStyle = "#020103";
  ctx.fillRect(0, 0, viewportWidth, viewportHeight);
  drawStarLayer(1);
  drawStarLayer(0.55, true);
}

function drawBackground() {
  if (currentLevelTheme === "neon") {
    drawNeonBackground();
    return;
  }
  const top = lerpColor(SKY_TOP_LOW, SKY_TOP_HIGH, sceneProgress);
  const mid = lerpColor(SKY_MID_LOW, SKY_MID_HIGH, sceneProgress);
  const bottom = lerpColor(SKY_BOTTOM_LOW, SKY_BOTTOM_HIGH, sceneProgress);
  const grad = ctx.createLinearGradient(0, 0, 0, viewportHeight);
  grad.addColorStop(0, `rgb(${top[0]}, ${top[1]}, ${top[2]})`);
  grad.addColorStop(0.55, `rgb(${mid[0]}, ${mid[1]}, ${mid[2]})`);
  grad.addColorStop(1, `rgb(${bottom[0]}, ${bottom[1]}, ${bottom[2]})`);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, viewportWidth, viewportHeight);

  // A soft glowing "horizon" band low in the frame — screen-space, not
  // parallaxed with the world, so it stays put as a fixed lighting cue
  // rather than a world object — for an illustrated-poster pop instead of
  // a flat, uniformly dark lower sky.
  const horizonGlow = ctx.createRadialGradient(
    viewportWidth / 2,
    viewportHeight * 0.85,
    0,
    viewportWidth / 2,
    viewportHeight * 0.85,
    viewportWidth * 0.75
  );
  horizonGlow.addColorStop(0, `rgba(${mid[0]}, ${mid[1]}, ${mid[2]}, 0.26)`);
  horizonGlow.addColorStop(1, `rgba(${mid[0]}, ${mid[1]}, ${mid[2]}, 0)`);
  ctx.fillStyle = horizonGlow;
  ctx.fillRect(0, 0, viewportWidth, viewportHeight);

  drawPlanetLayer();
  drawStarLayer();
  drawCloudLayer();
}

// -------------------------------------------------------------
// DRAWING
// -------------------------------------------------------------
// Draws the death animation in place of the normal player shape — see
// triggerDeath()/updateDeathAnimation()'s comments. Splits the player's
// own 25x25 hitbox into four quadrant-sized chunks (rather than a ring of
// many small uniform shards, which read as a confetti/firework burst
// instead of the character itself coming apart) and flies each one off in
// its own quadrant's diagonal direction, independently spinning — reads
// as "you broke into pieces," not a decorative particle effect, and at
// this scale (a quarter of the actual hitbox each) still reads
// recognizably as fragments of a small square-ish body regardless of the
// equipped skin's real shape (a circle's roll, a triangle's tumble, an
// image sprite would all need real per-shape shatter work to do properly
// in place). Colors come from the equipped skin's fill/stroke, same
// "looks at least a little different per skin without a wholly separate
// effect per one" reasoning the portal-suck animation already uses.
function drawDeathAnimation() {
  const skin = StarshadeEconomy.getEquippedSkin();
  const t = deathProgress;
  const alpha = 1 - t;
  if (alpha <= 0) return;

  ctx.save();
  ctx.translate(deathAnimX - cameraOffsetX, deathAnimY - cameraOffsetY);
  ctx.globalAlpha = alpha;

  const travel = 8 + t * 26;
  const chunkSize = (player.width / 2) * (1 - t * 0.25); // shrinks only a little — stays chunky, not confetti-small
  const QUADRANTS = [
    { dx: -1, dy: -1, spin: 1 },
    { dx: 1, dy: -1, spin: -1 },
    { dx: -1, dy: 1, spin: -1 },
    { dx: 1, dy: 1, spin: 1 },
  ];
  QUADRANTS.forEach((q, i) => {
    ctx.save();
    // A little per-chunk gravity drift (t*t, so it accelerates like the
    // player's own fall does) on top of the outward diagonal travel, and
    // a slightly different spin rate per chunk so they don't all rotate
    // in lockstep.
    ctx.translate(q.dx * travel, q.dy * travel + t * t * 16);
    ctx.rotate(q.spin * deathSpinAngle * (0.8 + i * 0.1));
    ctx.fillStyle = skin.fill || "rgba(160,66,211,0.85)";
    ctx.strokeStyle = skin.stroke || "rgba(220,200,255,0.9)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.rect(-chunkSize / 2, -chunkSize / 2, chunkSize, chunkSize);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  });

  // A quick red flash right at the moment of impact, fading much faster
  // than the chunks themselves — distinct "damage" beat at the very start
  // of the animation rather than lingering the whole way through it.
  const flashAlpha = Math.max(0, 1 - t * 3) * 0.5;
  if (flashAlpha > 0) {
    ctx.globalAlpha = flashAlpha;
    ctx.fillStyle = "rgba(255,60,60,0.9)";
    ctx.beginPath();
    ctx.arc(0, 0, 16, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

function drawPlayer() {
  if (isDying) {
    drawDeathAnimation();
    return;
  }
  const skin = StarshadeEconomy.getEquippedSkin();
  const halfW = player.width / 2;
  const halfH = player.height / 2;
  const lineWidth = 3;

  ctx.save();
  ctx.translate(player.x - cameraOffsetX, player.y - cameraOffsetY);
  // The portal-suck spin (see updatePortalSuck()) applies before the
  // per-shape rotations below (circle roll, triangle tumble) so it
  // compounds with whichever one the equipped skin already does, rather
  // than needing a separate spin effect written per shape.
  if (isPortalSucking) ctx.rotate(portalSpinAngle);
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
    // The default miter join spikes a stroked corner out past its actual
    // path vertex — harmless at the square's 90° corners (the spike
    // exactly cancels the inset above) but at the triangle's much more
    // acute corners the same miter math spikes several px past the
    // vertex, poking outside the collision box. A round join's max
    // protrusion is a fixed lineWidth/2 in any direction regardless of
    // the angle, which is exactly what the inset above was computed to
    // leave room for.
    ctx.lineJoin = "round";
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

function drawInsetRect(x, y, width, height, fillStyle, strokeStyle, pattern, glow) {
  ctx.save();
  ctx.translate(x - cameraOffsetX, y - cameraOffsetY);
  // Neon-themed levels (see drawBackground()) pass a glow color here
  // instead of a texture pattern — a real shadowBlur reads as "lit from
  // within" against a pure-black backdrop in a way a flat fill never could.
  if (glow) {
    ctx.shadowColor = glow;
    ctx.shadowBlur = 16;
  }
  ctx.fillStyle = fillStyle;
  ctx.strokeStyle = strokeStyle;
  ctx.lineWidth = 3;
  ctx.fillRect(0, 0, width, height);
  // Layered on top of the flat fill (not instead of it) at reduced
  // opacity — the pattern alone is too faint/monochrome to read as
  // "the surface color," so the base fillStyle is what actually
  // establishes that, and the texture just adds detail on top of it.
  if (pattern) {
    ctx.save();
    ctx.globalAlpha = 0.55;
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, width, height);
    ctx.restore();
  }
  ctx.strokeRect(
    ctx.lineWidth / 2,
    ctx.lineWidth / 2,
    width - ctx.lineWidth,
    height - ctx.lineWidth
  );
  ctx.restore();
}

// Violet-indigo rather than the old teal-blue — matches the purple/blue
// family every menu, button, and glow in the game already uses (see
// styles.css/game.css's #4d3f91/#8a5cff), instead of platforms reading as
// a completely different, unrelated color family from everything else on
// screen (including the nebula background behind them).
function drawPlatforms() {
  const neon = currentLevelTheme === "neon";
  platforms.forEach((platform) => {
    if (platform.ghost || platform.melt || platform.bounce || platform.conveyor) return; // drawn separately, see below
    if (neon) {
      drawInsetRect(
        platformX(platform),
        platformY(platform),
        platform.width,
        platform.height,
        "rgba(10, 12, 30, 0.85)",
        "rgba(80, 230, 255, 0.95)",
        null,
        "rgba(80, 230, 255, 0.9)"
      );
    } else {
      drawInsetRect(
        platformX(platform),
        platformY(platform),
        platform.width,
        platform.height,
        "rgba(74, 58, 150, 0.7)",
        "rgba(138, 92, 255, 0.85)",
        platformTexturePattern
      );
    }
  });
}

// Bounce pads (`bounce: true`) — a bright cyan-green so they read as
// distinctly "springy" rather than another ordinary platform, with a
// chevron pointing up (the direction they launch you) rather than the
// plating texture ordinary platforms use.
function drawBouncePlatforms() {
  const neon = currentLevelTheme === "neon";
  platforms.forEach((platform) => {
    if (!platform.bounce) return;
    const px = platformX(platform);
    const py = platformY(platform);
    drawInsetRect(
      px,
      py,
      platform.width,
      platform.height,
      neon ? "rgba(10, 30, 26, 0.85)" : "rgba(30, 130, 110, 0.75)",
      neon ? "rgba(80, 255, 210, 0.95)" : "rgba(90, 255, 200, 0.9)",
      null,
      neon ? "rgba(80, 255, 210, 0.9)" : undefined
    );
    ctx.save();
    ctx.translate(px - cameraOffsetX, py - cameraOffsetY);
    ctx.strokeStyle = "rgba(220, 255, 245, 0.9)";
    ctx.lineWidth = 2.5;
    const cx = platform.width / 2;
    const chevronW = Math.min(18, platform.width * 0.3);
    ctx.beginPath();
    ctx.moveTo(cx - chevronW, platform.height * 0.7);
    ctx.lineTo(cx, platform.height * 0.3);
    ctx.lineTo(cx + chevronW, platform.height * 0.7);
    ctx.stroke();
    ctx.restore();
  });
}

// Conveyor platforms (`conveyor: true`, `conveyorSpeed`) — amber with a
// scrolling arrow-stripe pattern in the direction they push, so which way
// a conveyor moves you is readable at a glance rather than something you
// discover by standing on it.
function drawConveyorPlatforms() {
  const neon = currentLevelTheme === "neon";
  const now = Date.now();
  platforms.forEach((platform) => {
    if (!platform.conveyor) return;
    const px = platformX(platform);
    const py = platformY(platform);
    drawInsetRect(
      px,
      py,
      platform.width,
      platform.height,
      neon ? "rgba(30, 22, 8, 0.85)" : "rgba(150, 100, 20, 0.75)",
      neon ? "rgba(255, 200, 60, 0.95)" : "rgba(255, 190, 60, 0.9)",
      null,
      neon ? "rgba(255, 200, 60, 0.9)" : undefined
    );
    ctx.save();
    ctx.translate(px - cameraOffsetX, py - cameraOffsetY);
    ctx.beginPath();
    ctx.rect(0, 0, platform.width, platform.height);
    ctx.clip();
    const dir = platform.conveyorSpeed >= 0 ? 1 : -1;
    const scroll = ((now / 12) * dir) % 24;
    ctx.strokeStyle = "rgba(255, 235, 200, 0.75)";
    ctx.lineWidth = 3;
    for (let sx = -24 + (scroll % 24); sx < platform.width + 24; sx += 24) {
      ctx.beginPath();
      ctx.moveTo(sx, platform.height);
      ctx.lineTo(sx + platform.height * dir, 0);
      ctx.stroke();
    }
    ctx.restore();
  });
}

// Ghost platforms flicker solid/intangible on a timer (see
// updateGhostPlatforms()) — drawn bright yellow and mostly opaque while
// solid, a faint yellow outline while intangible, with a fast flicker in
// the last few frames of either state so the flip is always telegraphed.
function drawGhostPlatforms() {
  // Scrolls the phase-circuit texture's own pattern space diagonally over
  // time — a real CanvasPattern transform (CanvasPattern.setTransform()),
  // not just a prettier static tile — so solid ghost platforms read as
  // energized/live rather than a flickering-but-otherwise-static surface.
  // One shared pattern object, so this only needs setting once per frame
  // rather than per platform.
  if (ghostTexturePattern && ghostTexturePattern.setTransform) {
    const scroll = (Date.now() / 45) % 36;
    ghostTexturePattern.setTransform(new DOMMatrix().translate(-scroll, scroll));
  }
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
      "rgba(255, 236, 140, 0.95)",
      ghostTexturePattern
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
    // Crack art itself worsens in three visible steps as the countdown
    // runs out (see melt-texture-1/2/3.svg) — not just the existing
    // shake/flicker, so a player glancing at a melt platform mid-crumble
    // sees exactly how far gone it is.
    const stageIndex = urgency > 0.7 ? 2 : urgency > 0.34 ? 1 : 0;

    ctx.save();
    ctx.globalAlpha = alpha;
    drawInsetRect(
      platformX(platform) + shakeX,
      platformY(platform),
      platform.width,
      platform.height,
      `rgba(255, ${Math.round(190 - urgency * 110)}, 30, 0.8)`,
      "rgba(255, 150, 40, 0.9)",
      meltTexturePatternStages[stageIndex]
    );
    ctx.restore();
  });
}

// Crimson-magenta rather than the old plain red — still reads instantly
// as "danger" (the hazard-stripe texture does most of that work now
// anyway), but sits in the same warm-toward-violet family as the nebula
// background instead of clashing as a completely unrelated hue.
function drawDeadlyPlatforms() {
  const neon = currentLevelTheme === "neon";
  deadlyPlatforms.forEach((platform) => {
    if (neon) {
      drawInsetRect(
        platformX(platform),
        platformY(platform),
        platform.width,
        platform.height,
        "rgba(30, 4, 16, 0.85)",
        "rgba(255, 45, 110, 0.95)",
        null,
        "rgba(255, 45, 110, 0.9)"
      );
    } else {
      drawInsetRect(
        platformX(platform),
        platformY(platform),
        platform.width,
        platform.height,
        "rgba(168, 12, 84, 0.7)",
        "rgba(255, 60, 130, 0.85)",
        hazardTexturePattern
      );
    }
  });
}

// A crystalline gradient instead of a flat fill — cheap (a canvas
// gradient, not an image) and, unlike a tiled texture, always crisp
// regardless of a spike's actual size, which varies per level.
function drawSpikes() {
  const neon = currentLevelTheme === "neon";
  spikes.forEach((spike) => {
    ctx.save();
    ctx.translate(spike.x - cameraOffsetX, spike.y - cameraOffsetY);
    const grad = ctx.createLinearGradient(0, -spike.size, 0, 0);
    if (neon) {
      grad.addColorStop(0, "rgba(255, 90, 170, 0.95)");
      grad.addColorStop(1, "rgba(120, 5, 60, 0.85)");
      ctx.shadowColor = "rgba(255, 60, 150, 0.9)";
      ctx.shadowBlur = 12;
    } else {
      grad.addColorStop(0, "rgba(255, 140, 190, 0.85)");
      grad.addColorStop(1, "rgba(150, 10, 70, 0.75)");
    }
    ctx.fillStyle = grad;
    ctx.strokeStyle = "rgba(255, 90, 160, 0.85)";
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

// Slingshot pads, plus the pull-back band + dashed trajectory preview
// while actively aiming one (see slingshotAim/playerOnSlingshot and the
// drag listeners near tryJump()). All drawn in world space (camera-offset
// translated), same as every other level entity here — the preview is a
// cheap forward simulation using the same `gravity` constant the real
// physics loop uses, not a separate physics engine.
function drawSlingshots() {
  (window.slingshots || []).forEach((s) => {
    ctx.save();
    ctx.translate(s.x - cameraOffsetX, s.y - cameraOffsetY);
    ctx.fillStyle = "rgba(255, 190, 60, 0.5)";
    ctx.strokeStyle = "rgba(255, 224, 140, 0.9)";
    ctx.lineWidth = 3;
    ctx.fillRect(0, 0, s.width, s.height);
    ctx.strokeRect(1.5, 1.5, Math.max(0, s.width - 3), Math.max(0, s.height - 3));
    ctx.restore();
  });

  if (!slingshotAim || !playerOnSlingshot) return;

  const dx = slingshotAim.dragX - slingshotAim.dragStartX;
  const dy = slingshotAim.dragY - slingshotAim.dragStartY;
  const dragDistance = Math.hypot(dx, dy);
  if (dragDistance <= 2) return;

  const maxPower = playerOnSlingshot.maxPower || 22;
  const power = Math.min(maxPower, dragDistance * SLINGSHOT_POWER_SCALE);
  const originX = player.x - cameraOffsetX;
  const originY = player.y - cameraOffsetY;

  ctx.save();
  ctx.strokeStyle = "rgba(255, 224, 140, 0.85)";
  ctx.lineWidth = 4;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(originX, originY);
  ctx.lineTo(originX + dx, originY + dy);
  ctx.stroke();
  ctx.restore();

  ctx.save();
  ctx.setLineDash([6, 8]);
  ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  let px = originX;
  let py = originY;
  let pvx = (-dx / dragDistance) * power;
  let pvy = (-dy / dragDistance) * power;
  ctx.moveTo(px, py);
  for (let i = 0; i < 24; i++) {
    pvy += gravity;
    px += pvx;
    py += pvy;
    ctx.lineTo(px, py);
  }
  ctx.stroke();
  ctx.restore();
}

// The finish checkpoint's logo image (see index.html's main-menu logo) —
// cached the same way skin images are (see getSkinImage()) so it's only
// ever loaded once no matter how many levels draw it.
const finishLogoImage = getSkinImage("starshade.png");

// How long the "claim" burst (flash + shockwave rings + an extra
// activation spin, see the non-finish branch of drawCheckpoints() below)
// plays for after a checkpoint is first reached — also now how long the
// shared pop scale-up lasts, so the beacon's own punch and the burst
// effects settle together instead of the pop finishing early and leaving
// the rings animating on a beacon that's already back to rest size.
const CLAIM_BURST_MS = 550;

function drawCheckpoints() {
  const now = Date.now();
  checkpoints.forEach((checkpoint, index) => {
    const isFinish = index === checkpoints.length - 1;

    // Idle glow pulse on unreached checkpoints, a bigger "pop" the moment
    // a checkpoint is reached.
    const pulse = checkpoint.reached
      ? 0
      : Math.sin(now / 300 + checkpoint.x) * 2;
    const timeSinceReached = checkpoint.reached
      ? now - (checkpoint.reachedAt || now)
      : 0;
    const pop =
      checkpoint.reached && timeSinceReached < CLAIM_BURST_MS
        ? (1 - timeSinceReached / CLAIM_BURST_MS) * 14
        : 0;

    ctx.save();
    ctx.translate(checkpoint.x - cameraOffsetX, checkpoint.y - cameraOffsetY);

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
      // A spinning rune beacon (see checkpoint-beacon.svg) instead of a
      // plain filled circle — same drawImage()-plus-ctx.rotate() treatment
      // as the level-finish Starshade logo above, just smaller and slower,
      // so ordinary checkpoints read as real objects rather than dots.
      const r = 15 + pulse + pop;
      // Claim progress, 0 (just reached) -> 1 (settled) — drives the extra
      // activation spin below and the flash/shockwave burst further down.
      // Pinned at 1 for an unreached checkpoint so neither ever fires.
      const claimT = checkpoint.reached
        ? Math.min(1, timeSinceReached / CLAIM_BURST_MS)
        : 1;
      // A fast decaying flourish spin layered on top of the normal slow
      // ambient rotation right at the instant of claim — eases out to
      // exactly 0 extra by the time claimT reaches 1, so it hands off to
      // the ambient spin without a visible seam.
      const activationSpin = (1 - claimT) * (1 - claimT) * Math.PI * 2.4;
      // Claimed spins counter to idle, and noticeably faster — its own
      // art (checkpoint-beacon-claimed.svg) reads as an actively
      // energized device, not just a recolored idle beacon, so it should
      // move differently too, not just look different while holding still.
      const ambientRotation = checkpoint.reached ? -now / 2200 : now / 5000;
      const rotation = ambientRotation + checkpoint.x + activationSpin; // offset by x so checkpoints don't all spin in lockstep
      // A slow continuous "breathing" pulse on the claimed beacon's own
      // size — independent of the one-shot claim pop above — so it keeps
      // reading as alive long after that burst finishes, rather than
      // settling into the exact same kind of static (if spinning) art the
      // idle beacon already has.
      const claimedBreath = checkpoint.reached ? 1 + Math.sin(now / 480 + checkpoint.x) * 0.06 : 1;
      const drawR = r * claimedBreath;
      const beaconImage = checkpoint.reached ? checkpointBeaconClaimedImage : checkpointBeaconImage;
      const glowColor = checkpoint.reached ? "rgba(80,255,120,0.85)" : "rgba(255,205,90,0.8)";

      ctx.save();
      const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, r * 1.4);
      glow.addColorStop(0, glowColor);
      glow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(0, 0, r * 1.4, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      if (beaconImage.complete && beaconImage.naturalWidth > 0) {
        ctx.save();
        ctx.rotate(rotation);
        ctx.drawImage(beaconImage, -drawR, -drawR, drawR * 2, drawR * 2);
        ctx.restore();
      } else {
        // Fallback for the one frame or two before the image finishes
        // loading.
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.fillStyle = glowColor;
        ctx.fill();
      }

      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 2);
      ctx.strokeStyle = checkpoint.reached ? "#32cd32" : "rgba(255, 225, 160, 0.7)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // The "claim" burst — plays once, right when a checkpoint is first
      // reached (see updatePlayer()'s checkpoint-collision block, which
      // sets reachedAt), instead of the beacon just snapping straight to
      // its green tint: an additive white flash at the instant of claim,
      // then two staggered shockwave rings racing outward and fading, on
      // top of the bigger pop and the activation spin above — reads as a
      // real release of energy, not a color change.
      if (claimT < 1) {
        const flashT = Math.min(1, timeSinceReached / 120);
        if (flashT < 1) {
          ctx.save();
          ctx.globalCompositeOperation = "lighter";
          ctx.globalAlpha = 1 - flashT;
          const flash = ctx.createRadialGradient(0, 0, 0, 0, 0, r * 2.4);
          flash.addColorStop(0, "rgba(255,255,255,0.95)");
          flash.addColorStop(0.6, "rgba(210,255,220,0.5)");
          flash.addColorStop(1, "rgba(255,255,255,0)");
          ctx.fillStyle = flash;
          ctx.beginPath();
          ctx.arc(0, 0, r * 2.4, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }

        [0, 0.18].forEach((delay) => {
          const ringT = (claimT - delay) / (1 - delay);
          if (ringT <= 0 || ringT >= 1) return;
          const eased = 1 - Math.pow(1 - ringT, 2); // fast start, gentle finish
          ctx.save();
          ctx.globalAlpha = (1 - ringT) * 0.85;
          ctx.strokeStyle = "rgba(150,255,170,0.9)";
          ctx.lineWidth = 3 * (1 - ringT) + 0.5;
          ctx.beginPath();
          ctx.arc(0, 0, r + eased * r * 3, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        });
      }
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
    ctx.fillText(levelText, viewportWidth / 2, viewportHeight / 2);
    ctx.restore();
  }
}

// -------------------------------------------------------------
// FADE-TO-BLACK / FADE-BACK-IN OVERLAY
// -------------------------------------------------------------
function drawFadeOverlay(dtScale) {
  if (!isFading) return;

  if (fadeDirection === 1) {
    fadeOpacity += 0.02 * dtScale;
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
    fadeOpacity -= 0.02 * dtScale;
    if (fadeOpacity <= 0) {
      fadeOpacity = 0;
      isFading = false;
    }
  }

  ctx.fillStyle = `rgba(0, 0, 0, ${fadeOpacity})`;
  ctx.fillRect(0, 0, viewportWidth, viewportHeight);
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
// N ticks").
//
// `levelFrameCount` advances by `dtScale` each real frame rather than a
// flat 1 — dtScale is "how many 60fps-equivalent ticks this frame
// represents" (see gameLoop()), so this clock (and everything driven by
// it: platform motion, ghost-platform cycles) runs at the same real-world
// speed regardless of the display's refresh rate or how consistently the
// browser is delivering frames.
let levelFrameCount = 0;

// Shared by both solid platforms and deadly ones — a deadly platform with
// `moveAxis` set (see the crisscrossing red decoys in the generated
// levels, .claude/gen-levels.js) sweeps back and forth exactly like a
// solid mover, just without ever being safe to land on.
function updateMoverList(list, dtScale) {
  list.forEach((p) => {
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

function updateMovingPlatforms(dtScale) {
  levelFrameCount += dtScale;
  updateMoverList(platforms, dtScale);
  if (typeof deadlyPlatforms !== "undefined") updateMoverList(deadlyPlatforms, dtScale);
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
function resolveAxis(axis, dtScale) {
  const isX = axis === "x";
  const size = isX ? player.width : player.height;
  // player.dx/dy are velocities in px per 60fps-equivalent tick; the
  // actual distance moved this frame is that times however many ticks
  // this frame represents (see gameLoop()'s dtScale).
  const delta = (isX ? player.dx : player.dy) * dtScale;
  const oldPos = isX ? player.x : player.y;
  let newPos = oldPos + delta;

  const oldNear = oldPos - size / 2; // left or top edge before moving
  const oldFar = oldPos + size / 2; // right or bottom edge before moving

  let grounded = false;
  let groundedOn = null;
  let wallHit = false; // isX only — see the sticky ability in updatePlayer()

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

    // Landing forgiveness has to cover at least the platform's own speed
    // this frame, not just a fixed couple of px — a Y-moving platform can
    // move several px/frame at the steepest point of its sine (fast/wide
    // ones in the harder generated levels reach ~4px/frame), and a
    // resting player's own gravity-driven fall (~0.5px/frame) can't keep
    // pace with that on its own. A too-small fixed forgiveness meant the
    // crossing test intermittently missed by a hair right at that point,
    // separating the player for exactly one frame before re-catching them
    // — which reads as `grounded` flickering false/true, retriggering the
    // landing squash + dust burst every time ("landing animation loop").
    // leniencyLevel() (repeated deaths) adds a little more on top, only
    // for landing, never walls/ceilings.
    const landingForgiveness = !isX && delta > 0
      ? Math.abs(platformDelta) + 1.5 + leniencyLevel()
      : 0;

    if (delta > 0) {
      const newFar = newPos + size / 2;
      if (oldFar <= pNearOld + landingForgiveness && newFar > pNear) {
        newPos = pNear - size / 2;
        if (isX) {
          player.dx = 0;
          wallHit = true;
        } else {
          player.dy = 0;
          grounded = true;
          groundedOn = platform;
        }
      }
    } else if (delta < 0) {
      const newNear = newPos - size / 2;
      if (oldNear >= pFarOld && newNear < pFar) {
        newPos = pFar + size / 2;
        if (isX) {
          player.dx = 0;
          wallHit = true;
        } else player.dy = 0;
      }
    }
  });

  if (isX) player.x = newPos;
  else player.y = newPos;
  return { grounded, groundedOn, wallHit };
}

// Animates the "portal suck" (see its state's declaration above) and, once
// it finishes, hands off to the normal fade-to-black/next-level sequence —
// this used to start immediately on touching the final checkpoint;  now
// that runs after this plays out instead.
function updatePortalSuck(dtScale) {
  portalSuckProgress = Math.min(1, portalSuckProgress + dtScale / PORTAL_SUCK_DURATION);
  const t = portalSuckProgress;
  const eased = t * t; // accelerates in, rather than a constant-speed slide
  player.x = lerp(portalStartX, portalTargetX, eased);
  player.y = lerp(portalStartY, portalTargetY, eased);
  // Shrinks to a sliver but never fully to 0 — keeps ctx.scale() away from
  // a degenerate 0x0 transform right at the last frame.
  squashX = 1 - eased * 0.92;
  squashY = 1 - eased * 0.92;
  portalSpinAngle += (0.15 + eased * 0.6) * dtScale; // spins faster the closer it gets

  const skin = StarshadeEconomy.getEquippedSkin();
  spawnConvergingParticles(player.x, player.y, 2, [
    skin.fill || "rgba(160,66,211,0.85)",
    skin.glow || "#fff",
  ]);

  if (portalSuckProgress >= 1) {
    isPortalSucking = false;
    isFading = true;
    fadeOpacity = 0;
    fadeDirection = 1;
    fadeCallback = advanceToNextLevel;
  }
}

function updatePlayer(dtScale) {
  // Fetched once and reused for every ability check below (dash,
  // slippery movement, sticky wall-cling, bouncy landing) — the equipped
  // skin can't change mid-frame, so there's no reason for each check to
  // re-look-it-up.
  const equippedSkin = StarshadeEconomy.getEquippedSkin();

  updateMovingPlatforms(dtScale);
  updateGhostPlatforms();

  // Carry the player with whatever platform they were resting on last
  // frame — proactively, before gravity/collision run this frame, rather
  // than leaving resolveAxis()'s crossing test to "re-discover" the
  // landing every single frame. That worked fine for slow platforms, but
  // a platform moving down faster than the player's own gravity-driven
  // fall that frame can outrun the test entirely: the player's tiny
  // per-frame drop never reaches the platform's much-lower new position,
  // so no collision registers, they free-fall for exactly one frame, and
  // immediately re-land the next — which reads as the landing squash +
  // dust burst retriggering in a loop on any reasonably fast Y-moving
  // platform. Carrying first means the player is already sitting on the
  // platform's current position by the time collision runs, so the
  // (still necessary — see landingForgiveness below) crossing test only
  // has to confirm they're still there, not close a multi-pixel gap.
  if (
    riddenPlatform &&
    riddenPlatform.moveAxis &&
    !(riddenPlatform.ghost && riddenPlatform._solid === false) &&
    !(riddenPlatform.melt && riddenPlatform._melted)
  ) {
    if (riddenPlatform.moveAxis === "x") player.x += riddenPlatform._deltaOffset || 0;
    else player.y += riddenPlatform._deltaOffset || 0;
  }

  // A short burst of extra gravity right around the top of a jump (|dy|
  // under this threshold) cuts the "hangs in the air" floatiness a flat
  // gravity value reads as, without touching the rise itself (still the
  // exact same jumpStrength/gravity climb, so max height is unaffected)
  // or the fall (left at the plain constant, so every gap-size audit in
  // .claude/audit-gaps.js — which simulates the full arc — still holds).
  // Only the few frames spent essentially motionless at the peak change.
  const APEX_GRAVITY_ZONE = 2;
  const APEX_GRAVITY_MULTIPLIER = 1.6;
  let gravityMultiplier = Math.abs(player.dy) < APEX_GRAVITY_ZONE ? APEX_GRAVITY_MULTIPLIER : 1;
  // Featherfall ability (see shopData.js's Skills catalog) — only softens
  // the actual descent (dy already past the apex zone, i.e. properly
  // falling), never the rise, so the jump's max height/reach is exactly
  // what it always was and every gap a level's design requires still
  // requires it; this only buys more time to react/course-correct on the
  // way down, deliberately weaker than the old tripleJump skill it
  // replaced (an unconditional extra jump could skip gaps outright).
  const FEATHERFALL_GRAVITY_MULTIPLIER = 0.55;
  if (
    gravityMultiplier === 1 &&
    player.dy > 0 &&
    StarshadeEconomy.getEquippedAbility() === "featherFall"
  ) {
    gravityMultiplier = FEATHERFALL_GRAVITY_MULTIPLIER;
  }
  player.dy += gravity * gravityMultiplier * dtScale;

  const targetDx = anyPressed("right")
    ? horizontalSpeed
    : anyPressed("left")
    ? -horizontalSpeed
    : 0;

  if (slingshotRecoveryTicks > 0) {
    // Just launched — leave player.dx exactly as the slingshot set it
    // (see releaseSlingshotAim()) instead of instantly overwriting it with
    // whatever direction key happens to be held; gravity above still
    // applies normally to dy, so the shot still arcs like any other
    // projectile, only the horizontal component briefly ignores input.
  } else if (dashTimeRemaining > 0) {
    // A dash overrides normal input entirely for its short duration — a
    // fixed high speed in whichever direction it was triggered, not
    // whatever's currently held, so releasing the direction key mid-dash
    // can't cut it short.
    dashTimeRemaining -= dtScale;
    player.dx = DASH_SPEED * dashDirection;
  } else if (StarshadeEconomy.getEquippedAbility() === "slippery") {
    // Eases toward the target speed instead of snapping to it, and keeps
    // coasting after the input is released instead of stopping dead —
    // momentum, not instant start/stop, is what actually reads as "hard
    // to control precisely" (icy/slippery) rather than just "slower."
    const accel = 1 - Math.pow(1 - 0.1, dtScale);
    player.dx += (targetDx - player.dx) * accel;
    if (Math.abs(player.dx) < 0.05) player.dx = 0;
  } else {
    player.dx = targetDx;
  }

  const incomingDy = player.dy; // captured before resolveAxis can zero it on landing — see the bouncy ability below
  const { wallHit } = resolveAxis("x", dtScale);
  const { grounded, groundedOn } = resolveAxis("y", dtScale);
  riddenPlatform = grounded ? groundedOn : null;

  // Slingshot launch pads (see window.slingshots, a per-level entity like
  // spikes/checkpoints) — standing on solid ground within a pad's
  // footprint arms it for a drag-to-aim launch (see startSlingshotAim()/
  // releaseSlingshotAim() near the input listeners below). A plain
  // proximity check against the player's feet, not real collision — level
  // design places the pad's marker on top of an ordinary platform the
  // player already stands on normally, so nothing about resolveAxis()
  // needs to know slingshots exist at all.
  playerOnSlingshot = grounded
    ? (window.slingshots || []).find(
        (s) =>
          player.x + player.width / 2 > s.x &&
          player.x - player.width / 2 < s.x + s.width &&
          Math.abs(player.y + player.height / 2 - s.y) < 20
      ) || null
    : null;
  if (!playerOnSlingshot) slingshotAim = null;

  // A short window right after launch (mirrors dashTimeRemaining above)
  // where the player's own left/right input doesn't immediately fight the
  // launch velocity — without this, holding a direction key at launch time
  // (very easy to do, since aiming and moving use different inputs) would
  // instantly overwrite player.dx the very next frame.
  if (slingshotRecoveryTicks > 0) slingshotRecoveryTicks -= dtScale;

  // Conveyor platforms (`conveyor: true`, `conveyorSpeed` px/tick) push the
  // player horizontally for as long as they're actually standing on one —
  // on top of whatever movement keys are held, not instead of them, so
  // walking against a conveyor can still fight it (slowly) rather than
  // locking the player into one direction.
  const onConveyorNow = !!(grounded && groundedOn && groundedOn.conveyor);
  if (onConveyorNow) {
    player.x += (groundedOn.conveyorSpeed || 0) * dtScale;
    if (!wasOnConveyorLastFrame) StarshadeEconomy.recordConveyorRide();
  }
  wasOnConveyorLastFrame = onConveyorNow;

  // Sticky wall-cling: pressed into a wall while airborne, fall is slowed
  // to a slow slide instead of falling at normal speed, and the air jump
  // is refreshed every frame it holds — a "wall jump" is always available
  // for as long as the player keeps holding toward the wall. Stops the
  // instant they let go of the direction key (wallHit only fires while
  // actively trying to move into the wall — see resolveAxis()), so it
  // never turns into an accidental permanent stop mid-fall.
  if (!grounded && wallHit && StarshadeEconomy.getEquippedAbility() === "sticky" && player.dy > 1.2) {
    player.dy = 1.2;
    airJumpsUsed = 0;
  }

  // An invisible ceiling pinned to the actual top of the screen — not
  // level space, so it can't go stale across a window resize, or now that
  // the camera scrolls vertically, across the player simply moving up or
  // down through the level. Always there regardless of level content, so
  // a jump (or a double jump chained purely for height) can never carry
  // the player above the visible play area, let alone skip over hazards
  // below it. Nothing is drawn for this on purpose: it's a boundary, not
  // a platform. Uses last frame's cameraOffsetY (this frame's hasn't been
  // computed yet — see the camera easing below) — one frame of lag here is
  // imperceptible.
  const screenTop = cameraOffsetY + SCREEN_TOP_MARGIN + player.height / 2;
  if (player.y < screenTop) {
    player.y = screenTop;
    if (player.dy < 0) player.dy = 0;
  }

  // Melt platforms (`melt: true`) look solid but give way shortly after
  // you land on them — the countdown only runs while you're actually
  // standing on this exact one, and resets if you hop off before it gives,
  // so a quick crossing is always safe and only lingering costs you.
  platforms.forEach((p) => {
    if (!p.melt || p._melted) return;
    if (groundedOn === p) {
      p._meltTimer = (p._meltTimer || 0) + dtScale;
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

  // Circle skins roll proportional to horizontal speed and give a tiny
  // extra rebound on landing (Y only, purely cosmetic — see drawPlayer()).
  circleRollAngle += player.dx * 0.05 * dtScale;
  if (grounded && !wasGrounded) circleBounceOffset = -4;
  circleBounceOffset *= Math.pow(0.8, dtScale);
  if (Math.abs(circleBounceOffset) < 0.1) circleBounceOffset = 0;

  // Triangle skins sometimes tumble while airborne, settling back to
  // point-up the instant they land.
  if (triangleSpinActive) {
    if (player.dy !== 0) triangleSpinAngle += triangleSpinSpeed * dtScale;
    else {
      triangleSpinActive = false;
      triangleSpinAngle = 0;
    }
  }

  if (grounded) {
    airJumpsUsed = 0;
    if (!wasGrounded) {
      // Just landed — a quick squash that eases back to normal in draw(),
      // plus a small dust-impact burst along the ground. Both scale with
      // how hard the landing actually was (incomingDy, captured before
      // resolveAxis() can zero it out) — a light hop off a low platform
      // barely squashes at all, while a long fall reads as a real impact,
      // rather than every landing looking identical regardless of speed.
      const landingForce = Math.min(1, incomingDy / 14);
      squashX = 1 + landingForce * 0.45;
      squashY = 1 - landingForce * 0.45;
      spawnParticles(player.x, player.y + player.height / 2, 6 + Math.round(landingForce * 8), {
        colors: ["rgba(200,210,230,0.8)", "rgba(150,165,190,0.7)"],
        speed: 2.5 + landingForce * 2,
        life: 22,
        size: 3,
        spread: Math.PI * 0.9,
        baseAngle: -Math.PI / 2,
        gravity: 0.2,
      });
      // A hard enough landing gets a brief, subtle camera punch on top of
      // the squash — the same shakeTime/shakeMagnitude death already uses
      // (see resetPlayer()), just much smaller, and still gated on the
      // existing Screen Shake setting via draw()'s screenShakeEnabled check.
      if (landingForce > 0.5) {
        shakeTime = Math.max(shakeTime, 6);
        shakeMagnitude = Math.max(shakeMagnitude, 2 + landingForce * 2);
      }
      // Bouncy: rebounds a fraction of the incoming fall speed straight
      // back up instead of coming to rest, decaying with each successive
      // bounce until it's too small to trigger and the player finally
      // settles — a real, small bounce on landing, not just a visual
      // flourish.
      if (StarshadeEconomy.getEquippedAbility() === "bouncy" && incomingDy > 3) {
        player.dy = -incomingDy * 0.55;
      }

      // Bounce pads (`bounce: true`, optional `bounceStrength`) launch the
      // player straight back up on contact, hard enough to clear a chunk of
      // extra height — a level's guaranteed path never depends on one (see
      // .claude/gen-levels.js), so this only ever opens up faster/higher
      // optional routes, never gates progress.
      if (groundedOn && groundedOn.bounce) {
        player.dy = groundedOn.bounceStrength || BOUNCE_STRENGTH;
        airJumpsUsed = 0;
        StarshadeEconomy.recordBouncePadUse();
        spawnParticles(player.x, player.y + player.height / 2, 12, {
          colors: ["rgba(80,255,220,0.9)", "rgba(160,255,255,0.85)", "#fff"],
          speed: 4,
          life: 24,
          size: 3.5,
          spread: Math.PI * 0.9,
          baseAngle: -Math.PI / 2,
          gravity: 0.1,
        });
      }
    }
  }
  wasGrounded = grounded;

  // Continuous motion trail — an equipped particle style from the Shop's
  // Particles tab (see shopData.js/StarshadeEconomy.getEquippedParticleStyle())
  // takes priority and always shows regardless of the skin; otherwise falls
  // back to a skin that opts into its own trail via `trail: true` (see
  // skinsData.js), colored from that skin's own fill, exactly as before
  // particle styles existed.
  const equippedParticleStyle = StarshadeEconomy.getEquippedParticleStyle();
  if ((equippedParticleStyle || equippedSkin.trail) && (player.dx !== 0 || player.dy !== 0)) {
    spawnParticles(player.x, player.y, 1, {
      colors: equippedParticleStyle
        ? equippedParticleStyle.colors
        : [equippedSkin.fill || "rgba(255,255,255,0.7)"],
      speed: 0.3,
      life: 18,
      size: 4,
      spread: Math.PI * 2,
      gravity: 0,
    });
  }

  // Deadly — uses platformX()/platformY() rather than the raw x/y fields
  // so a moving decoy (see .claude/gen-levels.js's crisscrossing red
  // platforms) actually kills where it's drawn, not at its static rest
  // position.
  deadlyPlatforms.forEach((platform) => {
    const dpx = platformX(platform);
    const dpy = platformY(platform);
    if (
      player.x + player.width / 2 > dpx &&
      player.x - player.width / 2 < dpx + platform.width &&
      player.y + player.height / 2 > dpy &&
      player.y - player.height / 2 < dpy + platform.height
    ) {
      triggerDeath();
    }
  });
  // Checkpoints
  checkpoints.forEach((checkpoint, index) => {
    if (
      Math.hypot(player.x - checkpoint.x, player.y - checkpoint.y) <
        difficultySettings.checkpointRadius +
          leniencyLevel() * 3 +
          TOUCH_INPUT_BONUS.checkpointRadius &&
      !checkpoint.reached
    ) {
      checkpoint.reached = true;
      checkpoint.reachedAt = Date.now();
      saveCheckpointProgress(currentLevel, index);
      consecutiveDeaths = 0; // real progress — the rubber-banding resets
      // Two layered bursts instead of one — a wider ring of slower motes
      // (green/white, matching the reached tint) plus a tighter, faster
      // spray of small gold sparks (the beacon's own idle color, read as
      // "the old charge being thrown off") — feels like a real activation
      // rather than a single puff, to match the flash/shockwave-ring burst
      // drawCheckpoints() now plays on the beacon itself.
      spawnParticles(checkpoint.x, checkpoint.y, 16, {
        colors: ["rgba(50,255,50,0.9)", "rgba(180,255,180,0.9)", "#fff"],
        speed: 3.5,
        life: 38,
        size: 3.2,
        gravity: 0.05,
      });
      spawnParticles(checkpoint.x, checkpoint.y, 10, {
        colors: ["rgba(255,225,140,0.95)", "rgba(255,205,90,0.9)"],
        speed: 6,
        life: 18,
        size: 2,
        gravity: 0.02,
      });

      const isFinalCheckpoint = index === checkpoints.length - 1;
      if (isFinalCheckpoint) {
        // A longer, more distinct pattern for the one moment that ends a
        // level — the same short pulse an ordinary checkpoint gives, then
        // a rising double-pulse into one long buzz for the "the level
        // just swallowed me whole" fade/transition that follows.
        vibrateHaptic([15, 60, 40, 60, 220]);
      } else {
        vibrateHaptic(15);
      }

      // If it's the final checkpoint → play the portal-suck animation
      // first (see updatePortalSuck()); it hands off to the actual
      // fade-to-black/next-level sequence once it finishes.
      if (isFinalCheckpoint && !isFading && !isPortalSucking) {
        isPortalSucking = true;
        portalSuckProgress = 0;
        portalStartX = player.x;
        portalStartY = player.y;
        portalTargetX = checkpoint.x;
        portalTargetY = checkpoint.y;
        portalSpinAngle = 0;
      }
    }
  });

  // Spikes — inset the effective hitbox by a couple of px once
  // leniencyLevel() kicks in, same rubber-banding as the checkpoint radius
  // and landing forgiveness above, plus a flat bonus on touch (see
  // TOUCH_INPUT_BONUS).
  const spikeForgiveness = leniencyLevel() * 1.5 + TOUCH_INPUT_BONUS.spikeForgiveness;
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
        triggerDeath();
      }
    }
  });

  // Falling off the bottom of the *visible* area, not some fixed
  // level-space depth — with the camera now following the player
  // vertically, this only trips if a fall outruns the camera's own easing
  // (see below), same "off the bottom of the screen" death every
  // horizontal-only version of this check already had. Unlike a hazard
  // touch (see triggerDeath()), this isn't a single instant of contact —
  // nothing stops the player from just continuing to fall, so the death
  // itself is held off an extra VOID_FALL_MARGIN past the edge first (see
  // triggerVoidDeath()), just enough to clear the visible area (accounting
  // for camera lag) before teleporting rather than an instant cut the
  // moment they cross the bottom edge — kept fairly small on purpose,
  // since void falls are common enough (missing any gap does it) that a
  // long wait here reads as sluggish, not weighty, the way a rarer hazard
  // death can afford to.
  const VOID_FALL_MARGIN = viewportHeight * 0.15;
  if (player.y - cameraOffsetY > viewportHeight + VOID_FALL_MARGIN) {
    triggerVoidDeath();
  }

  // What the camera targets — normally just the player, but see the
  // riddenPlatform adjustment below.
  let cameraTargetX = player.x;
  let cameraTargetY = player.y;

  // Look-ahead: bias the horizontal target a little in whichever direction
  // the player is actually moving (including mid-dash, which is a lot
  // faster) — a classic platformer camera trick for a more open field of
  // view without changing the zoom at all. horizontalSpeed is fixed (this
  // game has no acceleration), so dx is always one of a small set of
  // values, and the existing camera easing below smooths the shift into a
  // gentle lean rather than a snap the instant you start walking.
  cameraTargetX += player.dx * CAMERA_LOOKAHEAD_FACTOR;

  // Riding a moving platform carries the player by the platform's own
  // live oscillation every frame (see the carry step above) — if the
  // camera tracked the player's raw position, it would faithfully chase
  // that whole sine wave, which reads as "the level is swaying/scrolling"
  // rather than "I'm standing on something that's moving": the platform
  // and player stay glued to the screen's center while everything else
  // (other platforms, the backdrop) appears to slide past instead.
  // Subtracting the platform's current offset from the camera's target
  // cancels that out — the camera settles near the platform's *resting*
  // position instead of chasing its bob, so the platform (and the player
  // riding it) visibly moves across a comparatively stable frame, which
  // reads as "I'm moving" instead. The instant the player steps off
  // (riddenPlatform becomes null), this stops applying and the camera
  // eases back to tracking the player directly like normal.
  if (riddenPlatform && riddenPlatform.moveAxis) {
    if (riddenPlatform.moveAxis === "x") {
      cameraTargetX -= riddenPlatform._offset || 0;
    } else {
      cameraTargetY -= riddenPlatform._offset || 0;
    }
  }

  // Exponential easing (camera follow, landing squash) is naturally a
  // per-tick decay factor — raising it to dtScale keeps the same
  // real-world catch-up speed regardless of frame rate, instead of a
  // higher-fps display converging faster just because it's taking more,
  // smaller steps per second.
  const targetCameraOffsetX = cameraTargetX - viewportWidth / 2;
  cameraOffsetX +=
    (targetCameraOffsetX - cameraOffsetX) *
    (1 - Math.pow(1 - cameraSmoothing, dtScale));

  // Continuous, fall-speed-proportional "opening up" — replaces a flat
  // grounded/airborne toggle that used to snap to a fixed zoomed-out
  // target the instant the player left the ground at all, which was the
  // actual problem with it (an ordinary hop looked and felt different
  // from how the game always played, not the idea of opening the view up
  // during a real fall). `openAmount` stays at exactly 0 through a normal
  // single/double jump — gravity only builds `player.dy` up to roughly
  // jumpStrength's own magnitude (12) over the course of a jump that
  // started and lands at similar heights — and only ramps up during a
  // fall that's actually long enough to be dangerous (a bottomless-feeling
  // drop, a level built around a long fall), which is exactly when seeing
  // more of what's below is actually useful. Applies on desktop and touch
  // alike now that it can't misfire on routine jumps the way the old
  // binary version did.
  const fallSpeed = Math.max(0, player.dy);
  const openAmount = Math.max(
    0,
    Math.min(1, (fallSpeed - CAMERA_OPEN_FALL_SPEED_MIN) / (CAMERA_OPEN_FALL_SPEED_MAX - CAMERA_OPEN_FALL_SPEED_MIN))
  );

  // Ease the vertical anchor first — it's part of this frame's Y target
  // below, not just a cosmetic value read later.
  const targetAnchor = CAMERA_ANCHOR_GROUNDED - openAmount * CAMERA_ANCHOR_OPEN_RANGE;
  cameraVerticalAnchor +=
    (targetAnchor - cameraVerticalAnchor) *
    (1 - Math.pow(1 - CAMERA_ANCHOR_SMOOTHING, dtScale));

  // Same easing, vertically — this is what lets a level actually use more
  // than one screen's worth of height (a tall climb, a long drop) instead
  // of every platform needing to stay within a single fixed on-screen
  // band (see applyLevelVerticalLayout()/docs/gameplay.md). Anchored at
  // cameraVerticalAnchor rather than a flat 0.5 so the "opening up" above
  // can shift more of the screen toward whatever's below the player
  // during a real fall.
  const targetCameraOffsetY = cameraTargetY - viewportHeight * cameraVerticalAnchor;
  cameraOffsetY +=
    (targetCameraOffsetY - cameraOffsetY) *
    (1 - Math.pow(1 - cameraSmoothingY, dtScale));

  const targetCameraZoom = CAMERA_ZOOM_GROUNDED - openAmount * CAMERA_ZOOM_OPEN_RANGE;
  cameraZoom +=
    (targetCameraZoom - cameraZoom) *
    (1 - Math.pow(1 - CAMERA_ZOOM_SMOOTHING, dtScale));

  // Ease the landing squash back to a normal 1:1 scale.
  const squashEase = 1 - Math.pow(0.8, dtScale);
  squashX += (1 - squashX) * squashEase;
  squashY += (1 - squashY) * squashEase;

  if (shakeTime > 0) shakeTime -= dtScale;
}

function updateTutorialTips() {
  tutorialTips.forEach((tip, i) => {
    if (!tutorialTipTriggered[i] && player.x >= tip.x) {
      tutorialTipTriggered[i] = true;
      tutorialTipQueue.push(tip.text);
      if (tip.mechanicKey) markMechanicTipSeen(tip.mechanicKey);
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

  const y = viewportHeight - 80;
  const textWidth = ctx.measureText(currentTutorialTip).width;
  const boxW = textWidth + 48;
  const boxH = 46;
  const boxX = viewportWidth / 2 - boxW / 2;
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
  ctx.fillText(currentTutorialTip, viewportWidth / 2, y);
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

// Falling into the void, not touching a hazard, so it deliberately skips
// triggerDeath()'s whole shatter animation — freezing the player and
// playing a canned effect somewhere already off the bottom of the screen
// would just be invisible, and would also cut the fall short right where
// it crossed the edge instead of letting it continue. Only fires once the
// extended VOID_FALL_MARGIN check above trips, by which point the player
// has already fallen well clear of the visible area on their own, under
// completely normal physics — this just does the actual teleport at that
// point, plus a haptic buzz (still felt even with nothing on screen to
// look at) in place of the hazard path's screen shake, which would have
// nothing visible to shake around by now anyway.
function triggerVoidDeath() {
  if (isDying || isFading || isPortalSucking) return;
  vibrateHaptic([30, 40, 30]);
  resetPlayer();
}

// Fires the instant a hazard actually kills the player — immediate
// feedback (shake, haptics, a shatter burst) plus freezing them in place
// to start the death animation (see updateDeathAnimation() below), rather
// than teleporting to the respawn point the same frame. Guarded the same
// way starting the fade/portal-suck transitions are: never stack this on
// top of another transition already in progress (an edge case — e.g.
// overlapping a spike the exact frame the final checkpoint is reached —
// rather than something that happens often, but a dying player mid-
// portal-suck or mid-fade would be a visibly broken frame otherwise).
function triggerDeath() {
  if (isDying || isFading || isPortalSucking) return;
  isDying = true;
  deathProgress = 0;
  deathSpinAngle = 0;
  // Frozen at the exact death location for the animation's duration —
  // captured separately from player.x/y (rather than just reading
  // player.x/y again in drawPlayer()) so nothing else that happens to
  // touch player.x/y before finishDeath() runs (there isn't anything
  // right now, but the freeze below already stops normal physics from
  // moving it anyway) could shift where the animation plays.
  deathAnimX = player.x;
  deathAnimY = player.y;
  player.dx = 0;
  player.dy = 0;

  shakeTime = 15;
  shakeMagnitude = 6;
  vibrateHaptic([30, 40, 30]);

  const skin = StarshadeEconomy.getEquippedSkin();
  spawnParticles(deathAnimX, deathAnimY, 24, {
    colors: [skin.fill || "rgba(160,66,211,0.85)", "#fff", "rgba(255,80,80,0.9)"],
    speed: 6,
    life: 34,
    size: 4,
    gravity: 0.15,
  });
}

// Advances the death animation each frame it's active (see update()) and
// hands off to the actual respawn (resetPlayer()) once it completes.
// Nothing else runs against player state while this is active — same
// "canned animation, no input has anything left to do" reasoning as
// updatePortalSuck().
function updateDeathAnimation(dtScale) {
  deathProgress = Math.min(1, deathProgress + dtScale / DEATH_ANIM_DURATION);
  deathSpinAngle += 0.45 * dtScale;
  if (deathProgress >= 1) {
    isDying = false;
    resetPlayer();
  }
}

// Runs once the death animation finishes — increments the lifetime death
// stats, restores any melted platforms, and teleports the player to their
// last checkpoint (or the level start). Previously ran synchronously the
// instant a hazard was touched; triggerDeath()/updateDeathAnimation()
// above now insert a short animated beat first (see their comments) —
// this function's own job (stats + respawn) is otherwise unchanged.
function resetPlayer() {
  consecutiveDeaths++;
  leveldiedThisAttempt = true;
  StarshadeEconomy.incrementTotalDeaths();
  StarshadeAchievements.checkAndNotify();

  // Give every melt platform back — dying and retrying a section shouldn't
  // permanently lose a platform a later attempt still needs to cross.
  platforms.forEach((p) => {
    if (p.melt) {
      p._melted = false;
      p._meltTimer = 0;
    }
  });

  // Dropped in from a bit above the checkpoint (RESPAWN_DROP_HEIGHT) rather
  // than placed exactly on it — that fall is the only thing that visually
  // sells "you've just been put back here," so it needs to actually read
  // as a fall. Paired with the materialize burst below (a converging
  // particle poof right at the drop point, the same technique the
  // portal-suck effect uses in reverse) since the drop alone was easy to
  // miss — barely a beat before landing, and against a background with any
  // real depth to it (distant planets barely shift for such a short,
  // instant camera snap) it could look more like the level had lurched
  // than like the player had fallen.
  const RESPAWN_DROP_HEIGHT = 60;
  const lastCheckpoint = [...checkpoints].reverse().find((c) => c.reached);
  let spawnX, spawnY;
  if (lastCheckpoint) {
    spawnX = lastCheckpoint.x;
    spawnY = lastCheckpoint.y;
  } else {
    spawnX = levelStartX;
    spawnY = levelStartY;
  }
  player.x = spawnX;
  player.y = spawnY - RESPAWN_DROP_HEIGHT;
  player.dx = 0;
  player.dy = 0;
  spawnConvergingParticles(spawnX, spawnY - RESPAWN_DROP_HEIGHT, 16, [
    "rgba(220,210,255,0.9)",
    "rgba(160,140,255,0.85)",
    "#fff",
  ]);
  // Matches the old dy===0 behavior this replaced (see tryJump()): a jump
  // pressed immediately on respawn — before the player has actually
  // fallen those last few px onto the checkpoint's platform — still
  // registers as a fresh first jump, not a double jump.
  wasGrounded = true;
  riddenPlatform = null; // respawning off of whatever they died on/near
  cameraZoom = 1; // dying mid-air shouldn't leave the view zoomed out on respawn
  cameraVerticalAnchor = 0.5;
  dashTimeRemaining = 0;

  // Snap (don't smoothly lerp) the camera to the respawn point — same
  // reasoning as resetLevelState()'s snap on a level load. This is a
  // teleport, not physical movement, and the checkpoint can be far from
  // wherever the player just died (a long fall, a death deep into a level
  // before reaching any checkpoint). Left to ease normally, the ceiling
  // clamp and the "fell off the bottom of the screen" check right below
  // this call in updatePlayer() both still read the *previous* frame's
  // camera position, which — measured against the just-teleported player —
  // can itself look like "off the bottom of the screen," triggering
  // resetPlayer() again immediately, and again the next frame, for as long
  // as the camera takes to ease the whole distance back: a death loop the
  // player can't act their way out of, since every attempt starts by
  // re-dying before the level has even scrolled back into view.
  cameraOffsetX = player.x - viewportWidth / 2;
  cameraOffsetY = player.y - viewportHeight * cameraVerticalAnchor;
}

// -------------------------------------------------------------
// GAME LOOP
// -------------------------------------------------------------
let isPaused = false;

function update(dtScale) {
  if (isPaused) {
    draw(dtScale);
    return;
  }
  if (isDying) {
    // Frozen at the death location for a short beat before the actual
    // respawn — see triggerDeath()/updateDeathAnimation()'s comments.
    updateDeathAnimation(dtScale);
  } else if (isPortalSucking) {
    // The level's already complete at this point — no input has anything
    // left to do, so this plays out as a canned animation instead of
    // normal updatePlayer(), with the camera left exactly where it was
    // (see the portal-suck state's declaration) rather than also chasing
    // it.
    updatePortalSuck(dtScale);
  } else if (!isFading || fadeDirection === -1) {
    // While pinned at black between levels (fadeDirection === 0) or
    // actively fading, the outgoing level's platforms/checkpoints/etc.
    // may already have been cleared by loadLevel() — skip gameplay
    // updates and just let the overlay run until the new level is ready.
    updatePlayer(dtScale);
    updateLevelText();
    updateTutorialTips();
  }
  updateParticles(dtScale);
  draw(dtScale);
}

function setPaused(paused) {
  // Disallowed mid-transition (the level data may momentarily be empty),
  // during the portal-suck or death animation, or once the game-complete
  // screen is already up.
  if (isFading || isPortalSucking || isDying) return;
  if (!document.getElementById("gameCompleteMenu").classList.contains("hidden")) return;
  isPaused = paused;
  document.getElementById("pauseMenu").classList.toggle("hidden", !paused);
}

function draw(dtScale) {
  // Fully opaque, so this is the frame clear too — no separate
  // ctx.clearRect() needed. Drawn before the shake save/restore below so
  // the backdrop stays put while the foreground shakes on death, the same
  // way the plain clear it replaced was never shaken either.
  drawBackground();

  ctx.save();
  if (shakeTime > 0 && screenShakeEnabled) {
    ctx.translate(
      (Math.random() - 0.5) * shakeMagnitude,
      (Math.random() - 0.5) * shakeMagnitude
    );
  }

  if (typeof platforms !== "undefined") {
    // Zoom the world content only — not the level-name/tutorial-tip text
    // below, which stay screen-space so they don't shrink or drift every
    // time cameraZoom eases in and out on a jump.
    ctx.save();
    ctx.translate(viewportWidth / 2, viewportHeight / 2);
    ctx.scale(cameraZoom, cameraZoom);
    ctx.translate(-viewportWidth / 2, -viewportHeight / 2);
    drawPlatforms();
    drawGhostPlatforms();
    drawMeltPlatforms();
    drawBouncePlatforms();
    drawConveyorPlatforms();
    drawSpikes();
    drawSlingshots();
    drawCheckpoints();
    drawParticles();
    drawPlayer();
    drawDeadlyPlatforms();
    ctx.restore();

    drawLevelText();
    drawTutorialTip();
  }

  ctx.restore();
  drawFadeOverlay(dtScale); // <-- overlay on top of everything, unaffected by shake
}

// Frame-rate independence: rAF hands the callback a real timestamp (ms),
// so `dtScale` is "how many 60fps-equivalent ticks this real frame
// represents" — 1 at a steady 60Hz, ~0.5 at 120Hz, ~2 at 30fps. Every
// per-frame physics/animation increment in the game is written in terms
// of a 60fps tick and multiplied by this, so gameplay speed (jump arcs,
// platform cycles, camera easing, particle life) stays the same real-world
// speed on any display or under any frame-rate variance, rather than a
// game that quietly runs faster on a higher-refresh-rate screen. Clamped
// so resuming from a backgrounded/suspended tab (which can hand rAF one
// huge delta) doesn't fling the player through geometry in a single leap.
let lastFrameTime = null;
const MAX_DT_SCALE = 3;

function gameLoop(timestamp) {
  if (lastFrameTime === null) lastFrameTime = timestamp;
  const dtScale = Math.min(
    MAX_DT_SCALE,
    Math.max(0, (timestamp - lastFrameTime) / (1000 / 60))
  );
  lastFrameTime = timestamp;

  update(dtScale);
  requestAnimationFrame(gameLoop);
}

// -------------------------------------------------------------
// CONTROLS
// -------------------------------------------------------------
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !e.repeat) {
    // A key-rebind prompt inside the settings overlay owns Escape while
    // it's listening (cancels just the rebind, not the whole panel) —
    // see settings.js's captureRebindKey(). This listener was attached
    // before settings.js's, so it fires first; stepping aside here is
    // what lets that one behave correctly instead of both firing.
    if (window.isCapturingKeyRebind) return;
    // Back out of an open sub-overlay next, rather than also toggling
    // pause and leaving it stranded on screen.
    if (closeSubOverlays()) return;
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
  if (isBound("left", e.key)) onDirectionTap("left");
  if (isBound("right", e.key)) onDirectionTap("right");
});

// Shared by the keyboard jump binding and click/tap-to-jump (see
// settings.js's "Click/Tap to Jump" toggle) so both trigger the exact same
// jump-or-extra-jump logic.
function tryJump() {
  // Nothing to do once the level's finished (fading out), mid-portal-
  // suck, or mid-death-animation — checked once here instead of at every
  // call site (keyboard, click, touch) so none of them can forget it.
  if (isFading || isPortalSucking || isDying) return;

  // wasGrounded (not player.dy === 0) is the correct "on solid ground"
  // signal — dy also lands on exactly 0 for one frame when the player
  // bonks their head on a platform's underside, or on the invisible
  // screen-top ceiling, while still fully airborne. Using dy alone meant
  // a jump press timed into that exact frame granted a free ungrounded
  // "first jump" (not consuming an air jump) instead of correctly
  // requiring it already be used.
  if (wasGrounded) {
    player.dy = jumpStrength;
  } else if (airJumpsUsed < extraAirJumps()) {
    player.dy = jumpStrength;
    airJumpsUsed++;
    usedExtraJumpThisAttempt = true;
  } else {
    return; // no air jumps left — this press does nothing
  }
  squashX = 0.7;
  squashY = 1.3;
  spawnJumpDust();
  vibrateHaptic(10);

  // A triangle skin only tumbles some of the time — "can rotate in the
  // air sometimes," not a spin on every single jump.
  if (StarshadeEconomy.getEquippedSkin().shape === "triangle" && Math.random() < 0.5) {
    triangleSpinActive = true;
    triangleSpinSpeed = (Math.random() < 0.5 ? -1 : 1) * (0.3 + Math.random() * 0.25);
  }
}

canvas.addEventListener("click", () => {
  // Standing on an armed slingshot (or just having released one — see
  // slingshotRecoveryTicks) suppresses the ordinary tap-to-jump: a plain
  // click/tap on the pad without dragging shouldn't also fire a jump, and
  // the mouse's own synthetic "click" right after a drag-release would
  // otherwise land here a moment later.
  if (playerOnSlingshot || slingshotRecoveryTicks > 0) return;
  if (clickToJumpEnabled && !isPaused && !isFading) tryJump();
});

// Tap anywhere on the open play area to jump, on touch devices — a real
// touchstart listener rather than relying on the "click" above, which on
// mobile only fires after a synthesized delay following touchend, and
// which many mobile browsers cancel outright if the finger drifts even a
// couple of px between touchstart/touchend (easy to trigger by accident
// while airborne). This makes tap-to-jump register the instant a finger
// lands, with none of that flakiness — genuinely "tap anywhere," not just
// the two dedicated buttons. preventDefault() here also suppresses the
// browser's own synthetic "click" afterward, so this can never
// double-trigger a jump together with the listener above. Only ever
// receives touches that land on the open canvas in the first place — the
// d-pad/jump buttons are separate, higher-stacked elements, so a touch
// on one of those never reaches this handler at all — and, since every
// touch point dispatches its own independent event, this coexists fine
// with a finger already held on those buttons (movement + jump at once).
canvas.addEventListener(
  "touchstart",
  (e) => {
    // See the click listener above — a slingshot drag takes over instead.
    if (playerOnSlingshot || slingshotRecoveryTicks > 0) return;
    if (clickToJumpEnabled && !isPaused && !isFading) tryJump();
    e.preventDefault();
  },
  { passive: false }
);

// -------------------------------------------------------------
// SLINGSHOT AIM (drag to launch — mouse and touch)
// -------------------------------------------------------------
// Only ever does anything while playerOnSlingshot is set (see the
// proximity check in updatePlayer()), so this coexists with every other
// canvas listener above without needing to touch them beyond the two
// early-returns just added.
function slingshotDragPoint(e) {
  const rect = canvas.getBoundingClientRect();
  // `touches` for touchstart/touchmove; `changedTouches` for touchend (the
  // finger has already lifted, so `touches` is empty by then) — a mouse
  // event has neither and uses clientX/Y directly.
  const touch = (e.touches && e.touches[0]) || (e.changedTouches && e.changedTouches[0]);
  const clientX = touch ? touch.clientX : e.clientX;
  const clientY = touch ? touch.clientY : e.clientY;
  return { x: clientX - rect.left, y: clientY - rect.top };
}

function startSlingshotAim(e) {
  if (!playerOnSlingshot || isPaused || isFading || isPortalSucking || isDying) return;
  const p = slingshotDragPoint(e);
  slingshotAim = { dragStartX: p.x, dragStartY: p.y, dragX: p.x, dragY: p.y };
  e.preventDefault();
}

function moveSlingshotAim(e) {
  if (!slingshotAim) return;
  const p = slingshotDragPoint(e);
  slingshotAim.dragX = p.x;
  slingshotAim.dragY = p.y;
  e.preventDefault();
}

function releaseSlingshotAim(e) {
  if (!slingshotAim) return;
  // Read the final point from the release event itself rather than
  // trusting that enough mousemove/touchmove events fired beforehand —
  // a fast flick-and-release can reach mouseup/touchend with few or no
  // intermediate move events, which would otherwise read as "no drag at
  // all" (dragX/Y still at the start point) and silently fail to launch.
  if (e && (e.clientX !== undefined || e.changedTouches)) {
    const p = slingshotDragPoint(e);
    slingshotAim.dragX = p.x;
    slingshotAim.dragY = p.y;
  }
  const pad = playerOnSlingshot;
  const dx = slingshotAim.dragX - slingshotAim.dragStartX;
  const dy = slingshotAim.dragY - slingshotAim.dragStartY;
  const dragDistance = Math.hypot(dx, dy);
  slingshotAim = null;
  // A trivial drag (essentially just a tap that landed on the pad) isn't a
  // real aim — don't launch on a near-zero pull, and leave the pad armed.
  if (!pad || dragDistance <= 6) return;

  const maxPower = pad.maxPower || 22;
  const power = Math.min(maxPower, dragDistance * SLINGSHOT_POWER_SCALE);
  // Launched opposite the drag direction — pull back, release forward —
  // same as a real slingshot.
  player.dx = (-dx / dragDistance) * power;
  player.dy = (-dy / dragDistance) * power;
  slingshotRecoveryTicks = SLINGSHOT_RECOVERY_TICKS;
  airJumpsUsed = 0;
  playerOnSlingshot = null;
  vibrateHaptic(25);
  spawnParticles(player.x, player.y, 14, {
    colors: ["rgba(255,255,255,0.9)", "rgba(255,210,120,0.85)"],
    speed: 5,
    life: 20,
    size: 3,
    spread: Math.PI * 2,
    gravity: 0.1,
  });
}

canvas.addEventListener("mousedown", startSlingshotAim);
canvas.addEventListener("mousemove", moveSlingshotAim);
document.addEventListener("mouseup", releaseSlingshotAim);
canvas.addEventListener("touchstart", startSlingshotAim, { passive: false });
canvas.addEventListener("touchmove", moveSlingshotAim, { passive: false });
canvas.addEventListener("touchend", releaseSlingshotAim);
canvas.addEventListener("touchcancel", releaseSlingshotAim);

// -------------------------------------------------------------
// TOUCH CONTROLS (mobile)
// -------------------------------------------------------------
// Press-and-hold left/right buttons feed touchState (read by anyPressed()
// above); jump is a dedicated button and always works regardless of the
// Click/Tap to Jump setting, since it's an explicit control, not the
// "click anywhere" convenience that setting toggles.
function bindTouchButton(id, onDown, onUp) {
  const el = document.getElementById(id);
  if (!el) return;
  const start = (e) => {
    e.preventDefault();
    onDown();
  };
  const end = (e) => {
    e.preventDefault();
    onUp();
  };
  el.addEventListener("touchstart", start, { passive: false });
  el.addEventListener("touchend", end);
  el.addEventListener("touchcancel", end);
  // Also mouse-bindable so the buttons work when testing with the
  // browser's device-emulation mode, which sends mouse events, not touch.
  el.addEventListener("mousedown", start);
  el.addEventListener("mouseup", end);
  el.addEventListener("mouseleave", end);
}

bindTouchButton(
  "touch-left",
  () => {
    touchState.left = true;
    onDirectionTap("left");
  },
  () => (touchState.left = false)
);
bindTouchButton(
  "touch-right",
  () => {
    touchState.right = true;
    onDirectionTap("right");
  },
  () => (touchState.right = false)
);
bindTouchButton(
  "touch-jump",
  () => {
    if (!isPaused && !isFading) tryJump();
  },
  () => {}
);

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
// Re-verify every already-unlocked achievement still actually passes its
// own check() against current stats before anything else runs — catches
// a stale unlock left over from a bug, from directly-edited localStorage,
// or (the case that prompted this) a milestone's threshold moving out from
// under it, like the recent Quarter Way/Halfway Hero rescale from the old
// 25-level fractions to the new 100-level ones. See
// StarshadeAchievements.revalidateUnlocked() in achievementsData.js for
// which achievements this can safely re-test (not every one — a
// real-world-clock achievement like "complete a level after midnight"
// would be wrongly stripped every morning if it were re-tested the same
// way). Runs unconditionally at script load, not deferred to startGame()
// below — achievement state should be correct even if the player browses
// Achievements from the main menu before ever pressing Play.
StarshadeAchievements.revalidateUnlocked();

// Used to be an unconditional call at script-parse time — fine when this
// ran on its own dedicated game.html page (arriving here at all meant
// Play had already been pressed on the previous page). Now that game.js
// loads once, up front, as part of the merged single-page app, starting
// the level/render loop has to wait for an actual "go" signal instead:
// the main menu's Play button on desktop/tablet, or immediately after the
// loading screen on a touch device (see the boot sequence below and
// docs/architecture.md). Guarded so a stray second call (e.g. Play
// clicked twice) never double-starts the rAF loop.
function startGame() {
  if (hasGameStarted) return;
  hasGameStarted = true;
  loadLevel(currentLevel)
    .then(() => {
      // Always enter the loop via rAF (never call it directly) so the very
      // first call is guaranteed a real timestamp argument — gameLoop()
      // needs one to compute dtScale.
      requestAnimationFrame(gameLoop);
    })
    .catch(() => {
      // Saved progress points past the last level (the player already beat
      // the game and came back with a stale savedLevel). Show the
      // completion screen rather than a frozen blank canvas, and reset
      // progress so the next Play starts a fresh run.
      const bonus = StarshadeEconomy.setGameCompleted();
      showGameCompleteScreen(bonus);
      localStorage.setItem("savedLevel", "1");
    });
}

// -------------------------------------------------------------
// BOOT SEQUENCE — loading screen, then main menu (desktop/tablet) or
// straight into the game (mobile)
// -------------------------------------------------------------
// The loading screen used to be its own page (loading.html), hit every
// single time Play was pressed because Play was a real navigation. Now
// there's only one page load for the whole app, so showing this once here
// inherently means "once per app launch" with no extra flag needed.
(function runBootSequence() {
  const loadingOverlay = document.getElementById("loadingOverlay");
  const progressBar = document.getElementById("progress-bar");
  const progressText = document.getElementById("progress-text");

  function finishBoot() {
    loadingOverlay.classList.add("boot-complete");
    setTimeout(() => {
      loadingOverlay.style.display = "none";
      if (isTouchDevice) {
        // Skip the main menu entirely — it has no `hidden` class by
        // default (desktop needs it visible right after loading), so it
        // has to be explicitly hidden here or it sits on top of the game
        // this branch is about to start. The rotate-prompt overlay (pure
        // CSS, see game.css) already blocks visibility until the phone is
        // actually in landscape, so starting the game immediately here is
        // what makes it "auto-launch" the instant it's flipped, with
        // nothing left to tap.
        document.getElementById("mainMenuOverlay").classList.add("hidden");
        startGame();
      } else {
        document.getElementById("mainMenuOverlay").classList.remove("hidden");
      }
    }, 500); // matches the fade-out transition in game.css
  }

  let progress = 0;
  const loadingInterval = setInterval(() => {
    progress = Math.min(100, progress + Math.floor(Math.random() * 10) + 5);
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${progress}%`;
    if (progress >= 100) {
      clearInterval(loadingInterval);
      setTimeout(finishBoot, 400);
    }
  }, 250);
})();
