const { getLeaderboardEvents } = require('../constants/socketEvents');

/**
 * Emits leaderboard updates using both canonical and legacy event names.
 * Pass either the Socket.IO server or an individual socket.
 */
const shouldLogEvents = process.env.DEBUG_SOCKET_EVENTS === 'true';

module.exports = function emitLeaderboardUpdate(emitter, payload) {
  if (!emitter || typeof emitter.emit !== 'function') {
    throw new Error('Emitter must expose an emit(event, payload) function');
  }

  getLeaderboardEvents().forEach((eventName) => {
    if (shouldLogEvents && console?.info) {
      console.info('[socket] emitting %s', eventName);
    }
    emitter.emit(eventName, payload);
  });
};
