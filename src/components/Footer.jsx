import React from 'react';
import { ArrowRight } from 'lucide-react';
import { trackEvent, getUTMLink } from '../utils/tracking';

const BrandMark = () => (
  <img
    src="/images/ricoai-logo.png"
    alt="Rico AI"
    className="h-7 w-auto object-contain"
  />
);

const Footer = () => {
  return (
    <footer className="relative z-10 mt-20 border-t border-rico-border/70">
      <section className="mx-4 md:mx-8 rounded-[2.5rem] border border-rico-border/40 bg-[linear-gradient(120deg,#4D7A62_0%,#7FAA90_42%,#9CAF88_70%,#D4A574_100%)] px-6 py-14 md:px-12 md:py-[4.4rem] text-white shadow-[0_24px_80px_-40px_rgba(45,74,58,0.5)]">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl md:text-6xl font-serif leading-[1.05]">
            Your clearest skin decisions
            <br />
            start with one scan.
          </h2>

          <div className="mt-5 flex flex-wrap justify-center gap-2 text-xs md:text-sm">
            <span className="rounded-full border border-white/45 bg-white/18 px-3 py-1 text-white/95">Acne + redness + barrier support</span>
            <span className="rounded-full border border-white/45 bg-white/18 px-3 py-1 text-white/95">Ingredient clarity in seconds</span>
            <span className="rounded-full border border-white/45 bg-white/18 px-3 py-1 text-white/95">No medical claims</span>
          </div>

          <a
            href={getUTMLink('footer_cta')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('cta_click_app_store', { location: 'footer' })}
            className="group mx-auto mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-rico-primary font-semibold shadow-lg transition hover:scale-[1.02]"
          >
            Start your first scan (iOS)
            <ArrowRight size={18} className="transition group-hover:translate-x-0.5" />
          </a>

          <p className="mt-4 text-xs text-white/80">
            Rico AI provides esthetician-informed guidance, not medical diagnosis or treatment.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-10 mb-12 max-w-6xl px-6 md:px-8">
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row text-sm text-rico-text">
          <div className="flex items-center font-medium text-rico-primary">
            <BrandMark />
          </div>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/ricoai.app/" target="_blank" rel="noopener noreferrer" className="hover:text-rico-primary">Instagram</a>
            <a href="https://www.tiktok.com/@ricoai_" target="_blank" rel="noopener noreferrer" className="hover:text-rico-primary">TikTok</a>
            <a href="https://www.youtube.com/@rico-ai-app" target="_blank" rel="noopener noreferrer" className="hover:text-rico-primary">YouTube</a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
