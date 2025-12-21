import { ShoppingCart, Star } from "lucide-react";
import React from "react";
import AddToCart from "./add-to-cart/add-to-cart";

export default function ProductItem({ product }: { product: Product }) {
  return (
    <div className="w-[302px] h-[360px] flex flex-col">

      {/* الصورة بمقاس 302 × 272 */}
      <img
        src={product.imgCover}
        alt={product.title}
        className="w-[302px] h-[272px] object-cover rounded-[12px]"
      />

      {/* باقي المحتوى */}
      <div className="flex-1 flex flex-col justify-between mt-2">

        {/* العنوان */}
        <h2 className="font-semibold text-maroon-700 dark:text-softpink-200 text-[15px] leading-tight">
          {product.title.slice(0, 22)}...
        </h2>

        {/* rating + السعر + الأيقونة */}
        <div className="flex justify-between items-center mt-2">
          <div>

            {/* Rating stars */}
            <div className="flex space-x-1 text-[#FBA707]">
              {Array.from({ length: 4 }, (_, i) => (
                <Star
                  key={i}
                  size={12}
                  className={i < product.rateAvg ? "fill-[#FBA707]" : ""}
                />
              ))}
            </div>

            {/* Product Price */}
            <div className="flex font-medium mt-1">
              <p className="text-[14px] text-maroon-700 dark:text-softpink-200 me-2">
                {product.price?.toFixed(2)} EGP
              </p>
              <p className="text-[13px] text-zinc-400 dark:text-zinc-500 line-through">
                {product.priceAfterDiscount?.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Cart Icon */}
          <div className="w-[34px] h-[34px] bg-maroon-600 dark:bg-maroon-500 flex justify-center items-center rounded-full">
            <AddToCart product={product._id}>
              <ShoppingCart className="text-white" size={16} />
            </AddToCart>
          </div>

        </div>

      </div>

    </div>
  );
}

