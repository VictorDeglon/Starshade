// Level 84 Data — "Starwell Descent"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 84";
window.levelAccent = "#ffd15c";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 721, y: 309, width: 190, height: 24 },
  { x: 1105, y: 245, width: 75, height: 26, melt: true, meltDelay: 20 },
  { x: 1374, y: 177, width: 218, height: 28, moveAxis: "y", moveRange: 94, moveSpeed: 0.047, movePhase: 2.41 },
  { x: 2029, y: 138, width: 134, height: 29, melt: true, meltDelay: 20 },
  { x: 2609, y: 122, width: 63, height: 23 },
  { x: 2889, y: 101, width: 207, height: 23, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 3096, y: 101, width: 240, height: 20 },
  { x: 3533, y: 79, width: 106, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 3828, y: 68, width: 277, height: 20 },
  { x: 4338, y: 89, width: 54, height: 18, conveyor: true, conveyorSpeed: 1.99 },
  { x: 4619, y: 96, width: 211, height: 26 },
  { x: 5280, y: 87, width: 80, height: 28, melt: true, meltDelay: 20 },
  { x: 5583, y: 85, width: 216, height: 14 },
  { x: 6022, y: 78, width: 135, height: 20 },
  { x: 6594, y: 38, width: 76, height: 30, melt: true, meltDelay: 20 },
  { x: 6874, y: -14, width: 192, height: 17, conveyor: true, conveyorSpeed: -1 },
  { x: 7066, y: -14, width: 274, height: 20 },
  { x: 7548, y: -42, width: 103, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 7835, y: -52, width: 225, height: 20 },
  { x: 8244, y: -135, width: 194, height: 17, conveyor: true, conveyorSpeed: 1.88 },
  { x: 8855, y: -215, width: 198, height: 16, moveAxis: "x", moveRange: 99, moveSpeed: 0.066, movePhase: 2.89 },
  { x: 9218, y: -321, width: 101, height: 23 },
  { x: 9730, y: -413, width: 154, height: 24, moveAxis: "y", moveRange: 115, moveSpeed: 0.062, movePhase: 2.97 },
  { x: 10049, y: -522, width: 197, height: 29 },
  { x: 10421, y: -618, width: 161, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 10582, y: -618, width: 223, height: 20 },
  { x: 10991, y: -639, width: 110, height: 16, gated: true, gateId: "g84_0" },
  { x: 11146, y: -642, width: 206, height: 20 },
  { x: 11556, y: -689, width: 216, height: 29, bounce: true, bounceStrength: -19 },
  { x: 12209, y: -729, width: 51, height: 20 },
  { x: 12706, y: -747, width: 160, height: 15 },
  { x: 13316, y: -752, width: 135, height: 23, conveyor: true, conveyorSpeed: 1.81 },
  { x: 13901, y: -762, width: 156, height: 14, bounce: true, bounceStrength: -18 },
  { x: 14057, y: -762, width: 242, height: 20 },
  { x: 14468, y: -781, width: 107, height: 16, gated: true, gateId: "g84_1" },
  { x: 14644, y: -776, width: 230, height: 20 },
  { x: 15097, y: -779, width: 108, height: 27, conveyor: true, conveyorSpeed: 0.99 },
  { x: 15438, y: -764, width: 170, height: 15, melt: true, meltDelay: 20 },
  { x: 16058, y: -773, width: 70, height: 20, bounce: true, bounceStrength: -17 },
  { x: 16345, y: -794, width: 226, height: 14, bounce: true, bounceStrength: -17 },
  { x: 17011, y: -826, width: 147, height: 20 },
  { x: 17322, y: -826, width: 280, height: 30 },
  { x: 17790, y: -898, width: 70, height: 16, moveAxis: "y", moveRange: 130, moveSpeed: 0.068, movePhase: 0.27 },
  { x: 18038, y: -986, width: 153, height: 27, conveyor: true, conveyorSpeed: -1.78 },
  { x: 18375, y: -1070, width: 150, height: 26, melt: true, meltDelay: 20 },
  { x: 18700, y: -1166, width: 53, height: 16 },
  { x: 18912, y: -1279, width: 106, height: 22 },
  { x: 19182, y: -1279, width: 362, height: 14 },
  { x: 19718, y: -1278, width: 418, height: 20 },
];

window.deadlyPlatforms = [
  { x: 8931, y: -262, width: 135, height: 14, moveAxis: "y", moveRange: 105, moveSpeed: 0.064, movePhase: 5.01 },
  { x: 9667, y: -446, width: 93, height: 19, moveAxis: "x", moveRange: 116, moveSpeed: 0.059, movePhase: 2.15 },
  { x: 944, y: 303, width: 168, height: 20 },
  { x: 2701, y: 126, width: 60, height: 20 },
  { x: 4869, y: 92, width: 158, height: 20 },
  { x: 5830, y: 94, width: 184, height: 20 },
  { x: 6185, y: 82, width: 71, height: 20 },
  { x: 9342, y: -316, width: 74, height: 20 },
  { x: 10269, y: -522, width: 176, height: 20 },
  { x: 12299, y: -730, width: 60, height: 20 },
  { x: 12900, y: -740, width: 119, height: 20 },
  { x: 18788, y: -1168, width: 60, height: 20 },
  { x: 19056, y: -1288, width: 95, height: 20 },
];

window.spikes = [
  { x: 747, y: 309, size: 12 },
  { x: 4659, y: 96, size: 24 },
  { x: 4683, y: 96, size: 16 },
  { x: 4699, y: 96, size: 45 },
  { x: 5658, y: 85, size: 21 },
  { x: 6043, y: 78, size: 63 },
  { x: 6106, y: 78, size: 36 },
  { x: 9231, y: -321, size: 22 },
  { x: 10112, y: -522, size: 49 },
  { x: 12758, y: -747, size: 38 },
  { x: 12796, y: -747, size: 26 },
  { x: 17045, y: -826, size: 59 },
  { x: 18946, y: -1279, size: 57 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 3888, y: 38, reached: false },
  { x: 7895, y: -82, reached: false },
  { x: 11206, y: -672, reached: false },
  { x: 14704, y: -806, reached: false },
  { x: 17462, y: -856, reached: false },
  { x: 19363, y: -1309, reached: false },
  { x: 19927, y: -1308, reached: false }, // Final
];

window.lasers = [
  { x: 2733, y: 79, length: 248, width: 4, baseAngle: 0.94, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 3176, y: 35, length: 179, width: 4, baseAngle: 3.65, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 4914, y: -1, length: 205, width: 4, baseAngle: 5.16, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 6217, y: -18, length: 219, width: 4, baseAngle: 0.37, sweepAngle: 0.72, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 6732, y: -44, length: 141, width: 4, baseAngle: 0.01, sweepAngle: 1.04, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 9123, y: -277, length: 110, width: 4, baseAngle: 5.86, sweepAngle: 0.63, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 10328, y: -612, length: 129, width: 4, baseAngle: 3, sweepAngle: 1.16, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 10644, y: -672, length: 244, width: 4, baseAngle: 0.53, sweepAngle: 0.72, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 12950, y: -830, length: 208, width: 4, baseAngle: 4, sweepAngle: 0.99, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 15286, y: -830, length: 137, width: 4, baseAngle: 0.14, sweepAngle: 0, period: 136, blinkPeriod: 90, onRatio: 0.5 },
  { x: 15669, y: -819, length: 191, width: 4, baseAngle: 4.25, sweepAngle: 0.85, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 16195, y: -824, length: 101, width: 4, baseAngle: 0.34, sweepAngle: 1.1, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 17228, y: -886, length: 125, width: 4, baseAngle: 0.74, sweepAngle: 0.54, period: 136, blinkPeriod: 0, onRatio: 0.5 },
  { x: 18826, y: -1211, length: 199, width: 4, baseAngle: 4.93, sweepAngle: 0.56, period: 136, blinkPeriod: 0, onRatio: 0.5 },
];

window.fallers = [
  { x: 1253, y: 158, size: 28, triggerX: 1048 },
  { x: 1665, y: 51, size: 30, triggerX: 1517 },
  { x: 7143, y: -120, size: 53, triggerX: 6944 },
  { x: 8521, y: -220, size: 24, triggerX: 8344 },
  { x: 16659, y: -897, size: 47, triggerX: 16494 },
];

window.switches = [
  { x: 10783, y: -648, radius: 26, gateId: "g84_0" },
  { x: 14277, y: -792, radius: 26, gateId: "g84_1" },
];
