import React from "react";
import CategoryFilter from "./filters/category-filter/category-filter";
import OccasionFilter from "./filters/occasion-filter/occasion-filter";
import RatingFilter from "./filters/rating-filter/rating-filter";
import PriceFilter from "./filters/price-filter/price-filter";
import ResetAllButton from "./filters/_components/reset-all";

export default function SideBar() {
  return (
    <aside className="w-full pe-6">
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
      <ResetAllButton />
    </aside>
  );
}
