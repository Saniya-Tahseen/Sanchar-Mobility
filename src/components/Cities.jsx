import React from 'react';

export default function Cities() {
  return (
        <section id="cities" className="warangal-section">
          <div className="warangal-container">
            <div className="warangal-content">
              <h2 className="warangal-title">Electric<br />scooters for<br />Hanamkonda<br />&amp; Warangal.</h2>
              <div className="warangal-telugu">ఓరుగల్లు వీధుల్లో, కరెంటుతో.</div>
              <p className="warangal-desc">Rent by the day, week or month. Built for delivery riders, students at NIT and
                Kakatiya University, daily commuters and visitors on the heritage trail.</p>
              <div className="warangal-actions">
                <a href="#plans" className="warangal-btn-primary">See plans &amp; prices</a>
                <a href="#cities" className="warangal-btn-secondary">Check your area</a>
              </div>
            </div>
            <div className="warangal-visual">
              <div className="warangal-stage">
                <svg className="warangal-gate-svg" viewBox="0 0 540 370" fill="none" xmlns="http://www.w3.org/2000/svg"
                  aria-label="Electric scooter riding through Warangal Kakatiya Kala Thoranam gate">
                  <defs>
                    <filter id="archShadow" x="-5%" y="-5%" width="110%" height="110%">
                      <feDropShadow dx="0" dy="5" stdDeviation="6" flood-opacity="0.09" />
                    </filter>
                    <linearGradient id="headlightGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
                      <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Ground Baseline */}
                  <line x1="20" y1="316" x2="520" y2="316" stroke="#c4d5cc" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="60" y1="322" x2="480" y2="322" stroke="#dbe7e1" strokeWidth="1.5" strokeLinecap="round" />

                  {/* Animated Road Speed Dashes */}
                  <line className="road-speed-dashes" x1="30" y1="316" x2="510" y2="316" stroke="#8fa99c" strokeWidth="2.5"
                    strokeLinecap="round" />

                  {/* KAKATIYA KALA THORANAM (Historic Warangal Archway) */}
                  <g className="kakatiya-arch" filter="url(#archShadow)">
                    {/* Left Column Base & Plinths */}
                    <rect x="76" y="304" width="76" height="12" rx="1.5" fill="#37443e" />
                    <rect x="84" y="292" width="60" height="12" rx="1.5" fill="#45544d" />

                    {/* Left Column Shaft */}
                    <rect x="90" y="112" width="48" height="180" fill="#37443e" />
                    {/* Decorative Inset Flutes / Grooves */}
                    <rect x="97" y="122" width="34" height="160" fill="#2d3732" rx="1.5" />
                    <line x1="90" y1="172" x2="138" y2="172" stroke="#5d6f66" strokeWidth="2.5" />
                    <line x1="90" y1="236" x2="138" y2="236" stroke="#5d6f66" strokeWidth="2.5" />
                    {/* Left Column Capital (Top) */}
                    <rect x="84" y="100" width="60" height="12" rx="1.5" fill="#45544d" />

                    {/* Right Column Base & Plinths */}
                    <rect x="388" y="304" width="76" height="12" rx="1.5" fill="#37443e" />
                    <rect x="396" y="292" width="60" height="12" rx="1.5" fill="#45544d" />

                    {/* Right Column Shaft */}
                    <rect x="402" y="112" width="48" height="180" fill="#37443e" />
                    {/* Decorative Inset Flutes / Grooves */}
                    <rect x="409" y="122" width="34" height="160" fill="#2d3732" rx="1.5" />
                    <line x1="402" y1="172" x2="450" y2="172" stroke="#5d6f66" strokeWidth="2.5" />
                    <line x1="402" y1="236" x2="450" y2="236" stroke="#5d6f66" strokeWidth="2.5" />
                    {/* Right Column Capital (Top) */}
                    <rect x="396" y="100" width="60" height="12" rx="1.5" fill="#45544d" />

                    {/* Entablature / Tiered Horizontal Lintels */}
                    {/* Lower Beam (Tier 1) */}
                    <rect x="66" y="86" width="408" height="14" rx="2" fill="#45544d" />
                    {/* Middle Stepped Beam (Tier 2) */}
                    <rect x="92" y="68" width="356" height="18" rx="2" fill="#37443e" />
                    {/* Upper Stepped Beam (Tier 3) */}
                    <rect x="124" y="52" width="292" height="16" rx="2" fill="#45544d" />
                    {/* Central Top Crest Block / Finial */}
                    <rect x="246" y="38" width="48" height="14" rx="2" fill="#2b3631" />

                    {/* Torana Arch Inner Body */}
                    <path
                      d="M 138,100 L 138,138 C 160,138 178,124 198,138 C 224,158 244,166 270,166 C 296,166 316,158 342,138 C 362,124 380,138 402,138 L 402,100 Z"
                      fill="#2e3a34" />

                    {/* Central Golden Sun Medallion */}
                    <circle cx="270" cy="118" r="9" fill="#f59e0b" stroke="#d97706" strokeWidth="1.5" />

                    {/* Hanging Golden Toranam Festoon Garlands */}
                    {/* Left Garland */}
                    <path d="M 138,132 C 162,176 210,186 270,126" stroke="#eab308" strokeWidth="4.5"
                      strokeLinecap="round" fill="none" />
                    <path d="M 138,132 C 162,176 210,186 270,126" stroke="#fef08a" strokeWidth="1.5"
                      strokeLinecap="round" fill="none" opacity="0.6" />

                    {/* Right Garland */}
                    <path d="M 270,126 C 330,186 378,176 402,132" stroke="#eab308" strokeWidth="4.5"
                      strokeLinecap="round" fill="none" />
                    <path d="M 270,126 C 330,186 378,176 402,132" stroke="#fef08a" strokeWidth="1.5"
                      strokeLinecap="round" fill="none" opacity="0.6" />
                  </g>

                  {/* THE MOVING RIDE (Sleek Modern Electric Scooter & Commuter Rider) */}
                  <g className="moving-rider-track">
                    <g className="moving-scooter-unit">
                      {/* Headlight Forward Illumination Beam */}
                      <polygon points="112,216 195,190 195,250" fill="url(#headlightGlow)" opacity="0.45" />

                      {/* Rear Wheel Assembly (Center at x=18, y=296) */}
                      <g className="rear-wheel-spin">
                        <circle cx="18" cy="296" r="18" stroke="#1c2521" strokeWidth="5" fill="#141a17" />
                        {/* EV Alloy Rim with green segments */}
                        <circle cx="18" cy="296" r="13" stroke="#00936f" strokeWidth="2.5" stroke-dasharray="8 6"
                          fill="#2a3630" />
                        <circle cx="18" cy="296" r="5" fill="#a7f3d0" />
                        <circle cx="18" cy="296" r="2.5" fill="#141a17" />
                      </g>

                      {/* Front Wheel Assembly (Center at x=106, y=296) */}
                      <g className="front-wheel-spin">
                        <circle cx="106" cy="296" r="18" stroke="#1c2521" strokeWidth="5" fill="#141a17" />
                        {/* EV Alloy Rim with green segments */}
                        <circle cx="106" cy="296" r="13" stroke="#00936f" strokeWidth="2.5" stroke-dasharray="8 6"
                          fill="#2a3630" />
                        <circle cx="106" cy="296" r="5" fill="#a7f3d0" />
                        <circle cx="106" cy="296" r="2.5" fill="#141a17" />
                      </g>

                      {/* Front Suspension Fork */}
                      <line x1="98" y1="262" x2="106" y2="296" stroke="#4b5563" strokeWidth="4.5"
                        strokeLinecap="round" />

                      {/* Front Curved Mudguard / Fender */}
                      <path d="M 88,292 C 88,272 122,272 124,292" fill="none" stroke="#00936f" strokeWidth="4.5"
                        strokeLinecap="round" />

                      {/* Rear Swingarm & Belt / Motor Housing */}
                      <rect x="18" y="286" width="30" height="15" rx="4" fill="#1c2521" />
                      <circle cx="28" cy="293" r="4" fill="#374151" />

                      {/* Flat Step-Through Floorboard (Authentic Scooter Deck) */}
                      <rect x="44" y="285" width="40" height="9" rx="3" fill="#111827" />
                      <line x1="50" y1="288" x2="78" y2="288" stroke="#374151" strokeWidth="1.5"
                        strokeLinecap="round" />
                      <line x1="50" y1="291" x2="78" y2="291" stroke="#374151" strokeWidth="1.5"
                        strokeLinecap="round" />

                      {/* Rear Enclosed Body & Side Panels (SancharSathi Emerald Green) */}
                      <path
                        d="M 8,276 C 6,258 20,248 44,248 L 56,248 C 60,262 58,278 48,285 L 20,285 C 10,285 8,282 8,276 Z"
                        fill="#00936f" />
                      {/* Lower Skirt / Battery Compartment (Dark Charcoal) */}
                      <path d="M 18,270 L 48,270 C 47,278 42,285 24,285 Z" fill="#111827" />
                      {/* Speed Graphic Accent on Side Panel */}
                      <path d="M 16,260 L 46,260" stroke="#a7f3d0" strokeWidth="2.5" strokeLinecap="round" />
                      {/* SancharSathi Lightning Logo Motif */}
                      <path d="M 28,252 L 23,260 L 29,260 L 26,268" stroke="#ffffff" strokeWidth="1.5" fill="none"
                        strokeLinecap="round" strokeLinejoin="round" />

                      {/* Rear Red LED Taillight & Plate Hanger */}
                      <rect x="4" y="260" width="5" height="9" rx="2" fill="#ef4444" />
                      <rect x="3" y="271" width="3" height="8" rx="1" fill="#1c2521" />

                      {/* Pillion Grab Rail */}
                      <path d="M 6,246 C 6,238 18,238 24,244" fill="none" stroke="#9ca3af" strokeWidth="3.5"
                        strokeLinecap="round" />

                      {/* Contoured Plush Dual Scooter Saddle / Seat */}
                      <path d="M 12,246 C 14,241 24,240 38,241 C 50,242 58,245 62,250 L 14,250 Z" fill="#1f2937" />
                      <line x1="18" y1="248" x2="58" y2="248" stroke="#eab308" strokeWidth="1.5"
                        strokeLinecap="round" />

                      {/* Front Apron & Steering Column (Aerodynamic Shield) */}
                      <path d="M 78,285 L 84,256 L 108,232 C 112,228 115,234 113,242 L 100,274 L 84,285 Z"
                        fill="#00936f" />
                      <path d="M 80,283 L 88,254 L 98,254 L 90,283 Z" fill="#111827" />
                      {/* Headlight on Front Apron */}
                      <polygon points="107,233 113,237 109,245 104,241" fill="#38bdf8" />

                      {/* Steering Column up to Handlebar Cowl */}
                      <path d="M 102,238 L 98,212" stroke="#00936f" strokeWidth="7" strokeLinecap="round" />

                      {/* Handlebar Head Cowl (with DRL Headlamp) */}
                      <rect x="91" y="208" width="18" height="13" rx="4" fill="#00936f" />
                      <path d="M 108,211 L 110,218" stroke="#38bdf8" strokeWidth="4.5" strokeLinecap="round" />

                      {/* Handlebar Grips & Rearview Mirror */}
                      <line x1="86" y1="213" x2="104" y2="213" stroke="#111827" strokeWidth="4.5"
                        strokeLinecap="round" />
                      <circle cx="86" cy="213" r="3.5" fill="#374151" />
                      <line x1="94" y1="208" x2="92" y2="194" stroke="#6b7280" strokeWidth="1.8"
                        strokeLinecap="round" />
                      <ellipse cx="91" cy="192" rx="4.5" ry="3" fill="#1f2937" transform="rotate(-15 91 192)" />
                      <ellipse cx="91" cy="192" rx="3.5" ry="2" fill="#9ca3af" transform="rotate(-15 91 192)" />

                      {/* RIDER (Relaxed, Upright Electric Scooter Commuter) */}
                      <circle cx="38" cy="246" r="6" fill="#1c2521" />
                      {/* Thigh extending forward towards the floorboard */}
                      <line x1="38" y1="246" x2="68" y2="252" stroke="#1c2521" strokeWidth="7"
                        strokeLinecap="round" />
                      {/* Lower leg going straight down to the floorboard */}
                      <line x1="68" y1="252" x2="68" y2="284" stroke="#1c2521" strokeWidth="6"
                        strokeLinecap="round" />
                      {/* Foot resting flat on the scooter floorboard deck */}
                      <path d="M 63,286 L 78,286 C 80,286 80,283 78,283 L 64,283 Z" fill="#111827" />

                      {/* Torso sitting upright in natural scooter posture */}
                      <line x1="38" y1="246" x2="46" y2="202" stroke="#1c2521" strokeWidth="8"
                        strokeLinecap="round" />
                      <line x1="42" y1="212" x2="45" y2="234" stroke="#00936f" strokeWidth="2.5"
                        strokeLinecap="round" />

                      {/* Arms reaching forward to handlebar grips */}
                      <line x1="46" y1="206" x2="72" y2="212" stroke="#1c2521" strokeWidth="5.5"
                        strokeLinecap="round" />
                      <line x1="72" y1="212" x2="90" y2="213" stroke="#1c2521" strokeWidth="5"
                        strokeLinecap="round" />

                      {/* Helmet & Head */}
                      <circle cx="48" cy="184" r="11" fill="#1c2521" />
                      <path d="M 40,182 C 45,174 54,175 58,181" fill="none" stroke="#00936f" strokeWidth="2.5"
                        strokeLinecap="round" />
                      <path d="M 54,181 C 60,183 60,189 55,192" fill="none" stroke="#38bdf8" strokeWidth="3"
                        strokeLinecap="round" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </section>
  );
}
