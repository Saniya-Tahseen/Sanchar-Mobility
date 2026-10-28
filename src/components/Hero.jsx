import React from 'react';

export default function Hero() {
  const handleGetStarted = () => {
    const el = document.getElementById('fleet');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-container container">
        <div className="hero-copy">
          <h1 className="hero-title">
            Electrify Your Ride,<br />
            <span className="title-cyan">Save More </span>
            <span className="title-green">every day</span>
          </h1>
          <p className="hero-description">
            Switch to smart electric mobility with Bijliride lower running costs, cleaner rides, and reliable EV access built for modern riders.
          </p>
          <div className="hero-actions">
            <button className="button button-download" data-testid="hero-download-app">
              Download App
            </button>
            <button
              className="button button-gradient"
              data-testid="hero-get-started"
              onClick={handleGetStarted}
            >
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero__image-wrap">
            <div className="hero__viewer-wrap">
              {/* Glowing Elliptical Cyan Pedestal matching screenshot */}
              <div className="hero__pedestal" aria-hidden="true"></div>

              {/* Scooter 3D Model Viewer */}
              <model-viewer
                className="hero__model"
                src="/assets/scooter-360/oowah_first-draft-compressed.glb"
                alt="Bijliride Electric Scooter"
                camera-controls
                auto-rotate
                rotation-per-second="10deg"
                disable-zoom
                shadow-intensity="1.3"
                shadow-softness="0.85"
                exposure="1.06"
                touch-action="pan-y"
                interaction-prompt="auto"
              >
              </model-viewer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
