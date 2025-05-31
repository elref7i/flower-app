"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils/tailwind-merge";

const labelVariants = cva(
  "text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      error: {
        true: "text-red-600 dark:text-red-500",
        false: "text-zinc-800 dark:text-zinc-50",
      },
      defaultVariants: {
        error: false,
      },
    },
  },
);

interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
    VariantProps<typeof labelVariants> {
  error?: boolean;
}

const Label = React.forwardRef<React.ElementRef<typeof LabelPrimitive.Root>, LabelProps>(
  ({ className, error = false, ...props }, ref) => (
    <LabelPrimitive.Root ref={ref} className={cn(labelVariants({ error }), className)} {...props} />
  ),
);
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
