import React, { useState } from 'react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <header className="nav-wrap">
      <nav className="nav container" data-testid="site-navigation">
        <button
          className="brand brand-bijliride"
          data-testid="brand-home"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Bijliride Home"
        >
          <span className="brand-text">
            Bijlirid
            <span className="brand-leaf-e">
              e
              <svg className="brand-leaf-svg" viewBox="0 0 24 24" fill="#22c55e" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-10 4.5S10 14 10 14" />
              </svg>
            </span>
          </span>
        </button>

        <div className={`nav-links ${mobileOpen ? 'open' : ''}`}>
          <button
            className="nav-link active"
            data-testid="nav-home"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setMobileOpen(false);
            }}
          >
            Home
          </button>
          <button
            className="nav-link"
            data-testid="nav-business"
            onClick={() => scrollTo('business')}
          >
            For Business
          </button>
          <button
            className="nav-link"
            data-testid="nav-about"
            onClick={() => scrollTo('about')}
          >
            About Us
          </button>
          <button
            className="nav-link"
            data-testid="nav-services"
            onClick={() => scrollTo('services')}
          >
            Services
          </button>
        </div>

        <div className="nav-right">
          <button
            className="nav-store"
            data-testid="nav-download-app"
            onClick={() => scrollTo('fleet')}
            aria-label="Get it on Google Play"
          >
            <img alt="GET IT ON Google Play" src="/assets/brand/play-badge.png" />
          </button>
          <button
            className="menu-button"
            data-testid="mobile-menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12h16"></path>
              <path d="M4 18h16"></path>
              <path d="M4 6h16"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
