import Image from "next/image";
import React from "react";
import noCart from "@assets/imgs/no-cart 1.png";
import { useTranslations } from "next-intl";

export default function EmptyCart({ loggedIn = true }: { loggedIn: boolean }) {
  const t = useTranslations("cart");
  return (
    <div className="my-20 mx-auto w-fit text-center">
      <Image src={noCart} width={250} height={214} alt="No cart Items" className="mx-auto " />
      <h2 className="text-zinc-400 text-lg mt-4">{t("empty-cart")}</h2>
      {!loggedIn && (
        <p className="text-maroon-600 font-semibold text-lg mt-4">{t("login-error")}</p>
      )}
    </div>
  );
}
