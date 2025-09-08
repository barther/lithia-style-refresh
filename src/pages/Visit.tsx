import React from 'react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Clock, MapPin, Phone, Mail, Users, Heart, Coffee } from 'lucide-react';

const Visit = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-gentle">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Plan Your Visit
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're excited to welcome you to Lithia Springs Methodist Church. 
            Here's everything you need to know for your first visit.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Visitor Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Service Times
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold">Sunday Worship</h3>
                  <p className="text-muted-foreground">9:00 AM & 11:00 AM</p>
                  <p className="text-sm text-muted-foreground">Traditional & Contemporary styles</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <h3 className="font-semibold">Sunday School</h3>
                  <p className="text-muted-foreground">10:00 AM</p>
                  <p className="text-sm text-muted-foreground">All ages welcome</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h3 className="font-semibold">Wednesday Bible Study</h3>
                  <p className="text-muted-foreground">7:00 PM</p>
                  <p className="text-sm text-muted-foreground">Fellowship hall</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Location & Parking
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium">Lithia Springs Methodist Church</p>
                  <p className="text-muted-foreground">3711 Temple St<br />PO Box 627<br />Lithia Springs, GA 30122</p>
                </div>
                <div>
                  <p className="font-medium">Parking</p>
                  <p className="text-muted-foreground">Free parking available in our main lot and overflow area. Handicap accessible spaces near the main entrance.</p>
                </div>
                <Button variant="outline" className="w-full">
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  What to Expect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div className="flex gap-3">
                    <Users className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Friendly Welcome</p>
                      <p className="text-sm text-muted-foreground">Our greeters will welcome you at the door and help you find your way.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Coffee className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Coffee & Fellowship</p>
                      <p className="text-sm text-muted-foreground">Join us for coffee and light refreshments before and after service.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Heart className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Come As You Are</p>
                      <p className="text-sm text-muted-foreground">Dress comfortably. You'll see everything from casual to business attire.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Let Us Know You're Coming</CardTitle>
                <CardDescription>
                  Fill out this form and we'll have someone ready to welcome you personally on your first visit.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (optional)</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="visitDate">Preferred Visit Date</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a Sunday" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="this-sunday">This Sunday</SelectItem>
                        <SelectItem value="next-sunday">Next Sunday</SelectItem>
                        <SelectItem value="flexible">I'm flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="service">Preferred Service</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="9am">9:00 AM (Traditional)</SelectItem>
                        <SelectItem value="11am">11:00 AM (Contemporary)</SelectItem>
                        <SelectItem value="either">Either service</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="questions">Questions or Special Requests</Label>
                    <Textarea 
                      id="questions" 
                      placeholder="Any questions about childcare, accessibility, or anything else we can help with?"
                      rows={4}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" variant="divine" size="lg">
                    Submit Visit Request
                  </Button>
                </form>

                <div className="pt-6 border-t">
                  <h3 className="font-semibold mb-4">Prefer to Call?</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span>(770) 948-5429</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <span>office@lithiaspringsmethodist.org</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Visit;