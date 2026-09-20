// Level 57 Data — "The Splitting Dark"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 57";
window.levelAccent = "#50e6ff";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 731, y: 333, width: 233, height: 22 },
  { x: 1391, y: 271, width: 97, height: 28, moveAxis: "x", moveRange: 96, moveSpeed: 0.042, movePhase: 0.53 },
  { x: 1663, y: 177, width: 120, height: 30, melt: true, meltDelay: 20 },
  { x: 1947, y: 177, width: 263, height: 30 },
  { x: 2388, y: 87, width: 139, height: 20 },
  { x: 2702, y: -7, width: 118, height: 30 },
  { x: 3237, y: -91, width: 93, height: 20 },
  { x: 3330, y: -91, width: 237, height: 20 },
  { x: 3734, y: -110, width: 94, height: 16, gated: true, gateId: "g57_0" },
  { x: 3912, y: -108, width: 248, height: 20 },
  { x: 4600, y: -137, width: 184, height: 24, conveyor: true, conveyorSpeed: -1.92 },
  { x: 5017, y: -123, width: 49, height: 29, melt: true, meltDelay: 20 },
  { x: 5309, y: -80, width: 90, height: 30, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 5645, y: -26, width: 133, height: 28, moveAxis: "y", moveRange: 81, moveSpeed: 0.054, movePhase: 4.45 },
  { x: 5942, y: -26, width: 262, height: 29 },
  { x: 6456, y: 66, width: 187, height: 28, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 6895, y: 154, width: 143, height: 29, bounce: true, bounceStrength: -20 },
  { x: 7290, y: 243, width: 203, height: 26, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 7657, y: 243, width: 345, height: 21 },
  { x: 8245, y: 288, width: 165, height: 21, conveyor: true, conveyorSpeed: 1.08 },
  { x: 8643, y: 310, width: 171, height: 24, conveyor: true, conveyorSpeed: 0.95 },
  { x: 9260, y: 290, width: 231, height: 24, moveAxis: "x", moveRange: 116, moveSpeed: 0.058, movePhase: 3.68 },
  { x: 9699, y: 251, width: 224, height: 29 },
  { x: 10087, y: 251, width: 224, height: 28 },
  { x: 10728, y: 170, width: 216, height: 23, melt: true, meltDelay: 20 },
  { x: 11346, y: 60, width: 217, height: 23 },
  { x: 11980, y: -26, width: 188, height: 14, melt: true, meltDelay: 20 },
  { x: 12168, y: -26, width: 261, height: 20 },
  { x: 12638, y: -42, width: 95, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.366734693877551 },
  { x: 12922, y: -67, width: 232, height: 20 },
  { x: 13348, y: -137, width: 133, height: 24, melt: true, meltDelay: 20 },
  { x: 13912, y: -184, width: 105, height: 19, bounce: true, bounceStrength: -17 },
  { x: 14457, y: -216, width: 165, height: 16, moveAxis: "y", moveRange: 100, moveSpeed: 0.04, movePhase: 2.53 },
  { x: 14855, y: -196, width: 151, height: 21, moveAxis: "y", moveRange: 116, moveSpeed: 0.044, movePhase: 3.4 },
  { x: 15204, y: -188, width: 398, height: 20 },
];

window.deadlyPlatforms = [
  { x: 1456, y: 240, width: 67, height: 25, moveAxis: "y", moveRange: 96, moveSpeed: 0.038, movePhase: 5.82 },
  { x: 5603, y: 15, width: 95, height: 22, moveAxis: "x", moveRange: 80, moveSpeed: 0.047, movePhase: 5.89 },
  { x: 9315, y: 318, width: 160, height: 21, moveAxis: "y", moveRange: 116, moveSpeed: 0.063, movePhase: 5.84 },
  { x: 14814, y: -136, width: 118, height: 14, moveAxis: "x", moveRange: 105, moveSpeed: 0.051, movePhase: 5.52 },
  { x: 1003, y: 340, width: 140, height: 20 },
  { x: 2556, y: 92, width: 117, height: 20 },
  { x: 2857, y: 3, width: 97, height: 20 },
  { x: 3359, y: -87, width: 75, height: 20 },
  { x: 9961, y: 252, width: 189, height: 20 },
  { x: 11594, y: 64, width: 177, height: 20 },
];

window.spikes = [
  { x: 770, y: 333, size: 14 },
  { x: 2420, y: 87, size: 19 },
  { x: 2726, y: -7, size: 20 },
  { x: 2746, y: -7, size: 26 },
  { x: 3269, y: -91, size: 47 },
  { x: 9779, y: 251, size: 56 },
  { x: 9835, y: 251, size: 21 },
  { x: 9856, y: 251, size: 37 },
  { x: 11408, y: 60, size: 32 },
  { x: 11440, y: 60, size: 14 },
  { x: 11454, y: 60, size: 20 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2079, y: 147, reached: false },
  { x: 3972, y: -138, reached: false },
  { x: 6073, y: -56, reached: false },
  { x: 7830, y: 213, reached: false },
  { x: 10199, y: 221, reached: false },
  { x: 12982, y: -97, reached: false },
  { x: 15403, y: -218, reached: false }, // Final
];

window.forceZones = [
  { x: 5952, y: -116, width: 242, height: 90, axis: "x", force: -0.202 },
  { x: 10097, y: 161, width: 204, height: 90, axis: "x", force: 0.171 },
];

window.lasers = [
  { x: 4878, y: -235, length: 244, width: 4, baseAngle: 4.57, sweepAngle: 0, period: 150, blinkPeriod: 102, onRatio: 0.5 },
  { x: 8491, y: 234, length: 130, width: 4, baseAngle: 5.5, sweepAngle: 0, period: 150, blinkPeriod: 102, onRatio: 0.5 },
  { x: 10014, y: 192, length: 103, width: 4, baseAngle: 5.49, sweepAngle: 0.7, period: 150, blinkPeriod: 0, onRatio: 0.5 },
  { x: 11640, y: -35, length: 205, width: 4, baseAngle: 2.62, sweepAngle: 1.05, period: 150, blinkPeriod: 0, onRatio: 0.5 },
  { x: 14711, y: -297, length: 234, width: 4, baseAngle: 1.15, sweepAngle: 1.04, period: 150, blinkPeriod: 0, onRatio: 0.5 },
];

window.fallers = [
  { x: 2890, y: -129, size: 37, triggerX: 2682 },
  { x: 5866, y: -131, size: 24, triggerX: 5692 },
  { x: 7109, y: 17, size: 39, triggerX: 6930 },
  { x: 7565, y: 162, size: 26, triggerX: 7404 },
  { x: 13575, y: -230, size: 27, triggerX: 13377 },
];

window.switches = [
  { x: 3545, y: -121, radius: 26, gateId: "g57_0" },
];
