"use client";

import React, { useState } from "react";
// import { useState } from "react";
import StarRating_Fractions from "../commerce-ui/star-rating-fractions";
import { number } from "zod";

interface StarRatingDynamicProps {
  rating :number;
  setRating: (rating:number) => void;

}
export function StarRatingDyanmic({rating,setRating}:StarRatingDynamicProps) {
  return (
    <div className="flex flex-row items-center gap-4">
      <StarRating_Fractions
        className="text-yellow-[#FFA508]"
        iconSize={25}
        value={rating}
        onChange={setRating}
        maxStars={5}
      />
      <p>({rating})</p>
    </div>
  );
}
export function StarRatingStatic() {
  return (
    <div className="flex flex-row items-center gap-4">
      <StarRating_Fractions
        className="text-yellow-[#FFA508]"
        iconSize={25}
        readOnly={true}
        value={3}
        maxStars={5}
      />
      <p>({3})</p>
    </div>
  );
}
