import React from 'react';
import { Button } from './button';
import churchHero from '@/assets/church-hero.jpg';
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${churchHero})`
    }}>
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-gentle-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
          Where faith comes alive
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Join us as we journey together in faith, hope, and love. At Lithia Springs Methodist, 
          we believe that every person has a story worth telling and a purpose worth discovering. 
          Come as you are—you belong here.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="divine" size="xl">
            Plan Your Visit
          </Button>
          <Button variant="warm" size="xl">
            Watch Online
          </Button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-gentle-float">
          
        </div>
      </div>
    </section>;
};
export default HeroSection;