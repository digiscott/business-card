"use client";

import Script from "next/script";
import { useEffect } from "react";
import { CookieConsentBanner } from "./CookieConsentBanner";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const CONSENT_STORAGE_KEY = "analytics-consent";

type Props = {
  measurementId: string;
};

function updateConsent(consent: "granted" | "denied") {
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      analytics_storage: consent,
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  }
}

export function GoogleAnalytics({ measurementId }: Props) {
  useEffect(() => {
    const storedConsent = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (storedConsent === "granted") {
      updateConsent("granted");
    }
  }, []);

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied'
          });
          gtag('config', '${measurementId}', { anonymize_ip: true });
        `}
      </Script>
      <CookieConsentBanner onAccept={() => updateConsent("granted")} onDecline={() => updateConsent("denied")} />
    </>
  );
}
