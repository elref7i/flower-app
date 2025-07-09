"use client";
import { useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils/cn";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";

export default function FilterHeader({ title }: { title: string }) {
  // Hooks
  const t = useTranslations();
  const searchParams = useSearchParams().toString();
  const router = useRouter();

  // Function to remove search param
  function handleReset() {
    const createSearchParams = new URLSearchParams(searchParams);

    // Condition to apply reset on price, this condition because search params for price not equal title
    if (title === "price") {
      createSearchParams.delete("min-price");
      createSearchParams.delete("max-price");
    }

    // Else remove search param with value equal title
    else createSearchParams.delete(title);

    // Navigate to the new Search params
    router.push(`?${createSearchParams}`, { scroll: false });
  }

  return (
    <div className="flex mb-2 items-center justify-between bg-background dark:bg-[#121212] z-10 sticky top-0 left-0 right-0">
      {/* Title */}
      <h3 className="text-lg h-full font-semibold pb-1 capitalize">{t(title)}</h3>

      {/* Reset button  */}
      <button
        onClick={handleReset}
        className={cn(
          `flex opacity-0 rtl:flex-row-reverse cursor-default items-center capitalize justify-center py-0 w-fit text-red-600 text-sm px-2 rounded-sm hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-opacity duration-200 ease-in-out`,
          searchParams.toLocaleLowerCase().includes(title.toLocaleLowerCase()) &&
            "opacity-100 cursor-pointer",
        )}
      >
        <X className="size-4 mr-1" /> <span>{t("reset")}</span>
      </button>
    </div>
  );
}
