#!/usr/bin/env bash
set -euo pipefail

if [ "${SKIP_SECRET_SCAN:-0}" = "1" ]; then
  echo "Skipping secret scan because SKIP_SECRET_SCAN=1."
  exit 0
fi

PATTERN='(PRIVATE_KEY|MNEMONIC|API_KEY|ALCHEMY_KEY|INFURA|SECRET|AWS_ACCESS_KEY_ID)'

if git diff --cached --text | grep -E "$PATTERN" >/tmp/secret_scan_matches 2>/dev/null; then
  echo "\n❌ Potential secret detected in staged changes:"
  cat /tmp/secret_scan_matches
  rm -f /tmp/secret_scan_matches
  echo "\nSet SKIP_SECRET_SCAN=1 to bypass (not recommended)."
  exit 1
fi

rm -f /tmp/secret_scan_matches 2>/dev/null || true

echo "✅ No obvious secrets found in staged diff."
