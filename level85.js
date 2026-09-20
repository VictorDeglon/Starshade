// Level 85 Data — "The Molten Stair"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 85";
window.levelAccent = "#ffd15c";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 513, y: 357, width: 205, height: 23, moveAxis: "y", moveRange: 104, moveSpeed: 0.069, movePhase: 6.15 },
  { x: 935, y: 335, width: 45, height: 26, moveAxis: "y", moveRange: 122, moveSpeed: 0.05, movePhase: 2.59 },
  { x: 1207, y: 337, width: 93, height: 15 },
  { x: 1750, y: 328, width: 110, height: 28 },
  { x: 2087, y: 328, width: 65, height: 23, conveyor: true, conveyorSpeed: 1.56 },
  { x: 2152, y: 328, width: 245, height: 20 },
  { x: 2594, y: 316, width: 107, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 2877, y: 296, width: 241, height: 20 },
  { x: 3345, y: 300, width: 73, height: 29, melt: true, meltDelay: 20 },
  { x: 3864, y: 277, width: 129, height: 30, melt: true, meltDelay: 20 },
  { x: 4443, y: 268, width: 115, height: 20, moveAxis: "x", moveRange: 134, moveSpeed: 0.057, movePhase: 4.35 },
  { x: 4771, y: 240, width: 134, height: 27 },
  { x: 5109, y: 195, width: 160, height: 14, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 5269, y: 195, width: 284, height: 20 },
  { x: 5756, y: 169, width: 103, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 6046, y: 147, width: 247, height: 20 },
  { x: 6710, y: 68, width: 92, height: 19, conveyor: true, conveyorSpeed: 1.64 },
  { x: 7213, y: -23, width: 83, height: 24, melt: true, meltDelay: 20 },
  { x: 7703, y: -127, width: 67, height: 20 },
  { x: 8172, y: -241, width: 76, height: 19 },
  { x: 8650, y: -349, width: 131, height: 18 },
  { x: 8965, y: -429, width: 86, height: 29, melt: true, meltDelay: 20 },
  { x: 9051, y: -429, width: 266, height: 20 },
  { x: 9484, y: -468, width: 118, height: 16, gated: true, gateId: "g85_0" },
  { x: 9650, y: -476, width: 252, height: 20 },
  { x: 10329, y: -541, width: 115, height: 25 },
  { x: 10657, y: -568, width: 186, height: 28 },
  { x: 11056, y: -598, width: 79, height: 16, moveAxis: "y", moveRange: 100, moveSpeed: 0.06, movePhase: 2.41 },
  { x: 11358, y: -604, width: 72, height: 28 },
  { x: 11880, y: -605, width: 62, height: 26, conveyor: true, conveyorSpeed: -1.13 },
  { x: 12169, y: -597, width: 134, height: 25, bounce: true, bounceStrength: -16 },
  { x: 12467, y: -597, width: 203, height: 18 },
  { x: 12893, y: -606, width: 53, height: 29, moveAxis: "y", moveRange: 154, moveSpeed: 0.046, movePhase: 3.36 },
  { x: 13169, y: -617, width: 59, height: 26, bounce: true, bounceStrength: -20 },
  { x: 13441, y: -646, width: 110, height: 18 },
  { x: 13759, y: -683, width: 156, height: 14, melt: true, meltDelay: 20 },
  { x: 14342, y: -739, width: 59, height: 28 },
  { x: 14828, y: -803, width: 228, height: 15 },
  { x: 15056, y: -803, width: 272, height: 20 },
  { x: 15494, y: -827, width: 114, height: 16, gated: true, gateId: "g85_1" },
  { x: 15666, y: -838, width: 216, height: 20 },
  { x: 16293, y: -931, width: 197, height: 16, bounce: true, bounceStrength: -16 },
  { x: 16668, y: -1018, width: 73, height: 30, bounce: true, bounceStrength: -16 },
  { x: 17143, y: -1130, width: 97, height: 27, bounce: true, bounceStrength: -18 },
  { x: 17418, y: -1216, width: 151, height: 24 },
  { x: 17976, y: -1315, width: 72, height: 27, melt: true, meltDelay: 20 },
  { x: 18475, y: -1378, width: 61, height: 30, melt: true, meltDelay: 20 },
  { x: 18730, y: -1442, width: 187, height: 22 },
  { x: 19078, y: -1442, width: 397, height: 20 },
];

window.deadlyPlatforms = [
  { x: 570, y: 298, width: 156, height: 18, moveAxis: "x", moveRange: 129, moveSpeed: 0.071, movePhase: 1.98 },
  { x: 877, y: 304, width: 50, height: 23, moveAxis: "x", moveRange: 110, moveSpeed: 0.046, movePhase: 1.53 },
  { x: 4509, y: 309, width: 89, height: 25, moveAxis: "y", moveRange: 109, moveSpeed: 0.06, movePhase: 0.02 },
  { x: 11008, y: -549, width: 67, height: 21, moveAxis: "x", moveRange: 91, moveSpeed: 0.06, movePhase: 5.33 },
  { x: 12983, y: -564, width: 50, height: 24, moveAxis: "x", moveRange: 154, moveSpeed: 0.039, movePhase: 4.11 },
  { x: 1333, y: 333, width: 79, height: 20 },
  { x: 1883, y: 327, width: 87, height: 20 },
  { x: 4937, y: 230, width: 118, height: 20 },
  { x: 7802, y: -125, width: 60, height: 20 },
  { x: 8807, y: -357, width: 77, height: 20 },
  { x: 10466, y: -544, width: 84, height: 20 },
  { x: 10868, y: -567, width: 125, height: 20 },
  { x: 13576, y: -651, width: 61, height: 20 },
  { x: 14436, y: -738, width: 60, height: 20 },
  { x: 15085, y: -804, width: 180, height: 20 },
  { x: 17606, y: -1220, width: 121, height: 20 },
  { x: 18939, y: -1451, width: 138, height: 20 },
];

window.spikes = [
  { x: 1235, y: 337, size: 15 },
  { x: 1250, y: 337, size: 30 },
  { x: 1782, y: 328, size: 18 },
  { x: 1800, y: 328, size: 30 },
  { x: 4795, y: 240, size: 32 },
  { x: 4827, y: 240, size: 46 },
  { x: 7727, y: -127, size: 25 },
  { x: 8191, y: -241, size: 25 },
  { x: 8216, y: -241, size: 22 },
  { x: 8680, y: -349, size: 57 },
  { x: 10361, y: -541, size: 21 },
  { x: 10683, y: -568, size: 47 },
  { x: 10730, y: -568, size: 48 },
  { x: 11372, y: -604, size: 32 },
  { x: 13455, y: -646, size: 12 },
  { x: 14904, y: -803, size: 24 },
  { x: 14928, y: -803, size: 24 },
  { x: 17465, y: -1216, size: 61 },
  { x: 18759, y: -1442, size: 19 },
  { x: 18778, y: -1442, size: 28 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2937, y: 266, reached: false },
  { x: 6106, y: 117, reached: false },
  { x: 9710, y: -506, reached: false },
  { x: 12569, y: -627, reached: false },
  { x: 15726, y: -868, reached: false },
  { x: 19277, y: -1472, reached: false }, // Final
];

window.forceZones = [
  { x: 12477, y: -687, width: 183, height: 90, axis: "x", force: 0.168 },
];

window.lasers = [
  { x: 796, y: 283, length: 230, width: 4, baseAngle: 2.23, sweepAngle: 0.48, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 1369, y: 272, length: 135, width: 4, baseAngle: 4.59, sweepAngle: 0.86, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 1932, y: 250, length: 254, width: 4, baseAngle: 3, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 3498, y: 201, length: 114, width: 4, baseAngle: 0.57, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 4642, y: 193, length: 185, width: 4, baseAngle: 1.44, sweepAngle: 0.9, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 5329, y: 123, length: 207, width: 4, baseAngle: 2.92, sweepAngle: 0.71, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 6869, y: -12, length: 263, width: 4, baseAngle: 6.13, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 8851, y: -435, length: 213, width: 4, baseAngle: 0.91, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 12019, y: -676, length: 103, width: 4, baseAngle: 1.03, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 12397, y: -659, length: 100, width: 4, baseAngle: 1.01, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 13636, y: -717, length: 199, width: 4, baseAngle: 0.85, sweepAngle: 0.7, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 14483, y: -788, length: 185, width: 4, baseAngle: 2.06, sweepAngle: 1.01, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 16579, y: -1026, length: 175, width: 4, baseAngle: 0.58, sweepAngle: 1.15, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 17331, y: -1183, length: 200, width: 4, baseAngle: 5.59, sweepAngle: 0.78, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 18614, y: -1470, length: 243, width: 4, baseAngle: 2.37, sweepAngle: 0.61, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 18996, y: -1527, length: 138, width: 4, baseAngle: 2.7, sweepAngle: 0.8, period: 136, blinkPeriod: 0, onRatio: 0.5 },
];

window.fallers = [
  { x: 1077, y: 230, size: 30, triggerX: 892 },
  { x: 11218, y: -696, size: 52, triggerX: 11024 },
  { x: 15150, y: -921, size: 30, triggerX: 15015 },
  { x: 17643, y: -1309, size: 23, triggerX: 17468 },
  { x: 18126, y: -1447, size: 52, triggerX: 17931 },
];

window.switches = [
  { x: 9295, y: -459, radius: 26, gateId: "g85_0" },
  { x: 15306, y: -833, radius: 26, gateId: "g85_1" },
];
