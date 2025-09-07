import React from 'react';
import { Card } from './card';
import { Button } from './button';

const PrayerSection = () => {
  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Let's Pray Together
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              You don't have to carry it alone.
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sometimes life feels overwhelming, and that's when we need each other most. 
              Our prayer warriors are ready to stand with you—through every celebration, 
              every struggle, and every season of uncertainty. Because together, we're stronger.
            </p>
          </div>
          
          <Card className="p-8 shadow-divine bg-card/50 backdrop-blur-sm border border-primary/10">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground text-2xl">🙏</span>
                </div>
                <h4 className="font-semibold text-primary mb-2">Submit Request</h4>
                <p className="text-sm text-muted-foreground">Share your prayer needs with us</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-secondary-foreground text-2xl">👥</span>
                </div>
                <h4 className="font-semibold text-primary mb-2">Community Prayer</h4>
                <p className="text-sm text-muted-foreground">Our prayer team will lift you up</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground text-2xl">✨</span>
                </div>
                <h4 className="font-semibold text-primary mb-2">God's Grace</h4>
                <p className="text-sm text-muted-foreground">Experience His love and peace</p>
              </div>
              
            </div>
            
            <div className="mt-8">
              <Button variant="divine" size="lg">
                Request Prayer
              </Button>
            </div>
          </Card>
          
        </div>
      </div>
    </section>
  );
};

export default PrayerSection;