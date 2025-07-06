import React from "react";
import CategoriesCover from "@/components/layout/categories-cover/cover";

export default function CategoriesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <CategoriesCover />
      {children}
    </div>
  );
}
