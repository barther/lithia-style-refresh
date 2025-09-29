import React from 'react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const Events = () => {
  const featuredEvents = [
    {
      title: "Fall Festival",
      date: "Saturday, October 4, 2025",
      time: "11:00 AM - 4:00 PM",
      location: "Church Grounds",
      description: "Bring the whole family for a day full of fun, food, games, local vendors, and community resources. A celebration for all of Douglas County!",
      featured: true
    },
    {
      title: "FCA Fields of Faith",
      date: "Sunday, October 5, 2025",
      time: "5:00 PM",
      location: "Chapel Hill High School Football Field, 4899 Chapel Hill Road",
      description: "Join us for an inspiring evening with the Fellowship of Christian Athletes at Fields of Faith!",
      featured: true
    },
    {
      title: "Sara Bowden Methodist Women",
      date: "Saturday, September 20, 2025",
      time: "10:00 AM - 12:00 PM",
      location: "Fellowship Hall",
      description: "All women are invited and encouraged to attend. Refreshments will be served!",
      featured: false
    }
  ];

  const recurringEvents = [
    {
      title: "Sunday Worship Service",
      schedule: "Every Sunday",
      time: "11:00 AM - 12:00 PM",
      location: "Sanctuary",
      description: "Join us for traditional worship with inspiring music and meaningful messages."
    },
    {
      title: "Adult Sunday School",
      schedule: "Every Sunday",
      time: "9:45 AM - 10:45 AM",
      location: "Various Classrooms",
      description: "Bible study and fellowship for adults of all ages."
    },
    {
      title: "Children's Sunday School",
      schedule: "Every Sunday",
      time: "9:45 AM - 10:45 AM",
      location: "Children's Wing",
      description: "Age-appropriate lessons and activities for children."
    },
    {
      title: "Prayer Group",
      schedule: "Every Wednesday",
      time: "5:00 PM - 7:00 PM",
      location: "Prayer Room",
      description: "Gather with others to pray for our church, community, and world."
    },
    {
      title: "Chancel Choir",
      schedule: "Every Wednesday",
      time: "7:45 PM - 8:45 PM",
      location: "Choir Room",
      description: "Join our choir and share your musical gifts in worship."
    },
    {
      title: "Handbell Choir",
      schedule: "Every Wednesday",
      time: "6:45 PM - 7:45 PM",
      location: "Choir Room",
      description: "Learn to play handbells and contribute to our worship services."
    },
    {
      title: "Not My Jesus Bible Study",
      schedule: "Mondays & Tuesdays",
      time: "Mon 7:00 PM, Tue 10:00 AM",
      location: "Fellowship Hall",
      description: "A thought-provoking study exploring the true nature of Jesus."
    },
    {
      title: "Boy Scouts Troop 62",
      schedule: "Every Monday",
      time: "7:00 PM - 8:30 PM",
      location: "Fellowship Hall",
      description: "Building character and leadership skills in young men."
    },
    {
      title: "Brotherhood of Methodist Men",
      schedule: "2nd Tuesday of Month",
      time: "7:00 PM - 9:00 PM",
      location: "Fellowship Hall",
      description: "Men's fellowship, service projects, and spiritual growth."
    },
    {
      title: "Family Fun Night",
      schedule: "Select Wednesdays",
      time: "6:00 PM - 8:30 PM",
      location: "Fellowship Hall",
      description: "Games, activities, and fellowship for the whole family. All ages welcome!"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 bg-gradient-subtle">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Calendar and Events
          </h1>
          <p className="text-xl text-muted-foreground">
            Stay up-to-date with the latest events at Lithia Springs Methodist Church! 
            We host a variety of events throughout the year, including worship services, 
            fellowship gatherings, community service projects, and special holiday celebrations.
          </p>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Upcoming Special Events</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-smooth">
                <CardHeader>
                  <CardTitle className="text-2xl">{event.title}</CardTitle>
                  <CardDescription className="space-y-2 text-base">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Events */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Regular Events & Activities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recurringEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-smooth">
                <CardHeader>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <CardDescription className="space-y-1">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium">{event.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="bg-gradient-subtle rounded-lg p-8 md:p-12">
            <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Join Us for an Event
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Everyone is welcome at Lithia Springs Methodist Church. Whether you're looking 
              for worship, fellowship, service opportunities, or just want to connect with others, 
              we'd love to have you join us!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" asChild>
                <a href="/visit">Plan Your Visit</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;