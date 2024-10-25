"use client";

import type { ChartConfig } from "@/src/components/uis/chart";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/src/components/uis/chart";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function Charts({
  data: { salesData },
}: {
  data: { salesData: { months: string; totalSales: number }[] };
}) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <ChartContainer config={chartConfig}>
        <BarChart data={salesData}>
          <CartesianGrid vertical={true} />
          <XAxis
            dataKey="months"
            stroke="#888888"
            fontSize={12}
            tickLine={true}
            axisLine={true}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={true}
            axisLine={true}
            tickFormatter={(value) => `$${value}`}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dashed" />}
          />
          <Bar
            dataKey="totalSales"
            fill="currentColor"
            radius={[20, 20, 0, 0]}
            className="fill-ali"
          />
        </BarChart>
      </ChartContainer>
    </ResponsiveContainer>
  );
}
