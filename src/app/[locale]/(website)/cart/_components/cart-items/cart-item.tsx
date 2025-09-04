import { cn } from "@/lib/utils/cn";
import { Star } from "lucide-react";
import { useFormatter, useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { UpdateQuantityForm } from "./update-quantity-form";
import RemoveItemButton from "./remove-item";

export default function CartItem({ item }: { item: CartItem }) {
  // Destruct item props
  const { id, imgCover, title, rateAvg, rateCount, price, priceAfterDiscount, quantity } =
    item.product;

  // Hooks for translation
  const format = useFormatter();
  const t = useTranslations("cart");
  const locale = useLocale();

  return (
    <div className="grid grid-cols-[auto_1fr_auto] gap-4">
      {/* Item photo */}
      <Image
        src={imgCover}
        width={117}
        height={140}
        alt="Photo"
        className="object-fill h-36 w-28 rounded-xl"
      />

      {/* Item details */}
      <div className="me-auto flex flex-col">
        {/*Item title */}
        <h3 className="text-lg text-maroon-700 font-semibold capitalize dark:text-softpink-300">
          {title}
        </h3>

        {/* Item rating */}
        <p className="flex gap-2 text-[16px]">
          {/* Star icon */}
          <Star fill="currentColor" style={{ color: "rgb(234 179 8)" }} />
          {t("rating")}

          {/* Rating average */}
          <span className="font-semibold">
            {format.number(rateAvg, "units")}/ {format.number(5, "units")}
          </span>

          {/* Rating count  */}
          <span className="text-blue-600 font-medium">
            ( {format.number(rateCount, "units")} {t("ratings")})
          </span>
        </p>

        {/* Item Quantity and price */}
        <div className="mt-auto text-maroon-600 flex items-end font-medium dark:text-softpink-300">
          {/*item Quantity  */}
          (x{format.number(item.quantity, "units")})
          {priceAfterDiscount !== 0 && (
            // Show offer price if item has offer
            <div>
              <span className="font-bold text-xl ms-2 text-zinc-800 dark:text-zinc-50">
                {format.number(priceAfterDiscount, {
                  style: "decimal",
                  maximumFractionDigits: 2,
                  numberingSystem: locale === "ar" ? "arab" : "latin",
                })}
              </span>

              {/* Currency */}
              <span className={cn("font-medium ms-1 text-sm text-zinc-800 dark:text-zinc-50")}>
                {t("EGP")}
              </span>
            </div>
          )}
          {/*Item Price and mark as deprecated if item has offer */}
          <span
            className={cn(
              "font-bold text-xl ms-2  text-zinc-800 dark:text-zinc-50",
              priceAfterDiscount !== 0 && "!text-zinc-400 line-through ",
            )}
          >
            {format.number(price, {
              style: "decimal",
              maximumFractionDigits: 2,
              numberingSystem: locale === "ar" ? "arab" : "latin",
            })}
          </span>
          {/* Currency */}
          <span
            className={cn(
              "font-medium ms-1 text-sm text-zinc-800 dark:text-zinc-50",
              priceAfterDiscount !== 0 && "line-through !text-zinc-400 text-xl",
            )}
          >
            {t("EGP")}
          </span>
        </div>
      </div>

      {/* Item Buttons */}
      <div className="flex flex-col">
        <RemoveItemButton productId={id} />
        <UpdateQuantityForm orderQuantity={item.quantity} productId={id} validQuantity={quantity} />
      </div>
    </div>
  );
}
