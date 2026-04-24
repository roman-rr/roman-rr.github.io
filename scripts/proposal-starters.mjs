#!/usr/bin/env node
/**
 * proposal-starters.mjs — lists the starter (emoji + attention word) of
 * recent proposal inputs. Pure lookup. No suggestion, no algorithm.
 *
 * Run BEFORE composing a new proposal so you can apply the rotation
 * rule from roman-proposal-playbook-v5.md (Part 2 — EMOJI distribution
 * 40/30/30 + ROTATION STRATEGY "never same on consecutive proposals").
 *
 * Usage:
 *   node scripts/proposal-starters.mjs            # last 10
 *   node scripts/proposal-starters.mjs 20         # last 20
 *   npm run proposal:starters
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const INPUTS_DIR = path.join(ROOT, 'docs/sells/proposals/inputs');
const limit = Number(process.argv[2]) || 10;

if (!fs.existsSync(INPUTS_DIR)) {
  console.error(`[proposal-starters] no inputs dir at ${INPUTS_DIR}`);
  process.exit(1);
}

const STARTER_RE = /coverLetter:\s*`\s*([⚡✅🚀])\s+([^\n]+)/;

const files = fs
  .readdirSync(INPUTS_DIR)
  .filter((f) => f.endsWith('.js'))
  .sort()
  .reverse()
  .slice(0, limit);

if (files.length === 0) {
  console.log('[proposal-starters] no input files yet.');
  process.exit(0);
}

console.log(`Recent ${files.length} proposal starters (newest first):\n`);
for (const f of files) {
  const content = fs.readFileSync(path.join(INPUTS_DIR, f), 'utf8');
  const m = content.match(STARTER_RE);
  const starter = m ? `${m[1]} ${m[2].trim()}` : '(no recognizable starter)';
  console.log(`  ${path.basename(f, '.js').padEnd(60, ' ')}  ${starter}`);
}

console.log(
  `\nThis is supplementary data only.\n` +
    `Starter selection is a QUALITATIVE decision based on:\n` +
    `  → JOB POST (its tone, asks, vocabulary, urgency)\n` +
    `  → PLAYBOOK Part 2 (emoji + attention-word options + when each fits)\n` +
    `Once conversion data exists per starter, narrow to the 1–2 proven winners\n` +
    `and stop rotating for variety's sake.\n`
);
