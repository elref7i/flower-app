import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// import { getCartItems } from "@/lib/api/cart";
import { TicketPercent } from "lucide-react";
import { useFormatter, useTranslations } from "next-intl";

export default async function SummaryWithDiscount() {
  // const { product }: CartItem = await getCartItems();
  // const { price, priceAfterDiscount } = product;

  //   Translations
  const t = useTranslations();
  const format = useFormatter();
  return (
    <div>
      {/* Head */}
      <div className="flex gap-2 items-center">
        <Input placeholder="Coupon Code" className="bg-zinc-50" />
        <Button className="font-semibold py-6">
          <TicketPercent />
          Apply Coupon
        </Button>
      </div>

      <div className="w-full h-64 rounded-lg border border-zinc-300 text-zinc-400 italic my-3 flex justify-center items-center">
        {t("no-coupons")}
      </div>

      {/* subtotal */}
      <div className="text-zinc-800 w-full flex justify-between py-3">
        <span className="text-lg font-medium ">{t("sub-total")}</span>
        <span className="font-semibold text-xl">
          {format.number(250, {
            style: "currency",
            currency: "EGP",
          })}
        </span>
      </div>

      {/* discount */}
      <div className="relative w-full flex justify-center items-center ">
        <span className="relative z-10 bg-zinc-50 px-3 text-black text-lg font-semibold">
          50% Discount
        </span>
        <div className="absolute top-1/2 left-0 w-full border-t border-gray-300 -z-0 translate-y-1/2" />
      </div>

      {/* total */}
      <div className="text-zinc-800 font-bold text-2xl flex justify-between py-3">
        <span>{t("total")}</span>
        <span>
          {format.number(150, {
            style: "currency",
            currency: "EGP",
          })}
        </span>
      </div>
    </div>
  );
}
