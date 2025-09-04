"use client";
import useAddToCart from "./hook/use-add-to-cart";

export default function AddToCart({ children, product, quantity = 1 }: AddToCart) {
  const { isPending, mutate } = useAddToCart();
  return (
    <div
      aria-disabled={isPending}
      className="cursor-pointer aria-disabled:cursor-not-allowed"
      onClick={() => mutate({ product, quantity })}
    >
      {children}
    </div>
  );
}
