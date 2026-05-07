# Deployment & hosting

Two places serve this site's content: **GitHub Pages** (the portfolio) and a **DigitalOcean droplet** (the standalone `callstack.x70.ai` mirror). Short URLs on `roman.x70.ai` are generated at build time.

A third, **private** repo holds the Upwork sales playbook and proposal drafts, mounted locally under `docs/sells/` as a nested git repo. Details in the "Private sales playbook repo" section below.

## roman.x70.ai — GitHub Pages

- **Repo:** `roman-rr/roman-rr.github.io`
- **Branch deployed:** `gh-pages` (auto-built from `master` via `npm run deploy`)
- **Custom domain:** `roman.x70.ai` — set via `CNAME` file in the published output
- **Build command:** `npm run build` — runs `tsc && vite build && node scripts/build-short-urls.mjs`

Any push to `master` triggers a rebuild. The GitHub Action publishes `dist/` to `gh-pages`, GitHub Pages serves it at `roman.x70.ai`.

### Short URL aliases

Long case-study paths (e.g. `/cases/callstack/callstack-demo.html`) get short, shareable duplicates (`/callstack`). Defined in `scripts/build-short-urls.mjs`:

```js
const aliases = [
  { short: 'ai-agents',        source: 'cases/pt-agents/pt-agents-architecture.html' },
  { short: 'ai-emails',        source: 'cases/pt-emails/pt-emails-pipeline-arch.html' },
  { short: 'ai-calls',         source: 'cases/pt-calls/pt-calls-pipeline-arch.html' },
  { short: 'ai-microsoft-365', source: 'cases/microsoft-365-v1/microsoft-365-architecture.html' },
  { short: 'callstack',        source: 'cases/callstack/callstack-demo.html' },
  { short: 'callstack-arch',   source: 'cases/callstack/callstack-arch.html' },
  { short: 'claude-setup',     source: 'cases/monster-pack-claude-setup.html' },
]
```

At build time the script copies each source HTML to `dist/<short>.html` and rewrites every relative `src`/`href` to an absolute path so assets still resolve. To add a new short URL: append an entry and push — the next build emits the new alias.

## callstack.x70.ai — self-hosted on droplet

**Why:** the Callstack pitch needed a vanity domain (`callstack.x70.ai`) without changing the URL in the address bar. GitHub Pages can only bind one custom domain per repo, and CDN-level redirects change the URL, so we host a static copy of the demo page on an existing DigitalOcean droplet.

### Infrastructure

- **Droplet:** `138.68.82.16` (SFO2 / Frankfurt, ubuntu user `rukodelius`)
- **SSH:** `ssh -i ~/.ssh/id_ed25519_aelita rukodelius@138.68.82.16`
- **Web root:** `/home/rukodelius/callstack/`
- **Nginx config:** `/etc/nginx/sites-enabled/callstack.x70.ai` (static serving, 30-day cache on media)
- **SSL:** Let's Encrypt via certbot → `/etc/letsencrypt/live/callstack.x70.ai/` (auto-renews)
- **Logs:** `/home/rukodelius/logs/callstack-access.log`, `callstack-error.log`

The page references are mostly root-absolute (`/logos/...`) or relative siblings (media files), so it works standalone without depending on `roman.x70.ai`. The "See the Architecture" button, however, **does** link to `https://roman.x70.ai/callstack-arch` intentionally — we don't mirror the arch page.

### Redeploying the demo page

Only the demo page is mirrored. Assets already on the droplet (videos, screenshots, logos) rarely change — usually you're just syncing HTML.

**Update HTML only (most common):**

```bash
scp -i ~/.ssh/id_ed25519_aelita \
  public/cases/callstack/callstack-demo.html \
  rukodelius@138.68.82.16:/home/rukodelius/callstack/index.html
```

No nginx reload needed — nginx serves the file directly.

**Update media / logos:**

```bash
# Media (videos, screenshots)
scp -i ~/.ssh/id_ed25519_aelita \
  public/cases/callstack/*.mp4 \
  public/cases/callstack/*.png \
  rukodelius@138.68.82.16:/home/rukodelius/callstack/

# Logos
scp -i ~/.ssh/id_ed25519_aelita \
  public/logos/langchain.avif public/logos/langgraph.avif \
  public/logos/twillio.avif public/logos/copilotkit.avif \
  public/logos/openai.avif public/logos/claude.avif \
  rukodelius@138.68.82.16:/home/rukodelius/callstack/logos/
```

Because of the 30-day `Cache-Control: immutable` on media, browsers with a cached copy won't pick up changes until filenames change or cache clears. Rename media files if you need a hard refresh.

### Changing the nginx config

```bash
ssh -i ~/.ssh/id_ed25519_aelita rukodelius@138.68.82.16
sudo nano /etc/nginx/sites-enabled/callstack.x70.ai
sudo nginx -t && sudo systemctl reload nginx
```

### Cert renewal

Certbot auto-renews via a systemd timer already in place on the droplet. If you ever need to check or force-renew:

```bash
sudo certbot renew --dry-run
sudo certbot renew
```

## DNS

`x70.ai` DNS is managed externally (not on GitHub or the droplet). Two records matter:

- `roman.x70.ai` → `CNAME roman-rr.github.io` (or GitHub Pages IPs)
- `callstack.x70.ai` → `A 138.68.82.16`

Any new subdomain pointed at the droplet follows the callstack pattern: A record → add sites-enabled config → `certbot --nginx -d <subdomain>`.

---

## Private sales playbook repo — `docs/sells/` is a nested private repo

The Upwork sales playbook, proposal template, and per-proposal drafts live in a **separate private GitHub repo**: `roman-rr/roman-upwork-sells-playbook`. Locally they appear at `docs/sells/` inside this public site repo, but **the public repo does not track that folder** — it's listed in `.gitignore`. Two independent git repos sharing the same working tree.

### Why a nested repo instead of a submodule

A git submodule would publicly commit a `.gitmodules` file revealing the existence and URL of the private repo. Nested-repo + `.gitignore` keeps everything private — no public footprint at all. Standard "two-repos-in-one-tree" pattern.

### Topology

```
roman-rr.github.io/              ← PUBLIC repo (roman-rr/roman-rr.github.io)
├── .git/                        ← public repo's git metadata
├── .gitignore                   ← includes: /docs/sells/
├── src/, public/, scripts/, ...
└── docs/
    ├── deployment.md            ← tracked in public repo
    ├── TODO.md                  ← tracked in public repo
    └── sells/                   ← PRIVATE nested repo (roman-rr/roman-upwork-sells-playbook)
        ├── .git/                ← sells repo's own git metadata (separate history)
        ├── .gitignore           ← ignores .DS_Store only
        ├── proposal-composition-playbook/  ← split 2026-05-07 (was roman-proposal-playbook-v5.md)
        ├── upwork-strategy.md       ← merged 2026-05-07 (was feed + market + algorithm)
        ├── attachment-library.md
        └── proposals/
            ├── README.md
            ├── _template.html
            ├── inputs/*.js       ← tracked in sells repo (full history of every draft)
            └── *.html            ← tracked in sells repo
```

The public repo's git literally doesn't see anything inside `docs/sells/`. Running `git status` from the repo root never lists files under `docs/sells/`.

### Fresh-machine setup

```bash
git clone git@github.com:roman-rr/roman-rr.github.io.git
cd roman-rr.github.io
npm install
npm run sells:setup   # clones private repo into docs/sells/
```

`npm run sells:setup` runs `scripts/sells-setup.sh`, which checks that `docs/sells/` is empty (or offers to skip if already cloned) and runs `git clone git@github.com:roman-rr/roman-upwork-sells-playbook.git docs/sells`. Requires GitHub SSH auth with access to the private repo.

### Daily workflow

**Editing the playbook, attachment library, or a proposal draft:**
```bash
# You can edit from anywhere, but commits must be made from inside docs/sells/
cd docs/sells
# … edit files, compose proposals via `npm run proposal -- …` from repo root …
git add .
git commit -m "..."
git push                   # → PRIVATE repo
```

**Editing anything else (site code, deployment.md, public playbooks):**
```bash
# From repo root
git add <files outside docs/sells>
git commit -m "..."
git push                   # → PUBLIC repo
```

**Convenience scripts:**
- `npm run sells:setup`  — initial clone (idempotent; pulls if already present)
- `npm run sells:pull`   — `git -C docs/sells pull --rebase`
- `npm run sells:push`   — `git -C docs/sells push`
- `npm run sells:status` — `git -C docs/sells status --short`

### Common mistakes / gotchas

- **`git add docs/sells/…` from the parent silently does nothing** — the folder is `.gitignore`d. That's by design; if you meant to commit to the private repo, you need to `cd docs/sells` first.
- **`npm run proposal -- docs/sells/proposals/inputs/X.js`** runs from repo root and works normally — it's reading/writing files, not git operations, so the nested-repo boundary doesn't matter.
- **The public site build (`npm run build`) never touches `docs/sells/`** — Vite only bundles from `src/` and `public/`, and the short-URL script only reads `dist/`. Nothing from the private repo ends up on `roman.x70.ai`.
- **IDEs may get confused** by the nested `.git/` directory. VS Code and similar tools usually handle it fine (treats the nested folder as a separate repo). If you see weird behavior, open `docs/sells/` as its own workspace.

### Retroactive note — historical exposure

The playbook was publicly committed to `roman-rr.github.io` from commit `44d4743` (2026-04-23) until the migration commit. Those old commits remain reachable in the public repo's history on GitHub (we chose Path 1 — accept historical exposure rather than rewrite history). Future changes are private; past snapshots are not.

### Setup sanity check

```bash
# 1) Confirm nested repo exists and points at private remote
git -C docs/sells remote -v
# expected: origin git@github.com:roman-rr/roman-upwork-sells-playbook.git

# 2) Confirm parent repo doesn't see docs/sells/
git status --short | grep docs/sells || echo "clean — parent ignores docs/sells/"

# 3) Confirm public site build works
npm run build
```
