"use client";

import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils/cn";
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
=======

>>>>>>> Stashed changes
import { useTranslations } from "next-intl";

export default function NotFoundPage() {
  const t = useTranslations();
  return (
    <main className="flex flex-col gap-8 min-h-screen items-center justify-center">
      {/* Headline */}
      <h1 className="text-red-500 font-bold text-9xl">404</h1>

      {/* Description */}
      <p>{t("not-found-page")}.</p>

      {/* Action */}
      <Link href="/" className={cn(buttonVariants({ variant: "link" }))}>
        {t("go-to-homepage")}
      </Link>
    </main>
  );
}
