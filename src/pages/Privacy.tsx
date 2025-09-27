import React from 'react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* pad for sticky/fixed nav */}
      <main className="container mx-auto px-4 pt-28 md:pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>

            {/* keep custom look, but opt out of prose rules */}
            <blockquote className="not-prose text-lg text-muted-foreground italic border-l-4 border-primary pl-6 mx-auto max-w-3xl">
              A gossip betrays a confidence, but a trustworthy person keeps a secret.
              <footer className="text-sm mt-2 not-italic">— Proverbs 11:13</footer>
            </blockquote>
          </header>

          {/* let typography control headings/lists, avoid fighting it */}
          <div className="prose prose-lg prose-headings:scroll-mt-28 max-w-none prose-li:my-1 prose-p:text-muted-foreground">
            <section>
              <h2>Introduction</h2>
              <p>
                Lithia Springs Methodist Church is committed to safeguarding your privacy. This policy explains how we handle your personal information when you interact with our website and ministries.
              </p>
            </section>

            <section>
              <h2>Information Collection</h2>
              <p>The only information we collect is what you provide directly through interactions on our website, such as:</p>
              <ul>
                <li>Contact forms and prayer requests</li>
                <li>Email subscriptions for church updates</li>
                <li>Event registrations</li>
                <li>Voluntary feedback and testimonials</li>
              </ul>
            </section>

            <section>
              <h2>Use of Information</h2>
              <p>Your information is used solely to:</p>
              <ul>
                <li>Respond to inquiries you make via our website</li>
                <li>Provide church updates and event notifications</li>
                <li>Facilitate community connections and ministry participation</li>
                <li>Maintain our church directory (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2>Data Protection</h2>
              <p>We employ industry-standard security measures to protect your data, including:</p>
              <ul>
                <li>HTTPS/SSL encryption protocols</li>
                <li>Secure form processing</li>
                <li>Limited access to personal information</li>
                <li>Regular security updates and monitoring</li>
              </ul>
            </section>

            <section>
              <h2>Third-Party Links</h2>
              <p>
                Our website may contain links to external sites such as social media platforms, partner organizations, or resource materials. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before sharing any personal information.
              </p>
            </section>

            <section>
              <h2>Compliance</h2>
              <p>
                We comply with applicable privacy laws and regulations. We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as necessary to fulfill our church ministry obligations.
              </p>
            </section>

            <section>
              <h2>Changes to Privacy Policy</h2>
              <p>
                Any updates to this privacy policy will be posted on this page. We encourage you to review this policy periodically to stay informed about how we protect your information.
              </p>
            </section>

            <section>
              <h2>Contact Information</h2>
              <p>For any questions or concerns about this privacy policy or how we handle your information, please contact us at:</p>
              <div className="mt-4 p-4 rounded-lg border">
                <p className="font-semibold">Lithia Springs Methodist Church</p>
                <p>3711 Temple St, PO Box 627</p>
                <p>Lithia Springs, GA 30122</p>
                <p className="mt-2">
                  Email: <a href="mailto:office@lithiaspringsmethodist.org">office@lithiaspringsmethodist.org</a>
                </p>
                <p>
                  Phone: <a href="tel:+17709485429">(770) 948-5429</a>
                </p>
              </div>
            </section>

            <p className="text-center text-sm text-muted-foreground mt-8">
              This privacy policy is effective as of January 1, 2025.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
