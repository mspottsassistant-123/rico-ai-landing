import React, { useState, useEffect } from 'react';

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show after a brief delay
        const timer = setTimeout(() => {
            const consent = localStorage.getItem('rico_cookie_consent');
            if (!consent) {
                setIsVisible(true);
            }
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const handleAccept = () => {
        console.log("Track event: cookie_consent_accepted");
        localStorage.setItem('rico_cookie_consent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        console.log("Track event: cookie_consent_declined");
        localStorage.setItem('rico_cookie_consent', 'declined');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl bg-white border border-rico-border rounded-2xl p-6 shadow-2xl z-50 flex flex-col sm:flex-row gap-6 items-center justify-between">
            <div className="text-sm">
                <h4 className="font-semibold text-rico-primary mb-1">Cookies & Tracking</h4>
                <p className="text-rico-text">We use cookies to understand traffic and improve the Rico AI experience. You can accept or decline anytime.</p>
            </div>
            <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto mt-2 sm:mt-0">
                <button
                    onClick={handleDecline}
                    className="flex-1 sm:flex-none px-5 py-2 rounded-full border border-rico-border text-rico-text text-sm font-medium hover:bg-rico-bg transition-colors"
                >
                    Decline
                </button>
                <button
                    onClick={handleAccept}
                    className="flex-1 sm:flex-none px-5 py-2 rounded-full bg-rico-primary text-white text-sm font-medium hover:bg-rico-primary/90 transition-colors shadow-md"
                >
                    Accept
                </button>
            </div>
        </div>
    );
};

export default CookieBanner;
