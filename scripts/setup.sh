#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

printf '\n➡️  Installing root dependencies...\n'
pnpm --dir "$ROOT_DIR" install || true

printf '\n➡️  Installing frontend dependencies...\n'
pnpm --dir "$ROOT_DIR/frontend" install

printf '\n➡️  Installing backend dependencies...\n'
pnpm --dir "$ROOT_DIR/backend" install

if command -v forge >/dev/null 2>&1; then
  printf '\n➡️  Ensuring Foundry libs are installed...\n'
  (cd "$ROOT_DIR/blockchain" && forge install)
else
  printf '\n⚠️  forge command not found; skipping Foundry dependency install.\n'
fi

printf '\n✅ Setup complete.\n'
