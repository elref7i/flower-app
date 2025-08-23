import React from "react";
import Description from "./description";
import CarouselPage from "./carousel";
import { fetchBestSellers } from "@/lib/api/products.api";

export default async function BestSelling() {
  // Variables
  const products = await fetchBestSellers();

  return (
    <div className="flex flex-col md:flex-row items-start gap-6 mt-24 ">
      <Description />
      <CarouselPage products={products} />
    </div>
  );
}
