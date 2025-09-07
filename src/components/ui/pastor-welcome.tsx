import React from 'react';
import { Card } from './card';
import pastorPortrait from '@/assets/pastor-portrait.jpg';

const PastorWelcome = () => {
  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Pastor Image */}
          <div className="relative">
            <div className="relative z-10 animate-gentle-fade-in">
              <img 
                src={pastorPortrait} 
                alt="Reverend Thomas R. Long"
                className="w-full max-w-md mx-auto rounded-lg shadow-divine"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-primary rounded-lg opacity-20"></div>
          </div>
          
          {/* Welcome Content */}
          <div className="animate-gentle-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              A word from the pastor
            </h2>
            
            <blockquote className="text-lg text-foreground/80 leading-relaxed mb-8 italic">
              "Welcome to Lithia Springs Methodist Church. We're thrilled to have you here, 
              whether you're visiting for the first time or have been with us for years. 
              My hope is that you find inspiration, encouragement, and a sense of belonging 
              as you explore our site and join us in worship and service. God's love is at 
              the heart of everything we do, and I look forward to sharing it with you."
            </blockquote>
            
            <div className="flex items-center gap-4">
              <div className="h-px bg-primary flex-grow"></div>
              <p className="text-primary font-semibold">
                Reverend Thomas R. Long
              </p>
              <div className="h-px bg-primary flex-grow"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default PastorWelcome;