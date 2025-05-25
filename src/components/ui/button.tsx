import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils/tailwind-merge";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2  whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-maroon-600 text-primary-foreground hover:bg-maroon-700 disabled:bg-zinc-300 disabled:text-zinc-500",
        secondary:
          "bg-maroon-50 text-maroon-600 hover:bg-maroon-100 disabled:bg-zinc-300 disabled:text-zinc-500",
        outline:
          "border-[1px] border-maroon-600 bg-maroon-50 text-marron-600 hover:bg-maroon-100 disabled:border-zinc-300 disabled:bg-zinc-100 disabled:text-zinc-400",
        subtle:
          "border-[1px] border-zinc-400 bg-zinc-50 hover:bg-zinc-100 disabled:bg-zinc-100 disabled:text-zinc-400",
        destructive:
          "bg-red-600 text-destructive-foreground hover:bg-red-700 disabled:bg-zinc-300 disabled:text-zinc-500",
        ghost:
          "hover:bg-zinc-100 hover:text-accent-foreground disabled:bg-zinc-100 disabled:text-zinc-400",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "line- font-bold h-10 leading-[150%] w-[181px] px-4 py-[10px] gap-[10px]",
        sm: "h-9 w-[160px] rounded-md px-3",
        lg: "h-10 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
