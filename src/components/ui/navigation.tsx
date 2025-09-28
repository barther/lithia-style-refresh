import React from 'react';
import { Button } from './button';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-smooth">
            {/* Logo: round the image itself; no white box */}
            <img
              src="/lovable-uploads/9ac2d2fb-bacf-4051-9698-7d562f1e1a2f.png"
              alt="Lithia Springs Methodist Church"
              className="h-10 w-10 rounded-lg object-cover block"
              draggable={false}
            />
            <div>
              <h1 className="font-bold text-xl text-foreground">Lithia Springs</h1>
              <p className="text-sm text-muted-foreground">Methodist Church</p>
            </div>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/about" className="text-foreground hover:text-primary transition-smooth">About Us</a>
            <a href="#services" className="text-foreground hover:text-primary transition-smooth">Services</a>
            <a href="/ministries" className="text-foreground hover:text-primary transition-smooth">Ministries</a>
            <a href="#events" className="text-foreground hover:text-primary transition-smooth">Events</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">Contact</a>
          </div>

          <Button variant="hero" size="sm" asChild>
            <a href="/visit">Plan Your Visit</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;