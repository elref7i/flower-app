import { getAllStatistics } from "@/lib/api/all-statistics";
import { CircleDollarSign, ClipboardList, Package, ReceiptText } from "lucide-react";
import { useFormatter, useTranslations } from "next-intl";
import { getFormatter, getTranslations } from "next-intl/server";

export default function Statistics({ statistics }: FirstRowProps) {
  // Translation hooks
  const format = useFormatter();
  const t = useTranslations("dashboard");

  // Statistics list
  const renderedStatistics = [
    {
      name: t("total-products"),
      color: "text-maroon-600",
      backgroundColor: "bg-maroon-50",
      quantity: format.number(statistics.overall.totalProducts, "units"),
      icon: <Package width={35} height={35} />,
      isCurrency: false,
    },
    {
      name: t("total-orders"),
      color: "text-blue-600",
      backgroundColor: "bg-[#0063D00D]",
      quantity: format.number(statistics.overall.totalOrders, "units"),
      icon: <ReceiptText width={35} height={35} />,
      isCurrency: false,
    },
    {
      name: t("total-categories"),
      color: "text-[#753CBF]",
      backgroundColor: "bg-[#753CBF0D]",
      quantity: format.number(statistics.overall.totalCategories, "units"),
      icon: <ClipboardList width={35} height={35} />,
      isCurrency: false,
    },
    {
      name: t("total-revenue"),
      color: "text-emerald-600",
      backgroundColor: "bg-[#0089610D]",
      quantity: format.number(statistics.overall.totalRevenue, "units"),
      icon: <CircleDollarSign width={35} height={35} />,
      isCurrency: true,
    },
  ];

  return (
    <div className="md:bg-white w-full md:w-[490px] h-80 rounded-2xl md:p-6 grid gap-6 grid-cols-2">
      {/* Statistics */}
      {renderedStatistics.map((el) => (
        <div key={el.name} className={`${el.backgroundColor}  ${el.color} rounded-2xl p-4`}>
          {/* Icon */}
          <span>{el.icon}</span>

          {/* quantity */}
          <div className="flex items-end gap-2 flex-wrap">
            <h2 className="text-lg md:text-2xl font-semibold mt-3"> {el.quantity}</h2>
            {el.isCurrency && <span className="font-medium text-sm">{t("EGP")}</span>}
          </div>

          {/* title */}
          <h3 className="text-zinc-800 font-medium text-sm">{el.name}</h3>
        </div>
      ))}
    </div>
  );
}
