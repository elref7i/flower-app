import React from "react";
import { TableHeader, TableHead, TableRow } from "@/components/ui/table";
export default function TableHeaderComponent() {
  return (
    <TableHeader>
      <TableRow className="bg-gray-50">
        <TableHead className="font-medium text-gray-700">Name</TableHead>
        <TableHead className="font-medium text-gray-700">Price</TableHead>
        <TableHead className="font-medium text-gray-700">Stock</TableHead>
        <TableHead className="font-medium text-gray-700">Sales</TableHead>
        <TableHead className="font-medium text-gray-700">Ratings</TableHead>
        <TableHead className="font-medium text-gray-700 text-right"></TableHead>
      </TableRow>
    </TableHeader>
  );
}
