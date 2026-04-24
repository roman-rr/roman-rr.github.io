export default {
  title: 'Senior Full-Stack AI-Native SDLC (4 projects)',
  h1: 'Senior Full-Stack Developer — AI-Native SDLC Across Four Projects',
  meta: 'Hourly · Posted $20–$35/hr but client pays $72 avg, recent hires at $85–$150/hr · Intermediate label (misleading — wants senior) · 3–6 months, &lt;30 hrs/week · Async-first, weekly 15-min sync · Client: US/NY, 4.99⭐ (4 reviews), 59% hire rate, $59K spent, 752 billed hrs · 50+ proposals in · Fresh (46s ago)',
  verdict: `<strong>Verdict: APPLY (strongest fit this session — #1 target).</strong> Monster Pack (<code style="font-family:'JetBrains Mono',monospace;font-size:12px">roman.x70.ai/claude-setup</code>) is a literal 1:1 match for their Claude Code / MCP / multi-agent / CLAUDE.md asks. Full-stack spread (FastAPI/Next.js/Laravel) covered. Async-first + 15-min weekly sync matches your communication preference perfectly. Client's real pay ceiling is $110–$150/hr, not the posted $35.`,

  coverLetter: `⚡ Claude Code Solution: Monster Pack — GitNexus + Serena + Beads,
27+ MCP tools, 8 hooks, 11+ skills, custom CLAUDE.md for any codebase.
Single-agent or multi-agent across your 4 projects?

Thank you for interest, write me to start work.

– https://roman.x70.ai/claude-setup - Claude Code + MCP infra, 27+ tools
– https://roman.x70.ai/ai-agents - Multi-agent platform, 611 evals, 36 tools
– https://callstack.x70.ai - Live multi-tenant AI agent demo
– https://roman.x70.ai - My portfolio & cases
– https://github.com/roman-rr/ - My Github, 700+ stars

Proposed approach (first sprint):

Phase 1 — SDLC audit + CLAUDE.md unification
Review all 4 projects' .claude/ configs, branching, CI/CD.
Propose a canonical setup per project family.

Phase 2 — MCP server topology + agent routing
Per-project MCP decisions (GitNexus/Serena/Beads or lighter),
agent mode vs multi-agent routing, skills + slash commands.

Phase 3 — Pilot on Project A (FastAPI ops platform)
Roll out the new workflow, measure developer velocity
and token efficiency before rolling to B/C/D.

Want me to send the full phase-by-phase roadmap across all 4 projects?`,

  bid: {
    value: '$50/hr',
    note: 'Gold tier per playbook Part 9. Posted budget ($20–$35) is fishing — client\'s actual paid rates are $72 avg with recent jobs at $85, $110, $110, $150. Bidding at their posted cap ($35) signals commodity, which is exactly what they DON\'T want (they explicitly want "strong opinions" and process authority). If they counter to $45, land there. Below $45, walk.',
  },

  boost: {
    value: '20 Connects + Boost 5–10',
    note: '50+ proposals in 7h (though fresh feed entry at 46s). Serious client, last-viewed 1h ago. Small boost (5–10) puts you in the first 10% seen. The Monster Pack differentiator is unique enough that it should carry without heavy boost, but speed matters — submit within 15 min.',
  },

  attachments: {
    hint: '1 attachment only — Monster Pack has no screenshots yet (gap flagged in attachment-library)',
    list: [
      {
        path: 'public/cases/pt-agents/per-agent-analytics-2.png',
        note: 'Agent observability dashboard: 107 queries, 568 tool calls, 100% success, "~1 day 12h saved" metric. Best available proxy for multi-agent depth since Monster Pack has no visual assets yet. Supports the multi-agent + tool-calling claim.',
      },
    ],
    note: `<strong>Why only 1:</strong> the primary link <code style="font-family:'JetBrains Mono',monospace;font-size:12px;color:#6de4fb">roman.x70.ai/claude-setup</code> does the heavy lifting here — it's a full visual architecture page with 14 sections. One supporting screenshot is enough. Adding 2 more images would dilute focus.
      <br><br>
      <strong>Gap note:</strong> Monster Pack screenshots (GitNexus dashboard, Beads task board, status-line terminal) would be the ideal attachments but don't exist yet. Capturing them is worth doing before the next similar job — see <code style="font-family:'JetBrains Mono',monospace;font-size:12px;color:#6de4fb">attachment-library.md</code> "Current gaps".`,
  },

  qa: {
    hint: '3 questions — triple-click each answer → paste',
    list: [
      {
        label: 'Q1.',
        question: 'How have you set up SDLC workflows (branching, CI/CD, testing) on a past project? What tools?',
        answer: `Full CI/CD on PT Agents via GitHub Actions.
Testing pyramid: pytest + 611 function-calling evals across 36 tools,
integration runs per agent, plus smoke tests on deploy.

Branch protection with required reviews. Env parity via Docker Compose → AWS EC2.
ADRs committed per major architecture decision.

Monitoring: OpenTelemetry + LangSmith + BetterStack,
alerting on agent error rates and tool-call timeouts.`,
      },
      {
        label: 'Q2.',
        question: 'Describe your Claude Code / AI development workflow in detail — skills, agent mode, multi-agent, MCP?',
        answer: `Built Monster Pack — GitNexus (code knowledge graph) + Serena (LSP-based
precision editing) + Beads (task memory / agent state). 27+ MCP tools total,
8 hooks including custom SessionStart (bd prime), PreCompact,
PreToolUse enrichment of Grep/Glob with graph context.

.claude/skills/ organized per-module via Leiden clustering.
CLAUDE.md enforces auto-routing rules (e.g., "what breaks if I change X?"
→ impact tool; "rename Y" → Serena).

Agent mode for focused tasks, multi-agent via @task-agent for autonomous
execution loops. Permission modes tuned per project.

Full architecture writeup with 14 sections: https://roman.x70.ai/claude-setup`,
      },
      {
        label: 'Q3.',
        question: 'One link to a shipped project if public or a description of a relevant project.',
        answer: `https://roman.x70.ai/ai-agents — LangGraph multi-agent platform,
6 sub-agents, 36 tools, 611 evals, running in production on AWS EC2
for a UK client. Three frontends (Slack, React, CopilotKit),
RAG across 5 Pinecone namespaces, MongoDB/PostgreSQL checkpointing.`,
      },
    ],
    note: `<strong>Bonus (only if they ask or have room for it):</strong> <em>"Strongest stack: Python/FastAPI + TypeScript/Next.js. Weakest: PHP/Laravel (CartGenie is real but older — I'd ramp if Project D becomes active, happy to say that upfront)."</em> — honesty about Laravel being less fresh signals authenticity; clients hate people who pretend all stacks are equal.`,
  },

  reasoning: [
    { part: 'Part 2',
      text: '<strong>Hook:</strong> "{Keyword} Solution:" — "Claude Code Solution:" mirrors their exact vocabulary. Stronger than "Here demo:" here because claude-setup is not a live-clickable demo; it\'s a documented architecture. ⚡ emoji for speed/energy.' },
    { part: 'Part 4',
      text: '<strong>Links:</strong> 3 project + 2 anchors = 5 total. Ordering: claude-setup first (direct bullseye match) → ai-agents (multi-agent depth, 611 evals) → callstack (live demo dimension, multi-tenant proof) → roman.x70.ai + github (brand anchors last). No signals.x70.ai here — not relevant to SDLC/Claude Code angle.' },
    { part: 'Part 2',
      text: '<strong>Phases:</strong> Mode B tease — 3 phases + default closing question. 4 projects over 3–6 months is way too big to fully spec; tease keeps curiosity alive.' },
    { part: 'Part 9',
      text: '<strong>Rate:</strong> $50 gold tier despite posted cap of $35. Justified by client\'s actual paid history ($72 avg, $110/$150 recent). Bidding their cap signals commodity — exactly what they DON\'T want. If countered, land at $45.' },
    { part: 'Part 11',
      text: '<strong>Communication fit:</strong> their "async-first, weekly 15-min sync" matches your text-first preference directly. No meeting red flags to yellow-flag.' },
    { part: 'Part 12',
      text: '<strong>Profile SEO:</strong> title is B+ (Senior Full-Stack + AI-Native). Skill tags Claude + Prisma + Midjourney will compound. Not SEO-gold but supporting.' },
    { part: 'Part 2',
      text: '<strong>Short visual lines:</strong> every phase and every Q&amp;A answer manually broken at natural pauses, no line fills the container width.' },
    { part: 'attachment-library',
      text: '<strong>Attachments:</strong> 1 file only (per-agent-analytics). Monster Pack screenshots don\'t exist yet (flagged gap). The claude-setup link itself is the heavy lifter.' },
  ],

  checklist: [
    'Paste cover letter from block 1 into Upwork cover letter field',
    'Set bid to <strong>$50/hr</strong> (gold tier — do NOT drop to their posted $35 cap)',
    'Boost 5–10 connects',
    'Attach <code>per-agent-analytics-2.png</code> (1 file only)',
    'Paste 3 Q&amp;A answers from block 5 into their respective fields',
    'Open the attached PDF (<code>Upwork_Final_Short.md.pdf</code>) before submitting — might shift the phase plan or rate stance',
    'Submit within 15 minutes — 50+ proposals already, race to top 10%',
  ],
};
