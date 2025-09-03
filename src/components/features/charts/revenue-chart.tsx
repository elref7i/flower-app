"use client"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { getAllStatistics } from "@/lib/api/all-statistics"
import { useQuery } from "@tanstack/react-query"
import { useMemo, useState } from "react"
import { useTranslations } from "next-intl"

const chartConfig = {
    revenue: {
        label: "revenue",
    },
} satisfies ChartConfig

export default function ChartArea() {
    //variables
    const { data } = useQuery({
        queryKey: ['statistics'],
        queryFn: getAllStatistics
    })
    const [label, setLabel] = useState("monthly");
    const chartData = useMemo(() => {
        if (!data) return []
        const rawData = label === "last week"
            ? data.statistics?.orders?.dailyRevenue ?? []
            : data.statistics?.orders?.monthlyRevenue ?? []
        return [...rawData].sort((a, b) => new Date(a._id).getTime() - new Date(b._id).getTime())

    }, [data, label])
    const t = useTranslations("dashboard");
    return (
        <Card className='p-4 rounded-2xl h-[500px]'>
            {/*header*/}
            <CardHeader className='flex justify-between items-center'>
                {/*title*/}
                <CardTitle className='font-semibold text-2xl text-zinc-800'>{t('revenue')}</CardTitle>
                {/*button filter*/}
                <div className='text-sm flex gap-2'>
                    <span className={`cursor-pointer ${label === 'monthly' ? "text-maroon-600 font-semibold	" : "text-[#969696]"}`} onClick={() => {
                        setLabel("monthly")
                    }}>{t('monthly')}</span>
                    <span className={`cursor-pointer ${label === 'last week' ? "text-maroon-600 font-semibold	" : "text-[#969696]"}`} onClick={() => {
                        setLabel("last week")
                    }}>{t('last-week')}</span>
                </div>
            </CardHeader>

            {/*revenue chart*/}
            <CardContent>
                <ChartContainer config={chartConfig} className='h-[420px]' dir='ltr'>
                    {/*chart data and spacing config*/}
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 24,
                            right: 24,
                        }}
                    >
                        {/* linear Gradient definition */}
                        <defs>
                            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#F8B1EF" stopOpacity={0.5} />
                                <stop offset="100%" stopColor="#A6252A80" stopOpacity={0} />
                            </linearGradient>
                        </defs>


                        {/* handle lines (no horizontal lines) */}
                        <CartesianGrid vertical={true} horizontal={false} />

                        {/*X-Axis: customized to show either short month or weekday based on current label */}
                        <XAxis
                            dataKey="_id"
                            tickLine={false}
                            axisLine={false}
                            interval={0}
                            tickMargin={8}
                            tickFormatter={(value: string) => {
                                const date = new Date(value)
                                if (label === "monthly") {
                                    return date.toLocaleString("en-US", { month: "short" })
                                }
                                if (label === "last week") {
                                    return date.toLocaleDateString("en-US", {
                                        weekday: "short",
                                        day: "numeric",
                                        month: "short",
                                    })
                                }
                                return value
                            }}
                            tick={{
                                style: {
                                    fill: "#27272A",
                                    fontSize: 10,
                                    fontWeight: 700
                                },
                            }}
                        />

                        {/* Y-Axis: revenue values, with styling */}
                        <YAxis
                            dataKey="revenue"
                            axisLine={false}
                            tickLine={false}
                            tick={{
                                style: {
                                    fill: "#27272A",
                                    fontSize: 10,
                                    fontWeight: 700
                                },
                            }}
                        />

                        {/* Custom tooltip on hover */}
                        <ChartTooltip
                            cursor={false}
                            content={({ active, payload }) => {
                                if (!active || !payload?.length) return null

                                const value = payload[0].value as number

                                return (
                                    <div className=" text-sm text-maroon-600 font-bold text-center">
                                        {value.toLocaleString()} EGP
                                    </div>
                                )
                            }}
                        />

                        {/* Revenue area line and fill */}
                        <Area
                            dataKey="revenue"
                            type="monotone"
                            fill="url(#revenueGradient)"
                            fillOpacity={0.5}
                            stroke="#A6252A"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
