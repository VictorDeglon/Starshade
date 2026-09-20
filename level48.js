// Level 48 Data — "The Withering Span"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 48";
window.levelAccent = "#b98fff";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 552, y: 465, width: 106, height: 28, melt: true, meltDelay: 20 },
  { x: 910, y: 547, width: 183, height: 26, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 1345, y: 643, width: 159, height: 17, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 1668, y: 643, width: 356, height: 17 },
  { x: 2276, y: 730, width: 46, height: 15 },
  { x: 2568, y: 788, width: 129, height: 30, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 2934, y: 820, width: 127, height: 22, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 3061, y: 820, width: 287, height: 20 },
  { x: 3548, y: 796, width: 103, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.3851020408163265 },
  { x: 3840, y: 775, width: 223, height: 20 },
  { x: 4509, y: 752, width: 90, height: 19 },
  { x: 5036, y: 715, width: 220, height: 24 },
  { x: 5454, y: 658, width: 73, height: 18, conveyor: true, conveyorSpeed: 1.7 },
  { x: 5944, y: 578, width: 54, height: 24, moveAxis: "x", moveRange: 97, moveSpeed: 0.039, movePhase: 0.1 },
  { x: 6162, y: 578, width: 264, height: 16 },
  { x: 6837, y: 490, width: 227, height: 18, melt: true, meltDelay: 20 },
  { x: 7242, y: 404, width: 131, height: 23, bounce: true, bounceStrength: -19 },
  { x: 7804, y: 357, width: 107, height: 16 },
  { x: 8124, y: 331, width: 172, height: 28 },
  { x: 8460, y: 331, width: 220, height: 25 },
  { x: 8913, y: 343, width: 86, height: 29, moveAxis: "x", moveRange: 116, moveSpeed: 0.049, movePhase: 6.12 },
  { x: 9245, y: 398, width: 192, height: 17, bounce: true, bounceStrength: -18 },
  { x: 9689, y: 468, width: 116, height: 16 },
  { x: 9969, y: 468, width: 312, height: 16 },
  { x: 10533, y: 573, width: 159, height: 19, moveAxis: "y", moveRange: 118, moveSpeed: 0.039, movePhase: 0.71 },
  { x: 10944, y: 672, width: 231, height: 17, melt: true, meltDelay: 20 },
  { x: 11427, y: 748, width: 205, height: 17, moveAxis: "x", moveRange: 112, moveSpeed: 0.057, movePhase: 0.43 },
  { x: 11796, y: 748, width: 297, height: 20 },
  { x: 12330, y: 780, width: 179, height: 16 },
  { x: 12736, y: 789, width: 139, height: 30 },
  { x: 13315, y: 763, width: 158, height: 17 },
  { x: 13626, y: 755, width: 385, height: 20 },
];

window.deadlyPlatforms = [
  { x: 6004, y: 614, width: 50, height: 21, moveAxis: "y", moveRange: 82, moveSpeed: 0.04, movePhase: 5.01 },
  { x: 8966, y: 292, width: 62, height: 19, moveAxis: "y", moveRange: 96, moveSpeed: 0.053, movePhase: 3.7 },
  { x: 11484, y: 799, width: 131, height: 23, moveAxis: "y", moveRange: 100, moveSpeed: 0.068, movePhase: 4.91 },
  { x: 2352, y: 729, width: 60, height: 20 },
  { x: 4628, y: 757, width: 71, height: 20 },
  { x: 5284, y: 714, width: 178, height: 20 },
  { x: 7947, y: 359, width: 66, height: 20 },
  { x: 8333, y: 321, width: 97, height: 20 },
  { x: 9835, y: 473, width: 68, height: 20 },
  { x: 12537, y: 772, width: 152, height: 20 },
  { x: 12912, y: 798, width: 125, height: 20 },
  { x: 13494, y: 770, width: 80, height: 20 },
];

window.spikes = [
  { x: 2287, y: 730, size: 12 },
  { x: 4539, y: 752, size: 47 },
  { x: 5076, y: 715, size: 18 },
  { x: 5094, y: 715, size: 45 },
  { x: 5139, y: 715, size: 31 },
  { x: 7840, y: 357, size: 21 },
  { x: 7861, y: 357, size: 32 },
  { x: 8168, y: 331, size: 49 },
  { x: 8217, y: 331, size: 38 },
  { x: 8255, y: 331, size: 15 },
  { x: 8270, y: 331, size: 17 },
  { x: 9705, y: 468, size: 51 },
  { x: 12377, y: 780, size: 37 },
  { x: 12757, y: 789, size: 53 },
  { x: 12810, y: 789, size: 15 },
  { x: 12825, y: 789, size: 25 },
  { x: 13339, y: 763, size: 29 },
  { x: 13368, y: 763, size: 39 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1846, y: 613, reached: false },
  { x: 3900, y: 745, reached: false },
  { x: 6294, y: 548, reached: false },
  { x: 8570, y: 301, reached: false },
  { x: 10125, y: 438, reached: false },
  { x: 11945, y: 718, reached: false },
  { x: 13819, y: 725, reached: false }, // Final
];

window.forceZones = [
  { x: 8470, y: 241, width: 200, height: 90, axis: "x", force: 0.174 },
];

window.lasers = [
  { x: 2794, y: 699, length: 225, width: 4, baseAngle: 0.54, sweepAngle: 0.5, period: 156, blinkPeriod: 0, onRatio: 0.5 },
  { x: 5330, y: 619, length: 107, width: 4, baseAngle: 0.96, sweepAngle: 0.57, period: 156, blinkPeriod: 0, onRatio: 0.5 },
  { x: 5611, y: 583, length: 226, width: 4, baseAngle: 3.19, sweepAngle: 0, period: 156, blinkPeriod: 106, onRatio: 0.5 },
  { x: 8379, y: 258, length: 141, width: 4, baseAngle: 0.27, sweepAngle: 0, period: 156, blinkPeriod: 106, onRatio: 0.5 },
  { x: 9522, y: 309, length: 118, width: 4, baseAngle: 3.78, sweepAngle: 0.54, period: 156, blinkPeriod: 0, onRatio: 0.5 },
];

window.fallers = [
  { x: 7990, y: 245, size: 30, triggerX: 7797 },
  { x: 10772, y: 486, size: 38, triggerX: 10576 },
];
