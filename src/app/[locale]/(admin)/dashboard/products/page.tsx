import PaginationComponent from "@/components/common/pagination-component";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pagination } from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllProducts } from "@/lib/api/products.api";
import { Search, Plus, Edit, Trash2 } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: string;
  stock: number;
  sales: number;
  rating: number;
  reviews: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Wedding Flower",
    price: "440 EGP",
    stock: 345629,
    sales: 1606,
    rating: 3.5,
    reviews: 30,
  },
  {
    id: 1,
    name: "Wedding Flower",
    price: "440 EGP",
    stock: 345629,
    sales: 1606,
    rating: 3.5,
    reviews: 30,
  },
  {
    id: 1,
    name: "Wedding Flower",
    price: "440 EGP",
    stock: 345629,
    sales: 1606,
    rating: 3.5,
    reviews: 30,
  },
  {
    id: 1,
    name: "Wedding Flower",
    price: "440 EGP",
    stock: 345629,
    sales: 1606,
    rating: 3.5,
    reviews: 30,
  },
  {
    id: 1,
    name: "Wedding Flower",
    price: "440 EGP",
    stock: 345629,
    sales: 1606,
    rating: 3.5,
    reviews: 30,
  },
  {
    id: 1,
    name: "Wedding Flower",
    price: "440 EGP",
    stock: 345629,
    sales: 1606,
    rating: 3.5,
    reviews: 30,
  },
  {
    id: 1,
    name: "Wedding Flower",
    price: "440 EGP",
    stock: 345629,
    sales: 1606,
    rating: 3.5,
    reviews: 30,
  },
  {
    id: 1,
    name: "Wedding Flower",
    price: "440 EGP",
    stock: 345629,
    sales: 1606,
    rating: 3.5,
    reviews: 30,
  },
  {
    id: 1,
    name: "Wedding Flower",
    price: "440 EGP",
    stock: 345629,
    sales: 1606,
    rating: 3.5,
    reviews: 30,
  },
  {
    id: 1,
    name: "Wedding Flower",
    price: "440 EGP",
    stock: 345629,
    sales: 1606,
    rating: 3.5,
    reviews: 30,
  },
  {
    id: 1,
    name: "Wedding Flower",
    price: "440 EGP",
    stock: 345629,
    sales: 1606,
    rating: 3.5,
    reviews: 30,
  },
  {
    id: 1,
    name: "Wedding Flower",
    price: "440 EGP",
    stock: 345629,
    sales: 1606,
    rating: 3.5,
    reviews: 30,
  },
  {
    id: 2,
    name: "Wedding Flower",
    price: "440 EGP",
    stock: 345629,
    sales: 1606,
    rating: 3.5,
    reviews: 30,
  },
  {
    id: 3,
    name: "Wedding Flower",
    price: "440 EGP",
    stock: 4,
    sales: 1606,
    rating: 3.5,
    reviews: 30,
  },
  {
    id: 4,
    name: "Wedding Flower",
    price: "440 EGP",
    stock: 345629,
    sales: 1606,
    rating: 3.5,
    reviews: 30,
  },
  {
    id: 5,
    name: "Wedding Flower",
    price: "440 EGP",
    stock: 345629,
    sales: 1606,
    rating: 3.5,
    reviews: 30,
  },
  {
    id: 6,
    name: "Wedding Flower",
    price: "440 EGP",
    stock: 0,
    sales: 1606,
    rating: 3.5,
    reviews: 30,
  },
  {
    id: 7,
    name: "Wedding Flower",
    price: "440 EGP",
    stock: 345629,
    sales: 1606,
    rating: 3.5,
    reviews: 30,
  },
  {
    id: 8,
    name: "Wedding Flower",
    price: "440 EGP",
    stock: 345629,
    sales: 1606,
    rating: 3.5,
    reviews: 30,
  },
  {
    id: 9,
    name: "Wedding Flower",
    price: "440 EGP",
    stock: 3,
    sales: 1606,
    rating: 3.5,
    reviews: 30,
  },
  {
    id: 10,
    name: "Wedding Flower",
    price: "440 EGP",
    stock: 345629,
    sales: 1606,
    rating: 3.5,
    reviews: 30,
  },
  {
    id: 11,
    name: "Wedding Flower",
    price: "440 EGP",
    stock: 345629,
    sales: 1606,
    rating: 3.5,
    reviews: 30,
  },
  {
    id: 12,
    name: "Wedding Flower",
    price: "440 EGP",
    stock: 345629,
    sales: 1606,
    rating: 3.5,
    reviews: 30,
  },
];

export default async function ProductsPage() {
  const data = await getAllProducts();

  console.log(data.metadata);

  const formatStock = (stock: number) => {
    if (stock <= 10 && stock > 0) {
      return <span className="text-red-500 font-medium">{stock}</span>;
    }
    if (stock === 0) {
      return <span className="text-red-500 font-medium">0</span>;
    }
    return stock.toLocaleString();
  };

  // const handleEdit = (id: number) => {
  //   console.log("Edit product:", id);
  // };

  // const handleDelete = (id: number) => {
  //   console.log("Delete product:", id);
  // };

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
        <Input
          placeholder="Search..."
          // value={searchTerm}
          // onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 max-w-md"
        />
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="font-medium text-gray-700">Name</TableHead>
              <TableHead className="font-medium text-gray-700">Price</TableHead>
              <TableHead className="font-medium text-gray-700">Stock</TableHead>
              <TableHead className="font-medium text-gray-700">Sales</TableHead>
              <TableHead className="font-medium text-gray-700">Ratings</TableHead>
              <TableHead className="font-medium text-gray-700 text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id} className="hover:bg-gray-50">
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{formatStock(product.stock)}</TableCell>
                <TableCell>{product.sales.toLocaleString()}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">{product.rating}/5</span>
                    <span className="text-gray-500">({product.reviews})</span>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      // onClick={() => handleEdit(product.id)}
                      className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                    >
                      <Edit className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      // onClick={() => handleDelete(product.id)}
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
      </div>

      <PaginationComponent metaData={data?.metadata} />
    </div>
  );
}
