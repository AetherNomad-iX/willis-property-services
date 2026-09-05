import { MessageSquare, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy/10 bg-paper/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-sm sm:hidden">
      <div className="grid grid-cols-2 gap-2 px-3 py-2">
        <a
          href={SITE.phoneHref}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-navy font-display text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-paper active:scale-[0.96]"
        >
          <Phone className="size-4" />
          Call
        </a>
        <a
          href={SITE.smsHref}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-red font-display text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-paper active:scale-[0.96]"
        >
          <MessageSquare className="size-4" />
          Text
        </a>
      </div>
    </div>
  );
}
