import type { Metadata } from "next";
import { config } from "@/lib/vertical.config";

export const metadata: Metadata = {
  title: `Pricing | ${config.brandName} AI Receptionist`,
  description:
    "Transparent pricing for AI-powered receptionist and lead management. Three plans built for window and door companies — AI receptionist, lead qualification, and appointment booking included.",
  keywords: [
    "AI receptionist pricing",
    "window company AI automation",
    "AI lead response pricing",
    "window replacement marketing pricing",
    "window company AI cost",
    "AI sales agent pricing",
    `${config.brandName} pricing`,
  ],
  openGraph: {
    title: `Pricing | ${config.brandName} AI Receptionist`,
    description:
      "Transparent pricing for AI-powered receptionist and lead management. AI agents, appointment booking, and lead qualification included in every plan.",
    type: "website",
    url: `https://${config.domain}/pricing`,
  },
  alternates: {
    canonical: `https://${config.domain}/pricing`,
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
