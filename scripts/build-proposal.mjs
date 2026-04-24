#!/usr/bin/env node
/**
 * build-proposal.mjs — renders a proposal HTML from an input JS file.
 *
 * Usage:
 *   node scripts/build-proposal.mjs docs/sells/proposals/inputs/<slug>.js
 *
 * Reads the input (a default-exported object), fills the frozen template at
 * docs/sells/proposals/_template.html, writes the result one level up from
 * inputs/, and opens it in the default browser.
 */

import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { exec } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const inputArg = process.argv[2];
if (!inputArg) {
  console.error('Usage: node scripts/build-proposal.mjs <input.js>');
  console.error('Example: node scripts/build-proposal.mjs docs/sells/proposals/inputs/2026-04-24-senior-ai-engineer.js');
  process.exit(1);
}

const inputPath = path.resolve(inputArg);
if (!fs.existsSync(inputPath)) {
  console.error(`[build-proposal] input not found: ${inputPath}`);
  process.exit(1);
}

const templatePath = path.join(ROOT, 'docs/sells/proposals/_template.html');
if (!fs.existsSync(templatePath)) {
  console.error(`[build-proposal] template not found: ${templatePath}`);
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf8');
const input = (await import(pathToFileURL(inputPath).href)).default;

// Required-field sanity check
const required = ['h1', 'meta', 'verdict', 'coverLetter', 'bid', 'boost', 'checklist'];
for (const key of required) {
  if (input[key] === undefined || input[key] === null) {
    console.error(`[build-proposal] missing required field in input: ${key}`);
    process.exit(1);
  }
}
if (!input.bid?.value || !input.bid?.note) {
  console.error('[build-proposal] bid must have { value, note }');
  process.exit(1);
}
if (!input.boost?.value || !input.boost?.note) {
  console.error('[build-proposal] boost must have { value, note }');
  process.exit(1);
}

// Rendering helpers
const today = new Date().toISOString().slice(0, 10);
const title = input.title ?? input.h1;
const eyebrow = input.eyebrow ?? `Proposal Draft · ${today}`;

const renderAttachments = (list = []) =>
  list
    .map(
      (a) => `      <li>
        <code>${a.path}</code>
        <span>${a.note}</span>
      </li>`
    )
    .join('\n');

const renderQA = (list = []) =>
  list
    .map(
      (q) => `    <div style="margin-bottom:14px">
      <div style="font-size:13px;color:#9898ad;margin-bottom:6px"><strong>${q.label}</strong> ${q.question}</div>
      <div class="copyable">${q.answer}</div>
    </div>`
    )
    .join('\n\n');

const renderReasoning = (list = []) =>
  list
    .map((r) => `      <li><code>${r.part}</code> <span>${r.text}</span></li>`)
    .join('\n');

const renderChecklist = (list = []) =>
  list
    .map(
      (item) => `      <li><span style="color:#2ddc82">☐</span> <span>${item}</span></li>`
    )
    .join('\n');

const hintBlock = (text) =>
  text ? ` <span class="hint">${text}</span>` : '';

const noteBlock = (text) =>
  text ? `    <div class="note" style="margin-top:14px">${text}</div>` : '';

// Substitution map
const replacements = {
  '{{TITLE}}': title,
  '{{EYEBROW}}': eyebrow,
  '{{H1}}': input.h1,
  '{{META}}': input.meta,
  '{{VERDICT}}': input.verdict,
  '{{COVER_LETTER}}': input.coverLetter,
  '{{BID_VALUE}}': input.bid.value,
  '{{BID_NOTE}}': input.bid.note,
  '{{BOOST_VALUE}}': input.boost.value,
  '{{BOOST_NOTE}}': input.boost.note,
  '{{ATTACHMENTS_HINT_BLOCK}}': hintBlock(input.attachments?.hint),
  '{{ATTACHMENTS_LIST}}': renderAttachments(input.attachments?.list),
  '{{ATTACHMENTS_NOTE_BLOCK}}': noteBlock(input.attachments?.note),
  '{{QA_HINT_BLOCK}}': hintBlock(input.qa?.hint),
  '{{QA_BLOCKS}}': renderQA(input.qa?.list),
  '{{QA_NOTE_BLOCK}}': noteBlock(input.qa?.note),
  '{{REASONING_LIST}}': renderReasoning(input.reasoning),
  '{{CHECKLIST}}': renderChecklist(input.checklist),
};

let out = template;
for (const [key, value] of Object.entries(replacements)) {
  out = out.split(key).join(value ?? '');
}

// Derive output path: one level up from inputs/, same basename, .html
const inputBasename = path.basename(inputPath, '.js');
const outputDir = path.dirname(path.dirname(inputPath));
const outputPath = path.join(outputDir, `${inputBasename}.html`);

fs.writeFileSync(outputPath, out);
console.log(`[build-proposal] ✅ built: ${path.relative(ROOT, outputPath)}`);

// Auto-open in browser (macOS)
const openCmd =
  process.platform === 'darwin'
    ? `open "${outputPath}"`
    : process.platform === 'win32'
    ? `start "" "${outputPath}"`
    : `xdg-open "${outputPath}"`;

exec(openCmd, (err) => {
  if (err) console.warn(`[build-proposal] could not auto-open: ${err.message}`);
});
