"use client";

import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export default function NotFoundPage() {
  const t = useTranslations("NotFoundPage");
  return (
    <main className="flex flex-col gap-8 min-h-screen items-center justify-center">
      {/* Headline */}
      <h1 className="text-red-500 font-bold text-9xl">404</h1>

      {/* Description */}
      <p>{t("title")}.</p>

      {/* Action */}
      <Link href="/" className={cn(buttonVariants({ variant: "link" }))}>
        {t("Action")}
      </Link>
    </main>
  );
}
