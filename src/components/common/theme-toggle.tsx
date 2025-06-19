"use client";
import { Moon, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";

import { Toggle } from "@/components/ui/toggle";
import { useEffect, useState } from "react";

export function ModeToggle() {
  // States
  const [mounted, setMounted] = useState(false);

  // Hooks
  const { setTheme, theme } = useTheme();

  // Effects
  useEffect(() => {
    setMounted(true);
  }, []);

  //Functions
  const handleThemeChange = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // Render
  if (!mounted) return null;

  return (
    <Toggle
      className="size-10"
      onClick={handleThemeChange}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      {theme === "light" ? (
        <Moon size={20} strokeWidth={2.5} />
      ) : (
        <SunMoon size={20} strokeWidth={2.5} />
      )}
    </Toggle>
  );
}
