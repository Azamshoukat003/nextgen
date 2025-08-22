"use client";

import type React from "react";

import { useState } from "react";
import Navigation from "@/components/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm, ValidationError } from "@formspree/react";

import {
  Mail,
  Phone,
  MessageCircle,
  Clock,
  Send,
  CheckCircle,
  ArrowRight,
  Calendar,
  Zap,
  Shield,
  Users,
} from "lucide-react";
import Link from "next/link";

const services = [
  "Shopify Store Design",
  "Shopify Store Redesign",
  "WordPress E-commerce Development",
  "WordPress Website Design",
  "Product Listing Optimization",
  "Product Hunting & Research",
  "Meta Ads Management",
  "Google Ads Management",
  "Snapchat Ads Management",
  "Custom Package",
];

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary by scope. Shopify redesigns typically take 1-3 weeks, while custom development projects can take 2-6 weeks. We'll provide a detailed timeline during our consultation.",
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer:
      "Yes! We provide 30 days of free support after project completion, and offer ongoing maintenance packages for continued optimization and updates.",
  },
  {
    question: "What's included in your advertising management services?",
    answer:
      "Our ad management includes strategy development, campaign setup, creative design, audience targeting, ongoing optimization, and detailed monthly reporting.",
  },
  {
    question: "Can you work with my existing website?",
    answer:
      "We can optimize, redesign, or enhance your existing website regardless of the platform. We'll assess your current setup and recommend the best approach.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
    newsletter: false,
  });
  const [state, handleSubmit] = useForm("meozyanj");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault()
  //   setIsSubmitting(true)

  //   // Simulate form submission
  //   await new Promise((resolve) => setTimeout(resolve, 2000))

  //   setIsSubmitting(false)
  //   setIsSubmitted(true)
  // }

  if (isSubmitted) {
    return (
      <main className="min-h-screen">
        <Navigation />
        <section className="py-20 bg-gradient-to-br from-background to-muted">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-accent-foreground" />
            </div>
            <h1 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Thank You for Your Inquiry!
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              We've received your message and will get back to you within 24
              hours. In the meantime, feel free to check out our portfolio or
              connect with us on WhatsApp for immediate assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/portfolio">View Our Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="https://wa.me/1234567890" target="_blank">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6">
            Get Started Today
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Ready to grow your e-commerce business? Get a free consultation and
            discover how we can help you increase sales and scale your online
            presence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
              <Zap className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">Free Consultation</span>
            </div>
            <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">No Commitment</span>
            </div>
            <div className="flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full">
              <Users className="h-5 w-5 text-secondary" />
              <span className="text-sm font-medium">Expert Team</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">
                    Send Us a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24
                    hours with a customized proposal.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();
                      setIsSubmitting(true);

                      const form = e.currentTarget;
                      const data = new FormData(form);

                      try {
                        const response = await fetch(
                          "https://formspree.io/f/xgvzlovg",
                          {
                            method: "POST",
                            body: data,
                            headers: {
                              Accept: "application/json",
                            },
                          }
                        );

                        if (response.ok) {
                          setIsSubmitted(true);
                          form.reset(); // clear form after success
                        } else {
                          console.error(
                            "Form submission error:",
                            await response.json()
                          );
                        }
                      } catch (err) {
                        console.error("Network error:", err);
                      }

                      setIsSubmitting(false);
                    }}
                    className="space-y-6"
                    action="https://formspree.io/f/xgvzlovg"
                    method="post"
                  >
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          placeholder="j"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={(e) =>
                            handleInputChange("company", e.target.value)
                          }
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interested In *</Label>
                        <Select
                          onValueChange={(value) =>
                            handleInputChange("service", value)
                          }
                          required
                          name="service"
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget">Project Budget</Label>
                        <Select
                          onValueChange={(value) =>
                            handleInputChange("budget", value)
                          }
                          name="budget"
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-1h">Under $100</SelectItem>

                            <SelectItem value="1h-5h">$100 -$500</SelectItem>
                            <SelectItem value="5h-1k">$500 - $1,000</SelectItem>

                            <SelectItem value="1k-5k">
                              $1,000 - $5,000
                            </SelectItem>
                            <SelectItem value="5k-10k">
                              $5,000 - $10,000
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        name="message"
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                        rows={5}
                        required
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) =>
                          handleInputChange("newsletter", checked as boolean)
                        }
                      />
                      <Label htmlFor="newsletter" className="text-sm">
                        Subscribe to our newsletter for e-commerce tips and
                        industry insights
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      // disabled={isSubmitting}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information & Quick Actions */}
            <div className="space-y-8">
              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-xl">
                    Get In Touch
                  </CardTitle>
                  <CardDescription>
                    Prefer to contact us directly? Here are our details.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-muted-foreground">
                        hello@digitalgrowth.com
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-sm text-muted-foreground">
                        92 (329) 337-6172
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Clock className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <div className="font-medium">Business Hours</div>
                      <div className="text-sm text-muted-foreground">
                        Mon-Fri: 9AM-6PM EST
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp CTA */}
              <Card className="bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">
                    Need Immediate Help?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Chat with us on WhatsApp for instant support and quick
                    questions.
                  </p>
                  <Button
                    asChild
                    className="w-full bg-accent hover:bg-accent/90"
                  >
                    <Link href="https://wa.me/+923293376172" target="_blank">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Chat on WhatsApp
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-xl">
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                  >
                    <Link href="/services">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      View All Services
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                  >
                    <Link href="/portfolio">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      See Our Portfolio
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                  >
                    <Link
                      href="https://calendly.com/digitalgrowth"
                      target="_blank"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule a Call
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions about our services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="font-heading text-lg">
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
