import { useInfiniteQuery } from "@tanstack/react-query";
import { useRef } from "react";

export default function useGetInfiniteOccasion() {
  const loadMore = useRef<HTMLDivElement | null>(null);
  // Hook to fetch paginated queries
  const {
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    data: payload,
    fetchNextPage,
    error,
  } = useInfiniteQuery<APIResponse<PaginatedResponse<{ occasions: Occasion[] }>>>({
    // Query key
    queryKey: ["occasions"],

    // Query function to fetch data depends on current page
    queryFn: async ({ pageParam }) => {
      // Request on route handler to get data
      const response = await fetch(`/api/occasions/get-occasions?page=${pageParam}&limit=7`);

      //  if promise rejected
      if (!response.ok) throw new Error("Can't get Categories");

      const payload: APIResponse<PaginatedResponse<{ occasions: Occasion[] }>> =
        await response.json();

      //  Condition if payload  doesn't accepted
      if ("error" in payload) throw new Error(payload.error || "Invalid response");
      if (payload.message !== "success") {
        throw new Error(payload.message || "Invalid response");
      }
      return payload;
    },

    // initial page to fetch
    initialPageParam: 1,

    // Pass next page number to function
    getNextPageParam: (lastPage) => {
      // @ts-expect-error
      if (lastPage.metadata.currentPage === lastPage.metadata.totalPages) return undefined;
      // @ts-expect-error
      return lastPage.metadata.currentPage + 1;
    },
  });

  // Get all categories from paginated data
  const occasions: Occasion[] =
    payload?.pages.flatMap((page) => {
      // @ts-expect-error
      return page.occasions;
    }) || [];

  return { isLoading, occasions, loadMore, fetchNextPage, hasNextPage, isFetchingNextPage, error };
}
