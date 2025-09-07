import React from 'react';
import { Card } from './card';
import { Button } from './button';

const ServiceTimes = () => {
  const services = [
    {
      name: "Sunday School",
      time: "9:45 AM - 10:45 AM",
      description: "Dive deeper into faith through thoughtful discussion and discovery",
      day: "Sunday"
    },
    {
      name: "Kids' Kingdom", 
      time: "9:45 AM - 10:45 AM",
      description: "Where young hearts learn that God's love is an adventure",
      day: "Sunday"
    },
    {
      name: "Sunday Worship",
      time: "11:00 AM - 12:00 PM", 
      description: "Heartfelt worship that blends timeless tradition with fresh inspiration",
      day: "Sunday"
    },
    {
      name: "Midweek Prayer",
      time: "6:00 PM - 7:00 PM",
      description: "A sacred pause in your week to find peace and strength together",
      day: "Wednesday"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Gather with Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every gathering is a chance to connect—with God, with each other, and with your purpose
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-elegant transition-smooth group">
              <div className="mb-4">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-gentle shadow-sm">
                  <img src="/lovable-uploads/9ac2d2fb-bacf-4051-9698-7d562f1e1a2f.png" alt="Lithia Springs Methodist Church" className="w-12 h-12 object-contain" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{service.name}</h3>
                <p className="text-sm text-secondary font-semibold mb-2">{service.day}</p>
                <p className="text-lg font-semibold text-foreground mb-3">{service.time}</p>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            Plan Your Visit
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceTimes;