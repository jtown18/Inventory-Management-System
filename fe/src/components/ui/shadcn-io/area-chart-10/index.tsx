"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { cn } from "@/lib/utils";

import type { ChartConfig } from "@/components/ui/chart";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";

export const description = "An area chart with axes";

interface ChartAreaAxesProps {
  data?: Array<Record<string, any>>;
  config?: ChartConfig;
  darkMode?: boolean;
  height?: string;
  className?: string;
}

const defaultChartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const defaultChartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

// Custom Tooltip Component
const CustomTooltip = ({ active, payload, label, darkMode }: any) => {
  if (active && payload && payload.length) {
    return (
      <div
        className={cn(
          "rounded-lg border p-2 shadow-lg transition-colors duration-300",
          darkMode ? "bg-gray-800 border-gray-600" : "bg-white border-gray-200"
        )}
      >
        <p
          className={cn(
            "font-medium mb-1",
            darkMode ? "text-gray-200" : "text-gray-700"
          )}
        >
          {label}
        </p>
        {payload.map((entry: any, index: number) => (
          <p
            key={index}
            className={cn(
              "text-sm",
              darkMode ? "text-gray-100" : "text-gray-900"
            )}
            style={{ color: entry.color }}
          >
            <span
              className="inline-block w-2 h-2 rounded-full mr-2"
              style={{ backgroundColor: entry.color }}
            ></span>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export function ChartAreaAxes({
  data = defaultChartData,
  config = defaultChartConfig,
  darkMode = false,
  height = "h-[250px]",
  className,
}: ChartAreaAxesProps) {
  // Get the data keys dynamically from config
  const dataKeys = Object.keys(config);

  return (
    <div className={cn("transition-colors duration-300", className)}>
      <ChartContainer
        config={config}
        className={cn(
          height,
          "w-full transition-colors duration-300",
          darkMode ? "text-gray-100" : "text-gray-900"
        )}
      >
        <AreaChart
          accessibilityLayer
          data={data}
          margin={{
            left: -20,
            right: 12,
          }}
        >
          <CartesianGrid
            vertical={false}
            stroke={darkMode ? "#374151" : "#e5e7eb"}
            className="transition-colors duration-300"
          />
          <XAxis
            dataKey={data[0] ? Object.keys(data[0])[0] : "month"}
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) =>
              typeof value === "string" ? value.slice(0, 3) : value
            }
            tick={{
              fill: darkMode ? "#d1d5db" : "#6b7280",
              fontSize: 12,
            }}
            className="transition-colors duration-300"
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickCount={3}
            tick={{
              fill: darkMode ? "#d1d5db" : "#6b7280",
              fontSize: 12,
            }}
            className="transition-colors duration-300"
          />
          <ChartTooltip
            cursor={false}
            content={<CustomTooltip darkMode={darkMode} />}
          />
          {/* Render areas dynamically based on config */}
          {dataKeys.map((key, index) => {
            const baseHue = darkMode ? 200 + index * 60 : 220 + index * 40;
            const saturation = darkMode ? 70 : 60;
            const lightness = darkMode ? 60 : 50;

            return (
              <Area
                key={key}
                dataKey={key}
                type="natural"
                fill={`hsl(${baseHue}, ${saturation}%, ${lightness}%)`}
                fillOpacity={darkMode ? 0.3 : 0.4}
                stroke={`hsl(${baseHue}, ${saturation}%, ${
                  darkMode ? 70 : 45
                }%)`}
                strokeWidth={2}
                stackId="a"
                className="transition-colors duration-300"
              />
            );
          })}
        </AreaChart>
      </ChartContainer>
    </div>
  );
}
