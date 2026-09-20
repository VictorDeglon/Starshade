// Level 88 Data — "Starcross Spire"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 88";
window.levelAccent = "#ffd15c";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 727, y: 315, width: 73, height: 21, conveyor: true, conveyorSpeed: -0.91 },
  { x: 994, y: 246, width: 61, height: 16, moveAxis: "x", moveRange: 148, moveSpeed: 0.046, movePhase: 0.95 },
  { x: 1472, y: 165, width: 190, height: 27 },
  { x: 2073, y: 75, width: 116, height: 26 },
  { x: 2348, y: -38, width: 51, height: 26, conveyor: true, conveyorSpeed: -2.18 },
  { x: 2399, y: -38, width: 233, height: 20 },
  { x: 2793, y: -79, width: 100, height: 16, gated: true, gateId: "g88_0" },
  { x: 2970, y: -81, width: 201, height: 20 },
  { x: 3349, y: -167, width: 91, height: 29, bounce: true, bounceStrength: -19 },
  { x: 3857, y: -251, width: 218, height: 16 },
  { x: 4496, y: -319, width: 130, height: 19, bounce: true, bounceStrength: -19 },
  { x: 4830, y: -371, width: 64, height: 27 },
  { x: 5331, y: -410, width: 128, height: 26, melt: true, meltDelay: 20 },
  { x: 5623, y: -410, width: 359, height: 22 },
  { x: 6205, y: -414, width: 57, height: 28, melt: true, meltDelay: 20 },
  { x: 6479, y: -430, width: 229, height: 14 },
  { x: 6935, y: -429, width: 200, height: 24, bounce: true, bounceStrength: -19 },
  { x: 7585, y: -432, width: 124, height: 16, melt: true, meltDelay: 20 },
  { x: 7932, y: -443, width: 161, height: 15, melt: true, meltDelay: 20 },
  { x: 8543, y: -453, width: 53, height: 29, moveAxis: "y", moveRange: 122, moveSpeed: 0.053, movePhase: 6.09 },
  { x: 8596, y: -453, width: 248, height: 20 },
  { x: 9046, y: -466, width: 107, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 9334, y: -486, width: 239, height: 20 },
  { x: 9781, y: -521, width: 172, height: 15 },
  { x: 10384, y: -570, width: 119, height: 15, moveAxis: "x", moveRange: 130, moveSpeed: 0.07, movePhase: 5.71 },
  { x: 10691, y: -645, width: 123, height: 30, bounce: true, bounceStrength: -16 },
  { x: 11231, y: -729, width: 47, height: 29, conveyor: true, conveyorSpeed: 1.74 },
  { x: 11685, y: -826, width: 148, height: 15, melt: true, meltDelay: 20 },
  { x: 11833, y: -826, width: 291, height: 20 },
  { x: 12324, y: -853, width: 104, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 12610, y: -877, width: 238, height: 20 },
  { x: 13250, y: -986, width: 212, height: 29 },
  { x: 13873, y: -1078, width: 105, height: 26 },
  { x: 14389, y: -1170, width: 179, height: 15, moveAxis: "y", moveRange: 104, moveSpeed: 0.067, movePhase: 5.38 },
  { x: 14979, y: -1259, width: 163, height: 14, moveAxis: "x", moveRange: 93, moveSpeed: 0.046, movePhase: 2.42 },
  { x: 15573, y: -1313, width: 68, height: 30, melt: true, meltDelay: 20 },
  { x: 15805, y: -1313, width: 299, height: 27 },
  { x: 16544, y: -1338, width: 94, height: 14 },
  { x: 17088, y: -1347, width: 68, height: 27 },
  { x: 17383, y: -1343, width: 134, height: 30, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 17744, y: -1338, width: 201, height: 27, moveAxis: "y", moveRange: 100, moveSpeed: 0.067, movePhase: 2.84 },
  { x: 18172, y: -1329, width: 144, height: 25, moveAxis: "x", moveRange: 119, moveSpeed: 0.047, movePhase: 3.2 },
  { x: 18543, y: -1319, width: 66, height: 17, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 18836, y: -1317, width: 195, height: 19, conveyor: true, conveyorSpeed: -1.99 },
  { x: 19195, y: -1317, width: 277, height: 19 },
  { x: 19912, y: -1344, width: 119, height: 29, melt: true, meltDelay: 20 },
  { x: 20203, y: -1331, width: 439, height: 20 },
];

window.deadlyPlatforms = [
  { x: 905, y: 275, width: 50, height: 25, moveAxis: "y", moveRange: 167, moveSpeed: 0.042, movePhase: 6.24 },
  { x: 8468, y: -411, width: 50, height: 21, moveAxis: "x", moveRange: 111, moveSpeed: 0.059, movePhase: 1.92 },
  { x: 10434, y: -618, width: 83, height: 17, moveAxis: "y", moveRange: 158, moveSpeed: 0.066, movePhase: 2.02 },
  { x: 14462, y: -1209, width: 112, height: 20, moveAxis: "x", moveRange: 120, moveSpeed: 0.084, movePhase: 0.04 },
  { x: 14917, y: -1286, width: 96, height: 15, moveAxis: "y", moveRange: 101, moveSpeed: 0.052, movePhase: 0.18 },
  { x: 17811, y: -1382, width: 143, height: 16, moveAxis: "x", moveRange: 91, moveSpeed: 0.083, movePhase: 5.65 },
  { x: 18220, y: -1378, width: 103, height: 23, moveAxis: "y", moveRange: 116, moveSpeed: 0.058, movePhase: 3.29 },
  { x: 1694, y: 173, width: 159, height: 20 },
  { x: 2210, y: 75, width: 62, height: 20 },
  { x: 4108, y: -258, width: 116, height: 20 },
  { x: 6742, y: -435, width: 194, height: 20 },
  { x: 9979, y: -529, width: 93, height: 20 },
  { x: 13486, y: -994, width: 120, height: 20 },
  { x: 13998, y: -1078, width: 60, height: 20 },
  { x: 16667, y: -1343, width: 77, height: 20 },
  { x: 17184, y: -1343, width: 61, height: 20 },
];

window.spikes = [
  { x: 1528, y: 165, size: 58 },
  { x: 1586, y: 165, size: 49 },
  { x: 2096, y: 75, size: 46 },
  { x: 3899, y: -251, size: 43 },
  { x: 3942, y: -251, size: 35 },
  { x: 3977, y: -251, size: 16 },
  { x: 3993, y: -251, size: 27 },
  { x: 4848, y: -371, size: 40 },
  { x: 6523, y: -430, size: 57 },
  { x: 6580, y: -430, size: 64 },
  { x: 9805, y: -521, size: 63 },
  { x: 9868, y: -521, size: 26 },
  { x: 9894, y: -521, size: 31 },
  { x: 13305, y: -986, size: 16 },
  { x: 13906, y: -1078, size: 36 },
  { x: 16573, y: -1338, size: 16 },
  { x: 17108, y: -1347, size: 42 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 3030, y: -111, reached: false },
  { x: 5803, y: -440, reached: false },
  { x: 9394, y: -516, reached: false },
  { x: 12670, y: -907, reached: false },
  { x: 15955, y: -1343, reached: false },
  { x: 19334, y: -1347, reached: false },
  { x: 20423, y: -1361, reached: false }, // Final
];

window.forceZones = [
  { x: 5633, y: -500, width: 339, height: 90, axis: "x", force: 0.203 },
  { x: 19205, y: -1407, width: 257, height: 90, axis: "x", force: 0.21 },
];

window.lasers = [
  { x: 885, y: 254, length: 133, width: 4, baseAngle: 1.67, sweepAngle: 1, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 1136, y: 160, length: 126, width: 4, baseAngle: 5.13, sweepAngle: 0.81, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 1744, y: 70, length: 122, width: 4, baseAngle: 2.71, sweepAngle: 0.87, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 2256, y: 26, length: 251, width: 4, baseAngle: 2.6, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 2473, y: -89, length: 240, width: 4, baseAngle: 4.16, sweepAngle: 0.99, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 4139, y: -338, length: 151, width: 4, baseAngle: 3.67, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 4993, y: -449, length: 100, width: 4, baseAngle: 2.4, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 7220, y: -502, length: 194, width: 4, baseAngle: 1.19, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 7794, y: -492, length: 181, width: 4, baseAngle: 1.32, sweepAngle: 0.51, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 8685, y: -546, length: 160, width: 4, baseAngle: 5.57, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 11353, y: -794, length: 209, width: 4, baseAngle: 1.49, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 13525, y: -1065, length: 206, width: 4, baseAngle: 3.08, sweepAngle: 0.99, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 16707, y: -1387, length: 234, width: 4, baseAngle: 6.12, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 17253, y: -1409, length: 250, width: 4, baseAngle: 2.07, sweepAngle: 0.75, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 19098, y: -1366, length: 217, width: 4, baseAngle: 1.98, sweepAngle: 1.03, period: 136, blinkPeriod: 0, onRatio: 0.5 },
];

window.fallers = [
  { x: 6361, y: -500, size: 29, triggerX: 6166 },
  { x: 10039, y: -612, size: 52, triggerX: 9845 },
  { x: 11927, y: -917, size: 32, triggerX: 11719 },
  { x: 14657, y: -1281, size: 37, triggerX: 14460 },
  { x: 15227, y: -1395, size: 23, triggerX: 15031 },
  { x: 15707, y: -1393, size: 34, triggerX: 15540 },
  { x: 17609, y: -1455, size: 54, triggerX: 17400 },
  { x: 20107, y: -1425, size: 50, triggerX: 19927 },
];

window.switches = [
  { x: 2610, y: -68, radius: 26, gateId: "g88_0" },
];
