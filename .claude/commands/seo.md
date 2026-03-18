---
name: seo
description: Strategic SEO research - find high-leverage ranking opportunities for windoAI (AI receptionist for window & door companies)
---

# Strategic SEO Research

This command finds the highest-leverage SEO opportunities for windoAI. It does targeted SERP research, scores opportunities, and presents an actionable creation plan. It does NOT create content — use `/rank-me` for execution.

**Core Principle**: Strategy-guided research. Don't wander — hunt specific opportunities.

---

## The Strategy (Hardcoded North Star)

windoAI = **"The AI Receptionist for Window & Door Companies"**

### The Hub
Homepage positions windoAI as the AI receptionist built specifically for window and door manufacturers and installers — answering calls, qualifying projects, and booking in-home estimates 24/7.

### The Spokes (Content Clusters)

**Cluster 1: Window & Door Industry Pain Points (HIGHEST PRIORITY)**
High ticket ($10K-$30K avg job), speed-to-lead critical, homeowners get 3-5 quotes.
- AI receptionist for window companies
- After-hours answering for window & door installers
- Missed call text back for window companies
- Window replacement lead management
- Energy efficiency upgrade lead capture
- In-home estimate scheduling automation

**Cluster 2: Window & Door Business Types**
- Window replacement companies
- Door installation companies
- Window manufacturers / dealers
- Multi-location window franchises
- Storm window & door specialists
- Patio / sliding door installers

**Cluster 3: VS & Comparison**
Category-defining pages specific to window & door industry.
- AI receptionist vs answering service for window companies
- windoAI vs MarketSharp
- windoAI vs Improveit 360
- AI vs call center for home improvement
- Automated vs manual estimate scheduling

**Cluster 4: CRM & Tool Integrations**
Target power users on window/door industry software.
- AI for MarketSharp users
- AI for Improveit 360 users
- AI for Leap users
- AI for JobNimbus users
- Connect AI to window company CRM

**Cluster 5: Authority Building (Long-Term)**
Blog content to build topical authority.
- Speed to lead for window companies
- How window companies lose leads after hours
- Window replacement industry trends 2026
- ROI of AI for home improvement companies
- Window company lead generation strategies

### Page Types to Create

1. **Solution Pages** (`/solutions/[slug]`) — Problem-focused pages for window & door companies
2. **Best-For Pages** (`/best-for/[slug]`) — Niche-specific (window replacement, manufacturers, dealers)
3. **Alternative Pages** (`/alternatives/[slug]`) — Competitor comparisons relevant to window industry
4. **VS Pages** (`/compare/[slug]`) — Direct comparisons
5. **Blog Posts** (`content/blog/`) — Keyword-targeted articles

---

## Phase 1: Quick Inventory Check (1 Agent, Fast)

Launch 1 agent to build a quick reference list. This should take under 2 minutes.

### Inventory Agent

Scan these locations and output a simple list of what exists:
- `src/lib/best-for/index.ts` — read the export list
- `src/lib/alternatives/index.ts` — read the export list
- `src/lib/solutions/` — list solution slugs
- `content/blog/` — list filenames only
- `src/app/compare/` — list comparison routes

**Output a compact reference.**

---

## Phase 2: Strategic SERP Research (3-5 Parallel Agents)

Each agent targets a specific cluster. They do LIVE web searches to find ranking opportunities.

### Agent 1: Window & Door Industry Opportunities (HIGHEST PRIORITY)

**Search these terms:**
- "AI receptionist for window companies"
- "window company answering service"
- "window replacement lead management"
- "after hours answering service window installer"
- "missed call text back home improvement"
- "AI appointment booking window replacement"
- "window company virtual receptionist"
- "window and door lead capture"

### Agent 2: CRM & Integration Opportunities

**Search these terms:**
- "AI automation for MarketSharp"
- "AI for Improveit 360 users"
- "AI lead response for Leap CRM"
- "connect AI to window company CRM"
- "MarketSharp integrations 2026"
- "home improvement CRM AI features"

### Agent 3: VS & Comparison Opportunities

**Search these terms:**
- "AI receptionist vs answering service home improvement"
- "MarketSharp alternative"
- "Improveit 360 alternative"
- "best answering service for window companies"
- "window company call center vs AI"

### Agent 4: Authority & Blog Opportunities

**Search these terms:**
- "speed to lead window companies"
- "window replacement lead generation"
- "how to book more window estimates"
- "window company marketing 2026"
- "AI for home improvement companies"

---

## Phase 3: Scoring & Prioritization

Score every opportunity (0-100):
```
Traffic Potential   (0-30)
Competition Gap     (0-25)
Conversion Intent   (0-20)
Effort Required     (0-15)
Time to Rank        (0-10)
```

### Relevance Gate (MUST PASS ALL)
- [ ] Directly relates to window & door companies, AI receptionist, lead response, estimate booking
- [ ] A window company owner reading this would consider windoAI
- [ ] Does NOT duplicate existing content
- [ ] Our angle is DIFFERENT from what's ranking

---

## Phase 4: Present The Plan

Present findings ordered by leverage score. Ask user which to pursue.

**STOP HERE. Do not create content. Use /rank-me for execution.**
