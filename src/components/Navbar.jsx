import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { trackEvent, getUTMLink } from '../utils/tracking';

const RicoLogo = () => (
  <img src="/images/ricoai-logo.png" alt="Rico AI" className="h-7 w-auto object-contain" />
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isBlogPage = location.pathname.startsWith('/blog');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-full px-5 md:px-6 py-3 flex items-center justify-between gap-7 md:gap-10 ${
          scrolled
            ? 'bg-white/88 backdrop-blur-xl border border-rico-border shadow-lg'
            : 'bg-white/72 backdrop-blur-md border border-white/80 shadow-[0_12px_40px_-24px_rgba(45,74,58,0.55)]'
        }`}
      >
        <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
          <RicoLogo />
        </Link>

        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-rico-text">
          {isBlogPage ? (
            <>
              <Link to="/" className="hover:text-rico-primary transition-colors hover-lift">Home</Link>
              <Link to="/blog" className="hover:text-rico-primary transition-colors hover-lift">Library</Link>
            </>
          ) : (
            <>
              <a href="#features" className="hover:text-rico-primary transition-colors hover-lift">Features</a>
              <a href="#concerns" className="hover:text-rico-primary transition-colors hover-lift">Skin concerns</a>
              <a href="#philosophy" className="hover:text-rico-primary transition-colors hover-lift">Philosophy</a>
              <a href="#protocol" className="hover:text-rico-primary transition-colors hover-lift">Protocol</a>
              <Link to="/blog" className="hover:text-rico-primary transition-colors hover-lift">Library</Link>
            </>
          )}
        </div>

        <a
          href={getUTMLink('navbar_cta')}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('cta_click_app_store', { location: 'navbar' })}
          className="hidden md:block bg-rico-primary text-white px-5 py-2 rounded-full font-medium text-sm magnetic-btn border border-rico-primary/20"
        >
          <span className="relative z-10">Download on iOS</span>
          <div className="btn-layer" />
        </a>

        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-rico-primary" 
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="absolute inset-0 bg-rico-primary/20 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute top-24 left-4 right-4 bg-white rounded-3xl shadow-2xl p-6 border-2 border-rico-border">
            <div className="flex flex-col gap-4">
              {isBlogPage ? (
                <>
                  <Link 
                    to="/" 
                    className="text-lg font-medium text-rico-primary hover:text-rico-sage transition-colors py-2"
                  >
                    Home
                  </Link>
                  <Link 
                    to="/blog" 
                    className="text-lg font-medium text-rico-primary hover:text-rico-sage transition-colors py-2"
                  >
                    Library
                  </Link>
                </>
              ) : (
                <>
                  <a 
                    href="#features" 
                    className="text-lg font-medium text-rico-primary hover:text-rico-sage transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Features
                  </a>
                  <a 
                    href="#concerns" 
                    className="text-lg font-medium text-rico-primary hover:text-rico-sage transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Skin concerns
                  </a>
                  <a 
                    href="#philosophy" 
                    className="text-lg font-medium text-rico-primary hover:text-rico-sage transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Philosophy
                  </a>
                  <a 
                    href="#protocol" 
                    className="text-lg font-medium text-rico-primary hover:text-rico-sage transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Protocol
                  </a>
                  <Link 
                    to="/blog" 
                    className="text-lg font-medium text-rico-primary hover:text-rico-sage transition-colors py-2"
                  >
                    Library
                  </Link>
                </>
              )}
              
              <div className="pt-4 border-t border-rico-border">
                <a
                  href={getUTMLink('mobile_menu_cta')}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('cta_click_app_store', { location: 'mobile_menu' })}
                  className="block w-full text-center bg-rico-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-[#2D4A3A] transition-colors"
                >
                  Download on iOS
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
