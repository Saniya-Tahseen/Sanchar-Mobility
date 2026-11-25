import React from 'react';

export default function WhyUs() {
  return (
    <section id="why" className="why-section-redesign">
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', boxSizing: 'border-box' }}>
        <div className="why-heading-centered">
          <h2>Why Choose Sanchari</h2>
          <p>
            Experience the perfect blend of convenience, sustainability, and affordability with our electric scooter
            sharing service.
          </p>
        </div>
        <div className="why-grid-redesign">

          {/* Card 1: All-in-One App */}
          <article className="why-card-item">
            <div className="why-card-icon icon-bg-blue">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none"
                stroke="#0284c7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="14" height="20" x="5" y="2" rx="3" ry="3"></rect>
                <path d="M11 18h2"></path>
              </svg>
            </div>
            <h3>All-in-One App</h3>
            <p>
              Book rides, swap batteries, find chargers, and access support. Everything you need in one easy-to-use
              Bijliride app.
            </p>
          </article>

          {/* Card 2: Roadside Assistance */}
          <article className="why-card-item">
            <div className="why-card-icon icon-bg-amber">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path d="M7 20L10 4H14L17 20H7Z" fill="#f59e0b"></path>
                <line x1="12" y1="6" x2="12" y2="9" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"></line>
                <line x1="12" y1="13" x2="12" y2="18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round">
                </line>
              </svg>
            </div>
            <div className="why-card-header-block">
              <h3>Roadside Assistance</h3>
              <div className="why-timing-badge" aria-label="Available Mon–Sat, 10 AM – 7 PM">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>Mon–Sat: 10 AM – 7 PM</span>
              </div>
            </div>
            <p>
              We've got your back on every ride. From on-road breakdown help to quick fixes, our support team is ready to assist you.
            </p>
          </article>
          {/* Card 3: Eco-Friendly Commute */}
          <article className="why-card-item">
            <div className="why-card-icon icon-bg-green">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="#10b981">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" fill="none" stroke="#ffffff"
                  strokeWidth="2" strokeLinecap="round"></path>
              </svg>
            </div>
            <h3>Eco-Friendly Commute</h3>
            <p>
              Say goodbye to pollution. Bijliride scooters run on clean energy, reducing your carbon footprint and
              promoting sustainable city life.
            </p>
          </article>

        </div>
      </div>
    </section>
  );
}
