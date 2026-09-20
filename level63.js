// Level 63 Data — "The Ember Choir"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 63";
window.levelAccent = "#9dff4d";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 517, y: 363, width: 45, height: 14, melt: true, meltDelay: 20 },
  { x: 760, y: 310, width: 113, height: 22, moveAxis: "x", moveRange: 134, moveSpeed: 0.041, movePhase: 5.33 },
  { x: 1290, y: 227, width: 90, height: 26, conveyor: true, conveyorSpeed: -1.17 },
  { x: 1544, y: 227, width: 337, height: 17 },
  { x: 2056, y: 129, width: 107, height: 26, conveyor: true, conveyorSpeed: 2.07 },
  { x: 2574, y: 34, width: 51, height: 29 },
  { x: 3042, y: -51, width: 142, height: 24, bounce: true, bounceStrength: -17 },
  { x: 3184, y: -51, width: 276, height: 20 },
  { x: 3661, y: -69, width: 92, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.3544897959183673 },
  { x: 3951, y: -81, width: 247, height: 20 },
  { x: 4629, y: -127, width: 101, height: 23, bounce: true, bounceStrength: -17 },
  { x: 4943, y: -150, width: 131, height: 24 },
  { x: 5307, y: -137, width: 154, height: 28, conveyor: true, conveyorSpeed: -1 },
  { x: 5704, y: -97, width: 80, height: 14, bounce: true, bounceStrength: -20 },
  { x: 5784, y: -97, width: 264, height: 20 },
  { x: 6241, y: -109, width: 98, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.3544897959183673 },
  { x: 6535, y: -132, width: 236, height: 20 },
  { x: 7023, y: -33, width: 232, height: 14, bounce: true, bounceStrength: -16 },
  { x: 7507, y: 62, width: 59, height: 21, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 7818, y: 156, width: 93, height: 29, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 8163, y: 241, width: 75, height: 17, bounce: true, bounceStrength: -19 },
  { x: 8238, y: 241, width: 259, height: 20 },
  { x: 8663, y: 211, width: 117, height: 16, gated: true, gateId: "g63_0" },
  { x: 8838, y: 210, width: 200, height: 20 },
  { x: 9281, y: 253, width: 185, height: 29, bounce: true, bounceStrength: -19 },
  { x: 9699, y: 275, width: 206, height: 23, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 10132, y: 276, width: 55, height: 18, melt: true, meltDelay: 20 },
  { x: 10391, y: 229, width: 221, height: 14, melt: true, meltDelay: 20 },
  { x: 10776, y: 229, width: 273, height: 21 },
  { x: 11460, y: 142, width: 188, height: 30 },
  { x: 12055, y: 44, width: 224, height: 23 },
  { x: 12457, y: -48, width: 93, height: 26, melt: true, meltDelay: 20 },
  { x: 12714, y: -48, width: 393, height: 20 },
  { x: 13295, y: -124, width: 219, height: 17, moveAxis: "x", moveRange: 108, moveSpeed: 0.062, movePhase: 5.4 },
  { x: 13945, y: -170, width: 45, height: 24, bounce: true, bounceStrength: -19 },
  { x: 14436, y: -184, width: 218, height: 20, bounce: true, bounceStrength: -19 },
  { x: 14857, y: -184, width: 426, height: 20 },
];

window.deadlyPlatforms = [
  { x: 13233, y: -180, width: 163, height: 21, moveAxis: "y", moveRange: 104, moveSpeed: 0.06, movePhase: 0.31 },
  { x: 2663, y: 30, width: 60, height: 20 },
  { x: 5101, y: -149, width: 100, height: 20 },
  { x: 11685, y: 148, width: 163, height: 20 },
  { x: 12309, y: 52, width: 124, height: 20 },
];

window.spikes = [
  { x: 4991, y: -150, size: 15 },
  { x: 5006, y: -150, size: 54 },
  { x: 11486, y: 142, size: 23 },
  { x: 12132, y: 44, size: 37 },
  { x: 12169, y: 44, size: 36 },
  { x: 12205, y: 44, size: 43 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1713, y: 197, reached: false },
  { x: 4011, y: -111, reached: false },
  { x: 6595, y: -162, reached: false },
  { x: 8898, y: 180, reached: false },
  { x: 10913, y: 199, reached: false },
  { x: 12911, y: -78, reached: false },
  { x: 15070, y: -214, reached: false }, // Final
];

window.forceZones = [
  { x: 1554, y: 137, width: 317, height: 90, axis: "x", force: 0.146 },
  { x: 12724, y: -138, width: 373, height: 90, axis: "x", force: 0.182 },
];

window.lasers = [
  { x: 7629, y: -24, length: 120, width: 4, baseAngle: 3.42, sweepAngle: 1.01, period: 146, blinkPeriod: 0, onRatio: 0.5 },
  { x: 9526, y: 167, length: 108, width: 4, baseAngle: 4.03, sweepAngle: 0.72, period: 146, blinkPeriod: 0, onRatio: 0.5 },
  { x: 9998, y: 204, length: 126, width: 4, baseAngle: 0.58, sweepAngle: 0.72, period: 146, blinkPeriod: 0, onRatio: 0.5 },
  { x: 10710, y: 130, length: 120, width: 4, baseAngle: 0.87, sweepAngle: 0, period: 146, blinkPeriod: 99, onRatio: 0.5 },
  { x: 11735, y: 54, length: 196, width: 4, baseAngle: 3.76, sweepAngle: 0.86, period: 146, blinkPeriod: 0, onRatio: 0.5 },
  { x: 12343, y: 0, length: 244, width: 4, baseAngle: 6.06, sweepAngle: 0, period: 146, blinkPeriod: 99, onRatio: 0.5 },
  { x: 14051, y: -263, length: 232, width: 4, baseAngle: 3.36, sweepAngle: 0, period: 146, blinkPeriod: 99, onRatio: 0.5 },
];

window.fallers = [
  { x: 3246, y: -133, size: 24, triggerX: 3096 },
  { x: 5158, y: -276, size: 32, triggerX: 4955 },
  { x: 8320, y: 130, size: 46, triggerX: 8172 },
  { x: 14745, y: -300, size: 29, triggerX: 14583 },
];

window.switches = [
  { x: 8475, y: 211, radius: 26, gateId: "g63_0" },
];
