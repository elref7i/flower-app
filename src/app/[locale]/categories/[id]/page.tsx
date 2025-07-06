import { Link } from "@/i18n/navigation";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { getTranslations, getLocale } from "next-intl/server";
import React, { Suspense } from "react";
import Category from "../_components/category";
import CategorySkeleton from "./../_components/category-skeleton";
import ProductsSkeleton from "./../_components/product-skelton";
import CategoryProducts from "../_components/category-products";

export default async function Page({ params }: Props) {
  const { id } = params;
  const t = await getTranslations();
  const locale = await getLocale();
  const isArabic = locale === "ar";
  return (
    <div className="container">
      {/*back*/}
      <Link
        href={"/categories"}
        className={`text-maroon-700 gap-1.5 flex items-center m-10 dark:text-softpink-300`}
      >
        {isArabic ? <ArrowRight className="size-5" /> : <ArrowLeft className="size-5" />}
        <span className="font-medium">{t("back")}</span>
      </Link>
      {/*category*/}
      <Suspense fallback={<CategorySkeleton />}>
        <Category id={id} />
      </Suspense>
      {/*products*/}
      <Suspense fallback={<ProductsSkeleton />}>
        <CategoryProducts id={id} />
      </Suspense>
    </div>
  );
}
