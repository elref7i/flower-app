"use client";
import PaginationComponent from "@/components/common/pagination-component";
import { useCategories } from "./hooks/use-categories";
import { useRouter } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";

export default function page() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = parseInt(searchParams.get("page") || "1", 10);

  console.log(page);

  const { payload, isLoading, isFetched } = useCategories(page);

  console.log(payload);

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());
    router.push(`?${params.toString()}`);
  };

  console.log("searchParams", searchParams);

  if (isLoading && isFetched) return <p>not Found</p>;

  return (
    <div className="py-20">
      <button
        onClick={() => {
          handlePageChange(1);
          console.log(searchParams);
        }}
      >
        Reais
      </button>
      {payload?.metadata && (
        <PaginationComponent
          metaData={payload && payload.metadata}
          handlePageChange={handlePageChange}
        />
      )}
    </div>
  );
}
