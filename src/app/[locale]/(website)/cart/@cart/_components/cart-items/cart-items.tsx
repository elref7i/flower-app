"use client";

import { cn } from "@/lib/utils/cn";
import { useQuery } from "@tanstack/react-query";
import CartItem from "./cart-item";
import { Loader2 } from "lucide-react";

// Cart Items
export default function CartItems() {
  // Hook to get Cart items from route handler
  const {
    data: items,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["cartItems"],
    queryFn: async () => {
      const response = await fetch("/api/cart");
      const payload: CartInfo = await response.json();
      if (payload.message !== "success") throw new Error(payload.message || "can't get items");
      return payload.cart.cartItems;
    },
  });

  return (
    <div className="flex-1">
      {/* Error */}
      {error && (
        <p className="bg-red-100 text-red-600 py-3 px-10  mx-auto w-fit rounded-lg">
          Sorry... Some thing went Error,Can't get cart items
        </p>
      )}

      {/* Loading */}
      {isLoading && (
        <Loader2 width={50} height={50} className="my-14 mx-auto animate-spin text-maroon-500" />
      )}

      {/* Map on cart items to display */}
      {items?.map((item, i) => (
        <div
          className={cn(
            "border-t border-zinc-200 py-5 dark:border-zinc-700",
            i === 0 && "border-t-0 pt-0",
          )}
          key={item._id}
        >
          <CartItem item={item} />
        </div>
      ))}
    </div>
  );
}
