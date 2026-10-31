import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Fleet from './components/Fleet';
import WhyUs from './components/WhyUs';
import Partners from './components/Partners';
import Steps from './components/Steps';
import HomeServices from './components/HomeServices';
import ServicesPage from './components/ServicesPage';
import Business from './components/Business';
import ChargingPlatform from './components/ChargingPlatform';
import ImpactCalculator from './components/ImpactCalculator';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import Cities from './components/Cities';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [selectedModel, setSelectedModel] = useState('green');
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== 'undefined' && window.location.hash.toLowerCase().includes('services')) {
      return 'services';
    }
    return 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash.toLowerCase().includes('services')) {
        setCurrentPage('services');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    // Service grid card selection click logic
    const handleServiceCardClick = (e) => {
      const card = e.target.closest('.service-card');
      if (!card) return;
      const grid = card.closest('.service-grid');
      if (!grid) return;
      const cards = grid.querySelectorAll('.service-card');
      cards.forEach((c) => {
        c.classList.remove('is-highlighted', 'is-active');
      });
      card.classList.add('is-highlighted');
    };

    document.addEventListener('click', handleServiceCardClick);
    return () => document.removeEventListener('click', handleServiceCardClick);
  }, []);

  const handleSelectModel = (model) => {
    setSelectedModel(model);
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNavigate = (page, sectionId = null) => {
    setCurrentPage(page);
    if (page === 'services') {
      window.location.hash = '#services';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (window.location.hash.toLowerCase().includes('services')) {
        try {
          window.history.pushState(null, '', window.location.pathname);
        } catch {
          window.location.hash = '';
        }
      }
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="site-shell">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main id="top">
        {currentPage === 'services' ? (
          <ServicesPage onNavigate={handleNavigate} />
        ) : (
          <>
            <Hero />
            <Marquee />
            <Fleet onSelectModel={handleSelectModel} />
            <WhyUs />
            <Partners />
            <Steps />
            <HomeServices onNavigate={handleNavigate} />
            <Business />
            <ChargingPlatform />
            <ImpactCalculator />
            <AboutUs />
            <Testimonials />
            <Cities />
            <Contact />
          </>
        )}
      </main>
      <Footer onNavigate={handleNavigate} />
      <FloatingActions />
    </div>
  );
}
