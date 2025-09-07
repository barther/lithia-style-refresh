import React from 'react';
import { Card } from './card';
import { Button } from './button';

const ServiceTimes = () => {
  const services = [
    {
      name: "Adult Sunday School",
      time: "9:45 AM - 10:45 AM",
      description: "Biblical study and fellowship for adults",
      day: "Sunday"
    },
    {
      name: "Children's Sunday School", 
      time: "9:45 AM - 10:45 AM",
      description: "Age-appropriate Bible lessons for children",
      day: "Sunday"
    },
    {
      name: "Worship Service",
      time: "11:00 AM - 12:00 PM", 
      description: "Traditional Methodist worship with contemporary elements",
      day: "Sunday"
    },
    {
      name: "Prayer Group",
      time: "5:00 PM - 7:00 PM",
      description: "Community prayer and spiritual support",
      day: "Wednesday"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Join Us for Worship
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience God's love through meaningful worship, fellowship, and spiritual growth
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-elegant transition-smooth group">
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-gentle">
                  <span className="text-primary-foreground font-bold text-xl">✞</span>
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