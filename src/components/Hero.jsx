import React, { useEffect, useRef } from 'react';

// Blocky E V E mask path from user's reference
const MASK_PATH =
  'M20 40h90v22H46v27h54v22H46v27h64v22H20z M125 40h35l40 78 40-78h35l-57 120h-36z M290 40h90v22h-64v27h54v22h-54v27h64v22h-90z';

export default function Hero() {
  const trackRef = useRef(null);
  const pinRef = useRef(null);
  const sinRef = useRef(null);
  const creamRef = useRef(null);
  const linesRef = useRef(null);
  const hintRef = useRef(null);
  const co1Ref = useRef(null);
  const co2Ref = useRef(null);
  const co3Ref = useRef(null);

  useEffect(() => {
    // Generate speed streak lines dynamically matching reference
    if (linesRef.current) {
      const rnd = (a, b) => a + Math.random() * (b - a);
      linesRef.current.innerHTML = Array.from({ length: 12 }, () =>
        `<i style="--t:${rnd(20, 90).toFixed(0)}%;--w:${rnd(120, 360).toFixed(0)}px;--d:${rnd(0.2, 0.7).toFixed(2)}s"></i>`
      ).join('');
    }

    // Trigger rider entrance glide
    const goTimer = setTimeout(() => {
      if (pinRef.current) {
        pinRef.current.classList.add('go');
      }
    }, 150);

    const cream = creamRef.current;
    const sin = sinRef.current;
    const track = trackRef.current;
    const hint = hintRef.current;
    const callouts = [co1Ref.current, co2Ref.current, co3Ref.current];

    if (cream) {
      const svg = `url("data:image/svg+xml,${encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'><path d='${MASK_PATH}'/></svg>`
      )}")`;
      cream.style.webkitMaskImage = `${svg},linear-gradient(#000,#000)`;
      cream.style.maskImage = `${svg},linear-gradient(#000,#000)`;
    }

    const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
    const ease = (t) => t * t * (3 - 2 * t);

    let ticking = false;

    const draw = () => {
      ticking = false;
      if (!track || !cream) return;

      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const r = track.getBoundingClientRect();
      const p = clamp(-r.top / (r.height - vh));

      const W0 = Math.min(vw * 0.9, Math.max(vw * 0.62, 420));
      const R = (vw * 20) / W0;
      const e = ease(clamp(p / 0.42));
      const W = W0 * Math.pow(R, e);
      const H = W / 2;
      const ox = ((200 - 28 * e) / 400) * W;
      const oy = H / 2;
      const x = vw / 2 - ox;
      const y = vh / 2 - oy;

      const sz = `${W}px ${H}px, 100% 100%`;
      const ps = `${x}px ${y}px, 0 0`;

      cream.style.webkitMaskSize = sz;
      cream.style.maskSize = sz;
      cream.style.webkitMaskPosition = ps;
      cream.style.maskPosition = ps;
      cream.style.visibility = W > vw * 14 ? 'hidden' : 'visible';

      if (sin) {
        sin.style.transform = `scale(${1 + 0.12 * clamp((p - 0.2) / 0.5)})`;
      }

      if (hint) {
        hint.style.opacity = p < 0.04 ? '1' : '0';
      }

      // Reveal feature callouts one after one as user scrolls
      const thresholds = [0.5, 0.6, 0.7];
      thresholds.forEach((t, i) => {
        if (callouts[i]) {
          callouts[i].classList.toggle('on', p > t && p < 0.97);
        }
      });
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(draw);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', draw);
    draw();

    return () => {
      clearTimeout(goTimer);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', draw);
    };
  }, []);

  const handleScrollToExplore = () => {
    if (trackRef.current) {
      window.scrollBy({ top: window.innerHeight * 1.5, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-track track" id="track" ref={trackRef}>
      {/* Accessible testing elements */}
      <div
        className="hero-accessible-actions"
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: 0,
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border: 0,
        }}
      >
        <a
          data-testid="hero-download-app"
          href="https://play.google.com/store/apps/details?id=com.bijliride"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download App
        </a>
        <button
          data-testid="hero-get-started"
          onClick={() => {
            const el = document.getElementById('fleet');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Get Started
        </button>
      </div>

      <div className="pin" id="pin" ref={pinRef}>
        {/* Layer 1: Road & Landscape Scene */}
        <div className="scene">
          <div className="sin" id="sin" ref={sinRef}>
            {/* Speed streak lines */}
            <div className="lines" id="lines" ref={linesRef}></div>

            {/* Olive Green Scooter with ground shadow */}
            <div className="rider">
              <img
                className="sc hero-stage-scooter-img"
                src="/assets/hero/hero-scooter.png"
                alt="SancharSathi Electric Scooter"
                data-testid="hero-scooter-image"
              />
              <div className="gsh"></div>
            </div>
          </div>
        </div>

        {/* Layer 2: E V E Typographic Mask */}
        <div className="cream" id="cream" ref={creamRef}></div>

        {/* Layer 3: Sequential Feature Callouts */}
        <div className="co c1" ref={co1Ref}>
          <span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M13 3 5 14h6l-1 7 8-11h-6z" />
            </svg>
          </span>
          Quick, quiet electric ride for everyday trips
        </div>

        <div className="co c2" ref={co2Ref}>
          <span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path d="M14.5 9.5c-.6-.8-1.5-1.1-2.5-1.1-1.4 0-2.4.7-2.4 1.8 0 2.5 5 1.2 5 3.7 0 1.1-1.1 1.9-2.6 1.9-1 0-2-.4-2.6-1.2M12 6.5v1.9m0 7.2v1.9" />
            </svg>
          </span>
          Switch to electric and save on every ride
        </div>

        <div className="co c3" ref={co3Ref}>
          <span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m12 3 7 17-7-4-7 4z" />
            </svg>
          </span>
          Smart navigation and a reliable braking system
        </div>

        {/* Scroll hint indicator */}
        <div
          className="hint"
          id="hint"
          ref={hintRef}
          onClick={handleScrollToExplore}
          role="button"
          tabIndex={0}
          aria-label="Scroll to explore"
        >
          Scroll to explore<b></b>
        </div>
      </div>
    </section>
  );
}
