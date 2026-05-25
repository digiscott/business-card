import type { Metadata } from "next";
import type { ReactNode } from "react";
import { profile } from "../content/profile";
import { themeInitScript } from "../lib/theme";
import { GoogleAnalytics } from "../components/GoogleAnalytics";
import "./globals.css";

export const metadata: Metadata = {
  title: profile.metadata.title,
  description: profile.metadata.description,
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: profile.metadata.title,
    description: profile.metadata.description,
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  description: profile.positioning,
  url: "https://example.com",
  sameAs: [profile.linkedInUrl, profile.githubUrl],
  knowsAbout: profile.focusAreas,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NEXT_PUBLIC_GTM_ID ? (
          <GoogleAnalytics gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
        ) : null}
      </body>
    </html>
  );
}
