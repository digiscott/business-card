import { AboutSection } from "../components/AboutSection";
import { CareerAdvocateCallout } from "../components/CareerAdvocateCallout";
import { ContactPanel } from "../components/ContactPanel";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { LearnMoreLinks } from "../components/LearnMoreLinks";
import { StrengthCards } from "../components/StrengthCards";
import { profile } from "../content/profile";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero profile={profile} />
        <CareerAdvocateCallout profile={profile} />
        <AboutSection profile={profile} />
        <StrengthCards profile={profile} />
        <LearnMoreLinks profile={profile} />
        <ContactPanel profile={profile} />
      </main>
      <Footer profile={profile} />
    </>
  );
}
