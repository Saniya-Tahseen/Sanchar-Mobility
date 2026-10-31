import React, { useState } from 'react';

const SERVICES_DATA = {
  'ev-rentals': {
    id: 'ev-rentals',
    title: 'EV Rentals',
    shortDesc: 'Flexible electric mobility plans',
    badge: 'FLEXIBLE MOBILITY',
    iconType: 'scooter',
    description:
      'Rent electric two-wheelers for daily commute, delivery work, or business fleet needs. Bijliride supports riders and enterprises with maintained vehicles, flexible rental models, and service assistance.',
    howItWorks: [
      { step: 1, label: 'Browse Fleet' },
      { step: 2, label: 'Choose Plan' },
      { step: 3, label: 'Activate Ride' },
      { step: 4, label: 'Return Vehicle' },
    ],
    whatYouGet: [
      'Flexible Plans',
      'GPS Tracking',
      '24/7 Customer support',
      'Ticketing Service',
      'Charging network',
      'Battery Swap stations',
    ],
    image: '/assets/services/ecosystem/ev-rentals.png',
    alt: 'EV Rentals platform with electric scooter and mobile application',
  },
  'battery-swapping': {
    id: 'battery-swapping',
    title: 'Battery Swapping',
    shortDesc: 'Quick battery exchange support',
    badge: 'QUICK EXCHANGE',
    iconType: 'swapping',
    description:
      'Battery swapping support helps riders and fleets continue operations with less dependency on long charging breaks. Availability may vary by city, vehicle type, and active service zone.',
    howItWorks: [
      { step: 1, label: 'Locate Station' },
      { step: 2, label: 'Dock Vehicle' },
      { step: 3, label: 'Swap Battery' },
      { step: 4, label: 'Resume Ride' },
    ],
    whatYouGet: [
      'Reduced Downtime',
      'Battery Swap Support',
      'Fleet Continuity',
      'Ticketing feature',
      'Access Wide Network',
    ],
    image: '/assets/services/ecosystem/battery-swapping.png',
    alt: 'Battery swapping station with electric scooter battery exchange',
  },
  'battery-delivery': {
    id: 'battery-delivery',
    title: 'Battery Delivery',
    shortDesc: 'On-demand battery support at your location',
    badge: 'ON-DEMAND SUPPORT',
    iconType: 'delivery',
    description:
      'On-road battery support for riders who are unable to reach a swap point or need battery assistance during active usage.',
    howItWorks: [
      { step: 1, label: 'Raise Ticket' },
      { step: 2, label: 'Team Assigned' },
      { step: 3, label: 'Battery Delivered' },
      { step: 4, label: 'Ride Continues' },
    ],
    whatYouGet: [
      'Reduced Downtime',
      'On-road Support',
      'Faster Resolution',
      'Ticketing feature',
      'Better Ride Continuity',
    ],
    image: '/assets/services/ecosystem/battery-delivery.png',
    alt: 'On-demand battery delivery support for riders on the road',
  },
  'vehicle-service': {
    id: 'vehicle-service',
    title: 'Vehicle Service',
    shortDesc: 'Maintenance and repair assistance',
    badge: 'MAINTENANCE',
    iconType: 'service',
    description:
      'Maintenance and repair support for Bijliride EVs to help riders reduce downtime and keep daily rides or delivery operations running smoothly.',
    howItWorks: [
      { step: 1, label: 'Raise Ticket' },
      { step: 2, label: 'Drop Vehicle' },
      { step: 3, label: 'Diagnostics Run' },
      { step: 4, label: 'Vehicle Ready' },
    ],
    whatYouGet: [
      'Certified Technicians',
      'OEM Parts',
      'Service History',
      'Vehicle Check-up',
      'Customer support',
    ],
    image: '/assets/services/ecosystem/vehicle-service.png',
    alt: 'Vehicle service maintenance station with diagnostic lift',
  },
  'on-road-assistance': {
    id: 'on-road-assistance',
    title: 'On-road Assistance',
    shortDesc: 'Help when issues happen on the road',
    badge: 'ROADSIDE ASSISTANCE',
    iconType: 'assistance',
    description:
      'Help when issues happen on the road. Round-the-clock emergency support, rapid roadside repair, and towing assistance for your electric scooter fleet.',
    howItWorks: [
      { step: 1, label: 'Raise Ticket' },
      { step: 2, label: 'Team Assigned' },
      { step: 3, label: 'On-site Fix' },
      { step: 4, label: 'Resume Ride' },
    ],
    whatYouGet: [
      '24/7 Availability',
      'Rapid Response',
      'On-spot Puncture & Mechanical',
      'Towing Support',
      'Rider Helpline',
    ],
    image: '/assets/services/ecosystem/on-road-assistance.png',
    alt: '24/7 on-road emergency breakdown assistance',
  },
  'charging-stations': {
    id: 'charging-stations',
    title: 'Charging Stations',
    shortDesc: 'Access nearby EV charging support',
    badge: 'CHARGING NETWORK',
    iconType: 'charging',
    description:
      'Access nearby EV charging support. Easily find and access nearby EV charging stations across key city hubs with our simple, user-friendly mobile application.',
    howItWorks: [
      { step: 1, label: 'Locate Station' },
      { step: 2, label: 'Reserve Slot' },
      { step: 3, label: 'Plug & Charge' },
      { step: 4, label: 'Pay & Go' },
    ],
    whatYouGet: [
      'Fast Charging',
      'Real-time Availability',
      'Universal Charging Plugs',
      'App Integration',
      '100% Green Energy',
    ],
    image: '/assets/services/ecosystem/charging-stations.png',
    alt: 'EV smart charging stations network',
  },
};

export default function Services({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('ev-rentals');

  const handleSelectService = (id) => {
    setActiveTab(id);
    setTimeout(() => {
      const el = document.getElementById('service-detail-panel');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 40);
  };

  const handleTalkToTeam = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (onNavigate) {
      onNavigate('home', 'contact');
    }
  };

  const handleViewDetails = () => {
    const el = document.getElementById('business') || document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentService = SERVICES_DATA[activeTab] || SERVICES_DATA['ev-rentals'];

  const renderIcon = (type) => {
    switch (type) {
      case 'scooter':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18.5" cy="17.5" r="3.5" />
            <circle cx="5.5" cy="17.5" r="3.5" />
            <circle cx="15" cy="5" r="1" />
            <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
          </svg>
        );
      case 'swapping':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="7" height="12" rx="1.5" />
            <path d="M4.5 4.5h2V7h-2z" />
            <rect x="15" y="7" width="7" height="12" rx="1.5" />
            <path d="M17.5 4.5h2V7h-2z" />
            <path d="M10 11h4m-1.5-2 2 2-2 2" />
            <path d="M14 15H10m1.5 2-2-2 2-2" />
          </svg>
        );
      case 'delivery':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="6" cy="18" r="2.5" />
            <circle cx="18" cy="18" r="2.5" />
            <path d="M6 18h2.5l3.5-7h5" />
            <path d="M17 11l1.5-5.5h-1.5" />
            <rect x="5.5" y="5.5" width="6.5" height="6.5" rx="1.5" />
            <path d="M8 9h1.5" />
            <path d="M8.7 5.5v-2" />
          </svg>
        );
      case 'service':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
        );
      case 'assistance':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        );
      case 'charging':
      default:
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21h12" />
            <path d="M5 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16" />
            <rect x="7" y="6" width="4" height="4.5" rx="0.5" />
            <path d="m9 7.5-1 1.5h2l-1 1.5" />
            <path d="M15 10.5h1.5a1.5 1.5 0 0 1 1.5 1.5v3a2 2 0 0 0 2 2 2 2 0 0 0 2-2V9a1.5 1.5 0 0 0-3 0v1.5" />
          </svg>
        );
    }
  };

  const renderSmallBadgeIcon = (type) => {
    switch (type) {
      case 'scooter':
        return (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18.5" cy="17.5" r="3" />
            <circle cx="5.5" cy="17.5" r="3" />
            <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
          </svg>
        );
      case 'swapping':
        return (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="7" width="6" height="11" rx="1" />
            <rect x="15" y="7" width="6" height="11" rx="1" />
            <path d="M10 12h4" />
          </svg>
        );
      case 'delivery':
        return (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="6" cy="18" r="2" />
            <circle cx="18" cy="18" r="2" />
            <path d="M6 18h2l3-6h5" />
          </svg>
        );
      case 'service':
        return (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
        );
      default:
        return (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        );
    }
  };

  return (
    <section id="services" className="services-ecosystem-section" data-testid="services-ecosystem">
      <div className="services-ecosystem-container">
        {/* Header */}
        <div className="services-ecosystem-header">
          <h2 className="services-ecosystem-title">
            A Fullstack Ecosystem For <span className="services-highlight-cyan">Electric</span>{' '}
            <span className="services-highlight-green">Mobility</span>
          </h2>
          <p className="services-ecosystem-subtitle">
            Integrated EV solutions for riders, businesses, and delivery partners. Built around rentals, support, charging,
            maintenance and reliable fleet operations.
          </p>
        </div>

        {/* 6 Interactive Service Buttons Grid (3x2) - As shown in Pic 1 */}
        <div className="services-buttons-grid" data-testid="services-buttons-grid">
          {Object.values(SERVICES_DATA).map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                className={`service-ecosystem-btn ${isActive ? 'is-active' : ''}`}
                data-testid={`service-btn-${item.id}`}
                onClick={() => handleSelectService(item.id)}
                aria-pressed={isActive}
              >
                <div className="service-btn-top-row">
                  <div className={`service-btn-icon-box ${isActive ? 'icon-box-active' : ''}`}>
                    {renderIcon(item.iconType)}
                  </div>
                  {isActive && (
                    <div className="service-btn-arrow-circle" aria-label="Selected">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="7" x2="17" y2="17" />
                        <polyline points="17 7 17 17 7 17" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="service-btn-text-content">
                  <h3 className="service-btn-title">{item.title}</h3>
                  <p className="service-btn-subtitle">{item.shortDesc}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Down of this 6 buttons: Dynamic Service Detail Panel (Pics 2, 3, 4, 5) */}
        <div id="service-detail-panel" className="service-detail-container" data-testid="service-detail-panel">
          <div className="service-detail-card">
            {/* Left Content Column */}
            <div className="service-detail-left-content">
              <div className="service-detail-badge-pill">
                <span className="detail-badge-icon">{renderSmallBadgeIcon(currentService.iconType)}</span>
                <span className="detail-badge-text">{currentService.badge}</span>
              </div>

              <h3 className="service-detail-main-title">{currentService.title}</h3>
              <p className="service-detail-main-desc">{currentService.description}</p>

              {/* How It Works */}
              <div className="service-detail-block">
                <span className="detail-block-title">HOW IT WORKS</span>
                <div className="detail-steps-flow">
                  {currentService.howItWorks.map((stepItem, idx) => (
                    <div key={idx} className="detail-step-node">
                      <div className="detail-step-bubble">{stepItem.step}</div>
                      <span className="detail-step-caption">{stepItem.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What You Get */}
              <div className="service-detail-block">
                <span className="detail-block-title">WHAT YOU GET</span>
                <div className="detail-pills-cluster">
                  {currentService.whatYouGet.map((pill, idx) => (
                    <div key={idx} className="detail-pill-tag">
                      <span className="detail-pill-bullet">•</span>
                      <span>{pill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="service-detail-cta-row">
                <button
                  type="button"
                  className="btn-detail-view-green"
                  onClick={handleViewDetails}
                  data-testid="btn-view-details"
                >
                  <span>View details below</span>
                  <span className="detail-arrow-down">↓</span>
                </button>
                <button
                  type="button"
                  className="btn-detail-talk-outline"
                  onClick={handleTalkToTeam}
                  data-testid="btn-detail-talk"
                >
                  <span>Talk to our team</span>
                </button>
              </div>
            </div>

            {/* Right Illustration Column */}
            <div className="service-detail-right-visual">
              <div className="service-illustration-frame">
                <img
                  src={currentService.image}
                  alt={currentService.alt}
                  className="service-illustration-asset"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
