import { Container } from "@/components/ui/container";

import { HeroContent } from "./hero-content";
import { HeroImage } from "./hero-image";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      className="
        flex
        min-h-[calc(100vh-80px)]
        items-center
      "
    >
      <Container>
        <div
          className="
            grid
            gap-16
            lg:grid-cols-2
          "
        >
          <HeroContent />

          <div
            className="
              flex
              justify-center
            "
          >
            <HeroImage />

            <Image
              src="/images/hero/purifier.png"
              alt="AeroClean X1"

              width={700}
              height={700}

              priority

              className="
                object-contain
                drop-shadow-2xl
              "
          />
          </div>
        </div>
      </Container>
    </section>
  );
}