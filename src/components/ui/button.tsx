import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-display uppercase tracking-[0.14em] text-[0.8125rem] font-semibold transition-[color,background-color,box-shadow,transform,opacity] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-navy text-paper shadow-card hover:bg-navy-deep",
        cream:
          "bg-paper text-navy-deep hover:bg-cream",
        red: "bg-red text-paper hover:opacity-90",
        outline:
          "bg-transparent text-paper ring-1 ring-paper/35 hover:bg-paper/10",
        ink: "bg-transparent text-ink ring-1 ring-ink/15 hover:bg-ink/5",
        ghost: "bg-transparent text-paper hover:bg-paper/10",
        link: "bg-transparent text-navy underline-offset-4 hover:underline tracking-[0.08em] font-sans font-semibold normal-case",
      },
      size: {
        sm: "h-10 px-4 rounded-md",
        md: "h-12 px-5 rounded-md",
        lg: "h-14 px-7 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
