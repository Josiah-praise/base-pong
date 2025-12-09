#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

run_frontend_lint() {
  if pnpm --dir "$ROOT_DIR/frontend" pkg get scripts | grep -q '"lint"'; then
    pnpm --dir "$ROOT_DIR/frontend" lint
  else
    echo "Running fallback ESLint check for frontend..."
    pnpm --dir "$ROOT_DIR/frontend" exec npx eslint src --ext js,jsx --max-warnings=0
  fi
}

run_blockchain_fmt_check() {
  if command -v forge >/dev/null 2>&1; then
    (cd "$ROOT_DIR/blockchain" && forge fmt --check)
  else
    echo "forge not found; skipping solidity fmt check."
  fi
}

run_frontend_lint
run_blockchain_fmt_check

echo "Lint sweep complete."
