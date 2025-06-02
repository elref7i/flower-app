"use client";
import * as React from "react";
import { useSearchParams } from "next/navigation";

// Import shad cn components
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuCustomRadioItem } from "@/components/common/custom-radio-item";

// Import next-intl and routing
import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { useTranslations } from "use-intl";
import { Link } from "@/i18n/navigation";

/**
 * @file LanguageToggle.tsx
 * @description A client-side React component that renders a language switcher dropdown using ShadCN UI,
 *              with support for `next-intl` internationalization and dynamic routing.
 *
 * This component displays the current language and allows the user to switch between
 * available languages while preserving the current query parameters (search params).
 */

export default function LanguageToggle() {
  const languages = { en: "English", ar: "العربية" };

  // Get the current locale and translations
  const locale = useLocale();
  const t = useTranslations();

  //  Set up a state to manage the selected language
  const [language, setLanguage] = React.useState(locale);

  // Get the current search parameters to preserve them when changing languages
  const searchParams = useSearchParams().toString();

  return (
    <DropdownMenu dir={`${locale === "ar" ? "rtl" : "ltr"}`}>
      {/* Trigger button for the dropdown menu */}
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-18 h-12 text-center text-lg text-zinc-700 font-[400]">
          {languages[language as keyof typeof languages]}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {/* Label and separator for accessibility */}
        <DropdownMenuLabel className="sr-only">{t("choose-language")}</DropdownMenuLabel>
        <DropdownMenuSeparator className="sr-only" />

        <DropdownMenuRadioGroup value={language} onValueChange={setLanguage}>
          {/* Render a radio button for each language */}
          {routing.locales.map((lang) => (
            <Link
              href={`/?${searchParams}`}
              key={lang}
              locale={lang}
              className={`text-lg text-zinc-700`}
            >
              <DropdownMenuCustomRadioItem value={lang}>
                {languages[lang]}
              </DropdownMenuCustomRadioItem>
            </Link>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
