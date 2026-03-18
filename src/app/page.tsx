import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroDemoSection } from "@/components/sections/hero-demo";
import { faqs } from "@/lib/faq-data";
import {
  OrganizationJsonLd,
  WebSiteJsonLd,
  ProductJsonLd,
  FAQJsonLd,
  SoftwareApplicationJsonLd,
  ServiceJsonLd,
} from "@/components/seo/json-ld";
import { config } from "@/lib/vertical.config";

const SpeedToLeadSection = dynamic(
  () => import("@/components/sections/speed-to-lead").then((m) => m.SpeedToLeadSection),
  { ssr: true },
);
const PainPointsSection = dynamic(
  () => import("@/components/sections/pain-points").then((m) => m.PainPointsSection),
  { ssr: true },
);
const SolutionSection = dynamic(
  () => import("@/components/sections/solution").then((m) => m.SolutionSection),
  { ssr: true },
);
const HowItWorksSection = dynamic(
  () => import("@/components/sections/how-it-works").then((m) => m.HowItWorksSection),
  { ssr: true },
);
const TestimonialsSection = dynamic(
  () => import("@/components/sections/testimonials").then((m) => m.TestimonialsSection),
  { ssr: true },
);
const PricingSection = dynamic(
  () => import("@/components/sections/pricing").then((m) => m.PricingSection),
  { ssr: true },
);
const FAQSection = dynamic(
  () => import("@/components/sections/faq").then((m) => m.FAQSection),
  { ssr: true },
);
const CTASection = dynamic(
  () => import("@/components/sections/cta").then((m) => m.CTASection),
  { ssr: true },
);

export const metadata: Metadata = {
  title: `${config.brandName} | AI Receptionist & Sales Agent for Window & Door Companies`,
  description:
    "AI-powered receptionist built for window and door companies. Answers calls, qualifies projects, books in-home estimates, and follows up on leads 24/7. Never miss a $15K-$30K job again.",
  keywords: [
    "AI receptionist for window companies",
    "window replacement answering service",
    "AI for window and door contractors",
    "window company lead management",
    "window replacement business automation",
    "window door AI agent",
    "speed to lead window companies",
    "AI appointment booking windows doors",
    "missed call text back contractor",
    "window installer lead response",
    "door replacement lead generation",
    "AI sales agent home services",
    "window company CRM automation",
  ],
  openGraph: {
    title: `${config.brandName} | AI Receptionist & Sales Agent for Window & Door Companies`,
    description:
      "AI-powered receptionist built for window and door companies. Answers calls, qualifies projects, books in-home estimates, and follows up on leads 24/7.",
    type: "website",
    url: `https://${config.domain}`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${config.brandName} | AI Receptionist & Sales Agent for Window & Door Companies`,
    description:
      "AI-powered receptionist built for window and door companies. Answers calls, qualifies projects, books in-home estimates, and follows up on leads 24/7.",
  },
  alternates: {
    canonical: `https://${config.domain}`,
  },
};

export default function Home() {
  return (
    <>
      <OrganizationJsonLd />
      <WebSiteJsonLd />
      <ProductJsonLd />
      <SoftwareApplicationJsonLd />
      <ServiceJsonLd />
      <FAQJsonLd faqs={faqs} />
      <Navbar />
      <main>
        <HeroDemoSection />
        <SpeedToLeadSection />
        <PainPointsSection />
        <SolutionSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
