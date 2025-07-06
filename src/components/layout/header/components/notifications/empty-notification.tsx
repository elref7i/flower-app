import { BellOff } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

export default function EmptyNotification() {
  // Translations
  const t = useTranslations();
  return (
    <div className="flex min-h-56 w-full flex-col items-center justify-center border-t dark:border-t-zinc-600 dark:bg-zinc-700">
      <BellOff size={50} strokeWidth={1} color="#D4D4D8" />
      <span className="mt-[10px] text-sm font-medium text-[#71717A] dark:text-zinc-400">
        {t("no-notifications-to-display")}
      </span>
    </div>
  );
}
