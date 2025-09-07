import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Church Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-lg">✞</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">Lithia Springs</h3>
                <p className="text-sm text-primary-foreground/80">Methodist Church</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed">
              Connecting the community to Christ through worship, fellowship, and service.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-primary-foreground/70 hover:text-secondary transition-smooth">About Us</a></li>
              <li><a href="#services" className="text-primary-foreground/70 hover:text-secondary transition-smooth">Service Times</a></li>
              <li><a href="#ministries" className="text-primary-foreground/70 hover:text-secondary transition-smooth">Ministries</a></li>
              <li><a href="#events" className="text-primary-foreground/70 hover:text-secondary transition-smooth">Events</a></li>
            </ul>
          </div>
          
          {/* Service Times */}
          <div>
            <h4 className="font-bold text-lg mb-4">Service Times</h4>
            <div className="space-y-2 text-primary-foreground/70">
              <p><strong>Sunday School:</strong> 9:45 AM</p>
              <p><strong>Worship Service:</strong> 11:00 AM</p>
              <p><strong>Prayer Group:</strong> Wed 5:00 PM</p>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-2 text-primary-foreground/70">
              <p>6825 Lee Road</p>
              <p>Lithia Springs, GA 30122</p>
              <p className="mt-4">
                <a href="tel:+1234567890" className="hover:text-secondary transition-smooth">
                  (770) 944-1049
                </a>
              </p>
              <p>
                <a href="mailto:info@lithiaspringsmethodist.org" className="hover:text-secondary transition-smooth">
                  info@lithiaspringsmethodist.org
                </a>
              </p>
            </div>
          </div>
          
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Lithia Springs Methodist Church. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;