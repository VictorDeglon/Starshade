// Level 77 Data — "Skybreak Chasm"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 77";
window.levelAccent = "#bfe6ff";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 711, y: 292, width: 196, height: 30 },
  { x: 1314, y: 195, width: 181, height: 16 },
  { x: 1683, y: 118, width: 213, height: 27, conveyor: true, conveyorSpeed: 1.03 },
  { x: 2090, y: 50, width: 115, height: 21 },
  { x: 2626, y: -21, width: 120, height: 28, melt: true, meltDelay: 20 },
  { x: 2954, y: -57, width: 161, height: 30, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 3115, y: -57, width: 249, height: 20 },
  { x: 3537, y: -80, width: 113, height: 16, gated: true, gateId: "g77_0" },
  { x: 3709, y: -76, width: 250, height: 20 },
  { x: 4409, y: -80, width: 60, height: 30 },
  { x: 4692, y: -89, width: 90, height: 29 },
  { x: 5009, y: -89, width: 204, height: 17, melt: true, meltDelay: 20 },
  { x: 5440, y: -78, width: 119, height: 15, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 5786, y: -70, width: 85, height: 14, bounce: true, bounceStrength: -19 },
  { x: 5871, y: -70, width: 289, height: 20 },
  { x: 6358, y: -83, width: 105, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 6640, y: -104, width: 233, height: 20 },
  { x: 7319, y: -121, width: 213, height: 24, bounce: true, bounceStrength: -18 },
  { x: 7740, y: -155, width: 99, height: 17, melt: true, meltDelay: 20 },
  { x: 8052, y: -186, width: 203, height: 18, bounce: true, bounceStrength: -18 },
  { x: 8459, y: -231, width: 177, height: 25 },
  { x: 8830, y: -299, width: 150, height: 20 },
  { x: 9168, y: -376, width: 120, height: 20, melt: true, meltDelay: 20 },
  { x: 9705, y: -459, width: 116, height: 30, melt: true, meltDelay: 20 },
  { x: 9985, y: -459, width: 395, height: 24 },
  { x: 10797, y: -544, width: 186, height: 24 },
  { x: 11171, y: -616, width: 233, height: 14 },
  { x: 11821, y: -695, width: 85, height: 24, moveAxis: "y", moveRange: 129, moveSpeed: 0.046, movePhase: 2.6 },
  { x: 12327, y: -763, width: 101, height: 20, melt: true, meltDelay: 20 },
  { x: 12865, y: -805, width: 87, height: 27, moveAxis: "y", moveRange: 132, moveSpeed: 0.047, movePhase: 1.33 },
  { x: 13398, y: -820, width: 225, height: 15 },
  { x: 13623, y: -820, width: 257, height: 20 },
  { x: 14052, y: -858, width: 95, height: 16, gated: true, gateId: "g77_1" },
  { x: 14218, y: -860, width: 250, height: 20 },
  { x: 14685, y: -872, width: 125, height: 21 },
  { x: 15033, y: -875, width: 75, height: 20, bounce: true, bounceStrength: -18 },
  { x: 15341, y: -863, width: 95, height: 15, moveAxis: "x", moveRange: 88, moveSpeed: 0.052, movePhase: 1.64 },
  { x: 15886, y: -870, width: 163, height: 17, bounce: true, bounceStrength: -17 },
  { x: 16499, y: -876, width: 178, height: 25, melt: true, meltDelay: 20 },
  { x: 17127, y: -878, width: 188, height: 19 },
  { x: 17479, y: -878, width: 298, height: 16 },
  { x: 18214, y: -915, width: 155, height: 24 },
  { x: 18790, y: -985, width: 110, height: 18, moveAxis: "y", moveRange: 135, moveSpeed: 0.06, movePhase: 4.59 },
  { x: 19317, y: -1071, width: 162, height: 26 },
  { x: 19900, y: -1143, width: 196, height: 21, moveAxis: "x", moveRange: 142, moveSpeed: 0.056, movePhase: 3.31 },
  { x: 20271, y: -1239, width: 103, height: 24, melt: true, meltDelay: 20 },
  { x: 20529, y: -1244, width: 435, height: 20 },
];

window.deadlyPlatforms = [
  { x: 12810, y: -768, width: 50, height: 25, moveAxis: "x", moveRange: 143, moveSpeed: 0.045, movePhase: 3.72 },
  { x: 15396, y: -889, width: 81, height: 20, moveAxis: "y", moveRange: 70, moveSpeed: 0.058, movePhase: 1.88 },
  { x: 18743, y: -1037, width: 85, height: 21, moveAxis: "x", moveRange: 115, moveSpeed: 0.055, movePhase: 0.53 },
  { x: 19844, y: -1096, width: 172, height: 20, moveAxis: "y", moveRange: 164, moveSpeed: 0.053, movePhase: 2.85 },
  { x: 927, y: 297, width: 104, height: 20 },
  { x: 1521, y: 187, width: 148, height: 20 },
  { x: 2231, y: 40, width: 60, height: 20 },
  { x: 4496, y: -85, width: 60, height: 20 },
  { x: 4821, y: -91, width: 60, height: 20 },
  { x: 8664, y: -237, width: 110, height: 20 },
  { x: 9012, y: -306, width: 119, height: 20 },
  { x: 11004, y: -546, width: 119, height: 20 },
  { x: 11432, y: -620, width: 165, height: 20 },
  { x: 13654, y: -829, width: 113, height: 20 },
  { x: 14831, y: -872, width: 112, height: 20 },
  { x: 17344, y: -886, width: 114, height: 20 },
  { x: 18390, y: -924, width: 122, height: 20 },
  { x: 19502, y: -1063, width: 93, height: 20 },
];

window.spikes = [
  { x: 743, y: 292, size: 32 },
  { x: 775, y: 292, size: 23 },
  { x: 798, y: 292, size: 42 },
  { x: 1358, y: 195, size: 35 },
  { x: 1393, y: 195, size: 27 },
  { x: 1420, y: 195, size: 51 },
  { x: 1471, y: 195, size: 12 },
  { x: 2110, y: 50, size: 41 },
  { x: 4714, y: -89, size: 23 },
  { x: 8517, y: -231, size: 18 },
  { x: 10835, y: -544, size: 32 },
  { x: 11230, y: -616, size: 49 },
  { x: 11279, y: -616, size: 30 },
  { x: 13443, y: -820, size: 35 },
  { x: 13478, y: -820, size: 24 },
  { x: 13502, y: -820, size: 24 },
  { x: 14728, y: -872, size: 17 },
  { x: 14745, y: -872, size: 31 },
  { x: 18258, y: -915, size: 49 },
  { x: 19362, y: -1071, size: 60 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 3769, y: -106, reached: false },
  { x: 6700, y: -134, reached: false },
  { x: 10183, y: -489, reached: false },
  { x: 14278, y: -890, reached: false },
  { x: 17628, y: -908, reached: false },
  { x: 20747, y: -1274, reached: false }, // Final
];

window.forceZones = [
  { x: 17489, y: -968, width: 278, height: 90, axis: "x", force: 0.179 },
];

window.lasers = [
  { x: 1555, y: 96, length: 207, width: 4, baseAngle: 5.6, sweepAngle: 0, period: 141, blinkPeriod: 94, onRatio: 0.5 },
  { x: 2837, y: -67, length: 241, width: 4, baseAngle: 4.48, sweepAngle: 0.65, period: 141, blinkPeriod: 0, onRatio: 0.5 },
  { x: 4868, y: -136, length: 116, width: 4, baseAngle: 2.61, sweepAngle: 0.5, period: 141, blinkPeriod: 0, onRatio: 0.5 },
  { x: 5285, y: -129, length: 179, width: 4, baseAngle: 6.09, sweepAngle: 0, period: 141, blinkPeriod: 94, onRatio: 0.5 },
  { x: 7607, y: -215, length: 213, width: 4, baseAngle: 5.3, sweepAngle: 0, period: 141, blinkPeriod: 94, onRatio: 0.5 },
  { x: 8722, y: -306, length: 199, width: 4, baseAngle: 3.17, sweepAngle: 0.91, period: 141, blinkPeriod: 0, onRatio: 0.5 },
  { x: 9073, y: -361, length: 165, width: 4, baseAngle: 3.36, sweepAngle: 0, period: 141, blinkPeriod: 94, onRatio: 0.5 },
  { x: 9383, y: -431, length: 100, width: 4, baseAngle: 6.14, sweepAngle: 0, period: 141, blinkPeriod: 94, onRatio: 0.5 },
  { x: 11492, y: -693, length: 219, width: 4, baseAngle: 0.82, sweepAngle: 0, period: 141, blinkPeriod: 94, onRatio: 0.5 },
  { x: 14903, y: -921, length: 110, width: 4, baseAngle: 1.37, sweepAngle: 0, period: 141, blinkPeriod: 94, onRatio: 0.5 },
  { x: 16744, y: -963, length: 247, width: 4, baseAngle: 0.32, sweepAngle: 0, period: 141, blinkPeriod: 94, onRatio: 0.5 },
  { x: 17402, y: -956, length: 192, width: 4, baseAngle: 0.51, sweepAngle: 0, period: 141, blinkPeriod: 94, onRatio: 0.5 },
];

window.fallers = [
  { x: 11997, y: -814, size: 44, triggerX: 11807 },
  { x: 12501, y: -881, size: 32, triggerX: 12301 },
  { x: 13017, y: -897, size: 48, triggerX: 12853 },
];

window.switches = [
  { x: 3342, y: -87, radius: 26, gateId: "g77_0" },
  { x: 13858, y: -850, radius: 26, gateId: "g77_1" },
];
