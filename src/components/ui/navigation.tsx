import React, { useState } from 'react';
import { Button } from './button';
import { Sheet, SheetContent, SheetTrigger } from './sheet';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/about" className="text-foreground hover:text-primary transition-smooth">About Us</a>
            <a href="#services" className="text-foreground hover:text-primary transition-smooth">Services</a>
            <a href="/ministries" className="text-foreground hover:text-primary transition-smooth">Ministries</a>
            <a href="/church-life" className="text-foreground hover:text-primary transition-smooth">Church Life</a>
            <a href="/prayer" className="text-foreground hover:text-primary transition-smooth">Prayer</a>
            <a href="/events" className="text-foreground hover:text-primary transition-smooth">Events</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">Contact</a>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="sm" asChild>
              <a href="/visit">Plan Your Visit</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-6 mt-8">
                <a 
                  href="/about" 
                  className="text-lg font-medium text-foreground hover:text-primary transition-smooth py-2"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </a>
                <a 
                  href="#services" 
                  className="text-lg font-medium text-foreground hover:text-primary transition-smooth py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </a>
                <a 
                  href="/ministries" 
                  className="text-lg font-medium text-foreground hover:text-primary transition-smooth py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Ministries
                </a>
                <a 
                  href="/church-life" 
                  className="text-lg font-medium text-foreground hover:text-primary transition-smooth py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Church Life
                </a>
                <a 
                  href="/prayer" 
                  className="text-lg font-medium text-foreground hover:text-primary transition-smooth py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Prayer
                </a>
                <a 
                  href="/events" 
                  className="text-lg font-medium text-foreground hover:text-primary transition-smooth py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Events
                </a>
                <a 
                  href="#contact" 
                  className="text-lg font-medium text-foreground hover:text-primary transition-smooth py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </a>
                <div className="pt-4 border-t border-border">
                  <Button variant="hero" size="lg" asChild className="w-full">
                    <a href="/visit" onClick={() => setIsOpen(false)}>Plan Your Visit</a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;