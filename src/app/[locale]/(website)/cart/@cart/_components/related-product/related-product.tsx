import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import getTokenFromCookies from "@/lib/utils/get-cookies-token";
import ProductItem from "@/components/common/card-item";
import { getTranslations } from "next-intl/server";

export default async function RelatedProducts() {
  const t = await getTranslations("cart");

  // Get token
  const token = await getTokenFromCookies();

  //  Get Related products to user
  const response = await fetch(`${process.env.API}/related/recommendations/${token?.user._id}`, {
    headers: {
      Authorization: `Bearer ${token?.token}`,
    },
  });

  const payload: APIResponse<RelatedProductsResponse> = await response.json();
  const products: Recommendation[] = payload.recommendations || [];
  return (
    <>
      {/* Title */}
      <h3 className="mb-9 text-maroon-700 text-4xl font-bold flex gap-3">
        {t.rich("related-products", {
          span: (value) => (
            <span className="relative w-fit block before:bg-softpink-100 before:absolute before:-bottom-1 before:rounded-e-full before:-z-10 before:h-1/2 before:w-full after:absolute after:w-2/5 after:h-[2px] after:bg-softpink-600 after:-bottom-1 after:left-0 rtl:after:right-0 rtl:before:-bottom-2 rtl:after:-bottom-2 ">
              {value}
            </span>
          ),
        })}
      </h3>

      <Carousel className="w-full box-border mx-auto">
        <CarouselContent className="flex gap-[24px] relative">
          {products.length ? (
            products.map((product) => (
              <CarouselItem key={product._id} className="basis-[304px] ">
                <ProductItem product={product} />
              </CarouselItem>
            ))
          ) : (
            <CarouselItem className=" w-fit ms-12 border-zinc-300 font-medium text-maroon-600 text-xl ">
              Something went wrong Can't get Related Products
            </CarouselItem>
          )}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 bg-maroon-600 hover:bg-maroon-500 text-zinc-50" />
        <CarouselNext className="absolute right-0 bg-maroon-600 hover:bg-maroon-500 text-zinc-50 " />
      </Carousel>
    </>
  );
}
