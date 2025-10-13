"use client";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils/cn";

import { BrushCleaning } from "lucide-react";
import useClearCart from "./hooks/use-clear-cart";
import { useTranslations } from "next-intl";

export default function ClearCart({ numberOfItems }: { numberOfItems: number }) {
  //  Hook to clear cart
  const { isPending, mutate } = useClearCart();
  const t = useTranslations("cart");
  return (
    <Button
      disabled={numberOfItems === 0 || isPending}
      variant="secondary"
      className={cn(`font-semibold px-6 py-3 w-fit mb-1`)}
      onClick={() => mutate()}
    >
      <BrushCleaning width={20} height={20} />
      {t("clear-cart")}
    </Button>
  );
}
