import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { Link } from "@tanstack/react-router";

export function CtaBand() {
  return (
    <section className="bg-navy text-paper">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center">
        <div>
          <p className="font-display text-[0.72rem] uppercase tracking-[0.22em] text-paper/60">
            {SITE.city}
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold uppercase leading-none tracking-[0.04em] sm:text-5xl">
            {SITE.headline}
          </h2>
          <div className="mt-4 h-px w-16 bg-red" />
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button asChild variant="cream" size="lg">
            <Link to="/contact">Request service</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={SITE.phoneHref}>
              <Phone />
              {SITE.phoneDisplay}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
