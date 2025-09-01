"use client";

import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LabelWithAsterisk from "../label-with-asterisk";
import { Textarea } from "@/components/ui/textarea";
import { useFormContext } from "react-hook-form";
import { useTranslations } from "next-intl";

export default function TitleAndDescFields() {
  const { control } = useFormContext();
  const t = useTranslations("products-cu");
  return (
    <>
      {/* title input */}
      <FormField
        control={control}
        name="title"
        defaultValue={""}
        render={({ field }) => (
          <FormItem>
            <LabelWithAsterisk title="title" />
            <FormControl>
              <Input placeholder={t("enter-title")} {...field} className="w-full" />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      {/* description input */}
      <FormField
        control={control}
        name="description"
        defaultValue={""}
        render={({ field }) => (
          <FormItem>
            <LabelWithAsterisk title="description" />
            <FormControl>
              <Textarea
                placeholder={t("enter-description")}
                className="resize-none w-full"
                {...field}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
