"use client";
import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { useRouter } from "@/i18n/navigation";
import useCategoriesPaginated from "../_hooks/useCategoriesTable";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";

export default function CategoriesTable() {
  // Hooks
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const { data } = useCategoriesPaginated(page, search);

  // Variables
  const categories = data?.categories || [];
  const totalPages = data?.metadata?.totalPages || 1;

  // Routing
  const router = useRouter();

  // Translation
  const t = useTranslations();

  return (
    <div className="w-full mx-auto">
      {/* Search Input */}
      <Input
        className="w-full my-4"
        placeholder="Search categories..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      {/* Table */}
      <Table className="rounded-lg ">
        {/* Table Header */}
        <TableHeader className=" rounded-lg bg-zinc-50">
          <TableRow className="">
            <TableHead className="w-48 text-black">{t("name-lable")}</TableHead>
            <TableHead className="text-black">{t("products-lable")}</TableHead>
            <TableHead className="w-36"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Table Rows */}
          {categories.map((category: Category) => (
            <TableRow key={category._id} className="hover:bg-red-100">
              <TableCell>{category.name}</TableCell>
              <TableCell className={category.productsCount < 5 ? "text-red-500" : ""}>
                {category.productsCount} products
              </TableCell>
              <TableCell>
                {/* Buttons */}
                <div className="flex items-center gap-2">
                  {/* Edit Button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-blue-600 bg-[#0063D01A]"
                    onClick={() =>
                      router.push(`/dashboard/categories/editCategory/${category._id}`)
                    }
                  >
                    <Pencil className="w-4 h-4 mr-1" />
                    {t("edit-button")}
                  </Button>

                  {/* Delete Button */}
                  <Button variant="ghost" size="sm" className="text-red-600 bg-[#FF00001A]">
                    <Trash2 className="w-4 h-4 mr-1" />
                    {t("delete-button")}
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <Pagination className="mt-4">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={() => setPage((p) => Math.max(p - 1, 1))} />
          </PaginationItem>

          {Array.from({ length: totalPages }).map((_, i) => (
            <PaginationItem key={i}>
              <PaginationLink isActive={page === i + 1} onClick={() => setPage(i + 1)}>
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext onClick={() => setPage((p) => Math.min(p + 1, totalPages))} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
