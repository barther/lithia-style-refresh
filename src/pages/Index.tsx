import React from 'react';
import Navigation from '@/components/ui/navigation';
import HeroSection from '@/components/ui/hero-section';
import PastorWelcome from '@/components/ui/pastor-welcome';
import ServiceTimes from '@/components/ui/service-times';
import PrayerSection from '@/components/ui/prayer-section';
import MinistriesOverview from '@/components/ui/ministries-overview';
import Footer from '@/components/ui/footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <PastorWelcome />
      <ServiceTimes />
      <PrayerSection />
      <MinistriesOverview />
      <Footer />
    </div>
  );
};

export default Index;
