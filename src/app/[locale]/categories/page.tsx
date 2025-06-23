"use client";
import PaginationComponent from "@/components/common/pagination-component";
import { useCategories } from "./hooks/use-categories";

export default function page(searchParams: SearchParams) {
  const { payload, isLoading, isFetched } = useCategories(searchParams);

  console.log("searchParams", searchParams);

  return (
    <div className="py-20">
      {/* <PaginationComponent metaData={payload && payload.metadata} /> */}
    </div>
  );
}
