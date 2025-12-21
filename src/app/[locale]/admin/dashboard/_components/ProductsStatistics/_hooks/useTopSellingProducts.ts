import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchProductStats } from "@/lib/api/products.api";

export function useTopSellingProducts() {
  const {
    data: payload,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ["product-stats"],
    queryFn: ({ pageParam = 1 }) => fetchProductStats(pageParam),
    getNextPageParam: (lastPage) => {
      const { currentPage, totalPages } = lastPage.metadata;
      return currentPage < totalPages ? currentPage + 1 : undefined;
    },
    initialPageParam: 1,
  });

  const products = payload?.pages.flatMap((page) => page.products) || [];

  return { products, fetchNextPage, hasNextPage, isLoading, isError, payload };
}
