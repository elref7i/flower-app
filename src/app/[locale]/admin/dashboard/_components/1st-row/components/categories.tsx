"use client";

import { LoaderCircle } from "lucide-react";
import { useFormatter, useTranslations } from "next-intl";
import useGetCategories from "../hooks/use-get-categories";

// All categories component
export default function Categories() {
  // Hooks
  const t = useTranslations("dashboard-pages");
  const format = useFormatter();
  const { isLoading, categories, loadMore, isFetchingNextPage, error } = useGetCategories();

  return (
    <div className="md:bg-white w-full md:w-[680px] h-88 rounded-2xl md:p-6 overflow-y-auto scrollBar-hidden dark:bg-zinc-800">
      {/* Title */}
      <h3 className="font-semibold text-2xl mb-5">{t("all-categories")}</h3>

      {/* loading */}
      {isLoading && (
        <div className="text-maroon-600 w-full h-full flex items-center justify-center animate-spin">
          <LoaderCircle width={60} height={60} />
        </div>
      )}

      {/* errors */}
      {error && (
        <p className="text-maroon-600 w-full h-full flex items-center justify-center">
          {error.message}
        </p>
      )}

      {/* categories */}
      {categories.length &&
        categories.map((category) => (
          // Category
          <div
            key={category._id}
            className="flex justify-between pb-2 mt-3 border-b-[1px] border-zinc-200"
          >
            {/* Category name */}
            <p className="text-[16px] capitalize">{category.name}</p>

            {/* number of products */}
            <p className="flex gap-2 px-2 py-1 bg-zinc-100 rounded-md dark:text-zinc-900">
              <span>{format.number(category.productsCount, "units")}</span>
              {t("products", { count: category.productsCount })}
            </p>
          </div>
        ))}

      {/*Observer element to fetch next page */}
      <div className="text-sm text-maroon-500 min-h-1" ref={loadMore}>
        {isFetchingNextPage && (
          <span className="flex gap-5 justify-center mt-3">
            <LoaderCircle className="animate-spin" /> please waite...
          </span>
        )}
      </div>
    </div>
  );
}
