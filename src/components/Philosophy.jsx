import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { trackEvent, getUTMLink } from '../utils/tracking';

gsap.registerPlugin(ScrollTrigger);

const Philosophy = () => {
    const comp = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const lines = gsap.utils.toArray('.reveal-line');

            lines.forEach((line) => {
                gsap.from(line, {
                    scrollTrigger: {
                        trigger: line,
                        start: "top 85%",
                        end: "bottom 60%",
                        scrub: 1,
                    },
                    opacity: 0.1,
                    y: 20,
                    ease: "none"
                });
            });
        }, comp);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={comp} id="philosophy" className="py-32 relative overflow-hidden bg-white border-y border-rico-border">

            {/* Background Organic/Laboratory Texture Hint */}
            <div className="absolute inset-0 pointer-events-none opacity-5">
                <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path d="M 10 10 C 200 400 300 0 400 400" stroke="#2D4A3A" strokeWidth="2" fill="none" />
                    <path d="M 50 100 Q 200 200 350 100 T 400 300" stroke="#2D4A3A" strokeWidth="1" fill="none" />
                    <circle cx="200" cy="200" r="150" stroke="#2D4A3A" strokeWidth="0.5" fill="none" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-16">

                {/* Founder Image */}
                <div className="w-full lg:w-1/3 reveal-line">
                    <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-rico-border max-w-sm mx-auto">
                        <img
                            src="/images/founder-zee.jpg"
                            alt="Zee - Rico AI Founder"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Founder Story Text */}
                <div className="w-full lg:w-2/3 text-center md:text-left">
                    <h2 className="text-sm font-mono tracking-widest text-rico-accent uppercase mb-12 italic">Why Rico AI exists</h2>

                    <div className="space-y-12 lg:space-y-16">
                        <div className="text-3xl md:text-4xl font-serif text-rico-primary leading-tight reveal-line">
                            You should not need an hour of research to buy one product.
                        </div>

                        <div className="text-3xl md:text-4xl font-serif text-rico-primary leading-tight reveal-line">
                            Rico AI turns ingredient labels into clear decisions in seconds:
                            <span className="text-rico-accent italic"> what to avoid, what is safe, and what to swap.</span>
                        </div>

                        <div className="text-3xl md:text-4xl font-serif text-rico-primary leading-tight reveal-line">
                            Built by Zee after years of sensitive-skin trial and error, with esthetician-informed guidance you can use every day.
                        </div>
                    </div>

                    <div className="mt-16 pt-8 border-t border-rico-border max-w-xl flex flex-col items-start gap-6">
                        <p className="text-rico-text font-sans text-lg leading-relaxed">
                            Better outcomes come from better decisions, repeated daily. Rico AI helps you make those calls fast. - Zee
                        </p>
                        <a href={getUTMLink('philosophy_primary_cta')} target="_blank" rel="noopener noreferrer" className="inline-block text-rico-primary font-medium border-b border-rico-primary pb-1 hover:text-rico-accent hover:border-rico-accent transition-colors" onClick={() => trackEvent('cta_click_app_store', { location: 'philosophy' })}>
                            Get your first scan free &rarr;
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
