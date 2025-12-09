export const SOCKET_EVENTS = Object.freeze({
  LEADERBOARD_UPDATE: 'leaderboardUpdate',
  RANKINGS_UPDATE: 'rankingsUpdate'
});

export const LEADERBOARD_EVENTS = [
  SOCKET_EVENTS.LEADERBOARD_UPDATE,
  SOCKET_EVENTS.RANKINGS_UPDATE
];
