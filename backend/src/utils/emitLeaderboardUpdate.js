const { getLeaderboardEvents } = require('../constants/socketEvents');

module.exports = function emitLeaderboardUpdate(io, payload) {
  getLeaderboardEvents().forEach((eventName) => {
    io.emit(eventName, payload);
  });
};
