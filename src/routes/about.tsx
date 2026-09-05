import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { LogoMark } from "@/components/logo";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { ABOUT, SITE } from "@/lib/site";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        kicker="About"
        title="Jacksonville, through and through."
        lede="Willis Property Services exists to serve the people who live and work here — with dependable work, competitive pricing, and a phone that actually gets answered."
      />

      <section className="mx-auto grid max-w-6xl items-start gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <img
            src="/images/kaleb.jpg"
            alt="Hyrum Kaleb Willis standing in front of a Jacksonville home"
            className="w-full rounded-xl object-cover object-top shadow-card"
          />
          <div className="mt-4 flex items-center gap-3 rounded-xl bg-paper p-4 shadow-card">
            <LogoMark size={56} />
            <div>
              <p className="font-display text-lg font-semibold uppercase tracking-[0.08em] text-navy-deep">
                {SITE.owner}
              </p>
              <p className="text-sm text-muted">Owner · {SITE.name}</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <p className="font-display text-[0.72rem] uppercase tracking-[0.22em] text-red">
            In his words
          </p>
          <div className="mt-5 space-y-5 text-lg leading-relaxed text-ink/90">
            <p>{ABOUT.intro}</p>
            <p>{ABOUT.faith}</p>
            <p>{ABOUT.why}</p>
            <p>{ABOUT.goal}</p>
          </div>
          <blockquote className="mt-10 border-l-2 border-red pl-5">
            <p className="font-display text-3xl font-semibold uppercase leading-none tracking-[0.04em] text-navy-deep">
              {ABOUT.close}
            </p>
          </blockquote>
        </div>
      </section>

      <section className="border-y border-line bg-paper">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-3">
          <Value
            title="Local"
            copy="Born and raised in Jacksonville. This is home — not a territory on a map."
          />
          <Value
            title="Straight talk"
            copy="We tell you what the job needs, what it costs, and when we can do it. Then we do it."
          />
          <Value
            title="Peace of mind"
            copy="The point of hiring us is so you can get back to what matters. That is the whole business."
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <img
          src="/images/skyline.jpg"
          alt="Jacksonville riverfront skyline at dusk"
          className="w-full rounded-xl object-cover shadow-card"
          loading="lazy"
        />
        <div>
          <p className="font-display text-[0.72rem] uppercase tracking-[0.22em] text-red">
            The city in the mark
          </p>
          <h2 className="mt-2 font-display text-4xl font-semibold uppercase leading-none tracking-[0.04em] text-navy-deep">
            The skyline is not decoration.
          </h2>
          <p className="mt-5 leading-relaxed text-muted">
            The Willis Property Services mark is Jacksonville: the towers, the
            river, the Main Street Bridge. It is a promise about where we work
            and who we work for — neighbors, property managers, and the people
            keeping this city livable.
          </p>
        </div>
      </section>

      <CtaBand />
    </SiteShell>
  );
}

function Value({ title, copy }: { title: string; copy: string }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold uppercase tracking-[0.08em] text-navy-deep">
        {title}
      </h2>
      <div className="mt-3 h-px w-10 bg-red" />
      <p className="mt-4 text-muted">{copy}</p>
    </div>
  );
}
