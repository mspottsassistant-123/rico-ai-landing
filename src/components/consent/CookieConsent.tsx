"use client";

import { useEffect, useState } from "react";

const CONSENT_KEY = "ricoai_consent_v1";

type ConsentValue = "accepted" | "rejected";

const readStoredConsent = (): ConsentValue | null => {
  if (typeof window === "undefined") return null;
  const stored = window.localStorage.getItem(CONSENT_KEY);
  if (stored === "accepted" || stored === "rejected") {
    return stored;
  }
  return null;
};

const writeConsent = (value: ConsentValue) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CONSENT_KEY, value);
  window.dispatchEvent(
    new CustomEvent("ricoai-consent", {
      detail: value,
    })
  );
};

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = readStoredConsent();
    if (stored) {
      setIsVisible(false);
      return;
    }

    const dnt =
      window.navigator.doNotTrack === "1" ||
      (window as any).doNotTrack === "1";
    if (dnt) {
      writeConsent("rejected");
      setIsVisible(false);
      return;
    }

    setIsVisible(true);
  }, []);

  const handleAccept = () => {
    writeConsent("accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    writeConsent("rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-3xl rounded-2xl border border-[#E6D9CC] bg-white/95 p-5 shadow-xl backdrop-blur">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-[#2D4A3A]">
          <p className="font-semibold">Cookies & Tracking</p>
          <p className="text-xs text-[#51685B]">
            We use cookies to understand traffic and improve the Rico AI experience.
            You can accept or decline anytime.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <button
            onClick={handleDecline}
            className="rounded-full border border-[#C9B7A3] px-4 py-2 text-xs font-semibold text-[#6C5B4B]"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="rounded-full bg-[#2D4A3A] px-4 py-2 text-xs font-semibold text-white"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
