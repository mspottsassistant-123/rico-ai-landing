import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { trackEvent, getUTMLink } from '../utils/tracking';

gsap.registerPlugin(ScrollTrigger);

const concerns = [
  {
    lane: 'Acne-Prone',
    pain: 'Breakouts from “clean” products?',
    relief: 'Rico AI flags pore-cloggers so you can choose acne-safer options faster.',
    action: 'Scan for pore triggers',
    image: '/images/glow-client-1-before.jpg',
    tone: 'from-[#EEFFF4] via-[#CCF5E2] to-[#7FD3B3]',
  },
  {
    lane: 'Sensitive & Redness',
    pain: 'Everything stings or leaves you flushed?',
    relief: 'Spot hidden irritants and move to calmer picks in one scan.',
    action: 'Scan for irritants',
    image: '/images/glow-client-la.jpg',
    tone: 'from-[#FFF5EC] via-[#FFDCD1] to-[#E8A4AE]',
  },
  {
    lane: 'Dry Barrier',
    pain: 'Hydration not lasting?',
    relief: 'Find barrier-supportive formulas that help your skin hold moisture.',
    action: 'Find barrier-safe hydration',
    image: '/images/glow-client-2-before.jpg',
    tone: 'from-[#FFF9EE] via-[#FFE7C0] to-[#E0BA78]',
  },
  {
    lane: 'Combo & Oily',
    pain: 'Oily T-zone + dry cheeks?',
    relief: 'Balance shine and barrier with lightweight, skin-compatible swaps.',
    action: 'Find balanced swaps',
    image: '/images/glow-client-c.jpg',
    tone: 'from-[#F2F9FF] via-[#CAE9FF] to-[#8BC5F4]',
  },
  {
    lane: 'Hyperpigmentation',
    pain: 'Dark spots fading too slowly?',
    relief: 'Scan for spot-safe ingredients and avoid formulas that stall progress.',
    action: 'Scan for brightening-safe actives',
    image: '/images/glow-client-sofia.jpg',
    tone: 'from-[#F7F3FF] via-[#E3D4FF] to-[#BCA2F6]',
  },
  {
    lane: 'Wrinkles & Aging',
    pain: 'Fine lines + sensitivity at the same time?',
    relief: 'Choose gentler anti-aging formulas without overwhelming your barrier.',
    action: 'Scan for age-smart formulas',
    image: '/images/glow-client-e.jpg',
    tone: 'from-[#F3FFF9] via-[#D2F3E5] to-[#8AD0B8]',
  },
];

const ConcernLanes = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.concern-card', {
        scrollTrigger: {
          trigger: '.concerns-container',
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={comp}
      id="concerns"
      className="py-28 px-6 md:px-12 max-w-7xl mx-auto w-full concerns-container border-t border-rico-border"
    >
      <div className="mb-16 md:mb-20">
        <h2 className="text-4xl md:text-5xl text-rico-primary mb-5">Designed for every skin concern you live with.</h2>
        <p className="text-rico-text max-w-3xl text-lg">
          Rico AI helps health-conscious and reactive-skin users make safer skincare decisions with concern-specific clarity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {concerns.map((concern, idx) => (
          <article
            key={concern.lane}
            className="concern-card rounded-3xl border border-rico-border/70 bg-white/85 backdrop-blur-md overflow-hidden shadow-[0_18px_48px_-26px_rgba(45,74,58,0.35)] hover:-translate-y-1 transition-transform duration-300"
          >
            <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${concern.tone}`}>
              <img
                src={concern.image}
                alt={`${concern.lane} skin concern example`}
                className="h-full w-full object-cover mix-blend-multiply opacity-90"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rico-primary/30 via-transparent to-transparent" />
              <div className="absolute left-4 top-4 h-9 w-9 rounded-full bg-white/80 border border-rico-border text-rico-primary flex items-center justify-center font-serif text-sm">
                {idx + 1}
              </div>
            </div>

            <div className="p-6 md:p-7 flex flex-col min-h-[250px]">
              <h3 className="text-2xl font-serif text-rico-primary mb-2">{concern.lane}</h3>
              <p className="text-rico-text font-medium text-sm mb-2">{concern.pain}</p>
              <p className="text-rico-text/80 text-sm leading-relaxed mb-6 flex-grow">{concern.relief}</p>

              <a
                href={getUTMLink(`concern_${concern.lane.toLowerCase().replace(/[^a-z0-9]/g, '_')}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-rico-primary hover:text-rico-accent transition-colors font-medium text-sm border-b border-rico-primary/30 hover:border-rico-accent pb-1"
                onClick={() => trackEvent('cta_click_app_store', { location: 'concern_lane', concern: concern.lane })}
              >
                {concern.action} &rarr;
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ConcernLanes;
