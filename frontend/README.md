# Frontend Service

The React SPA under `frontend/` renders the lobby, gameplay canvas, and wallet-powered flows.

## Key commands

| Command | Purpose |
| --- | --- |
| `pnpm install` | Install dependencies (shared lockfile in repo root). |
| `pnpm start` | Launch Vite/CRA dev server on `http://localhost:3000`. |
| `pnpm build` | Produce static assets for Fly.io. |
| `pnpm test` | Run component tests (Jest + React Testing Library). |
| `pnpm lint` | Apply ESLint/Prettier rules (configured in root). |

## Project structure

```text
frontend/
├─ src/
│  ├─ components/      # UI building blocks (Game, MultiplayerGame, GameHistory, etc.)
│  ├─ hooks/           # Custom hooks (wallet connection, sound playback)
│  ├─ utils/           # Helpers such as `soundManager.js`
│  ├─ styles/          # CSS modules + shared variables
│  ├─ contracts/       # Generated ABIs + wagmi helpers
│  ├─ config/          # wagmi/client setup
│  ├─ constants.js     # UI copy + network constants
│  └─ App.js           # Entry point with router + providers
├─ public/
│  ├─ index.html
│  ├─ fonts/
│  └─ sounds/
└─ package.json
```

## Primary components

| Component | Responsibility | Notes |
| --- | --- | --- |
| `App` | Bootstraps providers (Web3, sound, routing). | See `src/Web3Provider.js` for wagmi config. |
| `MultiplayerGame` | Core gameplay canvas + Socket.IO wiring. | Consumes `useContract` + `soundManager`. |
| `GameHistory` / `MyWins` | Lists finished matches + claimable wins. | Hits `/games/my-wins` via backend REST. |
| `Welcome` | Landing CTA, wallet connect, quick-match entry point. | Uses audio cues in `soundManager`. |
| `SpectatorView` | Renders live matches for observers. | Subscribes to `spectateGame` events. |

## Styling conventions

- Base styles live in `src/styles/index.css`; feature-specific styles reside alongside components (`Game.css`, `GameHistory.css`, etc.).
- Prefer CSS variables defined in `:root` for neon colors and spacing.
- Keep animations GPU-friendly (translate/opacity) and document new transitions in `Game.css`.
- Use BEM-inspired class names to avoid collisions until we adopt CSS Modules.

## Sound assets

- Sound files live in `public/sounds/` and are loaded via `utils/soundManager.js` (Howler wrapper).
- Import `soundManager` inside components instead of touching Howler directly so volume/mute logic remains centralized.
- When adding new cues, extend the `SOUNDS` map in `soundManager.js` and drop the `.mp3/.wav` in `public/sounds`.

## Additional notes

- `frontend/src/hooks/useContract.js` wraps wagmi for the escrow contract; update the address in `src/constants.js` when redeploying.
- Canvas physics are authoritative from the backend, so keep UI optimizations pure (no extra physics on the client).
