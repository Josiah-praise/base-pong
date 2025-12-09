# Blockchain Contracts

Escrow logic for Base/Sepolia lives under `blockchain/`. Foundry drives compilation, testing, and deployments.

## Key commands

| Command | Purpose |
| --- | --- |
| `forge install` | Pull dependencies (OpenZeppelin, forge-std). Already checked in but safe to rerun. |
| `forge build` | Compile contracts defined in `src/`. |
| `forge test` | Run Solidity tests (see `test/PongEscrow.t.sol`). |
| `forge fmt` | Format all `.sol` files. |
| `forge script script/Deploy.s.sol:DeployScript --rpc-url <RPC_URL> --broadcast` | Deploy to the selected chain. |

## Environment variables

Create `blockchain/.env` with both Base and Sepolia settings for quick switching:

| Variable | Example | Notes |
| --- | --- | --- |
| `PRIVATE_KEY` | `0xabc123...` | EOA used for deployments. Keep it funded and never commit. |
| `BASE_RPC_URL` | `https://base-mainnet.g.alchemy.com/v2/<key>` | Production escrow lives here. |
| `BASESCAN_API_KEY` | `...` | Needed for `forge verify-contract`. |
| `SEPOLIA_RPC_URL` | `https://base-sepolia.g.alchemy.com/v2/<key>` | Testnet dress rehearsal. |
| `SEPOLIA_KEY` | `0xdef456...` | Optional alias if you separate deployers. |

Reference them in commands via `--rpc-url $BASE_RPC_URL`.

## Deployment checklist

1. `pnpm install` at repo root (ensures Foundry + js tooling ready).
2. `cd blockchain && forge build` to verify contracts compile on your platform.
3. Set correct RPC + priv key in `.env`.
4. Dry run: `forge script script/Deploy.s.sol:DeployScript --rpc-url $SEPOLIA_RPC_URL` (no `--broadcast`).
5. Broadcast to Base or Sepolia with `--broadcast --verify` (see verification flow below).
6. Capture contract address + tx hash in `DEPLOYMENT_LISK_SEPOLIA.md` or the Base equivalent doc.
7. Commit the generated `broadcast/Deploy.s.sol/<chain-id>/run-*.json` files for provenance.

## Verification flow

```bash
source blockchain/.env
forge verify-contract \
  --chain 8453 \
  --compiler-version v0.8.23+commit.f704f362 \
  --num-of-optimizations 200 \
  --constructor-args-path broadcast/Deploy.s.sol/8453/run-latest.json \
  $PONG_ESCROW_ADDRESS \
  src/PongEscrow.sol:PongEscrow
```

- Replace `8453` with `84532` for Base Sepolia.
- `run-latest.json` already contains the constructor arguments emitted by Foundry scripts.

## Scripts catalog

| Script | Description |
| --- | --- |
| `script/Deploy.s.sol` | Deploys `PongEscrow` and records the address per chain. |
| `script/Counter.s.sol` | Starter example; safe sandbox for testing broadcast plumbing. |
| `broadcast/Deploy.s.sol/<chain>/run-*.json` | Artifacts that include constructor args, bytecode hash, and deployed address. |

## Testing strategy

- **Unit tests:** `test/PongEscrow.t.sol` validates deposits, refunds, and win-claim flows. Add new invariants here before touching Solidity logic.
- **Integration tests:** Use `forge script` dry runs against Sepolia with mocked addresses to ensure calldata still matches frontend expectations.
- **Gas snapshots:** Run `forge snapshot` (todo in later chunk) to track regressions; store outputs under `broadcast/metrics/` when available.
- **Static analysis:** `forge fmt` + `forge build --sizes` catch bytecode bloat early.

## Notes

- Environment variables (RPC endpoints, private keys, Etherscan keys) live in `.env`. Never check secrets into git.
- The `broadcast/` folder stores deployment logs and transaction receipts. Check them after every broadcast.
- `src/PongEscrow.sol` contains the escrow logic while `script/Deploy.s.sol` shows how the contract is deployed with `vm.startBroadcast`/`vm.stopBroadcast`.
