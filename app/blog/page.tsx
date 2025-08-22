import React from "react";
import Link from "next/link";
import Navigation from "@/components/navigation";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  ArrowRight,
  TrendingUp,
  Target,
  ShoppingCart,
} from "lucide-react";
import { blogPosts } from "@/lib/posts";

export default function BlogIndex() {
  const featuredPosts = blogPosts.filter((p) => p.featured);
  const regularPosts = blogPosts.filter((p) => !p.featured);

  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="bg-gradient-to-br from-background to-muted py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6">
            E-commerce Growth Blog
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Expert insights, proven strategies, and actionable tips to help you
            grow your online business and maximize your e-commerce success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Growth Strategies</span>
            </div>
            <div className="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
              <Target className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">Ad Optimization</span>
            </div>
            <div className="flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full">
              <ShoppingCart className="h-5 w-5 text-secondary" />
              <span className="text-sm font-medium">E-commerce Tips</span>
            </div>
          </div>
        </div>
      </section>

      {featuredPosts.length > 0 && (
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl text-foreground mb-8">
              Featured Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 md:col-span-1"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2 px-4">
                      <Badge className={post.categoryColor}>
                        {post.category}
                      </Badge>
                    </div>
                    <CardTitle className="px-4 font-heading text-xl lg:text-2xl group-hover:text-primary transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </CardTitle>
                    <CardDescription className="px-4 text-base">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <Button
                        variant="ghost"
                        className="p-3 h-auto font-medium text-primary cursor-pointer"
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl text-foreground mb-8">
            Latest Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card
                key={post.id}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-lg mb-4 group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      By {post.author}
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <Button
                        variant="ghost"
                        className="p-0 h-auto font-medium text-primary"
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
