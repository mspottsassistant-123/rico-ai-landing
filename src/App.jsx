import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import MobileStickyCTA from './components/MobileStickyCTA';
import FAQ from './components/FAQ';
import ProofStrip from './components/ProofStrip';
import ConcernLanes from './components/ConcernLanes';
import { trackEvent } from './utils/tracking';

function App() {

  useEffect(() => {
    trackEvent('landing_page_view', { origin: document.referrer });
  }, []);

  return (
    <div className="relative min-h-screen bg-rico-bg text-rico-primary font-sans">
      {/* Global SVG Noise Overlay */}
      <div className="noise-overlay"></div>

      <Navbar />
      <CookieBanner />

      <main>
        <Hero />
        <ProofStrip />
        <Features />
        <ConcernLanes />
        <Philosophy />
        <Protocol />
        <FAQ />
      </main>

      <MobileStickyCTA />
      <Footer />
    </div>
  );
}

export default App;
