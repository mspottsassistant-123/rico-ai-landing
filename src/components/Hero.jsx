import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScanFace } from 'lucide-react';
import { trackEvent, getUTMLink } from '../utils/tracking';

const Hero = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (!prefersReducedMotion) {
        gsap
          .timeline({ defaults: { ease: 'power3.out' } })
          .from('.hero-left > *', {
            y: 32,
            opacity: 0,
            stagger: 0.1,
            duration: 0.95,
            delay: 0.08,
          })
          .from(
            '.hero-right',
            {
              opacity: 0,
              scale: 0.96,
              y: 18,
              duration: 1.1,
            },
            '-=0.7',
          );
      } else {
        gsap.set(['.hero-left > *', '.hero-right'], { opacity: 1, y: 0, scale: 1 });
      }
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={comp} className="relative w-full min-h-[100dvh] overflow-hidden flex items-center pt-24 pb-12 px-6 md:px-12">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(118deg,#F7F3E9_0%,#EAF3EA_38%,#DDEBE3_66%,#D4A574_115%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_24%,rgba(45,74,58,0.22)_0%,rgba(45,74,58,0)_48%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_14%,rgba(156,175,136,0.34)_0%,rgba(156,175,136,0)_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_78%,rgba(212,165,116,0.33)_0%,rgba(212,165,116,0)_44%)]" />
        <div className="absolute -top-24 -left-20 h-[30rem] w-[30rem] rounded-full bg-white/55 blur-[110px]" />
        <div className="absolute bottom-[-8rem] right-[-5rem] h-[34rem] w-[34rem] rounded-full bg-[#9CAF88]/20 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(247,243,233,0)_72%,rgba(247,243,233,0.95)_100%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(45,74,58,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(45,74,58,0.35)_1px,transparent_1px)] [background-size:56px_56px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-14 lg:gap-8 hero-content">
        <div className="w-full lg:w-[56%] flex flex-col items-start hero-left mt-8 lg:mt-0">
          <p className="mb-5 inline-flex items-center rounded-full border border-rico-primary/20 bg-white/65 px-4 py-2 text-[11px] font-mono uppercase tracking-[0.22em] text-rico-primary/85">
            Rico AI • scan before you buy
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-serif text-rico-primary leading-[1.02] tracking-tight mb-6 max-w-3xl">
            Stop guessing.
            <br className="hidden md:block" />
            <span className="text-rico-primary/95">Know what your skin can handle.</span>
          </h1>

          <p className="text-lg md:text-xl text-rico-text max-w-xl mb-9 font-normal font-sans leading-relaxed">
            Scan any label, get your personalized <strong className="font-semibold text-rico-primary">Skin Safe Score</strong>, and move to safer swaps in seconds.
          </p>

          <div className="flex flex-col w-full sm:w-auto items-start gap-5">
            <a
              href={getUTMLink('hero_primary_cta')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-rico-primary text-white px-8 py-5 rounded-full font-medium text-lg magnetic-btn flex items-center justify-center gap-3 shadow-xl shadow-rico-primary/20"
              onClick={() => trackEvent('cta_click_app_store', { location: 'hero' })}
            >
              <span className="relative z-10">Download Rico AI on App Store</span>
              <div className="btn-layer" />
            </a>

            <p className="text-sm text-rico-primary/75 font-medium">Free to start. Built for daily use.</p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm text-rico-primary/75 font-medium">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rico-accent opacity-90" />
                Esthetician-informed logic
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rico-accent opacity-90" />
                Instant ingredient clarity
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rico-accent opacity-90" />
                One scan to start
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[40%] hero-right hidden md:flex justify-end">
          <div className="relative w-full max-w-[450px] rounded-[2.5rem] border border-white/70 bg-white/55 p-5 shadow-[0_25px_70px_-20px_rgba(34,60,47,0.32)] backdrop-blur-2xl">
            <div className="absolute -inset-[1px] rounded-[2.5rem] bg-[linear-gradient(140deg,rgba(45,74,58,0.35),rgba(156,175,136,0.28),rgba(212,165,116,0.3))] -z-10 blur-[2px]" />
            <div className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full border border-rico-primary/10 bg-white/75 px-3 py-1 text-[10px] font-mono tracking-wider text-rico-primary/80">
              <ScanFace size={12} />
              Live scan preview
            </div>
            <img
              src="/images/hero-mockups.png"
              alt="Rico AI app mockups"
              className="h-full w-full rounded-[2rem] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
