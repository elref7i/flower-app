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

  const payload = await response.json() as SuccessfullResponse<RelatedProductsResponse>;
  const products: Recommendation[] = payload.recommendations || [];
  return (
    <section className="container mt-20 mb-96 flex flex-col gap-4">
      {/* Title */}

      <h1 className="relative  w-fit text-4xl font-bold text-maroon-700 before:absolute before:bottom-0 before:h-1 before:w-[30%] before:bg-maroon-400 before:dark:bg-softpink-600 after:absolute after:bottom-0 after:left-0 after:-z-10 after:h-1/2 after:w-[70%] after:rounded-e-full after:bg-maroon-100 dark:text-softpink-200 after:dark:bg-zinc-700 after:rtl:right-0">
        Related Products
      </h1>

      <Carousel className="w-full box-border mx-auto mt-0">
        <CarouselContent className="flex gap-[24px] relative">
          {products.length ? (
            products.map((product) => (
              <CarouselItem key={product._id} className="basis-[304px] ">
                <ProductItem product={product as any} />
              </CarouselItem>
            ))
          ) : (
            <CarouselItem className=" w-fit ms-12 border-zinc-300 font-medium text-maroon-600 text-xl ">
              Something went wrong Can't get Related Products
            </CarouselItem>
          )}
        </CarouselContent>
        <CarouselPrevious className="absolute -left-4 bg-maroon-600 hover:bg-maroon-500 text-zinc-50 dark:text-zinc-700 dark:bg-softpink-300" />
        <CarouselNext className="absolute -right-4 bg-maroon-600 hover:bg-maroon-500 text-zinc-700 dark:bg-softpink-300" />
      </Carousel>
    </section>
  );
}
