import { Navbar } from "@/features/navbar/components/navbar";
import { HeroSection } from "@/features/hero/components/hero-section";

import { FeaturesSection } from "@/features/features-section/components/features-section";
import { SpecificationsSection } from "@/features/specifications/components/specifications-section";

import { Footer } from "@/features/footer/components/footer";

import { NewsletterSection } from "@/features/newsletter/components/newsletter-section";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />

        <FeaturesSection />

        <SpecificationsSection />

        <NewsletterSection />
      </main>

      <Footer />
    </>
  );
}