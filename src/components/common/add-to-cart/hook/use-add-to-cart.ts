import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToCart } from "../action/add-to-cart.action";
import { toast } from "sonner";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

// Hook to add component to cart
export default function useAddToCart() {
  const t = useTranslations("cart");
  const queryClient = useQueryClient();
  const { isPending, mutate } = useMutation({
    mutationKey: ["addToCart"],

    // Add to cart mutation
    mutationFn: async ({ product, quantity }: { product: string; quantity: number }) => {
      const payload = await addToCart({ product, quantity });
      if (payload.message !== "success") throw new Error(payload.message);

      return payload;
    },

    // Success
    onSuccess: async () => {
      toast.dismiss();
      toast.success(t("add-cart-success"));
      await queryClient.refetchQueries({ queryKey: ["cartItems"] });
    },

    // Error
    onError: (error) => {
      toast.dismiss();
      toast.error(error?.message || t("add-cart-error"));
    },
  });

  //   toast loading
  useEffect(() => {
    if (isPending) toast.loading(t("adding-to-cart"));
  }, [isPending]);

  return { isPending, mutate };
}
