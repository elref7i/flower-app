"use client";

import { Button } from "@/components/ui/button";
import useAddProduct from "../_hooks/use-add-product";

import { FormProvider } from "react-hook-form";

import { useTranslations } from "next-intl";
import { Loader2 } from "lucide-react";
import TitleAndDescFields from "../../_components/forms-fields/title-and-desc";
import PriceFields from "../../_components/forms-fields/price-fields";
import QuantityField from "../../_components/forms-fields/quantity";
import ImagesFields from "../../_components/forms-fields/images-fields";
import CategoryField from "../../_components/forms-fields/category-field/category-field";
import OccasionField from "../../_components/forms-fields/occasion-field/occasion-field";

export default function AddProductForm() {
  const { form, onSubmit, error, isPending } = useAddProduct();
  const t = useTranslations("products-cu");
  return (
    // add product form
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="p-7 w-3/4 bg-white rounded-2xl h-[940px] overflow-y-scroll scrollBar-hidden"
      >
        <div className="space-y-4">
          <TitleAndDescFields />
          <PriceFields />
          <QuantityField />
          <ImagesFields />
          <CategoryField />
          <OccasionField />
        </div>
        {/* display error if exist */}
        {error && (
          <p className="w-full bg-red-100 text-red-600 px-5 py-2 rounded-md text-center mt-5">
            {error.message}
          </p>
        )}

        {/* submit form button */}
        <Button type="submit" className="w-full font-semibold mt-28" disabled={isPending}>
          {isPending ? (
            <Loader2 width={25} height={25} className="animate-spin text-maroon-500" />
          ) : (
            t("add-product")
          )}
        </Button>
      </form>
    </FormProvider>
  );
}
