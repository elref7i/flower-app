import React from "react";
import CartHeader from "./_components/cart-header/cart-header";
import { getCartItems } from "@/lib/api/cart";
import CartItems from "./_components/cart-items/cart-items";
import EmptyCart from "./_components/empty-cart/empty-cart";
import { Link } from "@/i18n/navigation";
import { MoveLeft, MoveRight } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { buttonVariants } from "@/components/ui/button";
import { getLocale, getTranslations } from "next-intl/server";

// Cart page
export default async function page() {
  const CartInfo = await getCartItems();
  const locale = await getLocale();
  const t = await getTranslations("cart");

  return (
    <>
      {/* Cart header */}
      <CartHeader numberCartItems={CartInfo.numOfCartItems ?? 0} />

      {/* Cart items or Empty cart */}
      <div className="p-5 border border-zinc-200 rounded-xl w-full mt-6 dark:border-zinc-700">
        {CartInfo.numOfCartItems === 0 ? (
          <EmptyCart />
        ) : (
          <div className="flex rtl:gap-10 ltr:gap-10">
            <CartItems initialData={CartInfo as any} />
          </div>
        )}
      </div>

      {/* back to home page button */}
      <Link
        href="/"
        className={cn(buttonVariants(), "font-semibold px-10 w-fit h-10 mt-6 rounded-xl")}
      >
        {locale === "ar" ? (
          <MoveRight width={20} height={20} />
        ) : (
          <MoveLeft width={20} height={20} />
        )}
        <span className="pb-1">{t("continue-shopping")}</span>
      </Link>
    </>
  );
}
