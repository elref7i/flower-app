import { useTranslations } from "next-intl";
import React from "react";
import AddProductForm from "./_components/add-product-form";

export default function page() {
  const t = useTranslations("products-cu");
  return (
    <div className="m-7">
      <h1 className="font-semibold text-2xl mb-7">{t("add-new-product")}</h1>
      <AddProductForm />
    </div>
  );
}
