"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import TopSellingProductsTable from "./_components/top-selling-products-table";
import LowStockProductsTable from "./_components/low-stock-product-table";
import { useTranslations } from "next-intl";

export default async function ProductStatistic() {
  // Translations
  const t = useTranslations();
  return (
    <section className="flex justify-center gap-6">
      {/* Top Selling Product */}
      <Card className="bg-white rounded-2xl max-h-[443px] ">
        <CardHeader>
          {/* title */}
          <CardTitle className="text-2xl font-semibold text-zinc-800 pt-4 ps-6">
            {t("top-selling")}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 overflow-auto max-h-[350px] py-0">
          {/* Table */}
          <TopSellingProductsTable />
        </CardContent>
      </Card>

      {/* Low Sttock Product */}
      <Card className="bg-white rounded-2xl max-h-[443px]">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-zinc-800 pt-6 ps-6">
            {t("low-stock")}
          </CardTitle>
        </CardHeader>
        <CardContent className="px-6 overflow-auto max-h-[350px]   mt-0">
          {/* Table */}
          <LowStockProductsTable />
        </CardContent>
      </Card>
    </section>
  );
}
