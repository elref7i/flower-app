import { getAllStatistics } from "@/lib/api/all-statistics";
import { CircleDollarSign, ClipboardList, Package, ReceiptText } from "lucide-react";
import { useFormatter, useTranslations } from "next-intl";

export default function Statistics({ statistics }: FirstRowProps) {
  // Translation hooks
  const format = useFormatter();
  const t = useTranslations("dashboard-pages");

  // Statistics list
  const renderedStatistics = [
    {
      name: t("total-products"),
      color: "text-maroon-600",
      backgroundColor: "bg-maroon-50 ",
      quantity: format.number(statistics.overall.totalProducts, "units"),
      icon: Package,
      isCurrency: false,
    },
    {
      name: t("total-orders"),
      color: "text-blue-600",
      backgroundColor: "bg-blue-50",
      quantity: format.number(statistics.overall.totalOrders, "units"),
      icon: ReceiptText,
      isCurrency: false,
    },
    {
      name: t("total-categories"),
      color: "text-purple-800",
      backgroundColor: "bg-purple-50",
      quantity: format.number(statistics.overall.totalCategories, "units"),
      icon: ClipboardList,
      isCurrency: false,
    },
    {
      name: t("total-revenue"),
      color: "text-emerald-600",
      backgroundColor: "bg-emerald-50",
      quantity: format.number(statistics.overall.totalRevenue, "units"),
      icon: CircleDollarSign,
      isCurrency: true,
    },
  ];

  return (
    <div className="md:bg-white w-full md:w-[530px] h-88 rounded-2xl md:p-6 grid gap-6 grid-cols-2 dark:bg-zinc-800">
      {/* Statistics */}
      {renderedStatistics.map((el) => (
        <div key={el.name} className={`${el.backgroundColor} ${el.color} rounded-2xl p-4`}>
          {/* Icon */}
          <span>{<el.icon width={35} height={35} />}</span>

          {/* Quantity */}
          <div className="flex items-end gap-2 flex-wrap">
            <h2 className="text-lg md:text-2xl font-semibold mt-3">{el.quantity}</h2>
            {el.isCurrency && (
              <span className="font-medium text-sm text-emerald-600 mt-3">
                {t("EGP")}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-zinc-800  font-medium text-sm  ">{el.name}</h3>
        </div>
      ))}
    </div>
  );
}
