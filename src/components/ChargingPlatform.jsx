import React from 'react';

export default function ChargingPlatform() {
  return (
        <section className="charging-platform-section" id="charging">
          <div className="charging-container">
            <div className="charging-frame">
              {/* Decorative corner geometric lines matching screenshot */}
              <svg className="charging-frame-pattern" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0C50 150 150 250 320 250" stroke="#00b4d8" strokeWidth="1.2" strokeOpacity="0.35" />
                <path d="M80 0C80 160 170 260 320 265" stroke="#00b4d8" strokeWidth="1.2" strokeOpacity="0.35" />
                <path d="M110 0C110 170 190 270 320 280" stroke="#00b4d8" strokeWidth="1.2" strokeOpacity="0.35" />
                <path d="M140 0C140 180 210 280 320 295" stroke="#00b4d8" strokeWidth="1.2" strokeOpacity="0.35" />
                <path d="M170 0C170 190 230 290 320 310" stroke="#00b4d8" strokeWidth="1.2" strokeOpacity="0.35" />
                <path d="M20 0C20 140 130 240 320 235" stroke="#10b981" strokeWidth="1.2" strokeOpacity="0.35" />
                <path d="M0 20C120 20 220 130 320 220" stroke="#10b981" strokeWidth="1.2" strokeOpacity="0.35" />
                <path d="M0 60C140 60 230 150 320 205" stroke="#10b981" strokeWidth="1.2" strokeOpacity="0.35" />
                <path d="M0 100C160 100 240 170 320 190" stroke="#10b981" strokeWidth="1.2" strokeOpacity="0.35" />
              </svg>

              <div className="charging-grid">
                {/* Left Column */}
                <div className="charging-left">
                  <div className="charging-icon-box">
                    <img src="/assets/charging-platform/charging-icon.svg" alt="Charging Platform" loading="lazy" />
                  </div>
                  <h2 className="charging-heading">
                    <span className="charging-highlight-cyan">SancharSathi</span> <span
                      className="charging-highlight-green">Charging Platform</span>
                  </h2>
                  <p className="charging-description">
                    Access our extensive EV charging network across Hyderabad and more. Accessible, and always visible
                    in your app.
                  </p>
                  <div className="charging-partners-label">
                    Our charging partners &#x2705;
                  </div>
                  <div className="charging-partners-logos">
                    <a href="https://bolt.earth/" target="_blank" rel="noopener noreferrer"
                      className="charging-partner-pill" aria-label="Bolt.Earth">
                      <img src="/assets/charging-platform/bolt.png" alt="Bolt.Earth" loading="lazy" />
                    </a>
                    <a href="https://decharge.in/" target="_blank" rel="noopener noreferrer"
                      className="charging-partner-pill" aria-label="DeCharge">
                      <img src="/assets/charging-platform/decharge.png" alt="DeCharge" loading="lazy" />
                    </a>
                  </div>
                  <div>
                    <a href="https://wa.me/91?text=Hi%2C%20I%20would%20like%20to%20explore%20SancharSathi%20charging%20stations"
                      target="_blank" rel="noopener noreferrer" className="charging-cta-btn"
                      data-testid="explore-charging-cta">
                      Explore Charging
                    </a>
                  </div>
                </div>

                {/* Right Column: 3D Isometric Charging Hub */}
                <div className="charging-illustration">
                  <img src="/assets/charging-platform/charging_hub.svg" alt="SancharSathi EV Charging Hub"
                    loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </section>
  );
}
