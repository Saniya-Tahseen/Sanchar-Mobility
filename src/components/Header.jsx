import React from 'react';

export default function Header() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
      <header className="nav-wrap">
        <nav className="nav container" data-testid="site-navigation"><button className="brand" data-testid="brand-home" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="SancharSathi Home"><span
              className="brand-mark"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" className="lucide lucide-zap" aria-hidden="true">
                <path
                  d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z">
                </path>
              </svg></span>Sanchar<span>Sathi</span></button>
          <div className="nav-links "><button data-testid="nav-home">Home</button><button
              data-testid="nav-fleet" onClick={() => scrollTo("fleet")}>Fleet</button><button
              data-testid="nav-business" onClick={() => scrollTo("business")}>For Business</button><button data-testid="nav-about">About Us</button><button data-testid="nav-services" onClick={() => scrollTo("services")}>Services</button><button className="nav-store"
              data-testid="nav-download-app"><img alt="Get it on Google Play" src="/assets/brand/play-badge.png" /></button></div><button className="menu-button"
            data-testid="mobile-menu-toggle" aria-label="Toggle menu"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="lucide lucide-menu" aria-hidden="true">
              <path d="M4 12h16"></path>
              <path d="M4 18h16"></path>
              <path d="M4 6h16"></path>
            </svg></button>
        </nav>
      </header>
  );
}
