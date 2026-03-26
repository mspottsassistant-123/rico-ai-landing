import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { trackEvent, getUTMLink } from '../utils/tracking';

const BrandMark = () => (
  <img
    src="/images/ricoai-logo.png"
    alt="Rico AI"
    className="h-8 w-auto object-contain"
  />
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isBlogPage = location.pathname.startsWith('/blog');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-full px-5 md:px-6 py-3 flex items-center justify-between gap-7 md:gap-10 ${
        scrolled
          ? 'bg-white/88 backdrop-blur-xl border border-rico-border shadow-lg'
          : 'bg-white/72 backdrop-blur-md border border-white/80 shadow-[0_12px_40px_-24px_rgba(45,74,58,0.55)]'
      }`}
    >
      <Link to="/" className="flex items-center gap-2 text-rico-primary hover:opacity-90 transition-opacity">
        <SwanBadge />
        <div className="font-serif text-xl font-semibold tracking-wide flex-shrink-0">
          Rico AI<span className="text-rico-accent">.</span>
        </div>
      </Link>


      <div className="hidden md:flex items-center gap-7 text-sm font-medium text-rico-text">
        {isBlogPage ? (
          <>
            <Link to="/" className="hover:text-rico-primary transition-colors hover-lift">Home</Link>
            <Link to="/blog" className="hover:text-rico-primary transition-colors hover-lift">Blog</Link>
          </>
        ) : (
          <>
            <a href="#features" className="hover:text-rico-primary transition-colors hover-lift">Features</a>
            <a href="#concerns" className="hover:text-rico-primary transition-colors hover-lift">Skin concerns</a>
            <a href="#philosophy" className="hover:text-rico-primary transition-colors hover-lift">Philosophy</a>
            <a href="#protocol" className="hover:text-rico-primary transition-colors hover-lift">Protocol</a>
            <Link to="/blog" className="hover:text-rico-primary transition-colors hover-lift">Blog</Link>
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

      <button className="md:hidden text-rico-primary" aria-label="Open menu">
        <Menu size={24} />
      </button>
    </nav>
  );
};

export default Navbar;
