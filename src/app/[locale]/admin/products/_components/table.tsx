"use client";

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

import TableHeaderComponent from "./table-header";
import { useDeleteProduct } from "../_hooks/use-products";
import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";

// Formate Stock
const formatStock = (stock: number) => {
  if (stock <= 10 && stock > 0) {
    return <span className="text-red-500 font-medium">{stock}</span>;
  }
  if (stock === 0 || stock < 0) {
    return <span className="text-red-500 font-medium">0</span>;
  }
  return stock.toLocaleString();
};

export default function TableComponent({ products }: Products) {
  const { deleteProductMutation, isPending, isSuccess } = useDeleteProduct();
  return (
    <Table>
      {/* Header */}
      <TableHeaderComponent />

      {/* Body */}
      <TableBody>
        {products.map((product) => (
          <TableRow key={product._id} className="hover:bg-maroon-50">
            {/*Title  */}
            <TableCell className="font-medium line-clamp-1 text-nowrap max-w-56">
              {product.title}
            </TableCell>

            {/* Price */}
            <TableCell>{product.price}</TableCell>

            {/* Quantity */}
            <TableCell>{formatStock(product.quantity)}</TableCell>

            {/* Sold */}
            <TableCell>{product.sold.toLocaleString()}</TableCell>

            {/* Rate */}
            <TableCell>
              <div className="flex items-center gap-1">
                <span className="font-medium">{product.rateAvg}/5</span>
                <span className="text-gray-500">({product.rateCount})</span>
              </div>
            </TableCell>

            {/* Actions */}
            <TableCell className="text-right">
              <div className="flex items-center justify-end gap-2">
                {/* Edit */}
                <Button
                  variant="ghost"
                  size="sm"
                  // onClick={() => deleteProductMutation(product._id)}
                  className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                >
                  <Edit className="w-4 h-4 mr-1" />
                  Edit
                </Button>

                {/* Delete */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => deleteProductMutation(product._id)}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <Trash2 className="w-4 h-4 mr-1" />
                  Delete
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
