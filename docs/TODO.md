# Portfolio Site Improvement Plan

Step-by-step improvements for roman-rr.github.io.
Each item includes context, affected files, and acceptance criteria.

---

## Architecture Reference

- **Stack**: React 18 + TypeScript + Vite + Tailwind CSS + Radix UI
- **Deploy**: GitHub Actions -> GitHub Pages (push to `master`)
- **Entry**: `index.html` -> `src/main.tsx` -> `src/App.tsx`
- **Sections (render order)**: Header (with video + trust badges), Achievements, Certificates, Reviews, SkillsTabs, Cases, LogoCarousel, OpenSource, ScientificResearch, Footer

### Completed
- 1.1 Real Upwork reviews (replaced fake testimonials)
- 1.2 Open Graph + Twitter meta tags
- 1.3 LinkedIn added to footer
- 1.4 Microsoft 365 RAG case added (diversified cases)
- 2.3 "DeepAgents" replaced with "LangGraph"
- 2.4 Video block (two-column hero layout)
- 2.5 Trust badges (HIPAA, GDPR, SOC 2, NDA, Upwork Protected)
- 3.1 Payment section removed from footer
- 3.3 robots.txt + sitemap.xml added
- Name fixed to "Antonov" everywhere

---

## Phase 2 - Messaging & Conversion (Next Up)

### 2.1 Add personal narrative / "my approach" blurb
- **Priority**: Medium
- **Why**: The header has stats and badges but no voice. Clients are hiring a person, not a spec sheet.
- **File**: `src/components/Header.tsx`
- **Action**: Add 2-3 sentences below the subtitle about approach to client work, communication style, or what makes collaboration different.
- **Needs**: Your input on tone/content.
- [ ] Done

### 2.2 Condense skills tabs from keyword dump to curated highlights
- **Priority**: Medium
- **Why**: 30+ bullet points across 4 tabs reads like a resume. A few strong points with context are more persuasive.
- **File**: `src/components/SkillsTabs.tsx`
- **Action**: Reduce to top 5-6 items per tab with brief experience context.
- [ ] Done

### 2.6 Add FAQ block
- **Priority**: Medium-High
- **Why**: Upwork clients have recurring questions before hiring: compliance, data handling, NDAs, availability. Answering proactively removes friction. Also helps SEO (FAQ structured data).
- **File**: New `src/components/FAQ.tsx`, update `src/App.tsx`
- **Action**: Accordion FAQ section covering: HIPAA/GDPR/SOC 2 compliance, NDA policy, data security, availability/timezone, engagement models, communication tools, IP ownership, tech stack flexibility.
- **Placement**: Before Footer.
- [ ] Done

### 2.7 Add closing CTA (Call-to-Action) panel
- **Priority**: Medium-High
- **Why**: No final push to convert. A visitor who scrolled the entire page is highly engaged — perfect moment for a booking CTA.
- **File**: New `src/components/ClosingCTA.tsx`, update `src/App.tsx`
- **Action**: Prominent panel before Footer with Calendly button, secondary Upwork/email link, and reassurance line ("NDA-ready, GDPR-compliant, available for immediate start").
- [ ] Done

---

## Phase 3 - Polish & SEO

### 3.2 Add lightweight analytics
- **Priority**: Low
- **Why**: No tracking = can't measure which proposals convert.
- **File**: `index.html` or `src/main.tsx`
- **Action**: Add Plausible, Umami, or Google Analytics.
- [ ] Done

### 3.3 Add JSON-LD structured data
- **Priority**: Low
- **Why**: robots.txt and sitemap.xml are done, but no structured data yet for rich Google results.
- **File**: `index.html`
- **Action**: Add JSON-LD `Person` / `ProfessionalService` schema.
- [ ] Done

### 3.4 Create OG image
- **Priority**: Low
- **Why**: OG meta tags point to `og-image.png` which doesn't exist yet. Link previews will be broken.
- **File**: `public/og-image.png` (new, 1200x630)
- **Action**: Design or screenshot a 1200x630 preview image showing name + title + avatar.
- [ ] Done

---

## Phase 4 - Marketing & Growth (After main phases)

> **Goal**: Purpose -> 1 customer -> 1hr -> $1000

### 4.1 A/B test titles & headlines
- **Priority**: Future
- **Action**: Prepare 3-5 headline variants. Test with different ad groups.
- [ ] Done

### 4.2 Connect tawk.to live chat
- **Priority**: Future
- **Action**: Add tawk.to widget script with business hours and auto-greeting.
- [ ] Done

### 4.3 Connect Google Analytics (GA4)
- **Priority**: Future
- **Action**: Add GA4 tag, set up conversion events (Calendly click, video play, FAQ expansion).
- [ ] Done

### 4.4 Google Ads campaign — $100 test budget
- **Priority**: Future
- **Action**: Search campaigns targeting "hire AI developer", "LangChain freelancer", "build AI agent". Track end-to-end.
- [ ] Done

### 4.5 Feedback loop — Optimize
- **Priority**: Future
- **Action**: Review GA4 + Ads data, adjust headlines/CTA, run next $100 test.
- [ ] Done

---

## Phase 2.5 - Quick Services & Productized Offers

> **Purpose**: Give visitors something they can buy RIGHT NOW without a 30-min call.

### 2.8 Add "Quick Services" block
- **Priority**: Medium-High
- **File**: New `src/components/QuickServices.tsx`, update `src/App.tsx`
- **Action**: Grid of productized service cards with prices and CTAs. Tiers: entry offers ($75-$250), packaged deliverables ($500-$1500), traffic magnets/SEO pages ($300-$500).
- [ ] Done

---

## Phase 5 - Design Theming Overhaul (Future)

> **Reference**: Supabase landing page — dark-first, gradient borders, 12-col grid, hover states.

### 5.1 Supabase-inspired layout system
- Replace inconsistent `px-[30px]` / `max-w-*` with responsive container utility.
- [ ] Done

### 5.2 Gradient border cards
- `rounded-xl p-px bg-gradient-to-b from-border to-border/50` pattern for all cards.
- [ ] Done

### 5.3 12-column responsive grid
- Asymmetric layouts with featured + standard card sizes.
- [ ] Done

### 5.4 Dark mode as primary theme
- CSS variable palette, theme toggle, remove all hardcoded colors.
- [ ] Done

### 5.5 Card hover states with image overlays
- `group-hover` transitions, remove static dark overlays.
- [ ] Done

### 5.6 Typography & text hierarchy
- Define text scale tokens, replace hardcoded grays with semantic colors.
- [ ] Done

---

## Backlog / Ideas

- [ ] Add page load animations / scroll-triggered reveals
- [ ] "Process" or "How I work" section
- [ ] Blog/articles section for SEO
- [ ] Internationalization (DE/EN) for DACH market
- [ ] Client logos section (with permission)
- [ ] Upwork "Top Rated Plus" badge
- [ ] Lazy-load case study images
- [ ] `rel="canonical"` tag
