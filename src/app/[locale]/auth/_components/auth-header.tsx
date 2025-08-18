"use client";

import LanguageToggle from "@/components/common/language-toggle";
import { ModeToggle } from "@/components/common/theme-toggle";

import { cn } from "@/lib/utils/cn";
import separator from "@assets/imgs/separator-1 1.png";
import darkSeparator from "@assets/imgs/separator-1 dark.png";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import Image from "next/image";

interface AuthHeaderProps {
  page?: string;
}

export default function AuthHeader({ page }: AuthHeaderProps) {
  // Hook to get currant theme
  const { theme } = useTheme();

  // Hook for translation
  const t = useTranslations();

  // Hook to get currant language
  const locale = useLocale();

  return (
    <div className="w-full mb-4 border border-l-0 border-r-0 border-t-0 border-zinc-200 dark:border-zinc-600 pb-4">
      {/* Mode and Language toggle buttons */}
      <div className="flex justify-between items-center mb-5">
        <LanguageToggle />
        <ModeToggle />
      </div>

      <div className="w-[250px] mx-auto md:w-[280px]">
        {/* Separator Image */}
        <Image
          src={theme === "dark" ? darkSeparator : separator}
          className="w-full mb-8"
          alt="separator"
        />

        {/*header message */}
        <h3
          className={cn(
            " text-maroon-700 text-nowrap text-center text-2xl md:text-[43px]  font-edwiardian dark:text-softpink-300 pb-2",
            locale === "ar" && ["font-diwany"],
          )}
        >
          {page === "register" ? `${t("become-part-of-our-family")}` : t("welcome-back")}
        </h3>
      </div>
    </div>
  );
}
