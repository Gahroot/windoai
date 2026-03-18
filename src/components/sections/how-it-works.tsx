import { Zap, MessageSquare, Calendar, RotateCcw, Phone, Bell } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { HowItWorksCTA } from "./how-it-works-cta";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Answers Every Call & Text",
    description:
      "Homeowner calls about replacing their bay windows at 8pm on a Saturday. Your AI agent picks up, greets them by name if they're in your CRM, and starts the conversation.",
    highlight: "Under 60 second response",
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Qualifies the Project",
    description:
      "Your agent asks the right questions: How many windows? What type — replacement, new construction, entry doors? Any issues like drafts or foggy glass? Timeline and budget. All natural, no scripts.",
    highlight: "Window & door specific qualification",
  },
  {
    number: "03",
    icon: Calendar,
    title: "Books the In-Home Estimate",
    description:
      "Qualified homeowner? Booked directly on your calendar. They get a text confirmation. You wake up to a full schedule instead of a voicemail box.",
    highlight: "Direct calendar integration",
  },
  {
    number: "04",
    icon: Bell,
    title: "Follows Up & Reactivates",
    description:
      "No-show on an estimate? AI follows up. Old leads sitting in your CRM from last year's home show? AI re-engages them with personalized outreach.",
    highlight: "Never lets a lead die",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From missed call to booked estimate. Fully automated.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <AnimateOnScroll
              key={step.number}
              delay={index * 0.1}
              className="bg-card border border-border rounded-lg p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl font-heading font-bold text-primary/20">
                  {step.number}
                </span>
                <step.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground mb-4">{step.description}</p>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                {step.highlight}
              </span>
            </AnimateOnScroll>
          ))}
        </div>

        <HowItWorksCTA />
      </div>
    </section>
  );
}
