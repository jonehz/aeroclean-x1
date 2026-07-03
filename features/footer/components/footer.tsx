import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer
      className="
        border-t
        py-10
      "
    >
      <Container>
        <div
          className="
            flex
            flex-col
            gap-4
            md:flex-row
            md:justify-between
          "
        >
          <div>
            <h3
              className="
                text-2xl
                font-bold
              "
            >
              AeroClean X1
            </h3>

            <p
              className="
                mt-2
                text-slate-500
              "
            >
              Breathe smarter.
              Live better.
            </p>
          </div>

          <p
            className="
              text-sm
              text-slate-500
            "
          >
            © 2026 AeroClean X1.
            All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}