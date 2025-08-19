"use client";
import ProductItem from "@/components/common/card-item";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { fetchBestSellers } from "@/lib/api/products.api";
export default function CarouselPage({ products }: { products: Product[] }) {
  return (
    <Carousel
      className="relative w-full max-w-4xl "
      opts={{
        align: "start",
      }}
    >
      <CarouselContent className="flex gap-6 ">
        {products.map((product: Product) => (
          <CarouselItem key={product._id} className="basis-[304px] shrink-0">
            <ProductItem product={product} />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="bg-maroon-600 dark:bg-maroon-500 absolute left-0 top-1/2 -translate-x-1/2 z-10 cursor-pointer " />

      <CarouselNext className="bg-maroon-600 dark:bg-maroon-500 absolute right-0 top-1/2 translate-x-1/2 z-10 cursor-pointer  " />
    </Carousel>
  );
}
