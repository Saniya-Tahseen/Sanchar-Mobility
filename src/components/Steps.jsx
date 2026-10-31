import React, { useState, useEffect, useRef } from 'react';

export default function Steps() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);
  const timerRef = useRef(null);
  const userInteractedRef = useRef(false);

  const stepsData = [
    {
      id: 0,
      title: 'Download the App',
      desc: 'Available on the Play Store',
      inactiveGradient: 'linear-gradient(135deg, #7dd3fc, #38bdf8)',
      activeGradient: 'linear-gradient(135deg, #00b4d8, #0284c7)',
      shadow: '0 12px 28px rgba(2, 132, 199, 0.48)',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      ),
      screenAlt: 'Download the App',
      screenSrc: '/assets/app-screens/download.png'
    },
    {
      id: 1,
      title: 'Complete Your Verification',
      desc: 'Register and complete your KYC.',
      inactiveGradient: 'linear-gradient(135deg, #86efac, #22c55e)',
      activeGradient: 'linear-gradient(135deg, #10b981, #059669)',
      shadow: '0 12px 28px rgba(16, 185, 129, 0.48)',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="4" width="18" height="16" rx="3" />
          <circle cx="9" cy="10" r="2.5" />
          <line x1="15" y1="9" x2="19" y2="9" />
          <line x1="15" y1="13" x2="19" y2="13" />
          <line x1="6" y1="17" x2="18" y2="17" />
        </svg>
      ),
      screenAlt: 'Complete Your Verification',
      screenSrc: '/assets/app-screens/verify.png'
    },
    {
      id: 2,
      title: 'Make a Choice',
      desc: 'Pick your plan and preferred EV.',
      inactiveGradient: 'linear-gradient(135deg, #fde047, #f59e0b)',
      activeGradient: 'linear-gradient(135deg, #fbbf24, #d97706)',
      shadow: '0 12px 28px rgba(245, 158, 11, 0.48)',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="18" r="3" />
          <path d="M6 18h4l3-9h5" />
          <path d="M16 9h3" />
          <circle cx="18" cy="6" r="1.5" />
        </svg>
      ),
      screenAlt: 'Make a Choice',
      screenSrc: '/assets/app-screens/customer.jpeg'
    },
    {
      id: 3,
      title: 'Start your Ride!',
      desc: "Explore your savings. It's that simple.",
      inactiveGradient: 'linear-gradient(135deg, #5eead4, #14b8a6)',
      activeGradient: 'linear-gradient(135deg, #2dd4bf, #0d9488)',
      shadow: '0 12px 28px rgba(20, 184, 166, 0.48)',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 19L9 5" />
          <path d="M20 19L15 5" />
          <line x1="12" y1="7" x2="12" y2="10" strokeDasharray="2 2" />
          <line x1="12" y1="14" x2="12" y2="17" strokeDasharray="2 2" />
        </svg>
      ),
      screenAlt: 'Start your Ride!',
      screenSrc: '/assets/app-screens/screen4.jpeg'
    }
  ];

  // Handle user click: cancels autoplay immediately and opens the corresponding screen
  const handleStepClick = (idx) => {
    userInteractedRef.current = true;
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setActiveStep(idx);
  };

  // Autoplay sequence: plays one after other for once when user views the section
  useEffect(() => {
    let stepIndex = 0;
    const stepDuration = 2500; // 2.5 seconds per step

    const runAutoplay = () => {
      if (userInteractedRef.current) return;

      const scheduleNext = () => {
        timerRef.current = setTimeout(() => {
          if (userInteractedRef.current) return;
          stepIndex += 1;
          if (stepIndex < stepsData.length) {
            setActiveStep(stepIndex);
            scheduleNext();
          } else {
            // Completed all steps: go back to Step 1 (index 0) and stop
            setActiveStep(0);
            userInteractedRef.current = true;
            timerRef.current = null;
          }
        }, stepDuration);
      };

      scheduleNext();
    };

    if (typeof IntersectionObserver !== 'undefined' && sectionRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !userInteractedRef.current) {
              runAutoplay();
              observer.disconnect();
            }
          });
        },
        { threshold: 0.2 }
      );
      observer.observe(sectionRef.current);
      return () => {
        observer.disconnect();
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    } else {
      runAutoplay();
      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }
  }, [stepsData.length]);

  return (
    <section className="appsection" id="app" data-testid="appsection" ref={sectionRef}>
      <div className="container appsection__container">
        {/* Centered Header */}
        <div className="appsection__header">
          <h2 className="appsection__title">Ride with Sanchar Mobility in 4 easy steps</h2>
          <p className="appsection__subtitle">
            Your all-in-one app to book EVs, find chargers, track rides, get support, and manage personal or fleet accounts seamlessly.
          </p>
        </div>

        {/* 2-Column Layout: Aligned at top so step 1 starts at top of phone */}
        <div className="appsection__grid">
          {/* Left Column: Connected Vertical Steps */}
          <div className="appsection__left">
            <div className="appsection__steps">
              {stepsData.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div
                    key={step.id}
                    className={`appsection__step-wrapper ${isActive ? 'is-active' : ''}`}
                    onClick={() => handleStepClick(idx)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handleStepClick(idx);
                      }
                    }}
                    aria-label={`Step ${idx + 1}: ${step.title}`}
                  >
                    <div className="appsection__step-icon-col">
                      <button
                        type="button"
                        className="appsection__step-icon-wrap"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleStepClick(idx);
                        }}
                        style={{
                          background: isActive ? step.activeGradient : step.inactiveGradient,
                          boxShadow: isActive ? step.shadow : '0 2px 8px rgba(0, 0, 0, 0.04)'
                        }}
                        aria-label={step.title}
                      >
                        {step.icon}
                      </button>

                      {/* Dashed connector line between icon circles (strictly between steps, never inside icons) */}
                      {idx < stepsData.length - 1 && (
                        <div className="appsection__step-connector" aria-hidden="true" />
                      )}
                    </div>
                    <div className="appsection__step-text">
                      <h3 className="appsection__step-title">{step.title}</h3>
                      <p className="appsection__step-desc">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Phone Mockup & Backdrop */}
          <div className="appsection__right">
            {/* Circular Backdrop & Decorative Stars */}
            <div className="appsection__backdrop" aria-hidden="true">
              <div className="backdrop-star star-left"></div>
              <div className="backdrop-star star-right"></div>
            </div>

            {/* Smartphone Mockup */}
            <div className={`appsection__phone appsection__phone--screen-${activeStep}`}>
              <div className="appsection__screen-bezel">
                <img
                  src="/assets/app-section/notch.svg"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="appsection__phone-speaker"
                />
                <div className="appsection__screen-stack">
                  {stepsData.map((step, idx) => (
                    <img
                      key={step.id}
                      src={step.screenSrc}
                      loading="eager"
                      alt={step.screenAlt}
                      className={`appsection__phone-screen ${activeStep === idx ? 'is-active' : ''}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
