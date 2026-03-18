import { Clock, PhoneMissed, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const painPoints = [
  {
    icon: Clock,
    title: "You're on a roof. The phone rings.",
    description:
      "You're mid-install, hands full. A homeowner wants a quote for 12 replacement windows. By the time you call back, they've already booked with someone else.",
    color: "text-warning",
  },
  {
    icon: PhoneMissed,
    title: "Every missed call is a $15K-$30K job gone",
    description:
      "78% of homeowners hire whoever responds first. One missed call on a full-home window replacement? That's a $25K job you'll never see.",
    color: "text-destructive",
  },
  {
    icon: DollarSign,
    title: "Office staff can't keep up",
    description:
      "A receptionist costs $40K+/year and still misses calls on sick days, weekends, and after 5pm — exactly when homeowners are calling.",
    color: "text-primary",
  },
];

export function PainPointsSection() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Sound Familiar?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Window and door companies lose thousands every week to slow follow-up. Here&apos;s why.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <AnimateOnScroll key={point.title} delay={index * 0.15}>
              <Card className="bg-background border-border h-full">
                <CardContent className="p-6">
                  <point.icon className={`h-10 w-10 ${point.color} mb-4`} />
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
