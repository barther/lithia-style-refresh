import React from 'react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, Calendar, Star, Phone, Mail } from 'lucide-react';

const Ministries = () => {
  const ministries = [
    {
      title: "Prayer Ministry",
      description: "At Lithia Springs Methodist Church, we believe in the power of prayer. Whether you're facing a challenging situation, celebrating a joyful moment, or seeking guidance, we are here to lift you up in prayer.",
      icon: <Heart className="h-6 w-6" />,
      schedule: "Wednesday Prayer Group: 5:30 PM",
      location: "Conference Room",
      verse: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. - Philippians 4:6",
      details: [
        "Share prayer requests with care and confidentiality",
        "Weekly prayer group meetings",
        "Submit requests by phone, email, or during worship",
        "Experience the power of collective prayer"
      ]
    },
    {
      title: "Small Groups",
      description: "Discover the variety of groups that meet at our church. Whether you are looking for spiritual growth, fellowship, or service opportunities, we have something for everyone.",
      icon: <Users className="h-6 w-6" />,
      schedule: "Various times throughout the week",
      location: "Multiple locations",
      details: [
        "Brotherhood of Methodist Men - 2nd Tuesdays at 7 PM",
        "Sara Bowden Unit (Women's Group) - 3rd Saturdays at 10 AM",
        "Prayer Group - Wednesdays at 5:30 PM",
        "Scouting America - Cub Scouts & Boy Scouts"
      ]
    },
    {
      title: "Volunteer Opportunities",
      description: "Everyone is invited to explore their vocation in Christ by volunteering at Lithia Springs Methodist Church. Whether you have a few hours to spare or can make a regular commitment, your help is needed and appreciated.",
      icon: <Star className="h-6 w-6" />,
      schedule: "Flexible scheduling available",
      location: "Various locations",
      details: [
        "Sunday School Teachers",
        "Event Organizers & Community Service Projects",
        "Worship Service Ushers & Acolytes",
        "Musicians & Transportation Drivers",
        "And any other service you wish to gift!"
      ]
    },
    {
      title: "Sunday School & Youth",
      description: "Nurturing faith and building community for all ages through engaging Bible study, fellowship, and spiritual growth opportunities.",
      icon: <Calendar className="h-6 w-6" />,
      schedule: "Sundays during worship service",
      location: "Children's Building & Fellowship Hall",
      details: [
        "Age-appropriate Bible study for all",
        "Youth fellowship and activities",
        "Family-friendly learning environment",
        "Experienced and caring teachers"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 md:pt-36 pb-16 bg-gradient-to-b from-[hsl(var(--secondary)/0.06)] to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">Our Ministries</h1>
            <p className="text-xl text-foreground/90 leading-relaxed animate-fade-in">
              Discover your place in our church family. From prayer and worship to service and fellowship, 
              we offer meaningful ways to grow in faith and connect with others.
            </p>
          </div>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ministries.map((ministry, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {ministry.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-2xl mb-2">{ministry.title}</CardTitle>
                      <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {ministry.schedule}
                        </span>
                        <span className="hidden sm:inline">•</span>
                        <span>{ministry.location}</span>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        {ministry.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  {ministry.verse && (
                    <blockquote className="border-l-4 border-primary/30 pl-4 mb-6 italic text-muted-foreground bg-muted/30 p-4 rounded-r-lg">
                      "{ministry.verse}"
                    </blockquote>
                  )}
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground mb-3">What We Offer:</h4>
                    <ul className="space-y-2">
                      {ministry.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto text-center p-8">
            <CardHeader>
              <CardTitle className="text-3xl mb-4">Ready to Get Involved?</CardTitle>
              <CardDescription className="text-lg mb-6">
                We'd love to help you find the perfect ministry to match your gifts and passions. 
                Contact us today to learn more about how you can serve and grow with us.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button variant="default" size="lg" className="gap-2">
                  <Phone className="h-4 w-4" />
                  Call: 770.948.5429
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  <Mail className="h-4 w-4" />
                  office@lithiaspringsmethodist.org
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground">
                You can also speak with our pastoral team after any Sunday worship service. 
                We're here to help you discover your calling!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ministries;