#!/usr/bin/env bash
# Clone the private sales-playbook repo into docs/sells/.
# Run once on a fresh checkout of roman-rr.github.io.
# Full context in docs/deployment.md.
set -e

SELLS_DIR="docs/sells"
REMOTE="git@github.com:roman-rr/roman-upwork-sells-playbook.git"

if [ -d "$SELLS_DIR/.git" ]; then
  echo "[sells-setup] Already set up at $SELLS_DIR. Pulling latest instead."
  git -C "$SELLS_DIR" pull --rebase
  exit 0
fi

if [ -d "$SELLS_DIR" ] && [ "$(ls -A $SELLS_DIR 2>/dev/null)" ]; then
  echo "[sells-setup] Warning: $SELLS_DIR exists and is non-empty but is NOT a git repo."
  echo "[sells-setup] Move or back up the existing content before running setup:"
  echo "    mv $SELLS_DIR /tmp/sells-backup-\$(date +%s)"
  exit 1
fi

rm -rf "$SELLS_DIR"
git clone "$REMOTE" "$SELLS_DIR"

echo ""
echo "[sells-setup] ✅ Cloned roman-upwork-sells-playbook into $SELLS_DIR"
echo ""
echo "Workflow:"
echo "  • Edits inside $SELLS_DIR/ push to the PRIVATE repo."
echo "  • Edits elsewhere push to the PUBLIC site repo (this one)."
echo "  • npm run sells:pull   — git pull in $SELLS_DIR"
echo "  • npm run sells:push   — git push in $SELLS_DIR"
echo "  • npm run sells:status — git status in $SELLS_DIR"
