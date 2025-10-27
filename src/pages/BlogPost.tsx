import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Clock, ArrowLeft, Share2 } from "lucide-react";

const BlogPost = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Featured Image */}
      <section className="relative pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button variant="ghost" asChild className="mb-6">
            <a href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </a>
          </Button>

          <Badge className="mb-4">Faith & Life</Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Finding Hope in Times of Uncertainty
          </h1>

          <div className="flex flex-wrap gap-6 text-muted-foreground mb-8">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              October 15, 2025
            </span>
            <span className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Pastor Thomas Long
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              5 min read
            </span>
          </div>

          <div className="relative h-96 rounded-xl overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1501612780327-45045538702b?w=1200&h=600&fit=crop"
              alt="Person looking at horizon with hope"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              In our rapidly changing world, we often find ourselves searching for stability and peace. 
              The news cycles bring fresh challenges daily, our personal lives shift in unexpected ways, 
              and sometimes it feels like the ground beneath our feet is constantly moving.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">
              When Everything Feels Uncertain
            </h2>
            
            <p className="text-foreground/90 leading-relaxed mb-6">
              Last Sunday, I spoke with a member of our congregation who perfectly captured what many of us feel: 
              "Pastor, I wake up every morning wondering what challenge the day will bring. I'm tired of uncertainty." 
              Her honesty resonated deeply because she voiced what so many carry silently in their hearts.
            </p>

            <p className="text-foreground/90 leading-relaxed mb-6">
              Uncertainty isn't new to the human experience. Throughout Scripture, we see God's people facing 
              unknown futures—Abraham leaving his homeland without knowing his destination, the Israelites 
              wandering in the wilderness, the disciples watching their world shatter at the crucifixion. 
              Yet in each story, we find a common thread: God's faithful presence in the midst of the unknown.
            </p>

            <blockquote className="border-l-4 border-primary pl-6 my-8 italic text-lg text-muted-foreground">
              "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, 
              to give you a future and a hope." — Jeremiah 29:11
            </blockquote>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">
              Building on the Solid Rock
            </h2>

            <p className="text-foreground/90 leading-relaxed mb-6">
              Jesus teaches us about building our house on solid rock versus shifting sand (Matthew 7:24-27). 
              This isn't just a children's story—it's a profound truth about where we anchor our lives. 
              When storms come, and they will come, what foundation will hold us steady?
            </p>

            <p className="text-foreground/90 leading-relaxed mb-6">
              The rock Jesus speaks of isn't circumstantial stability. It's not a perfect job, ideal health, 
              or trouble-free relationships. These are all good gifts, but they're built on sand. The rock 
              is Christ Himself—unchanging, eternal, faithful through every season.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">
              Practical Steps Forward
            </h2>

            <p className="text-foreground/90 leading-relaxed mb-6">
              So how do we practically build on this foundation when anxiety threatens to overwhelm us? 
              Here are three practices that have helped our community:
            </p>

            <div className="bg-gradient-subtle rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">1. Start Your Day in Scripture</h3>
              <p className="text-foreground/80 mb-4">
                Before checking your phone or the news, spend even five minutes reading God's Word. 
                Let His truth be the first voice you hear each morning. The Psalms are particularly 
                powerful for anxious hearts.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-4">2. Practice Gratitude</h3>
              <p className="text-foreground/80 mb-4">
                Write down three things you're thankful for each day. It sounds simple, but this practice 
                trains our minds to see God's goodness even in difficult seasons. Gratitude is the antidote 
                to anxiety.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-4">3. Stay Connected to Community</h3>
              <p className="text-foreground/80">
                Don't isolate when times get tough. Our small groups, prayer meetings, and Sunday gatherings 
                aren't optional extras—they're lifelines. We need each other to remember truth when our 
                feelings lie to us.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">
              A Living Hope
            </h2>

            <p className="text-foreground/90 leading-relaxed mb-6">
              Peter writes that we have been given "a living hope through the resurrection of Jesus Christ 
              from the dead" (1 Peter 1:3). Notice he doesn't say a wishful hope or a maybe hope. 
              It's a living hope—active, powerful, transformative.
            </p>

            <p className="text-foreground/90 leading-relaxed mb-6">
              This hope doesn't promise that life will be easy or that we'll avoid pain. Instead, it promises 
              that we're never alone, that our suffering has purpose, and that our story doesn't end with 
              the grave. That's the kind of hope that can sustain us through any uncertainty.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">
              Moving Forward Together
            </h2>

            <p className="text-foreground/90 leading-relaxed mb-6">
              As we navigate these uncertain times, remember that you're part of a family that's been 
              walking this journey for generations. The same God who guided our spiritual ancestors guides 
              us today. The same promises they clung to are still true for us.
            </p>

            <p className="text-foreground/90 leading-relaxed mb-6">
              This Sunday, we'll continue exploring this theme together. We'll gather, sing, pray, and 
              remind each other of the solid rock beneath our feet. If you're struggling with uncertainty 
              right now, please don't carry it alone. Reach out to our pastoral team, join a small group, 
              or simply show up on Sunday morning. Let's walk this path together.
            </p>

            <div className="bg-primary/10 rounded-lg p-8 my-12 text-center">
              <p className="text-xl font-semibold text-foreground mb-2">
                "God is our refuge and strength, a very present help in trouble."
              </p>
              <p className="text-muted-foreground">Psalm 46:1</p>
            </div>

            <p className="text-foreground/90 leading-relaxed">
              May you find peace in knowing that the One who holds tomorrow holds you today. 
              May you experience His presence in the midst of uncertainty. And may you know, 
              deep in your soul, that you are loved, you are held, and you are never alone.
            </p>
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <p className="text-muted-foreground">Share this post:</p>
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 p-6 bg-gradient-subtle rounded-lg">
            <div className="flex gap-4">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                alt="Pastor Thomas Long"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-1">Pastor Thomas Long</h3>
                <p className="text-muted-foreground text-sm">
                  Pastor Thomas has been serving Lithia Springs Methodist Church since 2018, 
                  bringing 25 years of pastoral experience and a heart for helping people discover 
                  God's love in practical, everyday ways.
                </p>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <a href="/blog" className="group">
                <div className="bg-card border border-border rounded-lg overflow-hidden hover-scale">
                  <img 
                    src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&h=200&fit=crop"
                    alt="Youth mission"
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      Youth Mission Trip Recap
                    </h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      Stories from our week serving in Atlanta
                    </p>
                  </div>
                </div>
              </a>
              <a href="/blog" className="group">
                <div className="bg-card border border-border rounded-lg overflow-hidden hover-scale">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop"
                    alt="Prayer"
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      The Power of Prayer
                    </h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      Answered prayers from our community
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;