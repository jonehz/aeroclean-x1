import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";

import { FEATURES } from "../constants";

import { FeatureCard } from "./feature-card";

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-28"
    >
      <Container>
        <SectionTitle
          badge="FEATURES"
          title="Intelligence Meets Clean Air"
          description="
            AeroClean X1 combines artificial intelligence,
            smart connectivity, and ultra-efficient
            purification technology.
          "
        />

        <div
          className="
            mt-20
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {FEATURES.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}