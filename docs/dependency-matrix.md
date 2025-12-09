# Dependency Matrix

## Backend (`backend/package.json`)

| Package | Version | Purpose | Criticality |
| --- | --- | --- | --- |
| express | ^4.17.1 | REST + Socket.IO HTTP server | 🔥 High — entire API stack |
| socket.io | ^4.4.0 | Realtime channel for matches | 🔥 High — gameplay transport |
| mongoose | ^6.0.13 | Mongo driver for Player/Game data | 🔥 High — persistence |
| ethers | ^6.15.0 | Signer utilities for escrow signatures | ⚠️ Medium — staking only |
| cors | ^2.8.5 | Browser access control | ⚠️ Medium — regressions break onboarding |
| dotenv | ^17.2.3 | Loads env vars | ⚠️ Medium |
| node-fetch | ^2.6.7 | HTTP helper for service-to-service calls | ⚠️ Medium |
| uuid | ^9.0.0 | Room code generation fallback | ✅ Low |

## Frontend (`frontend/package.json`)

| Package | Version | Purpose |
| --- | --- | --- |
| react / react-dom | ^18.2.0 | UI runtime |
| react-router-dom | ^6.8.1 | Client-side routing |
| socket.io-client | ^4.6.0 | WebSocket client for matches |
| wagmi | ^2.18.1 | Web3 hooks |
| viem | ^2.38.3 | Underlying RPC client |
| @reown/appkit (+ adapter) | ^1.6.x | Wallet connection modal |
| @tanstack/react-query | ^5.90.5 | Data fetching cache |
| @testing-library/* | latest | Testing utilities |

## Blockchain (`blockchain/lib` and `foundry.toml`)

| Package | Source | Purpose |
| --- | --- | --- |
| forge-std | lib/forge-std | Foundry assertions/testing helpers |
| openzeppelin-contracts | lib/openzeppelin-contracts | ERC20 helpers & math |

## Upgrade policy

1. Prefer pnpm workspaces: run `pnpm outdated` per package before bumping.
2. Patch-level updates can land directly. Minor/major updates require a smoke test (Docker + `pnpm start`).
3. For Solidity deps, re-run `forge build` and record bytecode size deltas.
4. Document all dependency PRs in `docs/dependency-matrix.md` and mention risk level (low/medium/high).

## Dependency bump checklist

- [ ] Run `pnpm install` at root to refresh lockfiles.
- [ ] Update the relevant `package.json` or `foundry.toml` entries.
- [ ] Execute `./scripts/lint-all.sh` and `./scripts/test-all.sh`.
- [ ] (Frontend) Run `pnpm build` to ensure CRA still bundles.
- [ ] (Backend) Hit `/health` locally or via Thunder Client.
- [ ] (Blockchain) Run `forge build && forge test`.
- [ ] Update this matrix if versions change.
