import type { LucideIcon } from "lucide-react";
import {
  PhoneIncoming,
  Bell,
  Bot,
  MessageSquare,
  RotateCcw,
  Phone,
  Database,
  Calendar,
  BarChart3,
  Building2,
  Users,
  Shield,
} from "lucide-react";

export type TierId = "starter" | "growth" | "enterprise";

export interface PricingTier {
  id: TierId;
  name: string;
  tagline: string;
  setupFee: number;
  monthlyPrice: number;
  highlights: string[];
  features: Record<string, boolean>;
  story: string;
  bestFor: string;
}

export interface PricingFeature {
  key: string;
  label: string;
  icon: LucideIcon;
  category: "ai" | "integrations" | "support";
}

export interface PricingFAQ {
  question: string;
  answer: string;
}

export const featureCategories = {
  ai: "AI Agents",
  integrations: "Integrations",
  support: "Support & Onboarding",
} as const;

export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "AI receptionist that never misses a lead",
    setupFee: 0,
    monthlyPrice: 497,
    highlights: [
      "AI receptionist answers every call",
      "Automated appointment booking",
      "Calendar integration",
      "Analytics dashboard",
    ],
    features: {
      AI_RECEPTIONIST: true,
      AI_APPOINTMENT_SETTER: true,
      AI_CHATBOT: false,
      AI_TEXTING: false,
      LEAD_REACTIVATION: false,
      AI_VOICE: false,
      CRM_SYNC: false,
      CALENDAR: true,
      ANALYTICS: true,
      MULTI_LOCATION: false,
      DEDICATED_ONBOARDING: false,
      PRIORITY_SUPPORT: false,
    },
    story:
      "You're a single-location window company tired of missing calls. Your receptionist can't answer the phone while talking to a walk-in, and after-hours calls go straight to voicemail — where 60% of callers hang up. The Starter plan gives you an AI receptionist that answers every call instantly, qualifies the lead, and books in-home estimates directly on your calendar. No more lost leads, no more phone tag.",
    bestFor: "Single-location shops",
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "Full AI workforce for serious lead conversion",
    setupFee: 0,
    monthlyPrice: 997,
    highlights: [
      "Everything in Starter",
      "AI website chatbot",
      "AI texting agent",
      "Dead lead reactivation + CRM sync",
    ],
    features: {
      AI_RECEPTIONIST: true,
      AI_APPOINTMENT_SETTER: true,
      AI_CHATBOT: true,
      AI_TEXTING: true,
      LEAD_REACTIVATION: true,
      AI_VOICE: false,
      CRM_SYNC: true,
      CALENDAR: true,
      ANALYTICS: true,
      MULTI_LOCATION: false,
      DEDICATED_ONBOARDING: false,
      PRIORITY_SUPPORT: false,
    },
    story:
      "You're running 2-5 crews and leads are coming in from Google, home shows, and referrals. Half go cold because nobody follows up fast enough. The Growth plan adds an AI chatbot for your website, AI texting for SMS conversations, CRM sync to keep everything organized, and dead lead reactivation that automatically re-engages your old database — turning leads you already paid for into booked estimates.",
    bestFor: "Established companies running 2-5 crews",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "Enterprise-grade AI for regional operators",
    setupFee: 0,
    monthlyPrice: 2497,
    highlights: [
      "Everything in Growth",
      "AI voice agent — outbound calls",
      "Multi-location support",
      "Dedicated onboarding + priority support",
    ],
    features: {
      AI_RECEPTIONIST: true,
      AI_APPOINTMENT_SETTER: true,
      AI_CHATBOT: true,
      AI_TEXTING: true,
      LEAD_REACTIVATION: true,
      AI_VOICE: true,
      CRM_SYNC: true,
      CALENDAR: true,
      ANALYTICS: true,
      MULTI_LOCATION: true,
      DEDICATED_ONBOARDING: true,
      PRIORITY_SUPPORT: true,
    },
    story:
      "You're a multi-location operation doing $20M+ in revenue. You need an AI voice agent making outbound follow-up calls, location-based routing so leads go to the right branch, centralized reporting across all locations, and a dedicated onboarding team that gets you live fast. The Enterprise plan is your complete AI sales team.",
    bestFor: "Multi-location window & door operations, $20M+ operators",
  },
];

export const pricingFeatures: PricingFeature[] = [
  // AI Agents
  { key: "AI_RECEPTIONIST", label: "AI Receptionist", icon: PhoneIncoming, category: "ai" },
  { key: "AI_APPOINTMENT_SETTER", label: "AI Appointment Setter", icon: Bell, category: "ai" },
  { key: "AI_CHATBOT", label: "AI Website Chatbot", icon: Bot, category: "ai" },
  { key: "AI_TEXTING", label: "AI Texting Agent", icon: MessageSquare, category: "ai" },
  { key: "LEAD_REACTIVATION", label: "Dead Lead Reactivation", icon: RotateCcw, category: "ai" },
  { key: "AI_VOICE", label: "AI Voice Agent — Outbound", icon: Phone, category: "ai" },
  // Integrations
  { key: "CRM_SYNC", label: "CRM Sync", icon: Database, category: "integrations" },
  { key: "CALENDAR", label: "Calendar Integration", icon: Calendar, category: "integrations" },
  { key: "ANALYTICS", label: "Analytics Dashboard", icon: BarChart3, category: "integrations" },
  // Support & Onboarding
  { key: "MULTI_LOCATION", label: "Multi-Location Support", icon: Building2, category: "support" },
  { key: "DEDICATED_ONBOARDING", label: "Dedicated Onboarding", icon: Users, category: "support" },
  { key: "PRIORITY_SUPPORT", label: "Priority Support", icon: Shield, category: "support" },
];

export const pricingFaqs: PricingFAQ[] = [
  {
    question: "How accurate is the AI receptionist?",
    answer:
      "Our AI is trained specifically on window and door industry conversations — it understands project types (replacement windows, entry doors, patio doors, storm windows), qualification criteria, and the language homeowners use. It handles 95%+ of calls without human intervention, and seamlessly transfers complex calls to your team when needed.",
  },
  {
    question: "What CRMs do you integrate with?",
    answer:
      "We integrate with the most popular home improvement CRMs including MarketSharp, Improveit 360, Leap, JobNimbus, and QuickBooks. We also connect with any CRM that supports webhooks or Zapier. New integrations are added regularly based on customer requests.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most companies are fully live within 48 hours. We configure your AI agents, connect your calendar, set up CRM sync, and train the system on your specific business details. No lengthy onboarding process — you're answering leads by day two.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Absolutely. You can change plans at any time with no penalties. Upgrades take effect immediately, and downgrades apply at the start of your next billing cycle. Most clients who start on Starter upgrade to Growth within 60 days once they see the ROI.",
  },
  {
    question: "What happens when the AI can't handle a call?",
    answer:
      "The AI is designed to handle the vast majority of inbound calls — scheduling estimates, answering FAQs, qualifying leads. For complex situations, it seamlessly transfers the call to your team with full context of the conversation, so the homeowner never has to repeat themselves.",
  },
  {
    question: "Will this replace my receptionist?",
    answer:
      "It depends on your situation. Many single-location shops use windoAI as their primary receptionist, saving $35K-$50K/year in staffing costs. Larger operations use it to handle overflow, after-hours calls, and follow-ups — so your team can focus on selling and installing, not answering phones.",
  },
  {
    question: "How does dead lead reactivation work?",
    answer:
      "We take your existing database of old leads — from past campaigns, home shows, web forms that never converted — and our AI reaches out via text with personalized messages. On average, 15-25% of 'dead' leads re-engage, and many book estimates. It's revenue from leads you already paid to acquire.",
  },
  {
    question: "Are there any contracts?",
    answer:
      "No contracts, ever. All plans are month-to-month. We earn your business every month with results, not lock-in agreements. That said, AI-powered lead management compounds over time — the longer you run, the smarter your system gets.",
  },
];
