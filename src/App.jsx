import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import { trackEvent } from './utils/tracking';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function HomePage() {
  useEffect(() => {
    trackEvent('landing_page_view', { origin: document.referrer });
  }, []);

  return (
    <>
      <Hero />
      <ProofStrip />
      <Features />
      <ConcernLanes />
      <Philosophy />
      <Protocol />
      <FAQ />
      <MobileStickyCTA />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-rico-bg text-rico-primary font-sans">
        {/* Global SVG Noise Overlay */}
        <div className="noise-overlay"></div>

        <Navbar />
        <CookieBanner />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
