const shouldLogSocketEvents = process.env.REACT_APP_DEBUG_SOCKET_EVENTS === 'true';

export const logSocketEvent = (eventName, payload) => {
  if (!shouldLogSocketEvents) {
    return;
  }

  if (typeof console !== 'undefined') {
    console.info('[socket]', eventName, payload);
  }
};
