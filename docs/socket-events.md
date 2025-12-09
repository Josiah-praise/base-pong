# Socket Events

| Event                 | Notes                                 |
|----------------------|----------------------------------------|
| `leaderboardUpdate`  | Canonical leaderboard broadcast.       |
| `rankingsUpdate`     | Legacy alias kept for older clients.   |

Both are emitted together until the new name lands everywhere.

## Debugging

- Backend: set `DEBUG_SOCKET_EVENTS=true` to trace emits.
- Frontend: set `REACT_APP_DEBUG_SOCKET_EVENTS=true` to log listeners.
