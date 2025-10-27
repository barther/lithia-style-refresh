import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Calendar, User, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Finding Hope in Times of Uncertainty",
    excerpt: "In our rapidly changing world, we often find ourselves searching for stability and peace. This week's message reminds us that our foundation remains steadfast in Christ, no matter what storms we face.",
    author: "Pastor Thomas Long",
    date: "October 15, 2025",
    category: "Faith & Life",
    image: "https://images.unsplash.com/photo-1501612780327-45045538702b?w=800&h=400&fit=crop",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Youth Mission Trip Recap: Serving Atlanta",
    excerpt: "Our youth group returned from an incredible week of service in Atlanta, where they worked with local food banks and homeless shelters. Read about the lives changed—both those served and those serving.",
    author: "Sarah Johnson",
    date: "October 8, 2025",
    category: "Mission & Outreach",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&h=400&fit=crop",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Celebrating 100 Years of Ministry",
    excerpt: "As we approach our centennial anniversary, we reflect on the generations of faithful believers who have walked through these doors and the countless lives touched by this church community.",
    author: "Heritage Committee",
    date: "October 1, 2025",
    category: "Church History",
    image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&h=400&fit=crop",
    readTime: "10 min read"
  },
  {
    id: 4,
    title: "New Small Groups Starting This Fall",
    excerpt: "Connection happens in community. We're launching six new small groups this fall, covering topics from young parents to Bible study to creative arts. Find where you belong.",
    author: "Ministries Team",
    date: "September 24, 2025",
    category: "Community",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=400&fit=crop",
    readTime: "4 min read"
  },
  {
    id: 5,
    title: "The Power of Prayer: Stories from Our Community",
    excerpt: "Prayer changes things. In this collection, members of our congregation share answered prayers, miraculous moments, and the ways God has moved in their lives over the past year.",
    author: "Prayer Ministry",
    date: "September 17, 2025",
    category: "Prayer & Worship",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
    readTime: "8 min read"
  },
  {
    id: 6,
    title: "Advent Preparations: What to Expect This Season",
    excerpt: "As we prepare our hearts for the coming Christmas season, discover the special services, events, and traditions that make Advent at Lithia Springs Methodist so meaningful.",
    author: "Worship Team",
    date: "September 10, 2025",
    category: "Seasonal",
    image: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=800&h=400&fit=crop",
    readTime: "6 min read"
  }
];

const categories = ["All Posts", "Faith & Life", "Mission & Outreach", "Community", "Prayer & Worship", "Church History", "Seasonal"];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Stories of Faith
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Reflections, updates, and inspiration from our church community
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge 
                key={category}
                variant={category === "All Posts" ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={post.id}
                className="overflow-hidden hover-scale cursor-pointer group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Featured Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary/90 text-primary-foreground">
                    {post.category}
                  </Badge>
                </div>

                <CardHeader>
                  <a href={post.id === 1 ? "/blog/finding-hope" : "/blog"}>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </a>
                  
                  {/* Meta Information */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground pt-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </span>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {post.readTime}
                    </span>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary" asChild>
                      <a href={post.id === 1 ? "/blog/finding-hope" : "/blog"}>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="warm" size="lg">
              Load More Posts
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Connected
          </h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter to receive the latest stories, updates, and inspirations directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg border border-input bg-background text-foreground flex-1 max-w-md"
            />
            <Button variant="divine" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;