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
              "There's something beautiful about a community that chooses to walk together in faith. 
              Here at Lithia Springs Methodist, we don't just attend church—we become family. 
              Whether you're seeking answers, looking for peace, or simply curious about God's love, 
              I invite you to discover what it means to truly belong. Your story matters, and 
              we'd be honored to be part of your journey."
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