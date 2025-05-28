import * as React from "react";

import { cn } from "@/lib/utils/tailwind-merge";
interface TextareaProps extends React.ComponentProps<"textarea"> {
  error?: boolean;
}
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] h-36 w-[327px] rounded-md border-[1px] bg-background p-4 text-zinc-400 text-base placeholder:text-zinc-400 focus-visible:outline-none focus:border-maroon-600  disabled:cursor-not-allowed disabled:bg-zinc-100 md:text-sm",
          "dark:bg-zinc-800 dark:text-zinc-200 dark:border-zinc-600 dark:placeholder:text-zinc-400 dark:focus:border-softpink-400 dark:disabled:border-zinc-700 dark:disabled:placeholder:text-zinc-600",
          error && "border-red-600 dark:border-red-500",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
