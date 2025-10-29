import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartAreaAxes } from "@/components/ui/shadcn-io/area-chart-10";
import { useCustomTheme } from "../../theme/CustomThemeProvider";
import { cn } from "@/lib/utils";
import type { ChartConfig } from "@/components/ui/chart";

// Different datasets
const salesData = [
  { month: "Jan", sales: 4000, revenue: 2400 },
  { month: "Feb", sales: 3000, revenue: 1398 },
  { month: "Mar", sales: 2000, revenue: 9800 },
  { month: "Apr", sales: 2780, revenue: 3908 },
  { month: "May", sales: 1890, revenue: 4800 },
  { month: "Jun", sales: 2390, revenue: 3800 },
];

const inventoryData = [
  { month: "Jan", stock: 186, orders: 80 },
  { month: "Feb", stock: 305, orders: 200 },
  { month: "Mar", stock: 237, orders: 120 },
  { month: "Apr", stock: 173, orders: 190 },
  { month: "May", stock: 209, orders: 130 },
  { month: "Jun", stock: 214, orders: 140 },
];

// Different configurations
const salesConfig = {
  sales: {
    label: "Sales",
    color: "var(--chart-1)",
  },
  revenue: {
    label: "Revenue",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

const inventoryConfig = {
  stock: {
    label: "Stock Level",
    color: "var(--chart-3)",
  },
  orders: {
    label: "Orders",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

function Dashboard() {
  const { darkMode } = useCustomTheme();

  return (
    <div className="space-y-6">
      {/* Top Chart - Sales Performance */}
      <Card
        className={cn(
          "w-full transition-colors duration-300",
          darkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
        )}
      >
        <CardHeader>
          <CardTitle
            className={cn(
              "transition-colors duration-300",
              darkMode ? "text-white" : "text-gray-900"
            )}
          >
            Sales Performance
          </CardTitle>
          <CardDescription
            className={cn(
              "transition-colors duration-300",
              darkMode ? "text-gray-300" : "text-gray-600"
            )}
          >
            Monthly sales and revenue
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartAreaAxes
            data={salesData}
            config={salesConfig}
            darkMode={darkMode}
            height="h-[250px]"
          />
        </CardContent>
      </Card>

      {/* Bottom Chart - Inventory Status */}
      <Card
        className={cn(
          "w-full transition-colors duration-300",
          darkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
        )}
      >
        <CardHeader>
          <CardTitle
            className={cn(
              "transition-colors duration-300",
              darkMode ? "text-white" : "text-gray-900"
            )}
          >
            Inventory Status
          </CardTitle>
          <CardDescription
            className={cn(
              "transition-colors duration-300",
              darkMode ? "text-gray-300" : "text-gray-600"
            )}
          >
            Stock levels and orders
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartAreaAxes
            data={inventoryData}
            config={inventoryConfig}
            darkMode={darkMode}
            height="h-[250px]"
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default Dashboard;
