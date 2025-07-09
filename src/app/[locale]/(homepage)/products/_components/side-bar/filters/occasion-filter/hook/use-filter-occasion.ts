import { useRouter } from "@/i18n/navigation";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

// Hook to filer products by add occasion in search params
export default function useFilterOccasion() {
  // Hook to fetch paginated queries
  const {
    data: payload,
    isLoading,
    error,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery<APIResponse<PaginatedResponse<FetchOccasionsResponse>>>({
    // Query key
    queryKey: ["occasions"],

    // Query function to fetch data depends on current page
    queryFn: async ({ pageParam }) => {
      // Request on route handler to get data
      const response = await fetch(`/api/occasions/get-occasions?limit=${6}&page=${pageParam}`);

      //  if promise rejected
      if (!response.ok) throw new Error("Can't get Occasions");

      const payload: APIResponse<PaginatedResponse<FetchOccasionsResponse>> = await response.json();

      //  Condition if payload  doesn't accepted
      if (payload.message !== "success") throw new Error(payload.message);
      return payload;
    },

    // initial page to fetch
    initialPageParam: 1,

    // Pass next page number to function
    getNextPageParam: (last) => {
      if (last.metadata.currentPage === last.metadata.totalPages) return undefined;
      return last.metadata.currentPage + 1;
    },
  });

  // Hooks
  const searchParams = useSearchParams();
  const router = useRouter();
  const loadMore = useRef<HTMLDivElement | null>(null);

  // Add category to search params
  function handleOccasion(name: string) {
    const createSearchParam = new URLSearchParams(searchParams.toString());
    createSearchParam.set("occasion", name.toLocaleLowerCase());
    router.push(`?${createSearchParam}`, { scroll: false });
  }

  // Get all occasions from paginated data
  const occasions = payload?.pages.flatMap((page) => {
    return page.occasions;
  });

  //  Hook to check if the user scrolled to the last element then fetch next page
  useEffect(() => {
    if (!hasNextPage || isFetchingNextPage || isLoading || !loadMore.current) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchNextPage();
      }
    });

    // Add observer to element
    observer.observe(loadMore.current);
    return () => {
      observer.disconnect();
    };
  }, [hasNextPage, isFetchingNextPage, isLoading, fetchNextPage]);

  return {
    error,
    isLoading,
    loadMore,
    occasions,
    handleOccasion,
    searchParams,
    isFetchingNextPage,
  };
}
