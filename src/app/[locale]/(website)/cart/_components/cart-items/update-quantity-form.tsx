"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import useUpdateQuantity from "./hooks/use-update-quantity";
import { startTransition, useRef } from "react";

// Update Cart item form
export function UpdateQuantityForm({
  orderQuantity,
  validQuantity,
  productId,
}: UpdateItemQuantityProps) {
  // Hook to update Quantity
  const { form, onSubmit, setOptValue, error, incrementQuantity, decrementQuantity } =
    useUpdateQuantity({
      orderQuantity,
      validQuantity,
      productId,
    });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-auto flex items-end gap-2 ms-auto">
        {/* decrease quantity button */}
        <Button
          disabled={form.getValues("quantity") === 1}
          onClick={() => decrementQuantity()}
          type="button"
          variant={"secondary"}
          size={"icon"}
          className="size-12 rounded-xl disabled:bg-maroon-50 disabled:opacity-80 dark:disabled:text-softpink-300 disabled:text-maroon-500"
        >
          <Minus width={20} height={20} />
        </Button>

        {/* Quantity input field*/}
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem className="w-24 flex items-center h-full">
              <FormLabel className="sr-only">ََQuantity</FormLabel>
              <FormControl>
                <Input
                  className={cn(
                    "w-full rounded-xl",
                    form.getValues("quantity") === 1
                      ? "text-zinc-400"
                      : "text-zinc-800 dark:text-zinc-50",
                  )}
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    startTransition(() => {
                      setOptValue(+e.target.value);
                    });
                    form.handleSubmit(onSubmit)();
                  }}
                />
              </FormControl>
            </FormItem>
          )}
        />

        {/* Increase quantity button */}
        <Button
          disabled={form.getValues("quantity") === validQuantity}
          onClick={() => incrementQuantity()}
          type="button"
          variant={"secondary"}
          size={"icon"}
          className="size-12 rounded-xl disabled:bg-maroon-50 disabled:opacity-80 dark:disabled:text-softpink-300 disabled:text-maroon-500"
        >
          <Plus width={20} height={20} />
        </Button>
      </form>

      {/* Validation Error message */}
      {form.formState?.errors?.quantity && (
        <FormMessage className="mt-2">{form.formState.errors.quantity.message}</FormMessage>
      )}

      {/* Mutation Error */}
      {error && <FormMessage className="mt-2">{error.message}</FormMessage>}
    </Form>
  );
}
