# Deployment & hosting

Two places serve this site's content: **GitHub Pages** (the portfolio) and a **DigitalOcean droplet** (the standalone `callstack.x70.ai` mirror). Short URLs on `roman.x70.ai` are generated at build time.

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
