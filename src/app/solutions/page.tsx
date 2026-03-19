import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { getAllSolutions } from "@/lib/solutions";
import { config } from "@/lib/vertical.config";

export const metadata: Metadata = {
  title: `Window & Door Lead Management Solutions | ${config.brandName}`,
  description: `${config.brandName} solves the biggest lead management challenges for window and door companies — speed to lead, after-hours call handling, and dead lead reactivation.`,
  keywords: [
    "window door lead management",
    "AI solutions window companies",
    "speed to lead windows doors",
    "after hours window company",
    "lead reactivation windows",
    "window door AI receptionist",
  ],
  alternates: {
    canonical: `https://${config.domain}/solutions`,
  },
};

export default function SolutionsHubPage() {
  const solutions = getAllSolutions();

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-success/5" />
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge variant="outline" className="mb-6 border-primary/50 text-primary">
                Solutions
              </Badge>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
                Solve Your Biggest
                <br />
                <span className="text-primary">Lead Management Challenges</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Window and door companies lose thousands every month to slow response times,
                missed after-hours calls, and dead leads gathering dust. {config.brandName} solves
                each of these problems with AI-powered automation built for your industry.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-3">
                Explore Solutions
              </h2>
              <p className="text-muted-foreground">
                Each solution targets a specific revenue leak in your lead pipeline.
                See how {config.brandName} can help you capture more leads and book more estimates.
              </p>
            </div>

            {solutions.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {solutions.map((solution) => (
                  <Link key={solution.slug} href={`/solutions/${solution.slug}`}>
                    <Card className="h-full hover:border-primary/50 transition-colors cursor-pointer">
                      <CardHeader>
                        <Badge variant="secondary" className="w-fit mb-2">
                          {solution.hero.badge}
                        </Badge>
                        <CardTitle className="text-xl">{solution.meta.title.split(" | ")[0]}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{solution.meta.description}</p>
                        <div className="flex items-center text-primary font-medium">
                          Learn more <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-6">
                  We&apos;re building out detailed solution guides. Check back soon!
                </p>
                <Button asChild>
                  <Link href="/book-demo">
                    Book a Demo to Discuss Your Needs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-3">
                Why Window Companies Choose {config.brandName}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Regardless of the challenge, {config.brandName} delivers consistent results that
                help you book more estimates and close more deals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">47 sec</div>
                  <p className="font-medium text-foreground mb-1">Average Response Time</p>
                  <p className="text-sm text-muted-foreground">
                    AI responds to every lead instantly, 24/7/365
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">23%</div>
                  <p className="font-medium text-foreground mb-1">Dead Leads Reactivated</p>
                  <p className="text-sm text-muted-foreground">
                    Revive the leads you already paid for
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <p className="font-medium text-foreground mb-1">Always On</p>
                  <p className="text-sm text-muted-foreground">
                    Never miss another window or door lead, even after hours
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Ready to See {config.brandName} in Action?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a personalized demo and we&apos;ll show you exactly how {config.brandName} solves
              your biggest lead management challenges — from speed to lead, to after-hours coverage,
              to reactivating your dead leads.
            </p>
            <Button size="lg" className="text-lg px-10 py-6" asChild>
              <Link href="/book-demo">
                Book Your Free Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-6">
              No credit card required. See results in minutes.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
