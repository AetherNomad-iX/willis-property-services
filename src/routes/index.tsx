import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { LogoMark } from "@/components/logo";
import { QuoteForm } from "@/components/quote-form";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import {
  ABOUT,
  AUDIENCES,
  GALLERY,
  PROMISES,
  SERVICES,
  SITE,
} from "@/lib/site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            name: SITE.name,
            image: "/images/logo-mark.jpg",
            telephone: "+19043124930",
            email: SITE.email,
            url: "/",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Jacksonville",
              addressRegion: "FL",
              addressCountry: "US",
            },
            areaServed: "Jacksonville, Florida",
            founder: { "@type": "Person", name: SITE.owner },
            description:
              "Handyman, labor, and property support throughout Jacksonville.",
          }),
        }}
      />

      <section className="relative isolate min-h-[34rem] overflow-hidden bg-navy-deep text-paper sm:min-h-[40rem]">
        <img
          src="/images/skyline.jpg"
          alt="Jacksonville skyline and the Main Street Bridge at dusk"
          className="absolute inset-0 size-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/92 via-navy-deep/78 to-navy/35" />
        <div className="relative mx-auto flex max-w-6xl flex-col justify-end gap-8 px-4 py-16 sm:px-6 sm:py-24">
          <div className="max-w-2xl">
            <p className="rise font-display text-[0.75rem] uppercase tracking-[0.26em] text-paper/70">
              {SITE.kicker}
            </p>
            <h1 className="rise rise-2 mt-4 font-display text-5xl font-semibold uppercase leading-[0.9] tracking-[0.03em] sm:text-7xl">
              Let's get your
              <br />
              project done.
            </h1>
            <div className="rise rise-3 mt-6 h-px w-16 bg-red" />
            <p className="rise rise-3 mt-6 max-w-lg text-lg text-paper/80">
              {SITE.lede}
            </p>
            <div className="rise rise-4 mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="cream" size="lg">
                <Link to="/contact">Request service</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={SITE.phoneHref}>
                  <Phone />
                  Call or text {SITE.phoneDisplay}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-6xl gap-px bg-line sm:grid-cols-3">
          {PROMISES.map((item) => (
            <div key={item.title} className="bg-paper px-6 py-8 sm:px-8">
              <p className="font-display text-[0.7rem] uppercase tracking-[0.2em] text-red">
                {item.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-display text-[0.72rem] uppercase tracking-[0.22em] text-red">
              01 — What we do
            </p>
            <h2 className="mt-2 font-display text-4xl font-semibold uppercase leading-none tracking-[0.04em] text-navy-deep sm:text-5xl">
              Handyman. Labor.
              <br />
              Property support.
            </h2>
          </div>
          <Button asChild variant="ink" className="self-start sm:self-auto">
            <Link to="/services">
              All services
              <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 9).map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                to="/services"
                hash={service.slug}
                className="group rounded-xl bg-paper p-5 shadow-card transition-[box-shadow,transform] duration-200 hover:shadow-card-hover"
              >
                <Icon className="size-5 text-navy" />
                <h3 className="mt-4 font-display text-xl font-semibold uppercase tracking-[0.06em] text-navy-deep">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.summary}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-navy text-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-display text-[0.72rem] uppercase tracking-[0.22em] text-paper/55">
              02 — Who we serve
            </p>
            <h2 className="mt-2 font-display text-4xl font-semibold uppercase leading-none tracking-[0.04em]">
              Built for the people who keep Jacksonville running.
            </h2>
            <div className="mt-5 h-px w-16 bg-red" />
          </div>
          <div className="grid gap-6 sm:grid-cols-3 lg:col-span-8">
            {AUDIENCES.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title}>
                  <Icon className="size-6 text-paper/80" />
                  <h3 className="mt-4 font-display text-xl font-semibold uppercase tracking-[0.08em]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper/70">
                    {item.copy}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-12">
        <div className="relative pb-8 pr-6 lg:col-span-5">
          <img
            src="/images/kaleb.jpg"
            alt="Hyrum Kaleb Willis, owner of Willis Property Services, standing in front of a Jacksonville home"
            className="aspect-[4/5] w-full rounded-xl object-cover object-top shadow-card"
          />
          <div className="absolute bottom-4 right-2 rounded-xl bg-paper p-3 shadow-card">
            <LogoMark size={88} />
          </div>
        </div>
        <div className="lg:col-span-7 lg:pl-8">
          <p className="font-display text-[0.72rem] uppercase tracking-[0.22em] text-red">
            03 — The owner
          </p>
          <h2 className="mt-2 font-display text-4xl font-semibold uppercase leading-none tracking-[0.04em] text-navy-deep sm:text-5xl">
            {ABOUT.greeting}
          </h2>
          <div className="mt-5 h-px w-16 bg-red" />
          <p className="mt-6 text-lg leading-relaxed text-ink/90">{ABOUT.intro}</p>
          <p className="mt-4 leading-relaxed text-muted">{ABOUT.why}</p>
          <p className="mt-4 leading-relaxed text-muted">{ABOUT.goal}</p>
          <Button asChild variant="primary" className="mt-8">
            <Link to="/about">
              Read Kaleb's story
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>

      <section className="border-y border-line bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="font-display text-[0.72rem] uppercase tracking-[0.22em] text-red">
            04 — The work
          </p>
          <h2 className="mt-2 font-display text-4xl font-semibold uppercase leading-none tracking-[0.04em] text-navy-deep">
            Finish quality you can see.
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-3">
            {GALLERY.map((shot) => (
              <figure key={shot.src} className="overflow-hidden rounded-lg">
                <img
                  src={shot.src}
                  alt={shot.alt}
                  className="aspect-[4/3] h-full w-full object-cover"
                  loading="lazy"
                />
                <figcaption className="sr-only">{shot.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-display text-[0.72rem] uppercase tracking-[0.22em] text-red">
            05 — Start here
          </p>
          <h2 className="mt-2 font-display text-4xl font-semibold uppercase leading-none tracking-[0.04em] text-navy-deep">
            Tell us what you need.
          </h2>
          <p className="mt-4 max-w-md text-muted">
            Fill this in and we will package a call, text, or email straight to
            Kaleb. Most jobs start with a conversation — that is the fastest
            way.
          </p>
          <a
            href={SITE.phoneHref}
            className="mt-6 inline-flex min-h-12 items-center gap-2 font-display text-sm uppercase tracking-[0.16em] text-navy"
          >
            <Phone className="size-4" />
            Or just call {SITE.phoneDisplay}
          </a>
        </div>
        <div className="lg:col-span-7">
          <QuoteForm />
        </div>
      </section>

      <CtaBand />
    </SiteShell>
  );
}
