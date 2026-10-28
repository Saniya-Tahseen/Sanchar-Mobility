import React from 'react';

export default function Testimonials() {
  return (
        <section className="testimonial-section">
          <div className="container">
            <div className="eyebrow green">Real rides. Real stories.</div>
            <div className="testimonial-heading">
              <h2>What people say<br /><span>about us.</span></h2>
              <div className="quote-mark">“</div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-avatar">KK</div>
              <div>
                <div className="stars">★★★★★</div>
                <p>“The first step may be small, but sometimes it changes everything. Our journey
                  started with SancharSathi. This is our story, and this story is not over yet.”</p><strong>Krishna Kumar</strong><span>SancharSathi rider partner</span>
              </div>
              <div className="testimonial-arrows"><button data-testid="testimonial-prev"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round" className="lucide lucide-chevron-left" aria-hidden="true">
                    <path d="m15 18-6-6 6-6"></path>
                  </svg></button><button data-testid="testimonial-next"><svg
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="lucide lucide-chevron-right" aria-hidden="true">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg></button></div>
            </div>
          </div>
        </section>
  );
}
