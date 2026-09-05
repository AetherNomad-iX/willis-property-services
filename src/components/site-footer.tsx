import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { BrandLockup } from "@/components/logo";
import { NAV, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <BrandLockup invert />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper/70">
            Owner-operated handyman, labor, and property support across
            Jacksonville. Built to save you money, give you peace of mind, and
            get you back to what matters.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="font-display text-[0.7rem] uppercase tracking-[0.2em] text-paper/50">
            Explore
          </p>
          <ul className="mt-3 space-y-1">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="inline-flex min-h-10 items-center font-display text-sm uppercase tracking-[0.14em] text-paper/85 hover:text-paper"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="font-display text-[0.7rem] uppercase tracking-[0.2em] text-paper/50">
            Reach Kaleb
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                href={SITE.phoneHref}
                className="inline-flex min-h-10 items-center gap-2 text-paper/85 hover:text-paper"
              >
                <Phone className="size-4" />
                {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={SITE.emailHref}
                className="inline-flex min-h-10 items-center gap-2 break-all text-paper/85 hover:text-paper"
              >
                <Mail className="size-4 shrink-0" />
                {SITE.email}
              </a>
            </li>
            <li className="flex min-h-10 items-center gap-2 text-paper/85">
              <MapPin className="size-4" />
              {SITE.area}
            </li>
          </ul>
        </div>
      </div>
      <div className="h-px bg-red" />
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 pb-20 text-[0.75rem] text-paper/50 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:pb-5">
        <p>© {new Date().getFullYear()} {SITE.name}. Jacksonville, Florida.</p>
        <p className="font-display uppercase tracking-[0.16em]">
          Owner-operated · {SITE.owner}
        </p>
      </div>
    </footer>
  );
}
