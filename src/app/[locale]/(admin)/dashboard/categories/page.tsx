import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import React from "react";
import CategoriesTable from "./_components/Categories-table";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export default async function page() {
  const t = getTranslations();

  return (
    <section className="p-6">
      {/* Header */}
      <div className="flex justify-between ">
        <h2 className="text-zinc-800 font-semibold text-2xl dark:text-zinc-200">All Categories</h2>
        <Link href="categories/addCategory">
          <Button className="bg-maroon-600 text-white">
            <Plus /> Add a new category
          </Button>
        </Link>
      </div>

      {/* Table */}
      <CategoriesTable />
    </section>
  );
}
