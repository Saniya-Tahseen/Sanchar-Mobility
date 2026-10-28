import React from 'react';

export default function WhyUs() {
  return (
        <section id="why" className="why-section-redesign"
          style={{ padding: '95px 0 85px', position: 'relative', background: 'radial-gradient(ellipse 90% 55% at 50% 0%, rgba(195, 245, 235, 0.5) 0%, rgba(240, 252, 248, 0.25) 65%, transparent 100%)' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', boxSizing: 'border-box' }}>
            <div className="why-heading-centered" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 52px' }}>
              <h2
                style={{ fontSize: '40px', fontWeight: '800', color: '#0f172a', letterSpacing: '-0.6px', margin: '0 0 14px', textAlign: 'center' }}>
                Why Choose SancharSathi</h2>
              <p
                style={{ color: '#475569', fontSize: '16.5px', lineHeight: '1.65', margin: '0 auto', maxWidth: '680px', textAlign: 'center' }}>
                Experience the perfect blend of convenience, sustainability, and affordability with our electric scooter
                sharing service.</p>
            </div>
            <div className="why-grid-redesign"
              style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px', width: '100%', boxSizing: 'border-box' }}>
              {/* Card 1: Eco-Friendly Commute */}
              <article className="why-card-item"
                style={{ background: '#ffffff', border: '1px solid #edf2ef', borderRadius: '22px', padding: '42px 32px 36px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.035)', display: 'flex', flexDirection: 'column', textAlign: 'left', boxSizing: 'border-box' }}>
                <div className="why-card-icon icon-bg-green"
                  style={{ width: '52px', height: '52px', borderRadius: '50%', background: '#d1fae5', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', flexShrink: '0' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="#10b981">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" fill="none" stroke="#ffffff"
                      strokeWidth="2" strokeLinecap="round"></path>
                  </svg>
                </div>
                <h3
                  style={{ fontSize: '21px', fontWeight: '700', color: '#0f172a', margin: '0 0 14px', letterSpacing: '-0.3px', textAlign: 'left' }}>
                  Eco-Friendly Commute</h3>
                <p style={{ color: '#4b5563', fontSize: '14.5px', lineHeight: '1.65', margin: '0', textAlign: 'left' }}>Say
                  goodbye to pollution. SancharSathi scooters run on clean energy, reducing your carbon footprint and
                  promoting sustainable city life.</p>
              </article>

              {/* Card 2: 24/7 Roadside Assistance */}
              <article className="why-card-item"
                style={{ background: '#ffffff', border: '1px solid #edf2ef', borderRadius: '22px', padding: '42px 32px 36px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.035)', display: 'flex', flexDirection: 'column', textAlign: 'left', boxSizing: 'border-box' }}>
                <div className="why-card-icon icon-bg-amber"
                  style={{ width: '52px', height: '52px', borderRadius: '50%', background: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', flexShrink: '0' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path d="M7 20L10 4H14L17 20H7Z" fill="#f59e0b"></path>
                    <line x1="12" y1="6" x2="12" y2="9" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"></line>
                    <line x1="12" y1="13" x2="12" y2="18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round">
                    </line>
                  </svg>
                </div>
                <h3
                  style={{ fontSize: '21px', fontWeight: '700', color: '#0f172a', margin: '0 0 14px', letterSpacing: '-0.3px', textAlign: 'left' }}>
                  24/7 Roadside Assistance</h3>
                <p style={{ color: '#4b5563', fontSize: '14.5px', lineHeight: '1.65', margin: '0', textAlign: 'left' }}>We've got
                  your back, always. From breakdown help to quick fixes, our support team is ready day or night.</p>
              </article>

              {/* Card 3: All-in-One App */}
              <article className="why-card-item"
                style={{ background: '#ffffff', border: '1px solid #edf2ef', borderRadius: '22px', padding: '42px 32px 36px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.035)', display: 'flex', flexDirection: 'column', textAlign: 'left', boxSizing: 'border-box' }}>
                <div className="why-card-icon icon-bg-blue"
                  style={{ width: '52px', height: '52px', borderRadius: '50%', background: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', flexShrink: '0' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none"
                    stroke="#0284c7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="14" height="20" x="5" y="2" rx="3" ry="3"></rect>
                    <path d="M11 18h2"></path>
                  </svg>
                </div>
                <h3
                  style={{ fontSize: '21px', fontWeight: '700', color: '#0f172a', margin: '0 0 14px', letterSpacing: '-0.3px', textAlign: 'left' }}>
                  All-in-One App</h3>
                <p style={{ color: '#4b5563', fontSize: '14.5px', lineHeight: '1.65', margin: '0', textAlign: 'left' }}>Book
                  rides, swap batteries, find chargers, and access support. Everything you need in one easy-to-use
                  SancharSathi app.</p>
              </article>
            </div>
          </div>
        </section>
  );
}
