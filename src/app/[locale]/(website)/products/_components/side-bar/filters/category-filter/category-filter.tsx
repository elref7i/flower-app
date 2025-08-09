"use client";

import FilterHeader from "../../filter-header";
import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import { LoaderCircle } from "lucide-react";
import useCategoryFilter from "./hook/use-category-filter";
import { useTranslations } from "next-intl";

export default function CategoryFilter() {
  // hooks
  const {
    error,
    isLoading,
    loadMore,
    categories,
    handleCategory,
    searchParams,
    isFetchingNextPage,
  } = useCategoryFilter();

  // Translations
  const t = useTranslations();

  return (
    <>
      <div className="max-h-64 overflow-y-auto scrollBar-hidden relative ">
        {/*Filter header component */}
        <FilterHeader title="category" />

        {/* display error if exist */}
        {error && <h3 className="text-sm text-maroon-500">{error.message}</h3>}

        {/* display loading */}
        {isLoading && (
          <div className="text-sm text-maroon-500">
            <span className="flex gap-5 justify-center mt-3">
              <LoaderCircle className="animate-spin" /> {t("please-wait")}
            </span>
          </div>
        )}

        {/* display payload */}
        {categories && (
          <div className="space-y-1">
            {categories?.length ? (
              categories.map((cat) => (
                // Category
                <div
                  key={cat._id}
                  onClick={() => {
                    handleCategory(cat._id);
                  }}
                  className={cn(
                    "w-full bg-zinc-200 dark:bg-zinc-700 flex items-center h-7 rounded-sm overflow-hidden gap-3 cursor-pointer text-sm font-medium transition-colors duration-300 ease-in-out",
                    searchParams.get("category") === cat._id &&
                      "bg-maroon-50 dark:bg-softpink-100",
                    searchParams.get("category") !== cat._id &&
                      "hover:bg-zinc-300 dark:hover:bg-zinc-600",
                  )}
                >
                  {/* Category Icon */}
                  <span
                    className={cn(
                      "bg-zinc-500 py-1 px-2 transition-colors duration-300 ease-in-out",
                      searchParams.get("category") === cat._id &&
                        "bg-maroon-600 dark:bg-softpink-300",
                    )}
                  >
                    <Image src={cat.image} width={21} height={20} alt="icon" />
                  </span>

                  {/* Category name */}
                  <h3>{cat.name}</h3>
                </div>
              ))
            ) : (
              // If there are no categories
              <p className="w-full text-sm text-maroon-500 border rounded-md py-3 px-2 border-zinc-300 dark:border-zinc-700">
                {t("empty-message", { name: t("category") })}
              </p>
            )}

            {/*Observer element to fetch next page */}
            <div className="text-sm text-maroon-500 min-h-1" ref={loadMore}>
              {isFetchingNextPage && (
                <span className="flex gap-5 justify-center mt-3">
                  <LoaderCircle className="animate-spin" /> {t("please-wait")}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
