import React from "react";
import SummaryWithDiscount from "./_components/summary-with-discount";
import SummaryWithoutDiscount from "./_components/summary-without-discount";
import { getCartItems } from "@/lib/api/cart";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { useRouter } from "next/navigation";
import CheckoutButton from "./_components/check-out-button";

export default async function Summary() {
  // Variables
  const cartInfo: CartInfo = await getCartItems();
  const cartItems = cartInfo.cart.cartItems;
  // check has discount
  const hasDiscount = cartItems.some(
    (item) => item.product.priceAfterDiscount < item.product.price,
  );

  return (
    <section>
      <div className="bg-zinc-50 p-4">
        {/* Head */}
        <h1 className="font-semibold text-3xl mb-4">Summary</h1>
        {/* Component */}
        {hasDiscount ? <SummaryWithDiscount /> : <SummaryWithoutDiscount />}
      </div>

      {/* Button */}
      <CheckoutButton />
    </section>
  );
}
