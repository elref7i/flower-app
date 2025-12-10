"use client";

import ProductItem from "@/components/common/card-item";
import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
interface CarouselBestSellingProps {
  products: Product[];
}
export default function CarouselBestSelling({ products }: CarouselBestSellingProps) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem key={product._id} className="md:basis-1/2 lg:basis-1/3">
            <div>
              <Card className="p-0">
                <CardContent className="flex aspect-square items-center justify-center rounded-lg relative ">
                  <ProductItem product={product} key={product._id} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
