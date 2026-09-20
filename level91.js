// Level 91 Data — "The Faultline Ascent"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 91";
window.levelAccent = "#4de8d8";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 737, y: 339, width: 224, height: 18, conveyor: true, conveyorSpeed: 1.09 },
  { x: 1401, y: 305, width: 64, height: 30 },
  { x: 1911, y: 288, width: 62, height: 14, bounce: true, bounceStrength: -17 },
  { x: 2190, y: 274, width: 69, height: 30 },
  { x: 2709, y: 273, width: 198, height: 16, melt: true, meltDelay: 20 },
  { x: 3071, y: 273, width: 303, height: 26 },
  { x: 3597, y: 270, width: 153, height: 29, melt: true, meltDelay: 20 },
  { x: 3977, y: 272, width: 162, height: 16 },
  { x: 4585, y: 254, width: 55, height: 22, moveAxis: "x", moveRange: 146, moveSpeed: 0.072, movePhase: 2.81 },
  { x: 4853, y: 226, width: 172, height: 25, moveAxis: "x", moveRange: 151, moveSpeed: 0.075, movePhase: 5.68 },
  { x: 5456, y: 171, width: 226, height: 17, melt: true, meltDelay: 20 },
  { x: 6109, y: 110, width: 124, height: 14 },
  { x: 6233, y: 110, width: 290, height: 20 },
  { x: 6715, y: 90, width: 105, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 6997, y: 76, width: 272, height: 20 },
  { x: 7680, y: -17, width: 193, height: 25, bounce: true, bounceStrength: -19 },
  { x: 8048, y: -111, width: 176, height: 18, melt: true, meltDelay: 20 },
  { x: 8635, y: -204, width: 133, height: 24 },
  { x: 9179, y: -296, width: 130, height: 19, melt: true, meltDelay: 20 },
  { x: 9726, y: -377, width: 87, height: 17, melt: true, meltDelay: 20 },
  { x: 9991, y: -467, width: 193, height: 20, bounce: true, bounceStrength: -17 },
  { x: 10184, y: -467, width: 289, height: 20 },
  { x: 10679, y: -479, width: 107, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 10965, y: -495, width: 267, height: 20 },
  { x: 11663, y: -547, width: 165, height: 18, melt: true, meltDelay: 20 },
  { x: 12041, y: -578, width: 79, height: 29, conveyor: true, conveyorSpeed: 1.1 },
  { x: 12566, y: -595, width: 85, height: 23 },
  { x: 13097, y: -618, width: 174, height: 19 },
  { x: 13504, y: -604, width: 228, height: 14, melt: true, meltDelay: 20 },
  { x: 13959, y: -599, width: 98, height: 27, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 14284, y: -599, width: 74, height: 29, melt: true, meltDelay: 20 },
  { x: 14358, y: -599, width: 230, height: 20 },
  { x: 14748, y: -615, width: 93, height: 16, gated: true, gateId: "g91_0" },
  { x: 14936, y: -609, width: 219, height: 20 },
  { x: 15378, y: -611, width: 153, height: 16 },
  { x: 15971, y: -645, width: 91, height: 18 },
  { x: 16502, y: -675, width: 223, height: 16, conveyor: true, conveyorSpeed: 1.51 },
  { x: 16919, y: -740, width: 102, height: 17 },
  { x: 17438, y: -824, width: 95, height: 20, moveAxis: "x", moveRange: 104, moveSpeed: 0.072, movePhase: 0.1 },
  { x: 17950, y: -903, width: 196, height: 14, bounce: true, bounceStrength: -19 },
  { x: 18310, y: -903, width: 271, height: 30 },
  { x: 18988, y: -1002, width: 177, height: 29, melt: true, meltDelay: 20 },
  { x: 19324, y: -1114, width: 227, height: 24, bounce: true, bounceStrength: -19 },
  { x: 19729, y: -1206, width: 47, height: 30, bounce: true, bounceStrength: -17 },
  { x: 19954, y: -1298, width: 70, height: 17, bounce: true, bounceStrength: -19 },
  { x: 20218, y: -1366, width: 48, height: 29, bounce: true, bounceStrength: -16 },
  { x: 20435, y: -1364, width: 436, height: 20 },
];

window.deadlyPlatforms = [
  { x: 4647, y: 208, width: 50, height: 21, moveAxis: "y", moveRange: 181, moveSpeed: 0.086, movePhase: 5.79 },
  { x: 4779, y: 278, width: 97, height: 17, moveAxis: "y", moveRange: 188, moveSpeed: 0.083, movePhase: 2.4 },
  { x: 17509, y: -796, width: 77, height: 19, moveAxis: "y", moveRange: 125, moveSpeed: 0.09, movePhase: 0.43 },
  { x: 1503, y: 311, width: 60, height: 20 },
  { x: 2292, y: 282, width: 60, height: 20 },
  { x: 4166, y: 268, width: 81, height: 20 },
  { x: 8791, y: -197, width: 97, height: 20 },
  { x: 12679, y: -588, width: 60, height: 20 },
  { x: 13295, y: -617, width: 113, height: 20 },
  { x: 15570, y: -605, width: 85, height: 20 },
  { x: 16091, y: -635, width: 76, height: 20 },
  { x: 17057, y: -749, width: 90, height: 20 },
];

window.spikes = [
  { x: 1413, y: 305, size: 14 },
  { x: 4032, y: 272, size: 25 },
  { x: 8678, y: -204, size: 57 },
  { x: 12579, y: -595, size: 58 },
  { x: 13121, y: -618, size: 25 },
  { x: 15420, y: -611, size: 16 },
  { x: 15436, y: -611, size: 33 },
  { x: 15469, y: -611, size: 53 },
  { x: 15997, y: -645, size: 39 },
  { x: 16945, y: -740, size: 54 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 3223, y: 243, reached: false },
  { x: 7057, y: 46, reached: false },
  { x: 11025, y: -525, reached: false },
  { x: 14996, y: -639, reached: false },
  { x: 18446, y: -933, reached: false },
  { x: 20653, y: -1394, reached: false }, // Final
];

window.forceZones = [
  { x: 3081, y: 183, width: 283, height: 90, axis: "x", force: 0.214 },
  { x: 18320, y: -993, width: 251, height: 90, axis: "x", force: 0.17 },
];

window.lasers = [
  { x: 2043, y: 218, length: 233, width: 4, baseAngle: 1.85, sweepAngle: 0.5, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 2352, y: 224, length: 145, width: 4, baseAngle: 0.46, sweepAngle: 0.95, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 2971, y: 216, length: 205, width: 4, baseAngle: 2.27, sweepAngle: 0.9, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 3833, y: 192, length: 231, width: 4, baseAngle: 3.66, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 4238, y: 177, length: 146, width: 4, baseAngle: 3.1, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 4713, y: 155, length: 166, width: 4, baseAngle: 5.06, sweepAngle: 1.13, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 5106, y: 161, length: 236, width: 4, baseAngle: 3.86, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 5775, y: 108, length: 120, width: 4, baseAngle: 4.13, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 6329, y: 44, length: 146, width: 4, baseAngle: 2.38, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 8844, y: -267, length: 262, width: 4, baseAngle: 5.78, sweepAngle: 0.71, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 10259, y: -561, length: 188, width: 4, baseAngle: 1.87, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 11915, y: -613, length: 132, width: 4, baseAngle: 4.74, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 12735, y: -673, length: 113, width: 4, baseAngle: 6.17, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 13350, y: -701, length: 247, width: 4, baseAngle: 5.04, sweepAngle: 0.95, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 13827, y: -693, length: 165, width: 4, baseAngle: 1.84, sweepAngle: 1.08, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 15628, y: -659, length: 194, width: 4, baseAngle: 4.03, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 16799, y: -721, length: 124, width: 4, baseAngle: 3.3, sweepAngle: 0.61, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 19643, y: -1204, length: 123, width: 4, baseAngle: 1.19, sweepAngle: 0.94, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 20096, y: -1338, length: 259, width: 4, baseAngle: 3.38, sweepAngle: 0.71, period: 136, blinkPeriod: 0, onRatio: 0.5 },
];

window.fallers = [
  { x: 7953, y: -131, size: 54, triggerX: 7758 },
  { x: 8299, y: -233, size: 30, triggerX: 8149 },
  { x: 9874, y: -473, size: 44, triggerX: 9706 },
  { x: 14455, y: -708, size: 30, triggerX: 14308 },
  { x: 16155, y: -757, size: 52, triggerX: 15969 },
  { x: 19843, y: -1345, size: 51, triggerX: 19697 },
  { x: 20331, y: -1468, size: 42, triggerX: 20177 },
];

window.switches = [
  { x: 14566, y: -629, radius: 26, gateId: "g91_0" },
];
