import Navigation from "@/components/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ShoppingCart,
  Globe,
  Search,
  TrendingUp,
  Facebook,
  Target,
  CheckCircle,
  ArrowRight,
  Palette,
  Code,
  BarChart3,
  Zap,
} from "lucide-react";
import Link from "next/link";

const shopifyServices = [
  {
    icon: ShoppingCart,
    title: "Custom Shopify Store Design",
    description:
      "Complete custom Shopify theme development tailored to your brand and optimized for conversions.",
    features: [
      "Custom theme development from scratch",
      "Mobile-first responsive design",
      "Speed optimization (90+ PageSpeed score)",
      "SEO-friendly structure",
      "Conversion rate optimization",
      "Payment gateway integration",
      "Inventory management setup",
      "Multi-currency support",
    ],
    pricing: "Start Now",
    timeline: "2-3 weeks",
    popular: true,
  },
  {
    icon: Palette,
    title: "Shopify Store Redesign",
    description:
      "Transform your existing Shopify store with a modern, high-converting design that reflects your brand.",
    features: [
      "Complete visual redesign",
      "User experience optimization",
      "Mobile optimization",
      "Page speed improvements",
      "Checkout optimization",
      "Product page enhancements",
      "Navigation improvements",
      "Brand consistency updates",
    ],
    pricing: "Start Now",
    timeline: "1-2 weeks",
    popular: false,
  },
];

const wordpressServices = [
  {
    icon: Globe,
    title: "WordPress E-commerce Development",
    description:
      "Professional WordPress websites with WooCommerce integration for complete e-commerce functionality.",
    features: [
      "Custom WordPress theme development",
      "WooCommerce setup and configuration",
      "Payment gateway integration",
      "Product catalog management",
      "SEO optimization",
      "Security hardening",
      "Performance optimization",
      "Content management training",
    ],
    pricing: "Start Now",
    timeline: "2-4 weeks",
    popular: false,
  },
  {
    icon: Code,
    title: "WordPress Website Design",
    description:
      "Modern, responsive WordPress websites designed to showcase your business and drive conversions.",
    features: [
      "Custom responsive design",
      "Content management system",
      "SEO-friendly structure",
      "Contact forms and lead capture",
      "Social media integration",
      "Google Analytics setup",
      "Performance optimization",
      "Security implementation",
    ],
    pricing: "Start Now",
    timeline: "1-3 weeks",
    popular: false,
  },
];

const marketingServices = [
  {
    icon: Search,
    title: "Product Listing Optimization",
    description:
      "Optimize your product listings for maximum visibility and conversion rates across all platforms.",
    features: [
      "SEO-optimized product titles",
      "Compelling product descriptions",
      "High-quality image optimization",
      "Keyword research and implementation",
      "Competitor analysis",
      "A/B testing for descriptions",
      "Schema markup implementation",
      "Performance tracking and reporting",
    ],
    pricing: "Start Now",
    timeline: "1-2 days per product",
    popular: true,
  },
  {
    icon: TrendingUp,
    title: "Product Hunting & Research",
    description:
      "Discover trending products and profitable opportunities to expand your product catalog.",
    features: [
      "Market trend analysis",
      "Competitor product research",
      "Profit margin calculations",
      "Supplier identification",
      "Demand validation",
      "Seasonal trend forecasting",
      "Niche market identification",
      "Product launch strategy",
    ],
    pricing: "Start Now",
    timeline: "Ongoing service",
    popular: false,
  },
];

const advertisingServices = [
  {
    icon: Facebook,
    title: "Meta Ads Management",
    description:
      "Facebook and Instagram advertising campaigns that drive targeted traffic and maximize ROI.",
    features: [
      "Campaign strategy development",
      "Audience research and targeting",
      "Creative ad design and copywriting",
      "A/B testing and optimization",
      "Conversion tracking setup",
      "Retargeting campaigns",
      "Performance monitoring",
      "Monthly reporting and insights",
    ],
    pricing: "Start Now",
    timeline: "Ongoing management",
    popular: true,
  },
  {
    icon: Target,
    title: "Google Ads Management",
    description:
      "Strategic Google Ads campaigns to capture high-intent customers and drive qualified traffic.",
    features: [
      "Keyword research and selection",
      "Campaign structure optimization",
      "Ad copy creation and testing",
      "Landing page optimization",
      "Bid management and optimization",
      "Negative keyword management",
      "Conversion tracking",
      "Performance analysis and reporting",
    ],
    pricing: "Start Now",
    timeline: "Ongoing management",
    popular: false,
  },
  {
    icon: BarChart3,
    title: "Snapchat Ads Management",
    description:
      "Reach younger demographics with engaging Snapchat advertising campaigns.",
    features: [
      "Audience targeting and segmentation",
      "Creative ad format optimization",
      "Campaign setup and management",
      "Performance tracking",
      "Creative testing and optimization",
      "Demographic analysis",
      "ROI optimization",
      "Monthly performance reports",
    ],
    pricing: "Start Now",
    timeline: "Ongoing management",
    popular: false,
  },
];

function ServiceCard({
  service,
  category,
}: {
  service: any;
  category: string;
}) {
  const IconComponent = service.icon;

  return (
    <Card className="relative group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {service.popular && (
        <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground">
          Most Popular
        </Badge>
      )}
      <CardHeader>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <IconComponent className="h-6 w-6 text-primary" />
          </div>
          <div>
            <CardTitle className="font-heading text-xl">
              {service.title}
            </CardTitle>
            <div className="flex items-center gap-4 mt-2">
              <span className="text-sm font-semibold text-primary">
                {service.pricing}
              </span>
              <span className="text-sm text-muted-foreground">
                {service.timeline}
              </span>
            </div>
          </div>
        </div>
        <CardDescription className="text-muted-foreground leading-relaxed">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-3">What's Included:</h4>
            <ul className="space-y-2">
              {service.features.map((feature: string, index: number) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-4 border-t border-border">
            <Button asChild className="w-full">
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6">
            Complete E-commerce Growth Services
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            From custom store design to advanced advertising campaigns, we
            provide everything you need to build, optimize, and scale your
            online business successfully.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
              <Zap className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Guaranteed Results</span>
            </div>
            <div className="flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full">
              <BarChart3 className="h-5 w-5 text-secondary" />
              <span className="text-sm font-medium">Data-Driven</span>
            </div>
          </div>
        </div>
      </section>

      {/* Shopify Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Shopify Development Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Custom Shopify solutions designed to maximize your store's
              potential and drive sales growth.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {shopifyServices.map((service, index) => (
              <ServiceCard key={index} service={service} category="shopify" />
            ))}
          </div>
        </div>
      </section>

      {/* WordPress Services */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
              WordPress Development Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Professional WordPress websites with e-commerce functionality and
              modern design.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {wordpressServices.map((service, index) => (
              <ServiceCard key={index} service={service} category="wordpress" />
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Product & Marketing Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Optimize your products and discover new opportunities to grow your
              business.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {marketingServices.map((service, index) => (
              <ServiceCard key={index} service={service} category="marketing" />
            ))}
          </div>
        </div>
      </section>

      {/* Advertising Services */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Advertising Management Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Professional ad management across all major platforms to maximize
              your ROI and reach.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {advertisingServices.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                category="advertising"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Choose the services that fit your needs or get a custom package
            tailored to your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </section>
    </main>
  );
}
