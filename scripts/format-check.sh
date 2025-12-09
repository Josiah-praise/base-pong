#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

check_frontend() {
  if [ -d "$ROOT_DIR/frontend/src" ]; then
    (cd "$ROOT_DIR/frontend" && pnpm dlx prettier --check 'src/**/*.{js,jsx,css}')
  fi
}

check_backend() {
  if [ -d "$ROOT_DIR/backend/src" ]; then
    (cd "$ROOT_DIR/backend" && pnpm dlx prettier --check 'src/**/*.js')
  fi
}

check_frontend
check_backend

echo "Formatting looks good."
