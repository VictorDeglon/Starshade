// Level 89 Data — "The Widening Vault"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 89";
window.levelAccent = "#ffd15c";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 711, y: 290, width: 83, height: 15 },
  { x: 1211, y: 204, width: 120, height: 23, conveyor: true, conveyorSpeed: -1.98 },
  { x: 1742, y: 113, width: 201, height: 22 },
  { x: 2121, y: 24, width: 87, height: 19 },
  { x: 2383, y: -72, width: 67, height: 17 },
  { x: 2644, y: -142, width: 65, height: 27 },
  { x: 2913, y: -194, width: 114, height: 24, conveyor: true, conveyorSpeed: 2.03 },
  { x: 3027, y: -194, width: 265, height: 20 },
  { x: 3487, y: -217, width: 99, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 3786, y: -238, width: 230, height: 20 },
  { x: 4233, y: -259, width: 160, height: 27, bounce: true, bounceStrength: -18 },
  { x: 4833, y: -287, width: 188, height: 21, melt: true, meltDelay: 20 },
  { x: 5254, y: -275, width: 190, height: 14, melt: true, meltDelay: 20 },
  { x: 5894, y: -286, width: 73, height: 28 },
  { x: 6417, y: -290, width: 165, height: 26, moveAxis: "x", moveRange: 97, moveSpeed: 0.066, movePhase: 3.34 },
  { x: 7032, y: -292, width: 106, height: 28 },
  { x: 7302, y: -292, width: 258, height: 21 },
  { x: 8006, y: -310, width: 77, height: 25 },
  { x: 8520, y: -355, width: 119, height: 18, moveAxis: "y", moveRange: 154, moveSpeed: 0.046, movePhase: 3.66 },
  { x: 8847, y: -393, width: 142, height: 28, bounce: true, bounceStrength: -19 },
  { x: 9177, y: -471, width: 84, height: 14, melt: true, meltDelay: 20 },
  { x: 9436, y: -564, width: 138, height: 30, conveyor: true, conveyorSpeed: -0.99 },
  { x: 9749, y: -658, width: 224, height: 30, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 9973, y: -658, width: 267, height: 20 },
  { x: 10437, y: -682, width: 106, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 10731, y: -701, width: 223, height: 20 },
  { x: 11132, y: -793, width: 153, height: 19, moveAxis: "y", moveRange: 136, moveSpeed: 0.058, movePhase: 0.75 },
  { x: 11696, y: -887, width: 198, height: 27 },
  { x: 12311, y: -971, width: 196, height: 21 },
  { x: 12924, y: -1048, width: 80, height: 14 },
  { x: 13431, y: -1109, width: 219, height: 21 },
  { x: 14081, y: -1156, width: 206, height: 24, bounce: true, bounceStrength: -16 },
  { x: 14451, y: -1156, width: 312, height: 28 },
  { x: 15203, y: -1183, width: 200, height: 29, melt: true, meltDelay: 20 },
  { x: 15626, y: -1185, width: 165, height: 30, moveAxis: "y", moveRange: 128, moveSpeed: 0.071, movePhase: 1.4 },
  { x: 16018, y: -1183, width: 127, height: 25, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 16378, y: -1166, width: 200, height: 16, conveyor: true, conveyorSpeed: -2.17 },
  { x: 16805, y: -1161, width: 193, height: 23, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 17225, y: -1153, width: 97, height: 19, melt: true, meltDelay: 20 },
  { x: 17322, y: -1153, width: 251, height: 20 },
  { x: 17756, y: -1174, width: 110, height: 16, gated: true, gateId: "g89_0" },
  { x: 17914, y: -1183, width: 216, height: 20 },
  { x: 18567, y: -1222, width: 220, height: 19 },
  { x: 18995, y: -1258, width: 160, height: 28, melt: true, meltDelay: 20 },
  { x: 19572, y: -1338, width: 64, height: 18, melt: true, meltDelay: 20 },
  { x: 20057, y: -1411, width: 140, height: 24, conveyor: true, conveyorSpeed: 2.11 },
  { x: 20386, y: -1401, width: 424, height: 20 },
];

window.deadlyPlatforms = [
  { x: 6334, y: -240, width: 95, height: 16, moveAxis: "y", moveRange: 88, moveSpeed: 0.062, movePhase: 2.56 },
  { x: 8593, y: -329, width: 98, height: 19, moveAxis: "x", moveRange: 126, moveSpeed: 0.052, movePhase: 4.92 },
  { x: 11199, y: -824, width: 103, height: 18, moveAxis: "x", moveRange: 146, moveSpeed: 0.064, movePhase: 5.84 },
  { x: 15699, y: -1214, width: 103, height: 14, moveAxis: "x", moveRange: 114, moveSpeed: 0.073, movePhase: 2.64 },
  { x: 827, y: 286, width: 66, height: 20 },
  { x: 1980, y: 112, width: 180, height: 20 },
  { x: 2239, y: 33, width: 68, height: 20 },
  { x: 2480, y: -77, width: 60, height: 20 },
  { x: 2748, y: -133, width: 60, height: 20 },
  { x: 7174, y: -289, width: 65, height: 20 },
  { x: 8118, y: -302, width: 60, height: 20 },
  { x: 11922, y: -879, width: 115, height: 20 },
  { x: 12540, y: -981, width: 161, height: 20 },
  { x: 13037, y: -1058, width: 60, height: 20 },
  { x: 13687, y: -1101, width: 156, height: 20 },
  { x: 18808, y: -1214, width: 124, height: 20 },
];

window.spikes = [
  { x: 721, y: 290, size: 26 },
  { x: 2149, y: 24, size: 51 },
  { x: 2403, y: -72, size: 36 },
  { x: 5913, y: -286, size: 47 },
  { x: 7059, y: -292, size: 52 },
  { x: 8021, y: -310, size: 52 },
  { x: 11722, y: -887, size: 38 },
  { x: 11760, y: -887, size: 39 },
  { x: 11799, y: -887, size: 54 },
  { x: 12340, y: -971, size: 34 },
  { x: 12374, y: -971, size: 49 },
  { x: 12423, y: -971, size: 48 },
  { x: 12471, y: -971, size: 19 },
  { x: 12933, y: -1048, size: 17 },
  { x: 12950, y: -1048, size: 22 },
  { x: 13480, y: -1109, size: 15 },
  { x: 13495, y: -1109, size: 24 },
  { x: 13519, y: -1109, size: 17 },
  { x: 18636, y: -1222, size: 22 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 3846, y: -268, reached: false },
  { x: 7431, y: -322, reached: false },
  { x: 10791, y: -731, reached: false },
  { x: 14607, y: -1186, reached: false },
  { x: 17974, y: -1213, reached: false },
  { x: 20598, y: -1431, reached: false }, // Final
];

window.forceZones = [
  { x: 7312, y: -382, width: 238, height: 90, axis: "x", force: -0.129 },
  { x: 14461, y: -1246, width: 292, height: 90, axis: "x", force: -0.161 },
];

window.lasers = [
  { x: 892, y: 201, length: 189, width: 4, baseAngle: 6.16, sweepAngle: 0.88, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 2276, y: -67, length: 218, width: 4, baseAngle: 1.15, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 2512, y: -127, length: 149, width: 4, baseAngle: 5.12, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 2801, y: -187, length: 181, width: 4, baseAngle: 4.74, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 4491, y: -304, length: 118, width: 4, baseAngle: 4.26, sweepAngle: 0.77, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 5095, y: -331, length: 197, width: 4, baseAngle: 3.05, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 5538, y: -369, length: 243, width: 4, baseAngle: 3.19, sweepAngle: 1.14, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 6041, y: -344, length: 117, width: 4, baseAngle: 5.72, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 7204, y: -339, length: 160, width: 4, baseAngle: 4.32, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 9334, y: -568, length: 136, width: 4, baseAngle: 4.98, sweepAngle: 0.91, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 10041, y: -735, length: 130, width: 4, baseAngle: 4.12, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 11372, y: -877, length: 116, width: 4, baseAngle: 0.93, sweepAngle: 0.89, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 11977, y: -937, length: 165, width: 4, baseAngle: 4.71, sweepAngle: 1.14, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 12606, y: -1020, length: 219, width: 4, baseAngle: 2.3, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 13083, y: -1100, length: 147, width: 4, baseAngle: 2.67, sweepAngle: 0.74, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 13736, y: -1173, length: 169, width: 4, baseAngle: 0.19, sweepAngle: 0.7, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 15478, y: -1231, length: 104, width: 4, baseAngle: 1.72, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 19225, y: -1337, length: 102, width: 4, baseAngle: 1.81, sweepAngle: 0.6, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 20272, y: -1452, length: 209, width: 4, baseAngle: 4.24, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
];

window.fallers = [
  { x: 1423, y: 119, size: 24, triggerX: 1240 },
  { x: 6664, y: -426, size: 49, triggerX: 6507 },
  { x: 8157, y: -410, size: 26, triggerX: 7986 },
  { x: 8715, y: -460, size: 47, triggerX: 8557 },
  { x: 14362, y: -1270, size: 51, triggerX: 14222 },
  { x: 17384, y: -1270, size: 24, triggerX: 17189 },
  { x: 19696, y: -1455, size: 35, triggerX: 19500 },
];

window.switches = [
  { x: 17551, y: -1183, radius: 26, gateId: "g89_0" },
];
