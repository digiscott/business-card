"use client";

import { useState } from "react";

const CONSENT_STORAGE_KEY = "analytics-consent";

type Props = {
  onAccept: () => void;
  onDecline: () => void;
};

export function CookieConsentBanner({ onAccept, onDecline }: Props) {
  const [isDismissed, setIsDismissed] = useState(false);

  if (typeof window === "undefined") {
    return null;
  }

  const existingChoice = window.localStorage.getItem(CONSENT_STORAGE_KEY);

  if (isDismissed || existingChoice) {
    return null;
  }

  const handleAccept = () => {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, "granted");
    setIsDismissed(true);
    onAccept();
  };

  const handleDecline = () => {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, "denied");
    setIsDismissed(true);
    onDecline();
  };

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
