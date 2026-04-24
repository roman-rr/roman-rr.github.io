# Roman Antonoff — Upwork Proposal Playbook & Context Document

> **AI Solutions Architect | AI Agents | LangChain | RAG | Python**  
> roman.x70.ai · github.com/roman-rr · signals.x70.ai  
> $400K+ earned · 100% Job Success · Top Rated  

---

## WORKFLOW — drafting a proposal

Proposals are **generated from data**, not hand-written HTML. An input `.js` file holds the pure content; a Node script fills the frozen `_template.html` and opens the result in the browser. This is the only supported flow.

### One-command draft (do this, every time)

```bash
# 1. Copy the most recent input file and rename with today's date + job slug
cp docs/sells/proposals/inputs/<most-recent>.js \
   docs/sells/proposals/inputs/YYYY-MM-DD-<new-job-slug>.js

# 2. Edit ONLY the exported object (title, coverLetter, bid, qa, reasoning…)
#    — no HTML, no CSS, no layout. Pure data.

# 3. Build + open in browser
node scripts/build-proposal.mjs docs/sells/proposals/inputs/YYYY-MM-DD-<new-job-slug>.js
```

The script writes `docs/sells/proposals/YYYY-MM-DD-<new-job-slug>.html` and opens it. Done.

### What goes in the input `.js` file

Single default export. Every field is pure text/data — no HTML tags required (though `<strong>`, `<em>`, `<code>` are fine where needed for inline emphasis).

```js
export default {
  // optional — browser tab title; defaults to h1
  title: 'Senior AI Engineer for SaaS (LangChain + RAG)',

  // required — main heading (full job title)
  h1: 'Senior AI Engineer for SaaS Platform (LangChain + RAG)',

  // required — one-line meta (rate band, duration, client signals, freshness)
  meta: 'Hourly · $25–$47/hr · Expert · 8–12 weeks · Client: US, 5.0⭐ · 50+ proposals · Fresh (40s)',

  // required — verdict paragraph (HTML allowed for <strong>/<code>)
  verdict: '<strong>Verdict: APPLY.</strong> Gold-tier title, perfect scope match, top-tier client.',

  // required — the actual proposal text, multi-line, preserves line breaks
  coverLetter: `⚡ Here demo: https://callstack.x70.ai — hook line.
Second line with manual break at ~70 chars.

Thank you for interest, write me to start work.

– https://callstack.x70.ai - Live AI agent demo
– https://roman.x70.ai/ai-agents - Multi-agent platform, 611 evals
– https://roman.x70.ai - My portfolio
– https://github.com/roman-rr/ - My Github, 700+ stars

Proposed approach (first sprint):

Phase 1 — Title
Short 1-2 line description.

Want me to send the full roadmap with hours?`,

  // required — bid / boost (value + justification)
  bid:   { value: '$47/hr',                     note: 'Top of their range. See Part 9 pricing.' },
  boost: { value: '21 Connects + Boost 5–10',   note: '50+ proposals in, fresh. Submit fast.' },

  // optional — attachments from attachment-library.md (max 3)
  attachments: {
    hint: 'max 3 — picked per attachment-library.md',   // optional
    list: [
      { path: 'public/cases/<...>.mp4', note: 'Why this file matches.' },
    ],
    note: 'Optional explanatory note below the list.',   // optional
  },

  // optional — screening questions (when the job has them)
  qa: {
    hint: '3 questions — triple-click each answer → paste',  // optional
    list: [
      { label: 'Q1.', question: 'Full question text?',
        answer: `Answer line 1.
Answer line 2 with manual breaks.` },
    ],
    note: 'Optional bonus note below Q&A.',  // optional
    // If no screening questions: omit `list` and put the "None visible..." note in `note`.
  },

  // required — playbook rule → decision mapping (for retro analysis)
  reasoning: [
    { part: 'Part 2', text: '<strong>Hook:</strong> "Here demo:" starter chosen because…' },
    { part: 'Part 4', text: '<strong>Links:</strong> 3 project + 2 anchors = 5 total…' },
    // …
  ],

  // required — submit checklist (4–6 actionable items)
  checklist: [
    'Paste cover letter from block 1',
    'Set bid to <strong>$47/hr</strong>',
    'Boost 5–10 connects',
    'Attach <code>callstack-demo-2.mp4</code>',
    'Submit within 30 minutes',
  ],
};
```

### Rules

- **Never hand-write HTML for a proposal.** Always go through the input → build flow.
- **Never edit `_template.html` mid-session** unless you're intentionally redesigning across all proposals (rare; coordinate with Roman first).
- **Always commit both** the input `.js` and the generated `.html` (history + browsable rendered output).
- **Short visual lines** (Part 2 Formatting Rules) apply inside the `coverLetter` and every `answer` field — manual breaks at ~60–70 char natural pauses.
- **Don't regenerate without running the script.** If the input changes, re-run `node scripts/build-proposal.mjs …` to keep the HTML in sync.

### Starter selection — qualitative, never algorithmic

The opening (emoji + attention word) of every cover letter is a **qualitative decision** based on **two inputs only**:

1. **The JOB POST itself** — its tone, its asks, its vocabulary, what the client signals matters most.
2. **PLAYBOOK Part 2** — the emoji table (⚡ / ✅ / 🚀) + attention-word menu ("Not a Demo:" / "{Keyword} Solution:" / "In Production:" / "Real Solution:" / "{Name}," / "Here demo:") and the criteria for when each fits.

That's it. Two inputs → one qualitative call.

**Don't:**
- Pick the same starter you used yesterday on autopilot.
- Algorithmically rotate ("last was ⚡, so next must be ✅"). The decision is per-job, not a round-robin.
- Use a hardcoded "suggest the next emoji" function in any tool.

**Optional supplement:** `npm run proposal:starters` lists the openings of the last N proposals. Use it if you want to *avoid accidentally repeating the exact same combination*. Treat the output as data, not as instruction.

**Future state:** once we've collected conversion data per starter (views → replies → hires), we'll narrow to the 1–2 winning openings and stop rotating for variety. Until then, the rotation is a **discovery experiment**, not a stylistic preference.

### Filename convention

- Input:  `docs/sells/proposals/inputs/YYYY-MM-DD-<short-job-slug>.js`
- Output: `docs/sells/proposals/YYYY-MM-DD-<short-job-slug>.html` (auto-generated)

### Required HTML sections (already baked into the template)

1. **Header** — job title, verdict, meta.
2. **Cover Letter** — copyable monospace block, the thing pasted into Upwork.
3. **Bid Rate** — value + justification.
4. **Connects & Boost** — value + justification.
5. **Attachments** — 1–3 files from `attachment-library.md`.
6. **Screening Questions** — Q&A blocks OR stub note.
7. **Playbook Reasoning** — decision → rule mapping.
8. **Submit Checklist** — 4–6 actionable items.

---

## PART 1: GROUND TRUTH PROPOSALS (PROVEN WINNERS)

These are real proposals that won real jobs. Study the structure, spacing, and confidence.  
**This is THE structure. Every proposal must follow this pattern.**

---

### GOLD STANDARD — 10% conversion (10:1 hire ratio)

This proposal won because of: **Pain point question → Timezone flexibility → CTA → Links**  
Notice: double line breaks after every line. Easy to scan. No essays.

```
Hello 👋 Would you like to use Langchain?

I'm not in Europe, but I can follow UK timezone!

Thank you for interest, write me to start work.

https://github.com/roman-rr – My Github with 700+ stars
http://roman-rr.github.io/ – My simple webpage
https://github.com/roman-rr/LLM-toolchain – My own LLM toolset
```

**Q&A answers that won (same job):**

```
How many years of experience do you have as an AI Chatbot Developer?
3+ years of LLM research and development.
15+ years of programming experience.
10+ years with Upwork.

Have you worked with Python and OpenAI/GPT to develop chatbots?
10+ years of Python coding.
And most recently I connected Telegram Bot with all latest OpenAI API features: Vision, Structured output, Rag, Fine-tuning.

Do you have experience using LangChain, Vector DBs in your projects?
Sure, of course.
I have my own LLM-chain (based on Langchain) toolset that support all:

- Retrieval-augmented generation (RAG)
- Structured Data Retrieval (SDR)
- Fine-tuning models
- Documents loaders
- Embeddings
- Various vector stores

https://github.com/roman-rr/LLM-toolchain

Have you integrated APIs such as HubSpot, WooCommerce, or WhatsApp?
Will integrate any API with confidence. Previously using Telegram API / WhatsApp API.

Are you available to work during UK business hours?
For sure, will follow your timezone.
```

**WHY THIS CONVERTS AT 10% — ANATOMY:**

```
Line 1: Greeting + ONE tech question        ← Shows you read the brief, identifies pain point
Line 2: (blank)                              ← Breathing room
Line 3: Timezone/availability signal         ← Removes geographic objection instantly
Line 4: (blank)                              ← Breathing room
Line 5: CTA — action-oriented               ← "write me to start work" (not passive)
Line 6: (blank)                              ← Breathing room
Line 7-9: Links with descriptions            ← Proof. The pages sell, not the proposal
```

**KEY PATTERNS:**
- Double line break after EVERY line — pushes reader step by step
- Total word count: ~30 words before links
- No paragraphs. No essays. Statements only
- CTA BEFORE links (creates intent before showing proof)
- Confidence without arrogance in Q&A: "Sure, of course." / "Will integrate any API with confidence."
- Q&A answers: 1-3 lines max per question. Lists when needed

---

### PLATINUM STANDARD — the client wrote first (phase-breakdown winner)

This proposal triggered the client to initiate the interview — they messaged
first, no back-and-forth needed. The preview hook did its job (got the click),
and the phase breakdown **below the fold** converted view → reply → interview.

This is the reference template when the job allows a concrete roadmap.

```
✅ LLM Audit Solution: Fine-tuned LLMs on H100 (VAST) with production data,
611 function-calling evaluations across 36 tools.

LoRA or full FT on the 1×H100 constraint?

Thank you for interest, write me to start work.

– https://roman.x70.ai/ai-agents - 36 tools, 611 evals, function calling
– https://signals.x70.ai - My AI SaaS, LLM pipelines
– https://github.com/roman-rr/ - My Github, 700+ stars

Proposed audit breakdown (10-12 hrs):

Phase 1 — Scripts & Architecture Review (2hr)
Read all training, serving, eval scripts. Map the full pipeline.

Phase 2 — Model & Fine-Tuning Review (2hr)
Base model justification, FT method vs H100 constraints, VRAM budget,
data formatting, eval splits, overfitting checks.

Phase 3 — Inference Stack Review (2hr)
Serving framework choice, quantization settings, batching,
KV cache sizing at 16-32 concurrency, OOM risk analysis.

Phase 4 — BFCL Benchmark Integrity (2hr)
Compare eval scripts against official BFCL repo.
AST-matching validation, leakage detection, shortcut checks.

Phase 5 — Performance & Red Flags Report (2hr)
TTFT/latency plausibility at concurrency target.
Written 2-4 page report: risks, concerns, recommendations.

Phase 6 — Walkthrough Call (30min + prep)
Walk through findings, answer questions, final recommendations.
```

**WHY THIS CONVERTS AT "CLIENT WRITES FIRST" LEVEL — ANATOMY:**

```
Line 1-3: Emoji + attention word + proof hook + tech question
          ← preview stays under 250 chars, gets the click
Line 5:   CTA — "write me to start work" (strongest CTA)
Line 7-9: Links with descriptions (3-5 rule, portfolio + github anchors)
Line 11:  Phase breakdown header with total hours estimate
          ← signals "I've already thought this through"
Line 13+: 6 phases, each with title + hours + 1-2 lines of specifics
          ← scannable, demonstrates depth without being a wall of text
Final:    Walkthrough / review call as the closing phase
          ← implies "when we work together" not "if we work together"
```

**KEY PATTERNS THAT MADE THE CLIENT WRITE FIRST:**
- Specific numbers in the hook (611 evals, 36 tools) build credibility fast
- One pointed technical question (LoRA vs full FT) shows expertise
- Phase breakdown removes the client's biggest risk: "does this person understand what I'm asking for?"
- Hours per phase shown → client can mentally calculate cost, no surprises
- Phase 6 is a walkthrough call — frames the engagement as collaborative, not transactional
- Total hours upfront (10–12 hrs) — transparent, no hidden scope

**When to use this pattern:** see PART 2 "PHASE BREAKDOWN" subsection for
the full rules (Modes A/B/C and when to tease vs go full detail).

---

## PART 2: THE FORMULA

Every proposal follows this exact flow. No exceptions.

```
{EMOJI} {ATTENTION WORD}: {HOOK — proof, pain killer, or value match}. {SHORT QUESTION}?

{CTA — action-oriented}

{LINKS: 3-5 total. Last 2 ALWAYS = roman.x70.ai + github.com/roman-rr. First 1-3 = most relevant project links. Most-relevant first, anchors last.}

{OPTIONAL CLOSING HOOK — second pain point, availability, or attention grabber}

{OPTIONAL PHASE BREAKDOWN — below-the-fold content that converts view → reply/interview. See "PHASE BREAKDOWN" subsection below.}
```

### THE 250-CHARACTER RULE (CRITICAL)

**Context:** When a client opens their proposal list, they see a right-side preview showing
approximately 250 characters of each cover letter — with NO line breaks rendered. This preview
is the ONLY thing most clients read before deciding to click "View more" or scroll past.

**Your first ~250 characters determine whether your profile gets viewed.**

Everything after 250 chars is below the fold — client must click to see it.
The preview's only job is to GET THE CLICK to view your profile.

### The 250-Char Anatomy:

```
{EMOJI} {ATTENTION WORD} {SEPARATOR} {HOOK} {SEPARATOR} {DETAILS}. {QUESTION}?
  1ch      8-15ch          1ch      40-80ch    varies        30-50ch
```

Total: ~200-250 characters. Must fit in one preview window.

### THREE ELEMENTS TO COMBINE (rotate for variety):

**Element 1 — EMOJI (pick one per proposal, rotate):**
```
⚡  — Speed, power, energy. PRIMARY choice (~40%)
✅  — Verified, proven, done. SECONDARY choice (~30%)
🚀  — Launch, momentum, startup energy. TERTIARY choice (~30%)
```

**Element 2 — ATTENTION WORD (pick one per proposal):**
```
"Not a Demo:"           ← STRONGEST — pattern interrupt, curiosity trigger
"Here demo:"            ← When job asks for a live demo/sample/widget to try,
                         and Callstack genuinely fits (voice/chatbot/RAG/widget).
                         See "HERE DEMO STARTER" subsection below.
"{Keyword} Solution:"   ← Mirror client's tech (e.g. "LangGraph Solution:")
"In Production:"        ← When job emphasizes scale/reliability
"Real Solution:"        ← Generic fallback, always works
"{Name},"               ← When client name is known — personal connection
```

**Element 3 — HOOK (the core message — pick the STRONGEST for this specific job):**

### HOW TO CHOOSE THE HOOK — Read → Rank → Pick

Before writing the hook, analyze the job post systematically:

```
Step 1 — READ the job post. Find ALL signals:
  - Tech keywords (LangChain, RAG, AWS, FastAPI...)
  - Pain points ("we've been burned", "must be production-ready", "not a prototype")
  - Values ("async", "independent", "long-term", "take ownership")
  - Constraints ("US timezone", "start immediately", "no meetings")
  - Fears ("security", "reliability", "scalability")
  - Client history clues (avg rate, hire rate, past reviews)

Step 2 — RANK — what matters MOST to THIS client?
  - If they mention timezone 3 times → timezone kills hardest
  - If they say "proven experience" → proof kills hardest
  - If they say "production-ready, not a demo" → credibility kills hardest
  - If they list specific tech stack → tech match kills hardest
  - If they say "async / independent / no meetings" → work style kills hardest
  - If they say "long-term / ongoing" → commitment kills hardest

Step 3 — PICK the TOP 1-2 strongest signals for the 250-char hook.
  The rest goes in links / closing hook / Q&A.
  Don't default to tech keywords — sometimes timezone or "I ship 
  production systems" hits harder than listing frameworks.

Step 4 — SCAN for transferable proof BEFORE you decide to skip on domain.
  Common under-weighted matches (don't miss these):
  - Job is "fintech / lending / mortgage / banking"     → signals.x70.ai is FINTECH proof
  - Job is "Document AI / IDP / OCR" (regulated docs)    → Microsoft Document Intelligence has prebuilt models for mortgage/insurance/tax/legal
  - Job is "RAG over PDFs / regulated docs / compliance" → insurance Q&A chatbot work = chunking-strategy expertise
  - Job is "voice / IVR / call center"                   → callstack.x70.ai live demo
  - Job is "Claude Code / MCP / multi-agent SDLC"        → Monster Pack (claude-setup)
  - Job is "embeddable widget / sales chatbot"           → callstack.x70.ai (popup + sidebar modes)
  - Job is "real-time / Kafka / event-driven"            → PT Emails (RedPanda, 7 topics + 6 DLQs)
  - Job is "n8n / workflow orchestration"                → PT Calls (16 steps every 15 min)
  Before stamping a job SKIP because "domain doesn't match",
  check this list. Tool/keyword absence ≠ proof absence.
```

**Example — same job, different hooks based on what you prioritize:**

```
TECH MATCH (when they list specific stack):
  ✅ LangChain Solution: RAG with citations + function calling
  + AWS serverless — shipped and running.

PAIN KILLER (when they fear bad delivery):
  ⚡ Not a Demo: Financial AI agent with RAG + citations —
  running in production, not a prototype.

VALUE MATCH (when they want long-term / async):
  🚀 In Production: AI agent platform I built and maintain
  daily — looking for exactly this kind of long-term build.

COMBINED (when multiple signals align):
  ⚡ Not a Demo: RAG with citations + function calling +
  AWS — shipped for a financial services client.
```

All four are valid. The RIGHT choice depends on reading THIS client's priorities.

The hook is NOT always proof. It's whatever creates the strongest connection
with THIS specific client in THIS specific job. Scan the job post and pick:

```
TYPE A — PROOF HOOK (when you have direct experience match):
  "Production LangGraph platform · 6 agents · 36 tools · 611 evals"
  "Pipeline processing 1,000 calls/day · 8 AI stages · CRM sync"
  "Built and run signals.x70.ai — AI trading platform in production"

TYPE B — PAIN POINT KILLER (when job reveals a specific need/fear):
  "I ship production systems, not demos"
  "I prefer improving existing systems over rebuilding from scratch"
  "Async is my preferred mode — text-first, no meetings needed"
  "I'm direct and honest — if something is wrong, I say so immediately"
  "Claude Code and Codex are my daily drivers"

TYPE C — VALUE MATCH (when job has geographic/timezone/availability needs):
  "I'm not in US, but I can follow the timezone you need"
  "I'm not in Europe, but I can follow UK timezone"
  "Available to start today, no ramp-up needed"
  "Looking for exactly this — long-term, not one-off"

TYPE D — COMBINED (strongest — proof + pain killer in one):
  "Production LangGraph platform — 6 agents, 611 evals. Not a prototype"
  "My pipeline processes 1,000 calls/day. I know what scales"
  "Built my own AI SaaS — signals.x70.ai. I ship products, not demos"
```

**Priority:** Always try TYPE D (combined) first. If not possible, TYPE A (proof).
If no proof matches, TYPE B (pain killer). If nothing specific, TYPE C (value match).

### THE "HERE DEMO" STARTER (experimental — when Callstack fits)

Pattern interrupt: most freelancers write "I can build X". You lead with
"here's X already running — go try it". This is a new starter variant being
A/B-tested against the "Not a Demo:" formula.

**When to use (major vote — lean into it):**
- Job post explicitly asks for a demo, sample, working example, "share what
  you've built", "show me it works"
- Job mentions Twilio / voice agent / voicebot / IVR / call center
- Job mentions AI chatbot / live chat widget / embeddable widget / sales chatbot
- Job mentions LangChain / LangGraph / RAG and wants production proof
- Job mentions multi-tenant AI / contact-center AI / self-hosted AI

When any of the above hit, **prefer this starter.** When none hit, stick with
"Not a Demo:" / "In Production:" / proof-hook formulas.

**When NOT to use:**
- Job is pure backend / no UI (Kafka pipelines, ETL, data engineering)
- Job is pure ML fine-tuning / training
- Job is Microsoft 365 / enterprise Azure (use ai-microsoft-365 instead)
- Callstack tech stack doesn't overlap — don't force it

**Three link-placement variants — rotate for variety:**

```
VARIANT 1 — Link right after "Here demo:"
⚡ Here demo: https://callstack.x70.ai — AI voice agent over Twilio, click to talk.
Are you on Azure or open to it?

VARIANT 2 — Short hook between label and link
✅ Here demo: embeddable sales chatbot — https://callstack.x70.ai. Which CRM
should it sync into?

VARIANT 3 — Hook first, link at the end
🚀 Here demo — multi-tenant AI contact center, self-hosted. Talk to it:
https://callstack.x70.ai. How many tenants to start with?

VARIANT 4 — Two demos (use when the job wants proof the widget embeds)
⚡ Here demo: https://callstack.x70.ai (product) + https://roman.x70.ai
(same widget, embedded). Popup + sidebar modes. Which one fits your site?
```

All four work. Variant 1 is most direct. Variant 2 front-loads the value
keyword ("embeddable sales chatbot") before showing the URL. Variant 3 feels
most conversational. Variant 4 proves the widget drops into any site —
useful when the job specifically wants an embeddable sales-chatbot / widget
for their own domain. Rotate across proposals so the feed doesn't become
monotone.

**Rules:**
- Emoji: ⚡ / ✅ / 🚀 in normal rotation — no new emoji for this variant.
- Still cap at 250 chars in the preview. The URL eats ~28 chars, so hook + question must be tight.
- Don't force it when Callstack isn't a genuine fit. "Here demo:" with an irrelevant link reads worse than a proof hook.
- After 10–20 proposals, track views/replies/hires vs baseline. Keep if it beats "Not a Demo:"; drop if not.

### FORWARD BRIDGE (experimental tail — A/B vs pure-proof hooks)

Current hooks lean hard on past-tense proof: *"Built X"*, *"Production Y"*,
*"Shipped Z"*. That reads as **fact** — strong for credibility — but can leave
the client to *infer* "and you'll do it for me". Infer isn't zero-work.

The Forward Bridge adds a 2–6-word tail that explicitly pivots from
self-proof to client-commitment **without losing the 250-char punch or
trading fact for promise**.

**When to use:**
- When the hook is strong proof-heavy and you want it to pivot client-facing.
- When you sense the client needs reassurance the past work applies to
  their specific case (signals: "we're different", "not off-the-shelf",
  "bespoke").

**When NOT to use:**
- If the 2-line hook is already at budget — don't sacrifice the question
  for a tail.
- If "Here demo:" starter is in play (the link + question already provide
  forward framing).

**Three bridge variants — rotate across proposals:**

```
VARIANT A — "same stack for yours" (most direct)
⚡ Not a Demo: LangGraph platform, 6/36/611 — same stack for yours.
Agents sharing state centrally or between nodes?

VARIANT B — "ready to adapt for your use case" (consultative)
✅ Shipped & running: LangGraph platform, 6 agents, 36 tools — ready to
adapt for your use case. Which CRM should it sync into?

VARIANT C — "reshaping it for you" (tailored framing)
🚀 In Production: LangChain platform behind every channel — reshaping
it for your domain. How many tenants to start with?
```

All three keep past-tense proof as the anchor, append a 3–6 word
forward-commitment tail, then land the question. Character cost: roughly
4–8 chars vs a no-bridge hook — manageable.

**A/B measurement plan:**

1. Run the current pure-proof style on 50% of eligible proposals.
2. Run bridge variants (A/B/C rotating) on the other 50% for the same
   job types.
3. After ~30 proposals per arm, compare views/replies/hires.
4. **Keep** if the bridge lifts reply rate or hire rate by >20%. **Drop**
   if it's flat or negative.
5. Don't mix with "Here demo:" starter in the same proposal — keep arms
   clean so the measurement isolates the bridge effect.

**Important:** The bridge is *added* to an existing proof hook, not a
replacement. Never drop to *"I will build for you based on my same
stack"* alone — that reverts fact to promise and loses the credibility
advantage.

### PHASE BREAKDOWN (below-the-fold conversion block)

The 250-char preview gets the click. The phase breakdown **converts the click
into a reply**. See Part 1 PLATINUM STANDARD — that LLM Audit proposal
triggered the client to initiate the interview, driven almost entirely by
the phase breakdown below the fold.

**Why phases convert:** the client's biggest risk is *"does this person
understand what I'm asking for?"*. A scannable 3–6 phase plan with specific
sub-tasks removes that doubt faster than any amount of self-description.

**Three modes — pick the one that fits the job:**

#### MODE A — FULL phases (all phases exposed)
- When the scope is clearly bounded AND you can reasonably estimate
  end-to-end (fixed-price projects, typically $500–$5k)
- 3–6 phases total, each with: title + optional hours + 1–2 lines of specifics
- Final phase is often a walkthrough/review call (30min + prep)
- Implies: "I've already thought this through — here's the plan."

#### MODE B — TEASE (2–3 phases + closing question) ← default experiment
- When scope is unclear, long/ongoing, or deliberately under-specified by
  client; OR when even on a clear small project you want to force a reply
- Show 2–3 phases with just enough specificity to prove you understand
- End with a closing question inviting the client to ask for the full plan
- Goal: don't expose everything upfront — keep curiosity + require a reply
  to unlock the rest
- **This is the recommended default for early experimentation** — it has
  higher reply-generation leverage than full phases in most cases

#### MODE C — SKIP phases entirely
- Pure hourly team-augmentation with no fixed scope ("need Python dev 20hr/
  week ongoing", "ongoing LangChain help")
- When the client is looking for a dev to embed on their team, not a
  consultant with a plan

---

#### Mode A template (full phases)

```
Proposed {scope} breakdown ({total hours}, or just "— roadmap"):

Phase 1 — {Title} ({hours, optional})
{1–2 lines of specific activities, scannable, no sentences > 12 words}

Phase 2 — {Title} ({hours, optional})
{1–2 lines}

Phase 3 — {Title} ({hours, optional})
{1–2 lines}

...

Phase N — {Walkthrough / Review Call} ({30min + prep})
{Walk through findings, answer questions, final recommendations}
```

#### Mode B template (tease + closing question)

```
Early approach (2–3 phases, more to follow):

Phase 1 — {Title}
{1–2 lines of specific activities}

Phase 2 — {Title}
{1–2 lines}

Phase 3 — {Title, optional}
{1–2 lines — if you include this third, the tease is stronger but so is
the commitment}

{Closing question — invite the client to ask for the full plan}
```

---

#### Closing-question options for Mode B (rotate per proposal)

```
OPTION 1 (default, neutral):
Want me to send the full phase-by-phase roadmap with hours?

OPTION 2 (offers a deliverable, confident):
Happy to draft the complete breakdown as a 2-page roadmap — useful?

OPTION 3 (structured, best for enterprise / larger jobs):
Should I prepare the full roadmap with hours + deliverables per phase?

OPTION 4 (softest, removes friction):
I can send the complete phase plan if helpful — just say the word.

OPTION 5 (implies you've started, puts ball in their court):
Ready to spec phases 4+ in detail when you confirm scope.
```

Default: **Option 1**. Use Option 3 for enterprise/larger jobs. Rotate
2/4 occasionally. Option 5 when they gave you partial scope already.

---

#### Formatting rules

- **Blank line between phases** — matches the double-line-break discipline
  from Part 1 Gold Standard. Scannable, not a wall of text.
- **Phase title format:** `Phase N — {Title} ({hours})` where hours is
  **optional**. Include hours when budget is exposed and client benefits
  from transparency. Omit when fixed-price with deliverables-over-hours
  framing, or when you don't yet know.
- **1–2 lines per phase.** Maximum 12 words per sentence. If a phase
  description runs 3+ lines, you're saying too much — the phases are a
  trailer, not the movie.
- **Short visual lines (critical for phases).** Each rendered line must
  fit in one glance — never fill the full container width. When a
  description is longer than ~60–70 chars, **insert a manual break** at
  the nearest comma or natural pause. See the general Formatting Rules
  above for the WRONG/RIGHT example. This is the #1 readability rule
  for the phase block.
- **Parenthetical hour ranges are OK** (e.g., "2–3hr") when you want
  flexibility without hiding it.
- **Total hours in header** when disclosed — `Proposed breakdown (10–12 hrs):`.
  Builds trust via transparency.
- **Do not exceed 6 phases.** At 7+ the breakdown starts to look like
  over-engineering. 3–5 is the comfort zone; 2–3 is the tease sweet spot.

---

#### When NOT to include phases

- Mode C applies (pure hourly augmentation).
- Preview + links already consume the client's attention budget — don't
  add phases to an already-long proposal.
- Job post says "we'll discuss scope on a call" — sometimes they want
  the conversation, not the preview. Phases can feel presumptuous.
- You genuinely don't know the stack / scope well enough to propose
  even 2 phases — don't bluff. A strong preview alone beats weak phases.

### SEPARATOR RULES:

Use `·` middle dot separator ~30% of the time for visual variety.
Other times use commas `,` or em dashes `—`.
Never the same formatting on consecutive proposals.

```
WITH DOTS (30%):   ⚡ Not a Demo · Production LangGraph · 6 agents · 36 tools · 611 evals
WITH COMMAS (40%): ⚡ Not a Demo: Production LangGraph platform, 6 agents, 36 tools, 611 evals
WITH DASHES (30%): ⚡ Not a Demo: Production LangGraph platform — 6 agents, 36 tools, 611 evals
```

### EXAMPLES — Full 250-char previews:

**Proof hook + dots:**
```
⚡ Not a Demo · Production LangGraph platform · 6 agents · 36 tools ·
611 evals · RAG across 5 namespaces. Agents sharing state centrally
or between nodes?
```

**Keyword solution + commas:**
```
✅ LangGraph Solution: I shipped a production multi-agent platform,
6 agents, 36 tools, 611 evals, 5 RAG namespaces, AWS. Are your agents
sharing state centrally or passing between nodes?
```

**Pain point killer (timezone):**
```
⚡ Not a Demo: I'm not in US but I follow your timezone. Production
LangGraph platform — 6 agents, 36 tools, 611 evals. Agents sharing
state centrally or between nodes?
```

**Pain point killer (async preference):**
```
✅ Real Solution: Async is my preferred mode — text-first.
Production LangGraph platform, 6 agents, 36 tools, 611 evals.
Agents sharing state centrally or between nodes?
```

**Name known + proof:**
```
🚀 Roman, production LangGraph platform shipped — 6 agents, 36 tools,
611 evals, RAG across 5 namespaces, AWS. Agents sharing state
centrally or between nodes?
```

**In Production + dots:**
```
🚀 In Production · LangGraph platform · 6 agents · 36 tools ·
611 evals · RAG · AWS deployed. Runs daily for a UK e-commerce company.
Agents sharing state centrally or between nodes?
```

### COMPARE — good vs generic preview in the proposal list:

```
GOOD: "⚡ Not a Demo · Real-time SaaS with alert processing + multi-tenant
       dashboard — shipped and running. Which alert protocol for SOS —
       WebSocket or push?"

BAD:  "Hello, I have 10 years of experience in Python and AI development.
       I am very interested in your project and would love to discuss..."

ALSO BAD: "⚡ Not a Demo: I built a production multi-tenant SaaS platform
           with real-time data processing — 6 AI agents, 17 Docker containers,
           3 frontends, serving a UK e-commerce company daily. Multi-tenant
           architecture is my core..."
```

The first preview SELLS. The second wastes 250 chars saying nothing.
The third talks about YOU, not about THEM — and is too long (4 lines, no space for question).

### THE #1 MISTAKE — TALKING ABOUT YOURSELF INSTEAD OF THEIR PROBLEM

**CRITICAL LESSON:** The client does NOT need to know what you built in the 250-char preview.
They need to know you can solve THEIR problem.

Ask yourself before writing the hook:
```
❌ "What have I built?"           → leads to YOUR story, YOUR numbers
✅ "What does THIS CLIENT need?"  → leads to THEIR solution, THEIR keywords
```

**Wrong approach (your story):**
```
"I built a production multi-tenant SaaS platform with real-time data
processing — 6 AI agents, 17 Docker containers, 3 frontends, serving
a UK e-commerce company daily."
```
Client thinks: "Cool, but did you build a safety app?"

**Right approach (their solution):**
```
"Real-time SaaS with alert processing + multi-tenant dashboard —
shipped and running."
```
Client thinks: "This person understands what I need."

**The technique:** Take YOUR experience and REFRAME it using THEIR keywords.
- Your "real-time Kafka pipeline" → their "real-time alert processing"
- Your "multi-agent platform with 3 frontends" → their "multi-tenant dashboard"
- Your "signals.x70.ai" → their "real-time alert platform"

Same proof, different framing. The links prove the details — the preview sells the fit.

### 2-LINE HOOK RULE:

The hook (proof/pain killer/value match) must fit in **maximum 2 lines** of the preview.
This leaves space for the question on line 3-4 — which is critical because questions
invite replies and show you read the brief.

```
WRONG (4 lines, no space for question):
⚡ Not a Demo: I built a production multi-tenant SaaS platform with
real-time data processing — 6 AI agents, 17 Docker containers, 3
frontends, serving a UK e-commerce company daily. Multi-tenant
architecture is my core...

RIGHT (2 lines hook + question):
⚡ Not a Demo: Real-time SaaS with alert processing + multi-tenant
dashboard — shipped and running. Which alert protocol for SOS —
WebSocket or push?
```

**Count your lines in the preview.** If your hook takes more than 2 lines,
you're saying too much. Cut words. Use their keywords instead of your details.
Let the architecture page links tell the full story.

### How to Find the Client's Name:

Upwork sometimes shows client name on the job posting page (check "About the client"
section). If not visible, check their company name or recent hire history for clues.
If name is not findable — skip it and use attention word + hook instead.

### ROTATION STRATEGY:

Never use the same combination on consecutive proposals. Rotate:

```
Proposal 1: ⚡ + "Not a Demo:" + proof hook + commas
Proposal 2: ✅ + "{Keyword} Solution:" + proof hook + dots
Proposal 3: 🚀 + "In Production:" + pain point killer + dashes
Proposal 4: ⚡ + "{Name}," + proof hook + commas
Proposal 5: ✅ + "Real Solution:" + value match + dots
Proposal 6: 🚀 + "Not a Demo:" + combined hook + commas
...and so on, always varying
```

### Formatting Rules (below the 250-char fold):
- Double line break after EVERY line
- Max 50 words before links
- Links: `– {URL} - {short description}` (em dash, then hyphen)
- No essays. No paragraphs. Statements only
- Q&A answers: 1-3 lines per question. Lists when appropriate
- Link ordering: most-relevant project link first (sniper punch); `roman.x70.ai` + `github.com/roman-rr` always last (brand anchors). Hard cap: 5 total.
- **SHORT VISUAL LINES — manual line breaks.** No rendered line should fill
  the container width. Upwork renders proposals in a narrow column; a sentence
  that would wrap visually mid-phrase breaks the reader's rhythm. **Target
  ~60–70 characters per line (roughly 10–12 words).** Only the very first
  hook line may run longer (it reads as a header). When a description
  approaches full width, **break it manually at the nearest natural pause**
  — after a comma, before "and" / "with" / "via" / "for", between clauses.
  Never let Upwork auto-wrap mid-sentence.

  ```
  WRONG — one long sentence that will wrap mid-phrase:
  Base model justification, FT method vs H100 constraints, VRAM budget, data formatting, eval splits, overfitting checks.

  RIGHT — manual break at the nearest comma pause, two short readable lines:
  Base model justification, FT method vs H100 constraints,
  VRAM budget, data formatting, eval splits, overfitting checks.
  ```

  Applies to: phase descriptions, closing hooks, link descriptions that
  get long, Q&A answers — everywhere except the hook's first line.

---

## PART 3: TRIGGERS & TRICKS

### Opening Questions (pick ONE — must match their pain point)

```
Hello 👋 Which vector DB are you leaning toward — Pinecone, Qdrant, or pgvector?

Hello 👋 What type of documents will you use for RAG?

Hello 👋 Which CRM are you currently using — HubSpot, Salesforce, or custom?

Hello 👋 Is this running on Azure already or greenfield?

Hello 👋 How many calls/day are you processing currently?

Hello 👋 Which LLM are you leaning toward — Claude, GPT, or open-source?

Hello 👋 Are you planning separate Claude conversations per agent or shared context?

Hello 👋 What's the current latency pain — LLM response time, PDF parsing, or data fetching?

Hello 👋 What data sources are you pulling from first — APIs, browser, or email alerts?

Hello 👋 Which ad platforms are you running on primarily — Meta, Google, TikTok?

Hello 👋 What kind of products are you building first — internal tools or customer-facing SaaS?
```

### Timezone Triggers

```
I'm not in US, but I can follow the timezone you need.

I'm not in Europe, but I can follow UK timezone!

Timezone flexible — I overlap with EST/CST as needed.
```

### CTA Variations (ranked by strength)

```
Thank you for interest, write me to start work.          ← STRONGEST (10% winner)

I can start right today.                                  ← Strong (urgency)

Thank you for watching my proposal, ready to start immediately.  ← Good (warm)

Ready to start the qualifying sprint this week.           ← Good (milestone-aware)

Happy to do a quick paid discovery phase to scope this.   ← Good (for $5K+ projects)
```

### Availability Hooks (add after links when relevant)

```
By the way, I'm willing to work 40+ hrs/week ❗️

Available 30+ hrs/week starting immediately.
```

### Optional Closing Hooks (after links — use when it adds value, discard if not)

These go AFTER links as the last line. Optional — only if it adds a second pain point or grabs attention. Easy to remove if it feels forced.

```
AVAILABILITY / HOURS:
By the way, I'm willing to work 40+ hrs/week ❗️
Available 30+ hrs/week, async preferred ⚡

TIMEZONE:
I'm not in US, but I can follow the timezone you need.
Timezone flexible — happy to overlap with your team 🌍

PRODUCTION CREDIBILITY:
611 evaluations across my agent platform — I test what I ship ✅
My last pipeline processes 1,000 calls/day in production 🔥

SPEED / URGENCY:
Can deliver MVP within 2 weeks ⚡
Ready to start qualifying sprint today ❗️

OWN PRODUCT:
I also built my own AI SaaS — signals.x70.ai 🚀

CONFIDENCE:
Will integrate any API with confidence 💪
```

**Rule:** ONE closing hook max. If nothing feels natural — skip it. The proposal is already strong without it. Better no closing than a forced one.

### Confidence Phrases (for Q&A)

```
Sure, of course.

Will integrate any API with confidence.

10+ years of Python coding.

This is exactly what I built for [project].

Recently shipped [X] with all latest features.
```

---

## PART 4: LINK LIBRARY

> **See also: `attachment-library.md`** — sister catalog of images/videos/PDFs to attach to proposals (Upwork supports attachments; 1–3 relevant files per proposal amplifies the hook and links below).

### The link structure — **max 5 links, no exceptions except rare multi-tech cases**

```
[1-3 most relevant project links]   ← variable, chosen by job match
[https://roman.x70.ai]               ← ALWAYS present, anchor #4
[https://github.com/roman-rr/]       ← ALWAYS present, anchor #5
```

- **Hard cap: 5 total.** Escape hatch only for genuinely rare multi-tech jobs where all 3 project anchors + portfolio + github still isn't enough. Default: stay at 5.
- **Last 2 are always the same:** `roman.x70.ai` + `github.com/roman-rr`, in that order. These are the brand anchors — they close the proposal with "here's who I am."
- **First 1–3 vary:**
  - **1** if the job is laser-focused on exactly one case study ("super-sniper")
  - **2** if two case studies genuinely apply
  - **3** only when the job scope legitimately spans three (rare, big multi-tech jobs)
- **Ordering:** most-relevant project link first, brand anchors last. Sniper punch before self-intro.
- **Descriptions:** 3–5 words max, mirror job keywords (see Adaptive Descriptions below).

**IMPORTANT — Adaptive Descriptions:**
Link descriptions should mirror keywords from the job post when possible.
This creates psychological compliance — client sees THEIR words in YOUR links.

Example for PT Agents link:
```
DEFAULT:                    Multi-agent AI platform, 6 agents
JOB MENTIONS RAG:           Multi-agent AI platform + RAG
JOB MENTIONS LANGRAPH:      LangGraph multi-agent platform
JOB MENTIONS CHATBOT:       AI chatbot platform, 6 agents
JOB MENTIONS ORCHESTRATION: Agent orchestration, 36 tools
```

Example for PT Calls link:
```
DEFAULT:                    Speech-to-text pipeline, 1K calls/day
JOB MENTIONS N8N:           n8n pipeline, 1K calls/day
JOB MENTIONS ETL:           ETL pipeline, 8 AI stages
JOB MENTIONS LEAD SCORING:  Call pipeline + lead scoring
JOB MENTIONS CRM:           Call pipeline + HubSpot CRM sync
```

Example for PT Emails link:
```
DEFAULT:                    Real-time email pipeline, Kafka
JOB MENTIONS HUBSPOT:       Email pipeline + HubSpot enrichment
JOB MENTIONS CLASSIFICATION: AI classification pipeline, real-time
JOB MENTIONS EVENT-DRIVEN:  Event-driven pipeline, Kafka + DLQs
```

Example for Callstack link:
```
DEFAULT:                     Live AI voice + chat demo (click to talk)
JOB MENTIONS VOICEBOT:       AI voice agent demo — Twilio + Azure Voice Live
JOB MENTIONS CHATBOT:        Live AI chatbot demo — multi-tenant + RAG
JOB MENTIONS TWILIO:         Twilio AI agent demo (inbound + outbound)
JOB MENTIONS LIVE DEMO:      Click to talk — callstack.x70.ai
JOB MENTIONS CONTACT CENTER: AI contact-center replacement, self-hosted
JOB MENTIONS EMBED WIDGET:   Embeddable AI widget — popup/sidebar demo
JOB MENTIONS MULTI-TENANT:   Multi-tenant AI platform — voice + chat + widget
```

Example for Claude Setup link:
```
DEFAULT:                    Claude Code + MCP stack, 27+ tools
JOB MENTIONS MCP:           Multi-MCP setup, 3 servers, 27+ tools
JOB MENTIONS CLAUDE CODE:   Claude Code infra, hooks + skills + MCP
JOB MENTIONS SKILLS:        Claude Code skills + agent hooks setup
JOB MENTIONS AGENT HOOKS:   Agent hooks + MCP routing for any codebase
JOB MENTIONS DEV TOOLING:   Agentic dev infra, GitNexus + Serena + Beads
```

**Rule:** Keep it 3-6 words. Swap 1-2 words to match job keywords. Don't force it — if no keyword fits naturally, use the default.

**Portfolio & Github (always available):**
```
– https://roman.x70.ai - My portfolio & cases
– https://github.com/roman-rr/ - My Github, 700+ stars
```

**AI Agents / Chatbot / RAG:**
```
– https://roman.x70.ai/ai-agents - Multi-agent AI platform, 6 agents
```

**AI Voice / Chatbot / Contact Center / LIVE DEMO (the killer asset):**
```
– https://callstack.x70.ai - Live AI voice + chat demo (click to talk)         ← demo #1, primary
– https://roman.x70.ai - Portfolio with the same chatbot embedded              ← demo #2 / bonus
– https://roman.x70.ai/callstack-arch - Full multi-tenant architecture
```
This is the **only asset where the client can literally click and talk to the AI in 10 seconds.** Use `callstack.x70.ai` (subdomain, reads as a real product — not a file path under a portfolio) as the primary (demo #1). `roman.x70.ai` also hosts the **same Callstack widget** embedded directly on the portfolio — useful as "demo #2" / proof the widget embeds cleanly on any site. Use the `/callstack-arch` link when you also need to show architecture depth.

**Speech-to-Text / Data Pipelines / n8n:**
```
– https://roman.x70.ai/ai-calls - Speech-to-text pipeline, 1K calls/day
```

**Email / Event-Driven / Kafka / CRM:**
```
– https://roman.x70.ai/ai-emails - Real-time email pipeline, Kafka
```

**Microsoft / Azure / Enterprise:**
```
– https://roman.x70.ai/ai-microsoft-365 - Microsoft 365 + Azure AI platform
```

**Claude Code / MCP Setup / Agentic Dev Tooling:**
```
– https://roman.x70.ai/claude-setup - Claude Code + MCP stack, 27+ tools
```

**Trading / Crypto / MCP / Web3:**
```
– https://signals.x70.ai - My AI trading SaaS
– https://signals.x70.ai/mcp-docs - MCP server docs
– https://signals.x70.ai/skills - AI skills & tools
– https://github.com/roman-rr/trading-skills - Trading skills repo
```

**Frontend / Open Source:**
```
– https://github.com/tech-systems/panes - UI library, 1K+ stars
```

**Laravel / E-commerce:**
```
– https://cartgenie.com/ - E-commerce SaaS, Laravel
– https://github.com/roman-rr/kanye-quotes - Laravel demo project
```

**Academic:**
```
– https://www.researchgate.net/profile/Roman-Antonov-3 - My LLM academic research
```

### DEPRECATED — Never use
- ~~http://roman-rr.github.io/~~ → replaced by **roman.x70.ai**

---

## PART 5: WHICH LINKS FOR WHICH JOB

### Quick Reference — Match by Job Topic

| When job is about... | Primary link | Secondary link |
|---|---|---|
| AI Agents / Chatbot / RAG | callstack.x70.ai (live demo) | PT Agents architecture |
| LangGraph / LangChain / Agentic | callstack.x70.ai (live demo) | PT Agents architecture |
| AI Voicebot / IVR / Call Center / Twilio | callstack.x70.ai (live demo) | callstack-arch |
| AI Chatbot / Live Chat / Embed Widget | callstack.x70.ai (live demo) | PT Agents |
| "Please share a demo" jobs | callstack.x70.ai | callstack-arch |
| Python / FastAPI backend (AI-flavored) | callstack.x70.ai (live demo) | PT Emails architecture |
| Automation / CRM / n8n | PT Emails architecture | PT Calls architecture |
| Microsoft / Azure / Enterprise | Microsoft 365 architecture | PT Agents architecture |
| Claude Code / MCP / Agent hooks / Dev tooling | claude-setup | PT Agents architecture |
| Trading / Crypto / MCP / Web3 | signals.x70.ai | trading-skills repo |
| Speech-to-Text / Pipelines / ETL | PT Calls architecture | PT Emails architecture |
| Laravel / Full-Stack | cartgenie.com | github.com/roman-rr |
| E-commerce / SaaS / DTC | PT Agents + cartgenie.com | signals.x70.ai |
| Frontend / React / Next.js | tech-systems/panes | roman.x70.ai |
| General AI / Python | callstack.x70.ai (live demo) | PT Agents architecture |

### CRITICAL — Tech Stack Matching (pick the top 1–3 matches)

When a job mentions specific technologies, check which of your case studies
prove experience with THAT technology. The blocks below show ALL candidates —
use them to **pick the top 1–3 most relevant**, then close with the 2 brand anchors
(`roman.x70.ai` + `github.com/roman-rr`) for a total of max 5.

**If job mentions LangGraph / LangChain / agents / function calling / tool use:**
```
→ callstack.x70.ai (LIVE demo — LangChain ReAct agent behind every channel)
→ PT Agents (LangGraph, LangChain, DeepAgents, 36 tools, 611 evals)
→ PT Calls (agent analytics, call explorer — LangGraph-powered)
→ PT Emails (AI classification pipeline — LangGraph-powered)
Prefer callstack as the #1 — a client who can TALK to a LangChain agent
beats reading about one. Add PT Agents if they want architecture depth.
```

**If job mentions RAG / vector database / semantic search / embeddings:**
```
→ callstack.x70.ai (LIVE demo — FAISS RAG, tenant-scoped, citations in every response)
→ PT Agents (RAG across 5 Pinecone namespaces)
→ PT Calls (Pinecone indexing for semantic call search)
→ PT Emails (Pinecone for semantic email search)
→ Microsoft 365 (Azure AI Search RAG, hybrid vector + keyword)
Lead with callstack when they want a demo they can try. Lead with PT Agents
if the job is heavier on vector-DB internals (sharding, namespaces, tuning).
```

**If job mentions FastAPI / Python backend / API development:**
```
→ callstack.x70.ai (LIVE demo — FastAPI backend, WebSocket voice, async throughout)
→ PT Emails (FastAPI, async, structured outputs)
→ Microsoft 365 (FastAPI on Azure Container Apps)
→ signals.x70.ai (Python async backend)
```

**If job mentions AWS / cloud infrastructure / serverless:**
```
→ PT Agents (AWS EC2, S3, Athena, Docker, GitHub Actions CI/CD)
→ PT Calls (AWS S3 data lake, Athena SQL, medallion architecture)
→ PT Emails (AWS EC2, Docker, CI/CD)
```

**If job mentions Terraform / IaC / Azure infrastructure:**
```
→ Microsoft 365 (Terraform + Bicep IaC, Service Bus, KEDA, Container Apps)
```

**If job mentions Kafka / event-driven / streaming / real-time:**
```
→ PT Emails (RedPanda/Kafka, Avro, 7 topics + 6 DLQs, GCP Pub/Sub)
```

**If job mentions n8n / automation / workflow orchestration:**
```
→ PT Calls (n8n every 15 min, 16 pipeline steps)
→ PT Agents (n8n runs 10 workflows & jobs)
```

**If job mentions CRM / HubSpot / Monday / Salesforce:**
```
→ PT Emails (HubSpot enrichment, Monday tasks, AI classification)
→ PT Calls (HubSpot sync, Monday tasks, lead scoring)
→ PT Agents (HubSpot deals/contacts, Monday boards)
```

**If job mentions data pipelines / ETL / medallion / data lake:**
```
→ PT Calls (Bronze/Silver/Gold medallion, S3 data lake, Athena)
→ PT Emails (6 pipeline stages, RedPanda streaming)
```

**If job mentions financial / trading / fintech:**
```
→ signals.x70.ai (AI trading platform, real-time market analysis)
→ PT Agents (HubSpot deal analytics, revenue/payment analysis)
```

**If job mentions security / encryption / auth / compliance:**
```
→ PT Emails (Fernet encryption, OAuth2, excluded senders filtering)
→ Microsoft 365 (Entra ID/MSAL, Azure Key Vault, RBAC)
→ PT Agents (Supabase Auth, Slack OAuth)
```

**If job mentions Stripe / SaaS billing / payments:**
```
→ signals.x70.ai (TON/Web3 payments, subscription model)
```

**If job mentions Twilio / PSTN / voice agent / voicebot / IVR / AI receptionist / call center:**
```
→ callstack.x70.ai (LIVE demo — Twilio + Azure Voice Live + LangChain ReAct, one agent for inbound + outbound)
→ callstack-arch (full architecture — 15 platform features, μ-law↔PCM16 codec bridge, MongoDB checkpointing)
→ PT Calls (speech-to-text pipeline, complementary for batch analytics)
```

**If job mentions embeddable chatbot / chat widget / embed / sidebar chat / sales chatbot:**
```
→ callstack.x70.ai (live embeddable widget — popup + sidebar modes you can toggle right on the page)
→ PT Agents (multi-agent production platform for deeper architecture)
```

**If the job post asks for a working demo / "share a demo" / "show me it works":**
```
→ callstack.x70.ai (talk to it right now — no signup, no waiting)
```

**If job mentions Document AI / IDP / OCR (mortgage, lending, insurance, legal, healthcare, regulated docs) / Ocrolus / Docsumo / Textract / Form Recognizer:**
```
→ Microsoft 365 / Azure Document Intelligence (PRIMARY — prebuilt mortgage/insurance/tax models, tunable for edge cases)
→ Insurance Q&A chatbot (chunking-strategy expertise for long regulated PDFs)
→ PT Emails (98% AI classification accuracy on real-world email flows — proves "production document AI, not basic OCR")
Frame: "Microsoft Document Intelligence has prebuilt models for X" — disqualifies
generic-OCR competitors immediately. Mention chunking-strategy nuance — separates
"shipped Document AI" from "wrapped a Tesseract call".
```

**If job mentions fintech / lending / mortgage / banking / insurance / regulated financial data:**
```
→ signals.x70.ai (own fintech SaaS — multi-source AI consensus on regulated financial data, real-money stakes)
→ Microsoft 365 / Azure AI (Document Intelligence has fintech-vertical templates)
→ PT Agents (financial revenue analysis, HubSpot deal analytics)
Frame: don't pretend you've shipped at a top-5 lender, but DO surface signals as
fintech proof, MS Document Intelligence as mortgage-doc tooling, and insurance
Q&A as regulated-document RAG experience.
```

**If job mentions Claude Code / MCP / agent hooks / skills / slash commands / agentic dev tooling / code intelligence:**
```
→ claude-setup (GitNexus + Serena + Beads — 27+ MCP tools, 8 hooks, 11+ skills, 2 dashboards, $0 cloud deps)
→ PT Agents (for MCP-in-production credibility; signals also ships an MCP server)
```

**RULE:** Pick the **top 1–3 most relevant** project links from the matches above — then close with `roman.x70.ai` + `github.com/roman-rr` as the last 2 anchors. **Hard cap: 5 total.**

- Super-sniper job (one clear tech fit)? → **1** project link + 2 anchors = 3 total
- Two case studies genuinely apply? → **2** project links + 2 anchors = 4 total
- Big multi-tech job ($5K+ spanning 3+ matches)? → **3** project links + 2 anchors = 5 total
- Exception: if a genuinely huge enterprise job spans 4+ tech areas AND the client explicitly rewards breadth, you may include a 4th project link — but this is rare; default to discipline.

More links ≠ more persuasive. Over 5 dilutes focus and reads like a résumé dump.

---

## PART 6: PROJECT PROOF POINTS

Numbers to use in Q&A answers. Pick the ONE most relevant.

### Callstack AI — Multi-Tenant Voice & Chat Platform (LIVE DEMO — top-tier asset)
- **Demo #1: callstack.x70.ai** — client can click & talk in 10 seconds. The only asset where prospects can literally test the AI.
- **Demo #2: roman.x70.ai** — the same Callstack widget is embedded on the portfolio itself. Proves the widget drops cleanly into any site without breaking layout.
- One LangChain ReAct agent behind every channel: Twilio PSTN (inbound + outbound), Azure Voice Live browser voice, CopilotKit chat, embeddable widgets (popup + sidebar)
- μ-law 8kHz ⇄ PCM16 24kHz bidirectional codec bridge; sub-2s first-audio TTFT
- 15 platform features: multi-tenant isolation, RAG over tenant docs (FAISS), encrypted Fernet vault, per-tenant prompts, concurrent call caps, voice↔chat sync, GDPR residency, admin console, streaming (AG-UI), thread persistence (MongoDB checkpointing)
- Stack: LangChain/LangGraph, FAISS, MongoDB, Azure Voice Live, Twilio, CopilotKit (AG-UI streaming), FastAPI, React + Vite embed
- **Use when:** AI voicebot, AI chatbot, RAG, LangChain/LangGraph, FastAPI/Python, Twilio, contact-center AI, embeddable widget, multi-tenant SaaS AI, "share a demo" jobs. **Your #1 go-to for any chatbot/voice/RAG/LangChain proposal** — the client can LIVE-test.

### PT Agents — Multi-Agent AI Platform
- 6 sub-agents, 36 tools, 611 evaluations, 17 Docker containers
- 3 frontends (Slack, React, CopilotKit), RAG across 5 Pinecone namespaces
- LangGraph orchestration, PostgreSQL checkpointing
- OpenTelemetry + LangSmith + BetterStack, AWS EC2, GitHub Actions CI/CD
- **Use when:** AI agents, chatbots, multi-agent, RAG, LangGraph

### PT Calls — Speech-to-Text Pipeline
- ~1,000 calls/day, Bronze/Silver/Gold, 16 steps, 8 AI stages
- 80+ subcategories, 5 destinations (Athena/Pinecone/HubSpot/Monday/Neo4j)
- n8n every 15 min, fully idempotent
- **Use when:** Speech-to-text, pipelines, ETL, n8n, CRM

### PT Emails — Real-Time Email Pipeline
- RedPanda/Kafka, Avro, 7 topics + 6 DLQs, 6 pipeline stages
- AI classification (category/priority/sentiment/action), 42 Gmail labels
- Auto-draft replies, HubSpot enrichment, full idempotency
- **Use when:** Email automation, Kafka, event-driven, CRM, AI classification

### Microsoft 365 + Azure AI
- Graph API, Service Bus + KEDA (scale-to-zero), Cosmos DB
- Azure AI Search RAG, Copilot Studio, Fabric + Power BI, Bicep IaC
- **Azure Document Intelligence** (formerly Form Recognizer) — prebuilt models including mortgage industry templates: 1003 forms, paystubs, bank statements, tax forms. Tunable for edge cases.
- **Use when:** Azure, Microsoft 365, Copilot Studio, SharePoint, enterprise. **Also use when:** Document AI / IDP / OCR-with-understanding for fintech/lending/insurance/legal/regulated docs (Document Intelligence is the canonical Azure tool for this — competes directly with Ocrolus, Docsumo, AWS Textract).

### Monster Pack — Claude Code + MCP Infrastructure
- 3 intelligence systems (GitNexus + Serena + Beads), 27+ MCP tools, 8 hooks, 11+ skills, 2 dashboards, 0 cloud deps
- Knowledge graph (21.5k⭐ GitNexus) + LSP-based precision editing (Serena) + git-embedded task graph (20.2k⭐ Beads)
- Custom Claude Code hooks: SessionStart, PreCompact, PreToolUse/PostToolUse; custom git post-commit pipeline
- Auto-routing rules in CLAUDE.md; status line with context pressure bar
- **Use when:** Claude Code setup, MCP server work, agent hooks, skills/slash commands, agentic dev tooling, code intelligence, LSP/graph-aware refactoring. This is the "I'm a Claude Code ninja" proof.

### Signals — AI Trading Intelligence (Own Product, FINTECH)
- 17 data dimensions, 3 AI experts, 50+ coins, auto-verification every minute
- 53 academic citations, 44 scientific methods, transmission chains
- Web3/TON payments, Python async, Docker
- **Use when:** Trading, crypto, MCP, Web3, AI SaaS. **Also use as fintech proof** for any job involving regulated financial data, real-money stakes, multi-source consensus, or financial-services domain (lending/mortgage/insurance/banking-adjacent jobs). Don't auto-skip a fintech-flavored job thinking you have no fintech proof — signals IS fintech.

### CartGenie — E-commerce SaaS (Laravel)
- 671 hours, $21,461 earned, 5-star review
- Laravel + Livewire + Alpine.js, 90% frontend + internal backend
- Client: "Roman is highly communicative. He works hard and was a good contributor."
- **Use when:** Laravel, e-commerce, Livewire, full-stack

### Insurance Q&A Chatbot — RAG over regulated policy documents
- Multi-tenant Q&A pattern (Callstack tenant model) over insurance product docs
- **Significant time spent on chunking strategy** — sentence-window vs. recursive vs. semantic chunking, overlap tuning, page-aware splits for long policy PDFs
- Embedding choice + retrieval tuning for high-accuracy answers on regulated/compliance-sensitive content
- **Use when:** RAG over long regulated documents (insurance, legal, mortgage, healthcare, compliance), chunking-strategy expertise, document-AI accuracy beyond basic OCR. The chunking nuances transfer directly to any regulated-document domain.

### Open Source — Cupertino Pane
- 1K+ GitHub stars, 600K+ downloads
- **Use when:** Frontend credibility, open source

### ML Experiments (personal, growth area)
- GPT fine-tuning via OpenAI API, HuggingFace + Colab workflows
- vLLM running locally, OOM debugging on EC2 GPU instances
- LoRA / adapter experiments
- **Use when:** Job bridges orchestration + fine-tuning, or pure ML at $40+/hr.
  Frame as "not my primary niche, but hands-on and willing to grow into it" — don't overclaim.

---

## PART 7: CREDENTIALS

Pick 1-2 per proposal. Don't list all.

```
Azure AI Fundamentals certified (AI-900)
20+ years full-stack engineering
$400K+ earned on Upwork, 100% Job Success, Top Rated
Open source: Cupertino Pane — 1K+ stars, 600K+ downloads
Multi-cloud: AWS, Azure, GCP
Production scale: 1,000 calls/day, 17 Docker containers, 611 evaluations
Full product ownership: signals.x70.ai
Current tooling: Claude Code, Codex, Cursor
```

**IMPORTANT:** Cert is Azure AI Fundamentals (AI-900), NOT AI Engineer Associate.

---

## PART 8: SKILLS MATRIX

```
AI & LLM:        LangGraph, LangChain, LangSmith, ChatGPT/GPT, Claude, Gemini,
                  Llama, Mistral, DeepSeek, Grok, Groq, RAG: Pinecone/FAISS/Chroma/Weaviate/
                  Azure AI Search, Fine-tuning, LoRA, Embeddings, HuggingFace, Prompt Engineering, NLP, Whisper
                  Speech-to-Text, Structured Outputs, vLLM, GPU optimization

AI Agents:        DeepAgents, ReAct, Human-in-the-Loop, Strands, ADK, A2A, CrewAI,
                  Multi-Agent Systems, AI Chatbot
                  MCP (Model Context Protocol)

Microsoft:        Microsoft Graph, Copilot Studio, Azure AI Search, Azure Service Bus,
                  KEDA, Cosmos DB, Logic Apps, Microsoft Fabric
                  Power BI, Bicep IaC, Entra ID / MSAL

Automation:       HubSpot CRM, Monday, Slack, Gmail API, GCP Pub/Sub, n8n, Zapier, Make,
                  Telegram Bot API & MiniApps, ETL Pipelines
                  Workflow Automation, API Integration

Cloud:            AWS (S3, Athena, EC2, RDS), Azure (App Service, Container Apps, Key Vault),
                  GCP, Docker, Kubernetes, PostgreSQL, MongoDB
                  Redis, Neo4j, RedPanda/Kafka, Avro, GitHub Actions CI/CD

Full-Stack:       React, Next.js, TypeScript, REST/GraphQL APIs, Python, FastAPI, Streamlit,
                  Stripe, TON blockchain payments
```

---

## PART 9: PRICING GUIDE

| Tier | Rate | When |
|---|---|---|
| Gold spot | $50/hr | Strong projects, good clients |
| Comfortable | $45/hr | Ongoing work, retainers |
| Acceptable | $40/hr | Text-only, fast wins, interesting projects |
| Critical (rare) | $30–$35/hr | Exceptionally interesting or strategic |
| Fixed-price | Hours × $80/hr + 20% buffer | Fixed-price bids |
| Discovery phase | $500 – $1,000 | Scoping big projects |

**After every proposal:**
1. Set rate or fixed bid
2. Add 1–5–10 boosted Connects (even small boost = higher in list)
3. Speed wins — apply within first hour

---

## PART 10: DO'S AND DON'TS

### DO
- Follow Gold Standard: Question → Timezone → CTA → Links
- Double line break after every line
- Under 50 words before links
- Q&A: 1-3 lines, lists when needed
- Apply within first hour
- Match links to job (see Part 5). **Structure:** 1–3 relevant project links first, then `roman.x70.ai` + `github.com/roman-rr` as the last 2 anchors. Max 5.
- Confidence: "Sure, of course." / "Will integrate any API with confidence."

### DON'T
- Write essays or paragraphs
- Exceed 5 links total — and never skip the `roman.x70.ai` + `github.com/roman-rr` anchors as the last 2. Pick 1–3 project-specific links, always close with those two.
- Lead with years of experience
- Use "I read your job post with great interest"
- Compete on price
- Send same proposal to every job
- Loom videos unless asked
- Apply to jobs older than 4-6 hours
- Claim "AI Engineer Associate" (you have AI-900)
- Auto-skip "pure ML / fine-tuning" jobs — these are a growth area; judge on rate + learning value
- Ignore meeting/sync red flags in the job post — if a client lists heavy sync requirements, either push rate up or skip

---

## PART 11: PREFERENCES & RULES

- **Communication preference:** Text/message is default and preferred. Calls/meetings are OK **at higher rates** — the higher the rate, the more call tolerance. **Yellow-flag and weight the job down** when the post shows strict/frequent-sync signals: "daily standups", "must attend all team meetings", "video-first culture", "multiple check-ins per day", "weekly sync required". Those environments tend to be stressful and meaning-light — either push the rate significantly higher or skip entirely.
- **ML / fine-tuning is a growth area, not a no-go.** Don't auto-skip "pure ML" jobs. Evaluate on rate + learning value. Bridge jobs (orchestration + training) are ideal; standalone ML at **$40+/hr** is still worth considering even though market peak for pure ML is lower.
- **Speed matters** — apply within first hour
- **Link format:** `– {URL} - {short description}`
- **Certification:** Azure AI Fundamentals (AI-900)
- **Profile title:** AI Solutions Architect | AI Agents | LangChain | RAG | Python

---

## PART 12: JOB SCORING — PROFILE SEO LAYER

When evaluating whether to apply, rate, and negotiate — don't only look at budget × scope × fit. **Also weight the profile SEO value** a completed job adds to your Upwork presence.

Every finished job appears on your public profile with:
- **The job title** (verbatim, visible on your completed-jobs list)
- **The skills the client tagged** on the post (attached to your profile as "used on this job")

Both feed Upwork's internal ranking. Future clients searching "AI Chatbot Developer" or "LangChain specialist" see profiles whose *recent completed jobs* have those exact words in the title or skill tags **ranked higher** in results. This compounds over time — a well-titled 2-week contract today pays SEO dividends for months.

### Title signals worth pursuing

Well-titled job posts using keywords you want permanently associated with your profile:
- "AI Chatbot Developer for …"
- "AI Agent Integration for …"
- "LangChain / LangGraph specialist needed for …"
- "AI Automation / AI Workflow / AI Assistant …"
- "RAG Engineer for …"
- "Multi-Agent System Architect …"
- "Claude Code / MCP integration expert …"
- Example from a real post: *"AI Chatbot Developer for AI Agent Integration, AI Automation, and AI Workflow in Education Platform"* — gold-standard title, every keyword is on-brand.

Jobs with generic or off-brand titles ("Python dev needed", "Full-stack developer", "General coding help", "WordPress fixes") contribute little SEO value even at the same or higher rate.

### Skill-tag signals

When the client has tagged the post with skills you actively want on your profile, that's a signal to prioritize. Look for:
- `AI Chatbot`, `Artificial Intelligence`, `AI Agent`
- `LangChain`, `LangGraph`, `LangSmith`
- `Retrieval-Augmented Generation`, `RAG`
- `OpenAI API`, `Azure AI`
- `Multi-Agent Systems`
- `AI Development`, `AI Consulting`, `AI Engineering`

### Rate flexibility for high-SEO jobs

A job with a gold-standard title + strong skill tags can justify:
- Dropping one rate tier ($50 → $45)
- Going as low as **$35/hr** for an exceptional title + skill match (absolute floor)
- Taking a short quick-win ($500–$1,500 fixed — higher is even better) purely for the 5-star + on-brand title
- Applying to a slightly off-niche job if the title/skills are perfect
- Being less strict on "I'm not in US" / timezone negotiation

**But not:** weeks of discounted work for a title, or going below $35/hr. The SEO payoff compounds but isn't infinite — bad economics still wins the short term.

### How this changes the proposal

- When the title is SEO-gold, **mirror the exact title keywords in your 250-char hook**. ("AI Chatbot Developer" → use that phrase verbatim in your preview.)
- Links still follow the 1–3 relevant + 2 anchors rule (Part 4).
- In the rate field, you may go slightly below your normal tier — optionally frame it as: *"prioritizing this project to deliver a great outcome"* rather than just undercutting.
- Watch for "hybrid" jobs where the title is great but scope is mixed (e.g. AI chatbot + some WordPress) — still worth it; the title + skills matter more than the scope mix for SEO.

### Mental rule of thumb

Three questions before applying:
1. **Will this job's title make me look more like an "AI Agents / LangChain / Chatbot expert" on my profile?**
2. **Are the skill tags ones I want associated with my completed work?**
3. **Is the rate acceptable given that SEO uplift?** (Gold → Comfortable → Acceptable → $35 floor)

Yes on 1 + 2 = lean in, even if rate is one tier down. No on 1 + 2 = apply only on pure economics (gold/comfortable tier only).
