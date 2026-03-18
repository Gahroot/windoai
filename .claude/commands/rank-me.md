---
name: rank-me
description: Execute high-leverage SEO content creation for windoAI - research, create, and deploy differentiated content for window & door companies
---

# Rank-Me: SEO Content Execution Engine

This command creates content that ranks for windoAI. It does targeted SERP research, identifies the single highest-leverage opportunity, gets approval, then creates differentiated content and deploys it.

**Goal**: Create content so good and specific to the window & door industry that it dominates thin or generic SERPs.

**Core Principle**: One excellent piece of content beats five mediocre ones.

---

## The Strategy (Hardcoded)

windoAI = **"The AI Receptionist for Window & Door Companies"**

### Content Clusters (Priority Order)

1. **Window & Door Pain Points** — Speed-to-lead, missed calls, after-hours inquiries. $10K-$30K jobs lost to slow response.
2. **Business Type Targeting** — Window replacement, door installation, manufacturers, dealers, multi-location franchises.
3. **VS & Comparison** — "AI vs Answering Service", "windoAI vs MarketSharp", "AI vs Call Center".
4. **CRM Integrations** — MarketSharp, Improveit 360, Leap, JobNimbus integration content.
5. **Authority Building** — Industry trends, lead generation strategies, ROI content.

### Content Types Available

| Type | Location | When to Use |
|------|----------|-------------|
| Blog Post | `content/blog/[slug].mdx` | Keyword-targeted articles, how-to guides |
| Solution Page | `src/lib/solutions/[slug].ts` | Problem-focused landing pages |
| Best-For Page | `src/lib/best-for/[slug].ts` | Niche-specific targeting (window replacement, manufacturers) |
| Alternative Page | `src/lib/alternatives/[slug].ts` | Competitor alternative pages |
| Compare Page | `src/app/compare/[slug]/page.tsx` | VS pages (windoAI vs X) |

---

## Phase 1: Targeted Opportunity Research (3 Parallel Agents)

### Agent 1: SERP Hunter

Do live web searches for high-intent keywords. Focus on **thin, outdated, or beatable** SERPs.

**Search Pattern:**

Window & Door Specific (search 5-8 of these):
- "AI receptionist for window companies"
- "window company answering service"
- "after hours answering for window installers"
- "window replacement lead management"
- "missed call text back home improvement"
- "AI estimate booking window replacement"
- "window company virtual receptionist"
- "door installation lead capture"

CRM Integrations (search 3-5):
- "AI automation for MarketSharp"
- "AI for Improveit 360"
- "MarketSharp alternative 2026"
- "Improveit 360 alternative"
- "home improvement CRM AI integration"

VS/Comparison (search 3-5):
- "AI receptionist vs answering service home improvement"
- "window company call center alternative"
- "best answering service for contractors"
- "AI vs human receptionist cost comparison"

Authority (search 2-3):
- "speed to lead window companies"
- "window replacement lead generation 2026"
- "AI for home improvement companies"

### Agent 2: Existing Content Quick-Check

Scan existing content to avoid duplicates (< 2 minutes):
- `src/lib/best-for/index.ts`
- `src/lib/alternatives/index.ts`
- `src/lib/solutions/`
- `content/blog/`
- `src/app/compare/`

### Agent 3: Competitor Intelligence

Research competitors in the window & door AI/answering service space.

---

## Phase 2: Opportunity Scoring & Selection

Score (0-100):
```
Traffic Potential   (0-30)
Competition Gap     (0-25)
Conversion Intent   (0-20)
Effort Required     (0-15)
Time to Rank        (0-10)
```

### Mandatory Differentiation Check

Must have at least ONE differentiator:
- [ ] More specific to window & door industry
- [ ] More practical with real numbers and scenarios
- [ ] More current with 2026 data
- [ ] Better format (calculator/interactive)
- [ ] Uncovered niche

---

## Phase 3: User Approval Gate

Present top 3-5 opportunities. **Wait for approval before creating.**

---

## Phase 4: Content Creation

For each approved item, create content following the existing TypeScript interfaces.

### For Blog Posts (`content/blog/[slug].mdx`)

```mdx
---
title: "[Include primary keyword naturally]"
description: "[150-155 chars with keyword]"
date: [YYYY-MM-DD]
---

[Content rules:]
- Open with specific window/door industry scenario
- Include real numbers: job values, response times, conversion rates
- Reference specific CRMs (MarketSharp, Improveit 360, Leap)
- Internal link to /best-for, /solutions, /alternatives (2-4 links)
- Natural CTA to /book-demo
- 1200-2000 words for guides, 800-1200 for comparisons
```

### For Best-For Pages (`src/lib/best-for/[slug].ts`)

Read `src/lib/best-for/types.ts` for interface. Create data file, then update `index.ts`.

### For Alternative Pages (`src/lib/alternatives/[slug].ts`)

Read `src/lib/alternatives/types.ts` for interface. Create data file, then update `index.ts`.

### For Solution Pages (`src/lib/solutions/[slug].ts`)

Read `src/lib/solutions/types.ts` for interface. Create data file, then update `index.ts`.

---

## Phase 5: Verification & Deploy

```bash
npm run typecheck
npm run lint
npm run build
```

**Fix ALL errors before committing.**

Pre-existing warnings to ignore:
- `src/app/ai-calculator-results/page.tsx`: unused `setResults`, `setInputs`
- `src/lib/compare/types.ts`: unused `ReactNode` import

### Commit

```bash
git add [specific files]
git commit -m "SEO: [Content type] — [what was created]

- [Details]
- Target keywords: [list]

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

## Important Reminders

1. **Window & door specific.** Every piece of content must be relevant to window and door companies.
2. **Differentiation is mandatory.** Never create "me too" content.
3. **Specificity wins.** "AI receptionist for window companies" beats "AI for business".
4. **Quality over quantity.** One page 1 result > five page 5 results.
5. **Live research.** Always do fresh web searches.
6. **Honest content.** Be fair to competitors.
7. **Verify everything.** Typecheck, lint, build — no exceptions.
8. **Real numbers.** $10K-$30K jobs, 78% first responder stat, 47-second response time.
