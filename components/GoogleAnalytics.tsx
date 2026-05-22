"use client";

import Script from "next/script";
import { useEffect } from "react";
import { CookieConsentBanner } from "./CookieConsentBanner";

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

const CONSENT_STORAGE_KEY = "analytics-consent";

type Props = {
  gtmId: string;
};

function updateConsent(consent: "granted" | "denied") {
  if (window.dataLayer) {
    window.dataLayer.push({
      "gtm.start": new Date().getTime(),
      event: "gtm.consent",
      "consent.analytics_storage": consent,
    });
  }
}

export function GoogleAnalytics({ gtmId }: Props) {
  useEffect(() => {
    const storedConsent = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (storedConsent === "granted") {
      updateConsent("granted");
    }
  }, []);

  return (
    <>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`,
        }}
      />
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
      <CookieConsentBanner onAccept={() => updateConsent("granted")} onDecline={() => updateConsent("denied")} />
    </>
  );
}
