"use client";
import * as React from "react";

import { cn } from "@/lib/utils/cn";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "./button";
interface InputProps extends React.ComponentProps<"input"> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    return (
      <div className="relative">
        <input
          type={type === "password" ? (showPassword ? "text" : type) : type}
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

        {/* Show password button  */}
        {type === "password" && (
          <Button
            type="button"
            className="absolute right-0 rtl:right-auto rtl:left-0 top-0 h-full "
            onClick={() => setShowPassword(!showPassword)}
            size={"icon"}
            variant={"ghost"}
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5 text-zinc-400" />
            ) : (
              <Eye className="w-5 h-5 text-zinc-400" />
            )}
            <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
          </Button>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
