import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "flex min-h-32 w-full rounded-lg bg-paper px-3.5 py-3 text-base text-ink shadow-card",
        "placeholder:text-muted/80",
        "transition-[box-shadow] duration-150",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}
