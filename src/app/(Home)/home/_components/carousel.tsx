"use client";
import Item from "@/components/common/card-item";
import useGetProducts from "../_hooks/best-selling-hook";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselPage() {
  const { payload, isLoading } = useGetProducts();

  return (
    <>
      <div className="w-[954px] ms-20">
  
        <Carousel>
          <CarouselContent className="flex gap-[24px] ">
            {payload?.map((product: product) => (
              <CarouselItem key={product._id} className="basis-[302px] shrink-0">
                <Item
                  image={product.imgCover}
                  title={product.title}
                  label="h"
                  rate={product.rateCount}
                  price={product.price}
                  priceAfterDiscount={product.priceAfterDiscount}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className=" dark:bg-maroon-500 dark:hover:bg-maroon-500 bg-maroon-600 hover:bg-maroon-600" />

          <CarouselNext className=" dark:bg-maroon-500 dark:hover:bg-maroon-500 bg-maroon-600 hover:bg-maroon-600" />
        </Carousel>
      </div>
    </>
  );
}
