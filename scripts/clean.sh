#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

rm -rf "$ROOT_DIR/frontend/node_modules" \
       "$ROOT_DIR/backend/node_modules" \
       "$ROOT_DIR/backend/.next" \
       "$ROOT_DIR/frontend/.cache"

(cd "$ROOT_DIR/blockchain" && rm -rf out cache)

if command -v docker >/dev/null 2>&1 && [ -f "$ROOT_DIR/docker-compose.yml" ]; then
  docker compose down -v || true
fi

echo "Workspace cleaned."
