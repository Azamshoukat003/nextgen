import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Target, Zap } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-background to-muted py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-heading font-bold text-4xl lg:text-6xl leading-tight text-foreground">
                Grow Your <span className="text-primary">E-commerce</span>{" "}
                Business Online
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Professional Shopify & WordPress design, product optimization,
                and ads management services that drive real results for your
                online store.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
                <TrendingUp className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">Increase Sales</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <Target className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Better Targeting</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full">
                <Zap className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium">Fast Results</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-transparent"
              >
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Trusted by 200+ businesses
              </p>
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="font-heading font-bold text-2xl text-primary">
                    500%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Avg. ROI Increase
                  </div>
                </div>

                <div className="text-center">
                  <div className="font-heading font-bold text-2xl text-secondary">
                    98%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/ecommerce-dashboard.png"
                alt="E-commerce Growth Dashboard"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-primary/10 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
