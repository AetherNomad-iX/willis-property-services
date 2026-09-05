import { useEffect, useState, type SyntheticEvent } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { BrandLockup } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  function toggleMenu(event: SyntheticEvent) {
    event.preventDefault();
    event.stopPropagation();
    setOpen((value) => !value);
  }

  return (
    <header className="sticky top-0 z-40 bg-navy text-paper">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-paper focus:px-3 focus:py-2 focus:text-navy"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="min-w-0" onClick={() => setOpen(false)}>
          <BrandLockup invert />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "relative px-3 py-2 font-display text-[0.8rem] uppercase tracking-[0.16em] transition-colors duration-150",
                  active ? "text-paper" : "text-paper/70 hover:text-paper",
                )}
              >
                {item.label}
                {active ? (
                  <span className="absolute inset-x-3 -bottom-0.5 h-px bg-red" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="cream" size="sm" className="hidden sm:inline-flex">
            <a href={SITE.phoneHref}>
              <Phone />
              {SITE.phoneDisplay}
            </a>
          </Button>
          <button
            type="button"
            className="relative z-50 inline-flex size-11 touch-manipulation items-center justify-center rounded-md text-paper lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={toggleMenu}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>
      <div className="h-px bg-red" />

      {open ? (
        <button
          type="button"
          className="fixed inset-0 z-30 bg-navy-deep/50 lg:hidden"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
      ) : null}

      <div
        id="mobile-nav"
        hidden={!open}
        className={cn(
          "relative z-40 border-t border-paper/10 bg-navy-deep lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3" aria-label="Mobile">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center font-display text-base uppercase tracking-[0.16em] text-paper"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={SITE.phoneHref}
            className="mt-2 flex min-h-12 items-center gap-2 font-display text-base uppercase tracking-[0.16em] text-paper"
          >
            <Phone className="size-4" />
            Call {SITE.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}
