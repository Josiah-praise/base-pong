import { useEffect } from 'react';
import { LEADERBOARD_EVENTS } from '../constants/socketEvents';

export const useLeaderboardUpdates = (socket, onUpdate) => {
  useEffect(() => {
    if (!socket || typeof onUpdate !== 'function') {
      return undefined;
    }

    LEADERBOARD_EVENTS.forEach((eventName) => {
      socket.on(eventName, onUpdate);
    });

    return () => {
      LEADERBOARD_EVENTS.forEach((eventName) => {
        socket.off(eventName, onUpdate);
      });
    };
  }, [socket, onUpdate]);
};
