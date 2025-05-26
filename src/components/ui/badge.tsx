import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils/tailwind-merge";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: cn(
          "border-transparent bg-maroon-600 text-primary-foreground hover:bg-maroon-700",
          "dark:bg-softpink-300 dark:hover:bg-softpink-400 dark:text-primary-foreground",
        ),
        secondary: cn(
          "border-transparent bg-maroon-50 text-maroon-600  hover:bg-maroon-100",
          "dark:bg-zinc-700 dark:text-softpink-300 dark:hover:bg-zinc-600",
        ),
        subtle: cn(
          "border-transparent bg-zinc-100 text-zinc-700 hover:bg-zinc-200",
          "dark:bg-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-600",
        ),
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
