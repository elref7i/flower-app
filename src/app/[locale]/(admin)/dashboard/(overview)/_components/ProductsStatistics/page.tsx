import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React from "react";
import TopSellingProductsTable from "./_components/top-selling-products-table";
import LowStockProductsTable from "./_components/low-stock-product-table";
import { getTranslations } from "next-intl/server";

export default async function ProductStatistic() {
  // Translations
  const t = await getTranslations();
  return (
    <section className="flex justify-center gap-6 mt-6">
      {/* Top Selling Product */}
      <Card className="bg-white rounded-2xl w-[536px] max-h-[443px]">
        <CardHeader>
          {/* title */}
          <CardTitle className="text-2xl font-semibold text-zinc-800 ">
            {t("top-selling")}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 py-0">
          {/* Table */}
          <TopSellingProductsTable />
        </CardContent>
      </Card>

      {/* Low Stock Product */}
      <Card className="bg-white rounded-2xl w-[536px] max-h-[443px]">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-zinc-800 ">{t("low-stock")}</CardTitle>
        </CardHeader>
        <CardContent className="p-6 py-0">
          {/* Table */}
          <LowStockProductsTable />
        </CardContent>
      </Card>
    </section>
  );
}
