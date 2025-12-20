"use client";

import ProductItem from "@/components/common/card-item";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselPage({ products }: { products: Product[] }) {
  return (
    <Carousel
      className="relative w-full max-w-6xl mx-auto px-2 pt-0 h-full"
      opts={{
        align: "start",
      }}
    >
      <CarouselContent className="flex gap-8 py-4">
        {products &&
          products.map((product: Product) => (
            <CarouselItem
              key={product._id}
              className="md:basis-1/2 lg:basis-[360px]"
            >
              <ProductItem product={product} />
            </CarouselItem>
          ))}
      </CarouselContent>

      {/* Previous Button */}
      <CarouselPrevious
        className="
          absolute left-3 top-1/2 -translate-x-1/2 -translate-y-1/2
          w-10 h-10 rounded-full
          bg-maroon-600 text-white shadow-lg
          hover:bg-maroon-700 z-20  dark:bg-softpink-300 dark:hover:bg-softpink-400 dark:text-zinc-700
        "
      />

      {/* Next Button */}
      <CarouselNext
        className="
          absolute right-14 top-1/2 translate-x-1/2 -translate-y-1/2
          w-10 h-10 rounded-full
          bg-maroon-600 text-white shadow-lg
          hover:bg-maroon-700 z-20
          dark:bg-softpink-300 dark:hover:bg-softpink-400 dark:text-zinc-700
        "
      />
    </Carousel>
  );
}
