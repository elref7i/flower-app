import React from "react";
import SummaryWithDiscount from "./_components/summary-with-discount";
import SummaryWithoutDiscount from "./_components/summary-without-discount";
import { getCartItems } from "@/lib/api/cart";
import CheckoutButton from "./_components/check-out-button";
import { getTranslations } from "next-intl/server";

export default async function Summary() {
  // Variables
  const cartInfo = await getCartItems() as SuccessfullResponse<CartInfo>;
  const cartItems = cartInfo.cart?.cartItems || [];
  // check has discount
  const hasDiscount = cartItems.some(
    (item: CartItem) => item.product.priceAfterDiscount !== 0 && item.product.priceAfterDiscount < item.product.price,
  );

  // translation
  const t = await getTranslations();

  return (
    <section>
      <div className="bg-zinc-50 p-4 dark:bg-zinc-800">
        {/* Head */}
        <h1 className="font-semibold text-3xl mb-4">{t("summary-title")}</h1>
        {/* Component */}
        {hasDiscount ? <SummaryWithDiscount /> : <SummaryWithoutDiscount />}
      </div>

      {/* Button */}
      <CheckoutButton />
    </section>
  );
}
