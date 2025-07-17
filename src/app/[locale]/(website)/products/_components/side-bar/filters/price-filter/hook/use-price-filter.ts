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
      minPrice: searchParams.get("price[gte]") || "",
      // @ts-expect-error
      maxPrice: searchParams.get("price[lte]") || "",
    },
  });

  // Submit form function
  const onSubmit: SubmitHandler<TPriceFilter> = (values) => {
    //  get current search params and create a new one
    const createSearchParams = new URLSearchParams(searchParams);

    // if there is no data in price[lte] field delete it from search params
    if (values.minPrice === undefined && searchParams.get("price[lte]"))
      createSearchParams.delete("price[lte]");

    // if there is no data in price[gte] field delete it from search params
    if (values.maxPrice === undefined && searchParams.get("price[gte]"))
      createSearchParams.delete("price[gte]");

    // Add existed values to new search params
    if (values.minPrice) createSearchParams.set("price[gte]", `${values.minPrice}`);
    if (values.maxPrice) createSearchParams.set("price[lte]", `${values.maxPrice}`);

    // Navigate to new search params ,that have been created
    router.push(`?${createSearchParams}`, { scroll: false });
  };

  // Hook to listen on search params to reset values
  useEffect(() => {
    if (!searchParams.get("price[lte]") && !searchParams.get("price[gte]")) form.reset();
  }, [searchParams]);

  return { form, onSubmit, t };
}
