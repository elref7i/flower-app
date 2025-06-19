import * as React from "react";

import { cn } from "@/lib/utils/tailwind-merge";
interface InputProps extends React.ComponentProps<"input"> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-[327px] rounded-md border-[1px] border-zinc-300 bg-white p-4 text-sm text-zinc-800 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-zinc-400 focus-visible:outline-none focus:border-maroon-600 disabled:cursor-not-allowed  disabled:bg-zinc-100 disabled:border-transparent md:text-sm",
          "dark:bg-zinc-800 dark:text-zinc-200 dark:border-zinc-600 dark:placeholder:text-zinc-400 dark:focus:border-softpink-400 dark:disabled:border-zinc-700 dark:disabled:placeholder:text-zinc-600",
          className,
          type === "file" &&
          "file:text-transparent file:w-0 file:h-0 file:overflow-hidden file:placeholder:hidden ",
          error && "border-red-600 dark:border-red-500",
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
