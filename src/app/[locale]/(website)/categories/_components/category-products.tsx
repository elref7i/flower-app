import { getAllProductsByCategory } from "@/lib/api/products.api";
import Image from "next/image";
import React from "react";
import RatingStars from "./rating-star";
import { Eye, Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
Link
export default async function CategoryProducts({ id }: { id: string }) {
  // Variables
  const products: Product[] = await getAllProductsByCategory(id);
  //isNew
  const isNew = (createdAt: string) => {
    const createdDate = new Date(createdAt);
    const now = new Date();
    const daysDiff = (now.getTime() - createdDate.getTime()) / (1000 * 60 * 60 * 24);
    return daysDiff <= 7;
  }
  //isHot
  const isHot = (sold: number) => {
    return sold >= 100;
  }
  //isOutOfStock
  const isOutOfStock = (quantity: number) => {
    return quantity === 0;
  }
  return (
    <div className="gap-6 grid grid-cols-4 py-4">
      {products.map((prod) => {
        const newFlag = isNew(prod.createdAt);
        const hotFlag = isHot(prod.sold);
        const outOfStockFlag = isOutOfStock(prod.quantity);
        return (
          <Link href={`/products/${prod._id}`} key={prod._id} className="gap-4 rounded-2xl group">
            {/*product cover*/}
            <div className="rounded-xl relative ">
              {/*budges*/}
              <div className='flex absolute top-2 end-2 gap-2.5'>
                {newFlag && <span className='bg-zinc-100 text-zinc-700 text-xs font-medium rounded-full py-0.5 px-2 uppercase'>New</span>}
                {hotFlag && <span className='bg-maroon-50 text-maroon-600 text-xs font-medium rounded-full py-0.5 px-2 uppercase'>Hot</span>}
                {outOfStockFlag && <span className='bg-red-600 text-softPink-50 text-xs font-medium rounded-full py-0.5 px-2'>Out of Stock</span>}
              </div>
              {/*image*/}
              <Image
                src={prod.imgCover}
                alt={prod.title}
                width={302}
                height={272}
                className="h-[272px] w-full rounded-xl"
              />
              {/*layer*/}
              <div className="flex items-center justify-center absolute inset-0 gap-1 bg-[#E65073] bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl">
                {/*heart icon*/}
                <div className="bg-white size-[30px] rounded-full flex justify-center items-center gap-2.5 ">
                  <Heart size={20} color="#741C21" strokeWidth={1.25} />
                </div>
                {/*view icon*/}
                <div className="bg-white size-[30px] rounded-full flex justify-center items-center gap-2.5">
                  <Eye size={20} color="#741C21" strokeWidth={1.25} />
                </div>
              </div>
            </div>

            {/*details*/}
            <div className="gap-3 ">
              {/*title*/}
              <h3 className="text-maroon-700 font-semibold text-lg dark:text-softpink-200">
                {prod.title.split(" ", 3).join(" ") + (prod.title.split(" ").length > 3 ? "..." : "")}
              </h3>
              <div className="relative overflow-hidden py-1">
                {/*rating*/}
                <RatingStars rating={prod.rateAvg || 4} />
                {/*price*/}
                <div className="flex py-1">
                  <span className="text-maroon-700 font-medium gap-2 dark:text-softpink-200">
                    {prod.priceAfterDiscount} EGP
                  </span>
                  <span className="text-zinc-400 font-medium line-through dark:text-zinc-500">
                    {prod.price} EGP
                  </span>
                </div>
                {/*icon*/}
                <div className="size-[42px] bg-maroon-600 rounded-full flex justify-center items-center dark:text-maroon-500 absolute end-0 top-1/2 -translate-y-1/2">
                  <ShoppingCart size={24} color="#ffffff" />
                </div>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  );
}
