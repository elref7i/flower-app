"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils/tailwind-merge";

/**
 * @file DropdownMenuCustomRadioItem.tsx
 * @description it instance of a radio item component for shad cn  UI dropdown menus.
 * A custom radio item component for shad cn UI dropdown menus, styled using Tailwind CSS and extended to show a check icon when selected.
 * This component is designed to be used within a dropdown menu, allowing you to customize radio options and styles with a visual indicator.
 */

const DropdownMenuCustomRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuCustomRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

export { DropdownMenuCustomRadioItem };
