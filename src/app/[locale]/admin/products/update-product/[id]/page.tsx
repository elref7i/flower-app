import { getProductById } from "@/lib/api/products.api";

import { getTranslations } from "next-intl/server";

import React from "react";
import UpdateProductForm from "./_components/product-update-form";

export default async function page({ params }: { params: { id: string } }) {
  const t = await getTranslations("products-cu");
  const { id } = params;
  const product = await getProductById(id);

  return (
    <div className="m-7">
      <h1 className="font-semibold text-2xl mb-7 w-1/2 flex gap-2">
        <span className=" inline-block">{t("update-product")}:</span>
        <span className="truncate max-w-xs">{product.title}</span>
      </h1>
      <UpdateProductForm id={id} />
    </div>
  );
}
