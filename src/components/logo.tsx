import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site";

type LogoProps = {
  invert?: boolean;
  className?: string;
  size?: number;
};

export function LogoMark({ invert = false, className, size = 48 }: LogoProps) {
  return (
    <img
      src={invert ? "/images/logo-light-256.png" : "/images/logo-dark-256.png"}
      alt=""
      width={size}
      height={size}
      className={cn("mark block", className)}
    />
  );
}

export function BrandLockup({
  invert = false,
  compact = false,
}: {
  invert?: boolean;
  compact?: boolean;
}) {
  const color = invert ? "text-paper" : "text-ink";
  const muted = invert ? "text-paper/70" : "text-muted";
  return (
    <span className={cn("flex items-center gap-2.5 min-w-0", color)}>
      <LogoMark invert={invert} size={compact ? 40 : 48} className="shrink-0" />
      <span className="min-w-0 leading-none">
        <span className="block font-display font-semibold uppercase tracking-[0.12em] text-[0.95rem] sm:text-[1.05rem]">
          {SITE.name}
        </span>
        {!compact ? (
          <span
            className={cn(
              "mt-1 hidden font-display text-[0.62rem] uppercase tracking-[0.18em] sm:block",
              muted,
            )}
          >
            {SITE.tagline}
          </span>
        ) : null}
      </span>
    </span>
  );
}
