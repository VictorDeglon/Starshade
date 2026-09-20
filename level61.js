// Level 61 Data — "The Drowned Sky"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 61";
window.levelAccent = "#9dff4d";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 552, y: 484, width: 65, height: 22, melt: true, meltDelay: 20 },
  { x: 869, y: 570, width: 173, height: 20, melt: true, meltDelay: 20 },
  { x: 1294, y: 672, width: 180, height: 14, bounce: true, bounceStrength: -17 },
  { x: 1638, y: 672, width: 330, height: 25 },
  { x: 2214, y: 725, width: 107, height: 27, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 2558, y: 754, width: 165, height: 14, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 3169, y: 736, width: 122, height: 26, melt: true, meltDelay: 20 },
  { x: 3455, y: 736, width: 327, height: 18 },
  { x: 3986, y: 686, width: 168, height: 15, moveAxis: "y", moveRange: 116, moveSpeed: 0.047, movePhase: 5.58 },
  { x: 4565, y: 598, width: 72, height: 18 },
  { x: 4806, y: 496, width: 51, height: 27, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 4857, y: 496, width: 270, height: 20 },
  { x: 5318, y: 469, width: 106, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35857142857142854 },
  { x: 5612, y: 452, width: 277, height: 20 },
  { x: 6296, y: 356, width: 156, height: 19, bounce: true, bounceStrength: -16 },
  { x: 6863, y: 267, width: 82, height: 17 },
  { x: 7376, y: 221, width: 160, height: 14 },
  { x: 7982, y: 205, width: 171, height: 27, moveAxis: "x", moveRange: 81, moveSpeed: 0.046, movePhase: 5.47 },
  { x: 8317, y: 205, width: 211, height: 20 },
  { x: 8765, y: 232, width: 219, height: 30, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 9236, y: 300, width: 162, height: 17, melt: true, meltDelay: 20 },
  { x: 9650, y: 385, width: 155, height: 19 },
  { x: 9969, y: 385, width: 365, height: 27 },
  { x: 10586, y: 475, width: 89, height: 15, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 10927, y: 566, width: 197, height: 22, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 11376, y: 654, width: 79, height: 18, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 11701, y: 707, width: 197, height: 15, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 11898, y: 707, width: 222, height: 20 },
  { x: 12295, y: 672, width: 116, height: 16, gated: true, gateId: "g61_0" },
  { x: 12453, y: 659, width: 205, height: 20 },
  { x: 12885, y: 666, width: 108, height: 14, conveyor: true, conveyorSpeed: 1.95 },
  { x: 13433, y: 642, width: 232, height: 27, melt: true, meltDelay: 20 },
  { x: 13859, y: 577, width: 135, height: 26, melt: true, meltDelay: 20 },
  { x: 14169, y: 481, width: 216, height: 26, conveyor: true, conveyorSpeed: -2.17 },
  { x: 14566, y: 468, width: 403, height: 20 },
];

window.deadlyPlatforms = [
  { x: 3921, y: 638, width: 134, height: 24, moveAxis: "x", moveRange: 87, moveSpeed: 0.045, movePhase: 1.38 },
  { x: 7928, y: 170, width: 141, height: 23, moveAxis: "y", moveRange: 70, moveSpeed: 0.049, movePhase: 2.72 },
  { x: 4674, y: 590, width: 60, height: 20 },
  { x: 6980, y: 259, width: 61, height: 20 },
  { x: 7570, y: 228, width: 113, height: 20 },
  { x: 9826, y: 392, width: 112, height: 20 },
];

window.spikes = [
  { x: 6876, y: 267, size: 29 },
  { x: 7414, y: 221, size: 27 },
  { x: 9673, y: 385, size: 48 },
  { x: 9721, y: 385, size: 54 },
  { x: 9775, y: 385, size: 14 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1803, y: 642, reached: false },
  { x: 3619, y: 706, reached: false },
  { x: 5672, y: 422, reached: false },
  { x: 8423, y: 175, reached: false },
  { x: 10152, y: 355, reached: false },
  { x: 12513, y: 629, reached: false },
  { x: 14768, y: 438, reached: false }, // Final
];

window.forceZones = [
  { x: 3465, y: 646, width: 307, height: 90, axis: "x", force: -0.151 },
  { x: 9979, y: 295, width: 345, height: 90, axis: "x", force: -0.152 },
];

window.lasers = [
  { x: 1541, y: 590, length: 244, width: 4, baseAngle: 0.45, sweepAngle: 0, period: 148, blinkPeriod: 100, onRatio: 0.5 },
  { x: 4733, y: 540, length: 181, width: 4, baseAngle: 0.4, sweepAngle: 0, period: 148, blinkPeriod: 100, onRatio: 0.5 },
  { x: 4941, y: 432, length: 152, width: 4, baseAngle: 5.08, sweepAngle: 0, period: 148, blinkPeriod: 100, onRatio: 0.5 },
  { x: 11552, y: 607, length: 183, width: 4, baseAngle: 3.23, sweepAngle: 0, period: 148, blinkPeriod: 100, onRatio: 0.5 },
  { x: 13753, y: 570, length: 111, width: 4, baseAngle: 3.08, sweepAngle: 0, period: 148, blinkPeriod: 100, onRatio: 0.5 },
  { x: 14082, y: 489, length: 178, width: 4, baseAngle: 4.78, sweepAngle: 0, period: 148, blinkPeriod: 100, onRatio: 0.5 },
];

window.fallers = [
  { x: 8214, y: 73, size: 52, triggerX: 8030 },
  { x: 9885, y: 288, size: 45, triggerX: 9726 },
  { x: 10737, y: 387, size: 35, triggerX: 10567 },
];

window.switches = [
  { x: 12098, y: 677, radius: 26, gateId: "g61_0" },
];
