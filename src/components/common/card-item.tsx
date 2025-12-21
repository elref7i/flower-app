import { ShoppingCart, Star, Heart, Eye } from "lucide-react";
import Image from "next/image";
import React from "react";
import AddToCart from "./add-to-cart/add-to-cart";


const isNew = (createdAt: string) => {
  const createdDate = new Date(createdAt);
  const now = new Date();
  const daysDiff = (now.getTime() - createdDate.getTime()) / (1000 * 60 * 60 * 24);
  return daysDiff <= 7;
}
const isHot = (sold: number) => {
  return sold >= 100;
}
const isOutOfStock = (quantity: number) => {
  return quantity === 0;
}

export default function ProductItem({ product }: { product: Product }) {
  // Flags
  const newFlag = isNew(product.createdAt);
  const hotFlag = isHot(product.sold);
  const outOfStockFlag = isOutOfStock(product.quantity);

  // Split Title
  const shortTitle = product.title.split(" ", 3).join(" ") +
    (product.title.split(" ").length > 3 ? "..." : "");

  return (

    <div className="w-[302px] h-[360px] flex flex-col group">

      <div className="rounded-xl relative">

        {/* Badges */}
        <div className='flex absolute top-2 end-2 gap-2.5 z-10'>
          {newFlag && <span className='bg-zinc-100 text-zinc-700 text-xs font-medium rounded-full py-0.5 px-2 uppercase'>New</span>}
          {hotFlag && <span className='bg-maroon-50 text-maroon-600 text-xs font-medium rounded-full py-0.5 px-2 uppercase'>Hot</span>}
          {outOfStockFlag && <span className='bg-red-600 text-softPink-50 text-xs font-medium rounded-full py-0.5 px-2'>Out of Stock</span>}
        </div>

        {/* Image */}
        <Image
          src={product.imgCover}
          alt={product.title}
          width={320}
          height={272}
          className="w-[320px] h-[272px] object-cover rounded-[12px]"
        />

        {/* Hover Layer */}
        <div className="flex items-center justify-center absolute inset-0 gap-3 bg-[#E65073] bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl">
          {/*Wishlist Button */}
          <div className="bg-white size-[34px] rounded-full flex justify-center items-center cursor-pointer">
            <Heart size={18} color="#741C21" strokeWidth={1.5} />
          </div>
          {/*Quick View Button */}
          <div className="bg-white size-[34px] rounded-full flex justify-center items-center cursor-pointer">
            <Eye size={18} color="#741C21" strokeWidth={1.5} />
          </div>
        </div>

      </div>

      {/* Content */}
      <div className=" flex flex-col justify-between mt-2">

        {/* Title */}
        <h2 className="font-semibold text-maroon-700 dark:text-softpink-200 text-lg leading-tight">
          {shortTitle}
        </h2>

        {/* rating + price + icon */}
        <div className="flex justify-between items-center mt-2">
          <div>
            {/* Rating stars */}
            <div className="flex space-x-1 text-[#FBA707]">
              {Array.from({ length: 5 }, (_, i) => ( // 5 نجوم
                <Star
                  key={i}
                  size={12}

                  className={i < Math.round(product.rateAvg || 0) ? "fill-[#FBA707]" : ""}
                />
              ))}
            </div>

            {/* Product Price */}
            <div className="flex font-medium mt-1">
              <p className="text-[14px] text-maroon-700 dark:text-softpink-200 me-2">
                {/* Price After Discount */}
                {product.priceAfterDiscount?.toFixed(2) || product.price?.toFixed(2)} EGP
              </p>
              <p className="text-[13px] text-zinc-400 dark:text-zinc-500 line-through">
                {/* Old Price */}
                {product.priceAfterDiscount ? product.price?.toFixed(2) : ''}
              </p>
            </div>
          </div>

          {/* Cart Icon */}
          <div className="size-[42px] bg-maroon-600 rounded-full flex justify-center items-center dark:bg-maroon-500 cursor-pointer">
            <AddToCart product={product._id}>
              <ShoppingCart className="text-white" size={20} />
            </AddToCart>
          </div>

        </div>

      </div>

    </div>
  );
}

