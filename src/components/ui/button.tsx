import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none dark:disabled:text-zinc-600",
  {
    variants: {
      variant: {
        default: cn(
          "bg-maroon-600 text-primary-foreground hover:bg-maroon-700",
          "disabled:bg-zinc-300 disabled:text-zinc-500",
          "dark:bg-softpink-300 dark:hover:bg-softpink-400 dark:disabled:bg-zinc-700",
        ),

        secondary: cn(
          "bg-maroon-50 text-maroon-600 hover:bg-maroon-100",
          "disabled:bg-zinc-300 disabled:text-zinc-500",
          "dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:text-softpink-300 dark:disabled:bg-zinc-700",
        ),
        outline: cn(
          "border-[1px] border-maroon-600 bg-maroon-50 text-maroon-600 hover:bg-maroon-100",
          "disabled:border-zinc-300 disabled:bg-zinc-100 disabled:text-zinc-400",
          "dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-softpink-300 dark:border-zinc-600 dark:disabled:bg-zinc-800",
        ),
        subtle: cn(
          "border-[1px] border-zinc-400 bg-zinc-50 hover:bg-zinc-100",
          "disabled:bg-zinc-100 disabled:text-zinc-400",
          "dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:border-zinc-500 dark:disabled:bg-zinc-800",
        ),
        destructive: cn(
          "bg-red-600 text-destructive-foreground hover:bg-red-700",
          " disabled:bg-zinc-300 disabled:text-zinc-500",
          "dark:bg-red-500 dark:hover:bg-red-600 dark:disabled:bg-zinc-700",
        ),
        ghost: cn(
          "hover:bg-zinc-100 hover:text-accent-foreground",
          " disabled:bg-zinc-100 disabled:text-zinc-400",
          " dark:hover:bg-zinc-700 dark:disabled:bg-zinc-700",
        ),
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "text-sm font-bold h-10 leading-[150%] w-[181px] px-4 py-[10px] gap-[10px]",
        sm: "h-9 w-[90px] rounded-md px-3",
        lg: "h-10 w-[150px] rounded-md px-8",
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
