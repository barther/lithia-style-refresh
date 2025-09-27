import React from 'react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero (matches the other pages) */}
      <section className="pt-32 md:pt-36 pb-12 bg-gradient-to-b from-[hsl(var(--secondary)/0.06)] to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground italic">
              “A gossip betrays a confidence, but a trustworthy person keeps a secret.”
              <span className="not-italic block text-sm mt-2">— Proverbs 11:13</span>
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Lithia Springs Methodist Church is committed to safeguarding your privacy. This policy explains how we handle your personal
                information when you interact with our website and ministries.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Information Collection</h2>
              <p className="text-muted-foreground leading-relaxed">
                The only information we collect is what you provide directly through interactions on our website, such as:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                <li>Contact forms and prayer requests</li>
                <li>Email subscriptions for church updates</li>
                <li>Event registrations</li>
                <li>Voluntary feedback and testimonials</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Use of Information</h2>
              <p className="text-muted-foreground leading-relaxed">Your information is used solely to:</p>
              <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                <li>Respond to inquiries you make via our website</li>
                <li>Provide church updates and event notifications</li>
                <li>Facilitate community connections and ministry participation</li>
                <li>Maintain our church directory (with your consent)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Protection</h2>
              <p className="text-muted-foreground leading-relaxed">
                We employ industry-standard security measures to protect your data, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                <li>HTTPS/SSL encryption protocols</li>
                <li>Secure form processing</li>
                <li>Limited access to personal information</li>
                <li>Regular security updates and monitoring</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to external sites such as social media platforms, partner organizations, or resource materials.
                We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies
                before sharing any personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Compliance</h2>
              <p className="text-muted-foreground leading-relaxed">
                We comply with applicable privacy laws and regulations. We do not sell, trade, or otherwise transfer your personal information
                to third parties without your consent, except as necessary to fulfill our church ministry obligations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Any updates to this privacy policy will be posted on this page. We encourage you to review this policy periodically to stay
                informed about how we protect your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For any questions or concerns about this privacy policy or how we handle your information, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-muted/40 rounded-lg">
                <p className="text-foreground font-semibold">Lithia Springs Methodist Church</p>
                <p className="text-muted-foreground">3711 Temple St, PO Box 627</p>
                <p className="text-muted-foreground">Lithia Springs, GA 30122</p>
                <p className="text-muted-foreground mt-2">
                  Email:{' '}
                  <a href="mailto:office@lithiaspringsmethodist.org" className="text-primary hover:underline">
                    office@lithiaspringsmethodist.org
                  </a>
                </p>
                <p className="text-muted-foreground">
                  Phone:{' '}
                  <a href="tel:+17709485429" className="text-primary hover:underline">
                    (770) 948-5429
                  </a>
                </p>
              </div>
            </section>

            <section className="text-center pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">This privacy policy is effective as of January 1, 2025.</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
