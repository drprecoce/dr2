import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PainSection from './components/PainSection';
import UrgencySection from './components/UrgencySection';
import SolutionSection from './components/SolutionSection';
import TestimonialsSection from './components/TestimonialsSection';
import BonusSection from './components/BonusSection';
import OfferSection from './components/OfferSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-custom-black text-white font-montserrat">
      <Header />
      <HeroSection />
      <PainSection />
      <UrgencySection />
      <SolutionSection />
      <TestimonialsSection />
      <BonusSection />
      <OfferSection />
      <FaqSection />
      <Footer />
    </div>
  );
}

export default App;