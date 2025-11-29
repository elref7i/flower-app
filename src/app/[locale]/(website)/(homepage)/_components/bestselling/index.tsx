import React from "react";
import Description from "./description";
import CarouselPage from "./carousel";
import { fetchLowStockProducts } from "@/lib/api/products.api";

export default async function BestSelling() {
  // Variables
  const products = await fetchLowStockProducts();
  // console.log(products);


  return (
    <div className="flex flex-col md:flex-row items-start gap-9 py-3  h-96">
      <Description />
      <CarouselPage products={products.products} />
    </div>
  );
}
