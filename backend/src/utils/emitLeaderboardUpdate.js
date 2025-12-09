const { getLeaderboardEvents } = require('../constants/socketEvents');

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
