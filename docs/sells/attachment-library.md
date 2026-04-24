# Attachment Library — Proposal Media

> Companion to `roman-proposal-playbook-v5.md`. Upwork supports image / video / PDF attachments on proposals. Attach **1–3 relevant files** per proposal. Most-relevant first. Video > image when the job explicitly wants to "see it working". Don't use attachments as space-filler.

## Rules

- **Max 3 attachments per proposal.** Attachments compete with each other for the client's attention — 1–2 well-chosen beats 3 mediocre.
- **Match to the job's strongest signal** (what the client asks to see in the post — voice / chat / dashboard / pipeline / analytics).
- **Video wins when the post says "demo", "show me it working", "share a sample".** Image wins for fast-scan proof (dashboards, analytics, pipeline diagrams).
- **Don't attach architecture screenshots** — link to the HTML architecture page instead (interactive > static).
- **NEVER attach anything branded `aelita.x70.ai`** — deprecated brand. See DEPRECATED section.
- **Anonymity check:** some screenshots show real client logos / data (4com, Project Timber, Insurance Company A placeholder). Those are safe — the Insurance tenant in Callstack screenshots is clearly a demo tenant name. Real client data (4com dashboards) is blurred/generic enough to share.
- **Path reference:** all files live under `public/cases/<project>/`. Use absolute paths when uploading on Upwork.

---

## Callstack — Multi-tenant Voice & Chat (top-tier — live demo backing)

`public/cases/callstack/`

### `callstack-demo-1.mp4` — Live voice demo (53s, 2480×1594)
- Callstack AI chat/voice interface, tenant "Insurance Company A"
- **Shows LIVE VOICE mode active** — "Start talking" pill, audio waveform visualizer, mute button
- Left nav: Chat, Tenants, Documents, Calls, Settings + recent chat history in multiple languages (English, Japanese)
- **Use when:** AI voicebot, voice agent, Twilio, Azure Voice Live, IVR, real-time voice AI, browser voice, "demo of voicebot"
- **Keywords:** voice, voicebot, Twilio, real-time, Azure Voice Live, audio, speech
- **Pair with link:** callstack.x70.ai (primary)

### `callstack-demo-2.mp4` — Chat + RAG streaming demo (72s, 2480×1594)
- Same interface, chat mode active
- User asks about boat/yacht insurance coverage; assistant responds with Knowledge Base query running + streaming text
- **Shows RAG retrieval UI live** — Knowledge Base panel indicates "RUNNING" while searching tenant docs
- **Use when:** AI chatbot, RAG demo, streaming chat, knowledge-base chatbot, customer-support AI, sales chatbot, embeddable chat
- **Keywords:** chatbot, RAG, streaming, knowledge base, customer support, embed, AG-UI
- **Pair with link:** callstack.x70.ai (primary)

### `callstack-chat-ui.png` — Chat UI with structured RAG answer
- Full chat interface showing structured response to an insurance pricing query
- "Knowledge Base · 3 Excerpts" indicator with "DONE" state, citations visible
- Response includes structured insurance pricing (Technical, Boat/Yacht sections with EUR prices)
- Three suggestion chips at bottom: "Boat Insurance Details", "Technical Insurance Quote", "Cargo Insurance Pricing"
- **Use when:** AI chatbot, RAG with citations, structured outputs, suggestion chips, multi-tenant chat UI
- **Keywords:** chatbot UI, RAG, citations, structured response, insurance, customer support

### `callstack-calls-ui.png` — Call log dashboard
- Call history panel for tenant "Insurance Company A" showing ~20 outbound call records
- Columns: Direction, From/To numbers, Status (completed), Duration (30s–3m), Started timestamp, Transcript link
- Left nav: Chat, Tenants, Documents, Calls, Settings
- **Use when:** Twilio, outbound calls, call center AI, call logs, dashboard, AI receptionist, sales calling bot
- **Keywords:** Twilio, outbound, PSTN, call log, dashboard, call center, telephony

### `callstack-kb-ui.png` — Knowledge base / documents manager
- "Documents" panel showing 3 uploaded `.txt` files, 7 chunks, 5.46 KB total
- Files: boat-yacht-insurance-guide, technical-insurance-products, transport-cargo-insurance-faq
- Per-file metadata: chunks, size, modified date, processed date, delete action
- Refill / Force Rebuild / Validate / Wipe buttons; drag-drop upload zone
- FAISS index path indicator at bottom
- **Use when:** document ingestion, vector store UI, FAISS, RAG admin, document registry, per-tenant docs
- **Keywords:** FAISS, vector store, document ingestion, RAG admin, knowledge base, chunks, embeddings

---

## PT Agents — Multi-agent AI platform

`public/cases/pt-agents/`

### `web-ui-chatbot-1.png` — PT Agents web chat with live financial query
- Chat UI with query "Analyze our Revenue in February"
- Order Analyst sub-agent responds with real revenue data: Total paid orders 292, Total revenue £440,692.60, Avg deal £1,509.22
- Full breakdown table: Revenue by Payment Method (Pay360 51.3%, PayPal 17.3%, Pay with card 17.1%, BNPL 10.5%, Revolut 2.2%)
- Tools used visible: `revenue_analytics`
- Left sidebar: chat history with previous queries (Customer John Smith, Order HPY9904 info, analytics queries)
- **Use when:** multi-agent AI, agentic chatbot, financial analysis AI, CopilotKit UI, AG-UI streaming, internal gate agent, data-aware chatbot
- **Keywords:** multi-agent, LangGraph, CopilotKit, agent analytics, financial, revenue, internal tools
- **Pair with link:** roman.x70.ai/ai-agents

### `per-agent-analytics-2.png` — Agent usage analytics dashboard
- "AI Command Center" → Agents → Analytics tab (Feb 20 – Feb 27, 2026)
- **Big stats:** 107 Total Queries, 225 Agents Called, 568 Tool Calls, 100% Success Rate, 69.9s Avg Duration
- **"Human time saved: ~1 day 12 hours 33 minutes"** (compelling metric)
- Agent Usage breakdown: Call Explorer (57, 70.3s avg), Monday Boards (30, 49.5s), Order Analyst (18), Customer Lookup (8), File Analyzer (2)
- Top Tools: call_transcript (100), monday_query_items (70), call_search (68), knowledge_base_search (49)
- **Use when:** agent monitoring, observability, LLM analytics, tool-call tracking, agent usage metrics
- **Keywords:** observability, agent analytics, LLM telemetry, monitoring, metrics, time-saved
- **Pair with link:** roman.x70.ai/ai-agents

### `betterstack-metrics.png` — Production telemetry / infra monitoring
- BetterStack Telemetry dashboard, "Project Timber EC2" source, last 6 hours
- **Live production metrics:** Status Up, System Memory 3.16 GB, Docker Memory 2.78 GB, HDD 65%
- Memory-allocated chart by service — visible service names like `app-sugg`, `app-gmail`, `app-ai_us`, `app-mond`, `app-pt_ag`, `app-post`, `app-redp`, `app-otel` (at least 9 containers tracked)
- **Use when:** DevOps, production observability, Docker, EC2, multi-service architecture, telemetry, SRE
- **Keywords:** DevOps, production, EC2, Docker, BetterStack, OpenTelemetry, observability, SRE, infra

---

## PT Calls — Speech-to-text pipeline & analytics

`public/cases/pt-calls/`

### `4com-dashboard-1.png` — Call Explorer detail view
- Single call detail: "Delivery & Logistics" case, High priority (80/100), Negative sentiment
- Customer Bonnie Cable, 4-min inbound call, specific product mentioned (Grandmaster Heavy Duty D1000)
- **AI-generated summary** of customer frustration + Next Step action
- Cards: Client (John Smith, +44..., HPY999999 ref), Lead Type (Delivery Issues, health score 30/100), Agent Performance panel, Validation Protocol (50/100)
- Accordions for View Conversation + Audio Recording
- **Use when:** call center analytics, sentiment analysis, AI call summary, CRM integration, lead scoring, support analytics
- **Keywords:** speech-to-text, call analytics, sentiment, lead scoring, CRM, customer support, call summary, priority routing
- **Pair with link:** roman.x70.ai/ai-calls

### `4com-dashboard-2.png` — Agent analytics / leaderboard
- "Agent-Client-Call Tree": 4 agents (Adam, Jack, Angela, Josh) with stats — calls handled, clients managed, high-priority count, performance score, sales score, validation score
- Expanded Josh view: prospects, customers, converted, sales effort, validation
- **Agent Performance Analytics leaderboard:** Call Volume Leader (Adam 44 calls, 44.9%), Client Mgmt Leader (Rory 41 clients, 51.2%), Deal Value Leader (Rory £77,696), Sales Performance Leader (Rory 47/100)
- Soft badges: Communication Champion, Resolution Expert, Problem Solver, Efficiency Leader
- **Use when:** team performance AI, agent leaderboards, sales analytics, gamified dashboards, call-center KPI
- **Keywords:** agent analytics, leaderboard, sales performance, KPI, team dashboard, call-center analytics
- **Pair with link:** roman.x70.ai/ai-calls

### `pt-calls-pipeline-arch-n8n-1.png` — n8n workflow canvas (3-layer medallion)
- n8n workflow titled "4com Recordings Hourly" (n8n 176,761 stars visible)
- **Three labeled layers:** Bronze (2 nodes), Silver (~9 sequential nodes), Gold (branched tree, ~7 nodes)
- Trigger node on left, "Execute workflow from Schedule Trigger" button
- **Use when:** n8n automation, workflow orchestration, medallion architecture, ETL pipeline, Bronze/Silver/Gold, batch processing
- **Keywords:** n8n, workflow, automation, ETL, medallion, pipeline, orchestration, batch
- **Pair with link:** roman.x70.ai/ai-calls

---

## PT Emails — Real-time email classification pipeline

`public/cases/pt-emails/`

### `pt-emails-agents-1.png` — Gmail-reader agent live query
- PT Agents chat UI running "Show me the most important recent 1 mail in each authorized mailbox"
- Gmail Reader sub-agent invoked twice (is_important, then full params)
- **Tools visible in call stack:** `write_todos`, `list_mailboxes`, `email_search` (multiple)
- Response table: 2 recent important emails from sales@ and care@ with subjects, senders (redacted with `***`), timestamps
- "What was done" summary (3 numbered steps)
- **Use when:** Gmail integration, email agents, email classification, multi-mailbox handling, AI email triage, agent tool use
- **Keywords:** Gmail API, email agent, email classification, mailbox triage, AI email, LangGraph agent
- **Pair with link:** roman.x70.ai/ai-emails

### `pt-emails-dashboard-1.png` — Mailbox overview dashboard
- "AI Command Center → Mailboxes" (Feb 23 – Mar 1, 2026)
- **Four Gmail mailboxes tracked:** sales@, care@, support@, stock@ (redacted domain)
- Per-mailbox stats: message count (40k–250k), thread count, incoming/outgoing/processed/failed counts, success rate (98–100%)
- All active, expiry date shown, Pause / Refresh / Settings / Auth buttons per mailbox
- **Use when:** multi-mailbox Gmail OAuth, mailbox monitoring, email pipeline health, Gmail API at scale, multi-tenant email
- **Keywords:** Gmail OAuth, multi-mailbox, email pipeline, Gmail API, processing stats, monitoring
- **Pair with link:** roman.x70.ai/ai-emails

### `pt-emails-dashboard-2.png` — Per-mailbox pipeline stats + stage flow
- Detail view for `sales@*****.co.uk` (130,206 messages, 74,131 threads)
- **Pipeline Stats:** 183 incoming, 64 outgoing, 30.1s avg in, 4.5s avg out, 911 processed, 18 failed, 154 skipped, 98.1% success rate
- **8-stage pipeline flow visible:** History 98% → Fetch 88% → Enrich 88% → Classify 86% → Draft 100% → Complete 100% → Monday 100% → Pinecone 96% (with counts per stage: 2.4k, 154, 7.4k, 3.7k, 1.8k, 12k, 2.4k)
- Recent Events table: 3 completed jobs with Message IDs, senders, stage progression, execution times, durations
- **Use when:** Kafka/event-driven pipeline, stage-by-stage processing, AI classification pipeline, Pinecone integration, Monday.com sync, idempotency, DLQs
- **Keywords:** Kafka, event-driven, pipeline stages, AI classification, Pinecone, Monday integration, Gmail API, idempotent, DLQ
- **Pair with link:** roman.x70.ai/ai-emails

---

## Quick picker — keyword → best attachments

| Job signal / keyword | Best 1st attachment | Best 2nd | Best 3rd |
|---|---|---|---|
| **voice / voicebot / Twilio** | `callstack-demo-1.mp4` | `callstack-calls-ui.png` | `callstack-chat-ui.png` |
| **"please share a demo" / working sample** | `callstack-demo-2.mp4` | `callstack-demo-1.mp4` | `callstack-chat-ui.png` |
| **chatbot / chat widget / AI assistant** | `callstack-demo-2.mp4` | `callstack-chat-ui.png` | `web-ui-chatbot-1.png` |
| **RAG / vector store / knowledge base** | `callstack-demo-2.mp4` | `callstack-kb-ui.png` | `callstack-chat-ui.png` |
| **LangGraph / multi-agent / agent orchestration** | `web-ui-chatbot-1.png` | `per-agent-analytics-2.png` | `pt-emails-agents-1.png` |
| **agent analytics / observability / tool tracking** | `per-agent-analytics-2.png` | `betterstack-metrics.png` | `web-ui-chatbot-1.png` |
| **speech-to-text / call analytics / sentiment** | `4com-dashboard-1.png` | `4com-dashboard-2.png` | `pt-calls-pipeline-arch-n8n-1.png` |
| **n8n / workflow automation / pipeline** | `pt-calls-pipeline-arch-n8n-1.png` | `4com-dashboard-1.png` | `pt-emails-dashboard-2.png` |
| **Gmail / email automation / email classification** | `pt-emails-dashboard-2.png` | `pt-emails-dashboard-1.png` | `pt-emails-agents-1.png` |
| **Kafka / event-driven / real-time pipeline** | `pt-emails-dashboard-2.png` | `pt-emails-dashboard-1.png` | `pt-calls-pipeline-arch-n8n-1.png` |
| **CRM / HubSpot / Monday / lead scoring** | `4com-dashboard-1.png` | `4com-dashboard-2.png` | `pt-emails-dashboard-2.png` |
| **DevOps / Docker / EC2 / production monitoring** | `betterstack-metrics.png` | `pt-emails-dashboard-1.png` | `per-agent-analytics-2.png` |
| **financial / revenue analytics / fintech** | `web-ui-chatbot-1.png` | `4com-dashboard-2.png` | `per-agent-analytics-2.png` |
| **multi-tenant SaaS / contact center** | `callstack-demo-2.mp4` | `callstack-calls-ui.png` | `pt-emails-dashboard-1.png` |

---

## Current gaps (worth capturing later)

- **No video of PT Agents / PT Calls / PT Emails** — all 3 are image-only. A 30–60s screen recording of any of these would meaningfully strengthen proposals on those stacks.
- **No signals.x70.ai screenshots** — the whole trading product has zero attachable media. Since `signals.x70.ai` is referenced in the playbook as a top-5 link, at least 1–2 clean screenshots of the product (signal performance dashboard, MCP docs page, skills page) would close an obvious gap.
- **No Microsoft 365 / Azure AI screenshots** — that case study is architecture-only; no runtime/UI shots. A Copilot Studio shot or Azure AI Search query visualization would help.
- **No Monster Pack / claude-setup screenshots** — the architecture page is rich but no runtime shots (GitNexus dashboard, Beads task board, status-line terminal).

---

## DEPRECATED — do not attach, candidates for deletion

These files exist under `public/cases/` but show the **deprecated `aelita.x70.ai` brand** (replaced by `signals.x70.ai`). They are not referenced by any HTML and are orphan media files:

- `public/cases/aelita.x70.ai__lang=en.png` — Telegram bot landing (15k+ users, personas Алина/Эльвира/etc.)
- `public/cases/aelita.x70.ai_signals_dashboard.png` — Signal Performance dashboard (56k signals, 83% hit rate, +18.2% ROI)
- `public/cases/aelita.x70.ai_signals_dashboard (1).png` — Signal timeline + SUI coin price chart
- `public/cases/aelita.x70.ai_trading (1).png` — AI Trading Signals landing (59% accuracy, 8 coins)

**Never attach to a proposal** — they expose the deprecated brand in the URL bar / header logo. The playbook's cardinal rule: "never reference aelita.x70.ai" (see `roman-proposal-playbook-v5.md` Part 11).

**Recommended action:** delete these 4 files, or regenerate equivalent screenshots from the current `signals.x70.ai` product so the visual asset is preserved but rebranded. The old signal-performance dashboard is compelling content (56k / 83% / +18.2%) — worth recapturing with the signals.x70.ai branding.
