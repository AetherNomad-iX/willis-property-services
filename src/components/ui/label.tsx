import type { LabelHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Label({
  className,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn(
        "block text-[0.7rem] font-display font-semibold uppercase tracking-[0.16em] text-muted",
        className,
      )}
      {...props}
    />
  );
}
