import React, { useState } from 'react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Clock, MapPin, Phone, Mail, Users, Heart, Coffee, AlertCircle, Baby, Car, Accessibility } from 'lucide-react';

const Visit = () => {
  const [showGpsAlert, setShowGpsAlert] = useState(true);
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
<section className="pt-32 md:pt-36 pb-16 bg-gradient-to-b from-[hsl(var(--secondary)/0.06)] to-background">
  <div className="container mx-auto px-4 text-center max-w-4xl">
    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-in">
      Plan Your Visit
    </h1>
    <p className="text-xl text-foreground/90 leading-relaxed animate-fade-in">
      We're so glad you're considering a visit to our church! Here's everything you 
      need to know to feel at home when you join us.
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
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">Traditional</Badge>
                  </div>
                  <h3 className="font-semibold">Sunday Worship</h3>
                  <p className="text-muted-foreground text-lg">11:00 AM</p>
                  <p className="text-sm text-muted-foreground">
                    Featuring hymns, prayers, offertory, and sermon
                  </p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <h3 className="font-semibold">Sunday School</h3>
                  <p className="text-muted-foreground">9:45 AM</p>
                  <p className="text-sm text-muted-foreground">All ages - before worship service</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Location & Getting Here
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium">Lithia Springs Methodist Church</p>
                  <p className="text-muted-foreground">3711 Temple St<br />Lithia Springs, GA 30122</p>
                </div>
                
                {showGpsAlert && (
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>GPS Note:</strong> Some GPS systems may direct you to the wrong location. 
                      For best results, search for "Lithia Springs Methodist Church" rather than just the address.
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="ml-2 p-0 h-auto text-primary hover:text-primary-dark"
                        onClick={() => setShowGpsAlert(false)}
                      >
                        Dismiss
                      </Button>
                    </AlertDescription>
                  </Alert>
                )}
                
                <div>
                  <p className="font-medium flex items-center gap-2">
                    <Car className="h-4 w-4" />
                    Parking & Transportation
                  </p>
                  <p className="text-muted-foreground mb-2">Free parking available in our main lot. Handicap accessible spaces near the main entrance.</p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Need a ride?</strong> Private transportation can be arranged upon request. 
                    Just call us in advance at <strong>(770) 948-5429</strong>.
                  </p>
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
                      <p className="font-medium">Warm Welcome</p>
                      <p className="text-sm text-muted-foreground">
                        Our greeters will welcome you at the door. Fill out a pew pad so we can connect with you after your visit.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Heart className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Come As You Are</p>
                      <p className="text-sm text-muted-foreground">
                        No formal dress code—most dress business casual, but you're welcome however you're comfortable.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Coffee className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Open Seating</p>
                      <p className="text-sm text-muted-foreground">
                        Choose wherever you feel most comfortable. No assigned seats—just find a spot that feels right.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Families & Accessibility Section */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Baby className="h-5 w-5 text-primary" />
                    For Families
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-medium">Children's Sunday School</p>
                    <p className="text-sm text-muted-foreground">Before worship service - nurturing environment for kids to learn and grow</p>
                  </div>
                  <div>
                    <p className="font-medium">Children's Church</p>
                    <p className="text-sm text-muted-foreground">During main service - age-appropriate activities and lessons</p>
                  </div>
                  <div>
                    <p className="font-medium">Family Fun Nights</p>
                    <p className="text-sm text-muted-foreground">2nd & 4th Wednesdays - fellowship opportunities for families</p>
                  </div>
                  <div>
                    <p className="font-medium">Teen Movie Nights</p>
                    <p className="text-sm text-muted-foreground">Monthly - relaxed setting for teens to connect</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Accessibility className="h-5 w-5 text-primary" />
                    Accessibility
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-medium">Wheelchair Access</p>
                    <p className="text-sm text-muted-foreground">Our entire building is fully wheelchair accessible</p>
                  </div>
                  <div>
                    <p className="font-medium">Special Needs</p>
                    <p className="text-sm text-muted-foreground">Have specific needs? Reach out in advance and we'll accommodate you</p>
                  </div>
                  <div>
                    <p className="font-medium">Assistance Available</p>
                    <p className="text-sm text-muted-foreground">Our team is ready to help make your visit comfortable</p>
                  </div>
                </CardContent>
              </Card>
            </div>
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
                        <SelectItem value="11am">11:00 AM Traditional Service</SelectItem>
                        <SelectItem value="either">I'm flexible</SelectItem>
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
                  
                  <Button type="submit" className="w-full" size="lg">
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