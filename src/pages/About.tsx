import React from 'react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
<section className="pt-20 pb-16 bg-gradient-elegant">
  <div className="container mx-auto px-4">
    <div className="text-center max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
        About Us
      </h1>
      <p className="text-xl text-foreground leading-relaxed animate-fade-in">
        Welcome to Lithia Springs Methodist Church! We are a proud part of the Global Methodist Denomination,
        rooted in the rich heritage of the Methodist tradition and dedicated to spreading the love and grace of Jesus Christ.
      </p>
    </div>
  </div>
</section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border-border shadow-elegant">
            <CardContent className="p-8">
              <div className="text-center">
                <Badge variant="secondary" className="mb-6 text-lg px-6 py-2">Our Mission</Badge>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  To make disciples of Jesus Christ who worship passionately, love extravagantly, and witness boldly.
                </h2>
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🙏</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Worship Passionately</h3>
                    <p className="text-muted-foreground">
                      We desire to surrender to and be fully devoted to one God—the Father, the Son, and the Holy Spirit.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">❤️</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Love Extravagantly</h3>
                    <p className="text-muted-foreground">
                      We demonstrate to the world the extravagant love of God in the person of Jesus Christ.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">📢</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Witness Boldly</h3>
                    <p className="text-muted-foreground">
                      Our witness is bold, compelling and fearless, sharing the lifesaving message of Christ.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Our Heritage</Badge>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                A Rich History Since 1845
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">The Beginning</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our history traces back to 1845, when Israel Causey established a non-denominational church 
                  near the intersection of Maxham Road and Old Alabama Road. This early congregation became 
                  a spiritual center for the surrounding community.
                </p>
                
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Growth & Resilience</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  After Causey's death in 1880, a dedicated group laid the foundation for Salt Springs Methodist 
                  Episcopal Church, South, in 1885. Despite a devastating cyclone in 1887 that destroyed the 
                  original sanctuary, the congregation rebuilt with unwavering faith.
                </p>
              </div>
              
              <div>
                <Card className="bg-card shadow-elegant">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold mb-4 text-foreground">Key Milestones</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span><strong>1845:</strong> Israel Causey establishes first church</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span><strong>1885:</strong> Salt Springs Methodist Episcopal Church founded</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span><strong>1887:</strong> Congregation rebuilds after cyclone</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span><strong>1979:</strong> Current sanctuary constructed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                The majestic 18-foot cross that serves as the focal point of our altar was crafted from timber 
                salvaged from the second sanctuary, symbolizing the continuity of faith and tradition that 
                has defined our church's history for over 150 years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beliefs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Our Foundation</Badge>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                What We Believe
              </h2>
              <p className="text-lg text-muted-foreground">
                As members of the Global Methodist Denomination, we uphold core beliefs rooted in Scripture and Wesleyan tradition.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Scriptural Authority</h3>
                  <p className="text-muted-foreground">
                    We affirm the authority of Holy Scripture as the primary rule for faith, morals, and service.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Grace</h3>
                  <p className="text-muted-foreground">
                    We emphasize God's grace through the Wesleyan Way of Salvation: prevenient, justifying, and sanctifying grace.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Faith and Works</h3>
                  <p className="text-muted-foreground">
                    Faith in Jesus Christ leads to a transformed life marked by good works and social holiness.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Sacraments</h3>
                  <p className="text-muted-foreground">
                    Baptism and Holy Communion are affirmed as means of grace instituted by Christ.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Our Community</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-8">
              A Cornerstone of Lithia Springs
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              For over 150 years, we've been committed to serving our neighbors and fostering a welcoming 
              and inclusive environment where everyone can grow in faith and love. Our church offers a 
              variety of programs and ministries for all ages.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg shadow-elegant">
                <h3 className="text-lg font-semibold mb-2 text-foreground">Worship & Fellowship</h3>
                <p className="text-muted-foreground">Sunday worship services and fellowship groups for spiritual growth</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-elegant">
                <h3 className="text-lg font-semibold mb-2 text-foreground">Education & Growth</h3>
                <p className="text-muted-foreground">Sunday School and prayer groups for all ages and stages of faith</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-elegant">
                <h3 className="text-lg font-semibold mb-2 text-foreground">Community Service</h3>
                <p className="text-muted-foreground">Outreach programs and missions that make a positive local impact</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connection Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Connected to Something Greater
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Being part of the North Georgia Conference connects us with other Methodist churches in our region, 
              allowing us to participate in broader initiatives, missions, and events that make a positive 
              impact both locally and globally.
            </p>
            
            <Separator className="my-8" />
            
            <div className="bg-gradient-subtle p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Join Our Journey of Faith
              </h3>
              <p className="text-muted-foreground mb-6">
                Whether you are looking for a church home, seeking spiritual growth, or wanting to get 
                involved in community service, there is a place for you at Lithia Springs Methodist Church.
              </p>
              <p className="text-sm text-muted-foreground">
                Our connection to John Wesley's teachings on grace, faith, and social justice continues 
                to inspire and guide us in personal and social holiness.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;