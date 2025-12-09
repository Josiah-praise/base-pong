const { getLeaderboardEvents } = require('../constants/socketEvents');

module.exports = function emitLeaderboardUpdate(emitter, payload) {
  if (!emitter || typeof emitter.emit !== 'function') {
    throw new Error('Emitter must expose an emit(event, payload) function');
  }

  getLeaderboardEvents().forEach((eventName) => {
    emitter.emit(eventName, payload);
  });
};
