"use client";
import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Trash2 } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";
import { deleteCartItem } from "./action/delete-item.action";
import { toast } from "sonner";

// Remove item from cart
export default function RemoveItemButton({ productId }: { productId: string }) {
  // query client to control remove item render
  const queryClient = useQueryClient();

  // Mutation to remove item
  const { mutate } = useMutation({
    mutationKey: ["deleteItem"],
    mutationFn: async () => {
      const response: APIResponse<CartInfo> = await deleteCartItem(productId);
      if (response.message !== "success") throw new Error(response.message || "Can't delete items");
      return response;
    },

    onMutate: async () => {
      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey: ["cartItems"] });

      // Snapshot the previous value
      const previousCart = queryClient.getQueryData<CartInfo>(["cartItems"]);

      // Optimistically update to the new value
      if (previousCart?.cart) {
        queryClient.setQueryData<CartInfo>(["cartItems"], {
          ...previousCart,
          cart: {
            ...previousCart.cart,
            cartItems: previousCart.cart.cartItems.filter((el) => el.product._id !== productId),
          },
          numOfCartItems: (previousCart.numOfCartItems || 1) - 1,
        });
      }

      return { previousCart };
    },

    onSuccess: () => {
      toast.success("Item Deleted Successfully");
      queryClient.invalidateQueries({ queryKey: ["cartItems"] });
    },

    onError: (error, _, context) => {
      // If mutation fails, use the context returned from onMutate to roll back
      if (context?.previousCart) {
        queryClient.setQueryData(["cartItems"], context.previousCart);
      }
      toast.error(error.message);
    },
  });
  const t = useTranslations("cart");

  return (
    <Button
      variant="destructive"
      className="w-fit ms-auto rounded-xl font-medium"
      onClick={() => {
        mutate();
      }}
    >
      <Trash2 width={20} height={20} /> {t("remove")}
    </Button>
  );
}
