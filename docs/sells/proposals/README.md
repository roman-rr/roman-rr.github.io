# Proposals — how to draft one

Proposals are **generated from data**, never hand-written HTML. Full rules in `../roman-proposal-playbook-v5.md` (Part: WORKFLOW).

## TL;DR

```bash
# 1. Duplicate the most recent input
cp inputs/<latest>.js inputs/YYYY-MM-DD-<slug>.js

# 2. Edit the new file — pure data only (no HTML structure, no CSS)
$EDITOR inputs/YYYY-MM-DD-<slug>.js

# 3. Build + open in browser
npm run proposal -- docs/sells/proposals/inputs/YYYY-MM-DD-<slug>.js
# or directly:
node scripts/build-proposal.mjs docs/sells/proposals/inputs/YYYY-MM-DD-<slug>.js
```

The script:
- reads `_template.html` (the frozen visual design)
- fills placeholders from your input
- writes `YYYY-MM-DD-<slug>.html` next to this README
- opens it in the default browser

## Folder layout

```
docs/sells/proposals/
├── README.md             ← this file
├── _template.html        ← frozen visual design — don't edit per-proposal
├── inputs/
│   └── <date>-<slug>.js  ← one per proposal, pure content data
└── <date>-<slug>.html    ← auto-generated from input
```

## What's in an input file

See the fully-commented example in `../roman-proposal-playbook-v5.md` under the `WORKFLOW` section, or look at any existing `inputs/*.js`.

Required fields: `h1`, `meta`, `verdict`, `coverLetter`, `bid`, `boost`, `reasoning`, `checklist`.
Optional fields: `title`, `eyebrow`, `attachments`, `qa`.

## Why this tool exists

- **Token efficiency**: input .js is ~60–100 lines of pure content vs. a 300-line HTML where 80% is CSS/structure.
- **Zero style drift**: one template source of truth, every proposal looks identical.
- **No HTML mistakes**: you can't accidentally break layout while writing content.
- **Fast iteration**: edit input → re-run script → HTML updates in place.

## Never

- Hand-write a proposal HTML file.
- Edit `_template.html` mid-session (coordinate with Roman for template changes).
- Commit a HTML output without its corresponding input .js file.

## Always

- Apply the short-visual-lines rule (Part 2 Formatting Rules) inside `coverLetter` and every `qa.list[].answer` — manual line breaks at ~60–70 char natural pauses.
- Commit both input `.js` and generated `.html` together (history + browsable output).
- Re-run the script after any input change — don't hand-edit the generated HTML.
