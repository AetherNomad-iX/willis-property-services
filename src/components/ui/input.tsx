import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "flex h-12 w-full rounded-md bg-paper px-3.5 text-base text-ink shadow-card",
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
