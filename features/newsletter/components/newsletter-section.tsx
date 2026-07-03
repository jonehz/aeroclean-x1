import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";

import { NewsletterForm } from "./newsletter-form";

export function NewsletterSection() {
  return (
    <section
      id="newsletter"
      className="py-28"
    >
      <Container>
        <SectionTitle
          badge="NEWSLETTER"
          title="Stay Updated"
          description="
            Receive exclusive updates,
            product announcements and
            healthy living tips.
          "
        />

        <NewsletterForm />
      </Container>
    </section>
  );
}