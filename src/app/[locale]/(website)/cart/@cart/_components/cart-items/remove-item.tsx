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

    // On mutate remove item from cart items
    onMutate: () => {
      const items: CartItem[] = queryClient.getQueryData<CartItem[]>(["cartItems"]) || [];
      const newItems = items?.filter((el) => el.product?._id != productId);
      queryClient.setQueryData<CartItem[]>(["cartItems"], newItems);
      return { items };
    },

    onSuccess: () => {
      toast.success("Item Deleted Successfully");
    },

    onError: (error, _, context) => {
      // If mutation doesn't success return removed item to screen
      if (context?.items) queryClient.setQueryData<CartItem[]>(["cartItems"], context.items);
      toast.error(error.message);
      return error;
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
