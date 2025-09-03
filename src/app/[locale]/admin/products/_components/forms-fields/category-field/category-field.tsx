"use client";

import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import LabelWithAsterisk from "../../label-with-asterisk";
import { useFormContext } from "react-hook-form";
import { CategoryBox } from "./category-box";

export default function CategoryField() {
  const { control, setValue } = useFormContext();

  return (
    <FormField
      control={control}
      name="category"
      defaultValue=""
      render={() => (
        <FormItem>
          <LabelWithAsterisk title="category" />
          <FormControl>
            <CategoryBox setBoxValue={(value) => setValue("category", value)} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
