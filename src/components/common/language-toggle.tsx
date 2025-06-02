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

export default function LanguageToggle() {
  const languages = { en: "English", ar: "العربية" };
  const locale = useLocale();
  const t = useTranslations();

  //  Set up a state to manage the selected language
  const [position, setPosition] = React.useState(locale);

  // Get the current search parameters to preserve them when changing languages
  const searchParams = useSearchParams().toString();

  return (
    <DropdownMenu dir={`${locale === "ar" ? "rtl" : "ltr"}`}>
      {/* Trigger button for the dropdown menu */}
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="">
          {languages[position as keyof typeof languages]}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {/* Label and separator for accessibility */}
        <DropdownMenuLabel className="sr-only">{t("choose-language")}</DropdownMenuLabel>
        <DropdownMenuSeparator className="sr-only" />

        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          {/* Render a radio button for each language */}
          {routing.locales.map((lang) => (
            <Link href={`/?${searchParams}`} key={lang} locale={lang}>
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
