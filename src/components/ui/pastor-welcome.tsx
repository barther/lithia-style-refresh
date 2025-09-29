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
  "You have a place here. Not because of who you are, but because of what Christ has done. At the cross the ground is level. We are all sinners, all in need of mercy, and all invited into God’s family through Jesus. This church isn’t built on programs or polish. It’s built on the good news that Christ died and rose again so we could live. Our hope, our unity, and our future all rests on Him. If you’re ready for a place where the gospel is at the center and love is lived out in action, welcome home."
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