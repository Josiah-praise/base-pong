import { useEffect } from 'react';
import { LEADERBOARD_EVENTS } from '../constants/socketEvents';
import { logSocketEvent } from '../utils/socketEventLogger';

/**
 * Subscribes to leaderboard socket events (new + legacy) and funnels them
 * through a single handler, optionally reporting which event fired.
 */
export const useLeaderboardUpdates = (socket, onUpdate, onEventName) => {
  useEffect(() => {
    if (!socket || typeof onUpdate !== 'function') {
      return undefined;
    }

    const listeners = new Map();

    LEADERBOARD_EVENTS.forEach((eventName) => {
      const listener = (payload) => {
        if (typeof onEventName === 'function') {
          onEventName(eventName);
        }
        onUpdate(payload);
      };
      listeners.set(eventName, listener);
      socket.on(eventName, listener);
    });

    return () => {
      listeners.forEach((listener, eventName) => {
        socket.off(eventName, listener);
      });
      listeners.clear();
    };
  }, [socket, onUpdate, onEventName]);
};
