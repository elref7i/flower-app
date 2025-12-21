import React from "react";
import GiftCard from "./gift-card";
import GiftCarousol from "./gift-carsoul";

export default function GiftsSection() {
  return (
    <div className="responsive-grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8  ">
      <div className="lg:col-span-1">
        <GiftCard />
      </div>
      <div className="lg:col-span-3 ">
        <GiftCarousol />
      </div>
    </div>
  );
}
