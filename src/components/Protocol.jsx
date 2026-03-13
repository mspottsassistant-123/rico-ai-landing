import React, { useState } from 'react';
import { ScanFace, Sparkles, Globe2, Activity } from 'lucide-react';
import { trackEvent, getUTMLink } from '../utils/tracking';

const cards = [
  {
    id: '01',
    key: 'scan',
    title: 'AI skincare ingredient scanner',
    body: 'Scan one label and instantly see what may help or hurt your skin.',
    next: 'Try the scan step',
    Icon: ScanFace,
  },
  {
    id: '02',
    key: 'swaps',
    title: 'Esthetician-approved swaps',
    body: 'Get cleaner options that fit your budget, starting with core essentials.',
    next: 'See safer swaps',
    Icon: Sparkles,
  },
  {
    id: '03',
    key: 'translation',
    title: 'Worldwide label translation',
    body: 'Decode ingredients across languages so you can shop with confidence anywhere.',
    next: 'Translate a label',
    Icon: Globe2,
  },
  {
    id: '04',
    key: 'habit',
    title: 'Sustainable habit tracking',
    body: 'Build simple streaks so better skin becomes your normal, not a phase.',
    next: 'Start your first streak',
    Icon: Activity,
  },
];

const Protocol = () => {
  const [active, setActive] = useState('01');

  return (
    <section id="protocol" className="py-24 px-6 md:px-12 max-w-6xl mx-auto w-full border-t border-rico-border/90">
      <div className="mb-10 md:mb-12">
        <p className="text-[11px] uppercase tracking-[0.22em] font-mono text-rico-primary/70 mb-3">Protocol</p>
        <h2 className="text-4xl md:text-5xl font-serif text-rico-primary mb-4">How Rico AI helps you choose better, faster.</h2>
        <p className="text-rico-text text-lg max-w-3xl">One clear loop: scan, understand, choose safer, repeat with confidence.</p>
      </div>

      <div className="grid gap-4">
        {cards.map((card) => {
          const Icon = card.Icon;
          const isActive = active === card.id;

          return (
            <article
              key={card.id}
              className={`rounded-[2rem] border transition-all duration-200 ${
                isActive
                  ? 'border-rico-primary/30 bg-white shadow-[0_14px_40px_-28px_rgba(45,74,58,0.35)]'
                  : 'border-rico-border/80 bg-white'
              }`}
            >
              <button
                className="w-full text-left p-6 md:p-8"
                onClick={() => {
                  setActive(card.id);
                  trackEvent('protocol_step_view', { step_id: card.id, step_key: card.key, interaction: 'click' });
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-[1fr_220px] items-center gap-8">
                  <div>
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-rico-border bg-[#F7F3E9] text-rico-primary mb-4">
                      <Icon size={18} />
                    </div>
                    <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-rico-primary/55 mb-2">[{card.id}]</p>
                    <h3 className="text-3xl md:text-[2.2rem] leading-[1.08] font-serif text-rico-primary mb-3">{card.title}</h3>
                    <p className="text-rico-text text-lg leading-relaxed max-w-xl">{card.body}</p>

                    {isActive && (
                      <a
                        href={getUTMLink(`protocol_${card.key}_cta`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-2 rounded-full bg-rico-primary px-5 py-2.5 text-sm font-medium text-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          trackEvent('protocol_step_cta_click', { step_id: card.id, step_key: card.key });
                        }}
                      >
                        {card.next}
                      </a>
                    )}
                  </div>

                  <div className="hidden md:flex items-center justify-end">
                    <div className="h-28 w-28 rounded-full border border-rico-border/70 bg-[#F7F3E9]" />
                  </div>
                </div>
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Protocol;
