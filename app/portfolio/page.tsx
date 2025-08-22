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
  TrendingUp,
  ArrowRight,
  ExternalLink,
  Calendar,
  DollarSign,
  Users,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

const caseStudies = [
  {
    id: 1,
    title: "Fashion Boutique Shopify Redesign",
    category: "Shopify Design",
    client: "Bella Fashion Co.",
    duration: "3 weeks",
    description:
      "Complete Shopify store redesign focusing on mobile optimization and conversion rate improvements.",
    challenge:
      "The client's existing store had a 1.2% conversion rate and poor mobile experience, resulting in high bounce rates and lost sales.",
    solution:
      "We redesigned the entire user experience with a mobile-first approach, optimized product pages, and streamlined the checkout process.",
    results: [
      {
        metric: "Conversion Rate",
        before: "1.2%",
        after: "4.1%",
        improvement: "+242%",
      },
      {
        metric: "Mobile Traffic",
        before: "45%",
        after: "78%",
        improvement: "+73%",
      },
      {
        metric: "Average Order Value",
        before: "$67",
        after: "$94",
        improvement: "+40%",
      },
      {
        metric: "Page Load Speed",
        before: "4.2s",
        after: "1.8s",
        improvement: "+57%",
      },
    ],
    testimonial: {
      text: "The redesign exceeded our expectations. Our sales increased by 34% in the first month alone.",
      author: "Sarah Johnson, Owner",
    },
    images: {
      before: "/portfolio-fashion-before.png",
      after: "/portfolio-fashion-after.png",
    },
    tags: ["Shopify", "E-commerce", "Mobile Optimization", "Conversion Rate"],
  },
  {
    id: 2,
    title: "Tech Accessories Meta Ads Campaign",
    category: "Meta Ads",
    client: "TechGear Pro",
    duration: "6 months",
    description:
      "Comprehensive Facebook and Instagram advertising campaign targeting tech enthusiasts and professionals.",
    challenge:
      "Client was spending $5,00/month on ads with poor targeting, resulting in high cost per acquisition and low ROAS.",
    solution:
      "We implemented advanced audience segmentation, created compelling video ads, and optimized for conversion events.",
    results: [
      { metric: "ROAS", before: "2.1x", after: "6.8x", improvement: "+224%" },
      {
        metric: "Cost Per Acquisition",
        before: "$45",
        after: "$18",
        improvement: "-60%",
      },
      {
        metric: "Monthly Revenue",
        before: "$12K",
        after: "$52K",
        improvement: "+333%",
      },
      {
        metric: "Click-Through Rate",
        before: "1.2%",
        after: "3.7%",
        improvement: "+208%",
      },
    ],
    testimonial: {
      text: "Our Meta ads now generate 5K+ monthly revenue. The targeting and optimization are exceptional.",
      author: "Mike Chen, Marketing Director",
    },
    images: {
      before: "/portfolio-ads-before.png",
      after: "/portfolio-ads-after.png",
    },
    tags: ["Meta Ads", "Facebook", "Instagram", "ROAS Optimization"],
  },
  {
    id: 3,
    title: "Home Decor WordPress E-commerce",
    category: "WordPress Development",
    client: "Cozy Home Designs",
    duration: "4 weeks",
    description:
      "Custom WordPress website with WooCommerce integration for a growing home decor business.",
    challenge:
      "Client needed a professional e-commerce website to replace their basic template site and improve user experience.",
    solution:
      "We built a custom WordPress theme with advanced filtering, wishlist functionality, and optimized checkout flow.",
    results: [
      {
        metric: "Organic Traffic",
        before: "500/month",
        after: "2,400/month",
        improvement: "+380%",
      },
      {
        metric: "Conversion Rate",
        before: "0.8%",
        after: "2.9%",
        improvement: "+263%",
      },
      {
        metric: "Average Session Duration",
        before: "1:20",
        after: "3:45",
        improvement: "+181%",
      },
      {
        metric: "Mobile Conversions",
        before: "15%",
        after: "68%",
        improvement: "+353%",
      },
    ],
    testimonial: {
      text: "The new website transformed our business. We're now getting orders from customers worldwide.",
      author: "Emily Rodriguez, Founder",
    },
    images: {
      before: "/portfolio-wordpress-before.png",
      after: "/portfolio-wordpress-after.png",
    },
    tags: ["WordPress", "WooCommerce", "SEO", "Custom Development"],
  },
  {
    id: 4,
    title: "Product Hunting Success Story",
    category: "Product Research",
    client: "Trend Hunters LLC",
    duration: "Ongoing",
    description:
      "Product research and hunting services that identified trending items and profitable opportunities.",
    challenge:
      "Client struggled to find profitable products and was losing money on poor product choices.",
    solution:
      "We implemented systematic product research using data analysis, trend forecasting, and market validation.",
    results: [
      {
        metric: "Product Success Rate",
        before: "20%",
        after: "85%",
        improvement: "+325%",
      },
      {
        metric: "Average Profit Margin",
        before: "15%",
        after: "45%",
        improvement: "+200%",
      },
      {
        metric: "Monthly Revenue",
        before: "$8K",
        after: "$28K",
        improvement: "+250%",
      },
      {
        metric: "Time to Market",
        before: "8 weeks",
        after: "3 weeks",
        improvement: "-63%",
      },
    ],
    testimonial: {
      text: "Their product hunting expertise helped us discover items that became our best sellers.",
      author: "David Park, CEO",
    },
    images: {
      before: "/portfolio-products-before.png",
      after: "/portfolio-products-after.png",
    },
    tags: [
      "Product Research",
      "Market Analysis",
      "Trend Forecasting",
      "Profit Optimization",
    ],
  },
];

const stats = [
  // { icon: DollarSign, value: "$2M+", label: "Revenue Generated" },
  { icon: TrendingUp, value: "340%", label: "Average ROI Increase" },
  { icon: Users, value: "20+", label: "Happy Clients" },
  { icon: BarChart3, value: "98%", label: "Client Satisfaction" },
];

function CaseStudyCard({ study }: { study: any }) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <Badge variant="secondary">{study.category}</Badge>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            {study.duration}
          </div>
        </div>
        <CardTitle className="font-heading text-xl mb-2">
          {study.title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {study.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Before/After Images */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-sm mb-2">Before</h4>
            <img
              src={study.images.before || "/placeholder.svg"}
              alt={`${study.title} - Before`}
              className="w-full h-32 object-cover rounded-lg border"
            />
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-2">After</h4>
            <img
              src={study.images.after || "/placeholder.svg"}
              alt={`${study.title} - After`}
              className="w-full h-32 object-cover rounded-lg border"
            />
          </div>
        </div>

        {/* Results Grid */}
        {/* <div>
          <h4 className="font-semibold mb-3">Key Results</h4>
          <div className="grid grid-cols-2 gap-3">
            {study.results.map((result: any, index: number) => (
              <div key={index} className="bg-muted/50 p-3 rounded-lg">
                <div className="text-xs text-muted-foreground mb-1">
                  {result.metric}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm line-through text-muted-foreground">
                    {result.before}
                  </span>
                  <ArrowRight className="h-3 w-3 text-muted-foreground" />
                  <span className="font-semibold">{result.after}</span>
                </div>
                <div className="text-xs font-medium text-accent mt-1">
                  {result.improvement}
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Testimonial */}
        <div className="bg-primary/5 p-4 rounded-lg">
          <blockquote className="text-sm italic mb-2">
            "{study.testimonial.text}"
          </blockquote>
          <cite className="text-xs text-muted-foreground">
            — {study.testimonial.author}
          </cite>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {study.tags.map((tag: string, index: number) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* CTA */}
        <Button asChild className="w-full">
          <Link href="/contact">
            Get Similar Results
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6">
            Our Success Stories
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Real results from real businesses. See how we've helped our clients
            achieve remarkable growth through strategic design, optimization,
            and advertising.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div className="font-heading font-bold text-2xl lg:text-3xl text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Featured Case Studies
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Detailed breakdowns of our most successful projects and the
              strategies that delivered exceptional results.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Our Proven Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every successful project follows our systematic approach to ensure
              maximum results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Analysis & Strategy",
                description:
                  "We analyze your current situation and develop a comprehensive strategy.",
              },
              {
                step: "02",
                title: "Design & Development",
                description:
                  "Our team creates and implements solutions tailored to your goals.",
              },
              {
                step: "03",
                title: "Testing & Optimization",
                description:
                  "We test everything thoroughly and optimize for maximum performance.",
              },
              {
                step: "04",
                title: "Launch & Monitor",
                description:
                  "We launch your project and continuously monitor and improve results.",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-heading font-bold text-xl mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">
                  {process.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how we can help you achieve similar results for your
            business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 bg-transparent"
            >
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
