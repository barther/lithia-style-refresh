import React from 'react';
import { Card } from './card';
import { Button } from './button';

const MinistriesOverview = () => {
  const ministries = [
    {
      name: "Voices of Faith Choir",
      description: "Where hearts harmonize and spirits soar through sacred song",
      time: "Wednesdays 7:45 PM - 8:45 PM",
      icon: "🎵"
    },
    {
      name: "Celebration Bells", 
      description: "Creating moments of pure joy through the beauty of handbells",
      time: "Wednesdays 6:45 PM - 7:45 PM",
      icon: "🔔"
    },
    {
      name: "Adventure Scouts",
      description: "Building character, courage, and lifelong friendships through faith-filled adventures",
      time: "Mondays 7:00 PM - 8:30 PM",
      icon: "⚜️"
    },
    {
      name: "Sisters in Spirit",
      description: "Where women connect, grow, and make a difference together",
      time: "Third Saturday 10:00 AM - 12:00 PM",
      icon: "✨"
    },
    {
      name: "Life Groups",
      description: "Small circles, big impact—where Scripture meets real life",
      time: "Various times throughout the week",
      icon: "📖"
    },
    {
      name: "Band of Brothers",
      description: "Brotherhood forged in faith, strengthened through service",
      time: "Second Tuesday 7:00 PM - 9:00 PM", 
      icon: "🤝"
    }
  ];

  return (
    <section id="ministries" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Find Your Place
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every gift matters, every voice counts, and every person has a place to serve. 
            Discover where your passions meet God's purpose in our vibrant church family
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