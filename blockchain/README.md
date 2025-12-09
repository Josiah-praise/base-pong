# Blockchain Contracts

The `blockchain/` folder houses the `PongEscrow` smart contract, deployment scripts, and Foundry configuration for Base mainnet and Sepolia.

## Key commands

- `forge build` – compile the contracts
- `forge test` – run the Solidity tests
- `forge fmt` – format ALL Solidity files
- `forge script script/Deploy.s.sol:DeployScript --broadcast --rpc-url <RPC_URL>` – deploy the contract to a specific chain

## Notes

- Environment variables (RPC endpoints, private keys, Etherscan keys) live in `.env`. Never check secrets into git.
- The `broadcast/` folder stores deployment logs and transaction receipts. Check them after every broadcast.
- `src/PongEscrow.sol` contains the escrow logic while `script/Deploy.s.sol` shows how the contract is deployed with `vm.startBroadcast`/`vm.stopBroadcast`.
