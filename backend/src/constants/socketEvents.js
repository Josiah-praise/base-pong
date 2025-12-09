const SOCKET_EVENTS = Object.freeze({
  LEADERBOARD_UPDATE: 'leaderboardUpdate',
  RANKINGS_UPDATE: 'rankingsUpdate'
});

const getLeaderboardEvents = () => [
  SOCKET_EVENTS.LEADERBOARD_UPDATE,
  SOCKET_EVENTS.RANKINGS_UPDATE
];

module.exports = {
  SOCKET_EVENTS,
  getLeaderboardEvents
};
