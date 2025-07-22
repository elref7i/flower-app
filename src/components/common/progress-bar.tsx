"use client";

import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils/cn";

type ProgressBarProps = {
  step: string;
};

const ProgressBar = ({ step }: ProgressBarProps) => {
  const value = step === "1" ? 33.3333 : step === "2" ? 66.6666 : 0;

  return (
    <div className="w-full relative px-2 my-5">
      {/* Progress bar  */}
      <Progress
        value={value}
        className={cn(
          "h-2 bg-zinc-200",
          "[&>div]:bg-maroon-600",
          "[&>div]:transition-all [&>div]:duration-500",
        )}
      />

      {/* Circles above progress */}
      <div className="absolute top-[-7px] left-0 w-full flex justify-evenly px-1">
        <div
          className={cn(
            "w-6 h-6 rounded-full flex items-center justify-center text-sm transition-colors duration-300",
            step === "1" || step === "2" ? "bg-maroon-600 text-white" : "bg-zinc-200 text-zinc-500",
          )}
        >
          1
        </div>
        <div
          className={cn(
            "w-6 h-6 rounded-full flex items-center justify-center text-sm transition-colors duration-300",
            step === "2" ? "bg-maroon-600 text-white" : "bg-gray-300 text-gray-600",
          )}
        >
          2
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
