import React from 'react';

export default function Hero({ selectedModel, onSelectModel }) {
  return (
        <section className="hero container">
          <div className="hero-copy reveal">
            <div className="eyebrow hero-eyebrow"><span className="live-dot"></span> Smart mobility for every
              mile</div>
            <h1>Electrify Your Ride,<br /><em>Save More every</em><br />day</h1>
            <p>
              Switch to smart electric mobility with SancharSathi — lower running costs, cleaner rides, and reliable EV
              access built for modern riders.</p>
            <div className="hero-actions"><button className="button button-download" data-testid="hero-download-app">Download App</button><button className="button button-gradient"
                data-testid="hero-get-started">Get started <svg
                  xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="lucide lucide-arrow-right" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg></button></div>
          </div>
          <div className="hero__right hero-visual reveal">
            <div className="hero__image-wrap">
              <div className="hero__viewer-wrap">
                {/* Glowing Circular Pedestal Ring */}
                <div className="hero__pedestal" aria-hidden="true"></div>

                {/* 360 Drag Badge Hint */}
                <div className="hero__360-badge" aria-label="360 view interactive">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
                    <path d="M21 3v5h-5" />
                  </svg>
                  <span>360° Drag to rotate</span>
                </div>

                <model-viewer className="hero__model" src="/assets/scooter-360/oowah_first-draft-compressed.glb"
                  alt="Electric scooter" camera-controls auto-rotate rotation-per-second="10deg" disable-zoom
                  shadow-intensity="1.2" shadow-softness="0.8" exposure="1.05" touch-action="pan-y"
                  interaction-prompt="auto">
                </model-viewer>

                {/* Floating Battery Status Card */}
                <div className="floating-card charge-card" id="heroChargeCard">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="lucide lucide-battery-charging" aria-hidden="true">
                    <path d="m11 7-3 5h4l-3 5"></path>
                    <path d="M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935"></path>
                    <path d="M22 14v-4"></path>
                    <path d="M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936"></path>
                  </svg>
                  <span id="heroStatusText">Ready to ride</span>
                  <strong id="heroBatteryText">94%</strong>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
}
