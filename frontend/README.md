# Frontend Service

The React app under `frontend/` handles the lobby, matchmaking UI, canvas-based gameplay, audio cues, and leaderboard display.

## Key commands

- `pnpm install` – install dependencies
- `pnpm start` – run the dev server on `localhost:3000`
- `pnpm test` – run frontend tests

## Notes

- Shares the `src/components` folder with game-specific UI components like `MultiplayerGame` and `GameHistory`.
- Refer to `frontend/src/hooks` for custom hooks that wrap wallet/sound logic.
