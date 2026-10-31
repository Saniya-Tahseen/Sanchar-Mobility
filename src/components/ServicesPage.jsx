import React, { useEffect } from 'react';
import Services from './Services';
import Business from './Business';
import Contact from './Contact';

export default function ServicesPage({ onNavigate }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleExploreServices = () => {
    const el = document.getElementById('advantage') || document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTalkToTeam = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (onNavigate) {
      onNavigate('home', 'contact');
    }
  };

  return (
    <div className="services-page-wrap" data-testid="services-page">
      {/* 1. Hero Banner: Powering the Future of Mobility */}
      <section className="services-hero-banner" data-testid="services-hero-section">
        <div className="services-hero-container">
          <div className="services-hero-grid">
            {/* Left Content Column */}
            <div className="services-hero-content">
              <h1 className="services-hero-title">
                Powering the <br />
                <span className="services-hero-cyan">Future of</span>{' '}
                <span className="services-hero-green">Mobility</span>
              </h1>
              <p className="services-hero-description">
                Comprehensive EV solutions designed for modern India. From rentals to enterprise fleet management, we’re revolutionizing electric mobility with cutting-edge technology and seamless service.
              </p>
              <div className="services-hero-actions">
                <button
                  type="button"
                  className="services-btn-explore"
                  data-testid="btn-explore-services"
                  onClick={handleExploreServices}
                  aria-label="Explore Services"
                >
                  <span className="services-btn-text">Explore Services</span>
                  <svg
                    className="services-btn-arrow"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>

                <button
                  type="button"
                  className="services-btn-talk"
                  data-testid="btn-talk-team"
                  onClick={handleTalkToTeam}
                  aria-label="Talk to Our Team"
                >
                  <svg
                    className="services-btn-phone"
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span className="services-btn-text">Talk to Our Team</span>
                </button>
              </div>
            </div>

            {/* Right Visual Column */}
            <div className="services-hero-visual">
              {/* Teal Sparkle Star (Left) */}
              <div className="services-sparkle sparkle-left" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#008080">
                  <path d="M12 0L14.4 9.6L24 12L14.4 14.4L12 24L9.6 14.4L0 12L9.6 9.6L12 0Z" />
                </svg>
              </div>

              {/* Technician Photo Card */}
              <div className="services-hero-photo-card">
                <img
                  src="/assets/services/mobility-hero.jpg"
                  alt="SancharSathi EV technician servicing scooter fleet"
                  className="services-hero-photo"
                  loading="eager"
                />
              </div>

              {/* White/Cyan Sparkle Star (Right) */}
              <div className="services-sparkle sparkle-right" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" stroke="#bae6fd" strokeWidth="1.2">
                  <path d="M12 0L14.4 9.6L24 12L14.4 14.4L12 24L9.6 14.4L0 12L9.6 9.6L12 0Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Bijliride Advantage Section (Full-Width Seamless Background) */}
      <section id="advantage" className="advantage-section" data-testid="advantage-section">
        <div className="advantage-container">
          <div className="advantage-seamless-wrap">
            <img
              src="/assets/services/bijliride-advantage-transparent.png"
              alt="The Bijliride Advantage - Flexible EV rentals with battery support, service assistance, and smart mobility access, Built to keep riders and businesses moving"
              className="advantage-seamless-img"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* 3. Services Ecosystem Grid Section */}
      <div id="services-grid">
        <Services />
      </div>

      {/* 4. Scaling Logistics & Enterprise Fleet Support */}
      <Business />

      {/* 5. Contact & Support Section */}
      <Contact />
    </div>
  );
}
