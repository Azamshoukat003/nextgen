import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <CardContent className="p-8 lg:p-12 text-center">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">
              Ready to Grow Your Business?
            </h2>
            <p className="text-lg lg:text-xl mb-8 opacity-90">
              Get a free consultation and discover how we can help you increase
              sales, optimize your store, and scale your online presence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-lg px-8"
              >
                <Link href="/contact">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Free Consultation
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link href="https://wa.me/+923293376172" target="_blank">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </Link>
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t border-primary-foreground/20">
              <p className="text-sm opacity-75">
                ✓ Free 30-minute strategy session • ✓ No commitment required • ✓
                Get actionable insights
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
