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
  tagManagerId: string;
};

function updateConsent(consent: "granted" | "denied") {
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    };
  }

  window.gtag("consent", "update", {
    analytics_storage: consent,
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

export function GoogleTagManager({ tagManagerId }: Props) {
  useEffect(() => {
    const storedConsent = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (storedConsent === "granted") {
      updateConsent("granted");
    }
  }, []);

  return (
    <>
      <Script id="gtm-consent-default" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied'
          });
        `}
      </Script>
      <Script id="gtm-loader" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${tagManagerId}');
        `}
      </Script>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${tagManagerId}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
      <CookieConsentBanner onAccept={() => updateConsent("granted")} onDecline={() => updateConsent("denied")} />
    </>
  );
}
