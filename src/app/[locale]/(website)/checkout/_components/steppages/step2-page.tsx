"use client";

import React, { useState } from "react";
import cridet from "@assets/imgs/credit.png";
import cash from "@assets/imgs/cash.png";
import { Button } from "@/components/ui/button";
import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import { useCheckout } from "@/lib/context/checkout-context";
import usePayByCash from "../../_hooks/use-pay-by-cash";
import usePayByCredit from "../../_hooks/use-pay-by-credit";
import { useLocale, useTranslations } from "next-intl";

export default function PaymentMethodPage() {
  // Hooks
  const { selectedAddress, setStep } = useCheckout();
  const { PayByCashHookFun, isPending } = usePayByCash();
  const { PayByCreditHookFun } = usePayByCredit();
  const [selectedMethod, setSelectedMethod] = useState<"cash" | "card" | null>(null);
  const locale = useLocale();
  // Translation
  const t = useTranslations();

  // Functions
  const handleCheckout = () => {
    if (selectedMethod === "cash" && selectedAddress) {
      const { street, phone, city, lat, long } = selectedAddress;
      PayByCashHookFun({ street, phone, city, lat, long });
    }

    if (selectedMethod === "card" && selectedAddress) {
      const { street, phone, city, lat, long } = selectedAddress;
      PayByCreditHookFun({ street, phone, city, lat, long });
    }
  };

  const isSelected = (method: "cash" | "card") =>
    selectedMethod === method ? "border borde-zinc-300 bg-zinc-100" : "border";

  return (
    <section className="my-9 ">
      {/* Back Button */}
      <div className="flex gap-4 my-4 items-center">
        <Button
          className="bg-zinc-100 font-semibold text-zinc-800 w-28 hover:text-zinc-50 hover:bg-maroon-600 flex items-center gap-2"
          onClick={() => {
            setStep("1");
          }}
        >
          {locale === "en" ? <MoveLeft /> : <MoveRight />}
          {t("back-button")}
        </Button>

        {/* Title */}
        <h2 className="font-semibold text-3xl">{t("paymet-methods")}</h2>
      </div>

      {/* Payment Ways */}
      <div className="flex gap-4">
        {/* Cash on Delivery */}
        <div
          className={`w-96 rounded-xl text-center py-3 cursor-pointer transition-all ${isSelected(
            "cash",
          )}`}
          onClick={() => setSelectedMethod("cash")}
        >
          <Image
            src={cash}
            alt="cash picture"
            width={195}
            height={195}
            quality={100}
            className="mx-auto mt-4"
          />
          <h4
            className={`text-2xl font-semibold ${
              selectedMethod === "cash" ? "text-maroon-600" : "text-zinc-800"
            }`}
          >
            {t("cash-title")}
          </h4>
          <p className="text-zinc-500 font-semibold pt-3 px-2">{t("cash-content")}</p>
        </div>

        {/* Credit Card */}
        <div
          className={`w-96 rounded-xl text-center py-3 cursor-pointer transition-all ${isSelected(
            "card",
          )}`}
          onClick={() => setSelectedMethod("card")}
        >
          <Image
            src={cridet}
            alt="credit picture"
            width={195}
            height={195}
            quality={100}
            className="mx-auto mt-4"
          />
          <h4
            className={`text-2xl font-semibold ${
              selectedMethod === "card" ? "text-maroon-600" : "text-zinc-800"
            }`}
          >
            {t("credit-head")}
          </h4>
          <p className="text-zinc-500 font-semibold pt-3 pb-4 px-2">{t("credit-content")}</p>
        </div>
      </div>

      <hr className="my-5" />
      {/* Checkout Button */}
      <div className="flex justify-end">
        <Button
          className="bg-maroon-600 w-40 text-zinc-50 "
          onClick={handleCheckout}
          disabled={isPending || !selectedMethod}
        >
          {t("checkout-button")}
          {locale === "en" ? <MoveRight /> : <MoveLeft />}
        </Button>
      </div>
    </section>
  );
}
