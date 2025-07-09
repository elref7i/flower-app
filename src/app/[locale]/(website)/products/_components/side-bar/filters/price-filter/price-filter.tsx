"use client";
import FilterHeader from "../../filter-header";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useFilterPrice from "./hook/use-price-filter";

export default function PriceFilter() {
  const { form, onSubmit, t } = useFilterPrice();

  return (
    <div className="relative">
      {/* Filter header */}
      <FilterHeader title="price" />

      {/* Form */}
      <Form {...form}>
        <form className="flex w-full gap-2 ">
          {/* Minimum Price Field */}
          <FormField
            control={form.control}
            name="minPrice"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel className="text-sm font-medium capitalize">{t("from")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder="0"
                    className="w-full h-12"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      setTimeout(() => {
                        form.handleSubmit(onSubmit)();
                      }, 1000);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Maximum Price field */}
          <FormField
            control={form.control}
            name="maxPrice"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel className="text-sm font-medium capitalize">{t("to")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder="1000000"
                    className="w-full h-12"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      setTimeout(() => {
                        form.handleSubmit(onSubmit)();
                      }, 1000);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
}
