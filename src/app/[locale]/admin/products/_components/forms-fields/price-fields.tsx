import React, { useRef, useState } from "react";
import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LabelWithAsterisk from "../label-with-asterisk";

import { useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { useTranslations } from "next-intl";

export default function PriceFields() {
  // hooks
  const { control, getFieldState, getValues } = useFormContext();
  const [finalPrice, setFinalPrice] = useState<number | null>(null);
  const t = useTranslations("products-cu");

  // function to calculate final price
  function calcDiscount() {
    const { isDirty } = getFieldState("discount");
    const { discount, price } = getValues();
    if (isDirty && +discount < +price && +discount > 0) {
      const priceAfterDiscount = +price - +discount;
      setFinalPrice(priceAfterDiscount);
    } else {
      setFinalPrice(null);
    }
  }

  return (
    <div className="grid grid-cols-3 gap-3 justify-center items-center">
      {/* price input */}
      <FormField
        control={control}
        name="price"
        render={({ field }) => (
          <FormItem>
            <LabelWithAsterisk title="price" />
            <FormControl>
              <Input
                type="number"
                placeholder={t("example", { number: 5000 })}
                {...field}
                onChange={(e) => {
                  setTimeout(() => calcDiscount(), 200);
                  field.onChange(e);
                }}
                className="w-full"
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      {/* discount input */}
      <FormField
        control={control}
        name="discount"
        render={({ field }) => (
          <FormItem>
            <Label className="text-sm font-medium">{t("discount")}</Label>
            <FormControl>
              <Input
                type="number"
                placeholder={t("example", { number: 5 })}
                {...field}
                onChange={(e) => {
                  setTimeout(() => calcDiscount(), 200);
                  field.onChange(e);
                }}
                className="w-full"
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      {/* display final price */}
      <FormItem>
        <Label className="text-sm font-medium">{t("final-price")}</Label>
        <FormControl>
          <Input
            value={finalPrice ?? ""}
            type="number"
            readOnly
            placeholder={t("example", { number: 5 })}
            className="w-full bg-zinc-200 border-none cursor-no-drop"
          />
        </FormControl>
      </FormItem>
    </div>
  );
}
