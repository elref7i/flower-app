"use client";

import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import LabelWithAsterisk from "../../label-with-asterisk";
import OccasionBox from "./occasion-box";

export default function OccasionField() {
  const { control, setValue } = useFormContext();

  return (
    <FormField
      control={control}
      name="occasion"
      defaultValue=""
      render={() => (
        <FormItem>
          <LabelWithAsterisk title="occasion" />
          <FormControl>
            <OccasionBox setBoxValue={(value) => setValue("occasion", value)} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
