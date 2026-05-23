# Signals Service — Marketing Kit

> AI-powered crypto trading signals platform — real-time anomaly detection, multi-model AI verification, and a live trader dashboard.

**Version:** 4.3.2
**Codebase:** ~9,966 indexed symbols · ~15,963 relationships · 300 execution flows
**Status:** Production · live at `signals.x70.ai`

---

## 1. Product Overview

Signals Service is a full-stack, production-grade SaaS platform that detects abnormal market behavior in cryptocurrency markets, validates trade ideas with a panel of AI experts, and delivers actionable long/short signals to subscribers in real time.

The system continuously ingests on-chain whale flows, derivatives data, order-book microstructure, news, and social signals, runs them through a **17-trigger sentinel + 6-group anomaly chain**, then has a **Mixture-of-Experts (MoE) AI council** debate, score, and publish each signal with TP/SL targets, confidence, and reasoning.

End users access signals via:
- **Web Dashboard** (React + TypeScript)
- **Public REST API**
- **Native MCP server** (consumable by Claude, Cursor, and any LLM agent)
- **Web Push notifications**

---

## 2. Tech Stack at a Glance

| Layer | Technology |
|---|---|
| **Backend Runtime** | Node.js 20 (Alpine) · ESM modules |
| **Backend Framework** | Express 4 · REST + WebSocket |
| **Frontend Framework** | React 19 · TypeScript 5.9 |
| **Frontend Build** | Vite 8 · Tailwind CSS 4 · ESLint 9 |
| **Database** | MongoDB 7 (Mongoose 8) · better-sqlite3 (analytics cartridges) |
| **Cache & Queue** | Redis 7 · Bull (job queue) |
| **AI / LLM** | OpenAI · Anthropic Foundry SDK · Azure AI Inference · Perplexity · Google Gemini · OpenRouter |
| **AI Observability** | Langfuse (traces, costs, prompt versioning) |
| **Auth** | Clerk (web2) · Wagmi + RainbowKit + viem (web3 wallets) |
| **Deployment** | Docker (multi-stage BuildKit) · Docker Compose |
| **Hosting** | DigitalOcean VPS · Ubuntu 25.04 · FRA1 (Frankfurt) |
| **Reverse Proxy** | Nginx (TLS, rate limiting) |
| **Logging / Telemetry** | BetterStack (ClickHouse SQL) · Logtail |
| **Testing** | Vitest |
| **Validation** | Zod |
| **Notifications** | Web Push (VAPID) |
| **Charts** | Recharts · GSAP animations |
| **Image Generation** | Sharp · Canvas |
| **MCP Protocol** | `@modelcontextprotocol/sdk` (LLM-native API) |

---

## 3. Architecture

### 3.1 High-Level Topology

```
                ┌──────────────────────────┐
                │   React Dashboard (Vite) │
                │   ─ TS · Tailwind · GSAP │
                └─────────────┬────────────┘
                              │  HTTPS / WSS
                              ▼
┌──────────────────────────────────────────────────────────────┐
│   Nginx Reverse Proxy   (TLS · Rate Limit · CORS)            │
└──────────────────────────────┬───────────────────────────────┘
                               ▼
┌──────────────────────────────────────────────────────────────┐
│   Signals API · Express + WebSocket  (Node 20 · Docker)      │
│  ┌──────────────┬──────────────┬──────────────────────────┐ │
│  │  Sentinel    │  Trend       │  Signal Lane (MoE)       │ │
│  │  17 triggers │  Detection   │  Multi-model AI council  │ │
│  │  6 groups    │  Whipsaw     │  Verification + TP/SL    │ │
│  └──────────────┴──────────────┴──────────────────────────┘ │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Bull Queue (Redis)  · Cron jobs · Backtests         │   │
│  └──────────────────────────────────────────────────────┘   │
└──────────────────────┬───────────────────────────┬───────────┘
                       ▼                           ▼
            ┌──────────────────┐        ┌────────────────────┐
            │  MongoDB         │        │  Redis             │
            │  signals_db      │        │  cache + queues    │
            └──────────────────┘        └────────────────────┘
```

### 3.2 Domain Architecture (DDD)

The codebase follows **Domain-Driven Design** with bounded contexts:

- `src/sentinel/` — anomaly trigger orchestrator (chain state machine, gating, presets)
- `src/trend/` — trend & whipsaw detection
- `src/services/` — data acquisition (Hyperliquid, Binance, CoinGecko, Deribit, Polymarket, smart-money, whale registry, Perplexity/Tavily/Gemini search)
- `src/jobs/` — background workers (signal computation, verification, calibration, repair)
- `src/handlers/`, `src/routes/` — HTTP + MCP entrypoints
- `src/models/` — Mongoose schemas (signals, strategies, users, subscriptions, support tickets)
- `src/lib/` — pure logic helpers (event sourcing, validation)

### 3.3 Pipeline (300 indexed execution flows)

1. **Ingest** — websockets + REST polling from exchanges and on-chain providers
2. **Detect** — sentinel evaluates 17 anomaly triggers grouped into 6 confluence buckets
3. **Gate** — confidence threshold + strength gate + dissolution gate
4. **Compute** — Signal Lane fans out the candidate to a Mixture-of-Experts AI council
5. **Verify** — independent verifier model reviews compliance + grounding
6. **Publish** — signal stored in MongoDB, emitted via WebSocket, REST, MCP, Web Push
7. **Track** — auto TP/SL monitoring, paper-trade verdicts, strategy replay, P&L attribution
8. **Calibrate** — daily anomaly calibration job tunes thresholds against historical hit rate

---

## 4. Backend Stack — Deep Dive

| Capability | Library / Service |
|---|---|
| HTTP framework | **Express** with `express-rate-limit`, geoip-lite |
| Job queue | **Bull** on Redis (signal compute, verification, backtests) |
| ORM | **Mongoose 8** with schema validation |
| Realtime | **ws** (raw WebSocket server) |
| HTTP client | **axios** with `p-retry` and `p-limit` (concurrency control) |
| LLM clients | OpenAI 6 · Anthropic Foundry · Azure AI · Perplexity · Gemini search |
| Tracing | **Langfuse** (every LLM call traced with cost + token usage) |
| Validation | **Zod** at every API boundary |
| Crypto / Web3 | **viem** (RPC, on-chain reads) |
| Notifications | **web-push** (VAPID), Logtail logs |
| Image rendering | **Sharp** + Canvas (signal cards, social previews) |
| Migrations | **migrate-mongo** (versioned schema changes) |

---

## 5. Frontend Stack — Deep Dive

The dashboard is a **React 19 + TypeScript 5.9** SPA built with **Vite 8** and **Tailwind CSS 4**.

| Capability | Library |
|---|---|
| Framework | **React 19** + React Router 7 |
| Build tooling | **Vite 8** (HMR), `@vitejs/plugin-react`, `tsc -b` |
| Styling | **Tailwind CSS 4** (`@tailwindcss/vite`), `tailwind-merge`, `clsx` |
| State / data | **@tanstack/react-query 5** |
| Auth | **@clerk/clerk-react** |
| Web3 | **wagmi** · **viem** · **@rainbow-me/rainbowkit** |
| Charts | **Recharts 3** |
| Animations | **GSAP 3** + `@gsap/react` |
| Icons | **lucide-react** |
| Toasts | **sonner** |
| Pages | Live signals · Positions · History · Extremums · Settings · MCP · Plan · Admin · Support |

---

## 6. AI / Machine Learning Stack

| Component | Description |
|---|---|
| **Mixture-of-Experts (MoE)** | Multiple frontier LLMs vote on each signal (regime expert, whale expert, technical expert, news expert) |
| **Model Routing** | Intelligent routing across OpenAI, Anthropic (Foundry), Azure, Perplexity, Gemini, OpenRouter |
| **Verification Stage** | Independent verifier model checks compliance, grounding, and risk |
| **Web Search Layer** | Perplexity · Tavily · Azure web search · Gemini search · circuit breaker fallback |
| **Anomaly Calibration** | Daily ML job re-tunes 17 trigger thresholds against 30-day hit-rate window |
| **Strategy Replay** | Backtest harness replays 90 days of triggers with realism gates (min-notional, slippage) |
| **Kelly Edge Estimator** | Optimal position-sizing engine over historical strategy outcomes |
| **Pattern Spike Detector** | ML feature-importance analysis on signal metadata vs. ROI |

---

## 7. LLM / AI Engine — Deep Dive

The Signals platform is **AI-native**: every published signal is produced, debated, and verified by a coordinated panel of frontier large-language models. The LLM stack is multi-provider, multi-model, self-tuning, and fully traced.

### 7.1 Supported Models

The model pool is **DB-backed and live-tunable** from the admin dashboard — no hardcoded fallbacks. Currently supported and priced models:

| Family | Model ID | Tier | Use |
|---|---|---|---|
| **Anthropic Claude** | `claude-opus-4-6` | Premium | Heavy reasoning, complex regimes |
| | `claude-sonnet-4-6` | Standard | Balanced speed/quality (workhorse) |
| | `claude-sonnet-4-5-20241022` | Standard | Stable fallback |
| | `claude-haiku-4-5-20251001` | Fast | Low-latency / cost-sensitive runs |
| **OpenAI** | `gpt-4o` | Standard | Strong tool use |
| | `gpt-4o-mini` | Fast | Cheap synthesis |
| | `gpt-5-mini-2025-08-07` | Fast | NextStep recommendation merging |
| **Google Gemini** | `gemini-2.5-pro` | Premium | Long-context analysis |
| | `gemini-2.5-flash` | Fast | High-volume scoring |
| **xAI Grok** | via OpenRouter / Foundry | Standard | News + alpha angles |
| **DeepSeek / Qwen / Llama / Kimi** | via OpenRouter | Variable | Experimental routing |

> Models are added/removed via the **admin dashboard → Configuration → Model Pools** without code changes or deploys.

### 7.2 LLM Providers (4 simultaneous routes)

The platform integrates **four LLM providers in parallel** with explicit per-model routing:

| Provider | Used For | SDK |
|---|---|---|
| **Anthropic Foundry** | Claude family (primary route) | `@anthropic-ai/foundry-sdk` |
| **Azure AI Inference** | Multi-model serverless endpoints | `@azure-rest/ai-inference` |
| **OpenAI direct** | GPT family | `openai` v6 |
| **OpenRouter** | Long-tail (Grok, DeepSeek, Qwen, Llama, Kimi, Gemini) | OpenAI-compatible API |

Per-model routing is **explicit per pool entry** (`provider` field) — no string heuristics, no surprise costs.

### 7.3 Multi-Agent Architecture — The Expert Council

Each signal is produced by a **5-role Mixture-of-Experts (MoE) council**:

| Expert | Role | Output |
|---|---|---|
| **🧭 Regime Expert** | Classifies the macro market state | One of `TRENDING_UP` · `TRENDING_DOWN` · `RANGING` · `VOLATILE` |
| **💧 Flow Expert** | Reads derivatives flow (OI, funding, basis, liquidations, whale deltas) | Bullish / Bearish / Neutral context |
| **📈 Technical Expert** | Pure TA on price action — the **only signal producer** | Long/Short candidate with entry / TP / SL |
| **🧠 Analyst Expert** | Independent technical analyst (Room B in A/B cohort) | Cross-check on Technical expert's idea |
| **🎼 Composer Expert** | Synthesizes the panel into the final signal | Final direction, sizing, confidence, rationale |

Each role runs with a tightly scoped prompt (`src/prompts/expertInstructions.js`, ~27 KB of instructions). The architecture is **1 run = 1 model**: one model is selected per signal run and performs all 5 roles, so verified outcomes attribute cleanly to that model.

### 7.4 Verifier Layer (compliance & grounding)

Every signal then passes through an **independent verifier model** (separate, hot-swappable model ID stored in `SignalConfig.signalModelPool.verifierModel`) that checks:

- **Compliance score** (0-100) — does the signal honor TP/SL constraints, leverage caps, schema?
- **Grounding** — are the claims backed by the input context (no hallucinated data points)?
- **Risk gates** — direction matches regime expectation? entry/SL spacing reasonable?

Signals that fail verification are **dropped before publication**. Compliance score then feeds back into model weights (poor compliance → lower selection weight).

### 7.5 Self-Tuning Model Selection

The system continuously **learns which model is best for the current market** via two switchable strategies:

#### Thompson Sampling (default)
Weighted random pick where each model's weight is computed from the last **30 days of verified signals**:

```
weight = hitRateMultiplier × roiMultiplier × complianceMultiplier
```

- **Hit-rate multiplier** = `(hitRate / 0.5)²` — squared, so 60% HR → 1.44×, 25% HR → 0.25×
- **ROI multiplier** = `1 + avgROI / 50` (clamped ≥ 0.3) — winning models get more picks
- **Compliance multiplier** = `avgCompliance / 100` (clamped ≥ 0.5) — sloppy models get demoted
- **Time decay** — `0.95^days` exponential decay, recent performance weighs more
- **Untested models** (< 3 verified signals) get neutral 1.0× weight for **exploration**
- **Penalty system** — a model that fails (parse error, missing fields) gets a 0.5× multiplier that persists across cache refresh and decays after 2 hours; failures stack multiplicatively (2 fails → 0.25×)

#### Round-Robin (deterministic)
Backed by a daily Redis counter — used when the operator wants strict equal sampling for A/B model evaluations. Falls back to Thompson when Redis is unreachable.

The mode is **toggleable per-pool from the admin dashboard** with 30-second propagation.

### 7.6 Regime-Adaptive Expert Weights

Beyond model selection, the system tracks **per-regime hit-rate** for each expert role and adjusts contribution weights when the market shifts:

```
multiplier = regimeHitRate / globalHitRate    (clamped 0.5× – 2.0×)
```

Refreshed every 6 hours, requires ≥ 20 samples per regime bucket, falls back to neutral 1.0× otherwise. So a Technical expert that thrives in RANGING markets gets up-weighted during ranging regimes and down-weighted in trending regimes.

### 7.7 Workflow Overview — From Tick to Signal

```
[1] Anomaly Detected (sentinel — 17 triggers, 6 confluence groups)
        │
        ▼
[2] Pool Selection — Thompson / Round-Robin picks ONE model from VIP pool
        │
        ▼
[3] Context Build — derivatives, on-chain, news, search, prior signals (~30 KB prompt)
        │
        ▼
[4] Expert Council (parallel)
        ├─ 🧭 Regime Expert     → regime classification
        ├─ 💧 Flow Expert       → derivatives flow context
        ├─ 📈 Technical Expert  → long/short candidate (signal producer)
        └─ 🧠 Analyst Expert    → independent A/B cross-check
                                                    │
                                                    ▼
[5] 🎼 Composer Expert — merges panel into final signal
        │
        ▼
[6] ✅ Verifier Model — compliance + grounding check
        │
        ▼
[7] Publication — Mongo + WebSocket + REST + MCP + Web Push
        │
        ▼
[8] Verification Loop — paper-trade verdict feeds back into model weights
```

Every step is **fully traced in Langfuse** with token usage, cost, prompt version, and parent/child trace links.

### 7.8 AI-Specific Features (the differentiators)

| Feature | What it does |
|---|---|
| **Multi-provider routing** | 4 LLM providers in parallel with per-model routing — no vendor lock-in, instant failover |
| **MoE Expert Council** | 5 specialized AI roles per signal (Regime / Flow / Technical / Analyst / Composer) |
| **Reasoning-mode awareness** | Models with reasoning capability (`o1`, `gpt-5`, Claude thinking) get extended timeouts (300 s vs 150 s) and reasoning-aware prompts |
| **Thompson-sampling self-tuning** | Models compete; winners get more traffic, losers fade out — with exploration floor |
| **Regime-adaptive weights** | Expert contribution shifts with the market regime |
| **Independent verifier** | Separate model audits compliance & grounding before publication |
| **Daily anomaly calibration** | Background ML job re-tunes 17 trigger thresholds from 30-day hit-rate window |
| **Pattern Spike detector** | ML feature-importance analysis on signal metadata vs. ROI |
| **Kelly Edge Estimator** | Optimal position sizing computed over historical strategy outcomes |
| **Web-search circuit breaker** | Perplexity + Tavily + Azure + Gemini search with automatic provider rotation on failure |
| **Langfuse-traced everything** | Every LLM call traced with cost, tokens, latency, model — drillable per signal |
| **Native MCP server** | Built-in `@modelcontextprotocol/sdk` server — Claude / Cursor / any LLM agent can consume signals as a first-class tool |
| **Penalty system** | Failed runs (parse error, missing fields) get 0.5× weight penalty, decays after 2 h, stacks multiplicatively |
| **Compliance feedback loop** | Verifier compliance scores feed back into model weights — chronic sloppy models self-deselect |
| **Hot-swap model pools** | Add/remove/retune model pools live from admin dashboard with no deploy |
| **Pre-flight cost estimator** | `modelPricing.js` calculates per-call cost client-side (Foundry doesn't return cost) |

### 7.9 Why This AI Stack is Defensible

1. **No vendor lock-in** — 4 providers, 10+ models live, swappable without code changes.
2. **Self-improving** — every verified signal makes future signals better (Thompson + regime weights + compliance feedback).
3. **Auditable** — Langfuse traces every prompt, response, cost, and verdict. Compliance-ready.
4. **Agent-native** — MCP server means we don't just *use* AI internally, we ship signals **as an AI tool** other agents can consume.
5. **Production-hardened** — graceful shutdown, circuit breakers, penalty decay, retry/exclude paths, fallback chains.

---

## 8. Infrastructure & DevOps

| Area | Stack |
|---|---|
| **Containerization** | Docker (multi-stage Dockerfile, BuildKit cache mounts — 9 min → 30 s warm builds) |
| **Orchestration** | Docker Compose (signals-service, mongodb-signals, redis-signals) |
| **Cloud** | DigitalOcean Droplet · Ubuntu 25.04 · 2 GB RAM · FRA1 |
| **CI/CD** | `scripts/deploy.sh` — git push + remote Docker build + health-check |
| **Reverse proxy** | Nginx (TLS via Let's Encrypt, rate limit, geoip) |
| **Backups** | Automated MongoDB dumps with retention policy |
| **Observability** | BetterStack (ClickHouse SQL logs) · Langfuse (LLM traces) · Logtail · `/health` endpoint |
| **Memory limits** | 1 GB signals · 512 MB Mongo · 256 MB Redis |
| **Graceful shutdown** | 4-hour `stop_grace_period` for in-flight Bull jobs (e.g. anomaly calibration) |

---

## 9. Main Features

### For Traders
- **Live Signals** — long/short with entry, TP, SL, confidence, AI rationale
- **Active Positions** — real-time P&L %, distance to TP, progress bars
- **History & Verification** — every signal back-tested with a paper-trade verdict
- **Push Notifications** — instant browser/mobile alerts on new signals
- **Subscription Plans** — Clerk + on-chain payment via wallet
- **Multi-language UI** — built-in i18n (English, Russian fonts via DejaVu)

### For Developers / AI Agents
- **REST API** — public signal feed, history, stats
- **MCP Server** — `mcp__trading-signals__get_signal`, `get_signals`, `get_stats`, `get_signal_history`, `register` — directly consumable by Claude, Cursor, and any LLM agent
- **Webhook events** (planned)

### For Operators
- **Admin Dashboard** — signal pipeline health, model performance, cost analytics
- **Support Ticket System** — full CRUD with SLA tracking
- **17 Slash-command Diagnostics** — `/signals:healthcheck`, `/signals:live-signals`, `/signals:cost-calibration`, `/signals:champion-config-check`, `/signals:whale-check`, etc.
- **Strategy Replay Studio** — replay any historical day to evaluate trigger config
- **Champion Config A/B** — shadow-test new trigger configs against the live pool

---

## 10. Data Sources Integrated

- **Exchanges:** Hyperliquid, Binance, Deribit
- **Market data:** CoinGecko, CoinMetrics
- **On-chain:** Whale wallet registry, smart-money tracker, viem RPC
- **Sentiment:** Fear & Greed Index, Polymarket
- **News & Search:** Perplexity, Tavily, Azure Web Search, Gemini Search

---

## 11. Quality & Reliability

- **9,966 symbols indexed** in GitNexus (graph + embeddings) for safe refactors
- **Vitest** unit + integration suite
- **Zod** validation at every external boundary
- **Circuit breakers** on every external API client
- **`p-retry` + `p-limit`** for resilient concurrent calls
- **Event-sourced state** for auditability
- **Migration system** (`migrate-mongo`) for zero-downtime schema evolution
- **Multi-agent git workflow** — parallel feature branches, merge-only-to-master deploy gate

---

## 12. Tech Stack — Quick-Sell Bullets

> *Use these one-liners directly in pitch decks, sales slides, and PDFs.*

- **Backend:** Node.js · Express · WebSocket
- **Frontend:** React · TypeScript · Vite · Tailwind CSS
- **Database:** MongoDB · Mongoose
- **Queue / Cache:** Redis · Bull
- **AI:** OpenAI · Anthropic · Azure AI · Perplexity · Gemini · MoE routing
- **AI Observability:** Langfuse
- **Auth:** Clerk + Web3 (wagmi, RainbowKit, viem)
- **Deployment:** Docker · Docker Compose · DigitalOcean · Nginx
- **CI/CD:** Self-hosted runner · scripted multi-stage Docker builds
- **Logging:** BetterStack (ClickHouse) · Logtail
- **Testing:** Vitest
- **Validation:** Zod
- **Notifications:** Web Push (VAPID)
- **Charts:** Recharts · GSAP
- **Web3 Payments:** viem · wagmi
- **MCP:** Native Model Context Protocol server (LLM-agent ready)
- **LLM Models:** Claude Opus / Sonnet / Haiku 4.x · GPT-4o / 5-mini · Gemini 2.5 Pro / Flash · Grok · DeepSeek · Qwen · Llama · Kimi
- **LLM Providers:** Anthropic Foundry · Azure AI Inference · OpenAI · OpenRouter
- **AI Architecture:** Mixture-of-Experts council (5 roles) + independent verifier
- **Self-tuning:** Thompson Sampling on hit-rate × ROI × compliance + regime-adaptive expert weights

---

## 13. Why This Stack Matters

1. **Modern & in-demand** — every layer (React 19, Node 20, Tailwind 4, Vite 8, MongoDB 7, Redis 7) is the latest LTS or stable release as of 2026.
2. **AI-native, not bolt-on** — multi-provider LLM routing, full Langfuse tracing, Mixture-of-Experts verification, and a built-in MCP server.
3. **Battle-tested in production** — running live since 2024, 4.3.x release line, 16-section pipeline audit, automated calibration.
4. **Fast deploys** — multi-stage Dockerfile with BuildKit cache mounts deploys in ~40-60 s.
5. **Web3-ready** — Clerk for web2 onboarding, RainbowKit + wagmi + viem for crypto-native users, on-chain payment hooks.
6. **Agent-first API** — first-class MCP support means any LLM agent (Claude, Cursor, ChatGPT) can consume signals natively.

---

*Document generated for use in the Marketing Kit / Sales PDF. All technologies listed are production deployments — no roadmap items unless explicitly marked “(planned)”.*
