import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils/cn";
import React from "react";

export default function page() {
  return (
    <div className="m-10">
      <h1>Products</h1>
      <Link href="products/add-product" className={cn(buttonVariants(), "font-semibold my-10")}>
        add product
      </Link>
    </div>
  );
}
