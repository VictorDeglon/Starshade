// Level 69 Data — "Molten Meridian"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 69";
window.levelAccent = "#9dff4d";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 750, y: 378, width: 137, height: 14, melt: true, meltDelay: 20 },
  { x: 1337, y: 371, width: 139, height: 27, conveyor: true, conveyorSpeed: 1.11 },
  { x: 1680, y: 321, width: 120, height: 19, moveAxis: "y", moveRange: 140, moveSpeed: 0.046, movePhase: 0.55 },
  { x: 1964, y: 321, width: 388, height: 25 },
  { x: 2763, y: 229, width: 62, height: 16, melt: true, meltDelay: 20 },
  { x: 3236, y: 137, width: 107, height: 15, bounce: true, bounceStrength: -18 },
  { x: 3518, y: 40, width: 232, height: 27, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 3750, y: 40, width: 274, height: 20 },
  { x: 4176, y: 14, width: 107, height: 16, gated: true, gateId: "g69_0" },
  { x: 4362, y: -1, width: 218, height: 20 },
  { x: 5001, y: -77, width: 182, height: 17, melt: true, meltDelay: 20 },
  { x: 5620, y: -118, width: 119, height: 18 },
  { x: 6189, y: -129, width: 108, height: 27 },
  { x: 6461, y: -129, width: 212, height: 17 },
  { x: 6916, y: -82, width: 234, height: 19 },
  { x: 7402, y: -13, width: 66, height: 23, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 7720, y: 83, width: 156, height: 19, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 8040, y: 83, width: 277, height: 28 },
  { x: 8569, y: 190, width: 149, height: 20, melt: true, meltDelay: 20 },
  { x: 8970, y: 284, width: 87, height: 20, moveAxis: "y", moveRange: 82, moveSpeed: 0.044, movePhase: 2.58 },
  { x: 9309, y: 353, width: 203, height: 18, moveAxis: "y", moveRange: 118, moveSpeed: 0.061, movePhase: 5.31 },
  { x: 9676, y: 353, width: 212, height: 23 },
  { x: 10121, y: 370, width: 171, height: 24, melt: true, meltDelay: 20 },
  { x: 10515, y: 365, width: 148, height: 22 },
  { x: 11094, y: 318, width: 159, height: 18, moveAxis: "x", moveRange: 126, moveSpeed: 0.058, movePhase: 1.51 },
  { x: 11451, y: 259, width: 202, height: 29, moveAxis: "y", moveRange: 122, moveSpeed: 0.063, movePhase: 4.01 },
  { x: 11817, y: 259, width: 217, height: 18 },
  { x: 12441, y: 158, width: 187, height: 18 },
  { x: 13035, y: 56, width: 138, height: 30, melt: true, meltDelay: 20 },
  { x: 13342, y: -47, width: 46, height: 28, moveAxis: "x", moveRange: 84, moveSpeed: 0.057, movePhase: 6.03 },
  { x: 13572, y: -127, width: 162, height: 28 },
  { x: 13898, y: -127, width: 197, height: 25 },
  { x: 14541, y: -145, width: 122, height: 21, moveAxis: "y", moveRange: 140, moveSpeed: 0.057, movePhase: 4.95 },
  { x: 14827, y: -141, width: 416, height: 20 },
];

window.deadlyPlatforms = [
  { x: 1598, y: 363, width: 105, height: 14, moveAxis: "x", moveRange: 130, moveSpeed: 0.048, movePhase: 0.37 },
  { x: 9052, y: 228, width: 65, height: 16, moveAxis: "x", moveRange: 78, moveSpeed: 0.047, movePhase: 5.15 },
  { x: 9396, y: 320, width: 140, height: 25, moveAxis: "x", moveRange: 106, moveSpeed: 0.074, movePhase: 6.12 },
  { x: 11508, y: 226, width: 165, height: 22, moveAxis: "x", moveRange: 124, moveSpeed: 0.072, movePhase: 1.67 },
  { x: 13298, y: 4, width: 50, height: 21, moveAxis: "y", moveRange: 100, moveSpeed: 0.061, movePhase: 4.66 },
  { x: 5765, y: -112, width: 60, height: 20 },
  { x: 6336, y: -130, width: 60, height: 20 },
  { x: 10694, y: 361, width: 91, height: 20 },
  { x: 13766, y: -126, width: 91, height: 20 },
];

window.spikes = [
  { x: 5636, y: -118, size: 56 },
  { x: 6207, y: -129, size: 47 },
  { x: 6955, y: -82, size: 32 },
  { x: 6987, y: -82, size: 13 },
  { x: 10544, y: 365, size: 12 },
  { x: 10556, y: 365, size: 34 },
  { x: 10590, y: 365, size: 57 },
  { x: 12477, y: 158, size: 56 },
  { x: 12533, y: 158, size: 32 },
  { x: 12565, y: 158, size: 54 },
  { x: 13606, y: -127, size: 21 },
  { x: 13627, y: -127, size: 14 },
  { x: 13641, y: -127, size: 45 },
  { x: 13686, y: -127, size: 31 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2158, y: 291, reached: false },
  { x: 4422, y: -31, reached: false },
  { x: 6567, y: -159, reached: false },
  { x: 8179, y: 53, reached: false },
  { x: 9782, y: 323, reached: false },
  { x: 11926, y: 229, reached: false },
  { x: 13997, y: -157, reached: false },
  { x: 15035, y: -171, reached: false }, // Final
];

window.forceZones = [
  { x: 11827, y: 169, width: 197, height: 90, axis: "x", force: 0.169 },
];

window.lasers = [
  { x: 2885, y: 187, length: 225, width: 4, baseAngle: 2.11, sweepAngle: 0, period: 143, blinkPeriod: 96, onRatio: 0.5 },
  { x: 3824, y: -30, length: 231, width: 4, baseAngle: 4.32, sweepAngle: 1.06, period: 143, blinkPeriod: 0, onRatio: 0.5 },
  { x: 7956, y: 40, length: 236, width: 4, baseAngle: 4, sweepAngle: 0, period: 143, blinkPeriod: 96, onRatio: 0.5 },
  { x: 12714, y: 98, length: 115, width: 4, baseAngle: 4.67, sweepAngle: 1.09, period: 143, blinkPeriod: 0, onRatio: 0.5 },
  { x: 13828, y: -210, length: 181, width: 4, baseAngle: 4.55, sweepAngle: 0, period: 143, blinkPeriod: 96, onRatio: 0.5 },
];

window.fallers = [
  { x: 1539, y: 289, size: 22, triggerX: 1353 },
  { x: 5799, y: -230, size: 31, triggerX: 5631 },
  { x: 7223, y: -206, size: 33, triggerX: 7079 },
  { x: 7558, y: -114, size: 49, triggerX: 7404 },
  { x: 9127, y: 177, size: 43, triggerX: 8931 },
];

window.switches = [
  { x: 4002, y: 10, radius: 26, gateId: "g69_0" },
];
