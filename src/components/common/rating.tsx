"use client";

import React, { useState } from "react";
// import { useState } from "react";
import StarRating_Fractions from "../commerce-ui/star-rating-fractions";

interface StarRatingDynamicProps {
  rating: number;
  setRating: (rating: number) => void;
}

export function StarRatingDyanmic({ rating, setRating }: StarRatingDynamicProps) {
  //Functions

  return (
    <div className="flex flex-row items-center gap-2">
      <StarRating_Fractions
        className="text-yellow-[#FFA508]"
        iconSize={25}
        value={rating}
        onChange={setRating}
        maxStars={5}
      />
      {rating > 0 && <p className="font-semibold">({rating})</p>}
    </div>
  );
}
export function StarRatingStatic({ ratingNumber }: { ratingNumber: number }) {
  return (
    <div className="flex flex-row items-center gap-4">
      <StarRating_Fractions
        className="text-yellow-[#FFA508]"
        iconSize={20}
        readOnly={true}
        value={ratingNumber}
        maxStars={5}
      />
    </div>
  );
}
