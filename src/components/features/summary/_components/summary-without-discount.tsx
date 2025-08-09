import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { getCartItems } from "@/lib/api/cart";
import { TicketPercent } from "lucide-react";
import { useFormatter, useTranslations } from "next-intl";

export default async function SummaryWithoutDiscount() {
  //   Translartion
  const t = useTranslations();
  const format = useFormatter();

  // Get cart data
  const data = await getCartItems();

  const cartItems = data?.cart?.cartItems || [];

  // Calculate total prices
  const totalPrice = cartItems.reduce((acc: number, item: CartItem) => {
    return acc + item.price * item.quantity;
  }, 0);

  const totalPriceAfterDiscount = cartItems.reduce((acc: number, item: CartItem) => {
    return acc + item.product.priceAfterDiscount * item.quantity;
  }, 0);

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

      {/* total */}
      <div className="text-zinc-800 font-bold text-2xl flex justify-between py-3">
        <span>{t("total")}</span>
        <span>
          {format.number(500, {
            style: "currency",
            currency: "EGP",
          })}
        </span>
      </div>
    </div>
  );
}
