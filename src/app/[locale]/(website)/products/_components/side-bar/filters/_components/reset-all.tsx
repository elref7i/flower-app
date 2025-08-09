"use client";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "@/i18n/navigation";
import { RotateCcw } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Mulish } from "next/font/google";
import React from "react";

const mulish = Mulish({
  weight: ["600"],
  subsets: ["latin"],
});

export default function ResetAllButton() {
  // Translations
  const t = useTranslations();

  // Navigation
  const pathname = usePathname();
  const router = useRouter();

  // Hooks
  const locale = useLocale();
  return (
    <Button
      className={`w-full text-maroon-600 text-sm mt-2 ${
        locale === "ar" ? "font-tajawal" : mulish.className
      }`}
      variant={"secondary"}
      onClick={() => router.push(pathname, { scroll: false })}
    >
      <RotateCcw size={18} /> {t("reset-all")}
    </Button>
  );
}
