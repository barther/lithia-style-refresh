import React from 'react';
import { Card } from './card';
import { Button } from './button';

const MinistriesOverview = () => {
  const ministries = [
    {
      name: "Chancel Choir",
      description: "Share your musical gifts in traditional worship",
      time: "Wednesdays 7:45 PM - 8:45 PM",
      icon: "🎵"
    },
    {
      name: "Handbell Choir", 
      description: "Create beautiful music with our handbell ensemble",
      time: "Wednesdays 6:45 PM - 7:45 PM",
      icon: "🔔"
    },
    {
      name: "Boy Scouts Troop 62",
      description: "Character development and outdoor adventures for boys",
      time: "Mondays 7:00 PM - 8:30 PM",
      icon: "⚜️"
    },
    {
      name: "Methodist Women's Group",
      description: "Fellowship and service opportunities for women",
      time: "Third Saturday 10:00 AM - 12:00 PM",
      icon: "👥"
    },
    {
      name: "Bible Study Groups",
      description: "Deepen your faith through Scripture study",
      time: "Multiple times throughout the week",
      icon: "📖"
    },
    {
      name: "Brotherhood of Methodist Men",
      description: "Men's fellowship, service, and spiritual growth",
      time: "Second Tuesday 7:00 PM - 9:00 PM", 
      icon: "🤝"
    }
  ];

  return (
    <section id="ministries" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Ministries
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover ways to grow in faith, serve others, and build meaningful relationships 
            within our church community
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {ministries.map((ministry, index) => (
            <Card key={index} className="p-6 hover:shadow-elegant transition-smooth group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-gentle">
                  <span className="text-xl">{ministry.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-primary">{ministry.name}</h3>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {ministry.description}
              </p>
              
              <p className="text-sm text-secondary font-medium">
                {ministry.time}
              </p>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="warm" size="lg">
            Explore All Ministries
          </Button>
        </div>
        
      </div>
    </section>
  );
};

export default MinistriesOverview;