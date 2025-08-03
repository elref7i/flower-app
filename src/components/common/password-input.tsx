"use client";
import React, { forwardRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const PasswordInput = forwardRef<HTMLInputElement, React.ComponentProps<typeof Input>>(
  (props, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="relative h-fit">
        {/* Input */}
        <Input ref={ref} {...props} type={showPassword ? "text" : "password"} className="w-full" />

        {/* Show password button  */}
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
      </div>
    );
  },
);

PasswordInput.displayName = "PasswordInput";
