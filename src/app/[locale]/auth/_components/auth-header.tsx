"use client";

import LanguageToggle from "@/components/common/language-toggle";
import { ModeToggle } from "@/components/common/theme-toggle";
import { AuthHeaderProps } from "@/lib/types/auth";
import { cn } from "@/lib/utils/cn";
import separator from "@assets/imgs/separator-1 1.png";
import darkSeparator from "@assets/imgs/separator-1 dark.png";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import Image from "next/image";

/**
 * Renders a header section commonly used on authentication pages.
 *
 * Includes:
 * - Language toggle
 * - Theme toggle (light/dark)
 * - A separator image that switches based on the active theme
 * - Props is optional message (the key that defines in translation files)
 *
 * @component
 * @param {AuthHeaderProps} props
 * @returns {JSX.Element} AuthHeader component
 */
export default function AuthHeader({ message }: AuthHeaderProps) {
  // Hook to get currant theme
  const { theme } = useTheme();

  // Hook for translation
  const t = useTranslations();

  // Hook to get currant language
  const locale = useLocale();

  return (
    <div className="w-full mb-6 border border-l-0 border-r-0 border-t-0 border-zinc-200 dark:border-zinc-600 pb-4">
      {/* Mode and Language toggle buttons */}
      <div className="flex justify-between items-center mb-10">
        <LanguageToggle />
        <ModeToggle />
      </div>

      <div className="w-72 md:w-80 m-auto ">
        {/* Separator Image */}
        <Image
          src={theme === "dark" ? darkSeparator : separator}
          className="w-full mb-10"
          alt="separator"
        />

        {/* Condition to render message if it is exist */}
        {message && (
          <h3
            className={cn(
              " text-maroon-700 text-center text-5xl font-edwiardian dark:text-softpink-300 pb-2",
              locale === "ar" && ["font-diwany"],
            )}
          >
            {t(message)}
          </h3>
        )}
      </div>
    </div>
  );
}
