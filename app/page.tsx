import { ContactPanel } from "../components/ContactPanel";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { LearnMoreLinks } from "../components/LearnMoreLinks";
import { UseCases } from "../components/UseCases";
import { WhatIBring } from "../components/WhatIBring";
import { profile } from "../content/profile";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero profile={profile} />
        <WhatIBring profile={profile} />
        <UseCases profile={profile} />
        <LearnMoreLinks profile={profile} />
        <ContactPanel profile={profile} />
      </main>
      <Footer profile={profile} />
    </>
  );
}
