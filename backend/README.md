# Backend Service

The Node.js/Socket.IO backend lives in `backend/`. It handles room management, matchmaking, physics, and broadcasts game updates to connected clients.

## Key commands

- `pnpm install` – install dependencies
- `pnpm dev` – run the development server on `localhost:8080`
- `pnpm lint` – check ESLint rules

## Notes

- Look inside `backend/src/` for `gameManager.js`, `roomManager.js`, and `multiplayerHandler.js` to see how collisions, matchmaking, and event routing work.
- `backend/gameHandlers.js` contains legacy handlers still referenced by tests.
