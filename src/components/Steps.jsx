import React from 'react';

export default function Steps() {
  return (
        <section id="steps" className="steps-section">
          <div className="steps-container">
            <div className="steps-badge-wrap">
              <span className="steps-badge-pill">
                <span className="steps-badge-dot"></span>
                HOW IT WORKS
              </span>
            </div>

            <div className="steps-header">
              <h2>From Sign-Up to Riding in <span className="steps-highlight-cyan">4 Easy</span> <span
                  className="steps-highlight-green">Steps</span></h2>
              <p>Your fast-track to smart electric mobility. Choose your EV, complete quick verification, and hit the
                road with full confidence.</p>
            </div>

            {/* Stepper Timeline Progress Bar (Connected journey from screenshot) */}
            <div className="steps-timeline-wrap" aria-hidden="true">
              <div className="steps-timeline-track">
                <div className="steps-timeline-pulse"></div>
              </div>
              <div className="steps-timeline-nodes">
                <div className="steps-timeline-node">
                  <span className="steps-node-circle">1</span>
                  <span className="steps-node-label">Choose Scooter</span>
                </div>
                <div className="steps-timeline-node">
                  <span className="steps-node-circle">2</span>
                  <span className="steps-node-label">Verify KYC</span>
                </div>
                <div className="steps-timeline-node">
                  <span className="steps-node-circle">3</span>
                  <span className="steps-node-label">Start Riding</span>
                </div>
                <div className="steps-timeline-node">
                  <span className="steps-node-circle">4</span>
                  <span className="steps-node-label">Charge / Swap</span>
                </div>
              </div>
            </div>

            {/* 4 Step Cards with custom SVGs & content matching user's image */}
            <div className="steps-grid">
              {/* Step 1: Choose a scooter */}
              <div className="step-card" data-step="1">
                <div className="step-card-top">
                  <span className="step-badge-num">
                    <span className="step-badge-num-dot"></span>
                    STEP 01
                  </span>
                  <span className="step-card-indicator">Select</span>
                </div>
                <div className="step-icon-box">
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {/* EV Scooter with Hub Marker */}
                    <circle cx="6" cy="18" r="3" />
                    <circle cx="18" cy="18" r="3" />
                    <path d="M9 18h6" />
                    <path d="M15 18l2-10h2" />
                    <path
                      d="M11 3.5a2.5 2.5 0 0 1 2.5 2.5c0 1.9-2.5 4.5-2.5 4.5s-2.5-2.6-2.5-4.5a2.5 2.5 0 0 1 2.5-2.5z"
                      fill="currentColor" fill-opacity="0.2" />
                    <circle cx="11" cy="6" r="0.8" fill="currentColor" />
                  </svg>
                </div>
                <div className="step-card-content">
                  <h3>Choose a scooter</h3>
                  <p>Pick a plan and your nearest hub.</p>
                  <div className="step-card-perk">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                      strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Nearest Hub Pickup</span>
                  </div>
                </div>
                <div className="step-card-arrow" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Step 2: Verify */}
              <div className="step-card" data-step="2">
                <div className="step-card-top">
                  <span className="step-badge-num">
                    <span className="step-badge-num-dot"></span>
                    STEP 02
                  </span>
                  <span className="step-card-indicator">KYC</span>
                </div>
                <div className="step-icon-box">
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {/* ID Card & Verified Aadhaar / Licence badge */}
                    <rect x="2" y="4" width="20" height="15" rx="3" />
                    <circle cx="8" cy="10" r="2" />
                    <path d="M5.5 15a3 3 0 0 1 5 0" />
                    <line x1="14" y1="9" x2="18" y2="9" strokeLinecap="round" />
                    <line x1="14" y1="13" x2="17" y2="13" strokeLinecap="round" />
                    <path d="M17.5 17l1.8 1.8 3.2-3.2" strokeWidth="2.2" stroke="#10b981" />
                  </svg>
                </div>
                <div className="step-card-content">
                  <h3>Verify</h3>
                  <p>Show your driving licence and Aadhaar at handover.</p>
                  <div className="step-card-perk">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                      strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Instant Paperless KYC</span>
                  </div>
                </div>
                <div className="step-card-arrow" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Step 3: Ride */}
              <div className="step-card" data-step="3">
                <div className="step-card-top">
                  <span className="step-badge-num">
                    <span className="step-badge-num-dot"></span>
                    STEP 03
                  </span>
                  <span className="step-card-indicator">Hit Road</span>
                </div>
                <div className="step-icon-box">
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {/* Rider Helmet + Road Speed */}
                    <path d="M4 14.5c0-5 3.8-9 8.5-9s8.5 4 8.5 9c0 2-1 3.5-3.5 3.5h-9c-2.5 0-4.5-1.5-4.5-3.5z" />
                    <path d="M12 9h4.5a3.5 3.5 0 0 1 3.5 3.5v1.5a2 2 0 0 1-2 2H12" fill="currentColor"
                      fill-opacity="0.2" />
                    <path d="M2 10.5h2M1.5 13.5h3.5M2 16.5h2" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="step-card-content">
                  <h3>Ride</h3>
                  <p>Helmet and charger provided. Ride anywhere in the service area.</p>
                  <div className="step-card-perk">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                      strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Helmet & Charger Included</span>
                  </div>
                </div>
                <div className="step-card-arrow" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Step 4: Charge or swap */}
              <div className="step-card" data-step="4">
                <div className="step-card-top">
                  <span className="step-badge-num">
                    <span className="step-badge-num-dot"></span>
                    STEP 04
                  </span>
                  <span className="step-card-indicator">Power</span>
                </div>
                <div className="step-icon-box">
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {/* Battery & Fast Lightning Swap */}
                    <rect x="2" y="7" width="16" height="12" rx="2.5" />
                    <path d="M20 11v4" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M10.5 9.5L8 13h3.5l-1 4" strokeWidth="2" fill="currentColor" fill-opacity="0.2" />
                    <path d="M16 4l2 2-2 2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.5 6h4.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="step-card-content">
                  <h3>Charge or swap</h3>
                  <p>Charge at any hub, or call us if the battery runs low.</p>
                  <div className="step-card-perk">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                      strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Hub Swap & Roadside Help</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sleek Bottom Action Banner */}
            <div className="steps-cta-bar">
              <div className="steps-cta-text">
                <div className="steps-cta-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <span>Ready to experience electric freedom? Get onboarded in under <strong>5 minutes</strong>.</span>
              </div>
              <div className="steps-cta-actions">
                <a href="#contact" className="steps-btn-primary">
                  <span>Book Your Ride</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="#fleet" className="steps-btn-secondary">Explore Fleet</a>
              </div>
            </div>
          </div>
        </section>
  );
}
