import React from 'react';

const ITEMS = [
  'Scan before you buy',
  'Acne + redness + barrier support',
  'Ingredient clarity in seconds',
  'Personalized Skin Safe Score',
  'Safer swaps, less guessing',
  'Built for sensitive skin',
];

const ProofStrip = () => {
  return (
    <div className="relative w-full overflow-hidden border-y border-rico-primary/20 bg-[linear-gradient(95deg,#2D4A3A_0%,#9CAF88_45%,#D4A574_100%)] py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#2D4A3A] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#D4A574] to-transparent" />

      <div className="marquee-track flex min-w-max items-center gap-8 text-[11px] font-mono uppercase tracking-[0.2em] text-[#FFFDF8]/95">
        {[...ITEMS, ...ITEMS, ...ITEMS].map((item, idx) => (
          <div key={`${item}-${idx}`} className="flex items-center gap-3 px-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F7F3E9]" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProofStrip;
