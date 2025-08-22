import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Fashion Boutique",
    content:
      "Our Shopify store redesign increased our conversion rate by 340%. The team understood our brand perfectly and delivered beyond expectations.",
    rating: 5,
    avatar: "/professional-woman-headshot.png",
  },
  {
    name: "Mike Chen",
    company: "Tech Accessories",
    content:
      "The Meta ads campaign generated $50K in revenue in the first month. Their targeting and optimization strategies are exceptional.",
    rating: 5,
    avatar: "/professional-man-headshot.png",
  },
  {
    name: "Emily Rodriguez",
    company: "Home Decor Store",
    content:
      "Product hunting services helped us discover trending items that became our best sellers. ROI increased by 280% within 3 months.",
    rating: 5,
    avatar: "/avatar-1.png",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground">Real results from real businesses we've helped grow</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</blockquote>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
