import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Marquee from './components/Marquee';
import Fleet from './components/Fleet';
import WhyUs from './components/WhyUs';
import Partners from './components/Partners';
import Steps from './components/Steps';
import Services from './components/Services';
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

  return (
    <div className="site-shell">
      <Header />
      <main id="top">
        <Hero selectedModel={selectedModel} onSelectModel={handleSelectModel} />
        <Stats />
        <Marquee />
        <Fleet onSelectModel={handleSelectModel} />
        <WhyUs />
        <Partners />
        <Steps />
        <Services />
        <Business />
        <ChargingPlatform />
        <ImpactCalculator />
        <AboutUs />
        <Testimonials />
        <Cities />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
