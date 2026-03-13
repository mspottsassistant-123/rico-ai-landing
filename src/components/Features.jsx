import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: 'step-1',
    title: '1) Scan the label',
    body: 'Point your camera at any skincare ingredient list and scan in seconds.',
    image: '/images/step-1.png',
    alt: 'Rico AI step 1 label scan view',
  },
  {
    id: 'step-2',
    title: '2) Get your Skin Safe Score',
    body: 'Rico AI translates complex ingredients into a clear, personalized score.',
    image: '/images/step-2.png',
    alt: 'Rico AI step 2 skin safe score screen',
  },
  {
    id: 'step-3',
    title: '3) Choose safer options',
    body: 'Pick better products with confidence and build a calmer routine over time.',
    image: '/images/step-3.jpg',
    alt: 'Rico AI step 3 safer product recommendations',
  },
];

const Features = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        scrollTrigger: {
          trigger: '.features-container',
          start: 'top 80%',
        },
        y: 36,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={comp}
      id="features"
      className="py-28 px-6 md:px-12 max-w-7xl mx-auto w-full features-container border-t border-rico-border"
    >
      <div className="mb-16 md:mb-20">
        <h2 className="text-4xl md:text-5xl text-rico-primary mb-5">How Rico AI works in 3 easy steps.</h2>
        <p className="text-rico-text max-w-2xl text-lg">
          Less guessing. More clarity. One scan gives you the confidence to choose products your skin can handle.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <article
            key={step.id}
            className="feature-card glass-panel rounded-3xl border border-rico-border/70 overflow-hidden shadow-[0_20px_55px_-28px_rgba(45,74,58,0.35)]"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={step.image}
                alt={step.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rico-primary/35 via-transparent to-transparent" />
            </div>
            <div className="p-6 md:p-7">
              <h3 className="text-2xl font-serif text-rico-primary mb-3">{step.title}</h3>
              <p className="text-rico-text leading-relaxed">{step.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Features;
