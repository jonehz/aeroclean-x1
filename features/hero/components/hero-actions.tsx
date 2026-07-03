import { Button } from "@/components/ui/button";

export function HeroActions() {
  return (
    <div
      className="
        mt-10
        flex
        flex-wrap
        gap-4
      "
    >
      <Button>
        Order Now
      </Button>

      <button
        className="
          rounded-full
          border
          px-6
          py-3
          transition
          hover:bg-slate-100
          dark:hover:bg-slate-900
        "
      >
        Learn More
      </button>
    </div>
  );
}