import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Globe, Search, TrendingUp, Facebook, Target, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: ShoppingCart,
    title: "Shopify Store Design",
    description: "Custom Shopify themes and complete store redesigns that convert visitors into customers.",
    features: ["Custom Theme Development", "Mobile Optimization", "Conversion Rate Optimization"],
  },
  {
    icon: Globe,
    title: "WordPress Development",
    description: "Professional WordPress websites with e-commerce functionality and modern design.",
    features: ["WooCommerce Integration", "SEO Optimization", "Performance Enhancement"],
  },
  {
    icon: Search,
    title: "Product Optimization",
    description: "Optimize your product listings for maximum visibility and conversion rates.",
    features: ["SEO Product Titles", "Compelling Descriptions", "Image Optimization"],
  },
  {
    icon: TrendingUp,
    title: "Product Hunting",
    description: "Discover trending products and profitable opportunities for your store.",
    features: ["Market Research", "Trend Analysis", "Competitor Insights"],
  },
  {
    icon: Facebook,
    title: "Meta Ads Management",
    description: "Facebook and Instagram advertising campaigns that drive targeted traffic and sales.",
    features: ["Campaign Setup", "Audience Targeting", "Performance Optimization"],
  },
  {
    icon: Target,
    title: "Multi-Platform Ads",
    description: "Google Ads and Snapchat advertising to reach your customers across all platforms.",
    features: ["Google Ads", "Snapchat Ads", "Cross-Platform Strategy"],
  },
]

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
            Complete E-commerce Growth Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From design to marketing, we provide everything you need to build, optimize, and scale your online business
            successfully.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button asChild size="lg" className="text-lg px-8">
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
