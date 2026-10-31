import React from 'react';

export default function Footer({ onNavigate }) {
  const handleNav = (page, sectionId = null) => {
    if (onNavigate) {
      onNavigate(page, sectionId);
    } else if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer>
      <div className="container footer-inner">
        <button
          className="brand"
          data-testid="footer-brand"
          onClick={() => handleNav('home')}
          aria-label="SancharSathi Home"
        >
          <span className="brand-mark">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-zap"
              aria-hidden="true"
            >
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
            </svg>
          </span>
          Sanchar<span>Sathi</span>
        </button>
        <p>Electrifying every mile.</p>
        <div className="footer-links">
          <button data-testid="footer-why" onClick={() => handleNav('home', 'why-us')}>
            Why SancharSathi
          </button>
          <button data-testid="footer-services" onClick={() => handleNav('services')}>
            Services
          </button>
          <button data-testid="footer-contact" onClick={() => handleNav('home', 'contact')}>
            Contact
          </button>
        </div>
        <small>© 2026 SancharSathi. Ride clean.</small>
      </div>
    </footer>
  );
}
