import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="font-heading font-bold text-xl mb-4">
              DigitalGrowth Pro
            </h3>
            <p className="text-background/80 mb-6">
              Helping e-commerce businesses grow through expert design,
              optimization, and advertising strategies.
            </p>
            <div className="flex space-x-4">
              <Button
                size="icon"
                variant="ghost"
                className="text-background hover:text-foreground hover:bg-background"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-background hover:text-foreground hover:bg-background"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-background hover:text-foreground hover:bg-background"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-background hover:text-foreground hover:bg-background"
              >
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <Link
                  href="/services#shopify"
                  className="hover:text-background transition-colors"
                >
                  Shopify Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services#wordpress"
                  className="hover:text-background transition-colors"
                >
                  WordPress Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services#optimization"
                  className="hover:text-background transition-colors"
                >
                  Product Optimization
                </Link>
              </li>
              <li>
                <Link
                  href="/services#ads"
                  className="hover:text-background transition-colors"
                >
                  Meta Ads Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services#google-ads"
                  className="hover:text-background transition-colors"
                >
                  Google Ads
                </Link>
              </li>
              <li>
                <Link
                  href="/services#snapchat"
                  className="hover:text-background transition-colors"
                >
                  Snapchat Ads
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-background transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-background transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-background transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/contact#faq"
                  className="hover:text-background transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">
              Get In Touch
            </h4>
            <div className="space-y-3 text-background/80 mb-6">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>team.nextgensolution1@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+92 (329) 337-6172</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Rahim Yar Khan , PK</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">
            © 2024 DigitalGrowth Pro. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-background/60 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="hover:text-background transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-background transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
