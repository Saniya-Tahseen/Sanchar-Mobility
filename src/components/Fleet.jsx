import React from 'react';

export default function Fleet({ onSelectModel }) {
  return (
    <section id="fleet" className="fleet-section container">
      <div className="section-heading">
        <div>
          <div className="eyebrow green">Flagship Electric Fleet</div>
          <h2>Engineered for Performance.<br /><span style={{ color: 'var(--green)' }}>Designed for the City.</span></h2>
        </div>
        <p>Explore Sanchari's smart electric mobility lineup — built with intelligent battery architecture,
          certified extended ranges, and zero emissions for everyday commuters.</p>
      </div>

      {/* Flagship Spotlight Showcase Card */}
      <div className="fleet-card fleet-spotlight-card" id="cardModelMint">
        <div className="fleet-spotlight-content">
          <div className="fleet-spotlight-badge-row">
            <span className="fleet-badge badge-mint">⚡ Flagship Urban Commuter</span>

          </div>

          <h3 className="fleet-spotlight-title">BGauss C12i Max</h3>

          <div className="fleet-spotlight-specs">
            <div className="spotlight-spec-card">
              <span className="spotlight-spec-icon">⚡</span>
              <div>
                <span className="spec-val">110 km</span>
                <span className="spec-lbl">Certified Range</span>
              </div>
            </div>
            <div className="spotlight-spec-card">
              <span className="spotlight-spec-icon">🚀</span>
              <div>
                <span className="spec-val">45 km/h</span>
                <span className="spec-lbl">Top Speed</span>
              </div>
            </div>
            <div className="spotlight-spec-card">
              <span className="spotlight-spec-icon">🔋</span>
              <div>
                <span className="spec-val">3.2 kWh</span>
                <span className="spec-lbl">Li-ion Battery</span>
              </div>
            </div>
            <div className="spotlight-spec-card">
              <span className="spotlight-spec-icon">⏱️</span>
              <div>
                <span className="spec-val">3.5 hrs</span>
                <span className="spec-lbl">Charge Time</span>
              </div>
            </div>
          </div>

          <div className="fleet-spotlight-actions">

            <button
              type="button"
              className="fleet-select-btn btn-select-mint"
              onClick={() => onSelectModel?.('mint')}
            >
              Select Model
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="fleet-spotlight-visual">
          <div className="fleet-spotlight-pedestal" aria-hidden="true"></div>
          <img
            src="/assets/fleet/bgauss-scooter-mint.png"
            alt="BGauss C12 Mint Green & White Electric Scooter"
            className="fleet-spotlight-img"
          />
          <div className="fleet-floating-chip chip-left">
            <span className="chip-dot"></span>
            <span>Zero Emissions</span>
          </div>
          <div className="fleet-floating-chip chip-right">
            <span>🛡️ IP67 Waterproof</span>
          </div>
        </div>
      </div>
    </section>
  );
}
