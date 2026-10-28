import React from 'react';

export default function AboutUs() {
  return (
        <section id="about" className="about container">
          <div className="about-image"><img alt="SancharSathi Urban Electric Mobility Fleet"
              src="/assets/about-us/urban_mobility_reimagined.jpg" /></div>
          <div className="about-copy">
            <div className="eyebrow green">A cleaner tomorrow</div>
            <h2>Urban mobility,<br /><span>reimagined.</span></h2>
            <p>
              SancharSathi is transforming urban mobility through eco-friendly electric vehicle solutions. We offer
              reliable, affordable, and sustainable EV rentals and fleet services, empowering individuals and businesses
              to drive a cleaner, smarter future.</p><button className="text-link" data-testid="about-learn-more">Learn more <svg xmlns="http://www.w3.org/2000/svg" width="17"
                height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg></button>
          </div>
        </section>
  );
}
