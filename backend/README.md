# Backend Service

Socket.IO + Express lives here. This service orchestrates matchmaking, physics, staking escrow callbacks, and leaderboard persistence.

## Key commands

| Command | Description |
| --- | --- |
| `pnpm install` | Install workspace dependencies. |
| `pnpm dev` | Start the API + Socket.IO server on `http://localhost:8080`. |
| `pnpm lint` | Run ESLint for this package. |
| `pnpm player-service` | Launches the lightweight leaderboard/player service that shares this workspace. |

## HTTP API surface

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/health` | Readiness probe with timestamp + environment echo. |
| `GET` | `/players` | Full leaderboard sorted by ELO. |
| `GET` | `/players/top?limit=10` | Top `limit` players. Aliased under `/rankings` and `/api/rankings/top`. |
| `GET` | `/players/:name` | Player profile (wins/losses, rating). Also exposed at `/api/players/:name`. |
| `POST` | `/players` | Create or upsert a player record (name, result metadata). |
| `PATCH` | `/players/:name/rating` | Persist new rating + optional win/loss outcome. |
| `POST` | `/games` | Create/update a game session; triggers winner signature for staked matches. |
| `GET` | `/games/my-wins?address=0x...` | Paginated list of staked wins for claim UI. |
| `POST` | `/games/:gameId/claimed` | Mark a win as claimed (tx hash required). |

> Tip: use Thunder Client / Insomnia collections stored in `docs/` (planned in a later chunk) or curl against `localhost:8080` after `pnpm dev`.

## Socket.IO events

The server exposes a single namespace using the default path (`/socket.io/`). Notable events:

| Event | Direction | Payload | Notes |
| --- | --- | --- | --- |
| `createRoom` | client → server | `{ player, roomCode? }` | Creates a private room. Optional `roomCode` for staked escrow sessions. |
| `joinRoom` | client → server | `{ roomCode, player }` | Joins existing room, triggers `roomReady` when both players present. |
| `findRandomMatch` | client → server | `{ player }` | Starts matchmaking queue for public games. |
| `spectateGame` | client → server | `{ roomCode }` | Adds socket to spectator list; server emits `spectatorUpdate`. |
| `getActiveGames` | client → server | `void` | Returns `{ games: [...] }` via `activeGamesList`. |
| `paddleMove` | client → server | `{ roomCode, direction }` | Forwarded to physics loop at 60 FPS. |
| `pauseGame` / `forfeitGame` | client → server | `void` | Controlled game state changes; results broadcast via `gameState`. |
| `requestRematch`/`rematchResponse` | bidirectional | metadata | Negotiates rematch using existing room. |
| `getLeaderboard` | client → server | `void` | Emits `leaderboardUpdate` with top 10. |
| `roomCreated`, `roomReady`, `waitingForPlayer2Stake`, `stakedMatchJoined` | server → client | metadata | Lifecycle notifications for UI flows. |

See `multiplayerHandler.js` for the authoritative list.

## Local development workflow

1. Copy `.env.example` → `.env` (at repo root or inside `backend/`) and set:
	- `FRONTEND_URL=http://localhost:3000`
	- `MONGODB_URI=mongodb://localhost:27017/pong-it`
2. Start Mongo locally (`docker compose up mongo` or Atlas connection).
3. Run `pnpm dev` and watch the console for:
	- `✓ Connected to MongoDB`
	- `Server running on port 8080` (from `test-server.js` or `server.js` logs)
4. (Optional) Start the standalone player service via `pnpm player-service` if you want the ELO map persisted separately.

Hot reload is provided by `nodemon` via `pnpm dev`, so edits to `src/*.js` restart automatically.

## Logging and tracing

- Server logs use emoji prefixes (`✅`, `⚠️`, `❌`) making it easy to skim Docker logs; pipe through `docker compose logs -f backend` in multi-service setups.
- Mongo/Room lifecycle logs emit the room code and socket id—redact before sharing publicly.
- For temporary debugging, prefer `logger.debug` style helpers (coming in Chunk 14) over raw `console.log` so they can be toggled.
- To trace a single game, filter by room code: `docker compose logs backend | grep XY4K2N`.

## Notes

- Review `gameManager.js`, `roomManager.js`, and `leaderboardManager.js` to understand how state moves between memory, MongoDB, and socket rooms.
- `services/signatureService.js` signs escrow winners; ensure the signer key lives in `.env` before enabling staked matches.
