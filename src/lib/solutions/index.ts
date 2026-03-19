import type { SolutionPageContent } from "./types";

export const solutions: Record<string, SolutionPageContent> = {
  "speed-to-lead": {
    slug: "speed-to-lead",
    meta: {
      title: "Speed to Lead for Window & Door Companies | windoAI",
      description:
        "78% of homeowners book with the first company to respond. windoAI responds to every window and door lead in under 5 seconds, 24/7.",
      keywords: [
        "speed to lead windows",
        "fast response window company",
        "window lead response time",
        "AI lead response windows doors",
        "first responder wins",
        "window door speed to lead",
      ],
    },
    hero: {
      badge: "Speed to Lead",
      headline: "The First Response",
      headlineAccent: "Wins the Job",
      subheadline:
        "In window and door sales, speed isn't just an advantage — it's everything. 78% of homeowners book with the first company to respond. windoAI makes sure that's always you.",
      stats: [
        { value: "78%", label: "Book with first responder", color: "primary" },
        {
          value: "5 min",
          label: "Delay = 80% drop in contact",
          color: "destructive",
        },
        {
          value: "$15K-$30K",
          label: "Average job at stake",
          color: "success",
        },
      ],
    },
    painPoints: {
      headline: "Why Most Window Companies Lose the Speed-to-Lead Race",
      subheadline: "The data is clear — and it's not in your favor.",
      points: [
        {
          icon: "Clock",
          title: "Your Team Can't Respond Fast Enough",
          description:
            "Your sales team is on jobs, in meetings, or off the clock. By the time they call back, the homeowner has already booked with a competitor.",
          color: "destructive",
        },
        {
          icon: "PhoneMissed",
          title: "After-Hours Leads Go to Voicemail",
          description:
            "40% of window and door leads come after business hours. Voicemail means 60%+ of those callers hang up and call someone else.",
          color: "warning",
        },
        {
          icon: "TrendingDown",
          title: "Every Minute Costs You Money",
          description:
            "A 5-minute delay reduces contact rates by 80%. A 30-minute delay makes you 21x less likely to qualify the lead. Time kills deals.",
          color: "destructive",
        },
      ],
    },
    benefits: {
      headline: "How windoAI Wins the Speed-to-Lead Race",
      subheadline: "Instant, intelligent response — every lead, every time.",
      benefits: [
        {
          icon: "Zap",
          title: "Sub-5-Second Response",
          description:
            "windoAI responds to every inbound lead — call, text, or web form — in under 5 seconds. No human can match that consistently.",
        },
        {
          icon: "Calendar",
          title: "Instant Estimate Booking",
          description:
            "Don't just respond fast — book fast. windoAI qualifies the lead and books the in-home estimate in the same conversation.",
        },
        {
          icon: "Clock",
          title: "24/7/365 Coverage",
          description:
            "Nights, weekends, holidays — windoAI never sleeps. The 40% of leads that come after hours get the same instant response.",
        },
        {
          icon: "Bot",
          title: "Intelligent Qualification",
          description:
            "windoAI doesn't just answer — it qualifies by project type, window count, timeline, and budget. Your team only visits qualified estimates.",
        },
      ],
    },
    objections: {
      headline: "Common Concerns",
      subheadline: "We hear these a lot. Here's the reality.",
      objections: [
        {
          objection:
            "We already respond within an hour — that's fast enough",
          response:
            "Data disagrees. A 5-minute delay drops contact rates by 80%. An hour means you've lost 4 out of 5 leads. In a 3-5 quote market, 'fast enough' isn't.",
        },
        {
          objection: "Our customers want to talk to a real person",
          response:
            "They want their problem solved fast. windoAI qualifies and books in under 60 seconds — then your team does what they do best: selling and installing.",
        },
        {
          objection: "We don't get enough leads to justify this",
          response:
            "If you're getting 20+ leads/month with a $15K average ticket, one additional booking per month pays for windoAI 30x over. The math works at almost any volume.",
        },
      ],
    },
    calculator: {
      headline: "Calculate Your Speed-to-Lead ROI",
      subheadline: "See how much revenue you're leaving on the table.",
      inputs: {
        leads: {
          label: "Monthly leads",
          placeholder: "e.g. 50",
          defaultValue: 50,
        },
        commission: {
          label: "Average job value ($)",
          placeholder: "e.g. 15000",
          defaultValue: 15000,
        },
      },
      reactivationRate: 0.15,
      conversionRate: 0.25,
      resultLabel: "Additional monthly revenue from faster response",
    },
    cta: {
      headline: "Stop Losing the Speed-to-Lead Race",
      subheadline:
        "See how windoAI responds to every lead in under 5 seconds — and books the estimate before your competitors even know the lead exists.",
      buttonText: "Book Your Free Demo",
      buttonHref: "/book-demo",
      footnote: "No credit card required. Live in 48 hours.",
    },
  },

  "after-hours": {
    slug: "after-hours",
    meta: {
      title:
        "After-Hours Call Handling for Window & Door Companies | windoAI",
      description:
        "40% of window and door leads come after hours. 60%+ hang up on voicemail. windoAI answers every after-hours call and books estimates 24/7.",
      keywords: [
        "after hours answering service windows",
        "window company after hours calls",
        "24/7 window door lead capture",
        "AI after hours receptionist",
        "window door voicemail alternative",
        "after hours lead management",
      ],
    },
    hero: {
      badge: "After-Hours Solution",
      headline: "40% of Your Leads Call",
      headlineAccent: "After You Close",
      subheadline:
        "Evening calls, weekend inquiries, holiday quote requests — they don't stop when you clock out. windoAI ensures every after-hours lead gets an instant, professional response.",
      stats: [
        {
          value: "40%",
          label: "Of leads come after hours",
          color: "warning",
        },
        {
          value: "60%+",
          label: "Hang up on voicemail",
          color: "destructive",
        },
        { value: "24/7", label: "windoAI coverage", color: "success" },
      ],
    },
    painPoints: {
      headline: "The After-Hours Problem",
      subheadline: "Your best leads are calling when nobody's there.",
      points: [
        {
          icon: "PhoneMissed",
          title: "Voicemail Is a Lead Killer",
          description:
            "60%+ of callers hang up on voicemail. They don't leave a message — they call your competitor instead. Every voicemail prompt is a $15K-$30K gamble.",
          color: "destructive",
        },
        {
          icon: "Clock",
          title: "Evenings and Weekends Are Prime Time",
          description:
            "Homeowners research and call after work and on weekends. These are your most motivated, ready-to-buy leads — and you're missing them.",
          color: "warning",
        },
        {
          icon: "DollarSign",
          title: "Answering Services Are Expensive and Limited",
          description:
            "Human answering services charge per minute, have limited industry knowledge, and still can't book appointments. You're paying for message-taking, not lead conversion.",
          color: "warning",
        },
      ],
    },
    benefits: {
      headline: "How windoAI Handles After-Hours",
      subheadline:
        "Every call answered. Every lead captured. Every estimate booked.",
      benefits: [
        {
          icon: "Phone",
          title: "Every Call Answered Instantly",
          description:
            "8pm on a Tuesday, Sunday morning, Christmas Eve — windoAI answers every call in under 5 seconds with a professional, industry-trained response.",
        },
        {
          icon: "Calendar",
          title: "Estimates Booked, Not Messages Taken",
          description:
            "windoAI doesn't just take a message — it qualifies the lead and books the in-home estimate on your calendar, ready for your team Monday morning.",
        },
        {
          icon: "MessageSquare",
          title: "Text Follow-Up Confirmed",
          description:
            "After booking, windoAI sends a confirmation text with appointment details. No-show rates drop when leads get instant confirmation.",
        },
        {
          icon: "Shield",
          title: "Consistent Quality, No Overtime",
          description:
            "Unlike human receptionists, windoAI doesn't need overtime pay for nights and weekends. Same quality, same cost, 24/7/365.",
        },
      ],
    },
    objections: {
      headline: "Common Concerns",
      subheadline: "Let's address the obvious questions.",
      objections: [
        {
          objection: "We don't get that many after-hours calls",
          response:
            "Track it for a month — you'll be surprised. Industry data shows 40% of window and door leads come outside business hours. Even if it's 20% for you, that's 20% of your pipeline going to voicemail.",
        },
        {
          objection: "We already have an answering service",
          response:
            "Does it book estimates? Does it qualify by project type? Does it follow up via text? Most answering services take messages. windoAI converts leads.",
        },
        {
          objection:
            "Can AI really handle calls as well as a person?",
          response:
            "For scheduling and qualification — better. windoAI responds instantly, never has a bad day, never forgets to ask a qualifying question, and books directly on your calendar. It handles 95%+ of calls without human intervention.",
        },
      ],
    },
    calculator: {
      headline: "What Are After-Hours Leads Worth?",
      subheadline: "Calculate the revenue you're losing to voicemail.",
      inputs: {
        leads: {
          label: "Monthly after-hours calls",
          placeholder: "e.g. 20",
          defaultValue: 20,
        },
        commission: {
          label: "Average job value ($)",
          placeholder: "e.g. 15000",
          defaultValue: 15000,
        },
      },
      reactivationRate: 0.6,
      conversionRate: 0.25,
      resultLabel: "Monthly revenue lost to voicemail",
    },
    cta: {
      headline: "Stop Losing After-Hours Leads",
      subheadline:
        "See how windoAI captures every evening, weekend, and holiday lead — and books estimates while you sleep.",
      buttonText: "Book Your Free Demo",
      buttonHref: "/book-demo",
      footnote: "No credit card required. Live in 48 hours.",
    },
  },

  "lead-reactivation": {
    slug: "lead-reactivation",
    meta: {
      title:
        "Dead Lead Reactivation for Window & Door Companies | windoAI",
      description:
        "15-25% of dead leads re-engage when contacted by AI. windoAI reactivates your old window and door leads — home shows, old quotes, CRM databases — with zero additional ad spend.",
      keywords: [
        "dead lead reactivation windows",
        "reactivate old window leads",
        "window door lead database",
        "AI lead reactivation",
        "home show lead follow up",
        "CRM lead revival windows doors",
      ],
    },
    hero: {
      badge: "Lead Reactivation",
      headline: "Your Best Leads Are Already",
      headlineAccent: "In Your Database",
      subheadline:
        "Home show lists, old quote requests, past website leads — you've already paid to acquire them. windoAI's AI texting agent reactivates 15-25% of dead leads into booked estimates, with zero additional ad spend.",
      stats: [
        {
          value: "15-25%",
          label: "Dead lead reactivation rate",
          color: "success",
        },
        {
          value: "$0",
          label: "Additional ad spend required",
          color: "primary",
        },
        {
          value: "48hrs",
          label: "From upload to booked estimates",
          color: "warning",
        },
      ],
    },
    painPoints: {
      headline: "The Hidden Gold Mine in Your CRM",
      subheadline:
        "You're sitting on thousands of dollars in leads you already paid for.",
      points: [
        {
          icon: "Database",
          title: "Thousands of Untouched Leads",
          description:
            "Your CRM is full of old leads — home show contacts, website forms, past quotes that never closed. They're not dead; they're just waiting for the right follow-up.",
          color: "warning",
        },
        {
          icon: "DollarSign",
          title: "You Already Paid for These Leads",
          description:
            "Google ads, home shows, Angi, HomeAdvisor — you spent real money acquiring these leads. Reactivating them costs nothing extra. The ROI is pure profit.",
          color: "success",
        },
        {
          icon: "UserX",
          title: "Manual Follow-Up Doesn't Scale",
          description:
            "Your team doesn't have time to call through 500 old leads. And even if they did, most wouldn't answer a cold call. AI texting gets 3-5x the response rate of phone calls.",
          color: "destructive",
        },
      ],
    },
    benefits: {
      headline: "How windoAI Reactivates Dead Leads",
      subheadline:
        "AI-powered texting that turns old leads into new revenue.",
      benefits: [
        {
          icon: "MessageSquare",
          title: "AI Texting at Scale",
          description:
            "windoAI sends personalized text messages to your old leads — not generic blasts, but intelligent conversations that adapt based on each response.",
        },
        {
          icon: "Target",
          title: "Smart Segmentation",
          description:
            "Not all dead leads are the same. windoAI segments by lead age, source, project type, and engagement history to craft the right message at the right time.",
        },
        {
          icon: "Calendar",
          title: "Straight to Booked Estimates",
          description:
            "When a dead lead re-engages, windoAI qualifies them and books the in-home estimate — no handoff required. From text to booked in one conversation.",
        },
        {
          icon: "Database",
          title: "Works With Any Lead Source",
          description:
            "Home show lists, CRM exports, old web forms, past quotes — upload any lead list and windoAI handles the rest. CSV upload, CRM sync, or manual entry.",
        },
        {
          icon: "TrendingUp",
          title: "Compounding Returns",
          description:
            "As your database grows, so does your reactivation pipeline. Every new lead that doesn't close today becomes a reactivation opportunity tomorrow.",
        },
      ],
    },
    objections: {
      headline: "Common Concerns",
      subheadline:
        "Reactivation is new for most companies. Here's what we hear.",
      objections: [
        {
          objection:
            "Those leads are too old — they've already bought from someone else",
          response:
            "You'd be surprised. 15-25% of 'dead' leads haven't bought yet. Life gets busy, projects get delayed, budgets change. Many are still in-market and just needed a nudge.",
        },
        {
          objection:
            "Won't people be annoyed by unsolicited texts?",
          response:
            "windoAI sends one thoughtful, personalized message — not spam blasts. Response rates average 15-25% because the messages are relevant and timely. Anyone who opts out is immediately removed.",
        },
        {
          objection:
            "We've already tried calling our old leads — it didn't work",
          response:
            "That's exactly why AI texting works better. People screen calls from unknown numbers, but they read texts. AI texting gets 3-5x the response rate of cold calling.",
        },
        {
          objection: "We don't have a clean lead database",
          response:
            "That's fine. windoAI works with messy data — CSVs, CRM exports, even spreadsheets. We clean and deduplicate before launching. Most companies are surprised how many viable leads they're sitting on.",
        },
      ],
    },
    calculator: {
      headline: "Calculate Your Reactivation Revenue",
      subheadline: "How much are the leads in your database worth?",
      inputs: {
        leads: {
          label: "Total leads in your database",
          placeholder: "e.g. 500",
          defaultValue: 500,
        },
        commission: {
          label: "Average job value ($)",
          placeholder: "e.g. 15000",
          defaultValue: 15000,
        },
      },
      reactivationRate: 0.2,
      conversionRate: 0.25,
      resultLabel: "Potential reactivation revenue",
    },
    cta: {
      headline: "Turn Dead Leads Into Booked Estimates",
      subheadline:
        "Upload your lead list and see windoAI reactivate 15-25% into booked estimates — with zero additional ad spend.",
      buttonText: "Book Your Free Demo",
      buttonHref: "/book-demo",
      footnote: "No credit card required. Live in 48 hours.",
    },
  },
};

export function getSolution(slug: string): SolutionPageContent | undefined {
  return solutions[slug];
}

export function getAllSolutionSlugs(): string[] {
  return Object.keys(solutions);
}

export function getAllSolutions(): SolutionPageContent[] {
  return Object.values(solutions);
}

export type { SolutionPageContent } from "./types";
