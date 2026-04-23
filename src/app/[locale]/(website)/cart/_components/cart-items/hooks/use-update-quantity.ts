import { QuantityFormField, useQuantitySchema } from "@/lib/schema/cart.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { startTransition, useEffect, useOptimistic, useState } from "react";
import { useForm } from "react-hook-form";
import { updateQuantityAction } from "../action/update.quantity.action";

export default function useUpdateQuantity({
  orderQuantity,
  validQuantity,
  productId,
}: UpdateItemQuantityProps) {
  // Hooks
  const [quantity, setQuantity] = useState(orderQuantity);
  const [optValue, setOptValue] = useOptimistic(quantity, (_, newValue: number) => newValue);
  const queryClient = useQueryClient();
  const quantitySchema = useQuantitySchema(validQuantity);

  // Hook to update quantity mutation
  const { error, mutate } = useMutation({
    mutationKey: ["updateProductQuantity"],
    mutationFn: async () => {
      const response: APIResponse<CartInfo> = await updateQuantityAction(productId, optValue);
      if ("error" in response) throw new Error(response.error || "Can't update Quantity");
      if (response.message !== "success")
        throw new Error(response.message || "Can't update Quantity");

      // Get item quantity form response to update optimistic value
      const item: CartItem[] = response?.cart?.cartItems.filter(
        (el: CartItem) => el.product._id === productId,
      );

      startTransition(() => {
        setQuantity(item[0].quantity);
      });
    },

    onSuccess: () => {
      // update displayed data
      queryClient.refetchQueries({ queryKey: ["cartItems"] });
    },

    onError: () => {
      startTransition(() => {
        setOptValue(quantity);
        form.setValue("quantity", quantity);
      });
    },
  });

  // define form
  const form = useForm<QuantityFormField>({
    resolver: zodResolver(quantitySchema),
    defaultValues: {
      quantity: optValue,
    },
  });

  // Hook to sync quantity input with optimistic value
  useEffect(() => {
    form.setValue("quantity", optValue);
  }, [optValue]);

  // form submit
  function onSubmit() {
    mutate();
  }

  // Decrement quantity function
  function decrementQuantity() {
    const minus = form.getValues("quantity") - 1;
    // Set input value and  optimistic value
    startTransition(() => {
      form.setValue("quantity", optValue);
      setOptValue(minus);
    });

    // submit form
    form.handleSubmit(onSubmit)();
  }

  // Increment Quantity function
  function incrementQuantity() {
    const plus = form.getValues("quantity") + 1;

    // Set input value and  optimistic value
    startTransition(() => {
      form.setValue("quantity", optValue);
      setOptValue(plus);
    });
    form.handleSubmit(onSubmit)();
  }

  return { form, onSubmit, setOptValue, error, incrementQuantity, decrementQuantity };
}
