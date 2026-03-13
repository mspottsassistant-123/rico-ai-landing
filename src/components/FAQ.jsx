import React, { useState } from 'react';
import { trackEvent, getUTMLink } from '../utils/tracking';

const QA = ({ q, a, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-rico-border/80 py-6">
      <button
        className="w-full flex justify-between items-center text-left gap-6"
        onClick={() => {
          const nextState = !open;
          setOpen(nextState);
          if (nextState) trackEvent('faq_opened', { question: q, index });
        }}
      >
        <h4 className="text-xl font-serif text-rico-primary">{q}</h4>
        <span className="text-rico-accent text-2xl leading-none">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="mt-4 text-rico-text leading-relaxed text-lg max-w-2xl">{a}</div>}
    </div>
  );
};

const fitPoints = [
  {
    title: 'If your skin feels unpredictable',
    body: 'Scan one label and see what may be helping or hurting your skin.',
  },
  {
    title: 'If routines feel overwhelming',
    body: 'Start small: one scan, one clearer choice.',
  },
  {
    title: 'If shopping feels risky',
    body: 'Check labels first so checkout feels calmer and smarter.',
  },
];

const FAQ = () => {
  return (
    <section className="relative z-20 py-24 pb-8 px-6 md:px-12 max-w-6xl mx-auto border-t border-rico-border mt-28 bg-transparent">
      <div className="max-w-3xl mb-14">
        <h2 className="text-4xl md:text-5xl font-serif text-rico-primary mb-4">Questions, answered clearly.</h2>
        <p className="text-rico-text text-lg">Everything you need to decide quickly and start with confidence.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
        <div className="space-y-2">
          <QA
            index={1}
            q="Is Rico AI available on Android?"
            a="Currently Rico AI is iOS-only. We are focused on making the iPhone experience world-class first."
          />
          <QA
            index={2}
            q="How fast does the first scan work?"
            a="Usually in seconds. Scan the label, get your Skin Safe Score, and choose your next step with clarity."
          />
          <QA
            index={3}
            q="Does it help with acne, redness, dark spots, and barrier stress?"
            a="Yes. Rico AI is built for real concern lanes so you can quickly identify potential triggers and safer options."
          />
          <QA
            index={4}
            q="Is this medical advice?"
            a="No. Rico AI provides esthetician-informed ingredient guidance and is not a medical diagnosis tool."
          />
        </div>

        <aside className="rounded-[2rem] border border-rico-border bg-[linear-gradient(145deg,#F2ECFF_0%,#E8F3EA_55%,#F7F3E9_100%)] p-6 md:p-7 shadow-[0_20px_55px_-30px_rgba(45,74,58,0.35)]">
          <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-rico-primary/65 mb-3">Is Rico AI right for me?</p>
          <h3 className="text-3xl font-serif text-rico-primary mb-3">If skincare feels confusing, this gets easier fast.</h3>
          <p className="text-rico-text mb-6">No full routine reset needed. Start with one scan and make one smarter choice today.</p>

          <div className="grid gap-3 mb-6">
            {fitPoints.map((point) => (
              <div key={point.title} className="rounded-2xl border border-rico-border/70 bg-white/75 p-4">
                <p className="text-sm font-semibold text-rico-primary mb-1">{point.title}</p>
                <p className="text-sm text-rico-text/85 leading-relaxed">{point.body}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 text-[11px] font-medium text-rico-primary/75 mb-5">
            <span className="rounded-full bg-white/70 border border-rico-border px-3 py-1">Esthetician-informed</span>
            <span className="rounded-full bg-white/70 border border-rico-border px-3 py-1">No guesswork</span>
            <span className="rounded-full bg-white/70 border border-rico-border px-3 py-1">Start with one scan</span>
          </div>

          <a
            href={getUTMLink('faq_primary_cta')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex justify-center items-center rounded-full bg-rico-primary px-6 py-4 text-white font-medium magnetic-btn"
            onClick={() => trackEvent('faq_cta_click', { location: 'faq' })}
          >
            <span className="relative z-10">Start your first scan (iOS)</span>
            <div className="btn-layer" />
          </a>
        </aside>
      </div>
    </section>
  );
};

export default FAQ;
