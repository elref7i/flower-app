import { useTranslations } from "next-intl";
import React from "react";
import ClearCart from "./clear-cart-button";

// Cart header
export default function CartHeader({ numberCartItems }: { numberCartItems: number }) {
  const t = useTranslations("cart");

  return (
    <div className="flex items-end justify-between">
      {/* Title and number of products */}
      <div className="flex items-end gap-2">
        {/* Title */}
        <h1 className="font-bold text-5xl pb-1">{t("cart")}</h1>

        {/* number of products */}
        <span className="text-zinc-400 text-[16px] font-medium">
          {t("product", { quantity: numberCartItems })}
        </span>
      </div>

      {/* Clear Cart button */}
      <ClearCart numberOfItems={numberCartItems} />
    </div>
  );
}
