"use client";

import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LabelWithAsterisk from "../label-with-asterisk";

import { useFormContext } from "react-hook-form";
import { useTranslations } from "next-intl";

export default function QuantityField() {
  const { control } = useFormContext();
  const t = useTranslations("products-cu");
  return (
    <FormField
      control={control}
      name="quantity"
      render={({ field }) => (
        <FormItem>
          <LabelWithAsterisk title="quantity" />
          <FormControl>
            <Input
              type="number"
              placeholder={t("example", { number: 200 })}
              {...field}
              className="w-full"
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
