import { ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function ProductItem({ product }: { product: Product }) {
  return (
    <div className=" w-full h-[364px] ">
      <img
        src={product.imgCover}
        alt={product.title}
        className="w-full aspect-square rounded-[12px] "
      />
      <h2 className="mt-[14px] font-semibold text-maroon-700 dark:text-softpink-200 text-lg">
        {product.title.slice(1, 25)}...
      </h2>

      <div className="flex justify-between">
        <div>
          {/* Rating stars */}
          <div className="flex mt-1 space-x-1 text-[#FBA707]">
            {Array.from({ length: 4 }, (_, i) => (
              <Star
                key={i}
                size={14.38}
                className={i < product.rateAvg ? "fill-[#FBA707]  " : " "}
              />
            ))}
          </div>

          {/* Product Price */}
          <div className="flex  font-medium mt-1">
            <p className="text-[16px] text-maroon-700 dark:text-softpink-200 me-2">
              {product.price.toFixed(2)} EGP
            </p>
            <p className="text-zinc-400 dark:text-zinc-500 line-through ">
              {product.priceAfterDiscount.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Cart Icon */}
        <div className="w-[42px] h-[42px] bg-maroon-600 dark:bg-maroon-500 flex justify-center items-center rounded-[999px]">
          <ShoppingCart className="text-white" />
        </div>
      </div>
    </div>
  );
}
