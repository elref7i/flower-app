'use client'
import { Pie, PieChart } from "recharts"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"
import CustomPieLabel from "./cutom-circles"
import { useQuery } from "@tanstack/react-query"
import { getAllStatistics } from "@/lib/api/all-statistics"
import { useTranslations } from "next-intl"

//variables
const statusColors: Record<string, string> = {
  completed: "#00BC7D",
  pending: "#FFC107",
  inProgress: "#2B7FFF",
  canceled: "#DC2626",
}
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
} satisfies ChartConfig

export default function ChartPieDonut() {
  //variables
  const { data } = useQuery<APIResponse<AllStatisticsResponse>>({
    queryKey: ['statistics'],
    queryFn: getAllStatistics
  })

  const chartData = data?.statistics?.orders?.ordersByStatus?.filter(item => item._id !== null).map(item => ({
    name: item._id,
    value: item.count,
    fill: statusColors[item._id],
  })) ?? []

  const total = data?.statistics?.orders?.ordersByStatus?.reduce((sum, item) => sum + item.count, 0)
  const t = useTranslations("dashboard");

  return (
    <Card className='p-4 rounded-2xl min-h-[500px]'>
      {/*title*/}
      <CardTitle className='font-semibold text-2xl text-zinc-800 text-center'>{t('order-status')}</CardTitle>
      
      {/*content*/}
      <CardContent className="flex-1 pb-0">
        {/*order chart*/}
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
      {/*chart description*/}
      <div>
        {data?.statistics?.orders?.ordersByStatus?.filter(item => item._id !== null).map((item) => <div className='flex justify-between pt-3.5' key={item._id}>
          {/*order status*/}
          <div className='flex items-center gap-[5px]'>
            <span className="size-2.5 rounded-full" style={{ backgroundColor: statusColors[item._id] }} />
            <span className='font-semibold capitalize text-xs text-zinc-800'>{item._id}</span>
          </div>
          {/*percentage*/}
          <div className="font-bold text-zinc-800 text-xs">{item.count} ({((item.count / total) * 100).toFixed(0)}%)</div>
        </div>)}
      </div>
    </Card>
  )
}
