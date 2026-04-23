"use client";

import { cn } from "@/lib/utils/cn";
import { useQuery } from "@tanstack/react-query";
import CartItem from "./cart-item";
import { Loader2, ShoppingBag } from "lucide-react";

// Cart Items
export default function CartItems({ initialData }: { initialData?: any }) {
  // Hook to get Cart items from route handler
  const { data: payload, isLoading, error } = useQuery({
    queryKey: ["cartItems"],
    queryFn: async () => {
      const response = await fetch("/api/cart");
      if (!response.ok) throw new Error("Failed to fetch cart");
      const data: APIResponse<CartInfo> = await response.json();
      if ("message" in data && data.message !== "success") throw new Error(data.message || "can't get items");
      return data;
    },
    initialData: initialData as any,
  });

  // Since we have initialData, isLoading will be false initially
  if (isLoading && !payload) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center py-24 gap-4">
        <Loader2 className="animate-spin text-maroon-600" size={48} />
        <p className="text-zinc-500 font-medium animate-pulse">Loading your cart...</p>
      </div>
    );
  }

  if (error && !payload) {
    return (
      <div className="flex-1 py-20 text-center flex flex-col items-center gap-4">
        <div className="bg-red-50 p-4 rounded-full">
          <ShoppingBag className="text-red-500" size={32} />
        </div>
        <div className="space-y-1">
          <p className="text-red-600 font-bold text-lg">Oops! Something went wrong</p>
          <p className="text-zinc-500 text-sm">{error instanceof Error ? error.message : "Could not load items"}</p>
        </div>
      </div>
    );
  }

  const items = payload?.cart?.cartItems || [];

  if (items.length === 0) {
    return (
      <div className="flex-1 py-20 text-center text-zinc-500 italic">
        Your cart is empty.
      </div>
    );
  }

  return (
    <div className="flex-1">
      {/* Map on cart items to display */}
      {items.map((item: CartItem, i: number) => (
        <div
          className={cn(
            "border-t border-zinc-200 py-6 dark:border-zinc-700",
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
