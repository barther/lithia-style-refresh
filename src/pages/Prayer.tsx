import React, { useState } from 'react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Heart, Phone, Mail, Church } from 'lucide-react';

const Prayer = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    request: '',
    isPublic: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - in production, this would connect to a database
    setTimeout(() => {
      toast({
        title: "Prayer Request Received",
        description: "Thank you. Our prayer team will lift you up in prayer.",
        duration: 5000,
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        request: '',
        isPublic: false
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 md:pt-36 pb-16 bg-gradient-to-b from-[hsl(var(--secondary)/0.06)] to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Heart className="h-16 w-16 text-primary mx-auto mb-6 animate-fade-in" />
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">Prayer Requests</h1>
            <blockquote className="text-xl md:text-2xl italic text-foreground/80 mb-4 animate-fade-in">
              "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God."
            </blockquote>
            <p className="text-lg text-muted-foreground animate-fade-in">— Philippians 4:6</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-foreground/90 leading-relaxed mb-8">
              At Lithia Springs Methodist Church, we believe in the power of prayer. Whether you're facing a challenging situation, 
              celebrating a joyful moment, or seeking guidance, we are here to lift you up in prayer.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Please share your prayer request with us using the form below. Our pastoral team and prayer ministry are honored to 
              pray for you, and all requests are handled with care and confidentiality.
            </p>
          </div>
        </div>
      </section>

      {/* Prayer Request Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto shadow-lg">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl mb-3">How Can We Pray for You?</CardTitle>
              <CardDescription className="text-base">
                Share your prayer request and we will lift you up in prayer
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone (Optional)</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="request">Prayer Request</Label>
                  <Textarea
                    id="request"
                    name="request"
                    value={formData.request}
                    onChange={handleChange}
                    placeholder="Please share your prayer request here..."
                    required
                    rows={6}
                    className="w-full resize-none"
                  />
                  <p className="text-sm text-muted-foreground">
                    All prayer requests are kept confidential within our prayer ministry team.
                  </p>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Prayer Request'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Additional Contact Methods */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Other Ways to Submit Prayer Requests</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center p-6 hover:shadow-lg transition-all">
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Speak directly with our church office
                </p>
                <a href="tel:770.948.5429" className="text-primary font-medium hover:underline">
                  770.948.5429
                </a>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-all">
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Send your prayer request via email
                </p>
                <a href="mailto:office@lithiaspringsmethodist.org" className="text-primary font-medium hover:underline break-all">
                  office@lithiaspringsmethodist.org
                </a>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-all">
                <Church className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">In Person</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Fill out a prayer card during Sunday worship
                </p>
                <p className="text-primary font-medium">
                  Place in offering plate
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Prayer Ministry Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto bg-gradient-to-br from-primary/5 to-secondary/5 border-none shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-3">Join Our Prayer Ministry</CardTitle>
              <CardDescription className="text-base">
                Interested in becoming part of our prayer team?
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                Our prayer group meets every Wednesday at 5:30 PM in the Conference Room. 
                Everyone is welcome to join us as we pray together for our church, community, and world.
              </p>
              <div className="pt-4">
                <Button variant="default" size="lg" asChild>
                  <a href="/ministries">Learn More About Our Ministries</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Prayer;
