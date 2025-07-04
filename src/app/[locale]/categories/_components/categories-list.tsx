"use client";
import PaginationComponent from "@/components/common/pagination-component";
import { useCategories } from "../hooks/use-categories";
import { useSearchParams } from "next/navigation";

export default function CategoriesList() {
  // SearchParams
  const searchParams = useSearchParams();

  const page = parseInt(searchParams.get("page") || "1", 10);

  //Queries
  const { payload, isLoading, isFetched } = useCategories(page);

  if (isLoading && isFetched) return <p>not Found</p>;

  return (
    <div className="py-20">
      {payload?.metadata && <PaginationComponent metaData={payload && payload.metadata} />}
    </div>
  );
}
