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
    <div className="w-[954px] ms-20">
      <Carousel>
        <CarouselContent className="flex gap-[24px] ">
          {products.map((product: Product) => (
            <CarouselItem key={product._id} className="basis-[304px] shrink-0">
              <ProductItem product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className=" dark:bg-maroon-500 dark:hover:bg-maroon-500 bg-maroon-600 hover:bg-maroon-600" />

        <CarouselNext className=" dark:bg-maroon-500 dark:hover:bg-maroon-500 bg-maroon-600 hover:bg-maroon-600" />
      </Carousel>
    </div>
  );
}
