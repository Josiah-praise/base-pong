#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

run_frontend_tests() {
  if pnpm --dir "$ROOT_DIR/frontend" pkg get scripts | grep -q '"test"'; then
    CI=1 pnpm --dir "$ROOT_DIR/frontend" test -- --watch=false
  else
    echo "No frontend test script found; skipping."
  fi
}

run_blockchain_tests() {
  if command -v forge >/dev/null 2>&1; then
    (cd "$ROOT_DIR/blockchain" && forge test)
  else
    echo "forge not found; skipping solidity tests."
  fi
}

run_frontend_tests
run_blockchain_tests

echo "Test sweep complete."
