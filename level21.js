// Level 21 Data — "Starlit Precipice"
// Generated to fit the established difficulty curve (see
// docs/gameplay.md) — every gap here is verified against the same
// physics .claude/audit-gaps.js checks, and any ghost-gated gap is
// confirmed to genuinely require the ghost platform.

window.levelText = "Level 21";

window.platforms = [
  { x: 50, y: 380, width: 250, height: 20 },
  { x: 488, y: 320, width: 100, height: 25 },
  { x: 997, y: 272, width: 226, height: 19 },
  { x: 1429, y: 256, width: 68, height: 18, melt: true, meltDelay: 22 },
  { x: 1661, y: 256, width: 213, height: 18 },
  { x: 2099, y: 285, width: 67, height: 18, ghost: true, ghostPeriod: 134, ghostOnRatio: 0.4434782608695652 },
  { x: 2396, y: 323, width: 130, height: 25 },
  { x: 2766, y: 394, width: 197, height: 30, ghost: true, ghostPeriod: 134, ghostOnRatio: 0.4434782608695652 },
  { x: 3197, y: 456, width: 129, height: 20, ghost: true, ghostPeriod: 134, ghostOnRatio: 0.4434782608695652 },
  { x: 3326, y: 456, width: 254, height: 20 },
  { x: 3772, y: 444, width: 108, height: 20, ghost: true, ghostPeriod: 132, ghostOnRatio: 0.4347826086956521 },
  { x: 4056, y: 429, width: 264, height: 20 },
  { x: 4560, y: 512, width: 173, height: 14 },
  { x: 4967, y: 571, width: 122, height: 14 },
  { x: 5319, y: 612, width: 117, height: 21, melt: true, meltDelay: 22 },
  { x: 5436, y: 612, width: 258, height: 20 },
  { x: 5885, y: 593, width: 108, height: 20, ghost: true, ghostPeriod: 132, ghostOnRatio: 0.4347826086956521 },
  { x: 6175, y: 577, width: 236, height: 20 },
  { x: 6839, y: 573, width: 87, height: 15 },
  { x: 7138, y: 562, width: 85, height: 20 },
  { x: 7411, y: 507, width: 228, height: 25 },
  { x: 8039, y: 440, width: 87, height: 29 },
  { x: 8290, y: 440, width: 195, height: 24 },
  { x: 8655, y: 353, width: 205, height: 21 },
  { x: 9044, y: 286, width: 124, height: 27 },
  { x: 9574, y: 227, width: 60, height: 14 },
  { x: 10040, y: 169, width: 152, height: 20 },
  { x: 10356, y: 169, width: 264, height: 30 },
  { x: 11044, y: 152, width: 96, height: 27, melt: true, meltDelay: 22 },
  { x: 11365, y: 181, width: 64, height: 24, ghost: true, ghostPeriod: 134, ghostOnRatio: 0.4434782608695652 },
  { x: 11654, y: 213, width: 167, height: 19 },
  { x: 12020, y: 218, width: 387, height: 20 },
];

window.deadlyPlatforms = [
  { x: 626, y: 322, width: 60, height: 20 },
  { x: 1251, y: 265, width: 168, height: 20 },
  { x: 2558, y: 332, width: 114, height: 20 },
  { x: 8165, y: 442, width: 60, height: 20 },
  { x: 8896, y: 362, width: 184, height: 20 },
  { x: 9671, y: 219, width: 60, height: 20 },
  { x: 11853, y: 215, width: 135, height: 20 },
];

window.spikes = [
  { x: 1030, y: 272, size: 25 },
  { x: 1055, y: 272, size: 34 },
  { x: 1089, y: 272, size: 36 },
  { x: 2438, y: 323, size: 33 },
  { x: 2471, y: 323, size: 34 },
  { x: 6850, y: 573, size: 24 },
  { x: 7492, y: 507, size: 29 },
  { x: 8052, y: 440, size: 42 },
  { x: 9586, y: 227, size: 41 },
  { x: 10064, y: 169, size: 47 },
  { x: 11679, y: 213, size: 43 },
  { x: 11722, y: 213, size: 44 },
  { x: 11766, y: 213, size: 16 },
];

window.checkpoints = [
  { x: 150, y: 350, reached: false },
  { x: 1768, y: 226, reached: false },
  { x: 4116, y: 399, reached: false },
  { x: 6235, y: 547, reached: false },
  { x: 8388, y: 410, reached: false },
  { x: 10488, y: 139, reached: false },
  { x: 12214, y: 188, reached: false }, // Final
];
