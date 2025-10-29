import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useCustomTheme } from "../../theme/CustomThemeProvider";
import { cn } from "@/lib/utils";

// Dummy inventory data
const inventoryData = [
  {
    id: "1",
    name: "Wireless Headphones",
    sku: "WH-001",
    category: "Electronics",
    quantity: 50,
    price: "$99.99",
    status: "In Stock",
  },
  {
    id: "2",
    name: "USB-C Cable",
    sku: "UC-002",
    category: "Accessories",
    quantity: 8,
    price: "$19.99",
    status: "Low Stock",
  },
  {
    id: "3",
    name: "Bluetooth Speaker",
    sku: "BS-003",
    category: "Electronics",
    quantity: 0,
    price: "$79.99",
    status: "Out of Stock",
  },
  {
    id: "4",
    name: "Phone Case",
    sku: "PC-004",
    category: "Accessories",
    quantity: 120,
    price: "$24.99",
    status: "In Stock",
  },
  {
    id: "5",
    name: "Laptop Stand",
    sku: "LS-005",
    category: "Office",
    quantity: 25,
    price: "$49.99",
    status: "In Stock",
  },
];

function InventoryTable() {
  const { darkMode } = useCustomTheme();

  return (
    <div className="space-y-4">
      <div
        className={cn(
          "rounded-md border",
          darkMode ? "border-gray-700" : "border-gray-200"
        )}
      >
        <Table>
          <TableHeader>
            <TableRow
              className={cn(darkMode ? "border-gray-700" : "border-gray-200")}
            >
              <TableHead
                className={cn(darkMode ? "text-gray-200" : "text-gray-700")}
              >
                Product Name
              </TableHead>
              <TableHead
                className={cn(darkMode ? "text-gray-200" : "text-gray-700")}
              >
                SKU
              </TableHead>
              <TableHead
                className={cn(darkMode ? "text-gray-200" : "text-gray-700")}
              >
                Category
              </TableHead>
              <TableHead
                className={cn(darkMode ? "text-gray-200" : "text-gray-700")}
              >
                Quantity
              </TableHead>
              <TableHead
                className={cn(darkMode ? "text-gray-200" : "text-gray-700")}
              >
                Price
              </TableHead>
              <TableHead
                className={cn(darkMode ? "text-gray-200" : "text-gray-700")}
              >
                Status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inventoryData.map((item) => (
              <TableRow
                key={item.id}
                className={cn(
                  "transition-colors",
                  darkMode
                    ? "border-gray-700 hover:bg-gray-800"
                    : "border-gray-200 hover:bg-gray-50"
                )}
              >
                <TableCell
                  className={cn(
                    "font-medium",
                    darkMode ? "text-gray-100" : "text-gray-900"
                  )}
                >
                  {item.name}
                </TableCell>
                <TableCell
                  className={cn(darkMode ? "text-gray-300" : "text-gray-600")}
                >
                  {item.sku}
                </TableCell>
                <TableCell
                  className={cn(darkMode ? "text-gray-300" : "text-gray-600")}
                >
                  {item.category}
                </TableCell>
                <TableCell
                  className={cn(darkMode ? "text-gray-300" : "text-gray-600")}
                >
                  {item.quantity}
                </TableCell>
                <TableCell
                  className={cn(darkMode ? "text-gray-300" : "text-gray-600")}
                >
                  {item.price}
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      item.status === "In Stock"
                        ? "default"
                        : item.status === "Low Stock"
                        ? "secondary"
                        : "destructive"
                    }
                  >
                    {item.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default InventoryTable;
