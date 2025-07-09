import { useRouter } from "@/i18n/navigation";
import { TPriceFilter, usePriceFilterSchema } from "@/lib/schema/price-filter.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

// Hook to filter by price
export default function useFilterPrice() {
  // hooks
  const t = useTranslations();
  const searchParams = useSearchParams();
  const router = useRouter();
  const priceFilterSchema = usePriceFilterSchema();

  // hook form
  const form = useForm<TPriceFilter>({
    // @ts-expect-error
    resolver: zodResolver(priceFilterSchema),
    defaultValues: {
      // @ts-expect-error
      minPrice: searchParams.get("min-price") || "",
      // @ts-expect-error
      maxPrice: searchParams.get("max-price") || "",
    },
  });

  // Submit form function
  const onSubmit: SubmitHandler<TPriceFilter> = (values) => {
    //  get current search params and create a new one
    const createSearchParams = new URLSearchParams(searchParams);

    // if there is no data in min-price field delete it from search params
    if (values.minPrice === undefined && searchParams.get("min-price"))
      createSearchParams.delete("min-price");

    // if there is no data in max-price field delete it from search params
    if (values.maxPrice === undefined && searchParams.get("max-price"))
      createSearchParams.delete("max-price");

    // Add existed values to new search params
    if (values.minPrice) createSearchParams.set("min-price", `${values.minPrice}`);
    if (values.maxPrice) createSearchParams.set("max-price", `${values.maxPrice}`);

    // Navigate to new search params ,that have been created
    router.push(`?${createSearchParams}`, { scroll: false });
  };

  // Hook to listen on search params to reset values
  useEffect(() => {
    if (!searchParams.get("min-price") && !searchParams.get("max-price")) form.reset();
  }, [searchParams]);

  return { form, onSubmit, t };
}
