"use client";
import { Star } from "lucide-react";
import FilterHeader from "../../filter-header";
import useRatingFilter from "./hook/use-rating-filter";

export default function RatingFilter() {
  const { rate, handleRate } = useRatingFilter();
  return (
    <div>
      {/* Filter header */}
      <FilterHeader title="rating" />
      <div className="flex gap-2 text-[#FBA707]">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <Star
              key={i}
              className="size-6"
              strokeWidth={1}
              fill={rate != null && rate >= i ? "#FBA707" : "none"}
              onClick={() => {
                handleRate(i);
              }}
            />
          ))}
      </div>
    </div>
  );
}
