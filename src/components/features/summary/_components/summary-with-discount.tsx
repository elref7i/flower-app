import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { getCartItems } from "@/lib/api/cart";
import { TicketPercent } from "lucide-react";
import { getTranslations, getFormatter } from "next-intl/server";

// import TotalandSubtotal from "./total-subtotal";

export default async function SummaryWithDiscount() {
  // Get cart data
  const data = await getCartItems();

  const cartItems = data?.cart?.cartItems || [];

  // // Calculate total prices
  const totalPrice = cartItems.reduce((acc: number, item: CartItem) => {
    return acc + item.price * item.quantity;
  }, 0);

  // Calculate Total After Discount
  const totalPriceAfterDiscount = cartItems.reduce((acc: number, item: CartItem) => {
    return acc + item.product.priceAfterDiscount * item.quantity;
  }, 0);

  // Calculate Discount
  const discountAmount = totalPrice - totalPriceAfterDiscount;
  const discountPercentage = totalPrice ? Math.round((discountAmount / totalPrice) * 100) : 0;

  //   Translations
  const t = await getTranslations();
  const format = await getFormatter();
  return (
    <div>
      {/* Head */}
      <div className="flex gap-2 items-center">
        <Input placeholder="Coupon Code" className="bg-zinc-50" />
        <Button className="font-semibold py-6">
          <TicketPercent />
          {t("apply-coupon")}
        </Button>
      </div>

      <div className="w-full h-64 rounded-lg border border-zinc-300 text-zinc-400 italic my-3 flex justify-center items-center">
        {t("no-coupons")}
      </div>

      {/* subtotal */}
      <div className="text-zinc-800 w-full flex justify-between py-3">
        <span className="text-lg font-medium ">{t("sub-total")}</span>
        <span className="font-semibold text-xl">
          {format.number(totalPriceAfterDiscount, {
            style: "currency",
            currency: "EGP",
            maximumFractionDigits: 0,
          })}
        </span>
      </div>

      {/* discount */}
      <div className="relative w-full flex justify-center items-center ">
        <span className="relative z-10 bg-zinc-50 px-3 text-black text-lg font-semibold">
          {t.rich("discount", {
            percentage: discountPercentage,
            strong: (chunks) => <span className="font-bold text-primary">{chunks}</span>,
          })}
        </span>
        <div className="absolute top-1/2 left-0 w-full border-t border-gray-300 -z-0 translate-y-1/2" />
      </div>

      {/* total */}
      <div className="text-zinc-800 font-bold text-2xl flex justify-between py-3">
        <span>{t("total")}</span>
        <span>
          {format.number(totalPrice, {
            style: "currency",
            currency: "EGP",
            maximumFractionDigits: 0,
          })}
        </span>
      </div>

      {/* <TotalandSubtotal /> */}
    </div>
  );
}
