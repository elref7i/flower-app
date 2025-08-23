import { TableHeader, TableHead, TableRow } from "@/components/ui/table";

import { useTranslations } from "next-intl";

export default function TableHeaderComponent() {
  // Translations
  const t = useTranslations();

  return (
    <TableHeader>
      <TableRow className="bg-gray-50 *:text-start">
        {/* Name */}
        <TableHead className="font-medium text-gray-700">{t("name")}</TableHead>

        {/* Price */}
        <TableHead className="font-medium text-gray-700">{t("price")}</TableHead>

        {/* Stock */}
        <TableHead className="font-medium text-gray-700">{t("stock")}</TableHead>

        {/* Sales */}
        <TableHead className="font-medium text-gray-700">{t("sales")}</TableHead>

        {/* Rating */}
        <TableHead className="font-medium text-gray-700">{t("ratings")}</TableHead>

        {/* Actions */}
        <TableHead className="font-medium text-gray-700 text-right">{""}</TableHead>
      </TableRow>
    </TableHeader>
  );
}
