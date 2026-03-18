import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const testimonials = [
  {
    quote:
      "We were missing half our calls during installs. First week with windoAI, we booked 9 in-home estimates without picking up the phone once.",
    name: "Mike Delano",
    role: "Owner, Delano Windows & Doors — Tampa FL",
    initials: "MD",
  },
  {
    quote:
      "A homeowner called at 9pm about replacing 14 windows. Our AI agent qualified the project and booked the estimate before I even saw the notification. That's a $28K job.",
    name: "Rachel Torres",
    role: "Sales Manager, ClearView Installations — Denver CO",
    initials: "RT",
  },
  {
    quote:
      "We reactivated 200 old leads from last year's home show. windoAI re-engaged them over text and booked 11 estimates in the first two weeks.",
    name: "Dave Kowalski",
    role: "GM, Precision Door & Window — Chicago IL",
    initials: "DK",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Window & Door Companies Are Winning
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here&apos;s what happens when you stop missing calls.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimateOnScroll key={testimonial.name} delay={index * 0.15}>
              <Card className="bg-card border-border h-full">
                <CardContent className="p-6">
                  <p className="text-foreground mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary/20 text-primary">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
