import React from 'react';

export default function Business() {
  return (
        <section id="business" className="services-section business-section">
          <div className="services-container">
            <div className="services-badge-wrap">
              <span className="services-badge-pill">BUILT FOR SCALING LOGISTICS</span>
            </div>
            <div className="services-header">
              <h2>One platform for <span className="services-highlight-cyan">Every scale</span> <span
                  className="services-highlight-green">Zero compromise</span></h2>
              <p>Whether you're a startup or an enterprise — SancharSathi scales with your ambition. Pick your model and
                go
                electric.</p>
            </div>
            <div className="service-grid">
              {/* Card 1: Delivery platform */}
              <article className="service-card" data-testid="business-card-delivery-platform">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="5" cy="18.5" r="2.5"></circle>
                    <circle cx="19" cy="18.5" r="2.5"></circle>
                    <path d="M5 18.5h2.5l3-6.5h6.5"></path>
                    <path d="M17 12l1.5-5H17"></path>
                    <circle cx="12" cy="7.5" r="1.8"></circle>
                    <path d="M10.5 12l1.5-3 2.5 1.5"></path>
                    <rect x="4.5" y="10" width="4.5" height="4.5" rx="1"></rect>
                    <path d="M10.5 3.5a3 3 0 0 1 3 0"></path>
                    <path d="M9 1.5a5.5 5.5 0 0 1 6 0"></path>
                  </svg>
                </div>
                <h3>Delivery platform</h3>
                <p>ONDC-powered delivery operations managed end to end.</p>
                <button className="service-link" data-testid="business-delivery-platform">Learn more</button>
              </article>

              {/* Card 2: B2B Services (Highlighted) */}
              <article className="service-card is-highlighted" data-testid="business-card-b2b-services">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="7" y="2.5" width="14" height="10" rx="1.5"></rect>
                    <path d="M7 5.5h14"></path>
                    <path d="M9.5 4h.5"></path>
                    <path d="M11.5 4h.5"></path>
                    <path d="M10 10l2-2.5 2 1.5 3-3"></path>
                    <circle cx="17" cy="6" r=".6" fill="currentColor"></circle>
                    <circle cx="4.5" cy="19.5" r="2"></circle>
                    <circle cx="13.5" cy="19.5" r="2"></circle>
                    <path d="M4.5 19.5h2l2-4.5h4"></path>
                    <path d="M12.5 15l1.2-4h-1.2"></path>
                    <path d="M7.5 15v-2.5h2.5"></path>
                    <circle cx="19.5" cy="19.5" r="2"></circle>
                    <path d="M15.5 19.5h2l1.5-3.5h2"></path>
                    <path d="M19 16l1-2.5h-1"></path>
                  </svg>
                </div>
                <h3>B2B Services</h3>
                <p>EV fleet deployment, uptime, and support for businesses.</p>
                <button className="service-link" data-testid="business-b2b-services">Learn more</button>
              </article>

              {/* Card 3: Franchise */}
              <article className="service-card" data-testid="business-card-franchise">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9.5 5 5h14l2 4.5"></path>
                    <path d="M3 9.5a2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0"></path>
                    <path d="M4 11.5v8.5a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8.5"></path>
                    <path d="M6.5 21v-5.5h4V21"></path>
                    <rect x="9.5" y="2" width="5" height="3.5" rx="0.5"></rect>
                    <path d="M11 3h1.2a.8.8 0 0 1 0 1.6H11V3z"></path>
                    <path d="M11 4.6h1.4a.8.8 0 0 1 0 1.6H11v-1.6z"></path>
                    <path d="M19 2a2 2 0 0 1 2 2c0 1.5-2 3.5-2 3.5S17 5.5 17 4a2 2 0 0 1 2-2z"></path>
                    <circle cx="19" cy="4" r=".6" fill="currentColor"></circle>
                    <path d="M12.5 17.5l3.5-3.5 2 1.5 3.5-4"></path>
                    <path d="M19 11.5h2.5V14"></path>
                  </svg>
                </div>
                <h3>Franchise</h3>
                <p>Start and scale your EV rental business with SancharSathi.</p>
                <button className="service-link" data-testid="business-franchise">Learn more</button>
              </article>
            </div>
          </div>
        </section>
  );
}
