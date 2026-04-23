import { useRouter } from "@/i18n/navigation";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

// Hook to filer products by add category in search params
export default function useCategoryFilter() {
  // Hook to fetch paginated queries
  const {
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    data: payload,
    fetchNextPage,
    error,
  } = useInfiniteQuery<APIResponse<PaginatedResponse<{categories: Category[]}>>>({
    // Query key
    queryKey: ["categories"],

    // Query function to fetch data depends on current page
    queryFn: async ({ pageParam }) => {
      // Request on route handler to get data
      const response = await fetch(`/api/categories/get-categories?page=${pageParam}&limit=7`);

      //  if promise rejected
      if (!response.ok) throw new Error("Can't get Categories");

      const payload = await response.json();

      //  Condition if payload  doesn't accepted
      if (payload.message !== "success") {
        throw new Error(payload.message || "Invalid response");
      }
      return payload;
    },

    // initial page to fetch
    initialPageParam: 1,

    // Pass next page number to function
    getNextPageParam: (lastPage) => {
      if ("error" in lastPage) return undefined;
      if (lastPage.metadata.currentPage === lastPage.metadata.totalPages) return undefined;
      return lastPage.metadata.currentPage + 1;
    },
  });

  // hooks
  const searchParams = useSearchParams();
  const router = useRouter();
  const loadMore = useRef<HTMLDivElement | null>(null);

  //  Hook to check if the user scrolled to the last element then fetch next page
  useEffect(() => {
    if (!hasNextPage || isFetchingNextPage || isLoading || !loadMore.current) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchNextPage();
      }
    });
    observer.observe(loadMore?.current);

    return () => {
      observer.disconnect();
    };
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  // Add category to search params
  function handleCategory(name: string) {
    const createSearchParam = new URLSearchParams(searchParams.toString());
    createSearchParam.set("category", name);
    router.push(`?${createSearchParam}`, { scroll: false });
  }

  // Get all categories from paginated data
  const categories = payload?.pages.flatMap((page) => {
    return "error" in page ? [] : page.categories;
  });

  return {
    error,
    isLoading,
    loadMore,
    categories,
    handleCategory,
    searchParams,
    isFetchingNextPage,
  };
}
