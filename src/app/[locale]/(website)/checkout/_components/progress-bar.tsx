import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils/cn";

export default function Progressbar({ currentStep = 1 }: { currentStep: number }) {
  const steps = [1, 2];
  const progressValue = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <div className="relative w-full max-w-xl mx-auto h-10">
      {/* Full track background */}
      <div className="absolute top-1/2 left-0 w-full h-2 bg-zinc-200 rounded-md -translate-y-1/2 z-0" />

      {/* Filled progress */}
      <div
        className="absolute top-1/2 left-0 h-2 bg-maroon-600 rounded-md -translate-y-1/2 z-10 transition-all duration-300"
        style={{ width: `${progressValue}%` }}
      />

      {/* Step Circles */}
      <div className="absolute top-1/2 left-0 mx-0 w-full flex justify-evenly items-center -translate-y-1/2 z-20 ">
        {steps.map((step) => (
          <div
            key={step}
            className={cn(
              "w-7 h-7 flex items-center justify-center rounded-full text-sm font-medium border-2 transition-colors duration-300",
              step <= currentStep
                ? "bg-maroon-600 text-white border-maroon-600"
                : "bg-zinc-200 text-zinc-600 border-zinc-200",
            )}
          >
            {step}
          </div>
        ))}
      </div>
    </div>
  );
}
