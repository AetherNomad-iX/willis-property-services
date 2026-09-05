import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/site";

export const Route = createFileRoute("/services")({ component: ServicesPage });

function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        kicker="Services"
        title="The work we take on."
        lede="Drywall through cleanouts — the practical jobs that keep homes, units, and common areas in good order across Jacksonville."
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="space-y-16">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            const reverse = i % 2 === 1;
            return (
              <article
                key={service.slug}
                id={service.slug}
                className="scroll-mt-28 grid items-center gap-8 lg:grid-cols-12"
              >
                <div
                  className={
                    reverse
                      ? "lg:col-span-5 lg:order-2"
                      : "lg:col-span-5"
                  }
                >
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="aspect-[4/3] w-full rounded-xl object-cover shadow-card"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex aspect-[4/3] w-full items-center justify-center rounded-xl bg-sky shadow-card">
                      <Icon className="size-12 text-navy" />
                    </div>
                  )}
                </div>
                <div className="lg:col-span-7 lg:px-6">
                  <p className="font-display text-[0.7rem] uppercase tracking-[0.2em] text-red">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-semibold uppercase tracking-[0.05em] text-navy-deep sm:text-4xl">
                    {service.title}
                  </h2>
                  <div className="mt-4 h-px w-12 bg-red" />
                  <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
                    {service.details}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
        <div className="mt-16 rounded-xl bg-paper p-8 shadow-card sm:p-10">
          <h2 className="font-display text-3xl font-semibold uppercase tracking-[0.04em] text-navy-deep">
            Something else on the list?
          </h2>
          <p className="mt-3 max-w-xl text-muted">
            If it is honest property work in Jacksonville, ask. We will tell
            you plainly whether we can take it — and if we can, we will get it
            done.
          </p>
          <Button asChild className="mt-6">
            <Link to="/contact">Request service</Link>
          </Button>
        </div>
      </section>
      <CtaBand />
    </SiteShell>
  );
}
