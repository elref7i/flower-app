'use client'
import { Pie, PieChart } from "recharts"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"
import { useTranslations } from "next-intl"
import CustomPieLabel from "@/components/features/charts/cutom-circles"
import useGetStatistics from "../_hooks/use-get-order"


const statusColors: Record<string, string> = {
  completed: "#00BC7D",
  pending: "#FFC107",
  inProgress: "#2B7FFF",
  canceled: "#DC2626",
}

const chartConfig = {
  visitors: { label: "Visitors" },
} satisfies ChartConfig

export default function ChartPieDonut() {
  const t = useTranslations("dashboard-pages")
  const { data, isLoading, error, isValidData } = useGetStatistics()

  if (isLoading)
    return <p className="text-center text-gray-400 py-10">{t("loading")}</p>

  if (error || !isValidData)
    return <p className="text-center text-red-500 py-10">{t("error-loading-data")}</p>

  const orders = data!.statistics.orders.ordersByStatus
  const chartData = orders
    .filter(item => item._id !== null)
    .map(item => ({
      name: item._id,
      value: item.count,
      fill: statusColors[item._id],
    }))

  const total = orders.reduce((sum, item) => sum + item.count, 0)

  return (
    <Card className="p-4 rounded-2xl min-h-[500px]">
      <CardTitle className="font-semibold text-2xl text-zinc-800 text-center">
        {t("order-status")}
      </CardTitle>

      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] mt-10"
        >
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={40}
              label={CustomPieLabel}
              labelLine={false}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>

      <div>
        {chartData.map((item) => (
          <div className="flex justify-between pt-3.5" key={item.name}>
            <div className="flex items-center gap-[5px]">
              <span
                className="size-2.5 rounded-full"
                style={{ backgroundColor: statusColors[item.name] }}
              />
              <span className="font-semibold capitalize text-xs text-zinc-800">
                {item.name}
              </span>
            </div>
            <div className="font-bold text-zinc-800 text-xs">
              {item.value} ({((item.value / total) * 100).toFixed(0)}%)
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
