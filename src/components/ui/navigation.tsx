import React from 'react';
import { Button } from './button';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">✞</span>
            </div>
            <div>
              <h1 className="font-bold text-xl text-foreground">Lithia Springs</h1>
              <p className="text-sm text-muted-foreground">Methodist Church</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-foreground hover:text-primary transition-smooth">About Us</a>
            <a href="#services" className="text-foreground hover:text-primary transition-smooth">Services</a>
            <a href="#ministries" className="text-foreground hover:text-primary transition-smooth">Ministries</a>
            <a href="#events" className="text-foreground hover:text-primary transition-smooth">Events</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">Contact</a>
          </div>

          <Button variant="hero" size="sm">
            Plan Your Visit
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;