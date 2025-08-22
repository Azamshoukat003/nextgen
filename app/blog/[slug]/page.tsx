import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navigation from "@/components/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { blogPosts } from "@/lib/posts";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return notFound();

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/blog">
              <span className="flex items-center gap-2">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </span>
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-br from-background to-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge className={post.categoryColor}>{post.category}</Badge>

            <h1 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mt-4 mb-6">
              {post.title}
            </h1>
            <div className="mb-8">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-44 lg:h-46 object-cover rounded-lg shadow-lg mx-auto"
              />
            </div>
            <p className="text-lg text-muted-foreground mb-6">{post.excerpt}</p>

            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
              <div className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                By {post.author}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              <div
                className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="font-heading font-semibold text-lg mb-4">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(post.tags || []).map((tag, i) => (
                    <Badge key={i} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                <Card>
                  <CardContent className="p-6 text-center">
                    <img
                      src="/author-sarah.png"
                      alt={post.author}
                      className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="font-heading font-semibold mb-2">
                      {post.author}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      E-commerce strategist with 8+ years of experience helping
                      businesses grow online.
                    </p>
                    <Link href="/contact">
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="w-full bg-transparent"
                      >
                        Get In Touch
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-heading font-semibold mb-2">
                      Stay Updated
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get weekly e-commerce insights and strategies.
                    </p>
                    <Button className="w-full">Subscribe Now</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl text-foreground mb-8 text-center">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {relatedPosts.map((r) => (
              <Card
                key={r.id}
                className="group hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={r.image}
                  alt={r.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-lg mb-4 group-hover:text-primary transition-colors">
                    <Link href={`/blog/${r.slug}`}>{r.title}</Link>
                  </h3>
                  <Link href={`/blog/${r.slug}`}>
                    <Button
                      variant="ghost"
                      className="p-2 h-auto font-medium text-primary cursor-pointer"
                    >
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
