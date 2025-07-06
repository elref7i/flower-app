"use client";

import Footer from "@/components/layout/footer";
import MainHeader from "@/components/layout/header/components/main-header";
import NavigationHeader from "@/components/layout/header/components/navigation-header";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils/cn";
import { useTranslations } from "next-intl";

export default function NotFoundPage() {
  const t = useTranslations();
  return (
    <main>
      {/* Main Header */}
      <MainHeader />

      {/* Navigation Header */}
      <NavigationHeader />
      <div className="flex flex-col gap-8 min-h-screen items-center justify-center">
        {/* Headline */}
        <h1 className="text-red-500 font-bold text-9xl">404</h1>

        {/* Description */}
        <p>{t("not-found-page")}.</p>

        {/* Action */}
        <Link href="/" className={cn(buttonVariants({ variant: "link" }))}>
          {t("go-to-homepage")}
        </Link>
      </div>
      {/* Footer */}
      <Footer />
    </main>
  );
}
