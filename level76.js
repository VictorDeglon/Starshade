// Level 76 Data — "The Vertical Ledge"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 76";
window.levelAccent = "#bfe6ff";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 717, y: 303, width: 190, height: 22, moveAxis: "x", moveRange: 77, moveSpeed: 0.054, movePhase: 5.37 },
  { x: 1324, y: 220, width: 169, height: 15 },
  { x: 1671, y: 128, width: 174, height: 21 },
  { x: 2029, y: 48, width: 169, height: 15, moveAxis: "x", moveRange: 80, moveSpeed: 0.054, movePhase: 0.33 },
  { x: 2382, y: -31, width: 161, height: 22 },
  { x: 2960, y: -111, width: 142, height: 19 },
  { x: 3102, y: -111, width: 273, height: 20 },
  { x: 3560, y: -133, width: 118, height: 16, gated: true, gateId: "g76_0" },
  { x: 3716, y: -139, width: 240, height: 20 },
  { x: 4377, y: -210, width: 104, height: 25 },
  { x: 4679, y: -264, width: 181, height: 28, bounce: true, bounceStrength: -16 },
  { x: 5306, y: -286, width: 159, height: 29 },
  { x: 5682, y: -308, width: 124, height: 14 },
  { x: 6023, y: -322, width: 137, height: 19, bounce: true, bounceStrength: -16 },
  { x: 6393, y: -306, width: 75, height: 25, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 6468, y: -306, width: 255, height: 20 },
  { x: 6915, y: -327, width: 96, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 7203, y: -338, width: 274, height: 20 },
  { x: 7710, y: -318, width: 223, height: 19, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 8160, y: -312, width: 166, height: 26, conveyor: true, conveyorSpeed: -1.56 },
  { x: 8776, y: -317, width: 155, height: 27, melt: true, meltDelay: 20 },
  { x: 9148, y: -331, width: 122, height: 14, moveAxis: "x", moveRange: 128, moveSpeed: 0.055, movePhase: 1.56 },
  { x: 9710, y: -357, width: 113, height: 15, bounce: true, bounceStrength: -16 },
  { x: 9823, y: -357, width: 235, height: 20 },
  { x: 10245, y: -377, width: 100, height: 16, gated: true, gateId: "g76_1" },
  { x: 10403, y: -374, width: 231, height: 20 },
  { x: 10832, y: -435, width: 49, height: 19, melt: true, meltDelay: 20 },
  { x: 11298, y: -517, width: 190, height: 30, melt: true, meltDelay: 20 },
  { x: 11895, y: -617, width: 176, height: 25, melt: true, meltDelay: 20 },
  { x: 12240, y: -717, width: 151, height: 29, melt: true, meltDelay: 20 },
  { x: 12798, y: -815, width: 111, height: 17, moveAxis: "x", moveRange: 112, moveSpeed: 0.057, movePhase: 3.58 },
  { x: 13093, y: -900, width: 203, height: 14, melt: true, meltDelay: 20 },
  { x: 13707, y: -987, width: 221, height: 24 },
  { x: 14092, y: -987, width: 287, height: 19 },
  { x: 14810, y: -1036, width: 45, height: 24, conveyor: true, conveyorSpeed: -1.61 },
  { x: 15295, y: -1067, width: 79, height: 15 },
  { x: 15597, y: -1073, width: 148, height: 29, bounce: true, bounceStrength: -19 },
  { x: 16191, y: -1089, width: 123, height: 23, conveyor: true, conveyorSpeed: 1.8 },
  { x: 16537, y: -1093, width: 92, height: 27, moveAxis: "x", moveRange: 96, moveSpeed: 0.047, movePhase: 2.2 },
  { x: 16856, y: -1086, width: 128, height: 17, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 17148, y: -1086, width: 280, height: 22 },
  { x: 17661, y: -1070, width: 173, height: 30, melt: true, meltDelay: 20 },
  { x: 18280, y: -1091, width: 99, height: 20, moveAxis: "x", moveRange: 85, moveSpeed: 0.064, movePhase: 0.5 },
  { x: 18592, y: -1114, width: 87, height: 18 },
  { x: 19110, y: -1163, width: 47, height: 28 },
  { x: 19584, y: -1220, width: 159, height: 22, conveyor: true, conveyorSpeed: 1.54 },
  { x: 19917, y: -1215, width: 387, height: 20 },
];

window.deadlyPlatforms = [
  { x: 672, y: 250, width: 164, height: 19, moveAxis: "y", moveRange: 59, moveSpeed: 0.05, movePhase: 4.77 },
  { x: 2106, y: -9, width: 118, height: 18, moveAxis: "y", moveRange: 82, moveSpeed: 0.05, movePhase: 0.82 },
  { x: 12740, y: -756, width: 74, height: 21, moveAxis: "y", moveRange: 126, moveSpeed: 0.055, movePhase: 0.04 },
  { x: 16451, y: -1142, width: 78, height: 23, moveAxis: "y", moveRange: 106, moveSpeed: 0.055, movePhase: 5.09 },
  { x: 1515, y: 223, width: 142, height: 20 },
  { x: 1865, y: 128, width: 132, height: 20 },
  { x: 2581, y: -35, width: 100, height: 20 },
  { x: 3126, y: -103, width: 79, height: 20 },
  { x: 4519, y: -201, width: 61, height: 20 },
  { x: 5498, y: -278, width: 113, height: 20 },
  { x: 5832, y: -314, width: 106, height: 20 },
  { x: 13966, y: -979, width: 123, height: 20 },
  { x: 15409, y: -1074, width: 70, height: 20 },
  { x: 19194, y: -1172, width: 60, height: 20 },
];

window.spikes = [
  { x: 1359, y: 220, size: 58 },
  { x: 1417, y: 220, size: 14 },
  { x: 1701, y: 128, size: 34 },
  { x: 3009, y: -111, size: 24 },
  { x: 4393, y: -210, size: 13 },
  { x: 4406, y: -210, size: 43 },
  { x: 5339, y: -286, size: 24 },
  { x: 5363, y: -286, size: 31 },
  { x: 5394, y: -286, size: 18 },
  { x: 5710, y: -308, size: 29 },
  { x: 5739, y: -308, size: 45 },
  { x: 13761, y: -987, size: 22 },
  { x: 13783, y: -987, size: 45 },
  { x: 15304, y: -1067, size: 42 },
  { x: 18609, y: -1114, size: 15 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 3776, y: -169, reached: false },
  { x: 7263, y: -368, reached: false },
  { x: 10463, y: -404, reached: false },
  { x: 14236, y: -1017, reached: false },
  { x: 17288, y: -1116, reached: false },
  { x: 20111, y: -1245, reached: false }, // Final
];

window.forceZones = [
  { x: 14102, y: -1077, width: 267, height: 90, axis: "x", force: 0.155 },
  { x: 17158, y: -1176, width: 260, height: 90, axis: "x", force: 0.187 },
];

window.lasers = [
  { x: 2289, y: -12, length: 174, width: 4, baseAngle: 2.92, sweepAngle: 0.85, period: 142, blinkPeriod: 0, onRatio: 0.5 },
  { x: 2606, y: -103, length: 140, width: 4, baseAngle: 3, sweepAngle: 1.08, period: 142, blinkPeriod: 0, onRatio: 0.5 },
  { x: 4553, y: -254, length: 152, width: 4, baseAngle: 2.04, sweepAngle: 1.03, period: 142, blinkPeriod: 0, onRatio: 0.5 },
  { x: 6230, y: -400, length: 123, width: 4, baseAngle: 0.76, sweepAngle: 0.99, period: 142, blinkPeriod: 0, onRatio: 0.5 },
  { x: 6545, y: -385, length: 253, width: 4, baseAngle: 3.73, sweepAngle: 0, period: 142, blinkPeriod: 95, onRatio: 0.5 },
  { x: 9023, y: -373, length: 207, width: 4, baseAngle: 0.1, sweepAngle: 0, period: 142, blinkPeriod: 95, onRatio: 0.5 },
  { x: 9360, y: -428, length: 179, width: 4, baseAngle: 0.99, sweepAngle: 0, period: 142, blinkPeriod: 95, onRatio: 0.5 },
  { x: 13995, y: -1068, length: 188, width: 4, baseAngle: 5.38, sweepAngle: 0, period: 142, blinkPeriod: 95, onRatio: 0.5 },
  { x: 15463, y: -1143, length: 123, width: 4, baseAngle: 4.51, sweepAngle: 0.86, period: 142, blinkPeriod: 0, onRatio: 0.5 },
  { x: 17917, y: -1143, length: 154, width: 4, baseAngle: 1.02, sweepAngle: 0, period: 142, blinkPeriod: 95, onRatio: 0.5 },
  { x: 18467, y: -1155, length: 132, width: 4, baseAngle: 2.23, sweepAngle: 0, period: 142, blinkPeriod: 95, onRatio: 0.5 },
];

window.fallers = [
  { x: 4943, y: -348, size: 50, triggerX: 4797 },
  { x: 5869, y: -436, size: 42, triggerX: 5678 },
  { x: 8020, y: -400, size: 39, triggerX: 7849 },
  { x: 10974, y: -553, size: 47, triggerX: 10767 },
  { x: 11567, y: -619, size: 31, triggerX: 11404 },
  { x: 18749, y: -1204, size: 31, triggerX: 18546 },
];

window.switches = [
  { x: 3353, y: -141, radius: 26, gateId: "g76_0" },
  { x: 10036, y: -387, radius: 26, gateId: "g76_1" },
];
