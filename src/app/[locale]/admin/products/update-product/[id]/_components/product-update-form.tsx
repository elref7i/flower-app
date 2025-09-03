"use client";

import { Button } from "@/components/ui/button";
import { FormProvider } from "react-hook-form";
import { useTranslations } from "next-intl";
import { Loader2 } from "lucide-react";
import useUpdateProducts from "../_hooks/use-update-product";
import TitleAndDescFields from "../../../_components/forms-fields/title-and-desc";
import PriceFields from "../../../_components/forms-fields/price-fields";
import QuantityField from "../../../_components/forms-fields/quantity";
import CategoryField from "../../../_components/forms-fields/category-field/category-field";
import OccasionField from "../../../_components/forms-fields/occasion-field/occasion-field";

// update product form
export default function UpdateProductForm({ id }: { id: string }) {
  const { form, onSubmit, error, isPending } = useUpdateProducts(id);
  const t = useTranslations("products-cu");
  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="p-7 w-3/4 bg-white rounded-2xl h-[940px] overflow-y-scroll scrollBar-hidden"
      >
        {/* form fields */}
        <div className="space-y-4">
          <TitleAndDescFields />
          <PriceFields />
          <QuantityField />
          <CategoryField />
          <OccasionField />
        </div>

        {/* display error if exist */}
        {error && (
          <p className="w-full bg-red-100 text-red-600 px-5 py-2 rounded-md text-center mt-5">
            {error.message}
          </p>
        )}

        {/* submit button */}
        <Button type="submit" className="w-full font-semibold mt-28" disabled={isPending}>
          {isPending ? (
            <Loader2 width={25} height={25} className="animate-spin text-maroon-500" />
          ) : (
            t("update-product")
          )}
        </Button>
      </form>
    </FormProvider>
  );
}
