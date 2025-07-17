"use client";
import React from "react";
import CategoryFilter from "./filters/category-filter/category-filter";
import OccasionFilter from "./filters/occasion-filter/occasion-filter";
import RatingFilter from "./filters/rating-filter/rating-filter";
import PriceFilter from "./filters/price-filter/price-filter";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";
import { Mulish } from "next/font/google";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

const mulish = Mulish({
  weight: ["600"],
  subsets: ["latin"],
});
export default function SideBar() {
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  return (
    <aside className="w-full ltr:pr-6 rtl:pl-6 ">
      {/* Category filter */}
      <CategoryFilter />
      <hr className="block w-full mt-6 mb-4 bg-zinc-100 dark:bg-zinc-700 h-[1px]" />

      {/* Occasion Filter */}
      <OccasionFilter />
      <hr className="block w-full mt-5 mb-3 bg-zinc-100 dark:bg-zinc-700 h-[1px]" />

      {/* Rating filter */}
      <RatingFilter />
      <hr className="block w-full mt-5 mb-3 bg-zinc-100 dark:bg-zinc-700 h-[1px]" />

      {/* Price filter */}
      <PriceFilter />
      <hr className="block w-full mt-5 mb-3 bg-zinc-100 dark:bg-zinc-700 h-[1px]" />

      {/* Rest button */}
      <Button
        className={`w-full text-maroon-600 text-sm mt-2 ${
          locale === "ar" ? "font-tajawal" : mulish.className
        }`}
        variant={"secondary"}
        onClick={() => router.push(pathname, { scroll: false })}
      >
        <RotateCcw size={18} /> {t("reset-all")}
      </Button>
    </aside>
  );
}
