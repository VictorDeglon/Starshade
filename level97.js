// Level 97 Data — "Starshade's Trial"
// Generated to fit the established difficulty tiers (see this
// script's header and docs/gameplay.md) — every gap here is verified
// against the same physics .claude/audit-gaps.js checks, and any
// ghost-gated gap is confirmed to genuinely require the ghost platform.

window.levelText = "Level 97";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 721, y: 305, width: 51, height: 25, melt: true, meltDelay: 20 },
  { x: 1203, y: 258, width: 129, height: 20 },
  { x: 1536, y: 214, width: 102, height: 20, melt: true, meltDelay: 20 },
  { x: 2084, y: 192, width: 173, height: 14, melt: true, meltDelay: 20 },
  { x: 2707, y: 191, width: 125, height: 14, melt: true, meltDelay: 20 },
  { x: 2996, y: 191, width: 197, height: 20 },
  { x: 3643, y: 186, width: 143, height: 20 },
  { x: 4013, y: 188, width: 203, height: 27, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 4443, y: 199, width: 166, height: 20, melt: true, meltDelay: 20 },
  { x: 4832, y: 193, width: 118, height: 24 },
  { x: 5167, y: 175, width: 93, height: 15 },
  { x: 5424, y: 175, width: 370, height: 23 },
  { x: 5988, y: 108, width: 59, height: 28, melt: true, meltDelay: 20 },
  { x: 6468, y: 36, width: 128, height: 23, bounce: true, bounceStrength: -17 },
  { x: 6780, y: -47, width: 141, height: 30, bounce: true, bounceStrength: -19 },
  { x: 7323, y: -155, width: 234, height: 14 },
  { x: 7959, y: -267, width: 141, height: 29, conveyor: true, conveyorSpeed: -1.52 },
  { x: 8100, y: -267, width: 263, height: 20 },
  { x: 8572, y: -288, width: 92, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 8864, y: -299, width: 241, height: 20 },
  { x: 9512, y: -403, width: 84, height: 18, conveyor: true, conveyorSpeed: 1.53 },
  { x: 10007, y: -498, width: 131, height: 18, bounce: true, bounceStrength: -17 },
  { x: 10565, y: -557, width: 58, height: 15 },
  { x: 10821, y: -614, width: 229, height: 23, moveAxis: "x", moveRange: 120, moveSpeed: 0.079, movePhase: 3.77 },
  { x: 11263, y: -646, width: 117, height: 29, moveAxis: "x", moveRange: 136, moveSpeed: 0.066, movePhase: 3.82 },
  { x: 11603, y: -656, width: 92, height: 22, melt: true, meltDelay: 20 },
  { x: 11912, y: -675, width: 161, height: 18, bounce: true, bounceStrength: -18 },
  { x: 12073, y: -675, width: 295, height: 20 },
  { x: 12560, y: -694, width: 94, height: 20, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.35 },
  { x: 12847, y: -705, width: 231, height: 20 },
  { x: 13305, y: -694, width: 169, height: 28, ghost: true, ghostPeriod: 120, ghostOnRatio: 0.4 },
  { x: 13701, y: -689, width: 121, height: 16, melt: true, meltDelay: 20 },
  { x: 14272, y: -698, width: 155, height: 22 },
  { x: 14873, y: -719, width: 46, height: 28, bounce: true, bounceStrength: -18 },
  { x: 15369, y: -730, width: 57, height: 24, conveyor: true, conveyorSpeed: -1.46 },
  { x: 15630, y: -774, width: 180, height: 27 },
  { x: 15974, y: -774, width: 309, height: 22 },
  { x: 16700, y: -856, width: 201, height: 24, melt: true, meltDelay: 20 },
  { x: 17312, y: -947, width: 71, height: 26 },
  { x: 17794, y: -1042, width: 180, height: 18 },
  { x: 18152, y: -1132, width: 217, height: 21 },
  { x: 18771, y: -1240, width: 233, height: 17, bounce: true, bounceStrength: -19 },
  { x: 19411, y: -1345, width: 108, height: 14, conveyor: true, conveyorSpeed: -0.92 },
  { x: 19683, y: -1345, width: 278, height: 30 },
  { x: 20143, y: -1340, width: 393, height: 20 },
];

window.deadlyPlatforms = [
  { x: 10869, y: -567, width: 180, height: 23, moveAxis: "y", moveRange: 123, moveSpeed: 0.091, movePhase: 1.03 },
  { x: 11347, y: -592, width: 101, height: 24, moveAxis: "y", moveRange: 162, moveSpeed: 0.077, movePhase: 2.07 },
  { x: 1352, y: 258, width: 89, height: 20 },
  { x: 3807, y: 178, width: 93, height: 20 },
  { x: 4978, y: 196, width: 83, height: 20 },
  { x: 5290, y: 180, width: 65, height: 20 },
  { x: 7580, y: -159, width: 202, height: 20 },
  { x: 10650, y: -562, width: 60, height: 20 },
  { x: 14452, y: -692, width: 139, height: 20 },
  { x: 15839, y: -770, width: 121, height: 20 },
  { x: 17404, y: -955, width: 60, height: 20 },
  { x: 18007, y: -1034, width: 152, height: 20 },
];

window.spikes = [
  { x: 1218, y: 258, size: 35 },
  { x: 1253, y: 258, size: 49 },
  { x: 1302, y: 258, size: 20 },
  { x: 3675, y: 186, size: 52 },
  { x: 3727, y: 186, size: 23 },
  { x: 4858, y: 193, size: 47 },
  { x: 4905, y: 193, size: 30 },
  { x: 5199, y: 175, size: 37 },
  { x: 7408, y: -155, size: 44 },
  { x: 7452, y: -155, size: 61 },
  { x: 14315, y: -698, size: 54 },
  { x: 14369, y: -698, size: 24 },
  { x: 14393, y: -698, size: 15 },
  { x: 15664, y: -774, size: 38 },
  { x: 15702, y: -774, size: 55 },
  { x: 17860, y: -1042, size: 64 },
  { x: 17924, y: -1042, size: 17 },
  { x: 18210, y: -1132, size: 38 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 3095, y: 161, reached: false },
  { x: 5609, y: 145, reached: false },
  { x: 8924, y: -329, reached: false },
  { x: 12907, y: -735, reached: false },
  { x: 16129, y: -804, reached: false },
  { x: 19822, y: -1375, reached: false },
  { x: 20340, y: -1370, reached: false }, // Final
];
