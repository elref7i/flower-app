"use client";

import { useState } from "react";
import StarRating_Fractions from "../commerce-ui/star-rating-fractions";

export function StarRatingDynamic() {
  const [rating, setRating] = useState(4.3);
  return (
    <div className="flex flex-row items-center gap-4">
      <StarRating_Fractions
        className="text-yellow-500"
        value={rating}
        onChange={setRating}
        maxStars={5}
      />
      <p>({rating})</p>
    </div>
  );
}
export function StarRatingReadonly() {
  return (
    <div className="flex items-center gap-2">
      <StarRating_Fractions value={3.5} readOnly maxStars={5} />
      <p>(3.5)</p>
    </div>
  );
}
