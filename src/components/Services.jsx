import React, { useState } from 'react';

export default function Services() {
  const [highlightedId, setHighlightedId] = useState(null);

  return (
        <section id="services" className="services-section">
          <div className="services-container">
            <div className="services-badge-wrap">
              <span className="services-badge-pill">OUR SERVICES</span>
            </div>
            <div className="services-header">
              <h2>A Fullstack Ecosystem For <span className="services-highlight-cyan">Electric</span> <span
                  className="services-highlight-green">Mobility</span></h2>
              <p>Integrated EV solutions for riders, businesses, and delivery partners. Built around rentals, support,
                charging, maintenance and reliable fleet operations.</p>
            </div>
            <div className="service-grid">
              {/* Card 1: EV Rentals */}
              <article className="service-card" data-testid="service-card-ev-rentals">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18.5" cy="17.5" r="3.5"></circle>
                    <circle cx="5.5" cy="17.5" r="3.5"></circle>
                    <circle cx="15" cy="5" r="1"></circle>
                    <path d="M12 17.5V14l-3-3 4-3 2 3h2"></path>
                  </svg>
                </div>
                <h3>EV Rentals</h3>
                <p>Flexible, scalable electric vehicle rental solutions for all business sizes.</p>
                <button className="service-link" data-testid="service-ev-rentals">Learn more</button>
              </article>

              {/* Card 2: Battery Swapping */}
              <article className="service-card" data-testid="service-card-battery-swapping">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2.5" y="7" width="6" height="13" rx="1.5"></rect>
                    <path d="M4.5 4.5h2V7h-2z"></path>
                    <path d="M4.5 12.5h2"></path>
                    <path d="M5.5 11.5v2"></path>
                    <rect x="15.5" y="7" width="6" height="13" rx="1.5"></rect>
                    <path d="M17.5 4.5h2V7h-2z"></path>
                    <path d="M17.5 13.5h2"></path>
                    <path d="M10 10.5h3.5m-1.2-1.5 1.5 1.5-1.5 1.5"></path>
                    <path d="M14 14.5h-3.5m1.2-1.5-1.5 1.5 1.5 1.5"></path>
                  </svg>
                </div>
                <h3>Battery Swapping</h3>
                <p>Quick, convenient battery swaps at partner stations pan-India.</p>
                <button className="service-link" data-testid="service-battery-swapping">Learn more</button>
              </article>

              {/* Card 3: Battery Delivery */}
              <article className="service-card is-highlighted" data-testid="service-card-battery-delivery">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="5.5" cy="18" r="2.5"></circle>
                    <circle cx="18.5" cy="18" r="2.5"></circle>
                    <path d="M5.5 18h2.5l3.5-7h6"></path>
                    <path d="M17.5 11l1.5-5.5h-1.5"></path>
                    <rect x="5" y="5.5" width="7" height="6.5" rx="1.5"></rect>
                    <circle cx="7.2" cy="8.2" r=".7" fill="currentColor"></circle>
                    <circle cx="9.8" cy="8.2" r=".7" fill="currentColor"></circle>
                    <path d="M7.5 10.2h2"></path>
                    <path d="M8.5 5.5v-2"></path>
                  </svg>
                </div>
                <h3>Battery Delivery</h3>
                <p>On-demand battery delivery to your fleet, 24/7, wherever you are.</p>
                <button className="service-link" data-testid="service-battery-delivery">Learn more</button>
              </article>

              {/* Card 4: Vehicle Service */}
              <article className="service-card" data-testid="service-card-vehicle-service">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 19l6.5-6.5"></path>
                    <path d="M14 7.5l3-3 2 2-3 3"></path>
                    <path d="M19 2.5l2.5 2.5"></path>
                    <path d="M3.5 18l2.5 2.5-1.5 1.5-2.5-2.5z"></path>
                    <path d="M19 19l-6.5-6.5"></path>
                    <path d="M10 10L6.5 6.5"></path>
                    <path d="M3 5.5l3.5-3.5 2 2-2 2-3 1.5"></path>
                    <path d="M4.5 7l2-2"></path>
                    <path d="M18 20.5l2.5-2.5-1.5-1.5-2.5 2.5z"></path>
                  </svg>
                </div>
                <h3>Vehicle Service</h3>
                <p>Proactive maintenance and on-site repair to maximize your uptime.</p>
                <button className="service-link" data-testid="service-vehicle-service">Learn more</button>
              </article>

              {/* Card 5: On-Road Assistance */}
              <article className="service-card" data-testid="service-card-on-road-assistance">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 19.5 9 4.5h6l3 15"></path>
                    <path d="M12 7.5v2.5"></path>
                    <path d="M12 13v2.5"></path>
                    <circle cx="17.5" cy="17" r="4.5" fill="white"></circle>
                    <circle cx="17.5" cy="17" r="4.5"></circle>
                    <path d="m15.5 17 1.5 1.5 3-3"></path>
                  </svg>
                </div>
                <h3>On-Road Assistance</h3>
                <p>Round-the-clock technical support and emergency help for your fleet.</p>
                <button className="service-link" data-testid="service-on-road-assistance">Learn more</button>
              </article>

              {/* Card 6: Charging Stations */}
              <article className="service-card" data-testid="service-card-charging-stations">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21h11"></path>
                    <path d="M4 21V5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v16"></path>
                    <rect x="6.5" y="6" width="4" height="4.5" rx="0.5"></rect>
                    <path d="m9 7-1.2 1.5h1.4L8 10"></path>
                    <path d="M13 10.5h1.5a1.5 1.5 0 0 1 1.5 1.5v3a2 2 0 0 0 2 2 2 2 0 0 0 2-2V9a1.5 1.5 0 0 0-3 0v1.5">
                    </path>
                  </svg>
                </div>
                <h3>Charging Stations</h3>
                <p>Easily find nearby EV charging stations with our simple, user-friendly platform.</p>
                <button className="service-link" data-testid="service-charging-stations">Learn more</button>
              </article>
            </div>
          </div>
        </section>
  );
}
