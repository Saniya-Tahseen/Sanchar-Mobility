import React from 'react';

export default function Fleet({ onSelectModel }) {
  return (
        <section id="fleet" className="fleet-section container">
          <div className="section-heading">
            <div>
              <div className="eyebrow green">Flagship Electric Fleet</div>
              <h2>Engineered for Performance.<br /><span style={{ color: 'var(--green)' }}>Designed for the City.</span></h2>
            </div>
            <p>Explore SancharSathi's smart electric mobility lineup — built with intelligent battery architecture,
              certified extended ranges, and zero emissions for modern commuters.</p>
          </div>
          <div className="fleet-grid">
            {/* Green Scooter Card */}
            <div className="fleet-card" id="cardModelGreen">
              <span className="fleet-badge badge-green">Smart Urban Commuter</span>
              <h3>BGauss C12i</h3>
              <p className="fleet-card-desc">Lightweight, agile, and styled in Foliage Green. Packed with regenerative
                braking, real-time telemetry, and superior energy efficiency.</p>
              <div className="fleet-stage">
                <div className="fleet-pedestal"></div>
                <img src="bgauss-scooter-green.png" alt="BGauss C12i Foliage Green Electric Scooter" />
              </div>
              <div className="fleet-specs">
                <div className="spec-item"><span className="spec-val">135 km</span><span className="spec-lbl">Range</span></div>
                <div className="spec-item"><span className="spec-val">75 km/h</span><span className="spec-lbl">Top Speed</span>
                </div>
                <div className="spec-item"><span className="spec-val">3.2 kWh</span><span className="spec-lbl">Battery</span></div>
                <div className="spec-item"><span className="spec-val">3.5 hrs</span><span className="spec-lbl">Fast Charge</span>
                </div>
              </div>
              <div className="fleet-card-actions">
                <div className="fleet-color-indicator">
                  <span className="fleet-dot dot-green"></span> Foliage Green
                </div>
                <button type="button" className="fleet-select-btn btn-select-green" onClick={() => onSelectModel?.('green')}>
                  Select Model <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Red Scooter Card */}
            <div className="fleet-card card-red" id="cardModelRed">
              <span className="fleet-badge badge-red">High-Torque Performance</span>
              <h3>BGauss D15</h3>
              <p className="fleet-card-desc">Bold and commanding in Crimson Red. Engineered with large 16-inch alloy wheels,
                high-tensile steel frame, and instant sport acceleration.</p>
              <div className="fleet-stage">
                <div className="fleet-pedestal pedestal-red"></div>
                <img src="bgauss-scooter-red.png" alt="BGauss D15 Crimson Red Electric Scooter" />
              </div>
              <div className="fleet-specs">
                <div className="spec-item"><span className="spec-val">115 km</span><span className="spec-lbl">Range</span></div>
                <div className="spec-item"><span className="spec-val">60 km/h</span><span className="spec-lbl">Top Speed</span>
                </div>
                <div className="spec-item"><span className="spec-val">3.2 kWh</span><span className="spec-lbl">Battery</span></div>
                <div className="spec-item"><span className="spec-val">4.0 hrs</span><span className="spec-lbl">Fast Charge</span>
                </div>
              </div>
              <div className="fleet-card-actions">
                <div className="fleet-color-indicator">
                  <span className="fleet-dot dot-red"></span> Crimson Red
                </div>
                <button type="button" className="fleet-select-btn btn-select-red" onClick={() => onSelectModel?.('red')}>
                  Select Model <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
  );
}
