// Level 72 Data — "The Deep Cinder"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 72";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 740, y: 347, width: 123, height: 16, melt: true, meltDelay: 20 },
  { x: 1313, y: 346, width: 202, height: 27, bounce: true, bounceStrength: -18 },
  { x: 1752, y: 374, width: 109, height: 14, melt: true, meltDelay: 20 },
  { x: 2107, y: 430, width: 145, height: 18, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 2416, y: 430, width: 317, height: 29 },
  { x: 2985, y: 532, width: 128, height: 27 },
  { x: 3365, y: 646, width: 108, height: 23, moveAxis: "x", moveRange: 94, moveSpeed: 0.051, movePhase: 3.31 },
  { x: 3725, y: 756, width: 217, height: 25, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 4194, y: 835, width: 169, height: 17, moveAxis: "x", moveRange: 98, moveSpeed: 0.063, movePhase: 1.3 },
  { x: 4363, y: 835, width: 292, height: 20 },
  { x: 4861, y: 810, width: 101, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 5154, y: 786, width: 239, height: 20 },
  { x: 5630, y: 812, width: 218, height: 30, moveAxis: "x", moveRange: 119, moveSpeed: 0.059, movePhase: 0.84 },
  { x: 6075, y: 815, width: 70, height: 16, melt: true, meltDelay: 20 },
  { x: 6585, y: 788, width: 117, height: 20 },
  { x: 7123, y: 718, width: 148, height: 18, bounce: true, bounceStrength: -17 },
  { x: 7271, y: 718, width: 251, height: 20 },
  { x: 7718, y: 695, width: 91, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 8001, y: 667, width: 279, height: 20 },
  { x: 8678, y: 550, width: 45, height: 29 },
  { x: 8888, y: 441, width: 103, height: 20, moveAxis: "x", moveRange: 95, moveSpeed: 0.055, movePhase: 2.99 },
  { x: 9150, y: 330, width: 199, height: 23 },
  { x: 9524, y: 233, width: 155, height: 14, moveAxis: "x", moveRange: 90, moveSpeed: 0.063, movePhase: 2.74 },
  { x: 9843, y: 233, width: 222, height: 19 },
  { x: 10511, y: 214, width: 148, height: 16 },
  { x: 10882, y: 212, width: 115, height: 23, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 11234, y: 249, width: 214, height: 23 },
  { x: 11612, y: 249, width: 205, height: 26 },
  { x: 12069, y: 329, width: 89, height: 26 },
  { x: 12410, y: 445, width: 100, height: 14, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 12762, y: 562, width: 98, height: 27, bounce: true, bounceStrength: -17 },
  { x: 13024, y: 562, width: 330, height: 25 },
  { x: 13606, y: 652, width: 86, height: 17, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 13938, y: 714, width: 195, height: 14, melt: true, meltDelay: 20 },
  { x: 14370, y: 742, width: 111, height: 14, melt: true, meltDelay: 20 },
  { x: 14654, y: 731, width: 393, height: 20 },
];

window.deadlyPlatforms = [
  { x: 3425, y: 680, width: 78, height: 17, moveAxis: "y", moveRange: 94, moveSpeed: 0.048, movePhase: 5.23 },
  { x: 5714, y: 770, width: 175, height: 19, moveAxis: "y", moveRange: 115, moveSpeed: 0.052, movePhase: 5.63 },
  { x: 9597, y: 274, width: 106, height: 24, moveAxis: "y", moveRange: 101, moveSpeed: 0.059, movePhase: 5.93 },
  { x: 3139, y: 537, width: 114, height: 20 },
  { x: 6726, y: 796, width: 89, height: 20 },
  { x: 8745, y: 549, width: 60, height: 20 },
  { x: 9386, y: 336, width: 159, height: 20 },
  { x: 10692, y: 209, width: 109, height: 20 },
  { x: 11479, y: 239, width: 170, height: 20 },
  { x: 12179, y: 320, width: 78, height: 20 },
];

window.spikes = [
  { x: 3026, y: 532, size: 35 },
  { x: 6620, y: 788, size: 50 },
  { x: 8689, y: 550, size: 22 },
  { x: 9181, y: 330, size: 53 },
  { x: 9234, y: 330, size: 62 },
  { x: 10553, y: 214, size: 33 },
  { x: 10586, y: 214, size: 24 },
  { x: 10610, y: 214, size: 30 },
  { x: 11306, y: 249, size: 49 },
  { x: 11355, y: 249, size: 17 },
  { x: 11372, y: 249, size: 59 },
  { x: 12101, y: 329, size: 16 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 2575, y: 400, reached: false },
  { x: 5214, y: 756, reached: false },
  { x: 8061, y: 637, reached: false },
  { x: 9954, y: 203, reached: false },
  { x: 11715, y: 219, reached: false },
  { x: 13189, y: 532, reached: false },
  { x: 14851, y: 701, reached: false }, // Final
];
