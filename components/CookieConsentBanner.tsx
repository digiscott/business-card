"use client";

import { useState } from "react";

const CONSENT_STORAGE_KEY = "analytics-consent";

type Props = {
  onAccept: () => void;
  onDecline: () => void;
};

function getInitialVisibility() {
  if (typeof window === "undefined") {
    return false;
  }

  try {
    const existingChoice = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return !existingChoice;
  } catch {
    return true;
  }
}

export function CookieConsentBanner({ onAccept, onDecline }: Props) {
  const [isVisible, setIsVisible] = useState(getInitialVisibility);

  const handleAccept = () => {
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, "granted");
    } catch {
      // Ignore storage failures and continue applying in-memory consent for this visit.
    }
    setIsVisible(false);
    onAccept();
  };

  const handleDecline = () => {
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, "denied");
    } catch {
      // Ignore storage failures and continue applying in-memory consent for this visit.
    }
    setIsVisible(false);
    onDecline();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-ink/10 bg-paper px-4 py-4 shadow-soft dark:border-white/10 dark:bg-ink sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink/80 dark:text-white/80">
          This site uses optional analytics cookies to understand aggregate traffic and improve the experience.
        </p>
        <div className="flex gap-2">
          <button
            className="rounded-full border border-ink/20 px-4 py-2 text-sm font-semibold text-ink transition hover:border-ink/40 focus:outline-none focus:ring-2 focus:ring-accent dark:border-white/20 dark:text-white"
            onClick={handleDecline}
            type="button"
          >
            Decline
          </button>
          <button
            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent"
            onClick={handleAccept}
            type="button"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
