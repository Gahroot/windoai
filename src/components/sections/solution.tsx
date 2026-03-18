import { MessageCircle, Calendar, Zap, Moon } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const features = [
  {
    icon: Zap,
    title: "Answers Calls & Texts",
    description: "Every inbound call and web lead gets a response in under 60 seconds.",
  },
  {
    icon: MessageCircle,
    title: "Qualifies Window & Door Projects",
    description: "Asks about project type, number of units, timeline, and budget — naturally.",
  },
  {
    icon: Calendar,
    title: "Books In-Home Estimates",
    description: "Qualified homeowners land directly on your calendar. No back-and-forth.",
  },
  {
    icon: Moon,
    title: "Works 24/7/365",
    description: "Nights, weekends, holidays. When homeowners are browsing, your agent is selling.",
  },
];

export function SolutionSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimateOnScroll>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              More Than a Receptionist.
              <br />
              <span className="text-primary">A Full AI Sales Team.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              windoAI doesn&apos;t just answer calls. It qualifies projects, books estimates, follows up with no-shows, reactivates old leads, and texts back every missed call — automatically.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span>Replaces your receptionist, ISA, and follow-up process</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span>Knows window replacement, doors, energy upgrades</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span>Syncs with MarketSharp, Improveit 360, JobNimbus</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span>Fraction of the cost of one hire</span>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2} className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <AnimateOnScroll
                key={feature.title}
                delay={0.3 + index * 0.1}
                className="bg-card border border-border rounded-lg p-6"
              >
                <feature.icon className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </AnimateOnScroll>
            ))}
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
