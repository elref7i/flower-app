'use client'
import { cn } from "@/lib/utils/tailwind-merge";
import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner"; // من ShadCN برضو

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: cn(
            // Common styling
            "group toast shadow-md",

            // Default light theme
            "group-[.toaster]:bg-zinc-100 group-[.toaster]:border-zinc-300 group-[.toaster]:border-[1px] group-[.toaster]:text-zinc-800 ",

            // Dark theme
            // "dark:group-[.toaster]:bg-zinc-800 dark:group-[.toaster]:text-white",

            // Success toast
            "data-[type=success]:group-[.toaster]:bg-emerald-50 dark:data-[type=success]:group-[.toaster]:bg-emerald-300 data-[type=success]:group-[.toaster]:border-emerald-700 data-[type=success]:dark:group-[.toaster]:border-none",

            // Error toast
            "data-[type=error]:group-[.toaster]:bg-red-50 dark:data-[type=error]:group-[.toaster]:bg-red-300  data-[type=error]:group-[.toaster]:border-red-700 data-[type=error]:dark:group-[.toaster]:border-none",

            // Info toast
            "data-[type=info]:bg-blue-100 dark:data-[type=info]:bg-blue-700",
          ),
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
