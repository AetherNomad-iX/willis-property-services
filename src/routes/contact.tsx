import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";
import { SiteShell } from "@/components/site-shell";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        kicker="Contact"
        title="Call, text, or send the job."
        lede="Fast communication from the first request through completion. Reach Kaleb directly — no ticket queue, no runaround."
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12">
        <div className="space-y-4 lg:col-span-4">
          <ContactCard
            icon={Phone}
            label="Call"
            value={SITE.phoneDisplay}
            href={SITE.phoneHref}
          />
          <ContactCard
            icon={MessageSquare}
            label="Text"
            value={SITE.phoneDisplay}
            href={SITE.smsHref}
          />
          <ContactCard
            icon={Mail}
            label="Email"
            value={SITE.email}
            href={SITE.emailHref}
          />
          <div className="rounded-xl bg-paper p-5 shadow-card">
            <MapPin className="size-5 text-navy" />
            <p className="mt-3 font-display text-[0.7rem] uppercase tracking-[0.18em] text-muted">
              Service area
            </p>
            <p className="mt-1 font-display text-xl font-semibold uppercase tracking-[0.06em] text-navy-deep">
              Throughout Jacksonville
            </p>
            <p className="mt-2 text-sm text-muted">
              Apartment communities, managed properties, and residences across
              the city.
            </p>
          </div>
        </div>
        <div className="lg:col-span-8">
          <div className="rounded-xl bg-sky/60 p-5 sm:p-8">
            <h2 className="font-display text-3xl font-semibold uppercase tracking-[0.04em] text-navy-deep">
              Request service
            </h2>
            <p className="mt-2 text-muted">
              Tell us the property and the work. We will turn it into a call,
              text, or email to Kaleb.
            </p>
            <QuoteForm className="mt-6" />
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <p className="mb-4 font-display text-[0.72rem] uppercase tracking-[0.22em] text-red">
            Jacksonville, Florida
          </p>
          <div className="overflow-hidden rounded-xl shadow-card">
            <iframe
              title="Map of Jacksonville, Florida"
              src="https://maps.google.com/maps?q=Jacksonville%20Florida&z=11&output=embed"
              className="h-72 w-full border-0 grayscale sm:h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="block rounded-xl bg-paper p-5 shadow-card transition-[box-shadow] duration-150 hover:shadow-card-hover"
    >
      <Icon className="size-5 text-navy" />
      <p className="mt-3 font-display text-[0.7rem] uppercase tracking-[0.18em] text-muted">
        {label}
      </p>
      <p className="mt-1 break-all font-display text-xl font-semibold uppercase tracking-[0.06em] text-navy-deep">
        {value}
      </p>
    </a>
  );
}
