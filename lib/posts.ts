export type Post = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  categoryColor: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
  slug: string;
  content: string;
  tags?: string[];
};

export const blogPosts: Post[] = [
  {
    id: 1,
    title:
      "10 Proven Strategies to Increase Your Shopify Conversion Rate in 2025-2026",
    excerpt:
      "Discover the latest conversion optimization techniques that are driving results for e-commerce stores this year.",
    category: "E-commerce Tips",
    categoryColor: "bg-primary/10 text-primary",
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "2 min read",
    image: "/best-conversion.png",
    featured: true,
    slug: "shopify-conversion-rate-optimization-2024",
    tags: [
      "Shopify",
      "Conversion Rate",
      "E-commerce",
      "Optimization",
      "Mobile",
    ],
    content: `
      <p>Conversion optimization is part art, part science. In this article we focus on practical steps you can ship today: streamline checkout, add trust signals, and prioritize fast mobile experiences. Case studies show a 12–40% lift when these basics are implemented together.</p>
      <h3>Key takeaways</h3>
      <ul>
        <li>Reduce friction in checkout</li>
        <li>Use clear CTAs and social proof</li>
        <li>Monitor metrics and iterate</li>
      </ul>
    `,
  },
  {
    id: 2,
    title:
      "Meta Ads vs Google Ads: Which Platform Delivers Better ROI for E-commerce?",
    excerpt:
      "A comprehensive comparison of advertising platforms to help you make the right choice for your business.",
    category: "Ad Strategies",
    categoryColor: "bg-accent/10 text-accent",
    author: "Mike Chen",
    date: "2024-01-12",
    readTime: "4 min read",
    image: "/blog-meta-vs-google.png",
    featured: true,
    slug: "meta-ads-vs-google-ads-ecommerce-roi",
    tags: ["Ads", "Meta", "Google", "ROI"],
    content: `
      <p>This article compares intent-based search advertising with social-driven discovery ads. We break down budget allocation, creative best-practices, and attribution pitfalls so you can choose the platform that fits your funnel stage.</p>
      <h3>Practical advice</h3>
      <ol>
        <li>Use Google Ads for high-intent searches and recovery campaigns</li>
        <li>Use Meta for prospecting with creative variations</li>
        <li>Test small audiences and measure CPA across both platforms</li>
      </ol>
    `,
  },
  {
    id: 3,
    title: "Product Hunting Guide: How to Find Winning Products in 2025-2026",
    excerpt:
      "Step-by-step process to identify trending products and validate market demand before investing.",
    category: "Product Hunting",
    categoryColor: "bg-secondary/10 text-secondary",
    author: "Emily Rodriguez",
    date: "2024-01-10",
    readTime: "5 min read",
    image: "/blog-product-hunting.png",
    featured: false,
    slug: "product-hunting-guide-winning-products-2025-2026",
    tags: ["Sourcing", "Trends"],
    content: `
      <p>Winning product ideas come from patterns: micro-trends, repeat purchases, and underserved niches. This guide shows tools and signals to validate demand before you scale inventory.</p>
      <h3>Validation checklist</h3>
      <ul>
        <li>Search trend spikes</li>
        <li>Existing paid ads with conversions</li>
        <li>Repeat purchase potential</li>
      </ul>
    `,
  },
  {
    id: 4,
    title:
      "WordPress vs Shopify: Choosing the Right Platform for Your Online Store",
    excerpt:
      "Compare the pros and cons of each platform to make an informed decision for your e-commerce business.",
    category: "E-commerce Tips",
    categoryColor: "bg-primary/10 text-primary",
    author: "David Park",
    date: "2024-01-08",
    readTime: "3 min read",
    image: "/blog-wordpress-vs-shopify.png",
    featured: false,
    slug: "wordpress-vs-shopify-ecommerce-platform-comparison",
    tags: ["Platforms", "Shopify", "WordPress"],
    content: `
      <p>Choosing between WordPress (WooCommerce) and Shopify depends on priorities: ownership and flexibility vs. simplicity and speed-to-market. We compare costs, customization, maintenance, and scaling considerations.</p>
      <h3>Which to pick</h3>
      <ul>
        <li>Pick WordPress if you need deep customization and control</li>
        <li>Pick Shopify if you want a turnkey store with lower maintenance</li>
      </ul>
    `,
  },
  {
    id: 5,
    title: "5 Facebook Ad Mistakes That Are Killing Your ROAS",
    excerpt:
      "Avoid these common pitfalls that prevent e-commerce businesses from achieving profitable ad campaigns.",
    category: "Ad Strategies",
    categoryColor: "bg-accent/10 text-accent",
    author: "Sarah Johnson",
    date: "2024-01-05",
    readTime: "2 min read",
    image: "/blog-facebook-ad-mistakes.png",
    featured: false,
    slug: "facebook-ad-mistakes-killing-roas",
    tags: ["Facebook Ads", "ROAS"],
    content: `
      <p>Many advertisers make the same five mistakes: bad creative, poor audience segmentation, wrong bidding strategy, ignoring creative fatigue, and skipping proper tracking. Fixing these can dramatically improve ROAS.</p>
      <h3>Quick fixes</h3>
      <ul>
        <li>Rotate creatives every 7–14 days</li>
        <li>Use lookalike audiences seeded with buyers</li>
        <li>Double-check pixel and conversion events</li>
      </ul>
    `,
  },
  {
    id: 6,
    title: "The Complete Guide to Product Page Optimization",
    excerpt:
      "Transform your product pages into conversion machines with these proven optimization techniques.",
    category: "E-commerce Tips",
    categoryColor: "bg-primary/10 text-primary",
    author: "Mike Chen",
    date: "2024-01-03",
    readTime: "2 min read",
    image: "/blog-product-page-optimization.png",
    featured: false,
    slug: "complete-guide-product-page-optimization",
    tags: ["Product Pages", "CRO"],
    content: `
      <p>This guide covers structure, imagery, copy, and social proof for product pages. Small changes like bullet-focused benefits and trust badges often yield outsized lifts.</p>
      <h3>Elements to optimize</h3>
      <ul>
        <li>Product title and subheadline</li>
        <li>High-quality images and video</li>
        <li>Clear benefits and shipping info</li>
      </ul>
    `,
  },
];
