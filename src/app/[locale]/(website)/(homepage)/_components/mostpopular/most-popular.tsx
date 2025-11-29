"use client";
import React from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";
import ProductItem from "@/components/common/card-item";
import { useLocale, useTranslations } from "next-intl";
import { cn } from "@/lib/utils/cn";
import { Button } from "@/components/ui/button";
import { MoveLeft, MoveRight } from "lucide-react";

type MostPopularProps = {
  occasions: Occasion[];
  products: Product[];
  currentSelectedOccasion: string | null;
};

export default function MostPopular({
  occasions,
  products,
  currentSelectedOccasion,
}: MostPopularProps) {
  // Translation
  const t = useTranslations();
  const locale = useLocale();
  // Navigation
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  // functions
  const handleClick = (occasionId: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("occasion", occasionId);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <section className="w-full">
      {/* Heading */}
      <div className="flex justify-between items-center w-full mb-10">
        {/* Title */}
        <h3 className="relative  w-fit text-4xl font-bold text-maroon-700 before:absolute before:bottom-0 before:h-[2px] before:w-[30%] before:bg-maroon-400 before:dark:bg-softpink-600 after:absolute after:bottom-0 after:left-0 after:-z-10 after:h-1/2 after:w-[70%] after:rounded-e-full after:bg-maroon-100 dark:text-softpink-200  after:dark:bg-zinc-700 after:rtl:right-0">Most Popular</h3>

        {/* Occasions */}
        <ul className="flex space-x-5 font-medium text-base">
          {occasions.map((occasion: Occasion) => {
            const isActive = currentSelectedOccasion
              ? currentSelectedOccasion === occasion._id
              : occasion.name === "Wedding";
            return (
              <li
                key={occasion._id}
                className={cn(
                  "cursor-pointer hover:text-maroon-600 transition-colors",
                  isActive
                    ? "text-maroon-600 font-bold dark:text-softpink-200"
                    : "text-zinc-700 dark:text-zinc-400",
                )}
                onClick={() => handleClick(occasion._id)}
              >
                <p>{occasion.name}</p>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Products */}
      {products.length > 0 ? (
        <div>
          {/* Grid of products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products &&
              products.map((product) => <ProductItem product={product} key={product._id} />)}
          </div>

          {/* View More Button */}
          <div className=" mt-10 flex justify-end">
            <Button className=" bg-transparent dark:bg-transparent text-base font-semibold text-maroon-700 dark:text-softpink-200 hover:bg-transparent hover:dark:bg-transparent ">
              {t("veiw-more")}
              {locale == "en" ? <MoveRight /> : <MoveLeft />}
            </Button>
          </div>
        </div>
      ) : (
        <div className="text-center py-6 rtl:text-right min-h-44 flex items-center justify-center">
          {t("no-products")}
        </div>
      )}
    </section>
  );
}
