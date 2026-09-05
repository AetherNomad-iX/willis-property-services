import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyCallBar } from "@/components/sticky-call-bar";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-cream text-ink">
      <SiteHeader />
      <div id="main">{children}</div>
      <SiteFooter />
      <StickyCallBar />
    </div>
  );
}
