import PaginationComponent from "@/components/common/pagination-component";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus } from "lucide-react";
import TableComponent from "./_components/table";
import { getAllProducts } from "@/lib/api/products.api";
import { Suspense } from "react";

export default async function ProductsPage() {
  // Fetch Data
  const data = await getAllProducts();

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">All Products</h1>
        <Button className="bg-red-600 hover:bg-red-700 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Add a new product
        </Button>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input placeholder="Search..." className="pl-10 max-w-md" />
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-lg border">
        <Suspense fallback={"...loading"}>
          <TableComponent products={data?.products} />
        </Suspense>
      </div>

      {/*  Pagination */}
      <PaginationComponent metaData={data?.metadata} />
    </div>
  );
}
