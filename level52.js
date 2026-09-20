// Level 52 Data — "Voidlight Traverse"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 52";
window.levelAccent = "#50e6ff";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 711, y: 290, width: 211, height: 18 },
  { x: 1100, y: 203, width: 153, height: 17, melt: true, meltDelay: 20 },
  { x: 1670, y: 122, width: 99, height: 19, conveyor: true, conveyorSpeed: -1.14 },
  { x: 1933, y: 122, width: 207, height: 17 },
  { x: 2353, y: 93, width: 50, height: 22, conveyor: true, conveyorSpeed: 1.23 },
  { x: 2636, y: 109, width: 163, height: 30, melt: true, meltDelay: 20 },
  { x: 3045, y: 167, width: 173, height: 25, melt: true, meltDelay: 20 },
  { x: 3470, y: 236, width: 125, height: 15, melt: true, meltDelay: 20 },
  { x: 3595, y: 236, width: 276, height: 20 },
  { x: 4028, y: 204, width: 108, height: 16, gated: true, gateId: "g52_0" },
  { x: 4209, y: 200, width: 236, height: 20 },
  { x: 4697, y: 281, width: 143, height: 28, moveAxis: "x", moveRange: 107, moveSpeed: 0.037, movePhase: 6.12 },
  { x: 5092, y: 369, width: 81, height: 26 },
  { x: 5425, y: 449, width: 119, height: 27, melt: true, meltDelay: 20 },
  { x: 5544, y: 449, width: 250, height: 20 },
  { x: 5984, y: 426, width: 96, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.37693877551020405 },
  { x: 6268, y: 397, width: 228, height: 20 },
  { x: 6739, y: 446, width: 72, height: 16, melt: true, meltDelay: 20 },
  { x: 7044, y: 460, width: 102, height: 21, conveyor: true, conveyorSpeed: -1.99 },
  { x: 7373, y: 461, width: 107, height: 23, melt: true, meltDelay: 20 },
  { x: 7644, y: 461, width: 219, height: 29 },
  { x: 8057, y: 399, width: 148, height: 28, bounce: true, bounceStrength: -16 },
  { x: 8393, y: 321, width: 56, height: 14, moveAxis: "y", moveRange: 93, moveSpeed: 0.052, movePhase: 5.07 },
  { x: 8866, y: 239, width: 176, height: 17, melt: true, meltDelay: 20 },
  { x: 9206, y: 239, width: 352, height: 27 },
  { x: 9975, y: 161, width: 153, height: 17, melt: true, meltDelay: 20 },
  { x: 10316, y: 90, width: 55, height: 14, melt: true, meltDelay: 20 },
  { x: 10808, y: 54, width: 215, height: 16 },
  { x: 11469, y: 32, width: 196, height: 26 },
  { x: 11829, y: 32, width: 251, height: 17 },
  { x: 12317, y: 66, width: 147, height: 16, bounce: true, bounceStrength: -16 },
  { x: 12710, y: 123, width: 87, height: 23, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 13049, y: 211, width: 80, height: 28, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 13326, y: 222, width: 434, height: 20 },
];

window.deadlyPlatforms = [
  { x: 954, y: 295, width: 140, height: 20 },
  { x: 5196, y: 360, width: 60, height: 20 },
  { x: 11056, y: 45, width: 109, height: 20 },
  { x: 11697, y: 39, width: 103, height: 20 },
];

window.spikes = [
  { x: 788, y: 290, size: 13 },
  { x: 801, y: 290, size: 32 },
  { x: 833, y: 290, size: 47 },
  { x: 5111, y: 369, size: 15 },
  { x: 10838, y: 54, size: 44 },
  { x: 10882, y: 54, size: 23 },
  { x: 10905, y: 54, size: 51 },
  { x: 11534, y: 32, size: 34 },
  { x: 11568, y: 32, size: 20 },
  { x: 11588, y: 32, size: 19 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2037, y: 92, reached: false },
  { x: 4269, y: 170, reached: false },
  { x: 6328, y: 367, reached: false },
  { x: 7754, y: 431, reached: false },
  { x: 9382, y: 209, reached: false },
  { x: 11955, y: 2, reached: false },
  { x: 13543, y: 192, reached: false }, // Final
];

window.forceZones = [
  { x: 1943, y: 32, width: 187, height: 90, axis: "x", force: -0.149 },
  { x: 7654, y: 371, width: 199, height: 90, axis: "x", force: -0.145 },
  { x: 9216, y: 149, width: 332, height: 90, axis: "x", force: 0.168 },
];

window.lasers = [
  { x: 2495, y: 36, length: 226, width: 4, baseAngle: 6.05, sweepAngle: 0, period: 153, blinkPeriod: 104, onRatio: 0.5 },
  { x: 3289, y: 103, length: 227, width: 4, baseAngle: 2.28, sweepAngle: 0, period: 153, blinkPeriod: 104, onRatio: 0.5 },
  { x: 4921, y: 238, length: 190, width: 4, baseAngle: 3.81, sweepAngle: 0, period: 153, blinkPeriod: 104, onRatio: 0.5 },
  { x: 5605, y: 391, length: 168, width: 4, baseAngle: 5.51, sweepAngle: 0, period: 153, blinkPeriod: 104, onRatio: 0.5 },
  { x: 6889, y: 394, length: 225, width: 4, baseAngle: 1.92, sweepAngle: 0.74, period: 153, blinkPeriod: 0, onRatio: 0.5 },
  { x: 9130, y: 141, length: 233, width: 4, baseAngle: 3.86, sweepAngle: 0, period: 153, blinkPeriod: 104, onRatio: 0.5 },
  { x: 10458, y: 13, length: 107, width: 4, baseAngle: 3.48, sweepAngle: 0, period: 153, blinkPeriod: 104, onRatio: 0.5 },
  { x: 11746, y: -21, length: 141, width: 4, baseAngle: 1.22, sweepAngle: 0.53, period: 153, blinkPeriod: 0, onRatio: 0.5 },
  { x: 12546, y: 15, length: 167, width: 4, baseAngle: 5.09, sweepAngle: 0, period: 153, blinkPeriod: 104, onRatio: 0.5 },
];

window.fallers = [
  { x: 2887, y: 3, size: 33, triggerX: 2683 },
  { x: 8534, y: 212, size: 24, triggerX: 8386 },
  { x: 13222, y: 87, size: 45, triggerX: 13058 },
];

window.switches = [
  { x: 3849, y: 206, radius: 26, gateId: "g52_0" },
];
