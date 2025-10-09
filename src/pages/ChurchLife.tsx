import React from 'react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Camera, Heart, Users, TrendingUp, Calendar, MapPin, ExternalLink } from 'lucide-react';

const ChurchLife = () => {
  const highlights = [
    {
      title: "Fall Festival 2024",
      date: "October 15, 2024",
      image: "https://images.unsplash.com/photo-1509422050398-a973e3ea8c62?auto=format&fit=crop&w=800&q=80",
      description: "Over 200 community members joined us for games, food, and fellowship. What a beautiful day celebrating God's blessings together!",
      albumLink: "https://facebook.com",
      category: "Fellowship"
    },
    {
      title: "Youth Mission Trip",
      date: "September 2024",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80",
      description: "12 teens served in Atlanta, making a real difference through hands-on service. Hearts transformed through service to others.",
      albumLink: "https://facebook.com",
      category: "Outreach"
    },
    {
      title: "Easter Celebration",
      date: "March 31, 2024",
      image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=800&q=80",
      description: "200+ gathered to celebrate the resurrection with worship, joy, and hope. He is risen indeed!",
      albumLink: "https://facebook.com",
      category: "Worship"
    }
  ];

  const recentActivities = [
    {
      icon: Heart,
      title: "Food Pantry Ministry",
      description: "Served 50 families in September with groceries and essentials",
      date: "September 2024"
    },
    {
      icon: Users,
      title: "New Members Welcome",
      description: "7 new families joined our church family this quarter",
      date: "Q3 2024"
    },
    {
      icon: TrendingUp,
      title: "Sunday School Growth",
      description: "Children's ministry expanded with 25 active participants",
      date: "September 2024"
    },
    {
      icon: Calendar,
      title: "Community Prayer Nights",
      description: "Monthly gatherings bringing neighbors together in faith",
      date: "Ongoing"
    }
  ];

  const impactStats = [
    { label: "Families Served", value: "150+", period: "This Year" },
    { label: "Mission Volunteers", value: "45", period: "Active" },
    { label: "Community Events", value: "12", period: "2024" },
    { label: "New Members", value: "18", period: "This Year" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 bg-gradient-hero">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="mb-4 border-primary-foreground/20 text-primary-foreground">
            Living Faith in Action
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Church Life & Impact
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            See how God is moving in our community through worship, service, and fellowship. 
            This is faith that makes a difference.
          </p>
        </div>
      </section>

      {/* Recent Highlights */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Recent Highlights
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Moments that capture the heart of our community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="overflow-hidden hover-scale group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={highlight.image} 
                    alt={highlight.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <Badge className="absolute top-4 right-4 bg-background/90 text-foreground">
                    {highlight.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{highlight.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {highlight.date}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{highlight.description}</p>
                  <Button variant="outline" size="sm" asChild className="w-full group/btn">
                    <a href={highlight.albumLink} target="_blank" rel="noopener noreferrer">
                      <Camera className="h-4 w-4 mr-2" />
                      View Photo Album
                      <ExternalLink className="h-3 w-3 ml-2 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ministry Impact Stats */}
      <section className="py-16 px-4 bg-accent/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Impact
            </h2>
            <p className="text-lg text-muted-foreground">
              Making a difference, one life at a time
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.period}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Activities Timeline */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What's Happening
            </h2>
            <p className="text-lg text-muted-foreground">
              Recent ministry updates and community activities
            </p>
          </div>

          <div className="space-y-6">
            {recentActivities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <Card key={index} className="hover-scale">
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="rounded-full bg-primary/10 p-3 flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="font-semibold text-lg text-foreground">{activity.title}</h3>
                        <Badge variant="secondary" className="flex-shrink-0">{activity.date}</Badge>
                      </div>
                      <p className="text-muted-foreground">{activity.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-hero">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Be Part of the Story
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Every Sunday, new stories are being written. Come write yours with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="divine" size="lg" asChild>
              <a href="/visit">Plan Your Visit</a>
            </Button>
            <Button variant="warm" size="lg" asChild>
              <a href="/events">View Upcoming Events</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChurchLife;
