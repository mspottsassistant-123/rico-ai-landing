import React, { useEffect, useState } from 'react';
import { trackEvent, getUTMLink } from '../utils/tracking';

const MobileStickyCTA = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show after scrolling down 300px
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full p-4 bg-white/90 backdrop-blur-xl border-t border-rico-border z-[100] md:hidden shadow-[0_-10px_40px_rgba(0,0,0,0.05)] transition-all duration-300">
            <a
                href={getUTMLink('mobile_sticky_cta')}
                target="_blank" rel="noopener noreferrer"
                onClick={() => trackEvent('cta_click_app_store', { location: 'mobile_sticky' })}
                className="w-full bg-rico-primary text-white py-4 px-6 rounded-full font-medium text-center shadow-lg block active:scale-[0.98] transition-transform"
            >
                Download on iOS
            </a>
        </div>
    );
};

export default MobileStickyCTA;
