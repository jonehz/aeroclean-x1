import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";

import { SPECIFICATIONS } from "../constants";

import { SpecCard } from "./spec-card";

export function SpecificationsSection() {
  return (
    <section
      id="specifications"
      className="
        bg-slate-50
        py-28
        dark:bg-slate-950
      "
    >
      <Container>
        <SectionTitle
          badge="SPECIFICATIONS"
          title="Engineered For Modern Living"
          description="
            Premium materials and intelligent systems
            deliver exceptional performance.
          "
        />

        <div
          className="
            mt-20
            grid
            gap-6
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {SPECIFICATIONS.map((spec) => (
            <SpecCard
              key={spec.label}
              {...spec}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}